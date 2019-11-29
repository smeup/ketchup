// dont know how to call this interface
import { Cell } from '../components/kup-data-table/kup-data-table-declarations';

interface Object {
    t: string;
    p: string;
}

export interface J4objKupButtonConfig {
    flat: boolean;
    buttonStyle: {};
    imageSrc: string;
    iconClass: string;
    label: string;
    tooltip: string;
    textmode: string;
    showtext: boolean;
    fillspace: boolean;
}

export function isBar({ t, p }: Object): boolean {
    return 'J4' === t && 'BAR' === p;
}

export function isButton({ t, p }: Object): boolean {
    return 'J4' === t && 'BTN' === p;
}

export function isYesNo({ t, p }: Object): boolean {
    return 'V2' === t && 'SINO' === p;
}

export function isRadio({ t, p }: Object): boolean {
    return 'V2' === t && 'RADIO' === p;
}

export function isPassword({ t, p }: Object): boolean {
    return 'J1' === t && 'PWD' === p;
}

export function isCheckbox({ t, p }: Object): boolean {
    return 'V2' === t && 'SI/NO' === p.toUpperCase();
}

export function isDate({ t }: Object): boolean {
    return 'D8' === t;
}

export function isIcon({ t, p }: Object): boolean {
    return 'J4' === t && 'ICO' === p;
}

export function isImage({ t, p }: Object): boolean {
    return 'J4' === t && 'IMG' === p;
}

export function isLink({ t, p }: Object): boolean {
    return 'J1' === t && 'URL' === p;
}

export function isNumber({ t }: Object): boolean {
    return 'NR' === t;
}

export function isProgressBar({ t, p }: Object): boolean {
    return 'J4' === t && 'PGB' === p;
}

export function isVoCodver({ t, p }: Object): boolean {
    return 'VO' === t && 'COD_VER' === p;
}

export function isStringObject(obj: any): boolean {
    if (!obj) return true;

    return (
        !isVoCodver(obj) &&
        !isIcon(obj) &&
        !isImage(obj) &&
        !isCheckbox(obj) &&
        !isRadio(obj)
    );
}

export function createJ4objButtonConfig(cell: Cell): J4objKupButtonConfig {
    let label = cell.value;
    let textMode = 'Hint';
    let buttonStyle = null;
    let icon = null;
    let imageSrc = null;
    let tooltip = null;
    let flat = true;
    let showtext = false;
    let fillspace = false;

    if (cell.config) {
        const config = cell.config;

        icon = config.icon;

        imageSrc = config.imageSrc;

        tooltip = config.tooltip;

        if (config.hasOwnProperty('showtext')) {
            showtext = config.showtext;
        }

        if (config.hasOwnProperty('fillspace')) {
            fillspace = config.fillspace;
        }

        if (config.hasOwnProperty('flat')) {
            flat = config.flat;

            if (!flat) {
                textMode = '';
            }
        }

        if (config.hasOwnProperty('buttonStyle')) {
            buttonStyle = config.buttonStyle;
        }
    }

    return {
        buttonStyle: buttonStyle,
        label,
        textmode: textMode,
        imageSrc: imageSrc,
        tooltip: tooltip,
        iconClass: icon,
        flat,
        showtext,
        fillspace,
    };
}
