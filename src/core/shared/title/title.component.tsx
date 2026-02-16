import classNames from 'classnames';
import css from './title.module.scss';
import React from 'react';
import { ITitleProps } from './title';

const TitleComponent = ({ className, color, page, title1, title2, description, type = 'primary', }: ITitleProps) => {
  const classes = classNames(css.header, className, {
    [css.header_primary]: type === 'primary',
    [css.header_secondary]: type === 'secondary',
  });
  return (
    <div className={classes}>
      <span className={css.page}>{page}</span>
      <div className={css.title}>
        <h1>{title1} <span className={css.accentText}>{title2}</span></h1>
      </div>
      <div className={css.divider}></div>
      <div className={css.desc}>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default TitleComponent;
