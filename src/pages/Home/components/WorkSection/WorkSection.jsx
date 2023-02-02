import { useCursorUpdate } from "../../../../hooks/CursorContext";
import project1 from "../../../../assets/home_project1.jpg";
import project2 from "../../../../assets/home_project2.jpg";
import project3 from "../../../../assets/home_project3.jpg";

const WorkSection = () => {
    const cursorUpdate = useCursorUpdate();

    return(
        <div id="worksection">
            <h2>Some stuff by <span>me</span></h2>

            <img className="worksection-image1 worksection-image" 
                src={project1} 
                alt="Uitstekend Stekje" 
                onMouseEnter={cursorUpdate} 
                onMouseLeave={cursorUpdate}
            />

            <a className="projects-link" href="/about">
                <div className="projects-link-container" 
                    onMouseEnter={cursorUpdate} 
                    onMouseLeave={cursorUpdate}
                >
                    <p>Learn more</p>
                    <span className="arrow"/>
                </div>
            </a>

            <img className="worksection-image2 worksection-image" 
                src={project2} 
                alt="Intergalactic cruise" 
                onMouseEnter={cursorUpdate} 
                onMouseLeave={cursorUpdate}
            />
            
            <img className="worksection-image3 worksection-image" 
                src={project3} 
                alt="Two sheep in a field i guess" 
                onMouseEnter={cursorUpdate} 
                onMouseLeave={cursorUpdate}
            />

            <a className="art-link link" href="/about" >
                <div className="projects-link-container" 
                    onMouseEnter={cursorUpdate} 
                    onMouseLeave={cursorUpdate}
                >
                    <p>More digital art</p> 
                    <span className="arrow"/>
                </div>
            </a>

        </div>
    );
};

export default WorkSection;