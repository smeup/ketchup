import { Component, Element, Prop, h } from '@stencil/core';
import { KupDebug } from '../../utils/kup-debug/kup-debug';

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
     * Instance of the KupDebug class.
     */
    private kupDebug: KupDebug = new KupDebug();

    //---- Lifecycle hooks ----

    componentWillLoad() {
        this.kupDebug.logLoad(this, false);
    }

    componentDidLoad() {
        this.kupDebug.logLoad(this, true);
    }

    componentWillRender() {
        this.kupDebug.logRender(this, false);
    }

    componentDidRender() {
        this.kupDebug.logRender(this, true);
    }

    render() {
        return <div innerHTML={this.text}></div>;
    }
}
