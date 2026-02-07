import { ImageProps } from 'next/image';

export interface ISafeImageProps extends ImageProps {
    src?: string;
    alt?: string;
}