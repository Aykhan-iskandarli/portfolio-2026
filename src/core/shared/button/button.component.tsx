import Link from 'next/link';
import {IButton} from '@/core/shared/button/button';
import css from './button.module.scss';
import classNames from 'classnames';

const ButtonComponent = ({link, type = 'primary', btnType, className = '', full, children, click}: IButton) => {
    const classes = classNames({
        [css.button]: true,
        [className]: className,
        [css.button_primary]: type === 'primary',
        [css.button_secondary]: type === 'secondary',
        [css.button_info]: type === 'info',
        [css.button_dark]: type === 'link_dark',
        [css.button_gray]: link ? type === 'link' : type === 'outlined',
        'w-100': full,
    });
    return (
        <>
            {
                link ? <Link href={link} className={classes} target={link.startsWith('/') ? '_self' : '_blank'}>
                        {children}
                    </Link>
                    :
                    <button type={btnType} className={classes} onClick={() => click ? click() : null}>
                        {children}
                    </button>
            }
        </>
    );
};

export default ButtonComponent;
