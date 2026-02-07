import Image from 'next/image';
import {ISafeImageProps} from './safe-image';

const SafeImage = ({src, alt, ...props}: ISafeImageProps) => {
    if (!src) return null;
    return <Image src={src} alt={alt || 'image'} {...props} />;
};

export default SafeImage;