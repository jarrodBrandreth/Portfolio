import { useCallback, useEffect, useState } from 'react';

export const useOpenClose = (ref: React.MutableRefObject<null | HTMLElement>) => {
  const [isOpen, setIsOpen] = useState(false);
  const open = useCallback(() => setIsOpen(true), []);
  const close = useCallback(() => setIsOpen(false), []);
  const toggle = useCallback(() => setIsOpen((prev) => !prev), []);

  useEffect(() => {
    // early exit doesn't add event listener when false
    if (!isOpen) return;

    const handleOutsideClick = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('click', handleOutsideClick);

    return () => {
      document.removeEventListener('click', handleOutsideClick);
    };
  }, [ref, isOpen]);

  return { isOpen, open, close, toggle };
};
