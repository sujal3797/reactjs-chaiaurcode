import React, { useEffect, useState } from 'react';
import appwriteService from '../appwrite/config';
import { Container, FeaturedPost, LatestPosts, Topics, NewsletterCTA } from '../components';

function Home() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    appwriteService.getPosts().then((posts) => {
      if (posts) {
        setPosts(posts.documents);
      }
    });
  }, []);

  if (posts.length === 0) {
    return (
      <div className="w-full py-8 mt-4 text-center">
        <Container>
          <div className="flex flex-wrap">
            <div className="p-2 w-full">
              <h1 className="text-2xl font-bold hover:text-gray-500">
                Login to read posts
              </h1>
            </div>
          </div>
        </Container>
      </div>
    );
  }

  return (
    <div className="w-full">
      {/* Use the first post as the featured post */}
      {posts[0] && <FeaturedPost post={posts[0]} />}
      
      {/* Pass the rest of the posts to the LatestPosts component */}
      {posts.length > 1 && <LatestPosts posts={posts.slice(1)} />}
      
      <Topics />
      <NewsletterCTA />
    </div>
  );
}

export default Home;