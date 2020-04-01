import {
    Component,
    Prop,
    Event,
    h,
    EventEmitter,
} from '@stencil/core';

import { DashData } from './kup-dash-list-declarations';
import { Row } from '../kup-data-table/kup-data-table-declarations';

@Component({
    tag: 'kup-dash-list',
    styleUrl: 'kup-dash-list.scss',
    shadow: true,
})
export class KupDashList {
    @Prop()
    layout = '1';

    @Prop()
    fontsize = '';

    @Prop()
    active = false;

    @Prop()
    data: DashData;

    @Event({
        eventName: 'ketchupDashClicked',
        composed: true,
        cancelable: true,
        bubbles: true,
    })
    ketchupDashClicked: EventEmitter<{}>;

    render() { 
        let rows = [];
        this.data.rows.forEach((r: Row) => {
            console.log("kup-dash-list rows " + JSON.stringify(r.cells))
            const row = 
            <div>
                <kup-dash layout= {this.layout} fontsize= {this.fontsize}>
                    <div slot="descr">{r.cells.TEXT.obj.k}</div>
                    <div slot="icon">{r.cells.ICO.obj.k}</div>
                    <div slot="unit">{r.cells.UM.obj.k}</div>
                    <div slot="value">{r.cells.VALUE.obj.k}</div>
                </kup-dash>
            </div>
            rows.push(row);
        });
        return (
            <div>
                {rows}
            </div>
        );
    }
}
