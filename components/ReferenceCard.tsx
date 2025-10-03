import React, { useState, useEffect, useRef } from 'react';
import type { Reference } from '../types';

interface ReferenceCardProps {
  reference: Reference;
  index: number;
}

const ReferenceCard: React.FC<ReferenceCardProps> = ({ reference, index }) => {
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
        threshold: 0.1,
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
      className={`bg-gray-800 p-6 rounded-lg shadow-lg flex flex-col items-center text-center transform hover:scale-105 transition-all ease-in-out duration-500 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
        <img src={reference.avatarUrl} alt={reference.name} className="w-20 h-20 rounded-full mb-4 border-4 border-gray-700" />
        <p className="text-gray-300 italic mb-4">"{reference.quote}"</p>
        <div className="font-bold text-white text-lg">{reference.name}</div>
        <p className="text-teal-400 text-sm">{reference.title}, {reference.company}</p>
    </div>
  );
};

export default ReferenceCard;
