import React, { useEffect, useState } from 'react';
import { MdArrowUpward as ArrowIcon } from 'react-icons/md';
import styles from './ScrollToTop.module.css';

export function ScrollToTop() {
  const [showing, setShowing] = useState(false);

  const scrollToTop = () => {
    document.documentElement.scrollTop = 0;
  };

  useEffect(() => {
    const showButton = () => {
      if (document.documentElement.scrollTop > 60) {
        setShowing(true);
      } else {
        setShowing(false);
      }
    };

    document.addEventListener('scroll', showButton);
  }, []);

  return (
    <>
      {showing && (
        <button className={styles.button} onClick={scrollToTop}>
          <ArrowIcon className={styles.icon} />
        </button>
      )}
    </>
  );
}
