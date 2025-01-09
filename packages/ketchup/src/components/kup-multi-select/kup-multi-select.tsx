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
import { FSwitch } from '../../f-components/f-switch/f-switch';
import {
    FSwitchProps,
    FSwitchSizing,
} from '../../f-components/f-switch/f-switch-declarations';
import { GenericObject, KupComponent } from '../../types/GenericTypes';
import {
    KupMultiSelectEventPayload,
    KupMultiSelectProps,
} from './kup-multi-select-declarations';
import { getProps, setProps } from '../../utils/utils';
import { componentWrapperId } from '../../variables/GenericVariables';

@Component({
    tag: 'kup-multi-select',
    styleUrl: 'kup-multi-select.scss',
    shadow: true,
})
export class KupMultiSelect {
    @Element() rootElement: HTMLElement;

    @State() value: string = '';

    @Prop({ mutable: true }) checked: boolean = false;
    @Prop() customStyle: string = '';
    @Prop() disabled: boolean = false;
    @Prop() label: string = null;
    @Prop() leadingLabel: boolean = false;
    @Prop() sizing: FSwitchSizing = FSwitchSizing.MEDIUM;

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
        let props: FSwitchProps = {
            checked: this.checked,
            danger: this.rootElement.classList.contains('kup-danger')
                ? true
                : false,
            disabled: this.disabled,
            info: this.rootElement.classList.contains('kup-info')
                ? true
                : false,
            label: this.label,
            leadingLabel: this.leadingLabel,
            secondary: this.rootElement.classList.contains('kup-secondary')
                ? true
                : false,
            sizing: this.sizing,
            success: this.rootElement.classList.contains('kup-success')
                ? true
                : false,
            warning: this.rootElement.classList.contains('kup-warning')
                ? true
                : false,
            onBlur: () => this.onKupBlur(),
            onChange: () => this.onKupChange(),
            onFocus: () => this.onKupFocus(),
        };

        return (
            <Host>
                <style>
                    {this.kupManager.theme.setKupStyle(
                        this.rootElement as KupComponent
                    )}
                </style>
                <div id={componentWrapperId}>
                    <FSwitch {...props} />
                </div>
            </Host>
        );
    }

    disconnectedCallback() {
        this.kupManager.theme.unregister(this);
    }
}
