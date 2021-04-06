import { Component, Element, Prop, h } from '@stencil/core';
import {
    KupManager,
    kupManagerInstance,
} from '../../utils/kup-manager/kup-manager';

@Component({
    tag: 'kup-editor',
    styleUrl: 'kup-editor.scss',
    shadow: true,
})
export class KupEditor {
    @Element() rootElement: HTMLElement;

    /**
     * The html to be rendered and edited
     */
    @Prop() text: string = '';

    /**
     * Instance of the KupManager class.
     */
    private kupManager: KupManager = kupManagerInstance();

    //---- Lifecycle hooks ----

    componentWillLoad() {
        this.kupManager.debug.logLoad(this, false);
    }

    componentDidLoad() {
        this.kupManager.debug.logLoad(this, true);
    }

    componentWillRender() {
        this.kupManager.debug.logRender(this, false);
    }

    componentDidRender() {
        this.kupManager.debug.logRender(this, true);
    }

    render() {
        return <div innerHTML={this.text}></div>;
    }
}
