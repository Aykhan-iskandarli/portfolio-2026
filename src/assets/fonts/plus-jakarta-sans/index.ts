import localFont from 'next/font/local';

const plusjakarta = localFont({
    src: [
        {
            path: './PlusJakartaSans-Light.ttf',
            weight: '300',
            style: 'thin',
        },
        {
            path: './PlusJakartaSans-Regular.ttf',
            weight: '400',
            style: 'normal',
        },
        {
            path: './PlusJakartaSans-SemiBold.ttf',
            weight: '600',
            style: 'normal',
        },
        {
            path: './PlusJakartaSans-Bold.ttf',
            weight: '700',
            style: 'normal',
        },
        {
            path: './PlusJakartaSans-ExtraBold.ttf',
            weight: '900',
            style: 'normal',
        },
    ],
});

export default plusjakarta;
