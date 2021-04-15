interface Object {
    t: string;
    p: string;
    k: string;
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

export function isTime(smeupObj: Object): boolean {
    if (smeupObj == null) return false;
    return 'I1' === smeupObj.t || 'I2' === smeupObj.t;
}

export function isTimeWithSeconds(smeupObj: Object): boolean {
    if (!isTime(smeupObj)) {
        return false;
    }
    return '2' === smeupObj.p;
}

export function isTimestamp(smeupObj: Object): boolean {
    if (smeupObj == null) return false;
    return 'I3' === smeupObj.t && '2' === smeupObj.p;
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

export function isPercentage(smeupObj: Object): boolean {
    if (smeupObj == null) return false;
    const obj = smeupObj.t+smeupObj.p;
    return 'NRP' === obj;
}

export function isProgressBar(smeupObj: Object): boolean {
    if (smeupObj == null) return false;
    return 'J4' === smeupObj.t && 'PGB' === smeupObj.p;
}

export function isVoCodver(smeupObj: Object): boolean {
    if (smeupObj == null) return false;
    return 'VO' === smeupObj.t && 'COD_VER' === smeupObj.p;
}

export function isColor(smeupObj: Object): boolean {
    if (smeupObj == null) return false;
    return 'J1' === smeupObj.t && 'COL' === smeupObj.p;
}

export function isObjectList(smeupObj: Object): boolean {
    if (smeupObj == null) return false;
    return 'JL' === smeupObj.t;
}

// TODO do it in real SmeUP way
// in cell utils with the shape
export function isTextField(smeupObj: Object): boolean {
    if (smeupObj == null) return false;
    return 'J4' === smeupObj.t && 'TEXTFIELD' === smeupObj.p;
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

export function canHaveExtraColumns(obj: any): boolean {
    if (!obj) return false;
    if (
        obj.t == null ||
        (obj.t as string).trim() == '' ||
        (obj.t as string).trim() == '**'
    ) {
        return false;
    }
    return (
        !isBar(obj) &&
        !isButton(obj) &&
        !isCheckbox(obj) &&
        !isIcon(obj) &&
        !isImage(obj) &&
        !isLink(obj) &&
        !isProgressBar(obj) &&
        !isRadio(obj) &&
        !isVoCodver(obj) &&
        !isChart(obj)
    );
}

export function canHaveAutomaticDerivedColumn(obj: any): boolean {
    if (!canHaveExtraColumns(obj)) {
        return false;
    }

    return !isNumber(obj) && !isTime(obj) && !isTimestamp(obj) && !isPercentage(obj);
}

export function hasTooltip(obj: any) {
    if (!obj) return false;
    if (obj.t == null || (obj.t as string).trim() == '') return false;
    return (
        !isBar(obj) &&
        !isButton(obj) &&
        !isCheckbox(obj) &&
        !isIcon(obj) &&
        !isImage(obj) &&
        !isLink(obj) &&
        !isNumber(obj) &&
        !isPercentage(obj) &&
        !isProgressBar(obj) &&
        !isRadio(obj) &&
        !isVoCodver(obj) &&
        !isChart(obj)
    );
}

export function smeupObjectEquals(obj1: any, obj2: any): boolean {
    if (obj1 == obj2) {
        return true;
    }
    if (obj1 == null) {
        return false;
    }
    if (obj2 == null) {
        return false;
    }

    if (!(obj1 instanceof Object) || !(obj2 instanceof Object)) {
        return false;
    }
    let smeupObject1: Object = obj1 as Object;
    let smeupObject2: Object = obj2 as Object;

    if (smeupObject1.t != smeupObject2.t) {
        return false;
    }
    if (smeupObject1.p != smeupObject2.p) {
        return false;
    }
    if (smeupObject1.k != smeupObject2.k) {
        return false;
    }
    return true;
}
