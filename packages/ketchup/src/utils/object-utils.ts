interface Object {
    t: string;
    p: string;
}

export function isBar(smeupObj: Object): boolean {
    if (smeupObj == null) return false;
    return 'J4' === smeupObj.t && 'BAR' === smeupObj.p;
}

export function isChart(smeupObj: Object): boolean {
    if (smeupObj == null) return false;
    return (
        'J4' === smeupObj.t && smeupObj.p.toLocaleUpperCase().startsWith('GRA_')
    );
}

export function isButton(smeupObj: Object): boolean {
    if (smeupObj == null) return false;
    return 'J4' === smeupObj.t && 'BTN' === smeupObj.p;
}

export function isRadio(smeupObj: Object): boolean {
    if (smeupObj == null) return false;
    return 'V2' === smeupObj.t && 'RADIO' === smeupObj.p;
}

export function isPassword(smeupObj: Object): boolean {
    if (smeupObj == null) return false;
    return 'J1' === smeupObj.t && 'PWD' === smeupObj.p;
}

export function isCheckbox(smeupObj: Object): boolean {
    if (smeupObj == null) return false;
    return 'V2' === smeupObj.t && 'SI/NO' === smeupObj.p.toUpperCase();
}

export function isDate(smeupObj: Object): boolean {
    if (smeupObj == null) return false;
    return 'D8' === smeupObj.t;
}

export function isIcon(smeupObj: Object): boolean {
    if (smeupObj == null) return false;
    return 'J4' === smeupObj.t && 'ICO' === smeupObj.p;
}

export function isImage(smeupObj: Object): boolean {
    if (smeupObj == null) return false;
    return 'J4' === smeupObj.t && 'IMG' === smeupObj.p;
}

export function isLink(smeupObj: Object): boolean {
    if (smeupObj == null) return false;
    return 'J1' === smeupObj.t && 'URL' === smeupObj.p;
}

export function isNumber(smeupObj: Object): boolean {
    if (smeupObj == null) return false;
    return 'NR' === smeupObj.t;
}

export function isProgressBar(smeupObj: Object): boolean {
    if (smeupObj == null) return false;
    return 'J4' === smeupObj.t && 'PGB' === smeupObj.p;
}

export function isVoCodver(smeupObj: Object): boolean {
    if (smeupObj == null) return false;
    return 'VO' === smeupObj.t && 'COD_VER' === smeupObj.p;
}

export function isStringObject(obj: any): boolean {
    if (!obj) return true;

    return (
        !isVoCodver(obj) &&
        !isIcon(obj) &&
        !isImage(obj) &&
        !isCheckbox(obj) &&
        !isRadio(obj) &&
        !isChart(obj)
    );
}

export function hasTooltip(obj: any) {
    if (!obj) return false;
    return (
        !isBar(obj) &&
        !isButton(obj) &&
        !isCheckbox(obj) &&
        !isIcon(obj) &&
        !isImage(obj) &&
        !isLink(obj) &&
        !isNumber(obj) &&
        !isProgressBar(obj) &&
        !isRadio(obj) &&
        !isVoCodver(obj) &&
        !isChart(obj)
    );
}
