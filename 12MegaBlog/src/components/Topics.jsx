import React from 'react';

const topics = ['Technology', 'Productivity', 'Psychology', 'Business', 'Art', 'Travel'];

function Topics() {
  return (
    <div className="py-12 bg-gray-50">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-8">Explore Topics</h2>
        <div className="flex flex-wrap justify-center gap-4">
          {topics.map((topic) => (
            <button key={topic} className="bg-white text-gray-700 font-semibold py-2 px-5 border border-gray-300 rounded-full hover:bg-orange-500 hover:text-white hover:border-transparent transition-colors duration-300">
              {topic}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Topics;