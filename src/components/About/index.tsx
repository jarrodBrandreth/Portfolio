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
          I'm a Full-stack developer and graduate of Foo Codings Software Development Course. I
          enjoy using web technologies to bring ideas to reality. Always keeping the user in mind, I
          strive to bring functionality, accessibility and responsiveness to all my work. I love a
          challenge so in my free time you can find me out skateboarding or sitting down with a
          puzzle.
        </p>
      </div>
    </section>
  );
}
