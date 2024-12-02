import { ChangeEvent } from 'react';
import { FComponent } from '../../types/GenericTypes';
import {
    KupToolbarClickEventPayload,
    KupToolbarCustomEvent,
    KupToolbarTreeNode,
} from '../../components';

export interface FObjectFieldProps extends FComponent {
    keyCodeSearch?: string;
    menuData?: KupToolbarTreeNode[];
    menuVisible?: boolean;
    onSearch?: (event: UIEvent) => void;
    onOpenMenu?: (event: UIEvent) => void;
    onSelectedMenuItem?: (
        event: KupToolbarCustomEvent<KupToolbarClickEventPayload>
    ) => void;
    onInput?: (event: UIEvent) => void;
}
