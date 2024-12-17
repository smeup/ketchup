import {
    KupDataCell,
    KupObjectFieldData,
    KupToolbarItemClickEventPayload,
} from '../../components';
import { KupManagerClickCb } from '../../managers/kup-manager/kup-manager-declarations';
import { FComponent } from '../../types/GenericTypes';
import { FTextFieldProps } from '../f-text-field/f-text-field-declarations';

export interface FObjectFieldProps extends FComponent {
    cell?: KupDataCell;
    data?: KupObjectFieldData;
    inputValue: string;
    onChange: FTextFieldProps['onChange'];
    root?: HTMLDivElement;
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
    inputValue: string;
    originalEvent: Event;
}
