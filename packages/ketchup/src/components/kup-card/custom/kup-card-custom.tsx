import { h } from '@stencil/core';
import { KupCard } from '../kup-card';

export function create1(component: KupCard) {
    let componentClass = 'custom-layout-' + component.layoutNumber;
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
                        <kup-image
                            id="image1"
                            customStyle="img {object-fit: contain;}"
                            {...component.data['image1']}
                        ></kup-image>
                    )}
                </div>
                <div class="sub-2 text">
                    <div class="desc-text">{component.data['text1']}</div>
                    <div class="alt-text">{component.data['text2']}</div>
                </div>
                <div class="sub-2 image">
                    {component.data['image2'] && (
                        <kup-image
                            id="image2"
                            customStyle="img {object-fit: contain;}"
                            {...component.data['image2']}
                        ></kup-image>
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

export function create2(component: KupCard) {
    let componentClass = 'custom-layout-' + component.layoutNumber;
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

export function create3(component: KupCard) {
    let componentClass = 'custom-layout-' + component.layoutNumber;
    let CSSVariables = {
        ['--color-1']: component.data['color1'],
    };
    return (
        <div class={componentClass} style={CSSVariables}>
            <div class="section-1"></div>
            <div class="section-2">
                <div class="sub-2 image">
                    {component.data['image1'] && (
                        <kup-image
                            id="image1"
                            customStyle="img { object-fit: contain; margin: auto;}"
                            {...component.data['image1']}
                        ></kup-image>
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

export function create4(component: KupCard) {
    let componentClass = 'custom-layout-' + component.layoutNumber;
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
                            <kup-image
                                id="image1"
                                color={component.data['color1']}
                                sizeX="24px"
                                sizeY="24px"
                                {...component.data['image1']}
                            ></kup-image>
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
