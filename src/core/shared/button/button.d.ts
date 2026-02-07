import React from 'react';

export interface IButton {
    link?: string | null;
    type?: 'primary' | 'secondary' | 'outlined' | 'link'| 'info' | 'link_dark';
    children: React.ReactNode;
    className?: string;
    full?: boolean;
    btnType?: 'submit' | 'reset' | 'button';
    click?: () => void;
}