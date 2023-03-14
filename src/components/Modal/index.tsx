import React, { ReactNode, useEffect, useRef, useState } from 'react';
import {
  BsQrCode as QrIcon,
  BsImage as ImageIcon,
  BsFileText as DescriptionIcon,
} from 'react-icons/bs';
import styles from './Modal.module.css';

interface ModalProps {
  name: string;
  image: string;
  qrCode?: string;
  description: string;
  children: ReactNode;
}

export function Modal({ name, image, qrCode, description, children }: ModalProps) {
  const [showing, setShowing] = useState<'screenshot' | 'qr' | 'description'>('screenshot');
  const modalRef: React.MutableRefObject<null | HTMLDivElement> = useRef(null);

  useEffect(() => {
    const handleOutsideClick = (e: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
        setShowing('screenshot');
      }
    };
    document.addEventListener('click', handleOutsideClick);

    return () => {
      document.removeEventListener('click', handleOutsideClick);
    };
  }, []);

  return (
    <div ref={modalRef}>
      <div className={styles.display}>
        <img
          className={`${styles.screenshot} ${showing === 'screenshot' ? styles.showing : ''}`}
          src={image}
          alt={`${name} screenshot`}
        />
        <figure className={`${styles.qr_code} ${showing === 'qr' ? styles.showing : ''}`}>
          <img src={qrCode} alt={`${name} qr code`} />
          <figcaption>Scan to view on mobile</figcaption>
        </figure>
        <p className={`${styles.description} ${showing === 'description' ? styles.showing : ''}`}>
          {description}
        </p>
      </div>
      <div className={styles.bottom_bar}>
        {children}
        <div className={`${styles.modal_buttons} showing_${showing}`}>
          <button
            className={showing === 'screenshot' ? styles.showing : ''}
            aria-label="show screenshot"
            onClick={() => setShowing('screenshot')}
          >
            <ImageIcon className={styles.icon} />
          </button>
          <button
            className={showing === 'description' ? styles.showing : ''}
            aria-label="show description"
            onClick={() => setShowing('description')}
          >
            <DescriptionIcon className={styles.icon} />
          </button>
          <button
            className={showing === 'qr' ? styles.showing : ''}
            aria-label="show qr code"
            disabled={qrCode ? false : true}
            onClick={() => setShowing('qr')}
          >
            <QrIcon className={styles.icon} />
          </button>
        </div>
      </div>
    </div>
  );
}
