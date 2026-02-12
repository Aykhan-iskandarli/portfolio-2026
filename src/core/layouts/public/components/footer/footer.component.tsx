'use client';
import css from './footer.module.scss';


const FooterComponent = () => {
  const year = new Date().getFullYear();


  return (
    <footer className={css.footer}>
      <div className='container-fluid'>;
        <div className='pb-24'>
          <div className={css.lower}>
            <div className='container'>
              <div className='row'>
                <div className='col-12'>
                  <div className='row py-32'>
                    <div className='col-lg-6'>
                      <p className={css.copyright}>
                        {year}







                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterComponent;
