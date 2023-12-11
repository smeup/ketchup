import { Component, h, Prop } from '@stencil/core';

@Component({
    tag: 'kup-custom-task-list-header',
    styleUrl: 'custom-task-list-header.module.scss',
})
export class KupCustomTaskListHeader {
    /*-------------------------------------------------*/
    /*                    P r o p s                    */
    /*-------------------------------------------------*/
    @Prop()
    label: string = '';

    @Prop()
    doubleView?: boolean = false;

    @Prop()
    setDoubleView?: (checked: boolean) => void;

    @Prop()
    fontFamily: string;

    @Prop()
    fontSize: string;

    render() {
        return (
            <div
                class="custom-task-list-wrapper"
                style={{
                    height: '50px',
                    fontFamily: this.fontFamily,
                    fontSize: this.fontSize,
                }}
            >
                <div class="title">
                    <span>{this.label}</span>
                </div>
                {this.setDoubleView !== undefined && (
                    <div class="toggler">
                        <label htmlFor="ch2" class="switch">
                            <input
                                class="input"
                                id="ch2"
                                type="checkbox"
                                checked={this.doubleView}
                                onClick={() =>
                                    this.setDoubleView(!this.doubleView)
                                }
                            />
                            <span class="slider"></span>
                        </label>
                        <span class="label">Previsioni</span>
                    </div>
                )}
            </div>
        );
    }
}
