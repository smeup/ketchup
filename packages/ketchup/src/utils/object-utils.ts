interface Object {
    t: string;
    p: string;
}

export function isBar({ t, p }: Object): boolean {
    return 'J4' === t && 'BAR' === p;
}

export function isChart({ t, p }: Object): boolean {
    return 'J4' === t && 'CHART' === p;
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
