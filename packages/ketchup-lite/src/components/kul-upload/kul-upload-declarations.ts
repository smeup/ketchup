import { KulEventPayload } from '../../components';

export interface KulUploadEventPayload extends KulEventPayload {
    selectedFiles: File[];
}

export type KulUploadEvents = 'pointerdown' | 'ready' | 'upload';

export enum KulUploadProps {
    kulStyle = 'Custom style of the component.',
}

export interface KulUploadPropsInterface {
    kulStyle: string;
}
