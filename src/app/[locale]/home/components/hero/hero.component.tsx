'use client';
import ButtonComponent from '@/core/shared/button/button.component';
import css from './hero.module.scss';

const HeroComponent = () => {

  return (
    <div className={css.hero}>
      <div className='container'>
        <div className='row'>
          <div className='col-lg-6'>
            <div className={css.content}>
              <div className={css.badge}>
                <span>Full Stack Developer
                </span>
              </div>
              <div className={css.title}>
                <div className={css.text}>Crafting Code <span>That Connect</span> <p>The World</p></div>
              </div>
              <div className={css.desc}>
                <p>Transforming visions into immersive web experiences with cutting-edge technology and futuristic design</p>
              </div>
              <div className='d-flex'>
                <ButtonComponent className='mr-5'>initiate contact</ButtonComponent>
                <ButtonComponent type='secondary'>view projects</ButtonComponent>
              </div>
            </div>
          </div>
          <div className='col-lg-6'>
          salam
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroComponent;
