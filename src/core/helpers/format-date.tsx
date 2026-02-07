export const formatDate = (date: string): string => {
    const string = new Date(date);
    return formatDateDay(Number(string.getDate())) + '.' + formatDateDay(Number(string.getMonth()) + 1) + '.' + string.getFullYear();
};

export const formatDateDay = (day: number) => {
    let string = '';
    if (day < 10) {
        string = '0' + day;
    } else {
        string = day.toString();
    }
    return string;
};