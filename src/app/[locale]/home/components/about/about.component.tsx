'use client';
import Image from 'next/image';
import css from './about.module.scss';
import aboutImg from '@assets/images/statics/about.jpg';
import TitleComponent from '@/core/shared/title/title.component';
import SkillsComponent from '@/core/shared/skills/skills.component';
import { skills } from '.';
import ButtonComponent from '@/core/shared/button/button.component';

const AboutComponent = () => {
  return (
    <div className={css.about}>
      <div className='container'>
        <TitleComponent page={'//About'} title1={'The Mind Behind'} title2={'The Code'} />
        <div className='row '>
          <div className='col-sm-12 col-md-12 col-lg-6'>
            <div className={css.aboutLeft}>
              <div className={css.exp}>
                <div className={css.text}>
                  <p>5+</p>
                  <span>Years Experience</span>
                </div>
              </div>
              <Image src={aboutImg} alt='picture' />
              <div className={css.projects}>
                <div className={css.text}>
                  <p>200+</p>
                  <span>Projects Completed</span>
                </div>
              </div>
            </div>
          </div>
          <div className='col-sm-12 col-md-12 col-lg-6'>
            <div className={css.rightHeader}>
              <div className={css.position}>
                <p>Digital Architect</p> <b>&</b> <span>Problem Solver</span>
              </div>
              <div className={css.aboutMe}>
                <p>
                  I am Aykhan Iskandarli, a senior full-stack developer specializing in creating
                  immersive digital experiences that merge cutting-edge technology with futuristic
                  design. With expertise spanning various tech stacks and a deep understanding of
                  both front-end aesthetics and back-end architecture, I craft solutions that
                  transcend conventional boundaries. After founding two successful startups and
                  working with industry leaders like Tesla and Neuralink, I now focus on
                  transforming ambitious ideas into reality through code, innovation, and relentless
                  pursuit of technological excellence.
                </p>
              </div>
            </div>
            <SkillsComponent data={skills} />
            <div className='mt-5'>
              <ButtonComponent type='secondary'>Download Resume</ButtonComponent>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutComponent;
