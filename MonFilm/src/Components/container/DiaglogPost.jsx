/** @format */

import React, { useCallback, useState } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Toolbar,
  Typography,
  Button,
} from "@mui/material";
import ReactQuill, { Quill } from "react-quill";
import "react-quill/dist/quill.snow.css";
import "quill-emoji/dist/quill-emoji.css";
import * as QuillEmoji from "quill-emoji";
import { useDropzone } from "react-dropzone";
import { postContent } from "../services/postService";
import { jwtDecode } from "jwt-decode";
// Thêm emoji module vào Quill
Quill.register("modules/emoji", QuillEmoji);

const modules = {
  toolbar: [
    ["bold", "italic", "underline", "strike"],
    [{ list: "ordered" }, { list: "bullet" }],
    ["link", "emoji"],
    [{ color: [] }, { background: [] }],
    ["clean"],
  ],
  "emoji-toolbar": true,
  "emoji-textarea": false,
  "emoji-shortname": true,
};
const formats = [
  "bold",
  "italic",
  "underline",
  "strike",
  "list",
  "bullet",
  "link",
  "emoji",
  "color",
  "background",
];
const DialogPost = ({ open, onClose, addNewPost }) => {
  const [content, setContent] = useState("");
  const [uploadedImage, setUploadedImage] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const { getRootProps, getInputProps } = useDropzone({
    accept: {
      "image/jpeg": [],
      "image/png": [],
      "image/gif": [],
      "image/webp": [],
      "image/svg+xml": [],
    },
    maxFiles: 1,
    maxSize: 20 * 1024 * 1024,
    onDrop: (acceptedFiles) => {
      const file = acceptedFiles[0];
      const reader = new FileReader();
      reader.onload = () => {
        setUploadedImage(reader.result);
      };
      reader.readAsDataURL(file);
    },
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!content.trim()) {
      alert("Please enter article content");
      return;
    }

    const token = localStorage.getItem("token");
    if (!token) {
      alert("Please login to post!");
      return;
    }

    try {
      setIsSubmitting(true);
      setLoading(true);

      const decodedToken = jwtDecode(token);
      const userId = decodedToken.userId;
      const images = uploadedImage ? [{ image_url: uploadedImage }] : [];

      const response = await postContent({
        userId,
        content: content.trim(),
        images,
      });

      if (response?.success) {
        const currentUser = {
          id: userId,
          username: localStorage.getItem("username"),
        };
        console.log(currentUser, "currentUser");
        const newPost = {
          ...response.data,
          User: currentUser,
        };
        addNewPost(newPost);
        onClose();
        setContent("");
        setUploadedImage(null);
      }
    } catch (error) {
      console.error("Error creating post:", error);
      alert(error.message || "An error occurred while posting.");
    } finally {
      setIsSubmitting(false);
      setLoading(false);
    }
  };

  const modules = {
    toolbar: [
      [{ header: [1, 2, false] }],
      ["bold", "italic", "underline", "strike", "blockquote"],
      [{ list: "ordered" }, { list: "bullet" }],
      ["link", "image"],
      ["clean"],
    ],
  };

  const formats = [
    "header",
    "bold",
    "italic",
    "underline",
    "strike",
    "blockquote",
    "list",
    "bullet",
    "link",
    "image",
  ];

  return (
    <Dialog open={open} onClose={onClose} fullWidth maxWidth="sm">
      <DialogTitle>
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            Create new post
          </Typography>
          <Button color="secondary" onClick={onClose} disabled={isSubmitting}>
            Close
          </Button>
        </Toolbar>
      </DialogTitle>

      <DialogContent dividers>
        <ReactQuill
          theme="snow"
          value={content}
          onChange={setContent}
          modules={modules}
          formats={formats}
          placeholder="Write something..."
          style={{ height: "200px", marginBottom: "20px" }}
        />

        <div
          {...getRootProps()}
          style={{
            border: "2px dashed #ccc",
            padding: "20px",
            textAlign: "center",
            borderRadius: "5px",
            cursor: "pointer",
            marginTop: "20px",
          }}
        >
          <input {...getInputProps()} />
          <Typography variant="body2" color="textSecondary">
            Drag and drop photos here or click to select photos
          </Typography>
        </div>

        {uploadedImage && (
          <div style={{ textAlign: "center", marginTop: "15px" }}>
            <Typography variant="body2" color="textSecondary" mb={1}>
              Uploaded photos:
            </Typography>
            <img
              src={uploadedImage}
              alt="Preview"
              style={{ maxWidth: "100%", height: "auto", borderRadius: "5px" }}
            />
          </div>
        )}
      </DialogContent>

      <DialogActions>
        <Button onClick={onClose} color="secondary" disabled={isSubmitting}>
          Hủy
        </Button>
        <Button
          variant="contained"
          color="primary"
          onClick={handleSubmit}
          disabled={isSubmitting}
        >
          {isSubmitting ? "Posting..." : "Posted"}
        </Button>
      </DialogActions>
    </Dialog>
  );
};
export default DialogPost;
