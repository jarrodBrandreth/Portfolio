import React from 'react';
import { Menu } from '../Menu';
import { MdOutlineLocationOn as LocationIcon } from 'react-icons/md';
import { name, title, location } from '../../content/info';
import styles from './Header.module.css';

export function Header() {
  return (
    <header className={styles.header}>
      <h1>
        <span>{name}</span>
        <span className={styles.title}>{title}</span>
      </h1>
      <p className={styles.location}>
        <LocationIcon className={styles.icon} />
        {location}
      </p>
      <Menu />
    </header>
  );
}
