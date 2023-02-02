import { useState } from "react";
import { NavLink } from "react-router-dom";
import { useCursorUpdate } from "../../hooks/CursorContext";

const Footer = () => {
    const [emailHovered, setEmailHovered] = useState(false);
    const cursorUpdate = useCursorUpdate();

    const footerNavItems = [
        {route: "/", text: "Home"},
        {route: "/work", text: "Work"},
        {route: "/about", text: "About"},
    ];

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return(
        <footer>
            <div id="footer--content">
                <nav>
                    <ul>
                        {footerNavItems.map((item) => {
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

                <div id="footer--contact">
                    <p>Hit me up!</p>
                    <p>
                        <a 
                            href="mailto:jarikooij@gmail.com" 
                            onMouseEnter={() => {setEmailHovered(true); cursorUpdate();}}
                            onMouseLeave={() => {setEmailHovered(false); cursorUpdate();}}
                        >
                            jarikooij@gmail.com
                        </a>
                    </p>
                    <div id="footer--contact-arrow">
                        <span className={emailHovered ? "hovered" : ""}/>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;