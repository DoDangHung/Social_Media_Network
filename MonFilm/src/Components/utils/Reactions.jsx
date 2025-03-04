/** @format */

import React, { useEffect, useState } from "react";
import {
  createOrUpdateReaction,
  getReactions,
} from "../services/reactionService";

const ReactionComponent = ({ targetType, targetId, userId }) => {
  const [reactions, setReactions] = useState([]);
  const [loading, setLoading] = useState(false);

  const reactionTypes = ["like", "love", "haha", "sad", "angry"];

  const fetchReactions = async () => {
    try {
      const data = await getReactions(targetType, targetId);
      setReactions(data.data || []);
    } catch (error) {
      console.error("Error fetching reactions:", error);
    }
  };

  const handleReaction = async (type) => {
    setLoading(true);
    try {
      await createOrUpdateReaction(targetType, targetId, type, userId);
      await fetchReactions(); // Refresh reactions
    } catch (error) {
      console.error("Error handling reaction:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchReactions();
  }, [targetId]);

  return (
    <div className="reaction-component">
      {reactionTypes.map((type) => (
        <button
          key={type}
          onClick={() => handleReaction(type)}
          disabled={loading}
        >
          {type.toUpperCase()}
        </button>
      ))}
      <div className="reaction-summary">
        {reactions.map((reaction) => (
          <span key={reaction.type}>
            {reaction.type}: {reaction.count}
          </span>
        ))}
      </div>
    </div>
  );
};

export default ReactionComponent;
