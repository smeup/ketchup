import {
    Component,
    Element,
    Event,
    EventEmitter,
    forceUpdate,
    h,
    Host,
    Method,
    Prop,
    State,
} from '@stencil/core';
import {
    KupManager,
    kupManagerInstance,
} from '../../managers/kup-manager/kup-manager';
import {
    KupMultiSelectEventPayload,
    KupMultiSelectProps,
} from './kup-multi-select-declarations';
import { FSwitch } from '../../f-components/f-switch/f-switch';
import {
    FSwitchProps,
    FSwitchSizing,
} from '../../f-components/f-switch/f-switch-declarations';
import { GenericObject, KupComponent } from '../../types/GenericTypes';
import { getProps, setProps } from '../../utils/utils';
import { componentWrapperId } from '../../variables/GenericVariables';
import { FChipType } from '../../f-components/f-chip/f-chip-declarations';
import {
    KupLanguageGeneric,
    KupLanguageColumn,
} from '../../managers/kup-language/kup-language-declarations';
import {
    KupCardCSSClasses,
    KupCardIds,
} from '../kup-card/kup-card-declarations';
import { KupColumnMenuIds } from '../../utils/kup-column-menu/kup-column-menu-declarations';

@Component({
    tag: 'kup-multi-select',
    styleUrl: 'kup-multi-select.scss',
    shadow: true,
})
export class KupMultiSelect {
    @Element() rootElement: HTMLElement;

    @State() value: string = '';
    @State() visibleView: number = 2;
    @State() viewIndex: number = 2;

    @Prop({ mutable: true }) checked: boolean = false;
    @Prop() customStyle: string = '';
    @Prop() disabled: boolean = false;
    @Prop() label: string = null;
    @Prop() leadingLabel: boolean = false;
    @Prop() sizing: FSwitchSizing = FSwitchSizing.MEDIUM;

    // Other state properties for handling arrays
    @State() textfieldArray: any[] = [];
    @State() datepickerArray: any[] = [];
    @State() timepickerArray: any[] = [];
    @State() checkboxArray: any[] = [];
    @State() autocompleteArray: any[] = [];
    @State() switchArray: any[] = [];
    @State() buttonArray: any[] = [];
    @State() chipArray: any[] = [];
    @State() treeArray: any[] = [];
    @State() objectArray: any[] = [];
    @State() buttonsIds: string[] = [];
    @State() textfieldsIds: string[] = [];
    @State() switchesIds: string[] = [];

    private kupManager: KupManager = kupManagerInstance();

    @Event({
        eventName: 'kup-multi-select-blur',
        composed: true,
        cancelable: false,
        bubbles: true,
    })
    kupBlur: EventEmitter<KupMultiSelectEventPayload>;

    @Event({
        eventName: 'kup-multi-select-change',
        composed: true,
        cancelable: false,
        bubbles: true,
    })
    kupChange: EventEmitter<KupMultiSelectEventPayload>;

    @Event({
        eventName: 'kup-multi-select-focus',
        composed: true,
        cancelable: false,
        bubbles: true,
    })
    kupFocus: EventEmitter<KupMultiSelectEventPayload>;

    onKupBlur() {
        this.kupBlur.emit({
            comp: this,
            id: this.rootElement.id,
            value: this.value,
        });
    }

    onKupChange() {
        if (this.checked) {
            this.checked = false;
            this.value = 'off';
        } else {
            this.checked = true;
            this.value = 'on';
        }
        this.kupChange.emit({
            comp: this,
            id: this.rootElement.id,
            value: this.value,
        });
    }

    onKupFocus() {
        this.kupFocus.emit({
            comp: this,
            id: this.rootElement.id,
            value: this.value,
        });
    }

    @Method()
    async getProps(descriptions?: boolean): Promise<GenericObject> {
        return getProps(this, KupMultiSelectProps, descriptions);
    }

    @Method()
    async refresh(): Promise<void> {
        forceUpdate(this);
    }

    @Method()
    async setProps(props: GenericObject): Promise<void> {
        setProps(this, KupMultiSelectProps, props);
    }

    componentWillLoad() {
        this.kupManager.debug.logLoad(this, false);
        this.kupManager.theme.register(this);
    }

    componentDidLoad() {
        this.kupManager.debug.logLoad(this, true);
    }

    componentWillRender() {
        this.kupManager.debug.logRender(this, false);
        if (this.checked) {
            this.value = 'on';
        } else {
            this.value = 'off';
        }
    }

    componentDidRender() {
        this.kupManager.debug.logRender(this, true);
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
                    <div
                        class={`${KupCardCSSClasses.CARD_VIEW} ${
                            KupCardCSSClasses.VIEW_PREFIX
                        }${this.viewIndex} ${
                            this.visibleView === this.viewIndex
                                ? KupCardCSSClasses.VISIBLE
                                : ''
                        }`}
                    >
                        <div class="sub-button">
                            {this.buttonsIds.includes(
                                KupColumnMenuIds.BUTTON_REMOVE
                            ) ? (
                                <kup-button
                                    {...this.buttonArray.find(
                                        (x) =>
                                            x.id ===
                                            KupColumnMenuIds.BUTTON_REMOVE
                                    )}
                                />
                            ) : null}
                            {this.buttonsIds.includes(
                                KupColumnMenuIds.BUTTON_GROUP
                            ) ? (
                                <kup-button
                                    {...this.buttonArray.find(
                                        (x) =>
                                            x.id ===
                                            KupColumnMenuIds.BUTTON_GROUP
                                    )}
                                />
                            ) : null}
                        </div>
                        <div class="sub-formula">
                            {this.textfieldArray.some(
                                (x) =>
                                    x.id === KupColumnMenuIds.TEXTFIELD_FORMULA
                            ) ? (
                                <kup-text-field
                                    {...this.textfieldArray.find(
                                        (x) =>
                                            x.id ===
                                            KupColumnMenuIds.TEXTFIELD_FORMULA
                                    )}
                                />
                            ) : null}
                        </div>
                        <div class="sub-chip">
                            {this.chipArray[0] ? (
                                <kup-chip
                                    {...this.chipArray[0]}
                                    type={FChipType.INPUT}
                                    id={KupCardIds.COLUMNS_LIST}
                                />
                            ) : (
                                <kup-chip
                                    type={FChipType.INPUT}
                                    id={KupCardIds.COLUMNS_LIST}
                                />
                            )}
                            {this.buttonsIds.includes(
                                KupColumnMenuIds.BUTTON_APPLY
                            ) ? (
                                <kup-button
                                    {...this.buttonArray.find(
                                        (x) =>
                                            x.id ===
                                            KupColumnMenuIds.BUTTON_APPLY
                                    )}
                                />
                            ) : null}
                        </div>
                        <div class="sub-tree">
                            <kup-tree
                                class="kup-full-width"
                                globalFilter
                                {...this.treeArray[0]}
                                id={KupCardIds.EXTRA_COLUMNS}
                            />
                        </div>
                    </div>
                </div>
            </Host>
        );
    }

    disconnectedCallback() {
        this.kupManager.theme.unregister(this);
    }

    compList(array: any[], type: string) {
        return array.map((item, index) => {
            switch (type) {
                case 'datepicker':
                    return <kup-datepicker key={index} {...item} />;
                case 'timepicker':
                    return <kup-time-picker key={index} {...item} />;
                case 'checkbox':
                    return <kup-checkbox key={index} {...item} />;
                case 'autocomplete':
                    return <kup-autocomplete key={index} {...item} />;
                default:
                    return null;
            }
        });
    }
}
