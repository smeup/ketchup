// dont know how to call this interface
interface CellObject {
    t: string;
    p: string;
}

export function isBar({ t, p }: CellObject): boolean {
    return 'J4' === t && 'BAR' === p;
}

export function isButton({ t, p }: CellObject): boolean {
    return 'J4' === t && 'BTN' === p;
}

export function isIcon({ t, p }: CellObject): boolean {
    return 'J4' === t && 'ICO' === p;
}

export function isImage({ t, p }: CellObject): boolean {
    return 'J4' === t && 'IMG' === p;
}

export function isLink({ t, p }: CellObject): boolean {
    return 'J1' === t && 'URL' === p;
}

export function isNumber({ t }: CellObject): boolean {
    return 'NR' === t;
}

export function isProgressBar({ t, p }: CellObject): boolean {
    return 'J4' === t && 'PGB' === p;
}

export function isVoCodver({ t, p }: CellObject): boolean {
    return 'VO' === t && 'COD_VER' === p;
}
