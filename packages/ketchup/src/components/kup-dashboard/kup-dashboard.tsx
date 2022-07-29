import type { DropEvent } from '@interactjs/types/index';
import {
    Component,
    Element,
    EventEmitter,
    forceUpdate,
    h,
    Host,
    Method,
    Prop,
    State,
    Event,
    Watch,
} from '@stencil/core';
import { FButton } from '../../f-components/f-button/f-button';
import { FButtonProps } from '../../f-components/f-button/f-button-declarations';
import { FCheckbox } from '../../f-components/f-checkbox/f-checkbox';
import { FCheckboxProps } from '../../f-components/f-checkbox/f-checkbox-declarations';
import { FTextField } from '../../f-components/f-text-field/f-text-field';
import { FTextFieldProps } from '../../f-components/f-text-field/f-text-field-declarations';
import { FTextFieldMDC } from '../../f-components/f-text-field/f-text-field-mdc';
import { KupDebugCategory } from '../../managers/kup-debug/kup-debug-declarations';
import { KupDragEffect } from '../../managers/kup-interact/kup-interact-declarations';
import {
    KupLanguageDashboard,
    KupLanguageGeneric,
} from '../../managers/kup-language/kup-language-declarations';
import {
    KupManager,
    kupManagerInstance,
} from '../../managers/kup-manager/kup-manager';
import { GenericObject, KupComponent } from '../../types/GenericTypes';
import { getProps, setProps } from '../../utils/utils';
import { componentWrapperId } from '../../variables/GenericVariables';
import {
    KupForm,
    KupDashboardElement,
    KupDashboardEventPayload,
    KupDashboardProps,
    KupSection,
    KupDataDashboard,
} from './kup-dashboard-declarations';

@Component({
    tag: 'kup-dashboard',
    styleUrl: 'kup-dashboard.scss',
    shadow: true,
})
export class KupDashboard {
    /**
     * References the root HTML element of the component (<kup-text-field>).
     */
    @Element() rootElement: HTMLElement;

    /*-------------------------------------------------*/
    /*                   S t a t e s                   */
    /*-------------------------------------------------*/

    /**
     * Force render component by internal event.
     */
    @State() resetInternalData: boolean = false;

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
     * The data of the component.
     * @default null
     */
    @Prop() data: KupDataDashboard = null;
    /**
     * Enable drag & drop of the section.
     * @default false
     */
    @Prop() enableDesign: boolean = false;

    /*-------------------------------------------------*/
    /*       I n t e r n a l   V a r i a b l e s       */
    /*-------------------------------------------------*/

    /**
     * Instance of the KupManager class.
     */
    private kupManager: KupManager = kupManagerInstance();

    /**
     * Internal data of the component.
     */
    private internalData: KupDataDashboard = null;

    /**
     * Internal data backup of the component for refresh when changed content by drag&drop.
     */
    private internalDataBackup: KupDataDashboard = null;

    /*-------------------------------------------------*/
    /*                   E v e n t s                   */
    /*-------------------------------------------------*/

    @Event({
        eventName: 'kup-dashboard-save',
        composed: true,
        cancelable: false,
        bubbles: true,
    })
    kupSave: EventEmitter<KupDashboardEventPayload>;

    onKupSave() {
        this.kupSave.emit({
            comp: this,
            id: this.rootElement.id,
            data: this.internalData,
        });
    }

    /*-------------------------------------------------*/
    /*                  W a t c h e r s                */
    /*-------------------------------------------------*/

    @Watch('data')
    dataChanged() {
        this.resetData();
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
        return getProps(this, KupDashboardProps, descriptions);
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
        setProps(this, KupDashboardProps, props);
    }

    /*-------------------------------------------------*/
    /*           P r i v a t e   M e t h o d s         */
    /*-------------------------------------------------*/

    buildGuid() {
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(
            /[xy]/g,
            function (c) {
                var r = (Math.random() * 16) | 0,
                    v = c === 'x' ? r : (r & 0x3) | 0x8;
                return v.toString(16);
            }
        );
    }

    buildHeader() {
        const clearButtonProp: FButtonProps = {
            icon: 'cancel',
            label: this.kupManager.language.translate(
                KupLanguageDashboard.RESET
            ),
            secondary: true,
            onClick: () => {
                this.resetData();
            },
        };
        const saveButtonProp: FButtonProps = {
            icon: 'save',
            label: this.kupManager.language.translate(
                KupLanguageDashboard.SAVE
            ),
            onClick: () => this.onKupSave(),
        };

        return (
            <div class="header">
                {this.enableDesign ? (
                    <FButton {...clearButtonProp} />
                ) : undefined}
                {this.enableDesign ? (
                    <FButton {...saveButtonProp} />
                ) : undefined}
            </div>
        );
    }

    buildForm(form: KupForm, parent: KupForm | KupSection) {
        const classes = {
            form: true,
            'layout-column': form && form.layout == 'column',
            'layout-row': form && form.layout == 'row',
            'form-dropzone':
                this.enableDesign &&
                form &&
                form.sections != null &&
                form.sections.length > 0,
        };

        return form ? (
            <div
                class={classes}
                style={this.getGridStyle(form)}
                ref={(el) => {
                    if (!el) return;
                    const kel = el as KupDashboardElement;
                    kel.kupData = { parent: parent, form: form };
                }}
            >
                {form.sections.map((section) =>
                    this.buildSection(section, form)
                )}
            </div>
        ) : (
            <div>
                {this.kupManager.language.translate(
                    KupLanguageGeneric.EMPTY_DATA
                )}
            </div>
        );
    }

    buildSectionHeader(section: KupSection, parent: KupForm | KupSection) {
        const dimTextFieldProp: FTextFieldProps = {
            value: section.dim,
            label: this.kupManager.language.translate(
                KupLanguageDashboard.DIMENSION
            ),
            onChange: (e: UIEvent & { target: HTMLInputElement }) => {
                const { target } = e;
                section.dim = target.value;
                this.refresh();
            },
        };
        const addButtonProp: FButtonProps = {
            icon: 'add',
            slim: true,
            onClick: () => {
                if (!section.sections) {
                    section.sections = [];
                }
                const newSec: KupSection = {
                    id: section.id + (section.sections.length + 1),
                    loaded: section.loaded,
                    layout: section.layout,
                };
                section.sections.push(newSec);
                this.resetData(this.internalData);
            },
        };
        const removeButtonProp: FButtonProps = {
            icon: 'remove',
            slim: true,
            secondary: true,
            onClick: () => {
                const idx = parent.sections.indexOf(section);
                parent.sections.splice(idx, 1);
                this.resetData(this.internalData);
            },
        };
        const loadedCheckBoxProp: FCheckboxProps = {
            checked: section.loaded,
            label: this.kupManager.language.translate(
                KupLanguageDashboard.LOADED
            ),
            onChange: () => {
                section.loaded = !section.loaded;
                this.refresh();
            },
        };
        const columnCheckBoxProp: FCheckboxProps = {
            checked: section.layout == 'column',
            label: this.kupManager.language.translate(
                KupLanguageDashboard.VERTICAL
            ),
            onChange: () => {
                section.layout = section.layout == 'column' ? 'row' : 'column';
                this.refresh();
            },
        };
        return (
            <div class="section-header">
                <div>
                    {section.id} - {section.layout}
                </div>
                <div>
                    <div class="section-header-actions">
                        <FTextField {...dimTextFieldProp} />
                        <FCheckbox {...loadedCheckBoxProp} />
                        <FCheckbox {...columnCheckBoxProp} />
                        <FButton {...addButtonProp} />
                        <FButton {...removeButtonProp} />
                    </div>
                </div>
            </div>
        );
    }

    buildSection(section: KupSection, parent: KupForm | KupSection) {
        const classes = {
            section: true,
            'section-draggable': this.enableDesign,
            'section-dropzone': this.enableDesign,
        };

        const bodyClasses = {
            'section-body': true,
            'layout-column': section && section.layout == 'column',
            'layout-row': section && section.layout == 'row',
        };

        return (
            <div
                class={classes}
                ref={(el) => {
                    if (!el) return;
                    const kel = el as KupDashboardElement;
                    kel.kupData = { parent: parent, section: section };
                }}
            >
                {this.enableDesign
                    ? this.buildSectionHeader(section, parent)
                    : undefined}
                <div class={bodyClasses} style={this.getGridStyle(section)}>
                    {!this.enableDesign &&
                    section.loaded &&
                    (!section.sections || section.sections.length == 0) ? (
                        <slot name={section.id}></slot>
                    ) : undefined}
                    {section.sections && (section.loaded || this.enableDesign)
                        ? section.sections.map((childSection) =>
                              this.buildSection(childSection, section)
                          )
                        : undefined}
                </div>
            </div>
        );
    }

    calcSectionPosition(
        pointerY: number,
        pointerX: number,
        vertical: boolean,
        sectionCount: number,
        elements: HTMLCollection
    ) {
        let idx = sectionCount;
        for (let index = 0; index < elements.length; index++) {
            const element = elements[index];
            const srect = element.getBoundingClientRect();
            if (vertical && pointerY < srect.y) {
                idx = index;
                break;
            } else if (!vertical && pointerX < srect.x) {
                idx = index;
                break;
            }
        }
        //console.log(
        //    `pointer: ${pointerX}:${pointerY} - vertical: ${vertical} - index: ${idx}`
        //);
        return idx;
    }

    didRenderInteractables() {
        try {
            const items: Element[] = [];
            this.rootElement.shadowRoot
                .querySelectorAll('.section-draggable')
                .forEach((x) => items.push(x));
            items.forEach((item) => {
                this.kupManager.interact.draggable(
                    item as HTMLElement,
                    null,
                    null,
                    KupDragEffect.CLONE
                );
            });
        } catch (error) {
            this.kupManager.debug.logMessage(
                this,
                error,
                KupDebugCategory.ERROR
            );
        }
        try {
            const items: Element[] = [];
            this.rootElement.shadowRoot
                .querySelectorAll('.section-dropzone')
                .forEach((x) => items.push(x));
            this.rootElement.shadowRoot
                .querySelectorAll('.form-dropzone')
                .forEach((x) => items.push(x));
            items.forEach((item) => {
                this.kupManager.interact.dropzone(
                    item as HTMLElement,
                    {
                        ondropdeactivate: () => {
                            this.removeSectionPlaceHolder();
                        },
                        ondropmove: (ev) => {
                            this.removeSectionPlaceHolder();
                            this.dragEnter(
                                ev.dragEvent.clientY,
                                ev.dragEvent.clientX,
                                ev.currentTarget as KupDashboardElement
                            );
                        },
                    },
                    null,
                    {
                        drop: (ev) => {
                            this.dropped(
                                ev,
                                ev.currentTarget as KupDashboardElement,
                                ev.relatedTarget as KupDashboardElement
                            );
                        },
                    }
                );
            });
        } catch (error) {
            this.kupManager.debug.logMessage(
                this,
                error,
                KupDebugCategory.ERROR
            );
        }
    }

    dragEnter(clientY: number, clientX: number, parent: KupDashboardElement) {
        if (parent.kupData.form) {
            // form is the target of drop.

            // calculate a new position for the section.
            const nidx = this.calcSectionPosition(
                clientY,
                clientX,
                parent.kupData.form.layout == 'column',
                parent.kupData.form.sections.length,
                parent.children
            );

            // set placeholder into target area.
            this.setSectionPlaceHolder(parent, nidx);
        } else if (parent.kupData.section) {
            // section is the target of drop.

            // calculate a new position for the section.
            const nidx = this.calcSectionPosition(
                clientY,
                clientX,
                parent.kupData.section.layout == 'column',
                parent.kupData.section.sections.length,
                parent.lastElementChild.children
            );

            // set placeholder into target area.
            this.setSectionPlaceHolder(
                parent.lastElementChild as HTMLElement,
                nidx
            );
        }
    }

    dropped(
        event: DropEvent,
        parent: KupDashboardElement,
        child: KupDashboardElement
    ) {
        const idx = child.kupData.parent.sections.indexOf(
            child.kupData.section
        );
        child.kupData.parent.sections.splice(idx, 1);
        if (parent.kupData.form) {
            // form is the target of drop.
            if (!parent.kupData.form.sections)
                parent.kupData.form.sections = [];

            // calculate a new position for the section.
            const nidx = this.calcSectionPosition(
                event.dragEvent.clientY,
                event.dragEvent.clientX,
                parent.kupData.form.layout == 'column',
                parent.kupData.form.sections.length,
                parent.children
            );
            // set the section in 'nidx' position.
            parent.kupData.form.sections.splice(nidx, 0, child.kupData.section);
            child.kupData.parent = parent.kupData.form;
        } else if (parent.kupData.section) {
            // section is the target of drop.
            if (
                !parent.kupData.section.sections ||
                parent.kupData.section.sections.length == 0
            ) {
                // if the section target of drop doesn't contains other sections, i create a wrapper that will contain target section and dragged section.
                const newSec: KupSection = JSON.parse(
                    JSON.stringify(parent.kupData.section)
                );
                newSec.dim = null;
                child.kupData.section.dim = null;
                parent.kupData.section.id = this.buildGuid();
                parent.kupData.section.sections = [];
                parent.kupData.section.sections.push(newSec);
            }
            // calculate a new position for the section.
            const nidx = this.calcSectionPosition(
                event.dragEvent.clientY,
                event.dragEvent.clientX,
                parent.kupData.section.layout == 'column',
                parent.kupData.section.sections.length,
                parent.lastElementChild.children
            );
            // set the section in 'nidx' position.
            parent.kupData.section.sections.splice(
                nidx,
                0,
                child.kupData.section
            );
            child.kupData.parent = parent.kupData.section;
        }
        this.resetData(this.internalData);
    }

    getGridStyle(entity: KupForm | KupSection) {
        let bodyStyles = {};
        if (entity.sections) {
            let gridTemplate = '';
            entity.sections.forEach((childSection) => {
                if (this.enableDesign || !childSection.dim)
                    gridTemplate += ' 1fr';
                else
                    gridTemplate +=
                        childSection.dim.indexOf('%') < 0
                            ? ' ' + childSection.dim + 'px'
                            : ' ' + childSection.dim;
            });
            if (entity.layout == 'column')
                bodyStyles['gridTemplateRows'] = gridTemplate;
            if (entity.layout == 'row')
                bodyStyles['gridTemplateColumns'] = gridTemplate;
        }
        return bodyStyles;
    }

    setSectionPlaceHolder(element: HTMLElement, index: number) {
        const ph = document.createElement('div');
        ph.className = 'section-placeholder';
        element.insertBefore(ph, element.childNodes[index]);
    }

    removeSectionPlaceHolder() {
        const ph = this.rootElement.shadowRoot.querySelector(
            '.section-placeholder'
        );
        if (ph) ph.parentElement.removeChild(ph);
    }

    resetData(form: KupForm = null) {
        if (form) this.internalDataBackup = form;
        this.resetInternalData = true;
        setTimeout(() => {
            if (this.internalDataBackup) {
                this.internalData = this.internalDataBackup;
                this.internalDataBackup = null;
            }
            this.resetInternalData = false;
        }, 250);
    }

    unregisterInteractables() {
        this.kupManager.interact.unregister(
            Array.from(
                this.rootElement.shadowRoot.querySelectorAll(
                    '.section-dropzone'
                )
            )
        );
        this.kupManager.interact.unregister(
            Array.from(
                this.rootElement.shadowRoot.querySelectorAll(
                    '.section-draggable'
                )
            )
        );
        this.kupManager.interact.unregister(
            Array.from(
                this.rootElement.shadowRoot.querySelectorAll('.form-dropzone')
            )
        );
    }

    /*-------------------------------------------------*/
    /*          L i f e c y c l e   H o o k s          */
    /*-------------------------------------------------*/

    componentWillLoad() {
        this.kupManager.dates.register(this);
        this.kupManager.debug.logLoad(this, false);
        this.kupManager.language.register(this);
        this.kupManager.theme.register(this);
    }

    componentDidLoad() {
        this.kupManager.debug.logLoad(this, true);
    }

    componentWillRender() {
        this.kupManager.debug.logRender(this, false);
        if (this.resetInternalData) {
            this.internalData = null;
            this.unregisterInteractables();
        } else if (!this.internalData)
            this.internalData = JSON.parse(JSON.stringify(this.data));
    }

    componentDidRender() {
        this.kupManager.debug.logRender(this, true);
        const root: ShadowRoot = this.rootElement.shadowRoot;
        if (root) {
            const fields = root.querySelectorAll('.f-text-field');
            if (fields)
                fields.forEach((f) => {
                    FTextFieldMDC(f as HTMLElement);
                });
        }
        this.didRenderInteractables();
    }

    render() {
        return (
            <Host>
                <style>
                    {this.kupManager.theme.setKupStyle(
                        this.rootElement as KupComponent
                    )}
                </style>
                <div id={componentWrapperId}>
                    {this.buildHeader()}
                    {this.buildForm(this.internalData, null)}
                </div>
            </Host>
        );
    }

    disconnectedCallback() {
        this.unregisterInteractables();
        this.kupManager.dates.unregister(this);
        this.kupManager.language.unregister(this);
        this.kupManager.theme.unregister(this);
    }
}
