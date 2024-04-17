import { KulEventPayload } from '../../components';

export interface KulUploadEventPayload extends KulEventPayload {
    selectedFiles: KulUploadState[];
}

export type KulUploadEvents = 'ready' | 'upload';

export enum KulUploadProps {
    kulStyle = 'Custom style of the component.',
}

export interface KulUploadPropsInterface {
    kulStyle: string;
}

export interface KulUploadState {
    file: File;
    name: string;
    size: number;
}
