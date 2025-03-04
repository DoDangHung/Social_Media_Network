/** @format */

const { Comment, User, Reaction } = require("../models");

const createComment = async (data) => {
  try {
    const comment = await Comment.create({
      content: data.content,
      user_id: data.user_id,
      post_id: data.post_id,
    });
    return comment;
  } catch (error) {
    throw new Error("Error creating comment: " + error.message);
  }
};

const getCommentByPostId = async (postId) => {
  try {
    const comments = await Comment.findAll({
      where: { post_id: postId },
      include: [
        {
          model: User,
          attributes: ["id", "username"],
        },
      ],
      order: [["createdAt", "DESC"]],
    });
    return comments;
  } catch (error) {
    throw new Error("Error fetching comments: " + error.message);
  }
};

// const getCommentByPostId = async (postId) => {
//   try {
//     const comments = await Comment.findAll({
//       where: { postId },
//       include: [
//         {
//           model: User,
//           attributes: ["id", "username", "avatar_url"],
//         },
//       ],
//       order: [["createdAt", "DESC"]],
//     });
//     const formattedComments = comments.map((comment) => {
//       const reactionCounts = comment.Reactions.reduce((acc, reaction) => {
//         acc[reaction.type] = (acc[reaction.type] || 0) + 1;
//         return acc;
//       }, {});

//       // Chuyển đổi reactions thành format mong muốn
//       const reactions = Object.entries(reactionCounts).map(([type, count]) => ({
//         type,
//         count,
//         emoji: this.getEmojiForReactionType(type),
//       }));

//       return {
//         ...comment.toJSON(),
//         reactions,
//       };
//     });

//     return formattedComments;
//   } catch (error) {
//     throw new Error("Error creating comment: " + error.message);
//   }
// };

const deleteComment = async (comment_id, user_id) => {
  try {
    const comment = await Comment.findOne({
      where: { id: comment_id, user_id },
    });
    if (!comment) {
      throw new Error("Comment not found or unauthorized");
    }
    await comment.destroy();
    return true;
  } catch (error) {
    throw new Error("Error deleting comment: " + error.message);
  }
};

const updateComment = async (comment_id, user_id) => {
  try {
    const comment = await Comment.findOne({
      where: { id: comment_id, user_id },
    });
    if (!comment) {
      throw new Error("Comment not found or unauthorized");
    }

    await comment.update({ content });
    return comment;
  } catch (error) {
    throw new Error("Error updating comment: " + error.message);
  }
};

const handleReaction = async (data) => {
  try {
    // Kiểm tra xem user đã reaction comment này chưa
    const existingReaction = await Reaction.findOne({
      where: {
        comment_id: data.comment_id,
        user_id: data.user_id,
      },
    });

    if (existingReaction) {
      if (existingReaction.type === data.type) {
        // Nếu reaction giống nhau thì xóa reaction (toggle)
        await existingReaction.destroy();
        return null;
      } else {
        // Nếu reaction khác thì update
        existingReaction.type = data.type;
        await existingReaction.save();
        return existingReaction;
      }
    }

    // Tạo reaction mới nếu chưa có
    const newReaction = await Reaction.create({
      type: data.type,
      comment_id: data.comment_id,
      user_id: data.user_id,
    });

    return newReaction;
  } catch (error) {
    throw new Error("Error handling reaction: " + error.message);
  }
};

const getReactionsByComment = async (commentId) => {
  try {
    const reactions = await Reaction.findAll({
      where: { comment_id: commentId },
      include: [
        {
          model: User,
          as: "user",
          attributes: ["id", "username"],
        },
      ],
    });

    // Nhóm và đếm số lượng theo từng loại reaction
    const reactionCounts = reactions.reduce((acc, reaction) => {
      if (!acc[reaction.type]) {
        acc[reaction.type] = {
          count: 0,
          users: [],
        };
      }
      acc[reaction.type].count += 1;
      acc[reaction.type].users.push(reaction.user);
      return acc;
    }, {});

    return reactionCounts;
  } catch (error) {
    throw new Error("Error fetching reactions: " + error.message);
  }
};

const handlePostReactionService = async (data) => {
  try {
    const existingReaction = await Reaction.findOne({
      where: {
        post_id: data.post_id,
        user_id: data.user_id,
      },
    });
    if (existingReaction) {
      if (existingReaction.type === data.type) {
        await existingReaction.destroy();
        return {
          action: "removed",
          data: null,
        };
      }
      const updatedReaction = await existingReaction.update({
        type: data.type,
      });
      return {
        action: "updated",
        data: updatedReaction,
      };
    }
    const newReaction = await Reaction.create({
      type: data.type,
      user_id: data.user_id,
      post_id: data.post_id,
    });
    return {
      action: "created",
      data: newReaction,
    };
  } catch (error) {
    throw new Error("Error create posts reactions: " + error.message);
  }
};

const getReactionsByPostService = async (postId) => {
  try {
    const reaction = await Reaction.findAll({
      where: { post_id: postId },
      include: [
        {
          model: User,
          as: "user",
          attributes: ["id", "username"],
        },
      ],
    });
    return reaction;
  } catch (error) {
    throw new Error("Error fetching posts reactions: " + error.message);
  }
};
module.exports = {
  createComment,
  getCommentByPostId,
  deleteComment,
  updateComment,
  handleReaction,
  getReactionsByComment,
  handlePostReactionService,
  getReactionsByPostService,
};
