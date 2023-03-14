import React from 'react';
import styles from './Project.module.css';
import { BsCodeSlash as CodeIcon, BsGlobe as SiteIcon } from 'react-icons/bs';
import { Modal } from '../Modal';
import { ProjectObj } from '../../types/types';

interface ProjectProps {
  project: ProjectObj;
}

export function Project({ project }: ProjectProps) {
  return (
    <article className={styles.article}>
      <h3>{project.name}</h3>
      <p className={styles.technologies}>{project.stack}</p>
      <Modal
        name={project.name}
        image={project.image}
        qrCode={project.qrCode}
        description={project.description}
      >
        <ul className={styles.links}>
          {project.source && (
            <li>
              <a
                className={styles.link}
                href={project.source}
                rel="noreferrer"
                target="_blank"
                aria-label="link to source code"
                data-info="source code"
              >
                <CodeIcon className={styles.icon} />
              </a>
            </li>
          )}
          {project.hosted && (
            <li>
              <a
                className={styles.link}
                href={project.hosted}
                rel="noreferrer"
                target="_blank"
                aria-label="link to hosted site"
                data-info="view site"
              >
                <SiteIcon className={styles.icon} />
              </a>
            </li>
          )}
        </ul>
      </Modal>
    </article>
  );
}
