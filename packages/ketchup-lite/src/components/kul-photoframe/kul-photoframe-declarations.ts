import { GenericObject, KulEventPayload } from '../../components';

export type KulPhotoframeEvent = 'load' | 'ready';

export interface KulPhotoframeEventPayload extends KulEventPayload {
    isPlaceholder?: boolean;
}

export enum KulPhotoframeProps {
    kulPlaceholder = 'Html attributes of the picture before the component enters the viewport.',
    kulStyle = 'Custom style of the component.',
    kulThreshold = "Percentage of the component's dimensions entering the viewport (0.1 => 1)",
    kulValue = 'Html attributes of the picture after the component enters the viewport.',
}

export interface KulPhotoframePropsInterface {
    kulPlaceholder?: GenericObject;
    kulStyle?: string;
    kulThreshold?: number;
    kulValue?: GenericObject;
}
