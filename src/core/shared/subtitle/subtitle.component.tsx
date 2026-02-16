import css from './subtitle.module.scss';
import React from 'react';
import { ISubtitleComponentProps } from '@/core/shared/subtitle/subtitle';
import classNames from 'classnames';

const SubtitleComponent = ({ children, position }: ISubtitleComponentProps) => {
  const wrapperClasses = classNames({
    [css.wrapper]: true,
    'justify-start': position === 'start',
    'justify-center': position === 'center',
    'justify-end': position === 'end',
    'ml-35': true,

  });
  return (
    <div className={wrapperClasses}>
      <h3><span >{children}</span></h3>
    </div>
  );
};

export default SubtitleComponent;
