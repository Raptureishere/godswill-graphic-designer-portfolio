
import React from 'react';
import Slideshow from '../components/Slideshow';
import Button from '../components/Button';
import { HERO_DETAILS } from '../constants';

const AboutPage: React.FC = () => {
  return (
    <div className="space-y-16 py-8">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <h2 className="text-3xl sm:text-4xl font-bold text-teal-400">My Story</h2>
          <p className="text-gray-300 leading-relaxed">
            {HERO_DETAILS.lifeStory}
          </p>
          <div className="flex flex-wrap gap-6 pt-4">
            <div className="text-center p-4 bg-gray-800 rounded-lg flex-1">
              <span className="text-4xl font-bold text-teal-500 block">{HERO_DETAILS.experienceYears}+</span>
              <span className="text-gray-400">Years of Experience</span>
            </div>
            <div className="text-center p-4 bg-gray-800 rounded-lg flex-1">
              <span className="text-4xl font-bold text-teal-500 block">{HERO_DETAILS.worksCompleted}+</span>
              <span className="text-gray-400">Works Completed</span>
            </div>
          </div>
           <div className="pt-6">
             <Button to="MY CV.pdf" isExternal={true} download={true}>
              Download CV <i className="fas fa-download ml-2"></i>
            </Button>
           </div>
        </div>
        <div className="space-y-6">
          <h2 className="text-3xl sm:text-4xl font-bold text-teal-400 md:text-right">Recent Works</h2>
          <Slideshow />
          <div className="text-center md:text-right pt-4">
            <Button to="/works">View My Portfolio</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
