import {getLocale} from '@/core/helpers/local-storage';

export enum Routes {
    // default = '/',
    auth = '/auth',
    home = '/',
    about = '/about',
    contact = '/contact',
    corporate = '/corporate-environment',
    documents = '/documents',
    news = '/news',
    projects = '/projects',
    successes = '/successes',
    services = '/services',
    vacancy = '/vacancy',
}


export const goTo = (route: string, param: string | number | null) => {
    return route + '/' + param;
};


export const goToWithLocale = (route: string, param?: string | number | null) => {
    if (param) {
        return '/' + getLocale() + route + '/' + param;
    }
    return '/' + getLocale() + route;
};

export const goToWithQuery = (route: string, param:any) => {
    let path = route + '?';
    if (param)
        for (const key in param) {
            if (path.substr(path.length - 1) !== '?')
                path += '&';
            path += key + '=' + param[`${key}`];
        }
    return path;
};

// function to replace dynamic values like :packageId with actual values
export const goToWithDynamicValues = (route: string, param: any) => {
    let path = route;
    if (param)
        for (const key in param) {
            path = path.replace(`:${key}`, param[`${key}`]);
        }
    return path;
};
