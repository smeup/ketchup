import type {
    KupDom,
    KupManagerClickCb,
} from '../kup-manager/kup-manager-declarations';
import {
    KupDynamicPositionAnchor,
    KupDynamicPositionElement,
} from '../kup-dynamic-position/kup-dynamic-position-declarations';
import { KupDebugCategory } from '../kup-debug/kup-debug-declarations';
import {
    KupTooltipAnchor,
    KupTooltipCallbacks,
} from './kup-tooltip-declarations';

const dom: KupDom = document.documentElement as KupDom;

/**
 * Handles application-wide tooltip using card component.
 * @module KupTooltip
 */
export class KupTooltip {
    currentAnchor: KupTooltipAnchor = null;
    delay: number = null;
    element: HTMLKupCardElement = null;
    managedElements: Set<KupTooltipAnchor> = null;
    timeout: ReturnType<typeof setTimeout> = null;
    #clickCb: KupManagerClickCb = null;
    /**
     * Initializes KupTooltip.
     */
    constructor(delay?: number) {
        this.delay = delay ? delay : 125;
        this.managedElements = new Set();
        document.addEventListener('pointermove', (e) => {
            const paths = e.composedPath() as HTMLElement[];
            // Leaving the function when hovering on the tooltip itself
            if (paths.includes(this.element)) {
                return;
            }
            const enterHandler = (anchor: KupTooltipAnchor) => {
                this.timeout = null;
                requestAnimationFrame(
                    anchor.kupTooltip.enter.bind(anchor.kupTooltip.enter, e)
                );
            };
            const overHandler = (anchor: KupTooltipAnchor) => {
                requestAnimationFrame(
                    anchor.kupTooltip.over.bind(anchor.kupTooltip.over, e)
                );
            };
            const leaveHandler = () => {
                requestAnimationFrame(
                    this.currentAnchor.kupTooltip.leave.bind(
                        this.currentAnchor.kupTooltip.leave,
                        e
                    )
                );
            };
            // If the current anchor exists and is not included in the event path,
            // the leaving callback is fired.
            if (this.currentAnchor && !paths.includes(this.currentAnchor)) {
                if (this.timeout) {
                    clearTimeout(this.timeout);
                    this.timeout = null;
                } else {
                    if (this.currentAnchor.kupTooltip.leave) {
                        leaveHandler();
                    }
                }
                this.currentAnchor = null;
            } else if (!this.timeout) {
                for (let index = 0; index < paths.length; index++) {
                    const element = paths[index] as KupTooltipAnchor;
                    if (this.managedElements.has(element)) {
                        // If the current anchor is the same as the registered element found
                        // in the path, the mouse over function is invoked
                        if (this.currentAnchor === element) {
                            if (element.kupTooltip.over) {
                                overHandler(element);
                            }
                            // Otherwise, the mouse enter callback will be invoked
                        } else {
                            this.currentAnchor = element;
                            if (element.kupTooltip.enter) {
                                if (this.delay) {
                                    this.timeout = setTimeout(
                                        enterHandler.bind(
                                            enterHandler,
                                            element
                                        ),
                                        this.delay
                                    );
                                } else {
                                    enterHandler(element);
                                }
                            }
                        }
                    }
                }
            }
        });
    }
    #dynPos(anchor: KupDynamicPositionAnchor) {
        if (dom.ketchup.dynamicPosition.isRegistered(this.element)) {
            dom.ketchup.dynamicPosition.changeAnchor(this.element, anchor);
        } else {
            dom.ketchup.dynamicPosition.register(
                this.element as KupDynamicPositionElement,
                anchor,
                null,
                null,
                true
            );
        }
        dom.ketchup.dynamicPosition.start(this.element);
    }
    #create(options?: Partial<HTMLKupCardElement>) {
        this.element = document.createElement('kup-card');
        this.element.id = 'kup-tooltip';
        this.element.isMenu = true;
        this.element.layoutNumber = 15;
        this.element.sizeX = 'auto';
        this.element.sizeY = 'auto';
        if (options) {
            this.#setOptions(options);
        }
        document.body.appendChild(this.element);
        this.#clickCb = {
            cb: () => {
                this.hide();
            },
            el: this.element,
        };
    }
    #setOptions(options: Partial<HTMLKupCardElement>) {
        for (const key in options) {
            if (Object.prototype.hasOwnProperty.call(options, key)) {
                const prop = options[key];
                this.element[key] = prop;
            }
        }
    }
    /**
     * Hides the tooltip.
     */
    hide() {
        if (this.element) {
            this.element.menuVisible = false;
            dom.ketchup.dynamicPosition.stop(this.element);
            dom.ketchup.removeClickCallback(this.#clickCb);
        }
    }
    /**
     * Displays the tooltip.
     * @param {KupTooltipAnchor} anchor - Anchor point of the tooltip.
     * @param {Partial<HTMLKupCardElement>} options - Props/attributes of the tooltip.
     */
    show(
        anchor?: KupDynamicPositionAnchor,
        options?: Partial<HTMLKupCardElement>
    ) {
        // Creates the card or updates it with new options
        if (!this.element) {
            this.#create(options);
        } else if (options) {
            this.#setOptions(options);
        }
        // If an anchor was provided, initializes or updates dynamic positioning
        if (anchor) {
            this.#dynPos(anchor);
        }
        // If the tooltip is already visible, it's pointless to go on
        if (this.element.menuVisible) {
            return;
        }
        // If the dynamic positioning is still to be registered, a warning is thrown
        if (!dom.ketchup.dynamicPosition.isRegistered(this.element)) {
            dom.ketchup.debug.logMessage(
                'kup-tooltip',
                'Unable to display KupTooltip without specifying a valid anchor point.',
                KupDebugCategory.WARNING
            );
            return;
        }
        this.element.menuVisible = true;
        dom.ketchup.addClickCallback(this.#clickCb, true);
    }
    /**
     * Returns whether an element was previously registered or not.
     * @param {KupTooltipAnchor} element - Element to test.
     * @returns {boolean} True if the element was registered.
     */
    isRegistered(element: KupTooltipAnchor): boolean {
        return !this.managedElements
            ? false
            : this.managedElements.has(element);
    }
    /**
     * Registers an HTMLElement as KupTooltipAnchor, triggering callback invocation on mouse over.
     * @param {KupTooltipAnchor} element - The HTML element to be registered.
     * @param {(e: PointerEvent) => void} cbEnter - Callback invoked when hovering on the the element for the first time.
     * @param {(e: PointerEvent) => void} cbOver - Callback invoked when hovering on the element.
     * @param {(e: PointerEvent) => void} cbLeave - Callback invoked when leaving the element.
     */
    register(
        element: KupTooltipAnchor,
        cbEnter?: (e: PointerEvent) => void,
        cbOver?: (e: PointerEvent) => void,
        cbLeave?: (e: PointerEvent) => void
    ): void {
        this.managedElements.add(element);
        const kupTooltip: KupTooltipCallbacks = {
            enter: cbEnter,
            leave: cbLeave,
            over: cbOver,
        };
        element.kupTooltip = kupTooltip;
    }
    /**
     * Unregisters an HTMLElement, preventing its attached callback from being invoked.
     *
     * @param {KupTooltipAnchor} element - - The HTML element to be unregistered.
     */
    unregister(element: KupTooltipAnchor): void {
        if (this.managedElements) {
            this.managedElements.delete(element);
        }
    }
}
