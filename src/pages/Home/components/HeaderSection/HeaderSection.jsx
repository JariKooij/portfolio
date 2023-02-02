import { useState } from "react";
import { useEffect } from "react";
import { NavLink } from "react-router-dom";
import { useCursorUpdate } from "../../../../hooks/CursorContext";
import MeImg from "./../../../../assets/me.jpg";
import SvgIconGithub from "../../../../assets/socialIcons/SvgIconGithub";
import SvgIconMail from "../../../../assets/socialIcons/SvgIconMail";
import SvgIconLinkedin from "../../../../assets/socialIcons/SvgIconLinkedin";

const HeaderSection = ({aboutSectionRef}) => {
    const cursorUpdate = useCursorUpdate();
    const navItems = [
        {route: "/", text: "Home"},
        {route: "/work", text: "Work"},
        {route: "/about", text: "About"},
    ];
    const [headerTextValues, setHeaderTextValues] = useState(["Creative", "Developer"]);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const scrollToNextSection = () => {
        aboutSectionRef.current.scrollIntoView({behavior: "smooth" });
    }


    useEffect(() => {
        let oldElIndex = undefined;
        let oldCharIndex = undefined;
        const interval = setInterval(() => {

            const setCharAt = (str,index,chr) => {
                if(index > str.length-1) return str;
                return str.substring(0,index) + chr + str.substring(index+1);
            };
            
            const elIndex = Math.round(Math.random() * (headerTextValues.length - 1));
            let charIndex = null;

            while (headerTextValues[elIndex][charIndex] !== "e" 
            || (elIndex === oldElIndex && charIndex === oldCharIndex)){
                charIndex = Math.round(Math.random() * (headerTextValues[elIndex].length - 1));
            }

            oldCharIndex = charIndex;
            oldElIndex = elIndex;

            const oldChar = headerTextValues[elIndex][charIndex];

            setHeaderTextValues((prev) => {
                let newArray = [...prev];
                const newValue = setCharAt(newArray[elIndex], charIndex, "✿");
                newArray[elIndex] = newValue;
                return newArray;
            });

            setTimeout(function () {
                setHeaderTextValues((prev) => {
                    let newArray = [...prev];
                    const newValue = setCharAt(newArray[elIndex], charIndex, oldChar);
                    newArray[elIndex] = newValue;
                    return newArray;
                });  
            }, 1000);
        }, 3000);
      
        return () => clearInterval(interval);
      // eslint-disable-next-line react-hooks/exhaustive-deps
      }, [])
    
    return (
        <header>
            <div id="header--title">
                <span>{headerTextValues[0]}</span>
                <span>{headerTextValues[1]}</span>
                <span>{"<Student/>"}</span>
                <p>Student developer with a passion for programming and design. </p>
                <a href="https://www.goole.com" 
                    onMouseEnter={cursorUpdate} 
                    onMouseLeave={cursorUpdate}
                >
                    Lets get in touch!  <span className="arrow"/>
                </a>
                <div className="header--icons">
                    <div className="header-icon">
                        <SvgIconMail/>
                    </div>
                    <div className="header-icon">
                        <SvgIconLinkedin/>
                    </div>
                    <div className="header-icon">
                        <SvgIconGithub/>
                    </div>
                </div>
            </div>

            
            <nav>
                <ul>
                    {navItems.map((item) => {
                        return <li key={item.route}>
                            <NavLink 
                                to={item.route} 
                                className={({ isActive }) =>
                                    (isActive ? "navlink--selected " : "") + "navlink"
                                }
                                onMouseEnter={cursorUpdate}
                                onMouseLeave={cursorUpdate}
                                onClick={scrollToTop}
                            >
                                {item.text}
                                <span/>
                            </NavLink>
                        </li>
                    })}
                </ul>
            </nav>

            <div id="header--me">
                <div className="image">
                    <img src={MeImg} alt=""/>
                    
                </div>
                <h3>Hi, I'm <span>Jari</span></h3>
            </div>

            <div id="header--scroll-button">
                <div className="scroll-button" 
                    onMouseEnter={cursorUpdate} 
                    onMouseLeave={cursorUpdate}
                    onClick={scrollToNextSection}
                >
                    <span/>
                </div>
                <p>But there is more to see!</p>
            </div>
        </header>
    );
};

export default HeaderSection;