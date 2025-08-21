import React from 'react';
import appwriteService from "../appwrite/config";
import { Link } from 'react-router-dom';

function PostCard({ $id, title, featuredImage, authorName, createdAt, topic }) {
  return (
    <div className='w-full bg-white rounded-xl shadow-md overflow-hidden 
                   hover:shadow-xl hover:-translate-y-1 transition-all duration-300
                   flex flex-col h-full'>
      
      <Link to={`/post/${$id}`} className="block">
        <div className='w-full'>
            <img 
                src={appwriteService.getFilePreview(featuredImage)} 
                alt={title}
                className='w-full object-cover h-48' 
            />
        </div>
      </Link>
      
      <div className='p-5 flex flex-col flex-grow'>
        {/* Display the topic tag */}
        <p className="text-xs font-semibold text-accent uppercase mb-2">{topic || 'General'}</p>
        
        <h2 className='text-xl font-bold font-heading text-primary-text mb-2'>
          <Link to={`/post/${$id}`} className="hover:text-accent transition-colors duration-200">
            {title}
          </Link>
        </h2>
        
        <p className="text-sm text-secondary-text mt-auto">
          By {authorName || 'Anonymous'} · {new Date(createdAt).toLocaleDateString("en-US", { year: 'numeric', month: 'long', day: 'numeric' })}
        </p>
      </div>
    </div>
  );
}

export default PostCard;