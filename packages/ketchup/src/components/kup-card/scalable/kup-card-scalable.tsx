import { h, VNode } from '@stencil/core';
import type { KupCard } from '../kup-card';
import type { KupDom } from '../../../managers/kup-manager/kup-manager-declarations';
import { FImage } from '../../../f-components/f-image/f-image';
import { GenericObject } from '../../../types/GenericTypes';
import { KupThemeColorValues } from '../../../managers/kup-theme/kup-theme-declarations';
import { FButton } from '../../../f-components/f-button/f-button';

const dom: KupDom = document.documentElement as KupDom;

/**
 * 1st scalable card layout, column of 2 texts.
 * @param {KupCard} component - Card component.
 * @returns {VNode} 1st scalable layout virtual node.
 */
export function create1(component: KupCard): VNode {
    //Title, subtitle
    let textIndex: number = 0;
    const textArray: string[] = component.data['text']
        ? component.data['text']
        : [];
    //Dynamic CSS variables
    let CSSVariables = {
        ['--kup_card_multiplier']: '1',
    };
    return (
        <div
            class={`scalable-layout-${component.layoutNumber} scalable-card`}
            style={CSSVariables}
        >
            <div class="scalable-element">
                <div class="descr">
                    <div>
                        {textArray[textIndex] ? textArray[textIndex] : ''}
                    </div>
                </div>
                <div class="value">
                    <div>
                        {textArray[++textIndex] ? textArray[textIndex] : ''}
                    </div>
                </div>
            </div>
        </div>
    );
}
/**
 * 2nd scalable card layout, used to display numerical values.
 * @param {KupCard} component - Card component.
 * @returns {VNode} 2nd scalable layout virtual node.
 */
export function create2(component: KupCard): VNode {
    //Image color
    const colorArray: string[] = component.data['color']
        ? component.data['color']
        : [];
    //Icon
    const imageArray: GenericObject[] = component.data['image']
        ? component.data['image']
        : [];
    //Value, decimal value, measurement unit
    let textIndex: number = 0;
    const textArray: string[] = component.data['text']
        ? component.data['text']
        : [];
    //Dynamic CSS variables
    let CSSVariables = {
        ['--kup_card_multiplier']: '1',
    };
    return (
        <div
            class={`scalable-layout-${component.layoutNumber} scalable-card`}
            style={CSSVariables}
        >
            <div class="scalable-element">
                <div class="icon">
                    {imageArray[0] ? (
                        <FImage
                            color={
                                colorArray[0]
                                    ? colorArray[0]
                                    : `var(${KupThemeColorValues.PRIMARY})`
                            }
                            id="image1"
                            {...imageArray[0]}
                            sizeX="1.25em"
                            sizeY="1.25em"
                        ></FImage>
                    ) : null}
                </div>
                <div class="value-int">
                    <div>
                        {textArray[textIndex] ? textArray[textIndex] : ''},
                    </div>
                </div>
                <div class="value-dec">
                    <div>
                        {textArray[++textIndex] ? textArray[textIndex] : ''}
                    </div>
                </div>
                <div class="unit">
                    <div>
                        {textArray[++textIndex] ? textArray[textIndex] : ''}
                    </div>
                </div>
            </div>
        </div>
    );
}
/**
 * 3rd scalable card layout, column of 2 texts.
 * @param {KupCard} component - Card component.
 * @returns {VNode} 3rd scalable layout virtual node.
 */
export function create3(component: KupCard): VNode {
    //Title, subtitle
    let textIndex: number = 0;
    const textArray: string[] = component.data['text']
        ? component.data['text']
        : [];
    //Dynamic CSS variables
    let CSSVariables = {
        ['--kup_card_multiplier']: '1',
    };
    return (
        <div
            class={`scalable-layout-${component.layoutNumber} scalable-card`}
            style={CSSVariables}
        >
            <div class="scalable-element">
                <div class="value">
                    <div>
                        {textArray[textIndex] ? textArray[textIndex] : ''}
                    </div>
                </div>
                <div class="descr">
                    <div>
                        {textArray[++textIndex] ? textArray[textIndex] : ''}
                    </div>
                </div>
            </div>
        </div>
    );
}
/**
 * 4th scalable card layout, used to display numerical values with subtitle.
 * @param {KupCard} component - Card component.
 * @returns {VNode} 4th scalable layout virtual node.
 */
export function create4(component: KupCard): VNode {
    //Image color
    const colorArray: string[] = component.data['color']
        ? component.data['color']
        : [];
    //Icon
    const imageArray: GenericObject[] = component.data['image']
        ? component.data['image']
        : [];
    //Value, decimal value, measurement unit, subtitle
    let textIndex: number = 0;
    const textArray: string[] = component.data['text']
        ? component.data['text']
        : [];
    //Dynamic CSS variables
    let CSSVariables = {
        [`--color-0`]: colorArray[0]
            ? colorArray[0]
            : `var(${KupThemeColorValues.PRIMARY})`,
        ['--kup_card_multiplier']: '1',
    };
    return (
        <div
            class={`scalable-layout-${component.layoutNumber} scalable-card`}
            style={CSSVariables}
        >
            <div class="scalable-element">
                <div class="icon">
                    {imageArray[0] ? (
                        <FImage
                            color={
                                colorArray[0]
                                    ? colorArray[0]
                                    : `var(${KupThemeColorValues.PRIMARY})`
                            }
                            id="image1"
                            {...imageArray[0]}
                            sizeX="1.25em"
                            sizeY="1.25em"
                        ></FImage>
                    ) : null}
                </div>
                <div class="value-and-unit">
                    <div class="value-int">
                        <div>
                            {textArray[textIndex] ? textArray[textIndex] : ''},
                        </div>
                    </div>
                    <div class="value-dec">
                        <div>
                            {textArray[++textIndex] ? textArray[textIndex] : ''}
                        </div>
                    </div>
                    <div class="unit">
                        <div>
                            {textArray[++textIndex] ? textArray[textIndex] : ''}
                        </div>
                    </div>
                </div>
                <div class="empty-placeholder"></div>
                <div class="descr">
                    <div>
                        {textArray[++textIndex] ? textArray[textIndex] : ''}
                    </div>
                </div>
            </div>
        </div>
    );
}
/**
 * 5th scalable card layout, icon with title and subtitle.
 * @param {KupCard} component - Card component.
 * @returns {VNode} 5th scalable layout virtual node.
 */
export function create5(component: KupCard): VNode {
    //Image color
    const colorArray: string[] = component.data['color']
        ? component.data['color']
        : [];
    //Icon
    const imageArray: GenericObject[] = component.data['image']
        ? component.data['image']
        : [];
    //Title, subtitle
    let textIndex: number = 0;
    const textArray: string[] = component.data['text']
        ? component.data['text']
        : [];
    //Dynamic CSS variables
    let CSSVariables = {
        ['--kup_card_multiplier']: '1',
    };
    return (
        <div
            class={`scalable-layout-${component.layoutNumber} scalable-card`}
            style={CSSVariables}
        >
            <div class="scalable-element">
                <div class="text-wrapper">
                    <div class="descr">
                        <div>
                            {textArray[textIndex] ? textArray[textIndex] : ''}
                        </div>
                    </div>

                    <div class="value">
                        <div>
                            {textArray[++textIndex] ? textArray[textIndex] : ''}
                        </div>
                    </div>
                </div>
                <div class="icon">
                    {imageArray[0] ? (
                        <FImage
                            color={
                                colorArray[0]
                                    ? colorArray[0]
                                    : `var(${KupThemeColorValues.PRIMARY})`
                            }
                            id="image1"
                            {...imageArray[0]}
                            sizeX="1em"
                            sizeY="1em"
                        ></FImage>
                    ) : null}
                </div>
            </div>
        </div>
    );
}
/**
 * 6th scalable card layout, icon with title and subtitle.
 * @param {KupCard} component - Card component.
 * @returns {VNode} 6th scalable layout virtual node.
 */
export function create6(component: KupCard): VNode {
    //Image color
    const colorArray: string[] = component.data['color']
        ? component.data['color']
        : [];
    //Icon
    const imageArray: GenericObject[] = component.data['image']
        ? component.data['image']
        : [];
    //Title, subtitle
    let textIndex: number = 0;
    const textArray: string[] = component.data['text']
        ? component.data['text']
        : [];
    //Dynamic CSS variables
    let CSSVariables = {
        ['--kup_card_multiplier']: '1',
    };
    return (
        <div
            class={`scalable-layout-${component.layoutNumber} scalable-card`}
            style={CSSVariables}
        >
            <div class="scalable-element">
                <div class="icon">
                    {imageArray[0] ? (
                        <FImage
                            color={
                                colorArray[0]
                                    ? colorArray[0]
                                    : `var(${KupThemeColorValues.PRIMARY})`
                            }
                            id="image1"
                            {...imageArray[0]}
                            sizeX="1em"
                            sizeY="1em"
                        ></FImage>
                    ) : null}
                </div>

                <div class="text-wrapper">
                    <div class="value">
                        <div>
                            {textArray[textIndex] ? textArray[textIndex] : ''}
                        </div>
                    </div>
                    <div class="descr">
                        <div>
                            {textArray[++textIndex] ? textArray[textIndex] : ''}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
/**
 * 7th scalable card layout, icon with title and subtitle.
 * @param {KupCard} component - Card component.
 * @returns {VNode} 7th scalable layout virtual node.
 */
export function create7(component: KupCard): VNode {
    //Image color
    const colorArray: string[] = component.data['color']
        ? component.data['color']
        : [];
    //Icon
    const imageArray: GenericObject[] = component.data['image']
        ? component.data['image']
        : [];
    //Title, subtitle
    let textIndex: number = 0;
    const textArray: string[] = component.data['text']
        ? component.data['text']
        : [];
    //Dynamic CSS variables
    let CSSVariables = {
        ['--kup_card_multiplier']: '1',
    };
    return (
        <div
            class={`scalable-layout-${component.layoutNumber} scalable-card`}
            style={CSSVariables}
        >
            <div class="scalable-element">
                <div class="text-wrapper">
                    <div class="value">
                        <div>
                            {textArray[textIndex] ? textArray[textIndex] : ''}
                        </div>
                    </div>

                    <div class="descr">
                        <div>
                            {textArray[++textIndex] ? textArray[textIndex] : ''}
                        </div>
                    </div>
                </div>
                <div class="icon">
                    {imageArray[0] ? (
                        <FImage
                            color={
                                colorArray[0]
                                    ? colorArray[0]
                                    : `var(${KupThemeColorValues.PRIMARY})`
                            }
                            id="image1"
                            {...imageArray[0]}
                            sizeX="1em"
                            sizeY="1em"
                        ></FImage>
                    ) : null}
                </div>
            </div>
        </div>
    );
}
/**
 * 8th scalable card layout, icon with title and subtitle.
 * @param {KupCard} component - Card component.
 * @returns {VNode} 8th scalable layout virtual node.
 */
export function create8(component: KupCard): VNode {
    //Image color
    const colorArray: string[] = component.data['color']
        ? component.data['color']
        : [];
    //Icon
    const imageArray: GenericObject[] = component.data['image']
        ? component.data['image']
        : [];
    //Title, subtitle
    let textIndex: number = 0;
    const textArray: string[] = component.data['text']
        ? component.data['text']
        : [];
    //Dynamic CSS variables
    let CSSVariables = {
        ['--kup_card_multiplier']: '1',
    };
    return (
        <div
            class={`scalable-layout-${component.layoutNumber} scalable-card`}
            style={CSSVariables}
        >
            <div class="scalable-element">
                <div class="icon">
                    {imageArray[0] ? (
                        <FImage
                            color={
                                colorArray[0]
                                    ? colorArray[0]
                                    : `var(${KupThemeColorValues.PRIMARY})`
                            }
                            id="image1"
                            {...imageArray[0]}
                            sizeX="1em"
                            sizeY="1em"
                        ></FImage>
                    ) : null}
                </div>
                <div class="value">
                    <div>
                        {textArray[textIndex] ? textArray[textIndex] : ''}
                    </div>
                </div>
                <div class="descr">
                    <div>
                        {textArray[++textIndex] ? textArray[textIndex] : ''}
                    </div>
                </div>
            </div>
        </div>
    );
}

/**
 * 9th scalable card layout, tile view.
 * @param {KupCard} component - Card component.
 * @returns {VNode} 8th scalable layout virtual node.
 */
export function create9(component: KupCard): VNode {
    // color line
    const lineBg =
        component.data.color && component.data.color.length > 0
            ? component.data.color[0]
            : `var(${KupThemeColorValues.PRIMARY})`;
    // color component
    const componentBg =
        component.data.color && component.data.color.length > 1
            ? component.data.color[1]
            : `var(${KupThemeColorValues.BACKGROUND})`;
    // color text
    const textFg =
        component.data.color && component.data.color.length > 2
            ? component.data.color[2]
            : `var(${KupThemeColorValues.TEXT})`;
    // Main text
    const mainText =
        component.data.text && component.data.text.length > 0
            ? component.data.text[0]
            : null;
    // Sub text
    const subText =
        component.data.text && component.data.text.length > 1
            ? component.data.text[1]
            : null;
    // Buttons area
    const buttons =
        component.data.button && component.data.button.length > 0
            ? (JSON.parse(JSON.stringify(component.data.button)) as [])
            : [];
    // Only 4 buttons supported
    if (buttons.length > 4) {
        buttons.splice(4, buttons.length - 4);
    }
    buttons.reverse();

    //Dynamic CSS variables
    const CSSVariables: GenericObject = {
        ['--color-0']: lineBg,
        ['--color-1']: componentBg,
        ['--color-2']: textFg,
    };
    const CSSVariablesChild: GenericObject = {
        ['--kup_card_multiplier']: '1',
        ['box-shadow']: 'none',
    };
    return (
        <div
            class={`scalable-layout-${component.layoutNumber}`}
            style={CSSVariables}
        >
            <div class="section-1"></div>
            <div class="section-2">
                <div class="scalable-card" style={CSSVariablesChild}>
                    <div class="text scalable-element">
                        <div class="value">{mainText}</div>
                        <div class="descr">{subText}</div>
                    </div>
                </div>
                {buttons.length > 0 ? (
                    <div class="buttons">
                        {buttons.map((b) => (
                            <FButton
                                icon={b.icon}
                                title={b.title}
                                styling={b.styling}
                                wrapperClass={b.class}
                                onClick={() =>
                                    component.onKupClick(
                                        component.rootElement.id,
                                        b.id
                                    )
                                }
                            />
                        ))}
                    </div>
                ) : undefined}
            </div>
        </div>
    );
}
