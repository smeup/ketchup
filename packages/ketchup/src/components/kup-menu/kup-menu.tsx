import {
    Component,
    Element,
    Event,
    EventEmitter,
    h,
    Host,
    Listen,
    Prop,
    Watch,
} from '@stencil/core';
//import {KupMenuAllowedPositions} from './kup-menu-declarations';
import { isEventFromElement } from '../../utils/utils';
import { positionRecalc } from '../../utils/recalc-position';
import { NODE_TYPES } from '@stencil/core/mock-doc';

@Component({
    tag: 'kup-menu',
    styleUrl: 'kup-menu.scss',
    shadow: true,
})
export class KupMenu {
    /**
     * When set to true, the menu will automatically close when the user clicks outside of its deactivationRelativeTo prop.
     * @see deactivationRelativeTo
     */
    @Prop({ reflect: true })
    closeOnOuterClick: boolean = true;

    /**
     * When closeOnOuterClick is set to true,
     * the menu will search for this element inside the event path: if found, then the menu will not be closed.
     * Therefore, if the menu closing event comes from this element or one of its descendants, the menu will not be closed.
     * If left to null, the component will automatically use the element provided by positionRelativeTo prop.
     * If positionRelativeTo is not defined, it will default to the menu parent element.
     * @see closeOnOuterClick
     * @see positionRelativeTo
     */
    @Prop({ mutable: true })
    deactivationRelativeTo: HTMLElement = null;

    /**
     * Open or closes the menu. The menu itself can edit this prop.
     * @see closeOnOuterClick
     * @see deactivationRelativeTo
     */
    @Prop({ reflect: true, mutable: true })
    isActive: boolean = false;

    /**
     * Forces the menu to open on a given position.
     * The default value allows the menu to open itself in the best position according to its calculation.
     * @see positionRelativeTo
     * @todo implement this feature
     */
    // @Prop({reflect: true})
    // position: KupMenuAllowedPositions = KupMenuAllowedPositions.AUTO;

    /**
     * The element relative to which the menu will be opened in a given position.
     * If left to null, once, when the component menu is mounted, this prop will be automatically set to the parent HTML element.
     * @see position
     */
    @Prop({ mutable: true })
    positionRelativeTo: HTMLElement = null;

    /**
     * Specifies how many pixels will be use to separate the menu from its positionRelativeTo element.
     */
    @Prop({ reflect: true })
    margin: number = 0;

    //-------- Internal State --------
    @Element() menuElement: HTMLElement;

    //---- Not reactive ----
    clickOutsideMenuFunction = this.onDocumentClick.bind(this);

    //-------- Lifecycle hooks --------

    componentDidLoad() {
        // If there are no positionRelativeTo or deactivationRelativeTo elements set, we set them to the parent component
        const parentElement = this.getMenuParentNode();
        if (!this.positionRelativeTo) {
            this.positionRelativeTo = parentElement;
        }

        // When component is created, then the listener is set.
        //document.addEventListener('click', this.clickOutsideMenuFunction);
    }

    componentDidUnload() {
        // When component is destroyed, then the listener is removed.
        //document.removeEventListener('click', this.clickOutsideMenuFunction);
    }

    //-------- Watchers --------

    @Watch('isActive')
    menuReposition(newValue: boolean) {
        // When the new value is true so the menu is visible, we calculate the new position
        if (newValue && this.positionRelativeTo) {
            positionRecalc(
                this.menuElement,
                this.positionRelativeTo || this.getMenuParentNode() // There must always be an element to which the position will be calculated relatively to,
            );
        }
    }

    //-------- Events --------
    /**
     * When the menu gets closed.
     */
    @Event({
        eventName: 'kupMenuClose',
        composed: true,
        cancelable: false,
        bubbles: true,
    })
    kupMenuClose: EventEmitter<void>;

    //-------- Methods --------
    closeMenu() {
        this.isActive = false;
        this.kupMenuClose.emit();
    }

    @Listen('keyup', { target: 'document' })
    closeMenuOnEscapeKeyup(e: KeyboardEvent) {
        if (this.closeOnOuterClick && this.isActive && e.key === 'Escape') {
            this.closeMenu();
        }
    }

    @Listen('scroll', { target: 'window' })
    closeMenuOnWindowScroll() {
        if (this.closeOnOuterClick && this.isActive) {
            this.closeMenu();
        }
    }

    getMenuParentNode(): HTMLElement {
        // https://developer.mozilla.org/en-US/docs/Web/API/Node/nodeType
        if (
            this.menuElement.parentNode.nodeType ===
            NODE_TYPES.DOCUMENT_FRAGMENT_NODE
        ) {
            // The component is a direct child of another web component (or contained inside a shadow dom)
            // https://stackoverflow.com/questions/25339932/get-shadow-root-host-element
            // https://developer.mozilla.org/en-US/docs/Web/API/Node/getRootNode
            // Still used this method due to the fact that currently it has a slightly better support.
            // https://caniuse.com/#feat=mdn-api_shadowroot_host
            // https://caniuse.com/#search=getRootNode
            // TODO migrate to better method invocation
            return (this.menuElement.parentNode as any).host; // THis here gets an error in typescript, but its strange since its supported.
        } else {
            // The parent component is child of an HTML element
            return this.menuElement.parentElement;
        }
    }

    // When the click is outside of one of the
    @Listen('click', { target: 'document' })
    onDocumentClick(event: UIEvent) {
        // When is not active there is no need to emit the event
        if (
            this.closeOnOuterClick &&
            this.isActive &&
            !(
                (
                    isEventFromElement(event, this.menuElement) ||
                    isEventFromElement(
                        event,
                        this.deactivationRelativeTo ||
                            this.positionRelativeTo ||
                            this.getMenuParentNode()
                    )
                ) // The object to be searched for has this kind of priority
            )
        ) {
            this.closeMenu();
        }
    }

    render() {
        // Stop propagation is mandatory to avoid closing the menu when there is a click within the menu.
        return (
            <Host
                onClick={(e: UIEvent) => {
                    e.stopPropagation();
                }}
            >
                <div class="menu-optional-container menu-optional-container--top">
                    <slot name="top-container" />
                </div>
                <div class="menu-content">
                    <slot />
                </div>
                <div class="menu-optional-container menu-optional-container--bottom">
                    <slot name="bottom-container" />
                </div>
            </Host>
        );
    }
}
