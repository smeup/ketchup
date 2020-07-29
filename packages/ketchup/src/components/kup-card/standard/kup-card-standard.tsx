import { h } from '@stencil/core';
import { KupCard } from '../kup-card';

export function create1(component: KupCard) {
    let componentClass = 'standard-layout-' + component.layoutNumber;
    if (
        component.data['button1'] ||
        component.data['button2'] ||
        component.data['button3'] ||
        component.data['button4'] ||
        component.data['button5']
    ) {
        componentClass += ' has-actions';
    }
    return (
        <div class={componentClass}>
            <div class="mdc-ripple-surface">
                <div class="section-1">
                    {component.data['image1'] && (
                        <kup-image
                            customStyle="img {border-radius: 4px 4px 0 0; object-fit: cover;}"
                            id="image1"
                            {...component.data['image1']}
                        ></kup-image>
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
            {actionBar(component, 'section-3')}
        </div>
    );
}

export function create2(component: KupCard) {
    let componentClass = 'standard-layout-' + component.layoutNumber;
    if (
        component.data['button1'] ||
        component.data['button2'] ||
        component.data['button3'] ||
        component.data['button4'] ||
        component.data['button5']
    ) {
        componentClass += ' has-actions';
    }
    return (
        <div class={componentClass}>
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
                        <kup-image
                            customStyle="img {object-fit: cover;}"
                            id="image1"
                            {...component.data['image1']}
                        ></kup-image>
                    )}
                </div>
                <div class="section-3">
                    <div class="sub-3 description">
                        <div>{component.data['text3']}</div>
                    </div>
                </div>
            </div>
            {actionBar(component, 'section-4')}
        </div>
    );
}

export function create3(component: KupCard) {
    let componentClass = 'standard-layout-' + component.layoutNumber;
    if (
        component.data['button1'] ||
        component.data['button2'] ||
        component.data['button3'] ||
        component.data['button4'] ||
        component.data['button5']
    ) {
        componentClass += ' has-actions';
    }
    return (
        <div class={componentClass}>
            <div class="mdc-ripple-surface">
                <div class="section-1">
                    <div class="media">
                        {component.data['image1'] && (
                            <kup-image
                                customStyle="img {object-fit: cover;}"
                                id="image1"
                                {...component.data['image1']}
                            ></kup-image>
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
            {actionBar(component, 'section-3')}
        </div>
    );
}

export function create4(component: KupCard) {
    let componentClass = 'standard-layout-' + component.layoutNumber;
    if (
        component.data['button1'] ||
        component.data['button2'] ||
        component.data['button3'] ||
        component.data['button4'] ||
        component.data['button5']
    ) {
        componentClass += ' has-actions';
    }
    return (
        <div class={componentClass}>
            <div class="mdc-ripple-surface">
                <div class="section-1">
                    <div class="sub-1 image">
                        {component.data['image1'] && (
                            <kup-image
                                customStyle="img {object-fit: cover;}"
                                id="image1"
                                {...component.data['image1']}
                            ></kup-image>
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
            {actionBar(component, 'section-2')}
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
                            <kup-image
                                sizeX="3rem"
                                sizeY="3rem"
                                color={component.data['color1']}
                                id="image1"
                                customStyle="img {object-fit: contain;}"
                                {...component.data['image1']}
                            ></kup-image>
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
                            <kup-image
                                sizeX="3rem"
                                sizeY="3rem"
                                color={component.data['color1']}
                                id="image1"
                                customStyle="img {object-fit: contain;}"
                                {...component.data['image1']}
                            ></kup-image>
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
                            <kup-image
                                sizeX="3rem"
                                sizeY="3rem"
                                color={component.data['color1']}
                                id="image1"
                                customStyle="img {object-fit: contain;}"
                                {...component.data['image1']}
                            ></kup-image>
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

function actionBar(component: KupCard, section: string) {
    return (
        <div class={section}>
            {component.data['button1'] && (
                <kup-button
                    id="button1"
                    {...component.data['button1']}
                ></kup-button>
            )}
            {component.data['button2'] && (
                <kup-button
                    id="button2"
                    {...component.data['button2']}
                ></kup-button>
            )}
            {component.data['button3'] && (
                <kup-button
                    id="button3"
                    {...component.data['button3']}
                ></kup-button>
            )}
            {component.data['button4'] && (
                <kup-button
                    id="button4"
                    {...component.data['button4']}
                ></kup-button>
            )}
            {component.data['button5'] && (
                <kup-button
                    id="button5"
                    {...component.data['button5']}
                ></kup-button>
            )}
        </div>
    );
}
