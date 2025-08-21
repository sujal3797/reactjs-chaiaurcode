import React from 'react';
import { Link } from 'react-router-dom';
import appwriteService from '../appwrite/config';

function FeaturedPost({ post }) {
  return (
    <div className="w-full py-12 bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-8">
          
          <div className="w-full md:w-1/2">
            <Link to={`/post/${post.$id}`}>
              {/* --- EDITED LINE --- */}
              <img
                src={appwriteService.getFilePreview(post.featuredImage)}
                alt={post.title}
                className="rounded-xl object-cover w-full aspect-video shadow-lg"
              />
            </Link>
          </div>
          
          <div className="w-full md:w-1/2">
            <span className="text-sm font-semibold text-accent uppercase">Featured Article</span>
            <h1 className="text-4xl font-bold font-heading text-primary-text mt-2 mb-4">
              <Link to={`/post/${post.$id}`} className="hover:text-accent transition-colors duration-200">
                {post.title}
              </Link>
            </h1>
            <p className="text-secondary-text mb-6">
              Small daily habits compound over time, turning tiny steps into life-changing transformations.
            </p>
            <Link to={`/post/${post.$id}`} className="inline-block bg-accent text-white font-bold py-3 px-6 rounded-lg hover:bg-accent-hover transition-colors duration-300">
              Read More
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FeaturedPost;