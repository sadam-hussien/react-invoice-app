import React from "react";

// moon icon
export const IconMoon = ({style}) => {
    return (
        <svg 
            className="icon"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 32 32"
            style={{...style}}>
            <path d="M16.11 31.5c7.6 0 14.06-5.43 15.37-12.91a1.5 1.5 0 00-2.29-1.52 10.297 10.297 0 01-5.6 1.65c-5.68 0-10.31-4.63-10.31-10.31 0-1.99.57-3.93 1.65-5.6A1.501 1.501 0 0013.41.52 15.574 15.574 0 00.5 15.89c0 8.61 7 15.61 15.61 15.61z"></path>
        </svg>
    );
}

// sun icon
export const IconSun = ({style}) => {
    return (
        <svg
            className="icon"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 32 32"
            style={{...style}}>
            <circle cx="16" cy="16" r="9"></circle>
            <path d="M17.5 4.139V2a1.5 1.5 0 00-3 0v2.139a1.5 1.5 0 003 0zM8.674 8.673a1.5 1.5 0 000-2.121L7.16 5.04A1.5 1.5 0 105.04 7.161l1.512 1.512a1.498 1.498 0 002.122 0zM2 17.5h2.138a1.5 1.5 0 000-3H2a1.5 1.5 0 000 3zm3.04 9.46a1.496 1.496 0 002.121 0l1.512-1.512a1.5 1.5 0 10-2.12-2.12l-1.513 1.51a1.5 1.5 0 000 2.122zm9.46.901V30a1.5 1.5 0 003 0v-2.139a1.5 1.5 0 00-3 0zm10.339-.901a1.496 1.496 0 002.121 0 1.5 1.5 0 000-2.121l-1.512-1.512a1.5 1.5 0 10-2.12 2.121l1.51 1.512zM30 14.5h-2.139a1.5 1.5 0 000 3H30a1.5 1.5 0 000-3zm-3.04-9.46a1.5 1.5 0 00-2.121 0l-1.512 1.512a1.5 1.5 0 102.121 2.12l1.512-1.51a1.5 1.5 0 000-2.122z"></path>
        </svg>
    );
}

// avatar icon
export const IconAvatar = ({style}) => {
    return (
        <svg
            className="icon"
            xmlns="http://www.w3.org/2000/svg"
            width="48"
            height="48"
            viewBox="0 0 48 48"
            style={{...style}}>
            <path d="M24 8c-4.42 0-8 3.58-8 8 0 4.41 3.58 8 8 8s8-3.59 8-8c0-4.42-3.58-8-8-8zm0 20c-5.33 0-16 2.67-16 8v4h32v-4c0-5.33-10.67-8-16-8z"></path>
            <path fill="none" d="M0 0h48v48H0z"></path>
        </svg>
    );
} 

// chevron icon 
export const IconArrowDown = ({style}) => {
    return (
        <svg 
            className="icon"
            xmlns="http://www.w3.org/2000/svg" width="11" height="7"
            style={{...style}}>
            <path
                fill="none"
                stroke="#7C5DFA"
                strokeWidth="2"
                d="M1 1l4.228 4.228L9.456 1"
            ></path>
        </svg>
    );
}

// arrow left
export const IconArrowLeft = ({style}) => {
    return (
        <svg 
            className="icon"
            xmlns="http://www.w3.org/2000/svg" width="7" height="10"
            style={{...style}}>
            <path
                fill="none"
                stroke="#9277FF"
                strokeWidth="2"
                d="M6.342.886L2.114 5.114l4.228 4.228"
            ></path>
        </svg>
    );
}

// arrow right
export const IconArrowRight = ({style}) => {
    return (
        <svg 
            className="icon"
            xmlns="http://www.w3.org/2000/svg" width="7" height="10"
            style={{...style}}>
            <path
                fill="none"
                stroke="#7C5DFA"
                strokeWidth="2"
                d="M1 1l4 4-4 4"
            ></path>
        </svg>
    );
}

// plus icon
export const IconPlus = ({style}) => {
    return (
        <svg 
            className="icon"
            xmlns="http://www.w3.org/2000/svg"
            width="11"
            height="11"
            style={{...style}}>
            <path
                d="M6.313 10.023v-3.71h3.71v-2.58h-3.71V.023h-2.58v3.71H.023v2.58h3.71v3.71z"
            ></path>
        </svg>
    );
}

// date icon
export const IconDate = ({style}) => {
    return (
        <svg
            className="icon"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            style={{...style}}>
            <path fill="none" d="M0 0h24v24H0V0z"></path>
            <path d="M19 4h-1V3c0-.55-.45-1-1-1s-1 .45-1 1v1H8V3c0-.55-.45-1-1-1s-1 .45-1 1v1H5c-1.11 0-1.99.9-1.99 2L3 20a2 2 0 002 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 15c0 .55-.45 1-1 1H6c-.55 0-1-.45-1-1V9h14v10zM7 11h2v2H7zm4 0h2v2h-2zm4 0h2v2h-2z"></path>
        </svg>
    );
}

// delete icon
export const IconDelete = ({style}) => {
    return (
        <svg
            className="icon"
            xmlns="http://www.w3.org/2000/svg"
            width="48"
            height="48"
            viewBox="0 0 48 48"
            style={{...style}}>
            <path d="M12 38c0 2.21 1.79 4 4 4h16c2.21 0 4-1.79 4-4V14H12v24zM38 8h-7l-2-2H19l-2 2h-7v4h28V8z"></path>
            <path fill="none" d="M0 0h48v48H0z"></path>
        </svg>
    );
}