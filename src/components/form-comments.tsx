"use client";

import { ChangeEvent, useState } from "react";

const FormComment = () => {
  const [comment, setComment] = useState<string>("");
  const handleCommentChange = (e: ChangeEvent<HTMLInputElement>) => {
    setComment(e.target.value);
  };

  const handleSubmitComment = () => {
    console.log(comment);
  };
  return (
    <div>
      <div className="mt-9">
        <label htmlFor="comment" className="block text-gray-700 text-sm font-bold mb-2">
          Add Comment
        </label>
        <input type="text" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" name="comment" placeholder="Enter comment" value={comment} onChange={handleCommentChange} />
      </div>
      <button onClick={handleSubmitComment} className="bg-blue-500 text-white px-4 py-2 mt-5 rounded-md hover:bg-blue-600">
        Submit
      </button>
    </div>
  );
};

export default FormComment;
