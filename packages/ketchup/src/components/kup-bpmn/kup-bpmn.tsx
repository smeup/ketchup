import {
    Component,
    Element,
    Event,
    EventEmitter,
    forceUpdate,
    h,
    Host,
    Method,
    Prop,
    State,
} from '@stencil/core';

import BpmnModeler from 'bpmn-js/lib/Modeler';

import $ from 'jquery';

@Component({
    tag: 'kup-bpmn',
    styleUrl: 'kup-bpmn.scss',
})
export class KupBpmn {
    /**
     * References the root HTML element of the component (<kup-image>).
     */
    @Element() rootElement: HTMLElement;
    container = $('#js-drop-zone');

    modeler = new BpmnModeler({
        container: '#js-canvas',
    });
    createNewDiagram() {
        this.openDiagram('./resources/newDiagram.bpmn');
    }

    async openDiagram(xml) {
        try {
            await this.modeler.importXML(xml);

            this.container.removeClass('with-error').addClass('with-diagram');
        } catch (err) {
            this.container.removeClass('with-diagram').addClass('with-error');

            this.container.find('.error pre').text(err.message);

            console.error(err);
        }
    }

    /*-------------------------------------------------*/
    /*           P r i v a t e   M e t h o d s         */
    /*-------------------------------------------------*/

    private setEvents(): void {
        const root: ShadowRoot = this.rootElement.shadowRoot;
        console.log('root', root);
        if (root) {
            const j: HTMLElement = root.querySelector('#js-create-diagram');
            j.onclick = () => console.log('frtgyut');
        }
    }
    componentDidRender() {
        this.setEvents();
    }

    render() {
        return (
            <Host>
                <div>
                    <head>
                        <link
                            rel="stylesheet"
                            href="vendor/bpmn-js/assets/diagram-js.css"
                        />
                        <link
                            rel="stylesheet"
                            href="vendor/bpmn-js/assets/bpmn-font/css/bpmn-embedded.css"
                        />
                        {/* <link rel="stylesheet" href="kup-bpmn.scss" /> */}
                    </head>
                    <div>
                        <div class="content" id="js-drop-zone">
                            <button id="js-create-diagram" value="crea">
                                crea
                            </button>
                            <div class="message error">
                                <div class="note">
                                    <p>Ooops, errore.</p>

                                    <div class="details">
                                        <span>causa del problema</span>
                                        <pre></pre>
                                    </div>
                                </div>
                            </div>
                            <div class="canvas" id="js-canvas"></div>
                        </div>
                    </div>
                </div>
            </Host>
        );
    }
}
