/** @format */

import React, { useEffect, useState } from "react";
import "./HomeContent.scss";
import DotsThreeIcon from "../utils/DotThreeIcon";
import Comments from "../utils/Coments";
import DiaglogPost from "./DiaglogPost";
import UploadImg from "./UploadImg";
import SideBar from "./SideBar";
import PostList from "./PostList";
import Comment from "../utils/Coments";
import { getAllPost } from "../services/postService";
import DialogPost from "./DiaglogPost";
const HomeContent = () => {
  const [open, setOpen] = useState(false);
  const [posts, setPosts] = useState([]);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClickClose = () => {
    setOpen(false);
  };

  const addNewPost = (newPost) => {
    setPosts((prevPosts) => [newPost, ...prevPosts]);
  };

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await getAllPost();
        setPosts(response.posts || []);
      } catch (error) {
        console.error("Error fetching posts:", error);
      }
    };

    fetchPosts();
  }, []);
  return (
    <div>
      <div className=" home-content-container ">
        <div className="side-bar-content-container">
          <PostList postsContent={posts} />
        </div>
        <div className="layout-content-container flex flex-col">
          <div className="flex justify-center">
            <div className="flex flex-1 gap-3 max-w-[480px] flex-col items-stretch px-4 py-3">
              <button
                onClick={() => handleClickOpen()}
                className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-10 px-4 bg-[#019863] text-[#FFFFFF] text-sm font-bold leading-normal tracking-[0.015em] w-full"
              >
                <span className="truncate">Create post</span>
              </button>

              <DialogPost
                open={open}
                onClose={handleClickClose}
                addNewPost={addNewPost}
              />

              <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-10 px-4 bg-[#F4EFE6] text-[#1C160C] text-sm font-bold leading-normal tracking-[0.015em] w-full">
                <span className="truncate">Access now</span>
              </button>
            </div>
          </div>
          <div className="p-4">
            <div className="flex items-stretch justify-between gap-4 rounded-xl">
              <div className="flex flex-[2_2_0px] flex-col gap-4">
                <div className="flex flex-col gap-1">
                  <p className="text-[#1C160C] text-base font-bold leading-tight">
                    DoraWatch™
                  </p>
                  <p className="text-[#A18249] text-sm font-normal leading-normal">
                    See full content!
                  </p>
                </div>
                <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-8 px-4 flex-row-reverse bg-[#F4EFE6] text-[#1C160C] text-sm font-medium leading-normal w-fit">
                  <span className="truncate">Access now</span>
                </button>
              </div>
              <div
                className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-2xl flex-1"
                style={{
                  backgroundImage:
                    'url("https://cdn.usegalileo.ai/sdxl10/627f274d-1029-430c-931e-229a34dd4f3e.png")',
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeContent;
