import React from 'react';

export default function Button({
  children,
  type = 'button',
  bgColor = 'bg-accent',
  textColor = 'text-white',
  className = '',
  ...props
}) {
  return (
    <button
      className={`w-full px-4 py-3 font-bold rounded-lg ${bgColor} ${textColor} ${className} hover:bg-accent-hover transition-colors duration-200`}
      {...props}
    >
      {children}
    </button>
  );
}