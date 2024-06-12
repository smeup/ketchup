import { KulDataCyAttributes } from '../../src/types/GenericTypes';

export type DataCyAttributeTransformed = {
    [K in keyof typeof KulDataCyAttributes]: `[data-cy="${(typeof KulDataCyAttributes)[K]}"]`;
};
