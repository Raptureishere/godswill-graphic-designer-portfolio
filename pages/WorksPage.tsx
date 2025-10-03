import React from 'react';
import ProjectCard from '../components/ProjectCard';
import ReferenceCard from '../components/ReferenceCard';
import { PROJECTS, REFERENCES } from '../constants';

const WorksPage: React.FC = () => {
  return (
    <div className="space-y-20 py-8">
      <section id="works">
        <h2 className="text-4xl font-bold text-center mb-12">
          My <span className="text-teal-400">Works</span>
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROJECTS.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </section>

      <section id="references">
        <h2 className="text-4xl font-bold text-center mb-12">
          What Others <span className="text-teal-400">Say</span>
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {REFERENCES.map((reference, index) => (
            <ReferenceCard key={reference.id} reference={reference} index={index} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default WorksPage;
