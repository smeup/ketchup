import { Component, Element, Prop, h } from '@stencil/core';
import { logLoad, logRender } from '../../utils/debug-manager';

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

    //---- Lifecycle hooks ----

    componentWillLoad() {
        logLoad(this, false);
    }

    componentDidLoad() {
        logLoad(this, true);
    }

    componentWillRender() {
        logRender(this, false);
    }

    componentDidRender() {
        logRender(this, true);
    }

    render() {
        return <div innerHTML={this.text}></div>;
    }
}
