import React from 'react';
import portrait from '../../assets/portrait.jpg';
import styles from './About.module.css';

export function About() {
  return (
    <section id="about" tabIndex={-1}>
      <h2 className="section_heading">About</h2>
      <div className={styles.content}>
        <figure className={styles.portrait}>
          <img src={portrait} alt="portrait" draggable="false" />
        </figure>
        <p>
          Im a Full-stack developer and graduate of Foo Codings Software Development Course. I enjoy
          using web technologies to bring ideas to reality. I like to work with the user in mind,
          building accessible responsive apps. When not in front of a computer I enjoy bike rides,
          skateboarding or sitting down with a puzzle.
        </p>
      </div>
    </section>
  );
}
