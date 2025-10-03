import React, { useState, useEffect, useRef } from 'react';
import type { Project } from '../types';

interface ProjectCardProps {
  project: Project;
  index: number;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, index }) => {
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 0.1, // Animate when 10% of the card is visible
      }
    );

    const currentRef = cardRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  return (
    <div
      ref={cardRef}
      className={`bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-teal-500/20 group transform hover:-translate-y-2 transition-all ease-in-out duration-500 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <div className="relative overflow-hidden h-56">
        <img src={project.imageUrl} alt={project.title} className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500" />
      </div>
      <div className="p-6">
        <p className="text-teal-400 text-xs font-semibold uppercase tracking-wider">{project.category}</p>
        <h3 className="text-xl font-bold text-white mt-2 mb-3">{project.title}</h3>
        <p className="text-gray-400 text-sm">{project.description}</p>
      </div>
    </div>
  );
};

export default ProjectCard;
