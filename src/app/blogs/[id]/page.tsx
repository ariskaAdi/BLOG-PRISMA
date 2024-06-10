import Comments from "@/components/comments";
import FormComment from "@/components/form-comments";
import React from "react";

const BlogDetailPage = () => {
  return (
    <div className="max-w-4xl mx-auto py-8">
      <h1 className="text-3xl font-bold mb-4">Blog Detail Page</h1>
      <p>Written By: User</p>
      <div className="mt-4">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusantium veritatis tempora minima expedita fugiat aperiam nulla dignissimos impedit ex quo quasi sint velit esse, dolore nisi. Alias, eveniet dolorum. Nulla?
      </div>
      <Comments />
      <FormComment />
    </div>
  );
};

export default BlogDetailPage;
