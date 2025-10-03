
import React from 'react';
import { Link } from 'react-router-dom';

interface ButtonProps {
  to: string;
  children: React.ReactNode;
  isExternal?: boolean;
  download?: boolean;
}

const Button: React.FC<ButtonProps> = ({ to, children, isExternal = false, download = false }) => {
  const classes = "inline-block bg-teal-500 text-white font-bold py-3 px-8 rounded-full hover:bg-teal-600 transition-transform transform hover:scale-105 duration-300 ease-in-out shadow-lg";

  if (isExternal) {
    return (
      <a href={to} className={classes} target="_blank" rel="noopener noreferrer" download={download}>
        {children}
      </a>
    );
  }

  return (
    <Link to={to} className={classes}>
      {children}
    </Link>
  );
};

export default Button;
