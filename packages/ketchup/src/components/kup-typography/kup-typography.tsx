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
     * Manage the toolbar icon. If true is visible, otherwise is not
     * @default null
     */
    @Prop() toolbar: boolean = true;
    /**
     * Display DataNode Toolbar.
     * @default null
     */
    @Prop() toolbarData: KupDataNode[];
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

    /*-------------------------------------------------*/
    /*       I n t e r n a l   V a r i a b l e s       */
    /*-------------------------------------------------*/

    /**
     * Instance of the KupManager class.
     */
    private kupManager: KupManager = kupManagerInstance();
    #clickCbDropCard: KupManagerClickCb = null;
    /**
     * Toolbar List.
     */
    private toolbarList: KupDynamicPositionElement;
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

    onKupIconClick(el: HTMLElement) {
        this.#dropDownActionCardAnchor = el;
        this.kupIconClick.emit({
            comp: this,
            id: this.rootElement.id,
        });
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
            this.toolbarList = null;
        }
    }

    createDropDownToolbarList() {
        if (this.toolbarList) {
            this.closeRowToolbarList();
        }
        const listEl = document.createElement('kup-toolbar');
        listEl.data = this.toolbarData;
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
            this.kupManager.dynamicPosition.register(
                this.toolbarList as unknown as KupDynamicPositionElement,
                this.#dropDownActionCardAnchor as KupDynamicPositionAnchor,
                0,
                KupDynamicPositionPlacement.AUTO,
                true
            );
            this.kupManager.dynamicPosition.start(
                this.toolbarList as unknown as KupDynamicPositionElement
            );
        });
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

        const propsFImage: FImageProps = {
            color: 'var(--kup-gray-color-70)',
            resource: 'more_vert',
            sizeX: '16px',
            sizeY: '16px',
            wrapperClass: 'image__iconToolbar',
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
                    {this.toolbar && (
                        <FImage
                            {...propsFImage}
                            onClick={(event: MouseEvent) => {
                                event.stopPropagation();
                                this.onKupIconClick(
                                    event.currentTarget as HTMLElement
                                );
                            }}
                        />
                    )}
                </div>
            </Host>
        );
    }
    disconnectedCallback() {
        this.kupManager.theme.unregister(this);
    }
}
