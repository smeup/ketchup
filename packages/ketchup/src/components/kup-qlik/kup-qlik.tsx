import { Component, Prop, Element, h, State } from '@stencil/core';
import { QlikServer, KupQlikGrid } from './kup-qlik-declarations';
import {
    KupManager,
    kupManagerInstance,
} from '../../managers/kup-manager/kup-manager';

@Component({
    tag: 'kup-qlik',
    styleUrls: ['kup-qlik.scss'],
    shadow: false,
})
export class KupQlik {
    @Element() rootElement: HTMLElement;
    /**
     * Set Qlik Server's connection parameters MUST be delcared to open apps
     * {host:'<server host>', port:'<server port http default:80 https default:443 >', prefix:'<virtual proxy prefix dafault: blank>', isSecure:<true/false>}
     */
    @Prop() config: QlikServer;
    /**
     * Set Qlik Server istance would you like to use after connection
     */
    @Prop() qlik;
    /**
     * Set Qlik App's id would you like to use
     * How to find app id --> https://support.qlik.com/articles/000026239
     */
    @Prop({ reflect: true }) appid: string = '';

    /**
     * Set Qlik App's istance would you like to use
     * (!!!ALLERT!!! if you have already set appid app's istance will be NOT generated again)
     */
    @Prop({ reflect: true }) app: any = false;
    /**
   * Set the grid structure (JSON)
   * selections --> Data selection array
   *    field   --> Qlik field on which to make the selection
   *    values  --> Array of int or string value which to select
   * rows
   *    colums --> they define the structure of grid
   *      obj     --> Qlik Object id would you like to render (How to find Qlik obj id --> https://help.qlik.com/en-US/sense-developer/June2020/Subsystems/Mashups/Content/Sense_Mashups/Howtos/mashups-obtain-app-object-id.htm)
   *      colDim  --> define column's dimension, it could have values from 1 to 12 where 12 is 100%
   *      size    --> define size height of obj's div container, it colud have this values XS|S|M|L|XL  
   *      noSelections --> define if selections in object are disable (default: false)
   * Example:
  {
  selections:[
      {
          field: 'Anno',
          values:[2020]
      }
  ],
  rows:[
      {
        columns:[
            {
                obj:'KvqdmD', colDim:5, size:'L', noSelections:<true/flase>
            },
            {
                obj:'JjSaVm', colDim:5, size:'S', noSelections:<true/flase>
            }
        ]
      }
    ]
  }
  
   */
    @Prop({ reflect: true }) grid: Array<KupQlikGrid> = [];

    /**
     * Activate logging
     * Default false
     */
    @Prop() debug: boolean = false;

    /* Style prop */

    /**
     * Define width of grid, with true width = 100% responsive, false 1200px
     */
    @Prop() fluid: boolean = false;
    /**
     * Set gird border
     */
    @Prop() bordered: boolean = false;

    /**
     * Set default obj's container pixel height
     */
    @Prop() defobjsize: string = '400px';

    /**
     * Instance of the KupManager class.
     */
    private kupManager: KupManager = kupManagerInstance();

    @State() divlist: Array<object> = [];

    /**
     * Get objects from qlik and assign id to html div
     * @param grid
     */
    getObjects(grid) {
        let noSelections;
        return new Promise((resolve) => {
            grid.rows.forEach((row) => {
                row.columns.forEach((column) => {
                    noSelections = false;
                    if (column.noSelections) noSelections = column.noSelections;
                    this.app.getObject(column.obj, column.obj, {
                        noInteraction: false,
                        noSelections: noSelections,
                    });
                });
            });
            resolve(true);
        });
    }

    /**
     * Do field selection in Qlik app
     * @param grid
     */
    doSelection(grid) {
        return new Promise((resolve) => {
            if (grid.selections) {
                grid.selections.forEach((selection) => {
                    this.app
                        .field(selection.field)
                        .selectValues(selection.values, false, true);
                });
            }
            resolve(true);
        });
    }

    /**
     * Set dimamic variable "divlist" with grid structure before render
     * @param grid
     */
    setRender(grid) {
        return new Promise((resolve) => {
            this.divlist = [];
            grid.rows.forEach((row) => {
                let tmp: Array<object> = [];
                row.columns.forEach((column) => {
                    let style = 'qvobject ';
                    if (this.bordered) {
                        style = style + 'bordered ';
                    }

                    style =
                        style +
                        'width-' +
                        column.colDim +
                        ' size-' +
                        column.size;
                    if (column.obj != '')
                        tmp.push(<div id={column.obj} class={style}></div>);
                    else tmp.push(<div class={style}></div>);
                });
                this.divlist.push(<div class="kup-qlik-row">{tmp}</div>);
            });

            resolve(true);
        });
    }

    componentWillLoad() {
        this.kupManager.debug.logLoad(this, false);
    }

    componentDidLoad() {
        this.kupManager.debug.logLoad(this, true);
    }

    componentWillRender() {
        this.kupManager.debug.logRender(this, false);
        this.setRender(this.grid);
    }

    render() {
        let classLayout = null;
        let layoutStyle = null;

        if (this.fluid) {
            classLayout = {
                ['kup-qlik-container-fluid']: true,
            };
        } else {
            classLayout = {
                ['kup-qlik-container']: true,
            };
        }

        layoutStyle = {
            ['--lyo_obj-height']: this.defobjsize,
        };

        return (
            <div class={classLayout} style={layoutStyle}>
                {this.divlist}
            </div>
        );
    }

    componentDidRender() {
        if (this.debug) {
            console.log('Grid', this.grid);
        }
        if (this.qlik) {
            if (this.appid != '' && !this.app) {
                this.app = this.qlik.openApp(this.appid, this.config);
            } else {
                if (this.debug) {
                    console.log('App already open:', this.app);
                }
            }
            if (this.app) {
                this.getObjects(this.grid).then(() => {
                    this.doSelection(this.grid);
                });
            }
        }
        this.kupManager.debug.logRender(this, true);
    }
}
