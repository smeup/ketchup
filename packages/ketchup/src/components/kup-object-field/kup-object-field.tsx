import {
    Component,
    h,
    Host,
    State,
    Element,
    Event,
    EventEmitter,
    Prop,
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
} from './kup-object-field-declarations';

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
    private kupManager: KupManager = kupManagerInstance();

    /*-------------------------------------------------*/
    /*                   E v e n t s                   */
    /*-------------------------------------------------*/

    /**
     * Triggered when the button loses focus.
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
     * Triggered when the button is clicked.
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

    render() {
        const props: FObjectFieldProps = {
            onInput: (event: UIEvent) => {
                this.inputValue = (
                    event.currentTarget as HTMLInputElement
                ).value;
            },
            onOpenSearchMenu: () => {
                this.onKupOpenSearch();
            },
            onSearch: () => {
                this.onKupSearch();
            },
            searchMenuData: this.data?.['search-menu-data'] ?? [],
        };

        return (
            <Host>
                <style>
                    {this.kupManager.theme.setKupStyle(
                        this.rootElement as KupComponent
                    )}
                </style>
                <div id={componentWrapperId}>
                    <FObjectField {...props} />
                </div>
            </Host>
        );
    }
}
