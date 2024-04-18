import { KulUploadPropsInterface } from '../../../kul-upload/kul-upload-declarations';
import { KulShowcaseDynamicExampleType } from '../../kul-showcase-declarations';

interface UploadExample extends KulUploadPropsInterface {
    ['data-description']: string;
    ['data-dynamic']?: KulShowcaseDynamicExampleType;
}

interface UploadData {
    [index: string]: Partial<UploadExample>;
}

export const UPLOAD_EXAMPLES: UploadData = {
    uploadSimple: {
        ['data-description']: 'Simple upload component',
    },
    uploadStyle: {
        ['data-description']: 'Upload component with custom style',
        ['data-dynamic']: 'custom',
    },
};
