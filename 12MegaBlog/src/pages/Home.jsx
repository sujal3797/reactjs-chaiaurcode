import React, { useEffect, useState, useMemo } from 'react';
import appwriteService from '../appwrite/config';
import { Container, FeaturedPost, LatestPosts, Topics, NewsletterCTA } from '../components';

function Home() {
  const [allPosts, setAllPosts] = useState([]);
  const [featuredPost, setFeaturedPost] = useState(null);
  const [selectedTopic, setSelectedTopic] = useState(null);

  useEffect(() => {
    appwriteService.getPosts().then((posts) => {
      if (posts) {
        const allFetchedPosts = posts.documents;
        setAllPosts(allFetchedPosts);
        if (allFetchedPosts.length > 0) {
          setFeaturedPost(allFetchedPosts[0]);
        }
      }
    });
  }, []);

  const handleTopicSelect = (topic) => {
    if (topic === 'All') {
        setSelectedTopic(null);
    } else {
        setSelectedTopic(topic);
    }
  };

  const latestPosts = useMemo(() => {
    const postsToList = allPosts.slice(1);
    
    if (!selectedTopic) {
      return postsToList;
    }
    return postsToList.filter(post => post.topic === selectedTopic);
  }, [allPosts, selectedTopic]);

  const uniqueTopics = useMemo(() => {
    const topics = new Set(
      allPosts
        .map(post => post.topic)
        .filter(topic => topic)
    );
    return ['All', ...topics];
  }, [allPosts]);


  if (allPosts.length === 0) {
    return (
      <div className="w-full py-8 mt-4 text-center">
        <Container>
            <h1 className="text-2xl font-bold">No posts have been created yet.</h1>
        </Container>
      </div>
    );
  }

  return (
    <div className="w-full">
      {featuredPost && <FeaturedPost post={featuredPost} />}
      
      <Container>
        <div className="py-8">
            <Topics 
              topics={uniqueTopics} 
              selectedTopic={selectedTopic} 
              onSelectTopic={handleTopicSelect} 
            />
        </div>

        {latestPosts.length > 0 ? (
          <LatestPosts posts={latestPosts} />
        ) : (
            <p className="text-center py-8 text-secondary-text">No posts found for the selected topic.</p>
        )}
      </Container>
      
      <NewsletterCTA />
    </div>
  );
}

export default Home;