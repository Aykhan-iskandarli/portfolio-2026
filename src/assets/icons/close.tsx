export const CloseIcon = () => {
    return (
        <svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none'>
            <path d='M18 6L6 18M6 6L18 18' stroke='white' strokeWidth='2' strokeLinecap='round'
                  strokeLinejoin='round'/>
        </svg>
    );
};


export const CloseModalIcon = ({color={
    fill: '#D0E2FF',
    stroke: '#001141'
}, click}: { color?: any, click?: any }) => {
    return (
        <svg onClick={click} width='32' height='32' viewBox='0 0 32 32' fill='none' xmlns='http://www.w3.org/2000/svg'>
            <circle cx='16' cy='16' r='16' fill={color.fill}/>
            <path d='M20 12L12 20M12 12L20 20' stroke={color.stroke} strokeWidth='2' strokeLinecap='round'
                  strokeLinejoin='round'/>
        </svg>

    );
};
