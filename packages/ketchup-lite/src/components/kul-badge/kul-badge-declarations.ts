import { KulImagePropsInterface } from '../kul-image/kul-image-declarations';

export type KulBadgeEvents = 'click';

export enum KulBadgeProps {
    kulImageProps = 'The props of the image displayed inside the badge.',
    kulLabel = 'The text displayed inside the badge.',
    kulStyle = 'Custom style of the component.',
}

export interface KulBadgePropsInterface {
    kulImageProps: KulImagePropsInterface;
    kulLabel: string;
    kulStyle: string;
}
