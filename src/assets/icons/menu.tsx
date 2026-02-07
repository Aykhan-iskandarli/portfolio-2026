import {IIconProps} from '@/assets/icons/icons';

export const MenuIcon = ({className}: IIconProps) => {
    return (
        <svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none'>
            <path
                d='M5.198 3.25H7.802C8.87579 3.25 9.75 4.12421 9.75 5.198V7.802C9.75 8.87579 8.87579 9.75 7.802 9.75H5.198C4.12421 9.75 3.25 8.87579 3.25 7.802V5.198C3.25 4.12421 4.12421 3.25 5.198 3.25Z'
                stroke='white' strokeWidth='1.5'/>
            <path
                d='M16.198 14.25H18.802C19.8758 14.25 20.75 15.1242 20.75 16.198V18.802C20.75 19.8758 19.8758 20.75 18.802 20.75H16.198C15.1242 20.75 14.25 19.8758 14.25 18.802V16.198C14.25 15.1242 15.1242 14.25 16.198 14.25Z'
                stroke='white' strokeWidth='1.5'/>
            <path
                d='M5.198 14.25H7.802C8.87579 14.25 9.75 15.1242 9.75 16.198V18.802C9.75 19.8758 8.87579 20.75 7.802 20.75H5.198C4.12421 20.75 3.25 19.8758 3.25 18.802V16.198C3.25 15.1242 4.12421 14.25 5.198 14.25Z'
                stroke='white' strokeWidth='1.5'/>
            <path
                d='M16.198 3.25H18.802C19.8758 3.25 20.75 4.12421 20.75 5.198V7.802C20.75 8.87579 19.8758 9.75 18.802 9.75H16.198C15.1242 9.75 14.25 8.87579 14.25 7.802V5.198C14.25 4.12421 15.1242 3.25 16.198 3.25Z'
                stroke='white' strokeWidth='1.5'/>


        </svg>
    );
};

export const HamburgerIcon = ({className, onClick}: IIconProps) => {
    return (
        <svg onClick={() => onClick ? onClick() : null} xmlns='http://www.w3.org/2000/svg' width='24' height='24'
             viewBox='0 0 24 24' fill='none'>
            <path d='M3 12H21M3 6H21M3 18H21' stroke='white' strokeWidth='2' strokeLinecap='round'
                  strokeLinejoin='round'/>
        </svg>
    );
};

export const CloseIcon = ({className, onClick}: IIconProps) => {
    return (<svg onClick={() => onClick ? onClick() : null} xmlns='http://www.w3.org/2000/svg' width='24' height='24'
                 viewBox='0 0 24 24'
                 fill='none'>
        <path d='M18 6L6 18M6 6L18 18' stroke='white' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round'/>
    </svg>);
};

export const SearchIcon = ({className, onClick, color='#202939'}: IIconProps) => {
    return <svg className={className} onClick={onClick} xmlns='http://www.w3.org/2000/svg' width='18' height='18'
                viewBox='0 0 18 18' fill='none'>
        <path fillRule='evenodd' clipRule='evenodd'
              d='M8.4822 1C12.6146 1 15.9643 4.34972 15.9643 8.48215C15.9643 12.6146 12.6146 15.9652 8.4822 15.9652C4.34972 15.9652 1 12.6146 1 8.48215C1 4.34972 4.34972 1 8.4822 1Z'
              stroke={color? color : '#202939'} strokeWidth='1.6' strokeLinecap='round' strokeLinejoin='round'/>
        <path d='M13.5742 13.9631L16.6186 16.9997' stroke={color? color : '#202939'} strokeWidth='1.6' strokeLinecap='round'
              strokeLinejoin='round'/>
    </svg>;
};