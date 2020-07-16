import { getColorFromString } from './kup-chart-cell-helper';

export class ChartElement {
    private width = 0;
    private height = 50;
    private color: Color = null;
    private shape = 'bar';
    private fillColor = false;
    private barWidth = 0;
    private chartUltInfo = '';

    isTrasparent(): boolean {
        return this.color === null;
    }

    initChart(shape: string, configInfo: string) {
        this.chartUltInfo = configInfo;
        let vChartUltInfoArray = this.getChartUltInfoAsArray();

        let vShapeTypeString:string;
        
        if (shape) vShapeTypeString = shape.toLocaleLowerCase()
        else vShapeTypeString = 'bar';

        this.shape = vShapeTypeString;
        switch (vShapeTypeString) {
            case 'box':
                break;

            case 'bul':
            case 'bullet':
                this.shape = 'bullet';
                break;

            case 'dis':
            case 'discrete':
                this.shape = 'discrete';
                this.width = vChartUltInfoArray.length * 10;
                break;

            case 'lin':
            case 'line':
                this.shape = 'line';
                this.width = vChartUltInfoArray.length * 10;
                break;

            case 'pie':
                this.width = this.height;
                break;

            case 'tri':
            case 'tristate':
                this.shape = 'tristate';
                this.barWidth = 4;
                break;

            default:
                this.shape = 'bar';
                this.barWidth = 4;
        }
    }

    getChartUltInfoAsArray(): number[] {
        let strs: string[] = this.chartUltInfo.split(';');
        let ints: number[] = [strs.length];
        let i = 0;
        strs.forEach((element) => {
            try {
                element = element.replace(',','.');
                ints[i++] = parseFloat(element);
            } catch (e) {
                ints[i++] = null;
            }
        });
        return ints;
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

    setHeight(h: number) {
        if (h > 0) {
            this.height = h;
        }
    }

    getWidth(): number {
        return this.width;
    }

    setWidth(w: number) {
        if (w > 0) {
            this.width = w;
        }
    }

    getShape(): string {
        return this.shape;
    }

    getColor(): Color {
        return this.color;
    }

    setStrColor(strColor: string) {
        if (this.isValidColor(strColor)) {
            this.setColor(getColorFromString(strColor));
        }
    }

    setColor(c: Color) {
        if (c) {
            this.color = c;
        }
    }

    isFillColor(): boolean {
        return this.fillColor;
    }

    getBarWidth(): number {
        return this.barWidth;
    }
}

export class Color {
    constructor(private r: number, private g: number, private b: number) {}

    toString(): string {
        return `rgb(${this.r},${this.g},${this.b})`;
    }
}
