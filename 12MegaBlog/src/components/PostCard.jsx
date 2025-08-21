import React from 'react';
import appwriteService from "../appwrite/config";
import { Link } from 'react-router-dom';

function PostCard({ $id, title, featuredImage, authorName, createdAt }) { // Add authorName and createdAt to props
  return (
    <div className='w-full bg-white rounded-xl shadow-md overflow-hidden 
                   hover:shadow-xl hover:-translate-y-1 transition-all duration-300'>
      {/* ... image link ... */}
      
      <div className='p-5'>
        <h2 className='text-xl font-bold font-heading text-primary-text mb-2'>
          <Link to={`/post/${$id}`} className="hover:text-accent transition-colors duration-200">
            {title}
          </Link>
        </h2>
        {/* Replace placeholder with actual data */}
        <p className="text-sm text-secondary-text">
          By {authorName || 'Anonymous'} · {new Date(createdAt).toLocaleDateString("en-US", { year: 'numeric', month: 'long', day: 'numeric' })}
        </p>
      </div>
    </div>
  );
}

export default PostCard;