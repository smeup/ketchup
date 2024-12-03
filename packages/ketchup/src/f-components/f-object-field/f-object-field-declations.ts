import {
    KupObjectFieldData,
    KupToolbarItemClickEventPayload,
} from '../../components';
import { KupManagerClickCb } from '../../managers/kup-manager/kup-manager-declarations';
import { FComponent } from '../../types/GenericTypes';

export interface FObjectFieldProps extends FComponent {
    keyCodeSearch?: string;
    data?: KupObjectFieldData;
    inputValue: string;
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
    children: FObjectFieldStateChildren;
    inputValue: string;
    originalEvent: Event;
}
