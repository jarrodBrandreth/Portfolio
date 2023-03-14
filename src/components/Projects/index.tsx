import React from 'react';
import { Project } from '../Project';
import { projects } from '../../content/projects';

export function Projects() {
  return (
    <section id="projects" tabIndex={-1}>
      <h2 className="section_heading">Projects</h2>
      {projects.map((project) => (
        <Project key={project.name} project={project} />
      ))}
    </section>
  );
}
