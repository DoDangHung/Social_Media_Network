/** @format */

// /** @format */

// const {
//   handleReaction,
//   getReactionsByComment,
// } = require("../Services/CommentsService");

// const createReactionController = async (req, res) => {
//   try {
//     const { commentId } = req.params;
//     const { type, user_id } = req.body;

//     if (!type || !user_id) {
//       return res.status(400).json({
//         error: true,
//         message: "Missing required fields",
//       });
//     }

//     const result = await handleReaction({
//       type,
//       user_id,
//       comment_id: commentId,
//     });

//     res.json({
//       error: false,
//       action: result.action,
//       data: result.data,
//     });
//   } catch (error) {
//     res.status(500).json({
//       error: true,
//       message: error.message,
//     });
//   }
// };

// const getReactionByPostController = async (req, res) => {
//   try {
//     const { commentId } = req.params;
//     const reactions = await getReactionsByComment(commentId);
//     res.json({
//       error: false,
//       data: reactions,
//     });
//   } catch (error) {
//     res.status(500).json({
//       error: true,
//       message: error.message,
//     });
//   }
// };

// module.exports = {
//   createReactionController,
//   getReactionByPostController,
// };
