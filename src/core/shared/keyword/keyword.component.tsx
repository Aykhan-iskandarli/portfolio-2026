import css from './keyword.module.scss';
import React from 'react';
import {IKeywordComponentProps} from '@/core/shared/keyword/keyword';
import classNames from 'classnames';

const KeywordComponent = ({children, className=''}: IKeywordComponentProps) => {
    const classes = classNames({
        [className]: className,
        [css.item]: true,
    });

    return (
        <div className={classes}>
            {children}
        </div>
    );
};

export default KeywordComponent;