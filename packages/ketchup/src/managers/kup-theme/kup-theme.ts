import type { KupDom } from '../kup-manager/kup-manager-declarations';
import type {
    GenericObject,
    KupComponent,
    KupTagNames,
} from '../../types/GenericTypes';
import { getAssetPath } from '@stencil/core';
import * as themesJson from './themes.json';
import * as applicationCSS from './kup-theme-application.css';
import * as componentCSS from './kup-theme-component.css';
import * as fButtonCSS from '../../f-components/f-button/f-button.css';
import * as fCellCSS from '../../f-components/f-cell/f-cell.css';
import * as fCheckboxCSS from '../../f-components/f-checkbox/f-checkbox.css';
import * as fChipCSS from '../../f-components/f-chip/f-chip.css';
import * as fImageCSS from '../../f-components/f-image/f-image.css';
import * as fPaginatorCSS from '../../f-components/f-paginator/f-paginator.css';
import * as fProgressBarCSS from '../../f-components/f-progress-bar/f-progress-bar.css';
import * as fRadioCSS from '../../f-components/f-radio/f-radio.css';
import * as fRatingCSS from '../../f-components/f-rating/f-rating.css';
import * as fSwitchCSS from '../../f-components/f-switch/f-switch.css';
import * as fTextFieldCSS from '../../f-components/f-text-field/f-text-field.css';
import * as FTypographyCSS from '../../f-components/f-typography/f-typography.css';
import * as rippleCSS from './mdc-ripple.css';
import * as fObjectFieldCSS from '../../f-components/f-object-field/f-object-field.css';
import {
    editorUsers,
    fButtonUsers,
    fCellUsers,
    fCheckboxUsers,
    fChipUsers,
    fImageUsers,
    fPaginatorUsers,
    fProgressBarUsers,
    fRadioUsers,
    fRatingUsers,
    fSwitchUsers,
    fTypographyUsers,
    fTextFieldUsers,
    KupThemeColor,
    KupThemeCSSVariables,
    KupThemeHSLValues,
    KupThemeIcons,
    KupThemeJSON,
    KupThemeRGBValues,
    masterCustomStyle,
    rippleUsers,
    KupThemeFontFamilyMap,
    fObjectFieldUsers,
} from './kup-theme-declarations';
import { KupDebugCategory } from '../kup-debug/kup-debug-declarations';

const dom: KupDom = document.documentElement as KupDom;

/**
 * Theme manager, handles everything about theming, customStyles and color utilities.
 * @module KupTheme
 */
export class KupTheme {
    cssVars: Partial<KupThemeCSSVariables>;
    list: KupThemeJSON;
    managedComponents: Set<KupComponent>;
    name: string;
    styleTag: HTMLStyleElement;
    /**
     * Initializes KupTheme.
     */
    constructor(list?: KupThemeJSON, name?: string) {
        this.cssVars = {};
        this.list = list ? list : themesJson['default'];
        this.managedComponents = new Set();
        this.name = name ? name : 'octane';
        this.styleTag = dom
            .querySelector('head')
            .appendChild(document.createElement('style'));
    }

    private fonts(): string {
        const theme = this.list[this.name];

        let fonts = '';
        if (theme.fonts) {
            theme.fonts.forEach((f) => {
                const fontPath = getAssetPath(`./assets/fonts/${f}`);
                const fontFace = `@font-face {
                    font-family: ${KupThemeFontFamilyMap[f]};
                    src: url('${fontPath}.woff2') format('woff2'),
                         url('${fontPath}.woff') format('woff');
                  }`;
                fonts += fontFace;
            });
        }

        return fonts;
    }
    /**
     * Sets the CSS variables of the theme.
     */
    private cssVariables(): string {
        const variables: KupThemeCSSVariables =
            this.list[this.name].cssVariables;
        let css: string = '';
        for (let key in variables) {
            if (variables.hasOwnProperty(key)) {
                const val: string = variables[key];
                this.cssVars[key] = val;
                css += key + ': ' + val + ';';
                if (key.indexOf('color') > -1) {
                    const computedColor: KupThemeColor = this.colorCheck(val);
                    const rgbKey: string = key + '-rgb';
                    const hKey: string = key + '-h';
                    const sKey: string = key + '-s';
                    const lKey: string = key + '-l';
                    const rgbVal: string = computedColor.rgbValues;
                    const hue: string = computedColor.hue;
                    const saturation: string = computedColor.saturation;
                    const lightness: string = computedColor.lightness;
                    this.cssVars[rgbKey] = rgbVal;
                    this.cssVars[hKey] = hue;
                    this.cssVars[lKey] = lightness;
                    this.cssVars[sKey] = saturation;
                    css += rgbKey + ': ' + rgbVal + ';';
                    css += hKey + ': ' + hue + ';';
                    css += lKey + ': ' + lightness + ';';
                    css += sKey + ': ' + saturation + ';';
                }
            }
        }
        return css;
    }
    /**
     * Sets the icon variables of the theme.
     */
    private icons(): string {
        const icons: KupThemeIcons = this.list[this.name].icons;
        let css: string = '';
        for (var key in icons) {
            if (icons.hasOwnProperty(key)) {
                const val = `url('${getAssetPath(
                    `./assets/svg/${icons[key]}.svg`
                )}') no-repeat center`;
                this.cssVars[key] = val;
                css += key + ': ' + val + ';';
            }
        }
        return css;
    }
    /**
     * Refreshed managed components to apply theme customStyles.
     */
    private customStyle(): void {
        this.managedComponents.forEach(function (comp) {
            if (comp.isConnected) {
                comp.refresh();
            }
        });
    }
    /**
     * Sets the theme using this.name or the function's argument.
     * @param {string} name - When present, this theme will be set.
     */
    set(name?: string, list?: KupThemeJSON): void {
        if (name) {
            this.name = name;
        }
        if (list) {
            this.list = list;
        }
        dom.ketchup.debug.logMessage(
            'theme manager',
            'Setting theme to: ' + this.name + '.'
        );
        if (!this.list[this.name]) {
            dom.ketchup.debug.logMessage(
                'theme manager',
                'Invalid theme name, falling back to default ("ketchup").'
            );
            this.name = 'ketchup';
        }

        this.cssVars = {};
        this.styleTag.innerText =
            this.fonts() +
            ' :root[kup-theme="' +
            this.name +
            '"]{' +
            this.cssVariables() +
            this.icons() +
            '}' +
            applicationCSS['default'];
        this.customStyle();

        document.documentElement.setAttribute('kup-theme', this.name);
        document.dispatchEvent(new CustomEvent('kup-theme-change'));
    }
    /**
     * Gets the name of available themes.
     * @returns {Array<string>} Array of themes' names.
     */
    getThemes(): Array<string> {
        const themes: Array<string> = [];
        for (var key in this.list) {
            if (this.list.hasOwnProperty(key)) {
                themes.push(key);
            }
        }
        return themes;
    }
    /**
     * This method will just refresh the current theme.
     */
    refresh(): void {
        try {
            this.styleTag.innerText =
                ':root[kup-theme="' +
                this.name +
                '"]{' +
                this.cssVariables() +
                this.icons() +
                '}';
            this.customStyle();
            dom.ketchup.debug.logMessage(
                'kup-theme',
                'Theme ' + dom.getAttribute('kup-theme') + ' refreshed.'
            );
            document.dispatchEvent(new CustomEvent('kup-theme-refresh'));
        } catch (error) {
            dom.ketchup.debug.logMessage(
                'kup-theme',
                'Theme not refreshed.',
                KupDebugCategory.WARNING
            );
        }
    }
    /**
     * Registers a KupComponent in KupTheme, in order to be properly refreshed whenever the theme changes.
     * @param {any} comp - The component calling this function.
     */
    register(comp: any): void {
        this.managedComponents.add(comp.rootElement ? comp.rootElement : comp);
    }
    /**
     * Unregisters a KupComponent, so it won't be refreshed when the theme changes.
     * @param {any} comp - The component calling this function.
     */
    unregister(comp: any): void {
        if (this.managedComponents) {
            this.managedComponents.delete(
                comp.rootElement ? comp.rootElement : comp
            );
        }
    }
    /**
     * Combines global (style every component should have), theme's and component's customStyles, returning the result.
     * @param comp - The component calling this function.
     * @returns {string} Combined customStyle.
     */
    setKupStyle(comp: KupComponent): string {
        const styles: GenericObject = this.list[this.name].customStyles;
        const tagName: KupTagNames = comp.tagName as KupTagNames;
        let completeStyle = componentCSS['default'];
        if (styles && styles[masterCustomStyle]) {
            completeStyle += styles[masterCustomStyle];
        }
        if (styles && styles[comp.tagName]) {
            completeStyle += ' ' + styles[comp.tagName];
        }
        if (comp.customStyle) {
            completeStyle += ' ' + comp.customStyle;
        }
        if (tagName) {
            if (fButtonUsers.includes(tagName)) {
                completeStyle += fButtonCSS['default'];
            }
            if (fCellUsers.includes(tagName)) {
                completeStyle += fCellCSS['default'];
            }
            if (fCheckboxUsers.includes(tagName)) {
                completeStyle += fCheckboxCSS['default'];
            }
            if (fChipUsers.includes(tagName)) {
                completeStyle += fChipCSS['default'];
            }
            if (fImageUsers.includes(tagName)) {
                completeStyle += fImageCSS['default'];
            }
            if (fPaginatorUsers.includes(tagName)) {
                completeStyle += fPaginatorCSS['default'];
            }
            if (fProgressBarUsers.includes(tagName)) {
                completeStyle += fProgressBarCSS['default'];
            }
            if (fRadioUsers.includes(tagName)) {
                completeStyle += fRadioCSS['default'];
            }
            if (fRatingUsers.includes(tagName)) {
                completeStyle += fRatingCSS['default'];
            }
            if (fSwitchUsers.includes(tagName)) {
                completeStyle += fSwitchCSS['default'];
            }
            if (fTypographyUsers.includes(tagName)) {
                completeStyle += FTypographyCSS['default'];
            }
            if (fTextFieldUsers.includes(tagName)) {
                completeStyle += fTextFieldCSS['default'];
            }
            if (editorUsers.includes(tagName)) {
                completeStyle += applicationCSS['default'];
            }
            if (rippleUsers.includes(tagName)) {
                completeStyle += rippleCSS['default'];
            }
            if (fObjectFieldUsers.includes(tagName)) {
                completeStyle += fObjectFieldCSS['default'];
            }
        }
        return completeStyle ? completeStyle : null;
    }
    /**
     * Checks whether on a given color the text should be white or black.
     * @param {string} color - Color used to check the contrast.
     * @returns {string} "white" or "black".
     */
    colorContrast(color: string): string {
        color = this.colorCheck(color).rgbColor;
        const colorValues: string[] = color.replace(/[^\d,.]/g, '').split(',');
        const brightness: number = Math.round(
            (parseInt(colorValues[0]) * 299 +
                parseInt(colorValues[1]) * 587 +
                parseInt(colorValues[2]) * 114) /
                1000
        );
        return brightness > 125 ? 'black' : 'white';
    }
    /**
     * Generates a random HEX color.
     * @param {number} brightness - Brightness of the color generated (0-255).
     * @returns {string} Random HEX color.
     */
    randomColor(brightness: number): string {
        function randomChannel(brightness: number) {
            var r = 255 - brightness;
            var n = 0 | (Math.random() * r + brightness);
            var s = n.toString(16);
            return s.length == 1 ? '0' + s : s;
        }
        return (
            '#' +
            randomChannel(brightness) +
            randomChannel(brightness) +
            randomChannel(brightness)
        );
    }
    /**
     * Sets a random theme between those specified in this.list (excludes "print" and "test") and different from the currently used one.
     */
    randomTheme(): void {
        let themes: string[] = [];
        for (var key in this.list) {
            if (this.list.hasOwnProperty(key)) {
                if (key !== 'test' && key !== 'print') {
                    themes.push(key);
                }
            }
        }
        if (themes.length > 0) {
            let index = null;
            while (index === null || themes[index] === this.name) {
                index = Math.floor(Math.random() * Math.floor(themes.length));
            }
            this.set(themes[index]);
        } else {
            dom.ketchup.debug.logMessage(
                'kup-theme',
                "Couldn't set a random theme: no themes available!",
                KupDebugCategory.WARNING
            );
        }
    }
    /**
     * Returns HEX, RGB, HSL, HSL values and RGB values from a given color.
     * @param {string} color - Input color.
     * @returns {KupThemeColor} Object of color values: hexColor ("#ffffff"), hslColor ("hsl(255,100%,100%)"), hslValues ("255,100%,100%"), rgbColor ("rgb(255,255,255)") and rgbValues ("255,255,255").
     */
    colorCheck(color: string): KupThemeColor {
        //Testing whether the color is transparent, if it is a fall back value will be returned matching the background-color
        if (color === 'transparent') {
            color = this.cssVars['--kup-background-color'];
            dom.ketchup.debug.logMessage(
                'theme manager',
                'Received TRANSPARENT color, converted to ' +
                    color +
                    ' (theme background).'
            );
        }

        const altRgbRe: RegExp = /R(\d{1,3})G(\d{1,3})B(\d{1,3})/;
        const altRgb: boolean = altRgbRe.test(color);
        if (altRgb) {
            const parts: RegExpMatchArray = color.match(altRgbRe);
            color = 'rgb(' + parts[1] + ',' + parts[2] + ',' + parts[3] + ')';
        }

        let isHex: boolean = color.substring(0, 1) === '#';
        const isHsl: boolean = color.substring(0, 3).toLowerCase() === 'hsl';
        const isRgb: boolean = color.substring(0, 3).toLowerCase() === 'rgb';

        //If true, supposedly it's a code word
        if (!isHex && !isHsl && !isRgb) {
            const oldColor: string = color;
            color = this.codeToHex(color);
            isHex = color.substring(0, 1) === '#' ? true : false;
            dom.ketchup.debug.logMessage(
                'theme manager',
                'Received CODE NAME color ' +
                    oldColor +
                    ', converted to ' +
                    color +
                    '.'
            );
        }

        //Testing whether the color is "hex" value or "hsl"
        let hexColor: string = null;
        let rgbColor: string = null;
        let hslColor: string = null;
        let hslValues: string = null;
        let hue: string = null;
        let lightness: string = null;
        let saturation: string = null;

        if (isHex || isHsl) {
            const oldColor: string = color;
            let rgbColorObj: KupThemeRGBValues = null;
            if (isHex) {
                hexColor = color;
                rgbColorObj = this.hexToRgb(color);
            } else {
                hslColor = color;
                const regexp: RegExp =
                    /hsl\(\s*(\d+)\s*,\s*(\d+(?:\.\d+)?%)\s*,\s*(\d+(?:\.\d+)?%)\)/g;
                const hsl: string[] = regexp.exec(color).slice(1);
                hslValues = hsl[0] + ',' + hsl[1] + ',' + hsl[2];
                hue = hsl[0];
                saturation = hsl[2];
                lightness = hsl[1];
                const h: number = parseInt(hue.replace('deg', ''));
                const s: number = parseInt(saturation.replace('%', '')) / 100;
                const l: number = parseInt(lightness.replace('%', '')) / 100;
                rgbColorObj = this.hslToRgb(h, s, l);
            }
            try {
                color =
                    'rgb(' +
                    rgbColorObj.r +
                    ',' +
                    rgbColorObj.g +
                    ',' +
                    rgbColorObj.b +
                    ')';
                if (isHex) {
                    const hsl: KupThemeHSLValues = this.rgbToHsl(
                        rgbColorObj.r,
                        rgbColorObj.g,
                        rgbColorObj.b
                    );
                    hue = hsl.h.toString();
                    saturation = hsl.s.toString() + '%';
                    lightness = hsl.l.toString() + '%';
                    hslValues = hue + ',' + saturation + ',' + lightness;
                    hslColor = 'hsl(' + hslValues + ')';
                } else {
                    hexColor = this.rgbToHex(
                        rgbColorObj.r,
                        rgbColorObj.g,
                        rgbColorObj.b
                    );
                }
                dom.ketchup.debug.logMessage(
                    'theme-manager',
                    'Received HEX color ' +
                        oldColor +
                        ', converted to ' +
                        color +
                        '.'
                );
            } catch (error) {
                dom.ketchup.debug.logMessage(
                    'theme-manager',
                    'Invalid color: ' + color + '.'
                );
            }
        }

        let rgbValues: string = null;
        const values: RegExpMatchArray = color.match(
            /rgba?\((\d{1,3}), ?(\d{1,3}), ?(\d{1,3})\)?(?:, ?(\d(?:\.\d?))\))?/
        );

        try {
            rgbValues = values[1] + ',' + values[2] + ',' + values[3];
            rgbColor = color;
        } catch (error) {
            dom.ketchup.debug.logMessage(
                'theme-manager',
                'Color not converted to rgb values: ' + color + '.'
            );
        }

        if (!hexColor) {
            try {
                hexColor = this.rgbToHex(
                    parseInt(values[1]),
                    parseInt(values[2]),
                    parseInt(values[3])
                );
            } catch (error) {
                dom.ketchup.debug.logMessage(
                    'theme-manager',
                    'Color not converted to hex value: ' + color + '.'
                );
            }
        }

        if (!hslColor || !hslValues) {
            try {
                const hsl: KupThemeHSLValues = this.rgbToHsl(
                    parseInt(values[1]),
                    parseInt(values[2]),
                    parseInt(values[3])
                );
                hue = hsl.h.toString();
                saturation = hsl.s.toString() + '%';
                lightness = hsl.l.toString() + '%';
                hslValues = hsl.h + ',' + hsl.s + '%,' + hsl.l + '%';
                hslColor = 'hsl(' + hsl.h + ',' + hsl.s + '%,' + hsl.l + '%)';
            } catch (error) {
                dom.ketchup.debug.logMessage(
                    'theme-manager',
                    'Color not converted to hex value: ' + color + '.'
                );
            }
        }

        return {
            hexColor: hexColor,
            hslColor: hslColor,
            hslValues: hslValues,
            hue: hue,
            lightness: lightness,
            saturation: saturation,
            rgbColor: rgbColor,
            rgbValues: rgbValues,
        };
    }
    /**
     * Converts an HEX color to its RGB values.
     * @param {string} hex - Hex code.
     * @returns {KupThemeRGBValues} Object containing RGB values.
     */
    hexToRgb(hex: string): KupThemeRGBValues {
        var result: RegExpExecArray =
            /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
        return result
            ? {
                  r: parseInt(result[1], 16),
                  g: parseInt(result[2], 16),
                  b: parseInt(result[3], 16),
              }
            : null;
    }
    /**
     * Converts an HSL color to its RGB values.
     * @param {number} h - Hue (range [0, 360)).
     * @param {number} s - Saturation (range [0, 1)).
     * @param {number} l - Lightness (range [0, 1)).
     * @returns {Array} RGB values.
     */
    hslToRgb(h: number, s: number, l: number): KupThemeRGBValues {
        if (h == undefined) {
            return { r: 0, g: 0, b: 0 };
        }

        let huePrime: number = h / 60;
        const chroma: number = (1 - Math.abs(2 * l - 1)) * s;
        const secondComponent: number =
            chroma * (1 - Math.abs((huePrime % 2) - 1));

        huePrime = Math.floor(huePrime);
        let red: number, green: number, blue: number;

        if (huePrime === 0) {
            red = chroma;
            green = secondComponent;
            blue = 0;
        } else if (huePrime === 1) {
            red = secondComponent;
            green = chroma;
            blue = 0;
        } else if (huePrime === 2) {
            red = 0;
            green = chroma;
            blue = secondComponent;
        } else if (huePrime === 3) {
            red = 0;
            green = secondComponent;
            blue = chroma;
        } else if (huePrime === 4) {
            red = secondComponent;
            green = 0;
            blue = chroma;
        } else if (huePrime === 5) {
            red = chroma;
            green = 0;
            blue = secondComponent;
        }

        const lightnessAdjustment: number = l - chroma / 2;
        red += lightnessAdjustment;
        green += lightnessAdjustment;
        blue += lightnessAdjustment;
        return {
            r: Math.round(red * 255),
            g: Math.round(green * 255),
            b: Math.round(blue * 255),
        };
    }
    /**
     * Converts a color in RGB format to the corresponding HEX color.
     * @param {number} r - Red channel value.
     * @param {number} g - Green channel value.
     * @param {number} b - Blue channel value.
     * @returns {string} HEX color.
     */
    rgbToHex(r: number, g: number, b: number): string {
        return (
            '#' + this.valueToHex(r) + this.valueToHex(g) + this.valueToHex(b)
        );
    }
    /**
     * Converts a color in RGB format to the corresponding HSL color.
     * @param {number} r - Red channel value.
     * @param {number} g - Green channel value.
     * @param {number} b - Blue channel value.
     * @returns {KupThemeHSLValues} Object containing HSL values.
     */
    rgbToHsl(r: number, g: number, b: number): KupThemeHSLValues {
        // Make r, g, and b fractions of 1
        r /= 255;
        g /= 255;
        b /= 255;

        // Find greatest and smallest channel values
        const cmin: number = Math.min(r, g, b),
            cmax: number = Math.max(r, g, b),
            delta: number = cmax - cmin;
        let h: number = 0,
            s: number = 0,
            l: number = 0;

        // Calculate hue
        // No difference
        if (delta == 0) h = 0;
        // Red is max
        else if (cmax == r) h = ((g - b) / delta) % 6;
        // Green is max
        else if (cmax == g) h = (b - r) / delta + 2;
        // Blue is max
        else h = (r - g) / delta + 4;

        h = Math.round(h * 60);

        // Make negative hues positive behind 360°
        if (h < 0) h += 360;

        // Calculate lightness
        l = (cmax + cmin) / 2;

        // Calculate saturation
        s = delta == 0 ? 0 : delta / (1 - Math.abs(2 * l - 1));

        // Multiply l and s by 100
        s = +(s * 100).toFixed(1);
        l = +(l * 100).toFixed(1);

        return { h: h, s: s, l: l };
    }
    /**
     * Converts a single RGB value to the corresponding HEX value.
     * @param {number} c - Color value.
     * @returns {string} HEX value.
     */
    valueToHex(c: number): string {
        const hex: string = c.toString(16);
        return hex.length == 1 ? '0' + hex : hex;
    }
    /**
     * Converts a color code word to the corresponding HEX value.
     * @param {string} color - Color code word.
     * @returns {string} HEX value.
     */
    codeToHex(color: string): string {
        const colorCodes: GenericObject = {
            aliceblue: '#f0f8ff',
            antiquewhite: '#faebd7',
            aqua: '#00ffff',
            aquamarine: '#7fffd4',
            azure: '#f0ffff',
            beige: '#f5f5dc',
            bisque: '#ffe4c4',
            black: '#000000',
            blanchedalmond: '#ffebcd',
            blue: '#0000ff',
            blueviolet: '#8a2be2',
            brown: '#a52a2a',
            burlywood: '#deb887',
            cadetblue: '#5f9ea0',
            chartreuse: '#7fff00',
            chocolate: '#d2691e',
            coral: '#ff7f50',
            cornflowerblue: '#6495ed',
            cornsilk: '#fff8dc',
            crimson: '#dc143c',
            cyan: '#00ffff',
            darkblue: '#00008b',
            darkcyan: '#008b8b',
            darkgoldenrod: '#b8860b',
            darkgray: '#a9a9a9',
            darkgreen: '#006400',
            darkgrey: '#a9a9a9',
            darkkhaki: '#bdb76b',
            darkmagenta: '#8b008b',
            darkolivegreen: '#556b2f',
            darkorange: '#ff8c00',
            darkorchid: '#9932cc',
            darkred: '#8b0000',
            darksalmon: '#e9967a',
            darkseagreen: '#8fbc8f',
            darkslateblue: '#483d8b',
            darkslategray: '#2f4f4f',
            darkslategrey: '#2f4f4f',
            darkturquoise: '#00ced1',
            darkviolet: '#9400d3',
            deeppink: '#ff1493',
            deepskyblue: '#00bfff',
            dimgray: '#696969',
            dimgrey: '#696969',
            dodgerblue: '#1e90ff',
            firebrick: '#b22222',
            floralwhite: '#fffaf0',
            forestgreen: '#228b22',
            fuchsia: '#ff00ff',
            gainsboro: '#dcdcdc',
            ghostwhite: '#f8f8ff',
            goldenrod: '#daa520',
            gold: '#ffd700',
            gray: '#808080',
            green: '#008000',
            greenyellow: '#adff2f',
            grey: '#808080',
            honeydew: '#f0fff0',
            hotpink: '#ff69b4',
            indianred: '#cd5c5c',
            indigo: '#4b0082',
            ivory: '#fffff0',
            khaki: '#f0e68c',
            lavenderblush: '#fff0f5',
            lavender: '#e6e6fa',
            lawngreen: '#7cfc00',
            lemonchiffon: '#fffacd',
            lightblue: '#add8e6',
            lightcoral: '#f08080',
            lightcyan: '#e0ffff',
            lightgoldenrodyellow: '#fafad2',
            lightgray: '#d3d3d3',
            lightgreen: '#90ee90',
            lightgrey: '#d3d3d3',
            lightpink: '#ffb6c1',
            lightsalmon: '#ffa07a',
            lightseagreen: '#20b2aa',
            lightskyblue: '#87cefa',
            lightslategray: '#778899',
            lightslategrey: '#778899',
            lightsteelblue: '#b0c4de',
            lightyellow: '#ffffe0',
            lime: '#00ff00',
            limegreen: '#32cd32',
            linen: '#faf0e6',
            magenta: '#ff00ff',
            maroon: '#800000',
            mediumaquamarine: '#66cdaa',
            mediumblue: '#0000cd',
            mediumorchid: '#ba55d3',
            mediumpurple: '#9370db',
            mediumseagreen: '#3cb371',
            mediumslateblue: '#7b68ee',
            mediumspringgreen: '#00fa9a',
            mediumturquoise: '#48d1cc',
            mediumvioletred: '#c71585',
            midnightblue: '#191970',
            mintcream: '#f5fffa',
            mistyrose: '#ffe4e1',
            moccasin: '#ffe4b5',
            navajowhite: '#ffdead',
            navy: '#000080',
            oldlace: '#fdf5e6',
            olive: '#808000',
            olivedrab: '#6b8e23',
            orange: '#ffa500',
            orangered: '#ff4500',
            orchid: '#da70d6',
            palegoldenrod: '#eee8aa',
            palegreen: '#98fb98',
            paleturquoise: '#afeeee',
            palevioletred: '#db7093',
            papayawhip: '#ffefd5',
            peachpuff: '#ffdab9',
            peru: '#cd853f',
            pink: '#ffc0cb',
            plum: '#dda0dd',
            powderblue: '#b0e0e6',
            purple: '#800080',
            rebeccapurple: '#663399',
            red: '#ff0000',
            rosybrown: '#bc8f8f',
            royalblue: '#4169e1',
            saddlebrown: '#8b4513',
            salmon: '#fa8072',
            sandybrown: '#f4a460',
            seagreen: '#2e8b57',
            seashell: '#fff5ee',
            sienna: '#a0522d',
            silver: '#c0c0c0',
            skyblue: '#87ceeb',
            slateblue: '#6a5acd',
            slategray: '#708090',
            slategrey: '#708090',
            snow: '#fffafa',
            springgreen: '#00ff7f',
            steelblue: '#4682b4',
            tan: '#d2b48c',
            teal: '#008080',
            thistle: '#d8bfd8',
            tomato: '#ff6347',
            turquoise: '#40e0d0',
            violet: '#ee82ee',
            wheat: '#f5deb3',
            white: '#ffffff',
            whitesmoke: '#f5f5f5',
            yellow: '#ffff00',
            yellowgreen: '#9acd32',
        };
        if (colorCodes[color.toLowerCase()]) {
            return colorCodes[color.toLowerCase()];
        } else {
            dom.ketchup.debug.logMessage(
                'theme manager',
                'Could not decode color ' + color + '!'
            );
            return color;
        }
    }
}
