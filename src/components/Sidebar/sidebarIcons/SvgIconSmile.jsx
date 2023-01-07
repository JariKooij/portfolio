import { useCursorUpdate } from "../../../hooks/CursorContext";

const SvgIconSmile = () => {
    const url = "https://www.google.com";
    const cursorUpdate = useCursorUpdate();    
    return (
        <div 
            className="sidebar-icon--wrapper" 
            onClick={() => { window.open(url, '_blank') }}
            onMouseEnter={cursorUpdate}
            onMouseLeave={cursorUpdate}
        >               
            <svg className="sidebar-icon icon--smiley">
            <path fillRule="evenodd" clipRule="evenodd" d="M11.3943 4.39528C11.3943 1.96697 9.42343 0 6.99331 0C4.56318 0 2.59227 1.96697 2.59227 4.39528C2.59227 6.82359 4.56318 8.79304 6.99331 8.79304C9.42343 8.79304 11.3943 6.82359 11.3943 4.39528ZM25.1075 4.39528C25.1075 1.96697 23.1391 0 20.709 0C18.2788 0 16.3079 1.96697 16.3079 4.39528C16.3079 6.82359 18.2788 8.79304 20.709 8.79304C23.1391 8.79304 25.1075 6.82359 25.1075 4.39528ZM14.0489 28C21.1939 28 27.1031 22.7114 28.0729 15.8389C28.2273 14.7452 27.317 13.8446 26.2124 13.8446H1.88544C0.780871 13.8446 -0.129405 14.7452 0.0249425 15.8389C0.994801 22.7115 6.90401 28 14.0489 28Z"/>
            </svg>

        </div>
    );
}

export default SvgIconSmile;