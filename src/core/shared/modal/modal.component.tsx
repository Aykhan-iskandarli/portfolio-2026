import {IModalType} from '@/core/shared/modal/modal';
// import useLocalization from '@/assets/lang';
import dynamic from 'next/dynamic';
import scss from './modal.module.scss';
import Modal from 'antd/lib/modal';
import {CloseModalIcon} from "@/assets/icons/close";
import {useViewportWidth} from "@/core/hooks/useViewportSize";

const DynamicModal = dynamic(() => import('antd/lib/modal'), {ssr: false});
const DynamicDivider = dynamic(() => import('antd/lib/divider'), {ssr: false});

const ModalComponent = ({
                            isInfo,
                            children,
                            isModalOpen,
                            handleOk,
                            handleCancel,
                            closable = false,
                            classes,
                            width, colorIcon='blue'
                        }: IModalType) => {
    // const translate = useLocalization();

    const customFooter = (
        <div className={scss.wrapper}>
            <button className={scss.btnOk} onClick={handleOk}>
                {/*{translate('modal_onOk')}*/}
            </button>
        </div>
    );

    const widthWindow = useViewportWidth();
    return (
        <Modal rootClassName={classes} width={widthWindow < 768 ? '90%': width ? width: '80%' } centered={true} footer={isInfo ? customFooter : ''}
               className={scss.modal} open={isModalOpen}
               closable={closable} cancelText={'sss'} onCancel={handleCancel}
               cancelButtonProps={{className: scss.cancel}}

        >
            <div className={scss.modalIcon}>
                <CloseModalIcon color={colorIcon ==='white' ? {
                    fill: '#202939',
                    stroke: '#EEF2F6'
                } : {
                    fill: '#D0E2FF',
                    stroke: '#001141'
                }} click={() => handleCancel ? handleCancel() : ''}/>
            </div>

            {children}
            {/*<DynamicDivider/>*/}
        </Modal>
    );
};

export default ModalComponent;
