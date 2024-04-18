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
import { kulManagerInstance } from '../../managers/kul-manager/kul-manager';
import { getProps, setProps } from '../../utils/componentUtils';
import { KUL_WRAPPER_ID } from '../../variables/GenericVariables';
import { KulDebugComponentInfo } from '../../managers/kul-debug/kul-debug-declarations';
import { GenericObject } from '../../types/GenericTypes';
import {
    KulUploadEventPayload,
    KulUploadEvents,
    KulUploadProps,
} from './kul-upload-declarations';

@Component({
    tag: 'kul-upload',
    styleUrl: 'kul-upload.scss',
    shadow: true,
})
export class KulUpload {
    /**
     * References the root HTML element of the component (<kul-upload>).
     */
    @Element() rootElement: HTMLKulUploadElement;

    /*-------------------------------------------------*/
    /*                   S t a t e s                   */
    /*-------------------------------------------------*/

    /**
     * Debug information.
     */
    @State() debugInfo: KulDebugComponentInfo = {
        endTime: 0,
        renderCount: 0,
        renderEnd: 0,
        renderStart: 0,
        startTime: performance.now(),
    };
    /**
     *State holding the selected files
     * @default []
     */
    @State() selectedFiles: File[] = [];

    /*-------------------------------------------------*/
    /*                    P r o p s                    */
    /*-------------------------------------------------*/

    /**
     * When set to true, the pointerdown event will trigger a ripple effect.
     * @default true
     */
    @Prop({ mutable: true, reflect: true }) kulRipple = true;
    /**
     * Enables customization of the component's style.
     * @default "" - No custom style applied by default.
     */
    @Prop({ mutable: true, reflect: true }) kulStyle = '';
    /**
     * Initializes the component with these files.
     * @default null
     */
    @Prop({ mutable: false }) kulValue = null;

    /*-------------------------------------------------*/
    /*       I n t e r n a l   V a r i a b l e s       */
    /*-------------------------------------------------*/

    #input: HTMLInputElement;
    #kulManager = kulManagerInstance();
    #rippleSurface: HTMLElement;

    /*-------------------------------------------------*/
    /*                   E v e n t s                   */
    /*-------------------------------------------------*/

    /**
     * Describes event emitted.
     */
    @Event({
        eventName: 'kul-upload-event',
        composed: true,
        cancelable: false,
        bubbles: true,
    })
    kulEvent: EventEmitter<KulUploadEventPayload>;

    onKulEvent(e: Event | CustomEvent, eventType: KulUploadEvents) {
        if (eventType === 'pointerdown') {
            if (this.kulRipple) {
                this.#kulManager.theme.ripple.trigger(
                    e as PointerEvent,
                    this.#rippleSurface
                );
            }
        }
        this.kulEvent.emit({
            comp: this,
            eventType,
            id: this.rootElement.id,
            originalEvent: e,
            selectedFiles: this.selectedFiles,
        });
    }

    /*-------------------------------------------------*/
    /*           P u b l i c   M e t h o d s           */
    /*-------------------------------------------------*/

    /**
     * Retrieves the debug information reflecting the current state of the component.
     * @returns {Promise<KulDebugComponentInfo>} A promise that resolves to a KulDebugComponentInfo object containing debug information.
     */
    @Method()
    async getDebugInfo(): Promise<KulDebugComponentInfo> {
        return this.debugInfo;
    }
    /**
     * Retrieves the properties of the component, with optional descriptions.
     * @param {boolean} descriptions - If true, returns properties with descriptions; otherwise, returns properties only.
     * @returns {Promise<GenericObject>} A promise that resolves to an object where each key is a property name, optionally with its description.
     */
    @Method()
    async getProps(descriptions?: boolean): Promise<GenericObject> {
        return getProps(this, KulUploadProps, descriptions);
    }
    /**
     * Returns the component's internal value.
     */
    @Method()
    async getValue(): Promise<File[]> {
        return this.selectedFiles;
    }
    /**
     * Triggers a re-render of the component to reflect any state changes.
     */
    @Method()
    async refresh(): Promise<void> {
        forceUpdate(this);
    }
    /**
     * Assigns a set of properties to the component, triggering updates if necessary.
     * @param {GenericObject} props - An object containing properties to be set on the component.
     */
    @Method()
    async setProps(props: GenericObject): Promise<void> {
        setProps(this, KulUploadProps, props);
    }

    /*-------------------------------------------------*/
    /*           P r i v a t e   M e t h o d s         */
    /*-------------------------------------------------*/

    #formatFileSize(size: number): string {
        const units = ['Bytes', 'KB', 'MB', 'GB', 'TB'];
        let unitIndex = 0;

        if (size > 10000) {
            size /= 1024;
            size /= 1024;
            unitIndex = 2;
        } else {
            while (size >= 1024 && unitIndex < units.length - 1) {
                size /= 1024;
                unitIndex++;
            }
        }

        return `${size.toFixed(2)} ${units[unitIndex]}`;
    }

    #handleFileChange() {
        if (this.#input.files) {
            this.selectedFiles = Array.from(this.#input.files);
        } else {
            this.selectedFiles = [];
        }
        this.onKulEvent(new CustomEvent('upload'), 'upload');
    }

    #prepFileInfo() {
        return this.selectedFiles.map((file, index) => (
            <div class="file-info__item" key={index}>
                <kul-image
                    class="file-info__type"
                    kulValue={
                        file.type.includes('image')
                            ? 'image'
                            : file.type.includes('audio')
                            ? 'audiotrack'
                            : file.type.includes('video')
                            ? 'movie'
                            : 'file'
                    }
                    kulSizeX="24px"
                    kulSizeY="24px"
                    title={file.type}
                ></kul-image>
                <span class="file-info__name" title={file.name}>
                    {file.name}
                </span>
                <span class="file-info__size" title={file.size.toString()}>
                    {this.#formatFileSize(file.size)}
                </span>
                <kul-button
                    class="file-info__clear"
                    kulIcon={'clear'}
                    kulStyling="flat"
                    onClick={() => {
                        this.selectedFiles = this.selectedFiles.filter(
                            (f) => f !== file
                        );
                    }}
                    title="Remove"
                ></kul-button>
            </div>
        ));
    }

    /*-------------------------------------------------*/
    /*          L i f e c y c l e   H o o k s          */
    /*-------------------------------------------------*/

    componentWillLoad() {
        this.#kulManager.theme.register(this);
        if (Array.isArray(this.kulValue)) {
            this.selectedFiles = this.kulValue;
        }
    }

    componentDidLoad() {
        this.onKulEvent(new CustomEvent('ready'), 'ready');
        if (this.#rippleSurface) {
            this.#kulManager.theme.ripple.setup(this.#rippleSurface);
        }
        this.#kulManager.debug.updateDebugInfo(this, 'did-load');
    }

    componentWillRender() {
        this.#kulManager.debug.updateDebugInfo(this, 'will-render');
    }

    componentDidRender() {
        this.#kulManager.debug.updateDebugInfo(this, 'did-render');
    }

    render() {
        const hasSelectedFiles =
            this.selectedFiles && this.selectedFiles.length;
        return (
            <Host>
                <style>{this.#kulManager.theme.setKulStyle(this)}</style>
                <div id={KUL_WRAPPER_ID}>
                    <div
                        class={`wrapper ${
                            this.selectedFiles && this.selectedFiles.length
                                ? 'wrapper--with-info'
                                : ''
                        }`}
                    >
                        <div
                            class="file-upload"
                            onPointerDown={(e) =>
                                this.onKulEvent(e, 'pointerdown')
                            }
                        >
                            <input
                                class="file-upload__input"
                                id="file-upload"
                                multiple
                                onChange={() => this.#handleFileChange()}
                                ref={(el) => {
                                    this.#input = el;
                                }}
                                type="file"
                            />
                            <label
                                class="file-upload__label"
                                htmlFor="file-upload"
                                ref={(el) => {
                                    if (this.kulRipple) {
                                        this.#rippleSurface = el;
                                    }
                                }}
                            >
                                <div>Upload File</div>
                            </label>
                        </div>
                        <div class="file-info">
                            {hasSelectedFiles
                                ? this.#prepFileInfo()
                                : undefined}
                        </div>
                    </div>
                </div>
            </Host>
        );
    }

    disconnectedCallback() {
        this.#kulManager.theme.unregister(this);
    }
}
