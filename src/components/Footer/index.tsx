import React from 'react';
import { FaLinkedin as LinkedInIcon, FaGithub as GitHubIcon } from 'react-icons/fa';
import styles from './Footer.module.css';

export function Footer() {
  return (
    <footer className={styles.footer}>
      <span className={styles.text}>*Resumé available upon request.</span>
      <ul className={styles.link_list}>
        <li>
          <a
            href="https://linkedin.com/in/jarrod-brandreth/"
            target="_blank"
            rel="noreferrer"
            aria-label="linkedin link"
          >
            <LinkedInIcon className={styles.icon} />
          </a>
        </li>
        <li>
          <a
            href="https://github.com/jarrodBrandreth/"
            target="_blank"
            rel="noreferrer"
            aria-label="github link"
          >
            <GitHubIcon className={styles.icon} />
          </a>
        </li>
      </ul>
    </footer>
  );
}
