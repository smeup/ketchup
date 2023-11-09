import { Component, h, Element, Prop, Watch } from '@stencil/core';

@Component({
    tag: 'kup-vertical-scroll',
    styleUrl: 'kup-vertical-scroll.scss',
    shadow: false,
})
export class KupVerticalScroll {
    /*-------------------------------------------------*/
    /*                    P r o p s                    */
    /*-------------------------------------------------*/

    @Prop()
    scrollNumber: number;

    @Prop()
    ganttHeight: number;

    @Prop()
    ganttFullHeight: number;

    @Prop()
    headerHeight: number;

    @Prop()
    rtl: boolean;

    @Prop()
    verticalScroll: (event: UIEvent) => void;

    /**
    * References the root HTML element of the component (<kup-vertical-scroll>).
    */
    @Element() rootElement: HTMLElement;

    /*-------------------------------------------------*/
    /*       I n t e r n a l   V a r i a b l e s       */
    /*-------------------------------------------------*/

    private scrollRef: HTMLDivElement;

    //---- Lifecycle hooks ----
    componentDidLoad() {
        setTimeout(() => {
            this.updateScroll();
        }, 50);
    }

    /*-------------------------------------------------*/
    /*                   W A T C H E R S               */
    /*-------------------------------------------------*/

    @Watch('scrollNumber')
    updateScroll() {
        let id: any;
        if (this.scrollRef) {
            const wrap = this.scrollRef;
            const setScrollTop = () => {
                wrap.scrollTop = this.scrollNumber;
            };
            id = setTimeout(setScrollTop, 50);
        }
        return () => {
            clearTimeout(id);
        }
    }

    render() {
        return (
            <div
                style={{
                    height: `${this.ganttHeight}px`,
                    marginTop: `${this.headerHeight}px`,
                    marginLeft: this.rtl ? '' : '-1rem',
                }}
                class="scroll"
                onScroll={this.verticalScroll}
                ref={el => (this.scrollRef = el)}
            >
                <div style={{ height: `${this.ganttFullHeight}px`, width: '1px' }} />
            </div>
        );
    }
}
