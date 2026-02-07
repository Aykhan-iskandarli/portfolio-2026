import {getLocale} from '@/core/helpers/local-storage';

export const getMonth = (date: string) => {
    const lang = getLocale();
    const dateObj = new Date(date);
    // TODO translate months

    const month = dateObj.getMonth();
    if (lang === 'en') {
        switch (month) {
            case 0:
                return 'January';
            case 1:
                return 'February';
            case 2:
                return 'March';
            case 3:
                return 'April';
            case 4:
                return 'May';
            case 5:
                return 'June';
            case 6:
                return 'July';
            case 7:
                return 'August';
            case 8:
                return 'September';
            case 9:
                return 'October';
            case 10:
                return 'November';
            case 11:
                return 'December';
            default:
                return '';
        }
    }
    else if (lang === 'ru') {
        switch (month) {
            case 0:
                return 'Январь';
            case 1:
                return 'Февраль';
            case 2:
                return 'Март';
            case 3:
                return 'Апрель';
            case 4:
                return 'Май';
            case 5:
                return 'Июнь';
            case 6:
                return 'Июль';
            case 7:
                return 'Август';
            case 8:
                return 'Сентябрь';
            case 9:
                return 'Октябрь';
            case 10:
                return 'Ноябрь';
            case 11:
                return 'Декабрь';
            default:
                return '';
        }
    }
    else {
        switch (month) {
            case 0:
                return 'Yanvar';
            case 1:
                return 'Fevral';
            case 2:
                return 'Mart';
            case 3:
                return 'Aprel';
            case 4:
                return 'May';
            case 5:
                return 'İyun';
            case 6:
                return 'İyul';
            case 7:
                return 'Avqust';
            case 8:
                return 'Sentyabr';
            case 9:
                return 'Oktyabr';
            case 10:
                return 'Noyabr';
            case 11:
                return 'Dekabr';
            default:
                return '';
        }
    }
};

export const getFullDate = (date: string) => {
    const dateObj = new Date(date);

    const month = dateObj.getMonth();
    const day = dateObj.getDate();
    const year = dateObj.getFullYear();

    return `${day} ${getMonth(date)} ${year}`;
};