import { KulDataDataset } from '../../managers/kul-data/kul-data-declarations';

export type KulTreeEvents = 'ready';

export enum KulTreeProps {
    kulData = 'Actual data of the tree',
    kulStyle = 'Custom style of the component.',
}

export interface KulTreePropsInterface {
    kulData?: KulDataDataset;
    kulStyle?: string;
}
