/** @format */

import React, { useState, useEffect, useCallback, memo } from "react";
import { getAllPost, postByUser } from "../services/postService";
import Comment from "../utils/Coments";
import {
  createReaction,
  getCurrentUser,
  getReaction,
} from "../services/reactionService";
import { getUserById } from "../services/userService";
const API_UPLOAD_IMAGES = "http://localhost:8080";

const PostList = ({ userId, postsContent }) => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [postsLoading, setPostsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [reactions, setReactions] = useState({});
  const [reactionLoadingStates, setReactionLoadingStates] = useState({});
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    if (!(date instanceof Date) || isNaN(date)) {
      return "";
    }
    return date.toLocaleDateString("vi-VN", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  const formatTime = (dateString) => {
    const date = new Date(dateString);
    if (!(date instanceof Date) || isNaN(date)) {
      return "";
    }
    return date.toLocaleTimeString("vi-VN", {
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  const groupPostsByDate = (posts) => {
    const grouped = posts.reduce((groups, post) => {
      const dateStr = formatDate(post.createdAt);

      if (!groups[dateStr]) {
        groups[dateStr] = [];
      }

      groups[dateStr].push({
        ...post,
        time: formatTime(post.createdAt),
      });

      return groups;
    }, {});

    return Object.entries(grouped).sort((a, b) => {
      return new Date(b[0]) - new Date(a[0]);
    });
  };

  const getImageGridClass = (imageCount) => {
    switch (imageCount) {
      case 1:
        return "grid-cols-1";
      case 2:
        return "grid-cols-2";
      case 3:
        return "grid-cols-2";
      default:
        return "grid-cols-2";
    }
  };

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        setLoading(true);
        const response = await getAllPost();
        console.log("Full response:", response);

        if (!response?.posts) {
          console.error("No posts data found in response");
          setPosts([]);
          return;
        }

        const handleNewPost = async (newPost) => {
          if (newPost && !newPost.User) {
            try {
              const userResponse = await getUserById(newPost.user_id);
              newPost.User = userResponse.user;
            } catch (error) {
              console.error("Error fetching user info:", error);
            }
          }
          return newPost;
        };
        const processPosts = await Promise.all(
          response.posts.map(async (post) => {
            if (!post.User) {
              return await handleNewPost(post);
            }
            return post;
          })
        );
        const sortedPosts = processPosts.sort(
          (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
        );
        console.log("Sorted posts:", sortedPosts);

        setPosts(sortedPosts);
        setError(null);
      } catch (error) {
        console.error("Error fetching posts:", error);
        setPosts([]);
        setError(
          error.message || "An error occurred while loading the article."
        );
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, [userId]);

  useEffect(() => {
    const fetchReactions = async () => {
      try {
        const reactionPromises = posts.map(async (post) => {
          try {
            const response = await getReaction(post.id);
            setReactions((prev) => ({
              ...prev,
              [post.id]: response.data,
            }));
          } catch (error) {
            console.error(
              `Error fetching reactions for post ${post.id}:`,
              error
            );
          }
        });

        await Promise.all(reactionPromises);
      } catch (error) {
        console.error("Error fetching reactions:", error);
      }
    };

    if (posts.length > 0) {
      fetchReactions();
    }
  }, [posts]);

  if (loading) {
    return (
      <div className="container mx-auto p-4">
        <div className="flex justify-center items-center min-h-[200px]">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500"></div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="container mx-auto p-4">
        <div className="text-center text-red-500 py-8">{error}</div>
      </div>
    );
  }

  if (posts.length === 0) {
    return (
      <div className="container mx-auto p-4">
        <div className="text-center text-gray-500 py-8">
          Chưa có bài viết nào
        </div>
      </div>
    );
  }
  const ReactionButton = memo(({ postId, type, active, onClick, emoji }) => (
    <button
      onClick={onClick}
      className={`flex items-center gap-1 px-3 py-1 rounded transition-colors ${
        active
          ? `bg-${
              type === "LIKE" ? "blue" : type === "LOVE" ? "red" : "yellow"
            }-100 
             text-${
               type === "LIKE" ? "blue" : type === "LOVE" ? "red" : "yellow"
             }-600`
          : "text-gray-600 hover:bg-gray-100"
      } ${
        reactionLoadingStates[postId] ? "opacity-50 cursor-not-allowed" : ""
      }`}
      disabled={reactionLoadingStates[postId]}
    >
      <span role="img" aria-label={type.toLowerCase()}>
        {emoji}
      </span>
      {type}
    </button>
  ));

  const handleReaction = async (postId, type) => {
    try {
      // Set loading state for specific reaction button
      setReactionLoadingStates((prev) => ({
        ...prev,
        [postId]: true,
      }));

      const response = await createReaction(postId, type);
      const currentUser = getCurrentUser();

      // Update reactions based on the response
      if (response.action === "removed") {
        setReactions((prev) => ({
          ...prev,
          [postId]: (prev[postId] || []).filter(
            (r) => r.user_id !== currentUser.id
          ),
        }));
      } else if (response.action === "updated") {
        setReactions((prev) => ({
          ...prev,
          [postId]: prev[postId].map((r) =>
            r.user_id === currentUser.id ? { ...r, type } : r
          ),
        }));
      } else {
        // created
        const newReaction = {
          user_id: currentUser.id,
          type,
          post_id: postId,
        };
        setReactions((prev) => ({
          ...prev,
          [postId]: [...(prev[postId] || []), newReaction],
        }));
      }
    } catch (error) {
      alert(error.message);
    } finally {
      setReactionLoadingStates((prev) => ({
        ...prev,
        [postId]: false,
      }));
    }
  };

  const getUserReaction = (postId) => {
    const currentUser = getCurrentUser();
    if (!currentUser) return null;
    const postReactions = reactions[postId] || [];
    return postReactions.find((r) => r.user_id === currentUser.id)?.type;
  };

  const renderReactionCounts = (postId) => {
    const postReactions = reactions[postId] || [];

    const reactionCounts = postReactions.reduce((acc, reaction) => {
      acc[reaction.type] = (acc[reaction.type] || 0) + 1;
      return acc;
    }, {});

    // Tránh re-render không cần thiết
    return (
      <div className="flex gap-2 mt-2">
        {Object.entries(reactionCounts).map(([type, count]) => (
          <span
            key={`${postId}-${type}`}
            className="flex items-center gap-1 text-sm text-gray-600"
          >
            {type === "LIKE" && (
              <>
                <span role="img" aria-label="like">
                  👍
                </span>
                <span>{count}</span>
              </>
            )}
            {type === "LOVE" && (
              <>
                <span role="img" aria-label="love">
                  ❤️
                </span>
                <span>{count}</span>
              </>
            )}
            {type === "HAHA" && (
              <>
                <span role="img" aria-label="haha">
                  😂
                </span>
                <span>{count}</span>
              </>
            )}
          </span>
        ))}
      </div>
    );
  };

  return (
    <div className="container mx-auto p-4">
      <div className="side-bar-content-img">
        {groupPostsByDate(postsContent).map(([date, datePosts]) => (
          <div key={date} className="mb-8">
            {datePosts.map((post) => (
              <div
                key={post.id}
                className="bg-white rounded-lg shadow-sm p-4 mb-4"
              >
                {/* User info */}
                <div className="flex justify-between items-center mb-3">
                  <div className="flex items-center gap-2">
                    <div className="flex items-center gap-4">
                      <div
                        className="[aspect-ratio:1_/_1] rounded-full w-[fit-content] h-14 bg-center bg-no-repeat bg-cover"
                        style={{
                          backgroundImage: post.User?.avatar_url
                            ? `url("${API_UPLOAD_IMAGES}${post.User.avatar_url}")`
                            : 'url("https://cdn.usegalileo.ai/sdxl10/7c7c80d3-64e4-49bc-9b24-b7b552fcda58.png")',
                        }}
                      />
                    </div>
                    <div>
                      <div className="font-medium">
                        {post.User?.username || "Người dùng ẩn danh"}
                      </div>
                      <div className="text-sm text-gray-500">{post.time}</div>
                    </div>
                  </div>
                </div>

                {/* Post content */}
                {post.content && (
                  <div
                    className="text-gray-600 whitespace-pre-wrap mb-4"
                    dangerouslySetInnerHTML={{ __html: post.content }}
                  />
                )}

                {/* Post images */}
                {post.PostImages && post.PostImages.length > 0 && (
                  <div
                    className={`grid gap-2 ${getImageGridClass(
                      post.PostImages.length
                    )}`}
                  >
                    {post.PostImages.map((image, index) => (
                      <div
                        key={image.id}
                        className={`relative ${
                          post.PostImages.length === 3 && index === 0
                            ? "col-span-2"
                            : ""
                        }`}
                      >
                        <img
                          src={`${API_UPLOAD_IMAGES}${image.image_url}`}
                          alt={`Post image ${index + 1}`}
                          className="w-full h-full object-cover rounded-lg"
                        />
                      </div>
                    ))}
                  </div>
                )}

                {/* Reaction buttons */}
                <div className="flex items-center gap-4 mt-4">
                  <ReactionButton
                    type="LIKE"
                    emoji="👍"
                    active={getUserReaction(post.id) === "LIKE"}
                    onClick={() => handleReaction(post.id, "LIKE")}
                    loading={loading}
                  />
                  <ReactionButton
                    type="LOVE"
                    emoji="❤️"
                    active={getUserReaction(post.id) === "LOVE"}
                    onClick={() => handleReaction(post.id, "LOVE")}
                    loading={loading}
                  />
                  <ReactionButton
                    type="HAHA"
                    emoji="😂"
                    active={getUserReaction(post.id) === "HAHA"}
                    onClick={() => handleReaction(post.id, "HAHA")}
                    loading={loading}
                  />
                </div>

                {/* Reaction counts */}
                {renderReactionCounts(post.id)}

                {/* Comments section */}
                <div className="mt-4 border-t pt-4">
                  <Comment postId={post.id} />
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default PostList;
