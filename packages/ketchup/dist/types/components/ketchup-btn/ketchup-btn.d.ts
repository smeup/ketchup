import '../../stencil.core';
import { ButtonConfig } from './ketchup-btn-declarations';
export declare class KetchupBtn {
    buttons: any[];
    config: ButtonConfig;
    selectedBtnIndex: number;
    onBtnClicked(event: CustomEvent): void;
    render(): JSX.Element;
}
