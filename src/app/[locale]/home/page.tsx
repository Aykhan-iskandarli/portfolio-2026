'use client';
import About from './components/about/about.component';
import HeroComponent from './components/hero/hero.component';
import ServicesComponent from './components/services/services.component';
import css from './home.module.scss';

const Home = () => {

  return (
    <div className={css.home}>
      <HeroComponent/>
      <About/>
      <ServicesComponent/>
    </div>
  );
};

export default Home;
