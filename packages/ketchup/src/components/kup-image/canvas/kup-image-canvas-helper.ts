import { Color } from './kup-image-canvas-declarations';

export function getColorFromString(rgb: string): Color {
    const rIndex = rgb.indexOf('R');
    const gIndex = rgb.indexOf('G');
    const bIndex = rgb.indexOf('B');

    if (rIndex < 0 || gIndex < 0 || bIndex < 0) {
        return;
    }

    const r = rgb.substring(rIndex + 1, rIndex + 4);
    const g = rgb.substring(gIndex + 1, gIndex + 4);
    const b = rgb.substring(bIndex + 1, bIndex + 4);

    try {
        return new Color(parseInt(r), parseInt(g), parseInt(b));
    } catch (e) {
        console.error(e);
    }

    return null;
}
