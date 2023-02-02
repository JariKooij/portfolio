import SvgIconGithub from "../../assets/socialIcons/SvgIconGithub";
import SvgIconLinkedin from "../../assets/socialIcons/SvgIconLinkedin";
import SvgIconMail from "../../assets/socialIcons/SvgIconMail";
import SvgIconSmile from "../../assets/socialIcons/SvgIconSmile";

const Sidebar = () => {
    return (
        <div id="sidebar">
            <div id="sidebar--img"/>
            <SvgIconSmile />
            <div id="sidebar--icons-bottom">
                <SvgIconMail />
                <SvgIconLinkedin />
                <SvgIconGithub />
            </div>            
        </div>
    );
};

export default Sidebar;