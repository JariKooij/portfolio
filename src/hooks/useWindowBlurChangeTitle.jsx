import { useEffect, useRef } from 'react';

export function useWindowBlurChangeTitle(titleWhenBlur) {
  const previousTitle = useRef();

  useEffect(() => {
    if (typeof window === 'undefined') {
      return;
    }

    window.addEventListener('blur', handleWindowBlur);
    window.addEventListener('focus', handleWindowFocus);

    function handleWindowBlur() {
      previousTitle.current = document.title;
      setTitle(titleWhenBlur);
    }

    function handleWindowFocus() {
      if (previousTitle.current) {
        setTitle(previousTitle.current);
      }
    }  

    function setTitle(title) {
      document.title = title;
    }

    return () => {
      window.removeEventListener('blur', handleWindowBlur);
      window.removeEventListener('focus', handleWindowFocus);
    };
  }, [titleWhenBlur]);
}