import { useEffect, useRef, useState } from "react";

export default function BgPattern() {
    const [objectCount, setObjectCount] = useState(0);
    const bgRef = useRef(null);

    let windowWidth = useRef(window.innerWidth); 
    let windowHeight = useRef(window.innerHeight);
    let docHeight = useRef(0);
    let totalDocScrollLength = useRef(0);

    useEffect(() => {
        docHeight.current = getDocHeight();
        totalDocScrollLength.current = docHeight.current - windowHeight.current;

        document.addEventListener("scroll", () => requestAnimationFrame(updateOnScroll));
        window.addEventListener("resize", handleResize);

        initializePattern();  
        
        function handleResize() {
            windowWidth.current = window.innerWidth;
            windowHeight.current = window.innerHeight;
            totalDocScrollLength.current = docHeight.current - windowHeight.current;

            initializePattern();
            updateOnScroll();
        }

        function initializePattern() {
            let totalWidth = windowWidth.current + getScrollOffset();
            setObjectCount(Math.ceil(totalWidth / (158)));
        }
    
        function updateOnScroll() {
            if (bgRef.current === null) return;
    
            const scrollTop = window.pageYOffset;
            const  scrollPostion  =  scrollTop  /  totalDocScrollLength.current;
            
            bgRef.current.style.transform = `translateX(-${scrollPostion * getScrollOffset()}px)`;
        }
        
        return () => {
            document.removeEventListener("scroll", () => requestAnimationFrame(updateOnScroll));
            window.removeEventListener("resize", handleResize);
        }
    }, []);

    function getDocHeight() {
        return Math.max(
            document.body.scrollHeight,  document.documentElement.scrollHeight,
            document.body.offsetHeight,  document.documentElement.offsetHeight,
            document.body.clientHeight,  document.documentElement.clientHeight
        );
    }

    function getScrollOffset() {
        return (totalDocScrollLength.current / windowHeight.current) * windowWidth.current * 0.3;
    }
      
    return (
        <div id="bg-stripe-container" ref={bgRef}>
            { new Array(objectCount).fill().map((x, i) => {
                return <div key={i} className="bg-stripe-item"/>
            })}
        </div>
    );
}