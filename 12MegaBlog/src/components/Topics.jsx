import React from 'react';

function Topics({ topics, selectedTopic, onSelectTopic }) {
  const handleTopicClick = (topic) => {
    if (topic === 'All') {
      onSelectTopic(null); // Set selectedTopic to null for 'All'
    } else {
      onSelectTopic(topic);
    }
  };
  
  return (
    <div className="py-12 bg-gray-50">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-8">Explore Topics</h2>
        <div className="flex flex-wrap justify-center gap-4">
          {topics.map((topic) => (
            <button 
              key={topic} 
              onClick={() => handleTopicClick(topic)}
              className={`font-semibold py-2 px-5 rounded-full transition-colors duration-300
                ${selectedTopic === topic || (!selectedTopic && topic === 'All') 
                  ? 'bg-accent text-white' 
                  : 'bg-white text-gray-700 border border-gray-300 hover:bg-accent hover:text-white hover:border-transparent'}
              `}
            >
              {topic}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Topics;