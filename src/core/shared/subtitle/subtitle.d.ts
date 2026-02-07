import {ReactNode} from 'react';

export interface ISubtitleComponentProps {
    children: ReactNode;
    position?: 'center' | 'start' | 'end';
}