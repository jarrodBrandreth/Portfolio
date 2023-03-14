import React, { CSSProperties } from 'react';
import styles from './Technologies.module.css';
import { FaNodeJs, FaHtml5, FaCss3Alt, FaGithub, FaReact, FaGitAlt } from 'react-icons/fa';
import { SiTypescript, SiMongodb, SiExpress, SiJavascript } from 'react-icons/si';
import { IconType } from 'react-icons';

interface ColorVariable extends CSSProperties {
  '--icon-color': string;
}

interface TechnologiesProps {
  name: string;
  Icon: IconType;
  color: string | null;
}

const technologies: TechnologiesProps[] = [
  {
    name: 'HTML 5',
    Icon: FaHtml5,
    color: '#f06529',
  },
  {
    name: 'CSS 3',
    Icon: FaCss3Alt,
    color: '#156fb2',
  },
  {
    name: 'JavaScript',
    Icon: SiJavascript,
    color: '#f0db4f',
  },
  {
    name: 'TypeScript',
    Icon: SiTypescript,
    color: '#007acc',
  },
  {
    name: 'React',
    Icon: FaReact,
    color: '#61dbfb',
  },
  {
    name: 'Node JS',
    Icon: FaNodeJs,
    color: '#85be46',
  },
  {
    name: 'Express JS',
    Icon: SiExpress,
    color: null,
  },
  {
    name: 'Mongo DB',
    Icon: SiMongodb,
    color: '#4db33d',
  },
  {
    name: 'GitHub',
    Icon: FaGithub,
    color: null,
  },
  {
    name: 'Git',
    Icon: FaGitAlt,
    color: '#f1502f',
  },
];

export function Technologies() {
  return (
    <section id="technologies" tabIndex={-1}>
      <h2 className="section_heading">Technologies</h2>
      <ul className={styles.content}>
        {technologies.map((tech) => {
          const { Icon, name, color } = tech;
          return (
            <li
              key={name}
              className={styles.item}
              style={
                {
                  '--icon-color': color,
                } as ColorVariable
              }
            >
              <Icon className={styles.icon} />
              <span className={styles.name}>{name}</span>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
