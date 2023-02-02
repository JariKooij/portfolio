import { useState } from "react";
import { useCursorUpdate } from "../../../../hooks/CursorContext";

const ContactSection = () => {
    const cursorUpdate = useCursorUpdate();
    const [emailHover, setEmailHover] = useState(false);

    return (
        <div id="contactsection">
            <div>
                <p>
                    <span>Come say hi!</span>
                    {emailHover ?
                        <span>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><defs></defs><rect x="1" y="1" width="22" height="22" rx="7.656" /><path className="b" d="M8.907 9.844a.182.182 0 0 1-.331.1 2.016 2.016 0 0 0-.569-.567 1.731 1.731 0 0 0-1.915 0 2.016 2.016 0 0 0-.571.569.182.182 0 0 1-.331-.1 1.632 1.632 0 0 1 .346-1.023 1.927 1.927 0 0 1 3.026 0 1.64 1.64 0 0 1 .345 1.021zM18.81 9.844a.182.182 0 0 1-.331.1 2.026 2.026 0 0 0-.568-.567 1.732 1.732 0 0 0-1.916 0 2.016 2.016 0 0 0-.571.569.182.182 0 0 1-.331-.1 1.632 1.632 0 0 1 .346-1.023 1.927 1.927 0 0 1 3.026 0 1.64 1.64 0 0 1 .345 1.021z"/><path className="c" d="M23 13.938a14.69 14.69 0 0 1-12.406 6.531c-5.542 0-6.563-1-9.142-2.529A7.66 7.66 0 0 0 8.656 23h6.688A7.656 7.656 0 0 0 23 15.344z"/><path className="b" d="M15.633 12.993A7.322 7.322 0 0 1 12 14.044a7.322 7.322 0 0 1-3.633-1.051c-.363-.241-.478-.215-.478-.129 0 1.056 2.055 1.708 4.111 1.708s4.111-.652 4.111-1.708c0-.086-.111-.112-.478.129z"/><path className="c" d="M13.136 15.183a2.262 2.262 0 0 1-2.272 0c-.268-.2-.252.381.341.536a2.786 2.786 0 0 0 .8.172 2.786 2.786 0 0 0 .8-.172c.583-.155.595-.739.331-.536z"/></svg>    
                        </span>
                    :
                        <span>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><defs></defs><rect x="1" y="1" width="22" height="22" rx="7.656"/><path className="b" d="M7.055 7.313A1.747 1.747 0 1 0 8.8 9.059a1.747 1.747 0 0 0-1.745-1.746zM16.958 7.313A1.747 1.747 0 1 0 18.7 9.059a1.747 1.747 0 0 0-1.742-1.746zM14 11.207a.32.32 0 0 0-.313.327 2.1 2.1 0 0 1-.5 1.33A1.593 1.593 0 0 1 12 13.3a1.6 1.6 0 0 1-1.187-.43 2.088 2.088 0 0 1-.5-1.334.32.32 0 1 0-.64-.012 2.712 2.712 0 0 0 .679 1.791 2.211 2.211 0 0 0 1.648.623 2.211 2.211 0 0 0 1.647-.626 2.718 2.718 0 0 0 .679-1.791.322.322 0 0 0-.326-.314z"/><path className="c" d="M23 13.938a14.69 14.69 0 0 1-12.406 6.531c-5.542 0-6.563-1-9.142-2.529A7.66 7.66 0 0 0 8.656 23h6.688A7.656 7.656 0 0 0 23 15.344z"/></svg>
                        </span>
                    }                    
                </p>
                <a href="mailto:jarikooij@gmail.com" 
                onMouseEnter={() => {cursorUpdate(); setEmailHover(true);}} 
                onMouseLeave={() => {cursorUpdate(); setEmailHover(false);}}
                >
                    jarikooij@gmail.com
                </a>
            </div>
            
            <a id="contactsection--circle" href="mailto:jarikooij@gmail.com" 
                onMouseEnter={() => {cursorUpdate(); setEmailHover(true);}} 
                onMouseLeave={() => {cursorUpdate(); setEmailHover(false);}}
                >
                <span/>
            </a>
        </div>
    );
};

export default ContactSection;
