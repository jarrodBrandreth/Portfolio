import React from 'react';
import { FaLinkedin as LinkedInIcon, FaGithub as GitHubIcon } from 'react-icons/fa';
import { MdEmail as EmailIcon } from 'react-icons/md';
import { contact } from '../../content/info';
import styles from './Footer.module.css';

export function Footer() {
  return (
    <footer className={styles.footer}>
      <span className={styles.text}>*Resumé available upon request.</span>
      <ul className={styles.link_list}>
        <li>
          <a href={contact.linkedin} target="_blank" rel="noreferrer" aria-label="linkedin link">
            <LinkedInIcon className={styles.icon} />
          </a>
        </li>
        <li>
          <a href={contact.github} target="_blank" rel="noreferrer" aria-label="github link">
            <GitHubIcon className={styles.icon} />
          </a>
        </li>
        {contact.email && (
          <li>
            <a
              href={`mailto:${contact.email}`}
              target="_blank"
              rel="noreferrer"
              aria-label="email me"
            >
              <EmailIcon className={styles.icon} />
            </a>
          </li>
        )}
      </ul>
    </footer>
  );
}
