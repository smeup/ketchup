import {
    Component,
    Element,
    forceUpdate,
    h,
    Host,
    Method,
    Prop,
    State,
} from '@stencil/core';
import { time } from 'console';
import { KupComponent } from '../../types/GenericTypes';
import {
    KupManager,
    kupManagerInstance,
} from '../../utils/kup-manager/kup-manager';

@Component({
    tag: 'kup-test',
    styleUrl: 'kup-test.scss',
    shadow: true,
})
export class KupTest {
    /**
     * References the root HTML element of the component (<kup-test>).
     */
    @Element() rootElement: HTMLElement;

    /*-------------------------------------------------*/
    /*                   S t a t e s                   */
    /*-------------------------------------------------*/

    /**
     * Lifecycle time.
     * @default null
     */
    @State() content: string = null;

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
     * Specify features to test.
     * @default ""
     * @see https://ketchup.smeup.com/ketchup-showcase/#/customization
     */
    @Prop() features: { debug: boolean; language: boolean; theme: boolean } = {
        debug: true,
        language: true,
        theme: true,
    };
    /**
     * Uncomment to test render times with many props (100).
     */
    /*
    @Prop() test001 = null;
    @Prop() test002 = null;
    @Prop() test003 = null;
    @Prop() test004 = null;
    @Prop() test005 = null;
    @Prop() test006 = null;
    @Prop() test007 = null;
    @Prop() test008 = null;
    @Prop() test009 = null;
    @Prop() test010 = null;
    @Prop() test011 = null;
    @Prop() test012 = null;
    @Prop() test013 = null;
    @Prop() test014 = null;
    @Prop() test015 = null;
    @Prop() test016 = null;
    @Prop() test017 = null;
    @Prop() test018 = null;
    @Prop() test019 = null;
    @Prop() test020 = null;
    @Prop() test021 = null;
    @Prop() test022 = null;
    @Prop() test023 = null;
    @Prop() test024 = null;
    @Prop() test025 = null;
    @Prop() test026 = null;
    @Prop() test027 = null;
    @Prop() test028 = null;
    @Prop() test029 = null;
    @Prop() test030 = null;
    @Prop() test031 = null;
    @Prop() test032 = null;
    @Prop() test033 = null;
    @Prop() test034 = null;
    @Prop() test035 = null;
    @Prop() test036 = null;
    @Prop() test037 = null;
    @Prop() test038 = null;
    @Prop() test039 = null;
    @Prop() test040 = null;
    @Prop() test041 = null;
    @Prop() test042 = null;
    @Prop() test043 = null;
    @Prop() test044 = null;
    @Prop() test045 = null;
    @Prop() test046 = null;
    @Prop() test047 = null;
    @Prop() test048 = null;
    @Prop() test049 = null;
    @Prop() test050 = null;
    @Prop() test051 = null;
    @Prop() test052 = null;
    @Prop() test053 = null;
    @Prop() test054 = null;
    @Prop() test055 = null;
    @Prop() test056 = null;
    @Prop() test057 = null;
    @Prop() test058 = null;
    @Prop() test059 = null;
    @Prop() test060 = null;
    @Prop() test061 = null;
    @Prop() test062 = null;
    @Prop() test063 = null;
    @Prop() test064 = null;
    @Prop() test065 = null;
    @Prop() test066 = null;
    @Prop() test067 = null;
    @Prop() test068 = null;
    @Prop() test069 = null;
    @Prop() test070 = null;
    @Prop() test071 = null;
    @Prop() test072 = null;
    @Prop() test073 = null;
    @Prop() test074 = null;
    @Prop() test075 = null;
    @Prop() test076 = null;
    @Prop() test077 = null;
    @Prop() test078 = null;
    @Prop() test079 = null;
    @Prop() test080 = null;
    @Prop() test081 = null;
    @Prop() test082 = null;
    @Prop() test083 = null;
    @Prop() test084 = null;
    @Prop() test085 = null;
    @Prop() test086 = null;
    @Prop() test087 = null;
    @Prop() test088 = null;
    @Prop() test089 = null;
    @Prop() test090 = null;
    @Prop() test091 = null;
    @Prop() test092 = null;
    @Prop() test093 = null;
    @Prop() test094 = null;
    @Prop() test095 = null;
    @Prop() test096 = null;
    @Prop() test097 = null;
    @Prop() test098 = null;
    @Prop() test099 = null;
    @Prop() test100 = null;
    */

    /*-------------------------------------------------*/
    /*       I n t e r n a l   V a r i a b l e s       */
    /*-------------------------------------------------*/

    /**
     * Instance of the KupManager class.
     */
    private kupManager: KupManager = kupManagerInstance();
    /**
     * Start performance.now()
     */
    private startTime: number = performance.now();
    /**
     * End performance.now()
     */
    private endTime: number = null;

    /*-------------------------------------------------*/
    /*           P u b l i c   M e t h o d s           */
    /*-------------------------------------------------*/

    /**
     * This method is used to trigger a new render of the component.
     */
    @Method()
    async printLifecycleTime(): Promise<number> {
        const time: number = this.endTime - this.startTime;
        this.content =
            this.rootElement.tagName +
            '#' +
            this.rootElement.id +
            ' took ' +
            time +
            'ms to render.';
        return time;
    }
    /**
     * This method is used to trigger a new render of the component.
     */
    @Method()
    async refresh(): Promise<void> {
        forceUpdate(this);
    }

    /*-------------------------------------------------*/
    /*          L i f e c y c l e   H o o k s          */
    /*-------------------------------------------------*/

    componentWillLoad() {
        if (this.features.debug) {
            this.kupManager.debug.logLoad(this, false);
        }
        if (this.features.language) {
            this.kupManager.language.register(this);
        }
        if (this.features.theme) {
            this.kupManager.theme.register(this);
        }
    }

    componentDidLoad() {
        if (this.features.debug) {
            this.kupManager.debug.logLoad(this, true);
        }
        this.endTime = performance.now();
    }

    componentWillRender() {
        if (this.features.debug) {
            this.kupManager.debug.logRender(this, false);
        }
    }

    componentDidRender() {
        if (this.features.debug) {
            this.kupManager.debug.logRender(this, true);
        }
    }

    render() {
        let customStyle: string = null;

        if (this.features.theme) {
            customStyle = this.kupManager.theme.setCustomStyle(
                this.rootElement as KupComponent
            );
        }

        return (
            <Host>
                {customStyle ? <style>{customStyle}</style> : null}
                <div id="kup-component">{this.content}</div>
            </Host>
        );
    }

    disconnectedCallback() {
        if (this.features.language) {
            this.kupManager.language.unregister(this);
        }
        if (this.features.theme) {
            this.kupManager.theme.unregister(this);
        }
    }
}
