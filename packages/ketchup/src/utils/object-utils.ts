// dont know how to call this interface
interface CellObject {
    t: string;
    p: string;
    k: string;
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
