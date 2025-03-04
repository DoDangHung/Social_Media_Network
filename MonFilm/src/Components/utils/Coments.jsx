/** @format */

import React, { useState, useEffect, useRef } from "react";

const EmojiPicker = ({ onSelect, isVisible, setIsVisible }) => {
  const reactions = [
    { emoji: "👍", name: "like", label: "Like" },
    { emoji: "❤️", name: "love", label: "Love" },
    { emoji: "😆", name: "haha", label: "Haha" },
    { emoji: "😢", name: "sad", label: "Sad" },
    { emoji: "😠", name: "angry", label: "Angry" },
  ];

  const pickerRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (pickerRef.current && !pickerRef.current.contains(event.target)) {
        setIsVisible(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [setIsVisible]);

  if (!isVisible) return null;

  return (
    <div
      ref={pickerRef}
      className="absolute bottom-full mb-2 bg-white rounded-full shadow-lg p-2 flex gap-2 animate-fade-in z-50"
    >
      {reactions.map((reaction) => (
        <button
          key={reaction.name}
          onClick={() => {
            onSelect(reaction);
            setIsVisible(false);
          }}
          className="hover:scale-125 transition-transform duration-200 p-2 rounded-full hover:bg-gray-100"
          title={reaction.label}
        >
          {reaction.emoji}
        </button>
      ))}
    </div>
  );
};

const ReactionSummary = ({ reactions }) => {
  return (
    <div className="flex gap-1">
      {Object.entries(reactions).map(([type, data]) => (
        <div
          key={type}
          className="flex items-center bg-white rounded-full px-2 py-1 shadow-sm text-sm"
          title={`${data.users.map((u) => u.username).join(", ")}`}
        >
          {getReactionEmoji(type)} {data.count}
        </div>
      ))}
    </div>
  );
};

const getReactionEmoji = (type) => {
  const reactionMap = {
    like: "👍",
    love: "❤️",
    haha: "😆",
    sad: "😢",
    angry: "😠",
  };
  return reactionMap[type] || "👍";
};

const Comment = ({ postId }) => {
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState("");
  const [loading, setLoading] = useState(false);
  const [showEmojiPicker, setShowEmojiPicker] = useState(null);
  const [error, setError] = useState(null);
  const commentInputRef = useRef(null);

  const API_URL = import.meta.env?.VITE_API_URL || "http://localhost:8080";
  const userId = localStorage.getItem("userId");

  useEffect(() => {
    if (postId) {
      fetchComments();
    }
  }, [postId]);

  const fetchComments = async () => {
    try {
      setError(null);
      const response = await fetch(
        `${API_URL}/api/comments/posts/${postId}/comments`
      );

      if (!response.ok) {
        throw new Error(`Lỗi HTTP! Trạng thái: ${response.status}`);
      }

      const result = await response.json();

      if (result.error) {
        throw new Error(result.message);
      }

      const commentsWithReactions = await Promise.all(
        result.data.map(async (comment) => {
          const reactions = await fetchReactions(comment.id);
          return { ...comment, reactions };
        })
      );

      setComments(commentsWithReactions);
    } catch (error) {
      console.error("Fail to fetch Reaction:", error);
      setError("Fail to fetch Reaction. Please try again!.");
    }
  };

  const fetchReactions = async (commentId) => {
    try {
      const response = await fetch(`${API_URL}/api/comment/${commentId}`);
      const result = await response.json();
      return result.data;
    } catch (error) {
      console.error("Fail to fetch Reactions:", error);
      return {};
    }
  };

  const handleReaction = async (commentId, reaction) => {
    if (!userId) {
      setError("Please login before reactions");
      return;
    }

    try {
      const response = await fetch(`${API_URL}/api/comment/${commentId}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          type: reaction.name,
          user_id: userId,
        }),
      });

      if (!response.ok) {
        throw new Error("Error to add reactions");
      }

      await fetchComments(); // Refresh comments to update reactions
    } catch (error) {
      console.error("Error to add reactions:", error);
      setError("Error to add reactions. Please try again!.");
    }
  };

  const handleSubmitComment = async (e) => {
    e.preventDefault();
    if (!newComment.trim() || !userId) return;

    try {
      setLoading(true);
      setError(null);

      const commentData = {
        content: newComment.trim(),
        user_id: userId,
      };

      const response = await fetch(
        `${API_URL}/api/comments/posts/${postId}/comments`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(commentData),
        }
      );

      const result = await response.json();

      if (result.error) {
        throw new Error(result.message);
      }

      setNewComment("");
      await fetchComments();
    } catch (error) {
      console.error("Fail to post your comment:", error);
      setError("Fail to post your comment. Please try again!.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="mt-4">
      {error && (
        <div className="mb-4 p-3 bg-red-100 text-red-700 rounded-lg">
          {error}
        </div>
      )}

      <form onSubmit={handleSubmitComment} className="mb-4">
        <div className="flex items-center border rounded-lg bg-gray-50 p-2">
          <textarea
            ref={commentInputRef}
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
            className="flex-grow p-2 bg-transparent resize-none focus:outline-none"
            rows="2"
            placeholder="Write your comment..."
          />
          <button
            type="submit"
            disabled={loading || !newComment.trim() || !userId}
            className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {loading ? "Đang gửi..." : "Gửi"}
          </button>
        </div>
      </form>

      <div className="space-y-4">
        {comments.map((comment) => (
          <div key={comment.id} className="bg-gray-50 p-3 rounded-lg">
            <div className="flex items-start gap-2">
              <div className="flex-grow">
                <div className="flex items-center gap-2">
                  <span className="font-medium text-sm">
                    {comment.User?.username || "Anonymous User"}
                  </span>
                  <span className="text-xs text-gray-500">
                    {new Date(comment.createdAt).toLocaleDateString("vi-VN")}
                  </span>
                </div>
                <div className="mt-1 text-gray-700">{comment.content}</div>

                {comment.reactions &&
                  Object.keys(comment.reactions).length > 0 && (
                    <div className="mt-2">
                      <ReactionSummary reactions={comment.reactions} />
                    </div>
                  )}

                <div className="mt-2 relative">
                  <button
                    onClick={() =>
                      setShowEmojiPicker(
                        showEmojiPicker === comment.id ? null : comment.id
                      )
                    }
                    className="text-sm text-gray-500 hover:text-blue-500"
                  >
                    Add emotion
                  </button>

                  {showEmojiPicker === comment.id && (
                    <EmojiPicker
                      onSelect={(reaction) =>
                        handleReaction(comment.id, reaction)
                      }
                      isVisible={true}
                      setIsVisible={() => setShowEmojiPicker(null)}
                    />
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Comment;
