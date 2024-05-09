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
    Watch,
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
import * as pdfjsWorker from 'pdfjs-dist/build/pdf.worker.js';

@Component({
    tag: 'kup-pdf',
    styleUrl: 'kup-pdf.scss',
    shadow: true,
})
export class KupPdf {
    /**
     * References the root HTML element of the component (<kup-pdf>).
     */
    @Element() rootElement: HTMLElement;

    /*-------------------------------------------------*/
    /*                    P r o p s                    */
    /*-------------------------------------------------*/

    /**
     * Path of the pdf document
     * @default null
     */
    @Prop() pdfPath: string;

    /**
     * Credentials sending along with request
     * @default true
     */
    @Prop() sendCredentials: boolean;

    /*-------------------------------------------------*/
    /*       I n t e r n a l   V a r i a b l e s       */
    /*-------------------------------------------------*/

    #kupManager: KupManager = kupManagerInstance();
    private wrapperRef: HTMLDivElement;

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
    /*                  W a t c h e r s                */
    /*-------------------------------------------------*/

    @Watch('pdfPath')
    onPdfPathChange() {
        this.wrapperRef.innerHTML = '';
        this.renderPdf();
    }

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
        pdfjsLib.GlobalWorkerOptions.workerSrc = pdfjsWorker;
        this.renderPdf().then(() => {
            this.#kupManager.debug.logLoad(this, true);
        });
    }

    componentWillRender() {
        this.#kupManager.debug.logRender(this, false);
    }

    componentDidRender() {
        this.#kupManager.debug.logRender(this, true);
    }

    async renderPdf() {
        try {
            const loadingPdfTask = pdfjsLib.getDocument({
                url: this.pdfPath,
                withCredentials: this.sendCredentials,
            });
            const pdf = await loadingPdfTask.promise;
            const pdfContainer = this.wrapperRef;

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
                    canvas.style.width = '100%';

                    page.render({
                        canvasContext: canvas.getContext('2d'),
                        viewport: viewport,
                        transform: [requiredScale, 0, 0, requiredScale, 0, 0],
                    });
                });
            }
        } catch (error) {}
    }

    render() {
        return (
            <Host>
                <div
                    id={componentWrapperId}
                    ref={(el) => (this.wrapperRef = el)}
                ></div>
            </Host>
        );
    }

    disconnectedCallback() {
        this.#kupManager.theme.unregister(this);
    }
}
