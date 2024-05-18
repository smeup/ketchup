import { KulEventPayload } from '../../components';

export interface KulUploadEventPayload extends KulEventPayload {
    selectedFiles: File[];
}

export type KulUploadEvent = 'pointerdown' | 'ready' | 'upload';

export enum KulUploadProps {
    kulLabel = "Sets the button's label.",
    kulRipple = 'When set to true, the pointerdown event will trigger a ripple effect.',
    kulStyle = 'Custom style of the component.',
    kulValue = 'Initializes the component with these files.',
}

export interface KulUploadPropsInterface {
    kulLabel?: string;
    kulRipple?: boolean;
    kulStyle?: string;
    kulValue?: File[];
}
