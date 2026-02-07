import React from 'react';

export interface IHeading {
    title: React.ReactNode | string;
    desc?: any;
    line?: boolean;
    white?: boolean;
    children?: React.ReactNode;
    colorTitle?: 'gray' | '';
    noSpacing?: boolean;
    size?: 'sm';
    className?: string;
    link?: string;
    documentLine?:boolean
}