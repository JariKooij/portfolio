import { useState, useContext, createContext } from "react";

const CursorContext = createContext();
const CursorUpdateContext = createContext();

export const useCursor = () => {
    return useContext(CursorContext);
};

export const useCursorUpdate = () => {
    return useContext(CursorUpdateContext);
};

export const CursorProvider = ({children}) => {
    const [isHovering, setIsHovering] = useState(false);

    const updateHover = () => {
        setIsHovering((prev) => !prev);
    };

    return (
        <CursorContext.Provider value={isHovering}>
            <CursorUpdateContext.Provider value={updateHover}>
                {children}
            </CursorUpdateContext.Provider>
        </CursorContext.Provider>
    );
};