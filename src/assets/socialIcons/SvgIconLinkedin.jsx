import { useCursorUpdate } from "../../hooks/CursorContext";

const SvgIconLinkedin = () => {
    const url = "https://www.google.com";
    const cursorUpdate = useCursorUpdate();
    return (
        <div 
            className="icon--wrapper" 
            onClick={() => { window.open(url, '_blank') }}
            onMouseEnter={cursorUpdate}
            onMouseLeave={cursorUpdate}
        >            
            <svg className="icon icon--bottom" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M8 0C3.58172 0 0 3.58172 0 8V32C0 36.4183 3.58172 40 8 40H32C36.4183 40 40 36.4183 40 32V8C40 3.58172 36.4183 0 32 0H8ZM11.4425 11.585C11.9675 11.0451 12.2627 10.3126 12.263 9.5486C12.2634 8.78465 11.9689 8.05183 11.4445 7.51136C10.92 6.9709 10.2084 6.66705 9.46625 6.66667C8.72412 6.66629 8.01225 6.9694 7.48722 7.50933C6.9622 8.04925 6.66704 8.78177 6.66667 9.54572C6.6663 10.3097 6.96075 11.0425 7.48525 11.583C8.00974 12.1234 8.72132 12.4273 9.46345 12.4277C10.2056 12.428 10.9174 12.1249 11.4425 11.585ZM6.75061 14.5607H12.347V32.5926H6.75061V14.5607ZM15.6208 14.5607H21.1892L21.1333 16.9803C23.4558 12.6163 33.3333 12.2851 33.3333 21.1714V32.5926H27.8069V23.1302C27.8069 17.3692 21.1333 17.8588 21.1333 23.1302V32.5926H15.6208V14.5607Z"/>
            </svg>
        </div>
    );
};

export default SvgIconLinkedin;