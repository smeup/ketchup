import { KulUploadPropsInterface } from '../../../kul-upload/kul-upload-declarations';
import { KulShowcaseDynamicExampleType } from '../../kul-showcase-declarations';

export const UPLOAD_EXAMPLES_KEYS = ['simple', 'style'] as const;

export interface UploadExample extends KulUploadPropsInterface {
    ['data-description']: string;
    ['data-dynamic']?: KulShowcaseDynamicExampleType;
}

export type UploadData = {
    [K in (typeof UPLOAD_EXAMPLES_KEYS)[number]]: Partial<UploadExample>;
};
