import {IIconProps} from '@/assets/icons/icons';

export const ChevronRight = ({className, color='#9AA4B2'}: IIconProps) => {
    return (
        <svg className={className} xmlns='http://www.w3.org/2000/svg' width='21' height='20' viewBox='0 0 21 20'
             fill='none'>
            <path d='M8 15L13 10L8 5' stroke={color ? color: '#9AA4B2'} strokeWidth='1.2' strokeLinecap='round'
                  strokeLinejoin='round'/>
        </svg>
    );
};


export const ChevronRightLarge = ({className}: IIconProps) => {
    return (
        <svg className={className} xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none'>
            <path
                d='M16.5705 12C16.5705 11.7074 16.4585 11.4149 16.2357 11.192L9.3788 4.33513C8.93196 3.88829 8.2097 3.88829 7.76286 4.33513C7.31602 4.78197 7.31602 5.50423 7.76286 5.95107L13.8118 12H16.5705Z'
                fill='currentColor'/>
            <path
                d='M13.8118 12L7.76286 18.0489C7.31602 18.4958 7.31602 19.218 7.76286 19.6649C8.2097 20.1117 8.93196 20.1117 9.3788 19.6649L16.2357 12.808C16.4585 12.5851 16.5705 12.2926 16.5705 12H13.8118Z'
                fill='currentColor'/>
        </svg>
    );
};

export const ChevronLeftLarge = ({className}: IIconProps) => {
    return (
        <svg className={className} xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none'>
            <path
                d='M7.42773 12C7.42773 12.2926 7.53973 12.5851 7.76258 12.808L14.6195 19.6649C15.0664 20.1117 15.7886 20.1117 16.2355 19.6649C16.6823 19.218 16.6823 18.4958 16.2355 18.0489L10.1865 12H7.42773Z'
                fill='currentColor'/>
            <path
                d='M10.1865 12L16.2355 5.95107C16.6823 5.50423 16.6823 4.78197 16.2355 4.33513C15.7886 3.88829 15.0664 3.88829 14.6195 4.33513L7.76258 11.192C7.53973 11.4149 7.42773 11.7074 7.42773 12H10.1865Z'
                fill='currentColor'/>
        </svg>
    );
};

export const ChevronDown = ({className}: IIconProps) => {
    return (
        <svg xmlns='http://www.w3.org/2000/svg' width='20' height='20' viewBox='0 0 20 20' fill='none'>
            <path d='M5 7.5L10 12.5L15 7.5' stroke='#202939' strokeWidth='1.6' strokeLinecap='round'
                  strokeLinejoin='round'/>
        </svg>
    );
};