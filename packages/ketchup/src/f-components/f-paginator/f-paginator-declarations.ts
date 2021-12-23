import type { FComponent } from '../../types/GenericTypes';
/**
 * Props of the f-paginator component.
 */
export interface FPaginatorProps extends FComponent {
    currentPage?: number;
    max?: number;
    mode?: FPaginatorMode;
    perPage?: number;
    onLoadMore?: () => void;
    onNextPage?: () => void;
    onPageChange?: (event: CustomEvent) => void;
    onPrevPage?: () => void;
    onRowsChange?: (event: CustomEvent) => void;
}

export enum FPaginatorMode {
    SIMPLE = 'simple',
    FULL = 'full',
}

export interface KupPaginatorPageChangedEventPayload {
    newPage: number;
}
