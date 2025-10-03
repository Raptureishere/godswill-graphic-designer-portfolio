
import React from 'react';
import Button from '../components/Button';
import { HERO_DETAILS } from '../constants';

const HomePage: React.FC = () => {
  return (
    <div className="relative flex items-center justify-center h-[calc(100vh-10rem)] text-center">
       <div 
        className="absolute inset-0 bg-cover bg-center z-0 opacity-20" 
        style={{backgroundImage: "url('https://picsum.photos/seed/hero/1920/1080')"}}
      ></div>
      <div className="relative z-10 p-8 bg-gray-900 bg-opacity-50 rounded-lg">
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-4">
          <span className="block">{HERO_DETAILS.name}</span>
          <span className="block text-teal-400 mt-2">{HERO_DETAILS.work}</span>
        </h1>
        <p className="max-w-2xl mx-auto text-lg md:text-xl text-gray-300 mb-8">
          {HERO_DETAILS.introduction}
        </p>
        <Button to="/about">
          About Me <i className="fas fa-arrow-right ml-2"></i>
        </Button>
      </div>
    </div>
  );
};

export default HomePage;
