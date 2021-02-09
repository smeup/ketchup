import { getColorFromString } from './kup-image-canvas-helper';

export class GraphicElement {
    width = 100.0;
    height = 100.0;
    color: Color = null;
    shape = 'bar';

    init(markers: string[]): void {
        markers.forEach((marker) => {
            if (marker.toUpperCase().startsWith('HEIGHT;')) {
                this.initHeight(marker);
            } else if (marker.toUpperCase().startsWith('SHAPE;')) {
                this.initShape(marker);
            } else if (marker.toUpperCase().startsWith('BCOLOR;')) {
                // TODO ?
            } else {
                this.initColor(marker);
            }
        });
    }

    initColor(rgb: string): void {
        if (rgb.length > 11 && this.isValidColor(rgb)) {
            this.color = getColorFromString(rgb.substring(0, 12));

            try {
                this.width = parseFloat(rgb.substring(13).replace(',', '.'));
            } catch (e) {
                console.error(e);
            }
        } else if (rgb.startsWith('*NONE')) {
            try {
                this.width = parseFloat(rgb.substring(6).replace(',', '.'));
            } catch (e) {
                console.error(e);
            }
        }
    }

    isTrasparent(): boolean {
        return this.color === null;
    }

    initHeight(height: string): void {
        if (height) {
            const toBeParsed = height
                .substring('HEIGHT;'.length)
                .replace(',', '.');

            try {
                this.height = parseFloat(toBeParsed);
                if (Number.isNaN(this.height)) {
                    this.height = 100;
                }
            } catch (err) {
                console.error(err);
                this.height = 100;
            }
        }
    }

    initShape(shape: string) {
        shape = shape.substring('SHAPE;'.length);
        const vLastSemicolonIndex = shape.indexOf(';');
        let vShapeTypeString = shape;
        if (vLastSemicolonIndex > -1) {
            vShapeTypeString = shape.substring(0, vLastSemicolonIndex);

            try {
                this.width = parseFloat(
                    shape.substring(vLastSemicolonIndex + 1).replace(',', '.')
                );
            } catch (err) {
                console.error(err);
            }
        }

        switch (vShapeTypeString.toLocaleLowerCase()) {
            case 'circle':
                this.shape = 'circle';
                break;

            case 'tril':
                this.shape = 'tril';
                break;

            case 'trir':
                this.shape = 'trir';
                break;
        }
    }

    isValidColor(color: string): boolean {
        if (!color) {
            return false;
        }

        color = color.trim();

        const vRgb = [];

        let vError = false;

        let vColorKey = null;

        // red
        let vIndex = color.indexOf('R');
        if (vIndex > -1) {
            vColorKey = color.substring(vIndex + 1, vIndex + 4);
            vRgb[0] = parseInt(vColorKey);
            if (isNaN(vRgb[0])) {
                vError = true;
            }
        }

        // green
        vIndex = color.indexOf('G');
        if (vIndex > -1) {
            vColorKey = color.substring(vIndex + 1, vIndex + 4);
            vRgb[1] = parseInt(vColorKey);
            if (isNaN(vRgb[1])) {
                vError = true;
            }
        }

        // blue
        vIndex = color.indexOf('B');
        if (vIndex > -1) {
            vColorKey = color.substring(vIndex + 1, vIndex + 4);
            vRgb[2] = parseInt(vColorKey);
            if (isNaN(vRgb[2])) {
                vError = true;
            }
        }

        if (vError) {
            const vIndexR = color.indexOf('R');
            const vIndexG = color.indexOf('G');
            const vIndexB = color.indexOf('B');

            // check R
            vColorKey = color.substring(vIndexR + 1, vIndexG);
            vRgb[0] = parseInt(vColorKey);
            if (isNaN(vRgb[0])) {
                vError = true;
            }

            // Check G
            vColorKey = color.substring(vIndexG + 1, vIndexB);
            vRgb[1] = parseInt(vColorKey);
            if (isNaN(vRgb[1])) {
                vError = true;
            }

            // Check B
            vColorKey = color.substring(vIndexB + 1);
            vRgb[2] = parseInt(vColorKey);
            if (isNaN(vRgb[2])) {
                vError = true;
            }

            if (vError) {
                return false;
            }
        }

        // Check if all values are between 0 and 255
        if (
            vRgb[0] < 0 ||
            vRgb[0] > 255 ||
            vRgb[1] < 0 ||
            vRgb[1] > 255 ||
            vRgb[2] < 0 ||
            vRgb[2] > 255
        ) {
            return false;
        }

        // All good
        return true;
    }

    getHeight(): number {
        return this.height;
    }

    getWidth(): number {
        return this.width;
    }

    getShape(): string {
        return this.shape;
    }

    getColor(): Color {
        return this.color;
    }
}

export class Color {
    constructor(private r: number, private g: number, private b: number) {}

    toString(): string {
        return `rgb(${this.r},${this.g},${this.b})`;
    }
}
