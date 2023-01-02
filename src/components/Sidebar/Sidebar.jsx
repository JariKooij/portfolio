import SvgIconBehance from "./sidebarIcons/SvgIconBehance";
import SvgIconLinkedin from "./sidebarIcons/SvgIconLinkedin";
import SvgIconMail from "./sidebarIcons/SvgIconMail";
import SvgIconSmile from "./sidebarIcons/SvgIconSmile";

export default function Sidebar() {
    return (
        <div id="sidebar">
            <SvgIconSmile />
            <div id="sidebar--icons-bottom">
                <SvgIconMail />
                <SvgIconLinkedin />
                <SvgIconBehance />
            </div>            
        </div>
    );
}