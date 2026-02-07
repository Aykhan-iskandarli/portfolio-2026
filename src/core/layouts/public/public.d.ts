export interface IMenuItem {
    id: number;
    link: string;
    name: string;
}

export interface RequestFormType{
    email?: string;
}

export interface IUsefulLinks {
    id: number;
    url: string;
    name: string;
    orderNumber: number;
    fileUrl:string;
    fileAltText:string;
}

export interface IMenu {
    id: number;
    topPriority: number;
    rightPriority: number;
    name: string;
    url:string;
    menuItems:IMenuItems[];
}

export interface IMenuItems {
    id: number;
    priority: number;
    columnNumber: number;
    fileUrl:string;
    fileAltText:string;
    description:string;
    name: string;
    url:string;
}

export interface IPage {
    id: number;
    name: string;
    url:string;
    title: string;
    metaContent: string;
    script:string;
    title:string;
    description:string;
    titleDescription:IDynamicContents;
}

export interface IDynamicContents {
    key: string;
    url:string;
    content: string;
    dynamicContentFile: string;
}