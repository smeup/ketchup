import { h, VNode } from '@stencil/core';
import type { KupCard } from '../kup-card';
import type { GenericObject } from '../../../types/GenericTypes';
import { FImage } from '../../../f-components/f-image/f-image';
import { compList } from '../kup-card-helper';
/**
 * 1st standard card layout, inspired by Material Design.
 * @param {KupCard}  comp - Card component.
 * @returns {VNode} 1st standard layout virtual node.
 */
export function create1(component: KupCard): VNode {
    //Action buttons
    const buttonArray: GenericObject[] = component.data['button']
        ? component.data['button']
        : [];
    //Cover image
    const imageArray: GenericObject[] = component.data['image']
        ? component.data['image']
        : [];
    //Title, subtitle and description
    let textIndex: number = 0;
    const textArray: string[] = component.data['text']
        ? component.data['text']
        : [];
    return (
        <div
            class={`standard-layout-${component.layoutNumber} ${
                buttonArray.length > 0 ? 'has-actions' : ''
            }`}
        >
            <div class="mdc-ripple-surface">
                {imageArray[0] ? (
                    <div class="section-1">
                        <FImage
                            id="image1"
                            {...imageArray[0]}
                            sizeX="100%"
                            sizeY="100%"
                        ></FImage>
                    </div>
                ) : null}
                <div class="section-2">
                    {textArray[textIndex] ? (
                        <div class="sub-2 title">
                            <div>{textArray[textIndex]}</div>
                        </div>
                    ) : null}
                    {textArray[++textIndex] ? (
                        <div class="sub-2 subtitle">
                            <div>{textArray[textIndex]}</div>
                        </div>
                    ) : null}
                    {textArray[++textIndex] ? (
                        <div class="sub-2 description">
                            <div>{textArray[textIndex]}</div>
                        </div>
                    ) : null}
                </div>
            </div>
            {buttonArray.length > 0 ? (
                <div class="section-3">{compList(buttonArray, 'button')}</div>
            ) : null}
        </div>
    );
}
/**
 * 2nd standard card layout, inspired by Material Design.
 * @param {KupCard}  comp - Card component.
 * @returns {VNode} 2nd standard layout virtual node.
 */
export function create2(component: KupCard): VNode {
    //Action buttons
    const buttonArray: GenericObject[] = component.data['button']
        ? component.data['button']
        : [];
    //Cover image
    const imageArray: GenericObject[] = component.data['image']
        ? component.data['image']
        : [];
    //Title, subtitle and description
    let textIndex: number = 0;
    const textArray: string[] = component.data['text']
        ? component.data['text']
        : [];
    return (
        <div
            class={`standard-layout-${component.layoutNumber} ${
                buttonArray.length > 0 ? 'has-actions' : ''
            }`}
        >
            <div class="section-1">
                {textArray[textIndex] ? (
                    <div class="sub-1 title">
                        <div>{textArray[textIndex]}</div>
                    </div>
                ) : null}
                {textArray[++textIndex] ? (
                    <div class="sub-1 subtitle">
                        <div>{textArray[textIndex]}</div>
                    </div>
                ) : null}
            </div>
            <div class="mdc-ripple-surface">
                {imageArray[0] ? (
                    <div class="section-2">
                        <FImage
                            id="image1"
                            {...imageArray[0]}
                            sizeX="100%"
                            sizeY="100%"
                        ></FImage>
                    </div>
                ) : null}
                <div class="section-3">
                    {textArray[++textIndex] ? (
                        <div class="sub-3 description">
                            <div>{textArray[textIndex]}</div>
                        </div>
                    ) : null}
                </div>
            </div>
            {buttonArray.length > 0 ? (
                <div class="section-4">{compList(buttonArray, 'button')}</div>
            ) : null}
        </div>
    );
}
/**
 * 3rd standard card layout, inspired by Material Design.
 * @param {KupCard}  comp - Card component.
 * @returns {VNode} 3rd standard layout virtual node.
 */
export function create3(component: KupCard): VNode {
    //Action buttons
    const buttonArray: GenericObject[] = component.data['button']
        ? component.data['button']
        : [];
    //Cover image
    const imageArray: GenericObject[] = component.data['image']
        ? component.data['image']
        : [];
    //Title, subtitle and description
    let textIndex: number = 0;
    const textArray: string[] = component.data['text']
        ? component.data['text']
        : [];
    return (
        <div
            class={`standard-layout-${component.layoutNumber} ${
                buttonArray ? 'has-actions' : ''
            }`}
        >
            <div class="mdc-ripple-surface">
                <div class="section-1">
                    <div class="media">
                        {imageArray[0] ? (
                            <FImage
                                id="image1"
                                {...imageArray[0]}
                                sizeX="100%"
                                sizeY="100%"
                            ></FImage>
                        ) : null}
                        <div class="text-on-media">
                            {textArray[textIndex] ? (
                                <div class="sub-1 title">
                                    <div>{textArray[textIndex]}</div>
                                </div>
                            ) : null}
                            {textArray[++textIndex] ? (
                                <div class="sub-1 subtitle">
                                    <div>{textArray[textIndex]}</div>
                                </div>
                            ) : null}
                        </div>
                    </div>
                </div>
                <div class="section-2">
                    {textArray[++textIndex] ? (
                        <div class="sub-2 description">
                            <div>{textArray[textIndex]}</div>
                        </div>
                    ) : null}
                </div>
            </div>
            {buttonArray.length > 0 ? (
                <div class="section-3">{compList(buttonArray, 'button')}</div>
            ) : null}
        </div>
    );
}
/**
 * 4th standard card layout, inspired by Material Design.
 * @param {KupCard}  comp - Card component.
 * @returns {VNode} 4th standard layout virtual node.
 */
export function create4(component: KupCard): VNode {
    //Action buttons
    const buttonArray: GenericObject[] = component.data['button']
        ? component.data['button']
        : [];
    //Left image
    const imageArray: GenericObject[] = component.data['image']
        ? component.data['image']
        : [];
    //Title, subtitle
    let textIndex: number = 0;
    const textArray: string[] = component.data['text']
        ? component.data['text']
        : [];
    return (
        <div
            class={`standard-layout-${component.layoutNumber} ${
                buttonArray ? 'has-actions' : ''
            }`}
        >
            <div class="mdc-ripple-surface">
                <div class="section-1">
                    {imageArray[0] ? (
                        <div class="sub-1 image">
                            <FImage
                                id="image1"
                                {...imageArray[0]}
                                sizeX="100%"
                                sizeY="100%"
                            ></FImage>
                        </div>
                    ) : null}
                    <div class="text">
                        {textArray[textIndex] ? (
                            <div class="sub-1 title">
                                <div>{textArray[textIndex]}</div>
                            </div>
                        ) : null}
                        {textArray[++textIndex] ? (
                            <div class="sub-1 subtitle">
                                <div>{textArray[textIndex]}</div>
                            </div>
                        ) : null}
                    </div>
                </div>
            </div>
            <div class="section-2">
                {buttonArray ? compList(buttonArray, 'button') : ''}
            </div>
        </div>
    );
}
/**
 * 5th standard card layout, useful to display TODOs with extensive information.
 * @param {KupCard}  comp - Card component.
 * @returns {VNode} 5th standard layout virtual node.
 */
export function create5(component: KupCard): VNode {
    //Action button
    const buttonArray: GenericObject[] = component.data['button']
        ? component.data['button']
        : [];
    //Top and bottom bars colors
    let colorIndex: number = 0;
    const colorArray: string[] = component.data['color']
        ? component.data['color']
        : [];
    //Left icon and right image
    let imageIndex: number = 0;
    const imageArray: GenericObject[] = component.data['image']
        ? component.data['image']
        : [];
    //Progress bar
    const progressbarArray: GenericObject[] = component.data['progressbar']
        ? component.data['progressbar']
        : [];
    //6 text slots
    let textIndex: number = 0;
    const textArray: string[] = component.data['text']
        ? component.data['text']
        : [];
    //Dynamic CSS variables
    let CSSVariables: GenericObject = {
        [`--color-0`]: colorArray[colorIndex]
            ? colorArray[colorIndex]
            : 'var(--kup-primary-color)',
        [`--color-1`]: colorArray[++colorIndex]
            ? colorArray[colorIndex]
            : 'rgba(var(--kup-text-color-rgb),0.1)',
    };
    return (
        <div
            class={`standard-layout-${component.layoutNumber}`}
            style={CSSVariables}
        >
            <div class="section-1"></div>
            <div class="section-2">
                <div class="sub-2 icon">
                    {imageArray[imageIndex] ? (
                        <FImage
                            id="image1"
                            {...imageArray[imageIndex]}
                            sizeX="100%"
                            sizeY="100%"
                        ></FImage>
                    ) : null}
                </div>
                <div class="sub-2 text">
                    <div class="desc-text">
                        {textArray[textIndex] ? textArray[textIndex] : ''}
                    </div>
                    <div class="alt-text">
                        {textArray[++textIndex] ? textArray[textIndex] : ''}
                    </div>
                </div>
                <div class="sub-2 image">
                    {imageArray[++imageIndex] ? (
                        <FImage
                            id="image1"
                            {...imageArray[imageIndex]}
                            sizeX="100%"
                            sizeY="100%"
                        ></FImage>
                    ) : null}
                </div>
            </div>
            <div class="section-3">
                <div class="sub-3 progress-bar">
                    {progressbarArray[0] ? (
                        <kup-progress-bar
                            id="progressBar1"
                            is-slim
                            {...progressbarArray[0]}
                        ></kup-progress-bar>
                    ) : null}
                </div>
                <div class="sub-3 button">
                    {buttonArray[0] ? (
                        <kup-button
                            id="button1"
                            {...buttonArray[0]}
                        ></kup-button>
                    ) : null}
                </div>
            </div>
            <div class="section-4">
                <div class="sub-4 text">
                    <div>
                        {textArray[++textIndex] ? textArray[textIndex] : ''}
                    </div>
                    <div class="alt-text">
                        {textArray[++textIndex] ? textArray[textIndex] : ''}
                    </div>
                </div>
                <div class="sub-4 text">
                    <div>
                        {textArray[++textIndex] ? textArray[textIndex] : ''}
                    </div>
                    <div class="alt-text">
                        {textArray[++textIndex] ? textArray[textIndex] : ''}
                    </div>
                </div>
            </div>
        </div>
    );
}
/**
 * 6th standard card layout, useful to display TODOs in a compact view.
 * @param {KupCard}  comp - Card component.
 * @returns {VNode} 6th standard layout virtual node.
 */
export function create6(component: KupCard): VNode {
    //Action button
    const buttonArray: GenericObject[] = component.data['button']
        ? component.data['button']
        : [];
    //Left bar color
    const colorArray: string[] = component.data['color']
        ? component.data['color']
        : [];
    //Radial progress bar
    const progressbarArray: GenericObject[] = component.data['progressbar']
        ? component.data['progressbar']
        : [];
    //Left and center text
    let textIndex: number = 0;
    const textArray: string[] = component.data['text']
        ? component.data['text']
        : [];
    //Dynamic CSS variables
    let CSSVariables: GenericObject = {
        ['--color-0']: colorArray[0]
            ? colorArray[0]
            : 'var(--kup-primary-color)',
        ['--dyn-color-0']: 'white',
    };
    return (
        <div
            class={`standard-layout-${component.layoutNumber}`}
            style={CSSVariables}
        >
            <div class="section-1">
                <div class="alt-text">
                    {textArray[textIndex] ? textArray[textIndex] : ''}
                </div>
            </div>
            <div class="section-2">
                <div class="sub-2">
                    {progressbarArray[0] ? (
                        <kup-progress-bar
                            id="progressBar1"
                            is-radial
                            {...progressbarArray[0]}
                        ></kup-progress-bar>
                    ) : null}
                    <div>
                        {textArray[++textIndex] ? textArray[textIndex] : ''}
                    </div>
                </div>
                {buttonArray[0] ? (
                    <kup-button id="button1" {...buttonArray[0]}></kup-button>
                ) : null}
            </div>
        </div>
    );
}
/**
 * 7th standard card layout, centered image and text.
 * @param {KupCard}  comp - Card component.
 * @returns {VNode} 7th standard layout virtual node.
 */
export function create7(component: KupCard): VNode {
    //Top bar color
    const colorArray: string[] = component.data['color']
        ? component.data['color']
        : [];
    //Center image
    const imageArray: GenericObject[] = component.data['image']
        ? component.data['image']
        : [];
    //3 text slots
    let textIndex: number = 0;
    const textArray: string[] = component.data['text']
        ? component.data['text']
        : [];
    //Dynamic CSS variables
    let CSSVariables: GenericObject = {
        [`--color-0`]: colorArray[0]
            ? colorArray[0]
            : 'var(--kup-primary-color)',
    };
    return (
        <div
            class={`standard-layout-${component.layoutNumber}`}
            style={CSSVariables}
        >
            <div class="section-1"></div>
            <div class="section-2">
                <div class="sub-2 image">
                    {imageArray[0] ? (
                        <FImage
                            id="image1"
                            {...imageArray[0]}
                            sizeX="100%"
                            sizeY="100%"
                        ></FImage>
                    ) : null}
                </div>
                <div class="sub-2 text">
                    <div>
                        {textArray[textIndex] ? textArray[textIndex] : ''}
                    </div>
                </div>
            </div>
            <div class="section-3">
                <div class="sub-3 alt-text">
                    {textArray[++textIndex] ? textArray[textIndex] : ''}
                </div>
                <div class="sub-3 alt-text">
                    {textArray[++textIndex] ? textArray[textIndex] : ''}
                </div>
            </div>
        </div>
    );
}
/**
 * 8th standard card layout, useful to display a list of chips.
 * @param {KupCard}  comp - Card component.
 * @returns {VNode} 8th standard layout virtual node.
 */
export function create8(component: KupCard): VNode {
    //Chips
    const chipArray: GenericObject[] = component.data['chip']
        ? component.data['chip']
        : [];
    //Background and corner text colors
    const colorArray: string[] = component.data['color']
        ? component.data['color']
        : [];
    //Right corner icon
    const imageArray: GenericObject[] = component.data['image']
        ? component.data['image']
        : [];
    //3 text slots
    let textIndex: number = 0;
    const textArray: string[] = component.data['text']
        ? component.data['text']
        : [];
    //Dynamic CSS variables
    let CSSVariables: GenericObject = {
        [`--color-0`]: colorArray[0]
            ? colorArray[0]
            : 'var(--kup-primary-color)',
    };
    return (
        <div
            class={`standard-layout-${component.layoutNumber}`}
            style={CSSVariables}
        >
            <div class="background"></div>
            <div class="section-1">
                <div class="sub-1">
                    <div class="text">
                        {textArray[textIndex] ? textArray[textIndex] : ''}
                    </div>
                </div>
                <div class="sub-2">
                    <div class="text">
                        {textArray[++textIndex] ? textArray[textIndex] : ''}
                    </div>
                </div>
                <div class="sub-3">
                    <div class="image">
                        {imageArray[0] ? (
                            <FImage
                                id="image1"
                                {...imageArray[0]}
                                sizeX="24px"
                                sizeY="24px"
                            ></FImage>
                        ) : null}
                    </div>
                    <div class="text">
                        {textArray[++textIndex] ? textArray[textIndex] : ''}
                    </div>
                </div>
            </div>
            <div class="section-2">
                {chipArray[0] ? (
                    <kup-chip id="chip1" {...chipArray[0]}></kup-chip>
                ) : null}
            </div>
        </div>
    );
}
/**
 * 9th standard card layout, chart displayed on the right with some info on the left.
 * @param {KupCard}  comp - Card component.
 * @returns {VNode} 9th standard layout virtual node.
 */
export function create9(component: KupCard): VNode {
    //Chart
    const chartArray: GenericObject[] = component.data['chart']
        ? component.data['chart']
        : [];
    //Icon color
    const colorArray: string[] = component.data['color']
        ? component.data['color']
        : [];
    //Left icon
    const imageArray: GenericObject[] = component.data['image']
        ? component.data['image']
        : [];
    //3 text slots
    let textIndex: number = 0;
    const textArray: string[] = component.data['text']
        ? component.data['text']
        : [];
    //Dynamic CSS variables
    let CSSVariables: GenericObject = {
        [`--color-0`]: colorArray[0]
            ? colorArray[0]
            : 'var(--kup-primary-color)',
    };
    return (
        <div
            class={`standard-layout-${component.layoutNumber}`}
            style={CSSVariables}
        >
            <div class="section-1">
                <div class="sub-1">
                    <div class="text description">
                        {textArray[textIndex] ? textArray[textIndex] : ''}
                    </div>
                </div>
                <div class="sub-2">
                    <div class="icon">
                        {imageArray[0] ? (
                            <FImage
                                color={
                                    colorArray[0]
                                        ? colorArray[0]
                                        : 'var(--kup-primary-color)'
                                }
                                id="image1"
                                {...imageArray[0]}
                                sizeX="3em"
                                sizeY="3em"
                            ></FImage>
                        ) : null}
                    </div>
                    <div class="text-wrapper">
                        <div class="text title">
                            <div>
                                {textArray[++textIndex]
                                    ? textArray[textIndex]
                                    : ''}
                            </div>
                        </div>
                        <div class="text subtitle">
                            <div>
                                {textArray[++textIndex]
                                    ? textArray[textIndex]
                                    : ''}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="section-2">
                {chartArray[0] ? (
                    <kup-chart id="chart1" {...chartArray[0]}></kup-chart>
                ) : null}
            </div>
        </div>
    );
}
/**
 * 10th standard card layout, chart displayed on the left with some info on the right.
 * @param {KupCard}  comp - Card component.
 * @returns {VNode} 10th standard layout virtual node.
 */
export function create10(component: KupCard): VNode {
    //Chart
    const chartArray: GenericObject[] = component.data['chart']
        ? component.data['chart']
        : [];
    //Icon color
    const colorArray: string[] = component.data['color']
        ? component.data['color']
        : [];
    //Left icon
    const imageArray: GenericObject[] = component.data['image']
        ? component.data['image']
        : [];
    //3 text slots
    let textIndex: number = 0;
    const textArray: string[] = component.data['text']
        ? component.data['text']
        : [];
    //Dynamic CSS variables
    let CSSVariables: GenericObject = {
        [`--color-0`]: colorArray[0]
            ? colorArray[0]
            : 'var(--kup-primary-color)',
    };
    return (
        <div
            class={`standard-layout-${component.layoutNumber}`}
            style={CSSVariables}
        >
            <div class="section-1">
                {chartArray[0] ? (
                    <kup-chart id="chart1" {...chartArray[0]}></kup-chart>
                ) : null}
            </div>
            <div class="section-2">
                <div class="sub-1">
                    <div class="text description">
                        {textArray[textIndex] ? textArray[textIndex] : ''}
                    </div>
                </div>
                <div class="sub-2">
                    <div class="icon">
                        {imageArray[0] ? (
                            <FImage
                                color={
                                    colorArray[0]
                                        ? colorArray[0]
                                        : 'var(--kup-primary-color)'
                                }
                                id="image1"
                                {...imageArray[0]}
                                sizeX="3em"
                                sizeY="3em"
                            ></FImage>
                        ) : null}
                    </div>
                    <div class="text-wrapper">
                        <div class="text title">
                            <div>
                                {textArray[++textIndex]
                                    ? textArray[textIndex]
                                    : ''}
                            </div>
                        </div>
                        <div class="text subtitle">
                            <div>
                                {textArray[++textIndex]
                                    ? textArray[textIndex]
                                    : ''}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
/**
 * 11th standard card layout, chart displayed on the right with some info on the left, visible when hovering on the colored bar.
 * @param {KupCard}  comp - Card component.
 * @returns {VNode} 11th standard layout virtual node.
 */
export function create11(component: KupCard) {
    //Chart
    const chartArray: GenericObject[] = component.data['chart']
        ? component.data['chart']
        : [];
    //Icon and bar color
    const colorArray: string[] = component.data['color']
        ? component.data['color']
        : [];
    //Left icon
    const imageArray: GenericObject[] = component.data['image']
        ? component.data['image']
        : [];
    //3 text slots
    let textIndex: number = 0;
    const textArray: string[] = component.data['text']
        ? component.data['text']
        : [];
    //Dynamic CSS variables
    let CSSVariables: GenericObject = {
        [`--color-0`]: colorArray[0]
            ? colorArray[0]
            : 'var(--kup-primary-color)',
    };
    return (
        <div
            class={`standard-layout-${component.layoutNumber}`}
            style={CSSVariables}
        >
            <div
                class="section-1"
                onMouseEnter={(e: MouseEvent) => {
                    let el: any = e.currentTarget;
                    el.style.minWidth = el.scrollWidth + 10 + 'px';
                    el.style.maxWidth = el.scrollWidth + 10 + 'px';
                }}
                onMouseLeave={(e: MouseEvent) => {
                    let el: any = e.currentTarget;
                    el.style.minWidth = '';
                    el.style.maxWidth = '';
                }}
            >
                <div class="sub-1 dyn-color">
                    <div class="text description">
                        {textArray[textIndex] ? textArray[textIndex] : ''}
                    </div>
                </div>
                <div class="sub-2">
                    <div class="icon">
                        {imageArray[0] ? (
                            <FImage
                                color={
                                    colorArray[0]
                                        ? colorArray[0]
                                        : 'var(--kup-primary-color)'
                                }
                                id="image1"
                                {...imageArray[0]}
                                sizeX="3em"
                                sizeY="3em"
                            ></FImage>
                        ) : null}
                    </div>
                    <div class="text-wrapper">
                        <div class="text title">
                            <div>
                                {textArray[++textIndex]
                                    ? textArray[textIndex]
                                    : ''}
                            </div>
                        </div>
                        <div class="text subtitle">
                            <div>
                                {textArray[++textIndex]
                                    ? textArray[textIndex]
                                    : ''}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="section-2">
                {chartArray[0] ? (
                    <kup-chart id="chart1" {...chartArray[0]}></kup-chart>
                ) : null}
            </div>
        </div>
    );
}
/**
 * 12th standard card layout, used for column menus in tree and data table.
 * @param {KupCard}  comp - Card component.
 * @returns {VNode} 12th standard layout virtual node.
 */
export function create12(component: KupCard) {
    const buttonArray: GenericObject[] = component.data['button']
        ? component.data['button']
        : [];
    const checkboxArray: GenericObject[] = component.data['checkbox']
        ? component.data['checkbox']
        : [];
    const datepickerArray: GenericObject[] = component.data['datepicker']
        ? component.data['datepicker']
        : [];
    const textfieldArray: GenericObject[] = component.data['textfield']
        ? component.data['textfield']
        : [];
    const timepickerArray: GenericObject[] = component.data['timepicker']
        ? component.data['timepicker']
        : [];
    return (
        <div class={`standard-layout-${component.layoutNumber} `}>
            {buttonArray.length > 0 ? (
                <div class="section-1">
                    {buttonArray.length > 0
                        ? compList(buttonArray, 'button')
                        : null}
                </div>
            ) : null}
            <div
                class={`section-2 ${
                    textfieldArray.length > 0 ||
                    datepickerArray.length > 0 ||
                    timepickerArray.length > 0
                        ? 'has-content'
                        : ''
                }`}
            >
                {datepickerArray.length > 0
                    ? compList(datepickerArray, 'datepicker')
                    : null}
                {textfieldArray.length > 0
                    ? compList(textfieldArray, 'textfield')
                    : null}
                {timepickerArray.length > 0
                    ? compList(timepickerArray, 'timepicker')
                    : null}
            </div>
            {checkboxArray.length > 0 ? (
                <div class="section-3">
                    {compList(checkboxArray, 'checkbox')}
                </div>
            ) : null}
        </div>
    );
}
/**
 * 13th standard card layout, buttons and text lines, used for debug window.
 * @param {KupCard}  comp - Card component.
 * @returns {VNode} 1st standard layout virtual node.
 */
export function create13(component: KupCard): VNode {
    //Action buttons
    const buttonArray: GenericObject[] = component.data['button']
        ? component.data['button']
        : [];
    //Combobox list
    const comboboxArray: GenericObject[] = component.data['combobox']
        ? component.data['combobox']
        : [];
    //String list
    const textArray: string[] = component.data['text']
        ? component.data['text']
        : [];
    //Textfield list
    const textfieldArray: GenericObject[] = component.data['textfield']
        ? component.data['textfield']
        : [];
    return (
        <div
            class={`standard-layout-${component.layoutNumber} ${
                buttonArray.length > 0 ? 'has-actions' : ''
            }`}
        >
            <div>
                {buttonArray.length > 0 || textfieldArray.length > 0 ? (
                    <div class="section-1">
                        {compList(buttonArray, 'button')}
                        {compList(textfieldArray, 'textfield')}
                        {compList(comboboxArray, 'combobox')}
                    </div>
                ) : null}
                {textArray.length > 0 ? (
                    <div class="section-2">{compList(textArray, 'text')}</div>
                ) : null}
            </div>
        </div>
    );
}
