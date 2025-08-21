import React from 'react';
import { Link } from 'react-router-dom';

function Logo() {
  return (
    <Link to="/" className="flex items-center">
      {/* Styled container for the logo image */}
      <div className="w-12 h-12 flex items-center justify-center bg-accent/10 rounded-full shadow-sm mr-4">
        <img 
          src="/logo.png" // <-- Replace with your logo's filename
          className="h-8 w-8 object-contain" // Control the size of the image inside the circle
          alt="MegaBlog Logo" 
        />
      </div>
      
      <span className="text-2xl font-heading font-bold text-primary-text hover:text-accent transition-colors duration-200">
        MegaBlog
      </span>
    </Link>
  );
}

export default Logo;