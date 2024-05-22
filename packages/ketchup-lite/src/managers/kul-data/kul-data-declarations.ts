import {
    GenericObject,
    KulBadgePropsInterface,
    KulImagePropsInterface,
} from '../../components';
import { KulButtonPropsInterface } from '../../components/kul-button/kul-button-declarations';
import { KulCodePropsInterface } from '../../components/kul-code/kul-code-declarations';
import { GenericMap } from '../../types/GenericTypes';

export interface KulDataCell {
    value: unknown;
    relatedProp?: string;
    shape?: KulDataShapes;
    shapeProps?: GenericObject;
}

export interface KulDataCellContainer {
    [index: string]: KulDataCell;
}

export interface KulDataColumn {
    id: string;
    title: string;
    type: KulDataShapes;
}

export interface KulDataComponentBaseProps {
    kulStyle?: string;
}

export interface KulDataDataset {
    columns?: KulDataColumn[];
    nodes?: KulDataNode[];
}

export type KulDataDynamicComponentProps = {
    [K in `kul${Capitalize<string>}`]?: any;
};

export interface KulDataNode {
    id: string;
    cells?: KulDataCellContainer;
    children?: KulDataNode[];
    cssStyle?: GenericMap;
    description?: string;
    icon?: string;
    value?: unknown;
}

export type KulDataShapes = 'badge' | 'button' | 'code' | 'image' | 'text';

export type KulDataShapesMap = {
    [K in KulDataShapes]?: Array<
        {
            [P in K]: K extends 'badge'
                ? Partial<KulBadgePropsInterface>
                : K extends 'button'
                  ? Partial<KulButtonPropsInterface>
                  : K extends 'code'
                    ? Partial<KulCodePropsInterface>
                    : K extends 'image'
                      ? Partial<KulImagePropsInterface>
                      : string;
        }[K]
    >;
};

export interface KulDataNodeOperations {
    exists: (dataset: KulDataDataset) => boolean;
    filter: (
        dataset: KulDataDataset,
        filters: Partial<KulDataNode>,
        partialMatch: boolean
    ) => {
        matchingNodes: Set<KulDataNode>;
        remainingNodes: Set<KulDataNode>;
        ancestorNodes: Set<KulDataNode>;
    };
    fixIds: (nodes: KulDataNode[]) => KulDataNode[];
    getDrilldownInfo: (nodes: KulDataNode[]) => KulDataNodeDrilldownInfo;
    getParent: (nodes: KulDataNode[], child: KulDataNode) => KulDataNode;
    pop: (nodes: KulDataNode[], node2remove: KulDataNode) => KulDataNode;
    setProperties: (
        nodes: KulDataNode[],
        properties: Partial<KulDataNode>,
        recursively?: boolean,
        exclude?: KulDataNode[]
    ) => KulDataNode[];
    toStream: (nodes: KulDataNode[]) => KulDataNode[];
}

export interface KulDataNodeDrilldownInfo {
    maxChildren?: number;
    maxDepth?: number;
}

export interface KulDataFindCellFilters {
    columns?: string[];
    range?: KulDataFilterRange;
    value?: string;
}

export interface KulDataFilterRange {
    min?: number | string | String;
    max?: number | string | String;
}
