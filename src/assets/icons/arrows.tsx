import {IIconProps} from '@/assets/icons/icons';

export const ArrowDown = () => {
    return (
        <svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none'>
            <path d='M6 9L12 15L18 9' stroke='#0E1726' strokeWidth='1.5' strokeLinecap='round' strokeLinejoin='round'/>
        </svg>
    );
};
export const ArrowUp = () => {
    return (
        <svg xmlns='http://www.w3.org/2000/svg' width='14' height='8' viewBox='0 0 14 8' fill='none'>
            <path d='M1 7L7 1L13 7' stroke='#0E1726' strokeWidth='1.5' strokeLinecap='round' strokeLinejoin='round'/>
        </svg>
    );
};
export const ArrowRight = ({color = 'none'}: IIconProps) => {
    return (
        <svg xmlns='http://www.w3.org/2000/svg' width='32' height='32' viewBox='0 0 32 32' fill='none'>
            <path d='M19.2402 7.90668L27.3336 16L19.2402 24.0933' stroke='currentColor' strokeWidth='2.4'
                  strokeMiterlimit='10' strokeLinecap='round' strokeLinejoin='round'/>
            <path d='M4.66699 16H27.107' stroke='currentColor' strokeWidth='2.4' strokeMiterlimit='10'
                  strokeLinecap='round' strokeLinejoin='round'/>
        </svg>
    );
};


export const ArrowRightPagination = ({color = 'none'}: IIconProps) => {
    return (
        <svg xmlns='http://www.w3.org/2000/svg' width='18' height='12' viewBox='0 0 18 12' fill='none'>
            <path d='M1 6H17M17 6L12 1M17 6L12 11' stroke='currentColor' strokeWidth='1.5' strokeLinecap='round'
                  strokeLinejoin='round'/>
        </svg>
    );
};

export const ArrowLeftPagination = ({color = 'none'}: IIconProps) => {
    return (
        <svg xmlns='http://www.w3.org/2000/svg' width='18' height='12' viewBox='0 0 18 12' fill='none'>
            <path d='M17 6H1M1 6L6 1M1 6L6 11' stroke='currentColor' strokeWidth='1.5' strokeLinecap='round'
                  strokeLinejoin='round'/>
        </svg>
    );
};


export const ArrowLeft = ({color = 'none'}: IIconProps) => {
    return (
        <svg xmlns='http://www.w3.org/2000/svg' width='32' height='32' viewBox='0 0 32 32' fill='none'>
            <path d='M12.7603 7.90668L4.66699 16L12.7603 24.0933' stroke='currentColor' strokeWidth='2.4'
                  strokeMiterlimit='10' strokeLinecap='round' strokeLinejoin='round'/>
            <path d='M27.3336 16H4.89355' stroke='currentColor' strokeWidth='2.4' strokeMiterlimit='10'
                  strokeLinecap='round' strokeLinejoin='round'/>
        </svg>
    );
};


export const ArrowDownload = ({color = 'none'}: IIconProps) => {
    return (
        <svg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
            <path d='M21 21H3M18 11L12 17M12 17L6 11M12 17V3' stroke='#697586' strokeWidth='2' strokeLinecap='round'
                  strokeLinejoin='round'/>
        </svg>

    );
};



