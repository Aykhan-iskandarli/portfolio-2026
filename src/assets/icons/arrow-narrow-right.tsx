import {IIconProps} from '@/assets/icons/icons';

export const ArrowNarrowRight = ({className}: IIconProps) => {
    return (
        <svg className={className} xmlns='http://www.w3.org/2000/svg' width='18' height='14' viewBox='0 0 18 14'
             fill='none'>
            <path d='M1 7H17M17 7L11 1M17 7L11 13' stroke='currentColor' strokeWidth='1.6' strokeLinecap='round'
                  strokeLinejoin='round'/>
        </svg>
    );
};