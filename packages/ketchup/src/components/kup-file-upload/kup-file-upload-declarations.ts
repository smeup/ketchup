import { KupEventPayload } from '../../types/GenericTypes';

export enum KupFileUploadProps {
    customStyle = 'Custom style of the component.',
    error = 'Error string to render in component',
    pathString = 'The initial filepaths.',
    FupMul = 'Sets the multiple upload.',
    FupAut = 'Sets the auto upload of select file',
    FupDir = 'Sets the custom dir to upload files',
    FupAty = 'Sets the accepted extensions',
}

export interface KupFileUploadEventPayload extends KupEventPayload {
    files: File[];
}
export interface KupFileUploadChangeEventPayload extends KupEventPayload {
    value: string;
}
