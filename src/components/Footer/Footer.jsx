import { useState } from "react";
import { NavLink } from "react-router-dom";

export default function Footer() {
    const [emailHovered, setEmailHovered] = useState(false);
    return(
        <footer>
            <nav>
                <ul>
                    <li>
                        <NavLink 
                            to="/" 
                            className={({ isActive }) =>
                                (isActive ? "navlink--selected " : "") + "navlink"
                            }
                        >
                            Home
                            <span/>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink 
                            to="/work" 
                            className={({ isActive }) =>
                                (isActive ? "navlink--selected " : "") + "navlink"
                            }
                        >
                            Work
                            <span/>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink 
                            to="/about" 
                            className={({ isActive }) =>
                                (isActive ? "navlink--selected " : "") + "navlink"
                            }
                        >
                            About
                            <span/>
                        </NavLink>
                    </li>
                </ul>
            </nav>

            <div id="footer--contact">
                <p>Hit me up!</p>
                <p>
                    <a 
                        href="mailto:jarikooij@gmail.com" 
                        onMouseEnter={() => {setEmailHovered(true)}}
                        onMouseLeave={() => {setEmailHovered(false)}}
                    >
                        jarikooij@gmail.com
                    </a>
                </p>
                <div id="footer--contact-arrow">
                    <span className={emailHovered ? "hovered" : ""}/>
                </div>
            </div>
        </footer>
    );
}