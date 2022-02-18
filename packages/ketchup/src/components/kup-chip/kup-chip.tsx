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
import { FChip } from '../../f-components/f-chip/f-chip';
import {
    FChipsProps,
    FChipType,
} from '../../f-components/f-chip/f-chip-declarations';
import {
    KupChipEventPayload,
    KupChipNode,
    KupChipProps,
} from './kup-chip-declarations';
import { GenericObject, KupComponent } from '../../types/GenericTypes';
import { KupDebugCategory } from '../../managers/kup-debug/kup-debug-declarations';
import { KupObj } from '../../managers/kup-objects/kup-objects-declarations';
import { getProps, setProps } from '../../utils/utils';
import { componentWrapperId } from '../../variables/GenericVariables';

@Component({
    tag: 'kup-chip',
    styleUrl: 'kup-chip.scss',
    shadow: true,
})
export class KupChip {
    /**
     * References the root HTML element of the component (<kup-chip>).
     */
    @Element() rootElement: HTMLElement;

    /*-------------------------------------------------*/
    /*                    P r o p s                    */
    /*-------------------------------------------------*/

    /**
     * Custom style of the component.
     * @default ""
     * @see https://ketchup.smeup.com/ketchup-showcase/#/customization
     */
    @Prop() customStyle: string = '';
    /**
     * List of elements.
     * @default []
     */
    @Prop({ mutable: true }) data: KupChipNode[] = [];
    /**
     * The type of chip. Available types: input, filter, choice or empty for default.
     * @default FChipType.STANDARD
     */
    @Prop() type: FChipType = FChipType.STANDARD;

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
     * Triggered when a chip loses focus.
     */
    @Event({
        eventName: 'kup-chip-blur',
        composed: true,
        cancelable: false,
        bubbles: true,
    })
    kupBlur: EventEmitter<KupChipEventPayload>;
    /**
     * Triggered when a chip is clicked.
     */
    @Event({
        eventName: 'kup-chip-click',
        composed: true,
        cancelable: false,
        bubbles: true,
    })
    kupClick: EventEmitter<KupChipEventPayload>;
    /**
     * Triggered when a chip gets focused.
     */
    @Event({
        eventName: 'kup-chip-focus',
        composed: true,
        cancelable: false,
        bubbles: true,
    })
    kupFocus: EventEmitter<KupChipEventPayload>;
    /**
     * Triggered when the removal icon on input chips is clicked.
     */
    @Event({
        eventName: 'kup-chip-iconclick',
        composed: true,
        cancelable: false,
        bubbles: true,
    })
    kupIconClick: EventEmitter<KupChipEventPayload>;

    onKupBlur(chip: KupChipNode) {
        this.kupBlur.emit({
            comp: this,
            id: this.rootElement.id,
            chip: chip,
        });
    }

    onKupClick(chip: KupChipNode) {
        const isChoice: boolean = this.type.toLowerCase() === FChipType.CHOICE;
        const isFilter: boolean = this.type.toLowerCase() === FChipType.FILTER;
        if (isChoice) {
            for (let index = 0; index < this.data.length; index++) {
                const node = this.data[index];
                recursive(node);

                function recursive(node: KupChipNode) {
                    if (node !== chip) {
                        node.checked = false;
                    }
                    for (
                        let index = 0;
                        node.children && index < node.children.length;
                        index++
                    ) {
                        if (node.children[index]) {
                            recursive(node.children[index]);
                        }
                    }
                }
            }
        }
        if (isChoice || isFilter) {
            chip.checked = chip.checked ? false : true;
        }
        this.kupClick.emit({
            comp: this,
            id: this.rootElement.id,
            chip: chip,
        });
        this.refresh();
    }

    onKupFocus(chip: KupChipNode) {
        this.kupFocus.emit({
            comp: this,
            id: this.rootElement.id,
            chip: chip,
        });
    }

    onKupIconClick(chip: KupChipNode) {
        this.kupIconClick.emit({
            comp: this,
            id: this.rootElement.id,
            chip: chip,
        });
        for (let index = 0; index < this.data.length; index++) {
            recursive(this.data[index], this.data);
            function recursive(node: KupChipNode, array: KupChipNode[]) {
                const i = array.indexOf(chip);
                if (i > -1) {
                    array.splice(i, 1);
                    return;
                }
                for (
                    let index = 0;
                    node.children && index < node.children.length;
                    index++
                ) {
                    if (node.children[index]) {
                        recursive(node.children[index], node.children);
                    }
                }
            }
        }
        this.refresh();
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
        return getProps(this, KupChipProps, descriptions);
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
        setProps(this, KupChipProps, props);
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

    componentWillUpdate() {
        const isChoice: boolean = this.type.toLowerCase() === FChipType.CHOICE;
        let firstCheckedFound: boolean = false;
        if (isChoice) {
            for (let j = 0; j < this.data.length; j++) {
                if (this.data[j].checked && firstCheckedFound) {
                    this.data[j].checked = false;
                    let message =
                        'Found occurence of data(' +
                        j +
                        ") to be set on 'checked' when another one was found before! Overriding to false because the 'choice' type only allows 1 'checked'.";

                    this.kupManager.debug.logMessage(
                        this,
                        message,
                        KupDebugCategory.WARNING
                    );
                }
                if (this.data[j].checked && !firstCheckedFound) {
                    firstCheckedFound = true;
                }
            }
        }
    }

    componentWillRender() {
        this.kupManager.debug.logRender(this, false);
    }

    componentDidRender() {
        this.kupManager.debug.logRender(this, true);
    }

    render() {
        const props: FChipsProps = {
            danger: this.rootElement.classList.contains('kup-danger')
                ? true
                : false,
            data: this.data,
            info: this.rootElement.classList.contains('kup-info')
                ? true
                : false,
            onBlur: [],
            onClick: [],
            onExpansionClick: [],
            onFocus: [],
            onIconClick: [],
            secondary: this.rootElement.classList.contains('kup-secondary')
                ? true
                : false,
            success: this.rootElement.classList.contains('kup-success')
                ? true
                : false,
            type: this.type,
            warning: this.rootElement.classList.contains('kup-warning')
                ? true
                : false,
        };
        for (let j = 0; j < this.data.length; j++) {
            props.onBlur.push((chip) => this.onKupBlur(chip));
            props.onClick.push((chip) => this.onKupClick(chip));
            props.onExpansionClick.push((chip) => {
                chip.isExpanded = !chip.isExpanded ? true : false;
                this.refresh();
            });
            props.onFocus.push((chip) => this.onKupFocus(chip));
            props.onIconClick.push((chip) => this.onKupIconClick(chip));
        }
        if (!this.data || this.data.length === 0) {
            return;
        }

        return (
            <Host>
                <style>
                    {this.kupManager.theme.setKupStyle(
                        this.rootElement as KupComponent
                    )}
                </style>
                <div id={componentWrapperId}>
                    <FChip {...props} />
                </div>
            </Host>
        );
    }

    disconnectedCallback() {
        this.kupManager.theme.unregister(this);
    }
}
