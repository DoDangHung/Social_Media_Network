/** @format */

// /** @format */

// // services/reactionService.js
// const { Reaction, Comment, User } = require("../models");
// const handleReaction = async (data) => {
//   try {
//     const existingReaction = await Reaction.findOne({
//       where: {
//         comment_id: data.comment_id,
//         user_id: data.user_id,
//       },
//     });

//     if (existingReaction) {
//       // Nếu cùng loại reaction -> xóa (unlike)
//       if (existingReaction.type === data.type) {
//         await existingReaction.destroy();
//         return { action: "removed", data: null };
//       }
//       // Nếu khác loại -> update
//       const updatedReaction = await existingReaction.update({
//         type: data.type,
//       });
//       return { action: "updated", data: updatedReaction };
//     }

//     // Tạo mới
//     const newReaction = await Reaction.create({
//       type: data.type,
//       user_id: data.user_id,
//       comment_id: data.comment_id,
//     });
//     return { action: "created", data: newReaction };
//   } catch (error) {
//     throw new Error("Error handling reaction: " + error.message);
//   }
// };

// const getReactionsByCommentId = async (commentId) => {
//   try {
//     const reactions = await Reaction.findAll({
//       where: { comment_id: commentId },
//       include: [
//         {
//           model: User,
//           as: "user",
//           attributes: ["id", "username"],
//         },
//       ],
//     });
//     return reactions;
//   } catch (error) {
//     throw new Error("Error fetching reactions: " + error.message);
//   }
// };

// module.exports = {
//   handleReaction,
//   getReactionsByCommentId,
// };
