import '../../stencil.core';
export declare class KetchupPortalInstance {
    /**
     * Specifies if the current portal instance should be displayed or not.
     */
    isVisible: boolean;
    /**
     * A style node to be copied into the KetchupPortalInstance
     */
    styleNode: HTMLStyleElement;
    /**
     * Virtual node list the KetchupPortalInstance must render
     */
    vNodes?: JSX.Element[] | JSX.Element;
    componentWillUpdate(): void;
    port: HTMLElement;
    /**
     * When loading the frame has thrown an error

    @Event({
        eventName: 'ketchupHtmlError',
        composed: true,
        cancelable: false,
        bubbles: true
    })
    ketchupHtmlError: EventEmitter;

    onFrameError() {
        this.ketchupHtmlError.emit();
    }*/
    render(): JSX.Element | JSX.Element[];
}
