import React from 'react';
import { Container, Logo, LogoutBtn } from '../index';
// The Link import from react-router-dom might not be needed anymore if only the Logo was using it.
// I'll leave it in case other parts of your header use it.
import { Link, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

function Header() {
  const authStatus = useSelector((state) => state.auth.status);
  const navigate = useNavigate();

  const navItems = [
    { name: 'Home', slug: "/", active: true },
    { name: "Login", slug: "/login", active: !authStatus },
    { name: "Signup", slug: "/signup", active: !authStatus, primary: true },
    { name: "All Posts", slug: "/all-posts", active: authStatus },
    { name: "Add Post", slug: "/add-post", active: authStatus },
  ];

  return (
    <header className='py-4 sticky top-0 z-50 w-full bg-background border-b border-gray-200'>
      <Container>
        <nav className='flex items-center justify-between max-w-7xl mx-auto'>
          {/* This is the corrected section */}
          <div className='mr-4'>
            <Logo />
          </div>
          <ul className='flex items-center space-x-2 md:space-x-6'>
            {navItems.map((item) =>
              item.active ? (
                <li key={item.name}>
                  <button
                    onClick={() => navigate(item.slug)}
                    className={`inline-block px-4 py-2 text-base font-medium transition-colors duration-200
                      ${
                        item.primary
                          ? 'bg-accent text-white rounded-full hover:bg-accent-hover'
                          : 'text-secondary-text hover:text-accent'
                      }
                    `}
                  >
                    {item.name}
                  </button>
                </li>
              ) : null
            )}
            {authStatus && (
              <li>
                <LogoutBtn />
              </li>
            )}
          </ul>
        </nav>
      </Container>
    </header>
  );
}

export default Header;