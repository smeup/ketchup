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
import { GenericObject, KupComponent } from '../../types/GenericTypes';
import { getProps, setProps } from '../../utils/utils';
import {
    KupManager,
    KupManagerClickCb,
} from '../../managers/kup-manager/kup-manager-declarations';
import { kupManagerInstance } from '../../managers/kup-manager/kup-manager';
import { FTypography } from '../../f-components/f-typography/f-typography';
import {
    FTypographyProps,
    FTypographyType,
} from '../../f-components/f-typography/f-typography-declarations';
import {
    KupTypographyClickEventPayload,
    KupTypographyIconClickEventPayload,
    KupTypographyProps,
} from './kup-typography-declarations';
import { KupDataNode } from '../../managers/kup-data/kup-data-declarations';
import {
    KupDynamicPositionAnchor,
    KupDynamicPositionElement,
    KupDynamicPositionPlacement,
} from '../../managers/kup-dynamic-position/kup-dynamic-position-declarations';
import { componentWrapperId } from '../../variables/GenericVariables';
import { FImage } from '../../f-components/f-image/f-image';
import { FImageProps } from '../../f-components/f-image/f-image-declarations';
import { KupToolbarItemClickEventPayload } from '../../components/kup-toolbar/kup-toolbar-declarations';
import { KupDebugCategory } from '../../managers/kup-debug/kup-debug-declarations';

@Component({
    assetsDirs: ['assets/fonts'],
    tag: 'kup-typography',
    styleUrl: 'kup-typography.scss',
    shadow: true,
})
export class KupTypography {
    /**
     * References the root HTML element of the component (<kup-typography>).
     */
    @Element() rootElement: HTMLElement;

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
     * When enabled displays toolbar item inside each single tab.
     * @default false
     */
    @Prop() infoIcon: boolean = false;
    /**
     * Manage the toolbar icon. If true is visible, otherwise is not
     * @default null
     */
    @Prop() toolbar: boolean = true;
    /**
     * Sets the sizing of the textfield
     * @default FTypographyType.BODY_COMPACT
     */
    @Prop() type: FTypographyType = FTypographyType.BODY_COMPACT;
    /**
     * This is the content of the text
     * @default null
     */
    @Prop() value: string = null;
    /**
     * This is the callback to retrieve toolbar's data
     * @default [];
     */
    @Prop() toolbarCallback: () => Promise<KupDataNode[]>;
    @Prop() infoCallBack: () => Promise<KupDataNode[]>;

    /*-------------------------------------------------*/
    /*       I n t e r n a l   V a r i a b l e s       */
    /*-------------------------------------------------*/

    toolbarState: KupDataNode[] = [];
    infoState: KupDataNode[] = [];

    /**
     * Instance of the KupManager class.
     */
    private kupManager: KupManager = kupManagerInstance();
    #clickCbDropCard: KupManagerClickCb = null;
    /**
     * Toolbar List.
     */
    private toolbarList: KupDynamicPositionElement;
    private infoList: KupDynamicPositionElement;
    #dropDownActionCardAnchor: HTMLElement = null;

    /*-------------------------------------------------*/
    /*                   E v e n t s                   */
    /*-------------------------------------------------*/

    @Event({
        eventName: 'kup-typography-iconclick',
        composed: true,
        cancelable: false,
        bubbles: true,
    })
    kupIconClick: EventEmitter<KupTypographyIconClickEventPayload>;

    @Event({
        eventName: 'kup-typography-click',
        composed: true,
        cancelable: false,
        bubbles: true,
    })
    kupClick: EventEmitter<KupTypographyClickEventPayload>;

    /**
     * Triggered when the info icon inside tab is clicked.
     */
    @Event({
        eventName: 'kup-typography-infoiconclick',
        composed: true,
        cancelable: false,
        bubbles: true,
    })
    kupInfoIconClick: EventEmitter<KupTypographyIconClickEventPayload>;

    @Event({
        eventName: 'kup-typography-itemclick',
        composed: true,
        cancelable: false,
        bubbles: true,
    })
    kupItemClick: EventEmitter<KupToolbarItemClickEventPayload>;

    onKupClick() {
        this.kupClick.emit({
            comp: this,
            id: this.rootElement.id,
            value: this.value,
        });
    }

    onKupInfoIconClick(el: HTMLElement) {
        if (!el) {
            console.warn('onKupIconClick: Element is null');
            return;
        }
        this.#dropDownActionCardAnchor = el;
        this.createDropDownInfoList();
    }

    onKupIconClick(el: HTMLElement) {
        if (!el) {
            console.warn('onKupIconClick: Element is null');
            return;
        }
        this.#dropDownActionCardAnchor = el;
        this.createDropDownToolbarList();
    }

    onKupToolbarItemClick(e: CustomEvent) {
        this.kupItemClick.emit({
            comp: this,
            id: this.rootElement.id,
            value: this.value,
            node: e.detail.selected,
        });
    }

    /*-------------------------------------------------*/
    /*           P r i v a t e   M e t h o d s         */
    /*-------------------------------------------------*/

    closeRowToolbarList() {
        if (this.toolbarList) {
            this.kupManager.dynamicPosition.stop(
                this.toolbarList as KupDynamicPositionElement
            );
            this.kupManager.removeClickCallback(this.#clickCbDropCard);
            this.toolbarList.remove();
            this.kupManager.dynamicPosition.unregister([this.toolbarList]);
            this.toolbarList = null;
        }
    }

    /**
     * Create dropdown list for toolbar
     */
    createDropDownToolbarList() {
        if (!this.#dropDownActionCardAnchor) {
            console.warn('createDropDownToolbarList: Anchor is null!');
            return;
        }

        if (this.toolbarList) {
            this.closeRowToolbarList();
        }

        if (this.toolbarState.length === 0) {
            console.warn('No toolbar state available.');
            return;
        }

        const listEl = document.createElement('kup-toolbar');
        listEl.data = this.toolbarState;
        listEl.addEventListener('kup-toolbar-click', (e: CustomEvent) => {
            this.onKupToolbarItemClick(e);
            setTimeout(() => {
                this.closeRowToolbarList();
            }, 0);
        });

        this.toolbarList = listEl;
        this.#clickCbDropCard = {
            cb: () => {
                this.closeRowToolbarList();
            },
            el: this.toolbarList,
        };

        this.kupManager.addClickCallback(this.#clickCbDropCard, true);
        this.rootElement.shadowRoot.appendChild(this.toolbarList);
        requestAnimationFrame(() => {
            if (!this.#dropDownActionCardAnchor) {
                console.warn('DropDown anchor is still null after delay!');
                return;
            }
            this.kupManager.dynamicPosition.register(
                this.toolbarList as KupDynamicPositionElement,
                this.#dropDownActionCardAnchor as KupDynamicPositionAnchor,
                0,
                KupDynamicPositionPlacement.AUTO,
                true
            );
            this.kupManager.dynamicPosition.start(
                this.toolbarList as KupDynamicPositionElement
            );
        });
    }

    /**
     * Create dropdown list for tab info icon
     */
    createDropDownInfoList() {
        if (!this.#dropDownActionCardAnchor) {
            console.warn('createDropDownToolbarList: Anchor is null!');
            return;
        }
        if (this.infoList) {
            this.closeInfoDataList();
        }
        if (this.infoState.length === 0) {
            console.warn('No infoicon available.');
            return;
        }
        const listEl = document.createElement('kup-list');
        listEl.data = this.infoState;
        this.infoList = listEl;
        this.#clickCbDropCard = {
            cb: () => {
                this.closeInfoDataList();
            },
            el: this.infoList,
        };

        this.kupManager.addClickCallback(this.#clickCbDropCard, true);
        this.rootElement.shadowRoot.appendChild(this.infoList);
        requestAnimationFrame(() => {
            this.kupManager.dynamicPosition.register(
                this.infoList,
                this.#dropDownActionCardAnchor as KupDynamicPositionAnchor,
                0,
                KupDynamicPositionPlacement.AUTO,
                true
            );
            this.kupManager.dynamicPosition.start(this.infoList);
        });
    }
    /**
     * Destroy dropdown list for tab info icon
     */
    closeInfoDataList() {
        if (this.infoList) {
            this.kupManager.dynamicPosition.stop(
                this.infoList as KupDynamicPositionElement
            );
            this.kupManager.removeClickCallback(this.#clickCbDropCard);
            this.infoList.remove();
            this.kupManager.dynamicPosition.unregister([this.infoList]);
            this.infoList = null;
        }
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
        return getProps(this, KupTypographyProps, descriptions);
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
        setProps(this, KupTypographyProps, props);
    }

    /*-------------------------------------------------*/
    /*          L i f e c y c l e   H o o k s          */
    /*-------------------------------------------------*/

    componentWillLoad() {
        this.kupManager.debug.logLoad(this, false);
        this.kupManager.theme.register(this);
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
        const props: FTypographyProps = {
            toolbar: this.toolbar,
            value: this.value,
            type: this.type,
        };

        const toolbarIcon: FImageProps = {
            color: 'var(--kup-gray-color-70)',
            resource: 'more_vert',
            sizeX: '16px',
            sizeY: '16px',
            wrapperClass: 'image__iconToolbar iconToolbar',
        };

        const infoIcon: FImageProps = {
            color: 'var(--kup-gray-color-70)',
            resource: 'info_outline',
            sizeX: '16px',
            sizeY: '16px',
            wrapperClass: 'image__iconToolbar iconInfo',
        };
        const classObjParent: Record<string, boolean> = {
            'kup-typography--wrap': props.toolbar ? true : false,
        };
        return (
            <Host>
                <style>
                    {this.kupManager.theme.setKupStyle(
                        this.rootElement as KupComponent
                    )}
                </style>
                <div
                    id={componentWrapperId}
                    class={classObjParent}
                    onClick={() => this.onKupClick}
                >
                    <FTypography {...props} />
                    {this.infoIcon && (
                        <FImage
                            {...infoIcon}
                            onClick={(event: MouseEvent) => {
                                event.stopPropagation();
                                this.onKupInfoIconClick(
                                    event.currentTarget as HTMLElement
                                );
                            }}
                        />
                    )}
                    {this.toolbar && (
                        <FImage
                            {...toolbarIcon}
                            onClick={async (event: MouseEvent) => {
                                event.stopPropagation();
                                const el = event.currentTarget as HTMLElement;
                                const data = await this.toolbarCallback();
                                this.toolbarState = data;
                                if (this.toolbarState.length > 0) {
                                    this.onKupIconClick(el);
                                } else {
                                    console.warn(
                                        'Toolbar data is empty, not opening dropdown.'
                                    );
                                }
                            }}
                        />
                    )}
                </div>
            </Host>
        );
    }
    disconnectedCallback() {
        this.kupManager.theme.unregister(this);
        if (this.toolbarList) {
            this.kupManager.dynamicPosition.unregister([this.toolbarList]);
        }
        if (this.infoList) {
            this.kupManager.dynamicPosition.unregister([this.infoList]);
        }
    }
}
