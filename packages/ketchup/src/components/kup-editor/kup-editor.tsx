import {
    Component,
    Prop,
    h
} from '@stencil/core';

@Component({
    tag: 'kup-editor',
    styleUrl: 'kup-editor.scss',
    shadow: true
})
export class KupEditor {
    /**
     * The html to be rendered and edited
     */
    @Prop({ reflect: true }) text: string = '';

    //-- Emitted --

    //---- Rendering functions ----
    render() {
        return (
            <div
                innerHTML={this.text} >
            </div>
            );
    }
}