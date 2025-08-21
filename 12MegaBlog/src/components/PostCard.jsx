// sujal3797/reactjs-chaiaurcode/reactjs-chaiaurcode-0fca9f756c4aedf230ee3ac50d6714e8c664563c/12MegaBlog/src/components/PostCard.jsx
import React from 'react'
import appwriteService from "../appwrite/config"
import {Link} from 'react-router-dom'

function PostCard({$id, title, featuredImage}) {
    
  return (
    <Link to={`/post/${$id}`}>
      <div className='w-full bg-white rounded-xl p-4 shadow-md hover:shadow-lg transition-shadow duration-300'>
        <div className='w-full justify-center mb-4'>
          <img src={appwriteService.getFilePreview(featuredImage)} alt={title}
          className='rounded-xl aspect-video object-cover' />
        </div>
        <h2 className='text-xl font-bold'>{title}</h2>
      </div>
    </Link>
  )
}

export default PostCard