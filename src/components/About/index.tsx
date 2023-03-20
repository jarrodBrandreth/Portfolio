import React from 'react';
import { portrait, about } from '../../content/info';
import styles from './About.module.css';

export function About() {
  return (
    <section id="about" tabIndex={-1}>
      <h2 className="section_heading">About</h2>
      <div className={styles.content}>
        <figure className={styles.portrait}>
          <img src={portrait} alt="portrait" draggable="false" />
        </figure>
        <p>{about}</p>
      </div>
    </section>
  );
}
