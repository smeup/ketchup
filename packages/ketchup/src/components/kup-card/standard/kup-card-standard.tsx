import { h } from '@stencil/core';
import { JSX } from '@stencil/core/internal';
import { FImage } from '../../../f-components/f-image/f-image';
import { GenericObject } from '../../../types/GenericTypes';
import { KupCard } from '../kup-card';

export function create1(component: KupCard) {
    const buttonArray: [] = component.data['button'];
    return (
        <div
            class={`standard-layout-${component.layoutNumber} ${
                buttonArray ? 'has-actions' : ''
            }`}
        >
            <div class="mdc-ripple-surface">
                <div class="section-1">
                    {component.data['image1'] && (
                        <FImage
                            {...component.data['image1']}
                            id="image1"
                            sizeX="100%"
                            sizeY="100%"
                        ></FImage>
                    )}
                </div>
                <div class="section-2">
                    <div class="sub-2 title">
                        <div>{component.data['text1']}</div>
                    </div>
                    <div class="sub-2 subtitle">
                        <div>{component.data['text2']}</div>
                    </div>
                    <div class="sub-2 description">
                        <div>{component.data['text3']}</div>
                    </div>
                </div>
            </div>
            <div class="section-3">
                {buttonArray ? compList(buttonArray, 'button') : ''}
            </div>
        </div>
    );
}

export function create2(component: KupCard) {
    const buttonArray: [] = component.data['button'];
    return (
        <div
            class={`standard-layout-${component.layoutNumber} ${
                buttonArray ? 'has-actions' : ''
            }`}
        >
            <div class="section-1">
                <div class="sub-1 title">
                    <div>{component.data['text1']}</div>
                </div>
                <div class="sub-1 subtitle">
                    <div>{component.data['text2']}</div>
                </div>
            </div>
            <div class="mdc-ripple-surface">
                <div class="section-2">
                    {component.data['image1'] && (
                        <FImage
                            {...component.data['image1']}
                            id="image1"
                            sizeX="100%"
                            sizeY="100%"
                        ></FImage>
                    )}
                </div>
                <div class="section-3">
                    <div class="sub-3 description">
                        <div>{component.data['text3']}</div>
                    </div>
                </div>
            </div>
            <div class="section-4">
                {buttonArray ? compList(buttonArray, 'button') : ''}
            </div>
        </div>
    );
}

export function create3(component: KupCard) {
    const buttonArray: [] = component.data['button'];
    return (
        <div
            class={`standard-layout-${component.layoutNumber} ${
                buttonArray ? 'has-actions' : ''
            }`}
        >
            <div class="mdc-ripple-surface">
                <div class="section-1">
                    <div class="media">
                        {component.data['image1'] && (
                            <FImage
                                {...component.data['image1']}
                                id="image1"
                                sizeX="100%"
                                sizeY="100%"
                            ></FImage>
                        )}
                        <div class="text-on-media">
                            <div class="sub-1 title">
                                <div>{component.data['text1']}</div>
                            </div>
                            <div class="sub-1 subtitle">
                                <div>{component.data['text2']}</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="section-2">
                    <div class="sub-2 description">
                        <div>{component.data['text3']}</div>
                    </div>
                </div>
            </div>
            <div class="section-3">
                {buttonArray ? compList(buttonArray, 'button') : ''}
            </div>
        </div>
    );
}

export function create4(component: KupCard) {
    const buttonArray: [] = component.data['button'];
    return (
        <div
            class={`standard-layout-${component.layoutNumber} ${
                buttonArray ? 'has-actions' : ''
            }`}
        >
            <div class="mdc-ripple-surface">
                <div class="section-1">
                    <div class="sub-1 image">
                        {component.data['image1'] && (
                            <FImage
                                {...component.data['image1']}
                                id="image1"
                                sizeX="100%"
                                sizeY="100%"
                            ></FImage>
                        )}
                    </div>
                    <div class="text">
                        <div class="sub-1 title">
                            <div>{component.data['text1']}</div>
                        </div>
                        <div class="sub-1 subtitle">
                            <div>{component.data['text2']}</div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="section-2">
                {buttonArray ? compList(buttonArray, 'button') : ''}
            </div>
        </div>
    );
}

export function create5(component: KupCard) {
    let componentClass = 'standard-layout-' + component.layoutNumber;
    let CSSVariables = {
        ['--color-1']: component.data['color1'],
        ['--color-2']: component.data['color2'],
    };
    return (
        <div class={componentClass} style={CSSVariables}>
            <div class="section-1"></div>
            <div class="section-2">
                <div class="sub-2 icon">
                    {component.data['image1'] && (
                        <FImage
                            {...component.data['image1']}
                            id="image1"
                            sizeX="100%"
                            sizeY="100%"
                        ></FImage>
                    )}
                </div>
                <div class="sub-2 text">
                    <div class="desc-text">{component.data['text1']}</div>
                    <div class="alt-text">{component.data['text2']}</div>
                </div>
                <div class="sub-2 image">
                    {component.data['image2'] && (
                        <FImage
                            {...component.data['image2']}
                            id="image2"
                            sizeX="100%"
                            sizeY="100%"
                        ></FImage>
                    )}
                </div>
            </div>
            <div class="section-3">
                <div class="sub-3 progress-bar">
                    {component.data['progressBar1'] && (
                        <kup-progress-bar
                            id="progressBar1"
                            is-slim
                            {...component.data['progressBar1']}
                        ></kup-progress-bar>
                    )}
                </div>

                <div class="sub-3 button">
                    {component.data['button1'] && (
                        <kup-button
                            id="button1"
                            {...component.data['button1']}
                        ></kup-button>
                    )}
                </div>
            </div>
            <div class="section-4">
                <div class="sub-4 text">
                    <div>{component.data['text3']}</div>
                    <div class="alt-text">{component.data['text4']}</div>
                </div>
                <div class="sub-4 text">
                    <div>{component.data['text5']}</div>
                    <div class="alt-text">{component.data['text6']}</div>
                </div>
            </div>
        </div>
    );
}

export function create6(component: KupCard) {
    let componentClass = 'standard-layout-' + component.layoutNumber;
    let CSSVariables = {
        ['--color-1']: component.data['color1'],
        ['--dyn-color-1']: 'white',
    };
    return (
        <div class={componentClass} style={CSSVariables}>
            <div class="section-1">
                <div class="alt-text">{component.data['text1']}</div>
            </div>
            <div class="section-2">
                <div class="sub-2">
                    {component.data['progressBar1'] && (
                        <kup-progress-bar
                            id="progressBar1"
                            is-radial
                            icon={...component.data['image1'].resource}
                            {...component.data['progressBar1']}
                        ></kup-progress-bar>
                    )}
                    <div>{component.data['text2']}</div>
                </div>
                {component.data['button1'] && (
                    <kup-button
                        id="button1"
                        {...component.data['button1']}
                    ></kup-button>
                )}
            </div>
        </div>
    );
}

export function create7(component: KupCard) {
    let componentClass = 'standard-layout-' + component.layoutNumber;
    let CSSVariables = {
        ['--color-1']: component.data['color1'],
    };
    return (
        <div class={componentClass} style={CSSVariables}>
            <div class="section-1"></div>
            <div class="section-2">
                <div class="sub-2 image">
                    {component.data['image1'] && (
                        <FImage
                            {...component.data['image1']}
                            id="image1"
                            sizeX="100%"
                            sizeY="100%"
                        ></FImage>
                    )}
                </div>
                <div class="sub-2 text">
                    <div>{component.data['text1']}</div>
                </div>
            </div>
            <div class="section-3">
                <div class="sub-3 alt-text">{component.data['text2']}</div>
                <div class="sub-3 alt-text">{component.data['text3']}</div>
            </div>
        </div>
    );
}

export function create8(component: KupCard) {
    let componentClass = 'standard-layout-' + component.layoutNumber;
    let CSSVariables = {
        ['--color-1']: component.data['color1'],
    };
    return (
        <div class={componentClass} style={CSSVariables}>
            <div class="background"></div>
            <div class="section-1">
                <div class="sub-1">
                    <div class="text">{component.data['text1']}</div>
                </div>
                <div class="sub-2">
                    <div class="text">{component.data['text2']}</div>
                </div>
                <div class="sub-3">
                    <div class="image">
                        {component.data['image1'] && (
                            <FImage
                                {...component.data['image1']}
                                color={component.data['color1']}
                                id="image1"
                                sizeX="24px"
                                sizeY="24px"
                            ></FImage>
                        )}
                    </div>
                    <div class="text">{component.data['text3']}</div>
                </div>
            </div>
            <div class="section-2">
                {component.data['chip1'] && (
                    <kup-chip
                        id="chip1"
                        {...component.data['chip1']}
                    ></kup-chip>
                )}
            </div>
        </div>
    );
}

export function create9(component: KupCard) {
    let componentClass = 'standard-layout-' + component.layoutNumber;
    let CSSVariables = {
        ['--color-1']: component.data['color1'],
    };
    return (
        <div class={componentClass} style={CSSVariables}>
            <div class="section-1">
                <div class="sub-1">
                    <div class="text description">
                        {component.data['text1']}
                    </div>
                </div>
                <div class="sub-2">
                    <div class="icon">
                        {component.data['image1'] && (
                            <FImage
                                {...component.data['image1']}
                                color={component.data['color1']}
                                id="image1"
                                sizeX="3em"
                                sizeY="3em"
                            ></FImage>
                        )}
                    </div>
                    <div class="text-wrapper">
                        <div class="text title">
                            <div>{component.data['text2']}</div>
                        </div>
                        <div class="text subtitle">
                            <div>{component.data['text3']}</div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="section-2">
                {component.data['chart1'] && (
                    <kup-chart
                        id="chart1"
                        {...component.data['chart1']}
                    ></kup-chart>
                )}
            </div>
        </div>
    );
}

export function create10(component: KupCard) {
    let componentClass = 'standard-layout-' + component.layoutNumber;
    let CSSVariables = {
        ['--color-1']: component.data['color1'],
    };
    return (
        <div class={componentClass} style={CSSVariables}>
            <div class="section-1">
                {component.data['chart1'] && (
                    <kup-chart
                        id="chart1"
                        {...component.data['chart1']}
                    ></kup-chart>
                )}
            </div>
            <div class="section-2">
                <div class="sub-1">
                    <div class="text description">
                        {component.data['text1']}
                    </div>
                </div>
                <div class="sub-2">
                    <div class="icon">
                        {component.data['image1'] && (
                            <FImage
                                {...component.data['image1']}
                                color={component.data['color1']}
                                id="image1"
                                sizeX="3em"
                                sizeY="3em"
                            ></FImage>
                        )}
                    </div>
                    <div class="text-wrapper">
                        <div class="text title">
                            <div>{component.data['text2']}</div>
                        </div>
                        <div class="text subtitle">
                            <div>{component.data['text3']}</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export function create11(component: KupCard) {
    let componentClass = 'standard-layout-' + component.layoutNumber;
    let CSSVariables = {
        ['--color-1']: component.data['color1'],
    };
    return (
        <div class={componentClass} style={CSSVariables}>
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
                        {component.data['text1']}
                    </div>
                </div>
                <div class="sub-2">
                    <div class="icon">
                        {component.data['image1'] && (
                            <FImage
                                {...component.data['image1']}
                                color={component.data['color1']}
                                id="image1"
                                sizeX="3em"
                                sizeY="3em"
                            ></FImage>
                        )}
                    </div>
                    <div class="text-wrapper">
                        <div class="text title">
                            <div>{component.data['text2']}</div>
                        </div>
                        <div class="text subtitle">
                            <div>{component.data['text3']}</div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="section-2">
                {component.data['chart1'] && (
                    <kup-chart
                        id="chart1"
                        {...component.data['chart1']}
                    ></kup-chart>
                )}
            </div>
        </div>
    );
}

export function create12(component: KupCard) {
    const buttonArray: [] = component.data['button']
        ? component.data['button']
        : [];
    const checkboxArray: [] = component.data['checkbox']
        ? component.data['checkbox']
        : [];
    const datepickerArray: [] = component.data['datepicker']
        ? component.data['datepicker']
        : [];
    const textfieldArray: [] = component.data['textfield']
        ? component.data['textfield']
        : [];
    const timepickerArray: [] = component.data['timepicker']
        ? component.data['timepicker']
        : [];
    return (
        <div class={`standard-layout-${component.layoutNumber} `}>
            {buttonArray ? (
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

function compList(compArray: GenericObject[], compType: string): JSX.Element[] {
    let list: JSX.Element[] = [];
    for (let index = 0; index < compArray.length; index++) {
        if (!compArray[index].id) {
            compArray[index]['id'] = compType + index;
        }
        switch (compType) {
            case 'button':
                list.push(<kup-button {...compArray[index]} />);
                break;
            case 'checkbox':
                list.push(<kup-checkbox {...compArray[index]} />);
                break;
            case 'datepicker':
                list.push(<kup-date-picker {...compArray[index]} />);
                break;
            case 'textfield':
                list.push(<kup-text-field {...compArray[index]} />);
                break;
            case 'timepicker':
                list.push(<kup-time-picker {...compArray[index]} />);
                break;
        }
    }
    return list;
}
