import {ThemeConfig} from 'antd';

export const themeConfig: ThemeConfig = {
    token: {
        controlHeight: 45,
        controlPaddingHorizontal: 100,
        controlPaddingHorizontalSM: 100,
        padding: 100,
        colorPrimary: 'red',
        borderRadius: 28
    },
    components: {
        Input: {
            borderRadius: 28,
            controlPaddingHorizontal: 100,
            controlPaddingHorizontalSM: 100,
            padding: 100,
            colorTextPlaceholder:'#657790'
        },

    },
};
