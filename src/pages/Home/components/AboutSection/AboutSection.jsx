import { forwardRef } from "react";
import { useCursorUpdate } from "../../../../hooks/CursorContext";

const AboutSection = forwardRef((props, sectionRef) => {
const cursorUpdate = useCursorUpdate();

    return (
        <>
            <div className="anchor" ref={sectionRef}/>
            <div id="aboutsection" >
                <p>
                    I’m a second year Software Engineering student, building websites and designing stuff for my education and as a hobby. I get a lot of excitement from creating something that impresses and wows people, because of appealing visuals, an interesting concept or a story. 
                </p>
                <a href="https://www.goole.com" 
                    onMouseEnter={cursorUpdate} 
                    onMouseLeave={cursorUpdate}
                >
                    Find out more about me <span className="arrow"/>
                </a>
            </div>
        </>
    );
});

export default AboutSection;