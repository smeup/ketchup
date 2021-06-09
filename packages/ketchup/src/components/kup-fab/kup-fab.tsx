import { whenTransitionDone } from '@fullcalendar/core/util/dom-event';
import { Component, h, Event, EventEmitter, Prop, Host } from '@stencil/core';
import { FImage } from '../../f-components/f-image/f-image';

@Component({
    tag: 'kup-fab',
    styleUrl: 'kup-fab.scss',
    shadow: true,
})
export class KupFab {
    // PROPS

    /*
        Set the color of button. Default #FFC107
    */
    @Prop() colorButton: string = '#FFC107';

    // EVENT

    /*
     *   Triggered when the fab is clicked.
     */
    @Event({
        eventName: 'kupFabClick',
        composed: true,
        cancelable: false,
        bubbles: true,
    })
    kupFabClick: EventEmitter<{ id: string }>;

    onKupFabClick(index: string) {
        this.kupFabClick.emit({
            id: index,
        });
    }

    render() {
        const propsFImage = {
            color: 'var(--kup-text-on-primary-color)',
            resource: 'bug',
            sizeX: '40px',
            sizeY: '40px',
            wrapperClass: 'mdc-button__icon icon-container material-icons',
        };

        return (
            <Host>
                <div class="container">
                    <div class="mdc-touch-target-wrapper">
                        <button
                            class="mdc-fab"
                            style={{
                                ['--mdc-theme-secondary']: this.colorButton,
                            }}
                            onClick={() =>
                                this.onKupFabClick('test fab button')
                            }
                        >
                            <div class="mdc-fab__ripple"></div>
                            <FImage {...propsFImage} />
                            <div class="mdc-fab__touch"></div>
                        </button>
                    </div>
                </div>
            </Host>
        );
    }
}
