import {
    Component,
    Element,
    Event,
    EventEmitter,
    forceUpdate,
    Host,
    Method,
    Prop,
    Watch,
    h,
    State,
} from '@stencil/core';
import { kupManagerInstance } from '../../managers/kup-manager/kup-manager';
import {
    KupDom,
    KupManager,
} from '../../managers/kup-manager/kup-manager-declarations';
import {
    GenericObject,
    KupComponent,
    KupEventPayload,
} from '../../types/GenericTypes';
import { getProps, setProps } from '../../utils/utils';
import {
    KupFileUploadEventPayload,
    KupFileUploadProps,
} from './kup-file-upload-declarations';
import { componentWrapperId } from '../../variables/GenericVariables';
import { FButton } from '../../f-components/f-button/f-button';
import {
    KupLanguageGeneric,
    KupLanguageUpload,
} from '../../managers/kup-language/kup-language-declarations';
import { FButtonStyling } from '../../f-components/f-button/f-button-declarations';
import { FImage } from '../../f-components/f-image/f-image';

@Component({
    tag: 'kup-file-upload',
    styleUrl: 'kup-file-upload.scss',
    shadow: true,
})
export class KupFileUpload {
    /**
     * References the root HTML element of the component (<kup-file-upload>).
     */
    @Element() rootElement: HTMLElement;

    //#region PROPS
    /*-------------------------------------------------*/
    /*                    P r o p s                    */
    /*-------------------------------------------------*/

    /**
     * Custom style of the component.
     * @default ""
     * @see https://smeup.github.io/ketchup/#/customization
     */
    @Prop() customStyle: string = '';

    /**
     * Actual data of the input field.
     * @default null
     */
    // TODO: TYPING
    @Prop() data = null;
    //#endregion

    //#region STATES
    /*-------------------------------------------------*/
    /*                   S t a t e s                   */
    /*-------------------------------------------------*/

    @State() inputRef?: HTMLInputElement;
    @State() files?: File[] = [];
    @State() uploadSuccess?: boolean = false;
    @State() showSpinner?: boolean = false;

    //#endregion

    //#region VARIABLES
    /*-------------------------------------------------*/
    /*       I n t e r n a l   V a r i a b l e s       */
    /*-------------------------------------------------*/

    #kupManager: KupManager = kupManagerInstance();
    #preveiwMap = new Map([
        ['application/pdf', 'file-pdf'],
        ['application/vnd.ms-excel', 'file-excel'],
        [
            'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
            'file-excel',
        ],
        ['application/msword', 'file-word'],
        [
            'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
            'file-word',
        ],
    ]);
    //#endregion

    //#region WATCHERS
    /*-------------------------------------------------*/
    /*                  W a t c h e r s                */
    /*-------------------------------------------------*/

    @Watch('data')
    onDataChanged() {}
    //#endregion

    //#region PUBLIC METHODS
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
        return getProps(this, KupFileUploadProps, descriptions);
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
        setProps(this, KupFileUploadProps, props);
    }
    /**
     * Sets upload has been successfull to show success message.
     * @param {boolean} success - Boolean to set if upload has been successfull.
     */
    @Method()
    async setSuccess(success: boolean): Promise<void> {
        this.setLoading(false);
        if (success) {
            this.#handleCancel();
            this.uploadSuccess = success;
        }
    }
    /**
     * Sets to show spinner during upload.
     * @param {boolean} loading - Boolean to set if is loading.
     */
    @Method()
    async setLoading(loading: boolean): Promise<void> {
        this.showSpinner = loading;
    }
    //#endregion

    //#region EVENTS
    /*-------------------------------------------------*/
    /*           Events                                */
    /*-------------------------------------------------*/

    /**
     * When component load is complete
     */
    @Event({
        eventName: 'kup-file-upload-ready',
        composed: true,
        cancelable: false,
        bubbles: true,
    })
    kupReady: EventEmitter<KupEventPayload>;

    @Event({
        eventName: 'kup-file-upload-upload',
        composed: true,
        cancelable: false,
        bubbles: true,
    })
    kupUpload: EventEmitter<KupFileUploadEventPayload>;
    //#endregion

    //#region PRIVATE METHODS
    /*-------------------------------------------------*/
    /*           P r i v a t e   M e t h o d s         */
    /*-------------------------------------------------*/
    #handleClick() {
        this.inputRef.click();
    }

    #handleFileChange(event: Event) {
        this.uploadSuccess = false;
        const newFiles = Array.from((event.target as HTMLInputElement).files);
        this.files = [...this.files, ...newFiles];
    }

    #handleFileRemove(index: number) {
        this.files = [
            ...this.files.splice(0, index),
            ...this.files.splice(index + 1),
        ];
    }

    #handleDrop(event: DragEvent) {
        event.preventDefault();

        const droppedFiles = event.dataTransfer.files;
        if (droppedFiles.length > 0) {
            const newFiles = Array.from(droppedFiles);
            this.files = [...this.files, ...newFiles];
        }
    }

    #handleCancel() {
        this.files = [];
    }

    #getPreview(file: File) {
        const previewIcon = this.#preveiwMap.get(file.type);

        if (!previewIcon) {
            if (/^image\/.*/g.test(file.type)) {
                return URL.createObjectURL(file);
            }
            if (/^video\/.*/g.test(file.type)) {
                return 'video';
            }
            return 'file';
        }

        return previewIcon;
    }

    #trimFileName(fileName: string) {
        return fileName?.length > 20
            ? fileName.slice(0, 9) + '...' + fileName.slice(-10)
            : fileName;
    }

    #uploadClick(e: MouseEvent): void {
        e.stopPropagation();
        this.kupUpload.emit({
            comp: this,
            id: this.rootElement.id,
            files: this.files,
        });
        this.setLoading(true);
    }
    //#endregion

    //#region LIFECYCLE HOOKS
    /*-------------------------------------------------*/
    /*          L i f e c y c l e   H o o k s          */
    /*-------------------------------------------------*/

    componentWillLoad() {
        this.#kupManager.debug.logLoad(this, false);
        this.#kupManager.language.register(this);
        this.#kupManager.theme.register(this);
    }

    componentDidLoad() {
        this.kupReady.emit({ comp: this, id: this.rootElement.id });

        this.#kupManager.debug.logLoad(this, true);
    }

    componentWillRender() {
        this.#kupManager.debug.logRender(this, false);
    }

    componentDidRender() {
        this.#kupManager.debug.logRender(this, true);
    }

    render() {
        return (
            <Host>
                <style>
                    {this.#kupManager.theme.setKupStyle(
                        this.rootElement as KupComponent
                    )}
                </style>
                <div id={componentWrapperId}>
                    <div
                        class={{
                            'file-upload': true,
                            'file-upload-spinner': this.showSpinner,
                        }}
                        onDrop={this.#handleDrop.bind(this)}
                        onDragOver={(event) => event.preventDefault()}
                    >
                        <input
                            type="file"
                            ref={(el) => (this.inputRef = el)}
                            onChange={this.#handleFileChange.bind(this)}
                            multiple
                            hidden
                        ></input>
                        <div class="file-upload__buttons">
                            <FButton
                                icon="upload"
                                label={this.#kupManager.language.translate(
                                    KupLanguageGeneric.CHOOSE
                                )}
                                onClick={this.#handleClick.bind(this)}
                            ></FButton>
                            <FButton
                                icon="save"
                                disabled={!this.files.length}
                                label={this.#kupManager.language.translate(
                                    KupLanguageGeneric.UPLOAD
                                )}
                                onClick={this.#uploadClick.bind(this)}
                                styling={FButtonStyling.FLAT}
                            ></FButton>
                            <FButton
                                icon="clear"
                                disabled={!this.files.length}
                                label={this.#kupManager.language.translate(
                                    KupLanguageGeneric.ABORT
                                )}
                                onClick={this.#handleCancel.bind(this)}
                                styling={FButtonStyling.FLAT}
                            ></FButton>
                        </div>
                        {this.uploadSuccess ? (
                            <span>
                                {this.#kupManager.language.translate(
                                    KupLanguageUpload.SUCCESS
                                )}
                            </span>
                        ) : (
                            <div class="file-upload__list">
                                {this.files.map((file, i) => (
                                    <div class="file-upload__list__item">
                                        <div class="file-upload__list__item__preview">
                                            <FImage
                                                resource={this.#getPreview(
                                                    file
                                                )}
                                            ></FImage>
                                        </div>
                                        <span
                                            class="file-upload__list__item__desc"
                                            title={file.name}
                                        >
                                            {this.#trimFileName(file.name)}
                                        </span>
                                        <span
                                            class="file-upload__list__item__clear"
                                            onClick={this.#handleFileRemove.bind(
                                                this,
                                                i
                                            )}
                                        ></span>
                                    </div>
                                ))}
                            </div>
                        )}
                        {this.showSpinner && (
                            <div class="file-upload__spinner-container">
                                <kup-spinner
                                    active={true}
                                    layout={14}
                                    dimensions="7px"
                                />
                            </div>
                        )}
                    </div>
                </div>
            </Host>
        );
    }

    disconnectedCallback() {
        this.#kupManager.language.unregister(this);
        this.#kupManager.theme.unregister(this);
    }
    //#endregion
}
