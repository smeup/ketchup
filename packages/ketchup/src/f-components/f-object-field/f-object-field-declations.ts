import { ChangeEvent } from 'react';
import { FComponent } from '../../types/GenericTypes';
import { KupToolbarTreeNode } from '../../components';

export interface FObjectFieldProps extends FComponent {
    keyCodeSearch?: string;
    searchMenuData?: KupToolbarTreeNode[];
    onSearch?: (event: UIEvent) => void;
    onOpenSearchMenu?: (event: UIEvent) => void;
    onInput?: (event: UIEvent) => void;
}
