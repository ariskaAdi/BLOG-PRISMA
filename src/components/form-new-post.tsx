"use client";

import { FormData } from "@/types/blog";
import { FormEvent, useState } from "react";
import ReactTextareaAutosize from "react-textarea-autosize";

const inputClass = "w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500";

const FormNewPost = () => {
  const [formData, setFormData] = useState<FormData>({
    title: "",
    content: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    e.preventDefault();
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(formData);
  };
  return (
    <form action="" className="max-w-md mx-auto p-4" onSubmit={handleSubmit}>
      <div className="mb-4">
        <input type="text" className={inputClass} placeholder="Enter title" name="title" value={formData.title} onChange={handleChange} />
      </div>
      <div className="mb-4">
        <ReactTextareaAutosize minRows={8} name="content" className={inputClass} placeholder="Enter content" value={formData.content} onChange={handleChange} />
      </div>
      <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">
        Submit
      </button>
    </form>
  );
};

export default FormNewPost;
