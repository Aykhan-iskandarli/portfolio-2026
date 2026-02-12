'use client';
import HeroComponent from './components/hero/hero.component';
import css from './home.module.scss';

const Home = () => {

  return (
    <div className={css.home}>
      <HeroComponent/>
    </div>
  );
};

export default Home;
