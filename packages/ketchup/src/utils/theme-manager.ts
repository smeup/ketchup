import { getAssetPath } from '@stencil/core';
import { KupDebug } from './kup-debug/kup-debug';
import * as themesJson from './themes.json';

declare global {
    interface HTMLElement {
        'kup-theme': any;
        kupCurrentTheme: any;
        kupCustomStyles: any;
        kupRefreshTheme: any;
        kupThemes: any;
    }
}

const dom: HTMLElement = document.documentElement;
const kupDebug: KupDebug = new KupDebug();
/**
 * Initializes Ketch.UP theme.
 */
function initThemes(): void {
    if (dom.kupCurrentTheme) {
        //In case multiple initializing instances are launched
        return;
    }
    if (!dom.kupThemes) {
        //TODO: not sure why themesJson is imported with a "default" prop containing itself...need to investigate, meanwhile set kupThemes to "default" prop
        dom['kupThemes'] = themesJson['default'];
    } else {
        let message =
            'Ketchup themes were already set by a third party application.';
        kupDebug.logMessage('theme manager', message);
    }
    if (!dom.getAttribute('kup-theme')) {
        dom.setAttribute('kup-theme', 'ketchup');
    }
    if (!dom.kupRefreshTheme) {
        dom.kupRefreshTheme = () => {
            try {
                setupCssVariables();
                setupIcons();
                setupCustomStyle();

                let message =
                    'Theme ' + dom.getAttribute('kup-theme') + ' refreshed.';
                kupDebug.logMessage('theme manager', message);
                let event = new CustomEvent('kupThemeRefresh');
                document.dispatchEvent(event);
            } catch (error) {
                let message = 'Theme not refreshed.';
                kupDebug.logMessage('theme manager', message, 'warning');
            }
        };
    }
    dom.kupCustomStyles = [];
    setTheme();

    const observer = new MutationObserver(function () {
        setTheme();
    });
    let container = dom || document.body;
    observer.observe(container, {
        attributes: true,
        attributeFilter: ['kup-theme'],
    });
}
/**
 * Sets the theme using the value of "kup-theme" attribute on document.documentElement.
 */
function setTheme(): void {
    let message = '';
    let themeValue = dom.getAttribute('kup-theme');
    message = 'Setting theme to: ' + themeValue + '.';
    kupDebug.logMessage('theme manager', message);

    dom.kupCurrentTheme = dom.kupThemes[themeValue];
    if (!dom.kupCurrentTheme) {
        message = 'Invalid theme name, falling back to default ("ketchup").';
        kupDebug.logMessage('theme manager', message);
        dom.kupCurrentTheme = dom.kupThemes['ketchup'];
    }

    setupCssVariables();
    setupIcons();
    setupCustomStyle();

    var event = new CustomEvent('kupThemeChange');
    document.dispatchEvent(event);
}
/**
 * Sets the CSS variables of the theme.
 */
function setupCssVariables(): void {
    let variables = dom.kupCurrentTheme.cssVariables;
    let rgbVariables: [{ rgbKey: string; rgbVal: string }] = undefined;
    for (var key in variables) {
        if (variables.hasOwnProperty(key)) {
            var val = variables[key];
            if (key.indexOf('color') > -1) {
                let rgbKey = key + '-rgb';
                let rgbVal = colorCheck(val).rgbValues;
                if (rgbVariables) {
                    rgbVariables.push({ rgbVal: rgbVal, rgbKey: rgbKey });
                } else {
                    rgbVariables = [{ rgbKey: rgbKey, rgbVal: rgbVal }];
                }
            }
            dom.style.setProperty(key, val);
        }
    }
    if (rgbVariables) {
        for (let index = 0; index < rgbVariables.length; index++) {
            dom.style.setProperty(
                rgbVariables[index].rgbKey,
                rgbVariables[index].rgbVal
            );
        }
    }
}
/**
 * Sets the customStyle of the theme on existing components.
 */
function setupCustomStyle(): void {
    let components: any = dom.kupCustomStyles;
    for (let i = 0; i < components.length; i++) {
        if (components[i].isConnected) {
            components[i].refreshCustomStyle(
                fetchThemeCustomStyle(components[i].tagName)
            );
        }
    }
}
/**
 * Sets the icon variables of the theme.
 */
function setupIcons(): void {
    let icons = dom.kupCurrentTheme.icons;
    for (var key in icons) {
        if (icons.hasOwnProperty(key)) {
            let val = `url('${getAssetPath(
                `./assets/svg/${icons[key]}.svg`
            )}') no-repeat center`;
            dom.style.setProperty(key, val);
        }
    }
}
/**
 * Sets the customStyleTheme property on the component, which contains the combination of "MASTER" and component-specific styles of the current theme.
 *
 * @param {string} component - The component's tagName.
 * @returns {string} Complete custom CSS of the component.
 */
export function fetchThemeCustomStyle(component: string): string {
    let styles = dom.kupCurrentTheme.customStyles;
    if (!styles) {
        return '';
    }
    let completeStyle: string = '';

    if (styles['MASTER']) {
        completeStyle += styles['MASTER'];
    }

    if (styles[component]) {
        completeStyle += ' ' + styles[component];
    }

    return completeStyle + ' ';
}
/**
 * Called by every component having a customStyle prop, invokes theme's initialization when no current theme is detected and calls fetchThemeCustomStyle which return the complete CSS of the component
 *
 * @param component - The component calling this function.
 */
export function setThemeCustomStyle(component: any): void {
    if (!dom.kupCurrentTheme) {
        initThemes();
    }
    dom.kupCustomStyles.push(component.rootElement);
    component.customStyleTheme = fetchThemeCustomStyle(
        component.rootElement.tagName
    );
}
/**
 * Combines the component's customStyle and customStyleTheme properties, returning the result.
 *
 * @param component - The component calling this function.
 */
export function setCustomStyle(component: any) {
    if (component.customStyleTheme) {
        if (component.customStyle) {
            return component.customStyleTheme + '' + component.customStyle;
        } else {
            return component.customStyleTheme;
        }
    } else if (component.customStyle) {
        return component.customStyle;
    } else {
        return '';
    }
}
/**
 * Checks whether on a given color the text should be white or black.
 *
 * @param {string} color - Color used to check the contrast.
 * @returns {string} "white" or "black".
 */
export function colorContrast(color: string): string {
    color = colorCheck(color).rgbColor;
    const colorValues = color.replace(/[^\d,.]/g, '').split(',');
    const brightness = Math.round(
        (parseInt(colorValues[0]) * 299 +
            parseInt(colorValues[1]) * 587 +
            parseInt(colorValues[2]) * 114) /
            1000
    );
    const textColor = brightness > 125 ? 'black' : 'white';
    return textColor;
}
/**
 * Generates a random HEX color.
 *
 * @param {number} brightness - Brightness of the color generated (0-255).
 * @returns {string} Random HEX color.
 */
export function randomColor(brightness: number): string {
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
 * Returns HEX, RGB and RGB values from a given color.
 *
 * @param {string} color - Color.
 * @returns {{string, string, string}} Object of color values: hexColor ("#ffffff"), rgbColor ("rgb(255,255,255)"") and rgbValues ("255,255,255").
 */
export function colorCheck(
    color: string
): { hexColor: string; rgbColor: string; rgbValues: string } {
    //Testing whether the color is transparent, if it is a fall back value will be returned matching the background-color
    if (color === 'transparent') {
        color = dom.kupCurrentTheme.cssVariables['--kup-background-color'];
        kupDebug.logMessage(
            'theme manager',
            'Received TRANSPARENT color, converted to ' +
                color +
                ' (theme background).'
        );
    }

    //Testing whether the color isn't "rgb" nor "hex" value, supposedly is a code word
    if (color.substr(0, 1) !== '#' && color.substr(0, 3) !== 'rgb') {
        let oldColor = color;
        color = codeToHex(color);
        kupDebug.logMessage(
            'theme manager',
            'Received CODE NAME color ' +
                oldColor +
                ', converted to ' +
                color +
                '.'
        );
    }

    //Testing whether the color is "hex" value
    let hexColor: string = undefined;
    if (color.substr(0, 1) === '#') {
        hexColor = color;
        let oldColor = color;
        let rgbColor = hexToRgb(color);
        try {
            color =
                'rgb(' + rgbColor.r + ',' + rgbColor.g + ',' + rgbColor.b + ')';
            kupDebug.logMessage(
                'theme manager',
                'Received HEX color ' +
                    oldColor +
                    ', converted to ' +
                    color +
                    '.'
            );
        } catch (error) {
            kupDebug.logMessage(
                'theme-manager',
                'Invalid color: ' + color + '.'
            );
        }
    }

    let rgbValues: string = undefined;
    var values = color.match(
        /rgba?\((\d{1,3}), ?(\d{1,3}), ?(\d{1,3})\)?(?:, ?(\d(?:\.\d?))\))?/
    );

    try {
        rgbValues = values[1] + ',' + values[2] + ',' + values[3];
    } catch (error) {
        kupDebug.logMessage(
            'theme-manager',
            'Color not converted to rgb values: ' + color + '.'
        );
    }

    if (!hexColor) {
        try {
            hexColor = rgbToHex(
                parseInt(values[1]),
                parseInt(values[2]),
                parseInt(values[3])
            );
        } catch (error) {
            kupDebug.logMessage(
                'theme-manager',
                'Color not converted to hex value: ' + color + '.'
            );
        }
    }

    return { hexColor: hexColor, rgbColor: color, rgbValues: rgbValues };
}
/**
 * Converts an HEX color to its RGB values.
 *
 * @param {string} hex - Hex code.
 * @returns {{number, number, number}} Object of color values: hexColor ("#ffffff"), rgbColor ("rgb(255,255,255)"") and rgbValues ("255,255,255").
 */
export function hexToRgb(hex: string): { r: number; g: number; b: number } {
    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result
        ? {
              r: parseInt(result[1], 16),
              g: parseInt(result[2], 16),
              b: parseInt(result[3], 16),
          }
        : null;
}
/**
 * Converts a color in RGB format to the corresponding HEX color.
 *
 * @param {number} r - Red channel value.
 * @param {number} g - Green channel value.
 * @param {number} b - Blue channel value.
 * @returns {string} HEX color.
 */
export function rgbToHex(r: number, g: number, b: number): string {
    return '#' + componentToHex(r) + componentToHex(g) + componentToHex(b);
}
/**
 * Converts a single RGB value to the corresponding HEX value.
 *
 * @param {number} c - Color value.
 * @returns {string} HEX value.
 */
function componentToHex(c: number): string {
    var hex = c.toString(16);
    return hex.length == 1 ? '0' + hex : hex;
}
/**
 * Converts a color code word to the corresponding HEX value.
 *
 * @param {string} color - Color code word.
 * @returns {string} HEX value.
 */
export function codeToHex(color: string): string {
    const colorCodes = {
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
        kupDebug.logMessage(
            'theme manager',
            'Could not decode color ' + color + '!'
        );
        return color;
    }
}
