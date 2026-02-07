import {useMemo} from 'react';
import {IHeading} from '@/core/shared/heading/heading';
import css from './heading.module.scss';
import classNames from 'classnames';
import Link from 'next/link';
import {ChevronRight} from '@/assets/icons/chevron';

const HeadingComponent = ({
                              title,
                              desc,
                              line = false,
                              white = false,
                              documentLine=false,
                              children,
                              colorTitle,
                              noSpacing,
                              size,
                              className = '',
                              link = ''
                          }: IHeading) => {

    const col = useMemo(() => {
        return line || !desc ? 'col-12 mb-16' : 'col-12 col-lg-6 mb-16';
    }, [desc, line]);
    const titleClasses = classNames({
        [css.title]: true,
        [css.title_white]: white,
        [css.title_mobile]: !desc
    });
    const descClasses = classNames({
        [css.desc]: true,
        [css.desc_mobile_link]: link
    });
    const descContentClasses = classNames({
        [css.desc_content]: true,
        [css.desc_content_white]: white,
        [css.desc_content_gray]: colorTitle === 'gray',
    });
    const descLinedClasses = classNames({
        [css.desc_lined]: true,
        [css.desc_lined_white]: white,
    });
    const rowClasses = classNames({
        [className]: className,
        'row align-center justify-end': true,
      [css.margin]: !noSpacing && desc !== null,
        [css.small]: size === 'sm',

    });
    return (
      <div className={rowClasses}>
        <div className={col}>
          <h1 dangerouslySetInnerHTML={{ __html: `${title}` }} className={titleClasses}></h1>
        </div>
        <div className={line ? 'col-lg-12' : 'col-lg-6'}>
          {children ? (
            <div>{children}</div>
          ) : desc ? (
            <div className={descClasses}>
              {link ? (
                <Link
                  href={link}
                  className={line ? descLinedClasses : descContentClasses}
                  dangerouslySetInnerHTML={{ __html: desc }}
                ></Link>
              ) : (
                  !documentLine && <span
                  className={line ? descLinedClasses : descContentClasses}
                  dangerouslySetInnerHTML={{ __html: desc }}
                ></span>
                
              )}
              <ChevronRight />
            </div>
          ) : (
            ''
          )}
        </div>
      </div>
    );
};

export default HeadingComponent;
