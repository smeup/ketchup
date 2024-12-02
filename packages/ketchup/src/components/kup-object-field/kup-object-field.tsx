import {
    Component,
    h,
    Host,
    State,
    Element,
    Event,
    EventEmitter,
    Prop,
    Method,
    forceUpdate,
} from '@stencil/core';
import {
    KupManager,
    kupManagerInstance,
} from '../../managers/kup-manager/kup-manager';
import { FObjectFieldProps } from '../../f-components/f-object-field/f-object-field-declations';
import { KupComponent } from '../../types/GenericTypes';
import { componentWrapperId } from '../../variables/GenericVariables';
import { FObjectField } from '../../f-components/f-object-field/f-object-field';
import {
    KupObjectFieldOpenSearchMenuPayload,
    KupObjectFieldSearchPayload,
    KupObjectFieldSelectedMenuItem,
} from './kup-object-field-declarations';
import { KupToolbarClickEventPayload } from '../kup-toolbar/kup-toolbar-declarations';
import { KupToolbarCustomEvent } from '../../components';

@Component({
    tag: 'kup-object-field',
    styleUrl: 'kup-object-field.scss',
    shadow: true,
})
export class KupObjectField {
    /**
     * References the root HTML element of the component (<kup-button>).
     */
    @Element() rootElement: HTMLElement;

    /*-------------------------------------------------*/
    /*                   S t a t e s                   */
    /*-------------------------------------------------*/

    /**
     * The value written in the input field.
     * @default ""
     */
    @State() inputValue: string = '';

    /**
     * Set visibility of search menu items
     */
    @State() menuVisible: boolean = false;

    /*-------------------------------------------------*/
    /*                    P r o p s                    */
    /*-------------------------------------------------*/

    @Prop() data: {};

    /*-------------------------------------------------*/
    /*       I n t e r n a l   V a r i a b l e s       */
    /*-------------------------------------------------*/

    /**
     * Instance of the KupManager class.
     */
    #kupManager: KupManager = kupManagerInstance();

    /*-------------------------------------------------*/
    /*                   E v e n t s                   */
    /*-------------------------------------------------*/

    /**
     * Triggered when the user clicks on the search icon.
     */
    @Event({
        eventName: 'kup-object-field-search',
        composed: true,
        cancelable: false,
        bubbles: true,
    })
    kupSearch: EventEmitter<KupObjectFieldSearchPayload>;

    onKupSearch() {
        this.kupSearch.emit({
            comp: this,
            id: this.rootElement.id,
            inputValue: this.inputValue,
        });
    }

    /**
     * Triggered when the user clicks on the hamburger button.
     */
    @Event({
        eventName: 'kup-object-field-open-search-menu',
        composed: true,
        cancelable: false,
        bubbles: true,
    })
    kupOpenSearch: EventEmitter<KupObjectFieldOpenSearchMenuPayload>;

    onKupOpenSearch() {
        this.kupOpenSearch.emit({
            comp: this,
            id: this.rootElement.id,
            inputValue: this.inputValue,
        });
    }

    /**
     * Triggered when the user chooses an item on search menu
     */
    @Event({
        eventName: 'kup-object-field-selected-menu-item',
        composed: true,
        cancelable: false,
        bubbles: true,
    })
    kupSelectedMenu: EventEmitter<KupObjectFieldSelectedMenuItem>;

    onKupSelectedMenuItem(payload: KupToolbarClickEventPayload) {
        this.kupSelectedMenu.emit({
            comp: this,
            id: this.rootElement.id,
            inputValue: this.inputValue,
            selected: payload.selected,
            index: payload.index,
        });
    }

    /*-------------------------------------------------*/
    /*           P u b l i c   M e t h o d s           */
    /*-------------------------------------------------*/

    /*-------------------------------------------------*/
    /*           P r i v a t e   M e t h o d s         */
    /*-------------------------------------------------*/
    #onDocumentClickHandler = () => {
        this.menuVisible = false;
    };

    /*-------------------------------------------------*/
    /*          L i f e c y c l e   H o o k s          */
    /*-------------------------------------------------*/

    componentWillLoad() {
        this.#kupManager.debug.logLoad(this, false);
        this.#kupManager.theme.register(this);
    }

    componentDidLoad() {
        this.#kupManager.debug.logLoad(this, true);
    }

    componentWillRender() {
        this.#kupManager.debug.logRender(this, false);
    }

    componentDidRender() {
        this.#kupManager.debug.logRender(this, true);
    }

    render() {
        const menuData = this.data?.['menu-data']?.data;
        const props: FObjectFieldProps = {
            menuData: menuData ?? [],
            menuVisible: this.menuVisible && menuData,
            onInput: (event: UIEvent) => {
                this.inputValue = (
                    event.currentTarget as HTMLInputElement
                ).value;
            },
            onOpenMenu: () => {
                this.menuVisible = true;
                this.onKupOpenSearch();
            },
            onSearch: () => {
                this.onKupSearch();
            },
            onSelectedMenuItem: (
                event: KupToolbarCustomEvent<KupToolbarClickEventPayload>
            ) => {
                this.menuVisible = false;
                this.onKupSelectedMenuItem(event.detail);
            },
        };

        if (this.menuVisible) {
            addEventListener('click', this.#onDocumentClickHandler);
        } else {
            removeEventListener('click', this.#onDocumentClickHandler);
        }

        return (
            <Host>
                <style>
                    {this.#kupManager.theme.setKupStyle(
                        this.rootElement as KupComponent
                    )}
                </style>
                <div id={componentWrapperId}>
                    <FObjectField {...props} />
                </div>
            </Host>
        );
    }

    disconnectedCallback() {
        this.#kupManager.theme.unregister(this);
    }
}
