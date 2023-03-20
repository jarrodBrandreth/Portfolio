import React, { useRef } from 'react';
import { FaLinkedin as LinkedInIcon, FaGithub as GitHubIcon } from 'react-icons/fa';
import { MdEmail as EmailIcon, MdChevronRight as ChevronIcon } from 'react-icons/md';
import { contact } from '../../content/info';
import { useOpenClose } from '../../hooks/useOpenClose';
import styles from './Contact.module.css';

export function Contact() {
  const contactRef: React.MutableRefObject<null | HTMLDivElement> = useRef(null);
  const { isOpen, toggle, close } = useOpenClose(contactRef);

  return (
    <div ref={contactRef} className={`${styles.container} ${isOpen ? styles.list_open : ''}`}>
      <button className={styles.button} aria-label="toggle contact links" onClick={toggle}>
        Contact
        <ChevronIcon className={styles.icon} />
      </button>
      <ul className={styles.list}>
        <li>
          <a href={contact.linkedin} target="_blank" rel="noreferrer" onClick={close}>
            <LinkedInIcon className={styles.icon} /> LinkedIn
          </a>
        </li>
        <li>
          <a href={contact.github} target="_blank" rel="noreferrer" onClick={close}>
            <GitHubIcon className={styles.icon} /> GitHub
          </a>
        </li>
        {contact.email && (
          <li>
            <a href={`mailto:${contact.email}`} target="_blank" rel="noreferrer" onClick={close}>
              <EmailIcon className={styles.icon} /> E-mail
            </a>
          </li>
        )}
      </ul>
    </div>
  );
}
