import { useEffect, useRef, useState } from "react";

const BgPattern = () => {
    const [objectCount, setObjectCount] = useState(0);
    const bgRef = useRef(null);

    let windowWidth = useRef(window.innerWidth); 
    let windowHeight = useRef(window.innerHeight);
    let docHeight = useRef(0);
    let totalDocScrollLength = useRef(0);

    useEffect(() => {
        const handleResize = () => {
            windowWidth.current = window.innerWidth;
            windowHeight.current = window.innerHeight;
            totalDocScrollLength.current = docHeight.current - windowHeight.current;

            initializePattern();
            updateOnScroll();
        };

        const initializePattern = () => {
            let totalWidth = windowWidth.current + getScrollOffset();
            //if (windowsize is good){
            let objectWidth = windowHeight.current * 0.096;
            let objectMargin = windowHeight.current * 0.108;
            // } else {
            //  set other size
            //}

            setObjectCount(Math.ceil(totalWidth / (objectWidth + objectMargin)));
        };
    
        const updateOnScroll = () => {
            if (bgRef.current === null) return;
    
            const scrollTop = window.pageYOffset;
            let scrollPostion  =  scrollTop  /  totalDocScrollLength.current;
            if (scrollPostion > 1) scrollPostion = 1;

            const scrollDistance = scrollPostion * getScrollOffset();
            bgRef.current.style.transform = `translateX(-${scrollDistance}px)`;
        };


        docHeight.current = getDocHeight();
        totalDocScrollLength.current = docHeight.current - windowHeight.current;

        document.addEventListener("scroll", () => requestAnimationFrame(updateOnScroll));
        window.addEventListener("resize", handleResize);

        initializePattern();  
        
        return () => {
            document.removeEventListener("scroll", () => requestAnimationFrame(updateOnScroll));
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    const getDocHeight = () => {
        return Math.max(
            document.body.scrollHeight,  document.documentElement.scrollHeight,
            document.body.offsetHeight,  document.documentElement.offsetHeight,
            document.body.clientHeight,  document.documentElement.clientHeight
        );
    };

    const getScrollOffset = () => {
        return (totalDocScrollLength.current / windowHeight.current) * windowWidth.current * 0.3;
    };
      
    return (
        <div id="bg-stripe-container" ref={bgRef}>
            { new Array(objectCount).fill().map((x, i) => {
                return <div key={i} className="bg-stripe-item"/>
            })}
        </div>
    );
};

export default BgPattern;