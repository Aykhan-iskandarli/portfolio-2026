import React from 'react';

export interface ICommonLead {
    position?: 'top' | 'bottom' | 'center' | 'start' | 'end';
    title: React.ReactNode | string | any;
    subtitle?: React.ReactNode | string | any;
    classes?: string | '';
    lastBreadcrumbItem?: React.ReactNode | string;
    lines?: boolean;
    link?: string;
    children?: React.ReactNode;
    img?: string | null;
    date?: string;
    service?: boolean;
    description?: string;
    mobile?: boolean;
}