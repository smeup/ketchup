// dont know how to call this interface
interface CellObject {
    t: string;
    p: string;
    k: string;
}

export function isIcon({ t, p }: CellObject): boolean {
    if (t && p) {
        return 'J4' === t && 'ICO' === p;
    }

    return false;
}

export function isImage({ t, p }: CellObject): boolean {
    if (t && p) {
        return 'J4' === t && 'IMG' === p;
    }

    return false;
}
