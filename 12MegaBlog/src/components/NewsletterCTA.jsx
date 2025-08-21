import React from 'react';

function NewsletterCTA() {
  return (
    <div className="bg-orange-500">
      <div className="container mx-auto px-4 py-12 text-center">
        <h2 className="text-3xl font-bold text-white mb-4">
          Want to get the latest updates?
        </h2>
        <p className="text-orange-100 mb-8">
          Sign up for our newsletter and stay up to date.
        </p>
        <div className="flex justify-center">
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full max-w-sm p-3 rounded-l-lg border-0 focus:ring-2 focus:ring-orange-300"
          />
          <button className="bg-gray-800 text-white font-bold p-3 rounded-r-lg hover:bg-gray-700 transition-colors duration-300">
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
}

export default NewsletterCTA;