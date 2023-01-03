import { NavLink } from "react-router-dom";

export default function Footer() {
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
                        </NavLink>
                    </li>
                </ul>
            </nav>

            <div id="footer--contact">
                <p>Hit me up!</p>
                <p><a href="mailto:jarikooij@gmail.com">jarikooij@gmail.com</a></p>
                <div id="footer--contact-arrow">
                    <span></span>
                    <i/>
                </div>
            </div>
        </footer>
    );
}