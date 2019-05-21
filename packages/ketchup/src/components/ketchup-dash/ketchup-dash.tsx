import { Component, Prop } from '@stencil/core';

@Component({
    tag: 'kup-dash',
    styleUrl: 'ketchup-dash.scss',
    shadow: true,
})
export class KetchupDash {
    @Prop()
    layout = '1';

    render() {
        let content = null;

        switch (this.layout) {
            case '2':
                content = (
                    <div>
                        <div class="icon">
                            <slot name="icon" />
                        </div>
                        <div class="value-int">
                            <slot name="value-int" />
                        </div>
                        <div class="value-dec">
                            <slot name="value-dec" />
                        </div>
                        <div class="unit">
                            <slot name="unit" />
                        </div>
                    </div>
                );
                break;

            case '3':
                content = (
                    <div>
                        <div class="value">
                            <slot name="value" />
                        </div>
                        <div class="descr">
                            <slot name="descr" />
                        </div>
                    </div>
                );
                break;

            case '4':
                content = (
                    <div>
                        <div class="icon">
                            <slot name="icon" />
                        </div>

                        <div class="value-and-unit">
                            <div class="value">
                                <slot name="value" />
                            </div>
                            <div class="unit">
                                <slot name="unit" />
                            </div>
                        </div>

                        <div />

                        <div class="descr">
                            <slot name="descr" />
                        </div>
                    </div>
                );
                break;

            case '5':
                content = (
                    <div>
                        <div>
                            <div class="descr">
                                <slot name="descr" />
                            </div>

                            <div class="value">
                                <slot name="value" />
                            </div>
                        </div>

                        <div class="icon">
                            <slot name="icon" />
                        </div>
                    </div>
                );
                break;

            case '6':
                content = (
                    <div>
                        <div class="icon">
                            <slot name="icon" />
                        </div>

                        <div>
                            <div class="value">
                                <slot name="value" />
                            </div>
                            <div class="descr">
                                <slot name="descr" />
                            </div>
                        </div>
                    </div>
                );
                break;

            case '7':
                content = (
                    <div>
                        <div>
                            <div class="value">
                                <slot name="value" />
                            </div>

                            <div class="descr">
                                <slot name="descr" />
                            </div>
                        </div>

                        <div class="icon">
                            <slot name="icon" />
                        </div>
                    </div>
                );
                break;

            case '8':
                content = (
                    <div>
                        <div class="icon">
                            <slot name="icon" />
                        </div>

                        <div class="value">
                            <slot name="value" />
                        </div>

                        <div class="descr">
                            <slot name="descr" />
                        </div>
                    </div>
                );
                break;

            default:
                // layout 1
                content = (
                    <div>
                        <div class="descr">
                            <slot name="descr" />
                        </div>
                        <div class="value">
                            <slot name="value" />
                        </div>
                    </div>
                );
                break;
        }

        return (
            <div id="dash">
                <div id="content" class={`layout-${this.layout}`}>
                    {content}
                </div>
            </div>
        );
    }
}
