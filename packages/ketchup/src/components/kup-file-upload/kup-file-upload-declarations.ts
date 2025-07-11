import { KupEventPayload } from '../../types/GenericTypes';

export enum KupFileUploadProps {
    customStyle = 'Custom style of the component.',
    pathString = 'The initial filepaths.',
    FupMul = 'Sets the multiple upload.',
    FupAut = 'Sets the auto upload of select file',
}

export interface KupFileUploadEventPayload extends KupEventPayload {
    files: File[];
}
export interface KupFileUploadChangeEventPayload extends KupEventPayload {
    value: string;
}
