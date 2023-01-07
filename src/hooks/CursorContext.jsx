import { useState, useContext, createContext } from "react";

const CursorContext = createContext();
const CursorUpdateContext = createContext();

export function useCursor() {
    return useContext(CursorContext);
}

export function useCursorUpdate() {
    return useContext(CursorUpdateContext);
}

export function CursorProvider({children}) {
    const [isHovering, setIsHovering] = useState(false);

    function updateHover() {
        setIsHovering((prev) => !prev);
    }

    return (
        <CursorContext.Provider value={isHovering}>
            <CursorUpdateContext.Provider value={updateHover}>
                {children}
            </CursorUpdateContext.Provider>
        </CursorContext.Provider>
    )
}