import SvgIconBehance from "./sidebarIcons/SvgIconGithub";
import SvgIconLinkedin from "./sidebarIcons/SvgIconLinkedin";
import SvgIconMail from "./sidebarIcons/SvgIconMail";
import SvgIconSmile from "./sidebarIcons/SvgIconSmile";

const Sidebar = () => {
    return (
        <div id="sidebar">
            <div id="sidebar--img"/>
            <SvgIconSmile />
            <div id="sidebar--icons-bottom">
                <SvgIconMail />
                <SvgIconLinkedin />
                <SvgIconBehance />
            </div>            
        </div>
    );
};

export default Sidebar;