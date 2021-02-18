import { KupBadge } from '../../components/kup-badge/kup-badge';

export interface FImageProps {
    badgeData?: KupBadge[];
    color?: string;
    data?: FImageData[];
    id?: string;
    resource?: string;
    sizeX?: string;
    sizeY?: string;
    title?: string;
    wrapperClass?: string;
}

export interface FImageData {
    shape?: string;
    color?: string;
    height?: string;
    width?: string;
}
