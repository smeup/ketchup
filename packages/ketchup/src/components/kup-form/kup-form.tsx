import {
    Component,
    Element,
    forceUpdate,
    h,
    Host,
    Method,
    Prop,
    VNode,
    Watch,
} from '@stencil/core';
import {
    KupFormRow,
    KupFormLayout,
    KupFormSection,
    KupFormField,
    KupFormProps,
    KupFormData,
    KupFormLabelPlacement,
    KupFormLabelAlignment,
} from './kup-form-declarations';
import {
    KupManager,
    kupManagerInstance,
} from '../../managers/kup-manager/kup-manager';
import { getProps, identify, setProps } from '../../utils/utils';
import { GenericObject, KupComponent } from '../../types/GenericTypes';
import { KupLanguageGeneric } from '../../managers/kup-language/kup-language-declarations';
import { componentWrapperId } from '../../variables/GenericVariables';
import { FCell } from '../../f-components/f-cell/f-cell';
import {
    FCellProps,
    FCellTypes,
} from '../../f-components/f-cell/f-cell-declarations';
import { KupDataColumn } from '../../managers/kup-data/kup-data-declarations';
import { FTextFieldMDC } from '../../f-components/f-text-field/f-text-field-mdc';
import { KupDom } from '../../managers/kup-manager/kup-manager-declarations';
import { FButton } from '../../f-components/f-button/f-button';

const dom: KupDom = document.documentElement as KupDom;
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
     * Actual data of the form.
     * @default null
     */
    @Prop() data: KupFormData = null;
    /**
     * Creates a hidden submit button in order to submit the form with enter.
     * @default false
     */
    @Prop() hiddenSubmitButton: boolean = false;
    /**
     * How the form will arrange its content.
     * @default null
     */
    @Prop() layout: KupFormLayout = null;

    /*-------------------------------------------------*/
    /*       I n t e r n a l   V a r i a b l e s       */
    /*-------------------------------------------------*/

    private kupManager: KupManager = kupManagerInstance();
    private formLayout: KupFormLayout;
    private visibleColumns: KupDataColumn[] = [];

    /*-------------------------------------------------*/
    /*                  W a t c h e r s                */
    /*-------------------------------------------------*/

    @Watch('data')
    onDataChanged() {
        identify(this.getRows());
        this.initVisibleColumns();
        this.checkLayout();
    }

    @Watch('layout')
    onLayoutChanged() {
        this.checkLayout();
    }

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
     * Sets the focus on an editable table cell.
     * @param {string} column - Name of the column.
     * @param {string} rowId - Id of the row.
     */
    @Method()
    async setFocus(column: string, rowId: string): Promise<void> {
        const cells = this.rootElement.shadowRoot.querySelectorAll(
            'td[data-column="' + column + '"]'
        );
        for (let index = 0; cells && index < cells.length; index++) {
            const cell = cells[index];
            if (cell['data-row'] && cell['data-row'].id == rowId) {
                const input = cell.querySelector('input');
                if (input) {
                    input.focus();
                } else {
                    const kupInput = cell.querySelector('.hydrated');
                    if (kupInput) {
                        try {
                            (kupInput as any).setFocus();
                        } catch (error) {}
                    }
                }
            }
        }
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

    private getColumns(): Array<KupDataColumn> {
        return this.data && this.data.columns
            ? this.data.columns
            : [{ title: '', name: '', size: undefined }];
    }

    private initVisibleColumns(): void {
        this.visibleColumns = this.getColumns().filter((column) => {
            if (column.hasOwnProperty('visible')) {
                return column.visible;
            }

            return true;
        });
    }

    private getRows(): KupFormRow[] {
        return this.data && this.data.rows ? this.data.rows : [];
    }

    private checkLayout() {
        if (this.layout) {
            this.formLayout = this.layout;
            return;
        }

        const section: KupFormSection = {
            horizontal: false,
            sections: [],
        };

        const visibleColumns = this.visibleColumns;
        let size = visibleColumns.length;
        const content = [];

        let cnt = 0;

        while (size-- > 0) {
            content.push({
                column: visibleColumns[cnt++].name,
            });
        }

        section.content = content;

        this.formLayout = {
            sections: [section],
        };
    }

    private renderRow(row: KupFormRow) {
        const visibleColumns = [...this.visibleColumns];

        let formContent = null;

        let rowLayout = row.layout;
        if (!rowLayout) {
            rowLayout = this.formLayout;
        }

        let horizontal = false;
        if (rowLayout) {
            if (rowLayout.horizontal) {
                horizontal = true;
            }

            const sections = rowLayout.sections;
            let size = sections.length;

            let cnt = 0;
            if (size > 0) {
                formContent = [];
            }

            const parent: KupFormSection = {
                horizontal: horizontal,
            };

            while (size-- > 0) {
                formContent.push(
                    this.renderSection(
                        sections[cnt++],
                        parent,
                        row,
                        visibleColumns
                    )
                );
            }
        }

        const classObj = {
            form: true,
            'form--column': !horizontal,
        };

        return (
            <form class={classObj} name={this.rootElement.id}>
                {formContent}
                {this.hiddenSubmitButton ? (
                    <FButton
                        buttonType="submit"
                        label={this.kupManager.language.translate(
                            KupLanguageGeneric.CONFIRM
                        )}
                        wrapperClass="form__submit"
                    ></FButton>
                ) : null}
            </form>
        );
    }

    private renderSection(
        section: KupFormSection,
        parent: KupFormSection,
        row: KupFormRow,
        visibleColumns: KupDataColumn[]
    ) {
        let sectionContent = null;

        if (section.sections && section.sections.length > 0) {
            const sections = section.sections;
            let size = sections.length;

            let cnt = 0;
            if (size > 0) {
                sectionContent = [];
            }

            while (size-- > 0) {
                sectionContent.push(
                    this.renderSection(
                        sections[cnt++],
                        section,
                        row,
                        visibleColumns
                    )
                );
            }
        } else if (section.content) {
            const content = section.content;
            let size = content.length;

            let cnt = 0;
            if (size > 0) {
                sectionContent = [];
            }

            while (size-- > 0) {
                const formField = this.renderFormField(
                    {
                        formField: content[cnt++],
                        row,
                        visibleColumns,
                    },
                    section
                );
                let field = formField;
                if (!section.horizontal) {
                    field = <tr>{formField}</tr>;
                }
                sectionContent.push(field);
            }
        } else if (visibleColumns.length > 0) {
            const column = visibleColumns[0];
            sectionContent = this.renderFormField({
                formField: { column: column.name },
                row,
                visibleColumns,
            });
        }

        const isGrid = !!section.columns;
        const labelPlacement =
            section?.label?.placement || KupFormLabelPlacement.LEFT;

        const sectionClass: { [index: string]: boolean } = {
            form__section: true,
            'form__section--column': !isGrid && !section.horizontal,
            'form__section--grid': isGrid,
            'form__section--titled': !!section.title,
            'form__section--last':
                !section.sections || section.sections.length === 0,
            [`form__section--${labelPlacement}`]: true,
        };

        const sectionStyle: GenericObject = section.style || {};
        if (section.dim && parent) {
            sectionStyle.flex = `0 0 ${section.dim}`;

            if (parent.horizontal) {
                sectionStyle.maxWidth = section.dim;
            } else {
                sectionStyle.maxHeight = section.dim;
            }
        }

        if (isGrid) {
            sectionStyle[
                'grid-template-columns'
            ] = `repeat(${section.columns}, 1fr)`;
        }

        return (
            <div class={sectionClass} style={sectionStyle}>
                {section.title ? <h3>{section.title}</h3> : null}
                <table>
                    <tbody>
                        {section.horizontal ? (
                            <tr>{sectionContent}</tr>
                        ) : (
                            sectionContent
                        )}
                    </tbody>
                </table>
            </div>
        );
    }

    private renderFormField(
        {
            formField,
            row,
            visibleColumns,
        }: {
            formField: KupFormField;
            row: KupFormRow;
            visibleColumns: KupDataColumn[];
        },
        section?: KupFormSection
    ): VNode[] {
        const classObj: Record<string, boolean> = {
            form__field: true,
        };
        const styleObj = {};
        let column: KupDataColumn = null;
        let index = -1;
        for (let i = 0; i < visibleColumns.length; i++) {
            const c = visibleColumns[i];

            if (c.name === formField.column) {
                index = i;
                break;
            }
        }
        if (index >= 0) {
            column = visibleColumns[index];
            visibleColumns.splice(index, 1);
        } else if (section) {
            column = this.data.columns.find((x) => x.name === formField.column);
        }
        const cell = row.cells[formField.column];
        let title: string = undefined;
        if (cell) {
            cell.isEditable = true;
            if (!this.kupManager.objects.isEmptyKupObj(cell.obj)) {
                if (this.kupManager.debug.isDebug()) {
                    title =
                        cell.obj.t +
                        '; ' +
                        cell.obj.p +
                        '; ' +
                        cell.obj.k +
                        ';';
                }
            }
        } else {
            return null;
        }
        const cellProps: FCellProps = {
            cell: cell,
            column: column,
            component: this,
            editable: true,
            renderKup: true,
            row: row,
            setSizes: true,
            shape: formField.shape,
        };
        const label = formField.label || column.title;
        resetLabel();
        switch (section.label?.placement) {
            case KupFormLabelPlacement.BOTTOM:
                return [<tr>{fieldCell()}</tr>, <tr>{labelCell(label)}</tr>];
            case KupFormLabelPlacement.PLACEHOLDER:
                setPlaceholderLabel();
            case KupFormLabelPlacement.HIDDEN: {
                if (section) {
                    return [fieldCell()];
                } else {
                    return [<tr>{fieldCell()}</tr>];
                }
            }
            case KupFormLabelPlacement.RIGHT: {
                if (section) {
                    return [fieldCell(), labelCell(label)];
                } else {
                    return [
                        <tr>
                            {fieldCell()}
                            {labelCell(label)}
                        </tr>,
                    ];
                }
            }
            case KupFormLabelPlacement.TOP:
                return [<tr>{labelCell(label)}</tr>, <tr>{fieldCell()}</tr>];
            default: {
                if (section) {
                    return [labelCell(label), fieldCell()];
                } else {
                    return [
                        <tr>
                            {labelCell(label)}
                            {fieldCell()}
                        </tr>,
                    ];
                }
            }
        }

        function fieldCell(): VNode {
            return (
                <td
                    data-cell={cell}
                    data-row={row}
                    data-column={formField.column}
                    class={classObj}
                    style={styleObj}
                    title={title}
                >
                    {cell && column ? (
                        <FCell {...cellProps} />
                    ) : (
                        <span>{formField.value}</span>
                    )}
                </td>
            );
        }

        function labelCell(label: string): VNode {
            const alignment =
                section?.label?.alignment || KupFormLabelAlignment.LEFT;
            const style = {
                width: section?.label?.width ? section?.label?.width : '',
            };
            return (
                <td
                    class={`form__label form__label--${alignment}`}
                    style={style}
                >
                    <span>{label}</span>
                </td>
            );
        }

        function resetLabel() {
            if (!cell.data) {
                cell.data = {};
            }
            try {
                delete cell.data.label;
            } catch {}
            try {
                delete cell.data.data['kup-text-field'].label;
            } catch {}
        }

        function setPlaceholderLabel() {
            switch (
                dom.ketchup.data.cell.getType(
                    cell,
                    cell.shape || column.shape || null
                )
            ) {
                case FCellTypes.AUTOCOMPLETE:
                case FCellTypes.COLOR_PICKER:
                case FCellTypes.COMBOBOX:
                case FCellTypes.DATE:
                case FCellTypes.DATETIME:
                case FCellTypes.TIME:
                    if (cell.data.data) {
                        if (cell.data.data['kup-text-field']) {
                            cell.data.data['kup-text-field'].label =
                                column.title;
                        } else {
                            cell.data.data = {
                                'kup-text-field': {
                                    label: column.title,
                                },
                            };
                        }
                    } else {
                        cell.data.data = {
                            'kup-text-field': {
                                label: column.title,
                            },
                        };
                    }
                    break;
                case FCellTypes.CHECKBOX:
                case FCellTypes.NUMBER:
                case FCellTypes.STRING:
                case FCellTypes.SWITCH:
                    cell.data.label = column.title;
            }
        }
    }

    /*-------------------------------------------------*/
    /*          L i f e c y c l e   H o o k s          */
    /*-------------------------------------------------*/

    componentWillLoad() {
        this.kupManager.debug.logLoad(this, false);
        this.kupManager.language.register(this);
        this.kupManager.theme.register(this);
        this.onDataChanged();
    }

    componentDidLoad() {
        this.kupManager.debug.logLoad(this, true);
    }

    componentWillRender() {
        this.kupManager.debug.logRender(this, false);
    }

    componentDidRender() {
        const root: ShadowRoot = this.rootElement.shadowRoot;
        if (root) {
            const fs: NodeListOf<HTMLElement> =
                root.querySelectorAll('.f-text-field');
            for (let index = 0; index < fs.length; index++) {
                FTextFieldMDC(fs[index]);
            }
        }
        this.kupManager.debug.logRender(this, true);
    }

    render() {
        let formContent: VNode[] = null;

        if (this.data.rows.length === 0) {
            formContent = (
                <p>
                    {this.kupManager.language.translate(
                        KupLanguageGeneric.EMPTY_DATA
                    )}
                </p>
            );
        } else {
            const rows = this.data.rows;
            let size = rows.length;

            let cnt = 0;
            formContent = [];

            while (size-- > 0) {
                formContent.push(this.renderRow(rows[cnt++]));
            }
        }

        return (
            <Host>
                <style>
                    {this.kupManager.theme.setKupStyle(
                        this.rootElement as KupComponent
                    )}
                </style>
                <div id={componentWrapperId}>{formContent}</div>
            </Host>
        );
    }

    disconnectedCallback() {
        this.kupManager.language.unregister(this);
        this.kupManager.theme.unregister(this);
    }
}
