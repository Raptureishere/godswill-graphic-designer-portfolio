import React from 'react';
import { HERO_DETAILS } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-gray-400 mt-auto">
      <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row justify-between items-center">
        <p className="text-sm">&copy; {new Date().getFullYear()} {HERO_DETAILS.name}. All Rights Reserved.</p>
        <div className="flex space-x-6 mt-4 sm:mt-0">
          <a href={HERO_DETAILS.socials.instagram} target="_blank" rel="noopener noreferrer" className="hover:text-teal-400 transition-colors duration-300"><i className="fab fa-instagram fa-lg"></i></a>
          <a href={HERO_DETAILS.socials.snapchat} target="_blank" rel="noopener noreferrer" className="hover:text-teal-400 transition-colors duration-300"><i className="fab fa-snapchat fa-lg"></i></a>
          <a href={HERO_DETAILS.socials.whatsapp} target="_blank" rel="noopener noreferrer" className="hover:text-teal-400 transition-colors duration-300"><i className="fab fa-whatsapp fa-lg"></i></a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;