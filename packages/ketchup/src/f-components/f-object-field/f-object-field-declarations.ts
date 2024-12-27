import { KupObjectFieldData } from '../../components/kup-object-field/kup-object-field-declarations';
import { KupToolbarItemClickEventPayload } from '../../components/kup-toolbar/kup-toolbar-declarations';
import {
    KupDataCell,
    KupDataColumn,
    KupDataRow,
} from '../../managers/kup-data/kup-data-declarations';
import { KupManagerClickCb } from '../../managers/kup-manager/kup-manager-declarations';
import { FComponent } from '../../types/GenericTypes';
import { FTextFieldProps } from '../f-text-field/f-text-field-declarations';

export interface FObjectFieldProps extends FComponent {
    cell?: KupDataCell;
    column?: KupDataColumn;
    data?: KupObjectFieldData;
    inputValue: string;
    onChange: FTextFieldProps['onChange'];
    root?: HTMLDivElement;
    row?: KupDataRow;
}

export interface FObjectFieldState {
    children: FObjectFieldStateChildren;
    clickCb: KupManagerClickCb;
    inputValue: string;
    isListOpened: boolean;
    root: HTMLDivElement;
}
export interface FObjectFieldStateChildren {
    button?: HTMLDivElement;
    textfield?: HTMLDivElement;
    toolbar?: HTMLKupToolbarElement;
}

export type FObjectFieldEvents =
    | 'kup-objectfield-opensearchmenu'
    | 'kup-objectfield-searchpayload'
    | 'kup-objectfield-selectedmenuitem';

export interface FObjectFieldEventHandlers {
    button: (this: FObjectFieldProps, e: MouseEvent) => void;
    icon: (this: FObjectFieldProps, e: MouseEvent) => void;
    input: (this: FObjectFieldProps, e: UIEvent) => void;
    keydown: (this: FObjectFieldProps, e: KeyboardEvent) => void;
    toolbar: (
        this: FObjectFieldProps,
        e: CustomEvent<KupToolbarItemClickEventPayload>
    ) => void;
}

export interface FObjectFieldEventPayload {
    cell: KupDataCell;
    children: FObjectFieldStateChildren;
    column: KupDataColumn;
    inputValue: string;
    originalEvent: Event;
    row: KupDataRow;
}
