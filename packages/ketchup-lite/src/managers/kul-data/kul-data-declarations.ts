import {
    KulBadgePropsInterface,
    KulImagePropsInterface,
} from '../../components';
import { KulButtonPropsInterface } from '../../components/kul-button/kul-button-declarations';

export interface KulDataCell {
    relatedProp: string;
    shape: KulDataShapes;
    value: unknown;
}

export interface KulDataCellContainer {
    [index: string]: KulDataCell;
}

export interface KulDataComponentBaseProps {
    kulStyle?: string;
}

export interface KulDataColumn {
    id: string;
    type: KulDataShapes;
}

export type KulDataDynamicComponentProps = {
    [K in `kul${Capitalize<string>}`]?: any;
};

export interface KulDataDataset {
    columns?: KulDataColumn[];
    nodes?: KulDataNode[];
}

export interface KulDataNode {
    id: string;
    cells?: KulDataCellContainer;
    children?: KulDataNode[];
    description?: string;
    icon?: string;
    value?: unknown;
}

export type KulDataShapes = 'badge' | 'button' | 'image' | 'text';

export type KulDataShapesMap = {
    [K in KulDataShapes]?: Array<
        {
            [P in K]: K extends 'badge'
                ? Partial<KulBadgePropsInterface>
                : K extends 'button'
                ? Partial<KulButtonPropsInterface>
                : K extends 'image'
                ? Partial<KulImagePropsInterface>
                : string;
        }[K]
    >;
};
