import { SkillsComponentProps } from './skills';
import css from './skills.module.scss';
import React from 'react';



const SkillsComponent = ({ data }: SkillsComponentProps) => {
  return (
    <div className={css.skillsWrapper}>
      {data.map((skill) => (
        <div key={skill.id} className={css.skillItem}>
          <div className={css.skillHeader}>
            <span className={css.skillName}>{skill.name}</span>
            <span className={css.skillPercentage}>{skill.per}</span>
          </div>
          <div className={css.progressBar}>
            <div
              className={css.progressFill}
              style={{ width: skill.per }}
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default SkillsComponent;
