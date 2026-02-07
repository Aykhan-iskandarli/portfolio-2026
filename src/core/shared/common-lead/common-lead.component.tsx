 import css from './common-lead.module.scss';
import {ICommonLead} from '@/core/shared/common-lead/common-lead';
import classNames from 'classnames';
import BreadcrumbComponent from '@/core/shared/breadcrumb/breadcrumb.component';
import ButtonComponent from '@/core/shared/button/button.component';
import {ArrowNarrowRight} from '@/assets/icons/arrow-narrow-right';
import Image from 'next/image';
import HeadingComponent from '@/core/shared/heading/heading.component';
import SafeImage from '@/core/shared/safe-image/safe-image.component';
import {ContentTranslations} from '@/core/helpers/dynamic-content';
import {usePage} from '@/core/layouts/public/actions/public.queries';

const CommonLeadComponent = ({
                                 title,
                                 subtitle,
                                 position = 'center',
                                 classes = '',
                                 lastBreadcrumbItem,
                                 lines,
                                 link,
                                 children, img, date, service, description, mobile,
                             }: ICommonLead) => {

    const {data: pages} = usePage(20);
    const more = ContentTranslations(pages?.dynamicContents, 'web.common.shared.detail');

    const leadClasses = classNames({
        [classes]: classes,
    });
    const contentClasses = classNames({
        [css.content]: true,
        [css.content__lines]: lines,
    });

    const contentStyles = classNames({
        ['col-lg-12']: !img && !service,
        ['col-lg-7']: img,
        'col-lg-5': service,
        'text-center': position === 'center',
        'text-start': position === 'start',
        'h-100':true
    });
    const imgStyles = classNames({
        ['d-none']: !img,
        ['col-lg-5']: img,
        'text-center': position === 'center',
        'text-start': position === 'start',
    });

    const breadcrumbStyles = classNames({
        'justify-center': position === 'center',
        'justify-start': position === 'start',
    });

    const titleStyles = classNames({
        [css.title]: true,
        'mt-24': !date,
    });

    const wrapperClasses = classNames({
        [css.wrapper]: true,
        [css.wrapper__mobile]: service && mobile
    });
    return (
        <section className={leadClasses}>
            <div className={wrapperClasses}>
                <div className={contentClasses}>
                    <div className='container h-100'>
                        <div className={`row h-100 ${service ? 'align-end' : 'align-center'}`}>
                            <div className={contentStyles}>
                                <div className={css.content_wrapper}>
                                    <BreadcrumbComponent classes={breadcrumbStyles} lastItem={lastBreadcrumbItem} title={title}/>

                                    <div>
                                        {mobile &&
                                            children
                                        }
                                        {date ? <div className={css.date}>{date}</div> : ''}
                                        {
                                            service ?
                                                <HeadingComponent className={css.margin} title={title} desc={description}
                                                                  white
                                                                  line/>
                                                :
                                                <h1 className={titleStyles} dangerouslySetInnerHTML={{__html: title}}>
                                                </h1>
                                        }
                                        <div className={css.subTitle} dangerouslySetInnerHTML={{__html: subtitle}}></div>
                                        {
                                            link &&
                                            <div className='mt-24'>
                                                <ButtonComponent link={link} type='info'>
                                                    {more?.content} <ArrowNarrowRight className={'ml-10'}/>
                                                </ButtonComponent>
                                            </div>
                                        }

                                    </div>
                                </div>
                            </div>
                            {
                                <div className={imgStyles}>
                                    <div className={css.image_container}>
                                        <SafeImage className={css.img} src={img ? img : ''} alt={'AzInTelecom'} width={100}
                                                   height={100}/>
                                    </div>
                                </div>
                            }
                            {!mobile &&
                                children
                            }

                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
        ;
};

export default CommonLeadComponent;
