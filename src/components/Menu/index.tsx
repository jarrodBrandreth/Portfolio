import React, { useRef } from 'react';
import { ThemeSwitcher } from '../ThemeSwitcher';
import { MdClose as CloseIcon, MdMenu as MenuIcon } from 'react-icons/md';
import styles from './Menu.module.css';
import { useOpenClose } from '../../hooks/useOpenClose';
import { Contact } from '../Contact';

export function Menu() {
  const menuRef: React.MutableRefObject<null | HTMLDivElement> = useRef(null);
  const { isOpen, toggle, close } = useOpenClose(menuRef);

  return (
    <div ref={menuRef} className={`${styles.menu_container} ${isOpen && styles.open}`}>
      <button className={styles.menu_button} onClick={toggle}>
        {isOpen ? <CloseIcon className={styles.icon} /> : <MenuIcon className={styles.icon} />}
      </button>
      <div className={styles.menu}>
        <nav className={styles.nav}>
          <a href="#about" onClick={close}>
            About
          </a>
          <a href="#projects" onClick={close}>
            Projects
          </a>
          <a href="#technologies" onClick={close}>
            Technologies
          </a>
          <Contact />
        </nav>
        <ThemeSwitcher />
      </div>
    </div>
  );
}
