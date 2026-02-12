import css from './loader.module.scss';
const LoaderComponent = () => {
  return (
    <div className={css.container}>
      <div className={css.loader}>
    Loader...
      </div>
    </div>
  );
};

export default LoaderComponent;
