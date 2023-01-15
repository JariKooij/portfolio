import { useEffect, useRef } from 'react';

export const useWindowBlurChangeTitle = (titleWhenBlur) => {
  	const previousTitle = useRef();

  	useEffect(() => {
    	const handleWindowBlur = () => {
      		previousTitle.current = document.title;
      		setTitle(titleWhenBlur);
    	};

    	const handleWindowFocus = () => {
      		if (previousTitle.current) {
        		setTitle(previousTitle.current);
      		}
    	}  ;

    	const setTitle = (title) => {
      		document.title = title;
    	};

    	if (typeof window === 'undefined') return;

    	window.addEventListener('blur', handleWindowBlur);
    	window.addEventListener('focus', handleWindowFocus);

    	return () => {
      		window.removeEventListener('blur', handleWindowBlur);
      		window.removeEventListener('focus', handleWindowFocus);
    	};
  	}, [titleWhenBlur]);
};