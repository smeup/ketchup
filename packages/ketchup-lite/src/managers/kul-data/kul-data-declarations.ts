import {
    KulBadgePropsInterface,
    KulImagePropsInterface,
} from '../../components';
import { KulButtonPropsInterface } from '../../components/kul-button/kul-button-declarations';
import { KulCodePropsInterface } from '../../components/kul-code/kul-code-declarations';
import { GenericMap } from '../../types/GenericTypes';

export interface KulDataCell {
    value: unknown;
    shape?: KulDataShapes;
}

export interface KulDataBadgeCell extends KulDataCell, KulBadgePropsInterface {
    shape: 'badge';
    value: string;
}

export interface KulDataButtonCell
    extends KulDataCell,
        KulButtonPropsInterface {
    shape: 'button';
    value: string;
}

export interface KulDataCodeCell extends KulDataCell, KulCodePropsInterface {
    shape: 'code';
    value: string;
}

export interface KulDataImageCell extends KulDataCell, KulImagePropsInterface {
    shape: 'image';
    value: string;
}

export interface KulDataNumberCell extends KulDataCell {
    shape: 'number';
    value: number;
}

export interface KulDataTextCell extends KulDataCell {
    shape: 'text';
    value: string;
}

type KulDataCellType =
    | KulDataCell
    | KulDataBadgeCell
    | KulDataButtonCell
    | KulDataCodeCell
    | KulDataImageCell
    | KulDataNumberCell
    | KulDataTextCell;

export interface KulDataCellContainer {
    [index: string]: KulDataCellType;
    ['kulBadge']?: KulDataBadgeCell;
    ['kulButton']?: KulDataButtonCell;
    ['kulCode']?: KulDataCodeCell;
    ['kulImage']?: KulDataImageCell;
    ['kulNumber']?: KulDataNumberCell;
    ['kulText']?: KulDataTextCell;
}

export interface KulDataColumn {
    id:
        | string
        | 'kulBadge'
        | 'kulButton'
        | 'kulCode'
        | 'kulImage'
        | 'kulNumber'
        | 'kulText';
    title: string;
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

export type KulDataShapes =
    | 'badge'
    | 'button'
    | 'code'
    | 'image'
    | 'number'
    | 'text';

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
