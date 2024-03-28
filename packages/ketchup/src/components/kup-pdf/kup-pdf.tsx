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
} from '@stencil/core';
import {
    KupManager,
    kupManagerInstance,
} from '../../managers/kup-manager/kup-manager';
import { GenericObject, KupEventPayload } from '../../types/GenericTypes';
import { componentWrapperId } from '../../variables/GenericVariables';
import { getProps, setProps } from '../../utils/utils';
import { KupPdfProps } from './kup-pdf-declarations';
import * as pdfjsLib from 'pdfjs-dist';
import * as pdfjsWorker from 'pdfjs-dist/build/pdf.worker.mjs';

@Component({
    tag: 'kup-pdf',
    styleUrl: 'kup-pdf.scss',
    shadow: true,
})
export class KupPdf {
    /**
     * References the root HTML element of the component (<kup-editor>).
     */
    @Element() rootElement: HTMLElement;

    /*-------------------------------------------------*/
    /*                    P r o p s                    */
    /*-------------------------------------------------*/

    /**
     * When specified, the component will emit the kup-editor-autosave event at regular intervals.
     * @default null
     */
    @Prop() pdfPath: string;

    /*-------------------------------------------------*/
    /*       I n t e r n a l   V a r i a b l e s       */
    /*-------------------------------------------------*/

    #kupManager: KupManager = kupManagerInstance();

    /*-------------------------------------------------*/
    /*                   E v e n t s                   */
    /*-------------------------------------------------*/

    /**
     * Triggered when the component is ready.
     */
    @Event({
        eventName: 'kup-pdf-ready',
        composed: true,
        cancelable: false,
        bubbles: true,
    })
    kupReady: EventEmitter<KupEventPayload>;

    /*-------------------------------------------------*/
    /*           P u b l i c   M e t h o d s           */
    /*-------------------------------------------------*/

    /**
     * Used to retrieve component's props values.
     * @param {boolean} descriptions - When provided and true, the result will be the list of props with their description.
     * @returns {Promise<GenericObject>} List of props as object, each key will be a prop.
     */
    @Method()
    async getProps(descriptions?: boolean): Promise<GenericObject> {
        return getProps(this, KupPdfProps, descriptions);
    }
    /**
     * This method is used to trigger a new render of the component.
     */
    @Method()
    async refresh(): Promise<void> {
        forceUpdate(this);
    }
    /**
     * Sets the props to the component.
     * @param {GenericObject} props - Object containing props that will be set to the component.
     */
    @Method()
    async setProps(props: GenericObject): Promise<void> {
        setProps(this, KupPdfProps, props);
    }

    /*-------------------------------------------------*/
    /*          L i f e c y c l e   H o o k s          */
    /*-------------------------------------------------*/

    componentWillLoad() {
        this.#kupManager.debug.logLoad(this, false);
        this.#kupManager.theme.register(this);
    }

    componentDidLoad() {
        this.kupReady.emit({
            comp: this,
            id: this.rootElement.id,
        });
        this.#kupManager.debug.logLoad(this, true);

        pdfjsLib.GlobalWorkerOptions.workerSrc = pdfjsWorker;
        this.renderPdf();
    }

    componentWillRender() {
        this.#kupManager.debug.logRender(this, false);
    }

    componentDidRender() {
        this.#kupManager.debug.logRender(this, true);
    }

    async renderPdf() {
        const loadingPdfTask = pdfjsLib.getDocument({
            url: this.pdfPath,
            withCredentials: true,
        });
        const pdf = await loadingPdfTask.promise;
        const pdfContainer =
            this.rootElement.shadowRoot.querySelector('#kup-pdf-container');

        for (let page = 1; page <= pdf.numPages; page++) {
            const canvas = document.createElement(
                'canvas'
            ) as HTMLCanvasElement;
            pdfContainer.appendChild(canvas);

            pdf.getPage(page).then(function (page) {
                const requiredScale = 2; // initial scale is set to 2 so the pdf outputs clear, keeping on 1 causes the pdf to be blurry

                const viewport = page.getViewport({ scale: requiredScale });

                // set canvas height/width to upscale the pdf
                canvas.height = requiredScale * viewport.height;
                canvas.width = requiredScale * viewport.width;

                // now get the responsive viewport according to client width / actual width
                const scale = (pdfContainer.clientWidth / viewport.width) * 1.5;
                const reponsiveViewport = page.getViewport({ scale });

                // set the canvas style as per responsive viewport if you want the pdf to take size according to screen dimensions, although this makes the pdf tidy
                // setting it to original viewport will maintain the original size, but a scroll is needed, for now we use responsiev viewport
                canvas.style.height = reponsiveViewport.height + 'px';
                canvas.style.width = reponsiveViewport.width + 'px';

                page.render({
                    canvasContext: canvas.getContext('2d'),
                    viewport: viewport,
                    transform: [requiredScale, 0, 0, requiredScale, 0, 0],
                });
            });
        }
    }

    render() {
        return (
            <Host>
                <div id={componentWrapperId}>
                    <div id="kup-pdf-container"></div>
                </div>
            </Host>
        );
    }
}
