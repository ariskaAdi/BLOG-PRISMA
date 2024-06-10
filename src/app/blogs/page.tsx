import { Posts } from "@/data/posts";
import Link from "next/link";
import React from "react";

const BlogPage = () => {
  return (
    <div className="max-w-4xl mx-auto py-8">
      <h1 className="text-3xl font-bold mb-4">Blogs</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 ">
        {Posts.map((post) => (
          <Link href={`/blogs/${post.id}`} key={post.id}>
            <div className="bg-white p-4 rounded-md shadow-md hover:bg-slate-200 hover:text-blue-500">
              <h2 className="text-xl font-bold mb-2">{post.title}</h2>
              <p className="text-gray-600">Written by: {post.username}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default BlogPage;
