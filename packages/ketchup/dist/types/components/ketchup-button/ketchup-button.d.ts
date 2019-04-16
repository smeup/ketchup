import '../../stencil.core';
import { EventEmitter } from '../../stencil.core';
export declare class KetchupButton {
    ketchupButtonEl: HTMLElement;
    flat: boolean;
    label: string;
    buttonClass: string;
    iconClass: string;
    fillspace: boolean;
    showtext: boolean;
    showicon: boolean;
    rounded: boolean;
    textmode: string;
    transparent: boolean;
    align: string;
    iconUrl: string;
    ketchupButtonClicked: EventEmitter<{
        id: string;
    }>;
    onBtnClickedHandler(): void;
    _isHint(): boolean;
    render(): JSX.Element[];
}
