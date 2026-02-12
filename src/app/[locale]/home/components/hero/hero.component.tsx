'use client';
import ButtonComponent from '@/core/shared/button/button.component';
import css from './hero.module.scss';

const HeroComponent = () => {

  return (
    <div className={css.hero}>
      <div className={css.heroContent}>
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
              <div className={css.aboutMe}>
                <div className={css.leftContent}>
                  <div className={css.name}>
                    <p>{'<!-- Aykhan Iskandarli -->'}</p>
                  </div>

                  <div className={css.startDiv}>
                    {'<div'} <span>classes=</span>
                    <span>"developer-mode"</span>
                    {'>'}
                  </div>

                  <div className={css.startWebsite}>
                    <span>const</span>
                    <span>startWebsite</span>
                    {' = () '}
                    <span>→</span>
                    <span>{'{'}</span>
                  </div>

                  <div className={css.idea}>
                    <span>let</span>
                    <span>idea</span>
                    {' = '}
                    <span>"🚀 Launching innovation "</span>
                    <span>{';'}</span>
                  </div>

                  <div className={css.tools}>
                    <span>const</span>
                    <span>tools</span>
                    {' = '}
                    <span>["HTML", "CSS", "JavaScript", "React"]</span>
                    <span>{';'}</span>
                  </div>

                  <div className={css.mission}>
                    <span>const</span>
                    <span>mission</span>
                    {' = '}
                    <span>Craft seamless experiences</span>
                    <span>{';'}</span>
                  </div>

                  <div className={css.build}>
                    <span>const</span>
                    <span>build</span>
                    {' = ('}
                    <span>tools, mission</span>
                    <span>{')'}</span>
                    <span>→</span>
                    <span>{'{'}</span>
                  </div>

                  <div className={css.allTools}>
                    <span>return</span>
                    <span>tools</span>
                    {'.map('}
                    <span>tool</span>
                    <span>→</span>
                    <span>tool</span>
                    {' +'}
                    <span>" + "</span>
                    {'+ '}
                    <span>mission</span>
                    {');'}
                  </div>

                  <div className={`${css.sign} ml-5`}>{'};'}</div>

                  <div className={css.returns}>
                    <span>return</span>
                    <span>build</span>
                    {'('}
                    <span>tools, mission</span>
                    {');'}
                  </div>

                  <div className={`${css.sign} ml-3`}>{'};'}</div>
                  <div className={`${css.startDiv} mt-4`}>{'</div>'}</div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroComponent;
