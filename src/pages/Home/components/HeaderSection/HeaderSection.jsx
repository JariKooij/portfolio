import { NavLink } from "react-router-dom";
import { useCursorUpdate } from "../../../../hooks/CursorContext";
import MeImg from "./../../../../assets/me.jpg";

const HeaderSection = () => {
    const cursorUpdate = useCursorUpdate();
    const navItems = [
        {route: "/", text: "Home"},
        {route: "/work", text: "Work"},
        {route: "/about", text: "About"},
    ];

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };
    
    return (
        <header>
            <div id="header--title">
                <span>Creative</span>
                <span>Developer</span>
                <span>{"<Student/>"}</span>
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

            <div id="header--about">
                <div className="paragraph">
                    <h3>Hi, I'm <span>Jari</span></h3>
                    <p>
                        I’m a student developer with a passion for programming and design. 
                        <span onMouseEnter={cursorUpdate} onMouseLeave={cursorUpdate}> 
                            <a href="https://google.com"> Lets get in touch!</a>
                        </span>
                    </p>
                </div>
                <img className="image" src={MeImg} alt=""></img>
            </div>

            <div id="header--scroll-button">
                <div className="scroll-button" onMouseEnter={cursorUpdate} onMouseLeave={cursorUpdate}>
                    <span/>
                </div>
                <p>But there is more to see!</p>
            </div>
        </header>
    );
};

export default HeaderSection;