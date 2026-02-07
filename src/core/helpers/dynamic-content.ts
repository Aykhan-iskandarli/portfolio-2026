export const ContentTranslations = (data: any, key: string) => {
    const filteredData = data?.find((item: any) => item.key === key);
    return filteredData ? {
        content: filteredData.content,
        dynamicContentFile: filteredData.dynamicContentFile,
    } : null;
};