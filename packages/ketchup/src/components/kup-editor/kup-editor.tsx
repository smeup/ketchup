import { Component, Prop, h } from '@stencil/core';
import { logMessage } from '../../utils/debug-manager';

@Component({
    tag: 'kup-editor',
    styleUrl: 'kup-editor.scss',
    shadow: true,
})
export class KupEditor {
    /**
     * The html to be rendered and edited
     */
    @Prop({ reflect: true }) text: string = '';

    private startTime: number = 0;
    private endTime: number = 0;

    //---- Lifecycle hooks ----

    componentWillLoad() {
        this.startTime = performance.now();
    }

    componentDidLoad() {
        this.endTime = performance.now();
        let timeDiff: number = this.endTime - this.startTime;
        logMessage(this, 'Component ready after ' + timeDiff + 'ms.');
    }

    render() {
        return <div innerHTML={this.text}></div>;
    }
}
