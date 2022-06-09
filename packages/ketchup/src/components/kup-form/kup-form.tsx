import {
    Component,
    Element,
    forceUpdate,
    h,
    Host,
    Method,
    Prop,
    VNode,
} from '@stencil/core';
import {
    KupManager,
    kupManagerInstance,
} from '../../managers/kup-manager/kup-manager';
import {
    GenericMap,
    GenericObject,
    KupComponent,
} from '../../types/GenericTypes';
import {
    KupFormColumn,
    KupFormData,
    KupFormProps,
    KupFormSection,
} from './kup-form-declarations';
import { getProps, setProps } from '../../utils/utils';
import { componentWrapperId } from '../../variables/GenericVariables';
import { KupLanguageGeneric } from '../../managers/kup-language/kup-language-declarations';
import { FCell } from '../../f-components/f-cell/f-cell';
import {
    FCellPadding,
    FCellProps,
} from '../../f-components/f-cell/f-cell-declarations';

@Component({
    tag: 'kup-form',
    styleUrl: 'kup-form.scss',
    shadow: true,
})
export class KupForm {
    /**
     * References the root HTML element of the component (<kup-form>).
     */
    @Element() rootElement: HTMLElement;

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
     * Actual data of the component.
     * @default null
     */
    @Prop() data: KupFormData = null;
    /**
     * How the input panel will be displayed.
     * @default null
     */
    @Prop() layout: KupFormSection = null;

    /*-------------------------------------------------*/
    /*       I n t e r n a l   V a r i a b l e s       */
    /*-------------------------------------------------*/

    #kupManager: KupManager = kupManagerInstance();
    #missingColumns: KupFormColumn[] = null;

    /*-------------------------------------------------*/
    /*           P u b l i c   M e t h o d s           */
    /*-------------------------------------------------*/

    /**
     * Used to retrieve component's props values.
     * @param {boolean} descriptions - When provided and true, the result will be the list of props with their description.
     * @returns {Promise<GenericObject>} List of props as object, each key will be a prop.
     */
    @Method()
    async getProps(descriptions?: boolean): Promise<GenericObject> {
        return getProps(this, KupFormProps, descriptions);
    }
    /**
     * This method is used to trigger a new render of the component.
     */
    @Method()
    async refresh(): Promise<void> {
        forceUpdate(this);
    }
    /**
     * Sets the props to the component.
     * @param {GenericObject} props - Object containing props that will be set to the component.
     */
    @Method()
    async setProps(props: GenericObject): Promise<void> {
        setProps(this, KupFormProps, props);
    }

    /*-------------------------------------------------*/
    /*           P r i v a t e   M e t h o d s         */
    /*-------------------------------------------------*/

    #createForm() {
        this.#missingColumns = JSON.parse(JSON.stringify(this.data.columns));
        const layout = this.data.rows[0].layout || this.layout || {};
        const classObj = {
            form: true,
            'form--column': layout.horizontal ? false : true,
            'form--row': layout.horizontal ? true : false,
        };
        const styleObj = layout.style || {};
        if (layout.dim) {
            styleObj['--kup_form_section_size'] = layout.dim;
        }

        return (
            <div class={classObj} style={styleObj}>
                {layout.sections.map((section) =>
                    this.#createSection(section, layout.horizontal)
                )}
            </div>
        );
    }

    #createSection(section: KupFormSection, horizontal?: boolean) {
        const classObj = {
            form__section: true,
            'form__section--column': horizontal ? false : true,
            'form__section--row': horizontal ? true : false,
        };
        const styleObj = section.style || {};
        if (section.dim) {
            styleObj['--kup_form_section_size'] = section.dim;
        }
        const contentNodes: VNode[] = [];
        if (section.content) {
            for (let index = 0; index < section.content.length; index++) {
                const content = section.content[index];
                if (content.column) {
                    const cell = this.data.rows[0].cells[content.column];
                    const column = this.#kupManager.data.column.find(
                        this.data,
                        {
                            name: content.column,
                        }
                    )[0];
                    if (cell && column) {
                        const props: FCellProps = {
                            cell: cell,
                            column: column,
                            component: this,
                            density: FCellPadding.NONE,
                            editable: true,
                            renderKup: true,
                            row: this.data.rows[0],
                        };
                        contentNodes.push(<FCell {...props}></FCell>);
                    }
                }
            }
        } else {
            const firstMissingCol = this.#missingColumns.shift();
            if (firstMissingCol) {
                const cell = this.data.rows[0].cells[firstMissingCol.name];
                const column = this.#kupManager.data.column.find(this.data, {
                    name: firstMissingCol.name,
                })[0];
                if (cell && column) {
                    const props: FCellProps = {
                        cell: cell,
                        column: column,
                        component: this,
                        density: FCellPadding.NONE,
                        editable: true,
                        renderKup: true,
                        row: this.data.rows[0],
                    };
                    contentNodes.push(<FCell {...props}></FCell>);
                }
            }
        }

        return (
            <div class={classObj} style={styleObj}>
                {!section.sections || section.sections.length == 0
                    ? contentNodes
                    : section.sections.map((childSection) =>
                          this.#createSection(
                              childSection,
                              childSection.horizontal
                          )
                      )}
            </div>
        );
    }

    /*-------------------------------------------------*/
    /*          L i f e c y c l e   H o o k s          */
    /*-------------------------------------------------*/

    componentWillLoad() {
        this.#kupManager.debug.logLoad(this, false);
        this.#kupManager.language.register(this);
        this.#kupManager.theme.register(this);
    }

    componentDidLoad() {
        this.#kupManager.debug.logLoad(this, true);
    }

    componentWillRender() {
        this.#kupManager.debug.logRender(this, false);
    }

    componentDidRender() {
        this.#kupManager.debug.logRender(this, true);
    }

    render() {
        return (
            <Host>
                <style>
                    {this.#kupManager.theme.setKupStyle(
                        this.rootElement as KupComponent
                    )}
                </style>
                <div id={componentWrapperId}>
                    {this.data ? (
                        this.#createForm()
                    ) : (
                        <div>
                            {this.#kupManager.language.translate(
                                KupLanguageGeneric.EMPTY_DATA
                            )}
                        </div>
                    )}
                </div>
            </Host>
        );
    }

    disconnectedCallback() {
        this.#kupManager.language.unregister(this);
        this.#kupManager.theme.unregister(this);
    }
}
