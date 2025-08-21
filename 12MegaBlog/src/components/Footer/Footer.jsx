import React from 'react';
import { Link } from 'react-router-dom';
import { Logo } from '../index';

function Footer() {
  return (
    <footer className="w-full bg-background border-t border-gray-200 py-10">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between">
          
          {/* Logo and Branding Section */}
          <div className="w-full md:w-1/4 mb-8 md:mb-0">
            <div className="mb-4">
              <Logo width="100px" />
            </div>
            <p className="text-sm text-secondary-text">
              A place to share knowledge and better understand the world.
            </p>
          </div>
          
          {/* Quick Links Section */}
          <div className="w-full sm:w-1/2 md:w-1/4 mb-8 sm:mb-0">
            <h3 className="text-lg font-heading font-bold mb-4">Quick Links</h3>
            <ul>
              <li className="mb-2">
                <Link to="/" className="text-secondary-text hover:text-accent transition-colors duration-200">Home</Link>
              </li>
              <li className="mb-2">
                <Link to="/about" className="text-secondary-text hover:text-accent transition-colors duration-200">About Us</Link>
              </li>
              <li className="mb-2">
                <Link to="/contact" className="text-secondary-text hover:text-accent transition-colors duration-200">Contact</Link>
              </li>
            </ul>
          </div>

          {/* Legal Section */}
          <div className="w-full sm:w-1/2 md:w-1/4">
            <h3 className="text-lg font-heading font-bold mb-4">Legal</h3>
            <ul>
              <li className="mb-2">
                <Link to="/privacy-policy" className="text-secondary-text hover:text-accent transition-colors duration-200">Privacy Policy</Link>
              </li>
              <li className="mb-2">
                <Link to="/terms-of-service" className="text-secondary-text hover:text-accent transition-colors duration-200">Terms of Service</Link>
              </li>
            </ul>
          </div>

        </div>
        
        {/* Copyright Notice */}
        <div className="mt-8 border-t border-gray-200 pt-6 text-center text-sm text-secondary-text">
          <p>&copy; {new Date().getFullYear()} MegaBlog. All Rights Reserved.</p>
        </div>

      </div>
    </footer>
  );
}

export default Footer;