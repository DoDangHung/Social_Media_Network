/** @format */

import React, { useState } from "react";
import { useDropzone } from "react-dropzone";

function UploadImg({ isOpen, onClose }) {
  const [uploadedImage, setUploadedImage] = useState(null);

  const { getRootProps, getInputProps } = useDropzone({
    accept: "image/*",
    maxFiles: 1,
    maxSize: 20 * 1024 * 1024,
    onDrop: (acceptedFiles) => {
      const file = acceptedFiles[0];
      const imageUrl = URL.createObjectURL(file);
      setUploadedImage(imageUrl);
    },
  });

  return (
    <div
      className={`fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 ${
        isOpen ? "block" : "hidden"
      }`}
    >
      <div className="bg-white rounded-lg shadow-lg w-96 p-5">
        {/* Header */}
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-bold">Upload photo</h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700"
          >
            &times;
          </button>
        </div>

        {/* Dropzone */}
        <div
          {...getRootProps()}
          className="border-2 border-dashed border-gray-300 rounded-md p-6 cursor-pointer hover:border-blue-500"
        >
          <input {...getInputProps()} />
          <p className="text-gray-600 text-center">
            Drag and drop photos here or click to select photos
          </p>
          <p className="text-sm text-gray-400 text-center mt-2">
            Maximum file size 5MB, only supports image formats
          </p>
        </div>

        {/* Preview ảnh */}
        {uploadedImage && (
          <div className="mt-4 text-center">
            <p className="text-sm font-medium mb-2">Uploaded photo:</p>
            <img
              src={uploadedImage}
              alt="Uploaded Preview"
              className="w-32 h-32 object-cover rounded-md mx-auto"
            />
          </div>
        )}

        {/* Footer */}
        <div className="flex justify-end mt-4">
          <button
            onClick={onClose}
            className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 mr-2"
          >
            Cancel
          </button>
          <button className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">
            Upload
          </button>
        </div>
      </div>
    </div>
  );
}

export default UploadImg;
