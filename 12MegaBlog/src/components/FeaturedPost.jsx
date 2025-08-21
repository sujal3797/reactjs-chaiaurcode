import React from 'react';
import { Link } from 'react-router-dom';
import appwriteService from '../appwrite/config';

function FeaturedPost({ post }) {
  return (
    <div className="w-full py-12 bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap md:flex-nowrap items-center">
          <div className="w-full md:w-1/2">
            <Link to={`/post/${post.$id}`}>
              <img
                src={appwriteService.getFilePreview(post.featuredImage)}
                alt={post.title}
                className="rounded-xl object-cover w-full h-auto"
              />
            </Link>
          </div>
          <div className="w-full md:w-1/2 md:pl-10 mt-6 md:mt-0">
            <span className="text-sm font-semibold text-orange-500 uppercase">Featured Article</span>
            <h1 className="text-4xl font-bold text-gray-900 mt-2 mb-4">
              <Link to={`/post/${post.$id}`} className="hover:text-orange-600 transition-colors duration-200">
                {post.title}
              </Link>
            </h1>
            {/* You can add a snippet of the content here later */}
            <p className="text-gray-600 mb-6">
              A brief description of the article can go here. This will entice readers to click and learn more.
            </p>
            <Link to={`/post/${post.$id}`} className="inline-block bg-orange-500 text-white font-bold py-3 px-6 rounded-lg hover:bg-orange-600 transition-colors duration-300">
              Read More
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FeaturedPost;