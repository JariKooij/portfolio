import { useEffect, useRef, useState } from 'react';
import { useCursor } from '../../hooks/CursorContext';

const CustomCursor = () => {
  	const [touchDevice, setTouchDevice] = useState(false);
  	const isHovering = useCursor();
  	const delay = 10;

  	const dot = useRef(null);
  	const dotOutline = useRef(null);

  	const cursorVisible = useRef(true);
  	const cursorEnlarged = useRef(false);

  	const endX = useRef(window.innerWidth / 2);
  	const endY = useRef(window.innerHeight / 2);
  	const _x = useRef(0);
  	const _y = useRef(0);

  	const requestRef = useRef(null);

  	useEffect(() => {
    	const touch = isTouchDevice();
    	setTouchDevice(touch);

    	document.addEventListener('mousedown', mouseOverEvent);
    	document.addEventListener('mouseup', mouseOutEvent);
    	document.addEventListener('mousemove', mouseMoveEvent);
    	animateDotOutline();

    	return () => {
      	document.removeEventListener('mousedown', mouseOverEvent);
      	document.removeEventListener('mouseup', mouseOutEvent);
      	document.removeEventListener('mousemove', mouseMoveEvent);
      	cancelAnimationFrame(requestRef.current);
    	};
  	// eslint-disable-next-line react-hooks/exhaustive-deps
  	}, []);

  	useEffect(() => {
    	if (isHovering) {
      		mouseOverEvent();
		} else {
      		mouseOutEvent();
    	}
  	// eslint-disable-next-line react-hooks/exhaustive-deps
  	}, [isHovering]);

  	const isTouchDevice = () => {
    	if (('ontouchstart' in window) ||
    	(navigator.maxTouchPoints > 0) ||
    	(navigator.msMaxTouchPoints > 0)) {
      		return true;
    	} else {
      		return false;
    	}
  	};

  	const toggleCursorVisibility = () => {
    	if (cursorVisible.current) {
      		dot.current.style.opacity = 1;
      		dotOutline.current.style.opacity = 1;
    	} else {
      		dot.current.style.opacity = 0;
      		dotOutline.current.style.opacity = 0;
    	}
 	};

  	const toggleCursorSize = () => {
    	if (cursorEnlarged.current) {
      		dot.current.style.transform = 'translate(-50%, -50%) scale(0)';
      		dotOutline.current.style.transform = 'translate(-50%, -50%) scale(1.5)';
    	} else {
      		dot.current.style.transform = 'translate(-50%, -50%) scale(1)';
      		dotOutline.current.style.transform = 'translate(-50%, -50%) scale(1)';
    	}
  	};

  	const mouseOverEvent = () => {
    	cursorEnlarged.current = true;
    	toggleCursorSize();
  	};

  	const mouseOutEvent = () => {
   		cursorEnlarged.current = false;
    	toggleCursorSize();
  	};

  	const mouseMoveEvent = (e) => {
    	cursorVisible.current = true;
    	toggleCursorVisibility();

    	endX.current = e.clientX;
    	endY.current = e.clientY;

    	dot.current.style.top = endY.current + 'px';
    	dot.current.style.left = endX.current + 'px';
  	};

  	const animateDotOutline = () => {
    	_x.current += (endX.current - _x.current) / delay;
    	_y.current += (endY.current - _y.current) / delay;

    	dotOutline.current.style.top = _y.current + 'px';
    	dotOutline.current.style.left = _x.current + 'px';

    	requestRef.current = requestAnimationFrame(animateDotOutline);
  	};

  	return <>
      	<div ref={dotOutline} className={`${touchDevice ? "cursor-hidden " : ""} cursor-dot-outline`}/>
      	<div ref={dot} className={`${touchDevice ? "cursor-hidden " : ""} cursor-dot`}/>
    </>
};

export default CustomCursor;