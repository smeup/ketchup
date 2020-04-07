import {
    Component,
    Prop,
    Event,
    h,
    EventEmitter,
} from '@stencil/core';

import { Row, TableData } from '../kup-data-table/kup-data-table-declarations';

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
    iconColor: string = 'var(--kup-icon-color)';

    @Prop()
    columnsNumber: number = 1;

    @Prop()
    fillSpace: boolean = false;

    @Prop()
    horizontal: boolean = false;
    
    @Prop()
    data: TableData;

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

            let icon = "";
            let unit = "";
            let descr = "";
            let value = "";
            let valueInt = "";
            let valueDec = "";

            if (this.data.columns[0]){
                  let styleColor = {
                        color: this.iconColor,
                    };
                icon = 
                <div slot="icon">
                    <icon class={r.cells[this.data.columns[0].name].obj.k} style={styleColor}></icon>
                </div>
            } else {
                icon = <div slot="icon"></div>
            }
            
            if (this.data.columns[1]){
                unit = <div slot="unit">{r.cells[this.data.columns[1].name].obj.k}</div>
            } else {
                unit = <div slot="unit"></div>
            }

            if (this.data.columns[2]){
                descr = <div slot="descr">{r.cells[this.data.columns[2].name].obj.k}</div>
            } else {
                descr = <div slot="descr"></div>
            }

            if (this.data.columns[3]){
                value = <div slot="value">{r.cells[this.data.columns[3].name].obj.k}</div>
            } else {
                value = <div slot="value"></div>
            }

            if (this.data.columns[5]){
                valueInt = <div slot="value-int">{r.cells[this.data.columns[5].name].obj.k}</div>
            } else {
                valueInt = <div slot="value-int"></div>
            }
            if (this.data.columns[6]){
                valueDec = <div slot="value-dec">{r.cells[this.data.columns[6].name].obj.k}</div>
            } else {
                valueDec = <div slot="value-dec"></div>
            }
            const row = 
                <kup-dash layout= {this.layout} fontsize= {this.fontsize}>
                    {icon}
                    {unit}
                    {descr}
                    {value}
                    {valueInt}
                    {valueDec}
                </kup-dash>
            rows.push(row);
        });
        return (
            <div>
                <link
                    href="https://cdn.materialdesignicons.com/4.5.95/css/materialdesignicons.min.css"
                    rel="stylesheet"
                    type="text/css"
                />
                <kup-layout columnsNumber={this.columnsNumber} horizontal={this.horizontal} fillSpace={this.fillSpace}>
                    {rows}
                </kup-layout>
           </div>
        );
    }
}