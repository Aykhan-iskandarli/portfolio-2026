'use client';
import TitleComponent from '@/core/shared/title/title.component';
import css from './services.module.scss';
import { services } from '.';

const ServicesComponent = () => {
  return (
    <div className={css.services}>
      <div className='container'>
        <TitleComponent
          page={'//Services'}
          title1={'Digital'}
          title2={'Solutions '}
          type='secondary'
          description='Transforming visions into immersive digital experiences with precision and innovation. Each service is calibrated to exceed conventional expectations.'
        />
          <div className="row">
            
            {services.map((service: any) => (
                <div className='col-sm-12 col-md-6 col-lg-4'>
              <div key={service.id} className={css.servicesItem}>
                <div className={css.servicesIcon}>{service.icon}</div>
                <div className={css.servicesTitle}>
                  <h4>{service.title}</h4>
                </div>
                <div className={css.servicesDesc}>
                  <p>{service.desc}</p>
                </div>
                <div className={css.servicesItemList}>
                  {service.exp.map((item: any) => (
                    <p key={item.id}>{item.name}</p>
                  ))}
                </div>
              </div>
          </div>

            ))}
          </div>
      </div>
    </div>
  );
};

export default ServicesComponent;
