import React from 'react';
import { Menu } from '../Menu';
import { MdOutlineLocationOn as LocationIcon } from 'react-icons/md';
import styles from './Header.module.css';

export function Header() {
  return (
    <header className={styles.header}>
      <h1>
        <span>Jarrod Brandreth</span>
        <span className={styles.title}>Software Developer</span>
      </h1>
      <p className={styles.location}>
        <LocationIcon className={styles.icon} />
        Malmö, Sweden
      </p>
      <Menu />
    </header>
  );
}
