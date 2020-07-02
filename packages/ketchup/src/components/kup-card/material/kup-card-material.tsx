import { h } from '@stencil/core';
import { KupCard } from '../kup-card';

export function create1(component: KupCard) {
    let componentClass = 'material-layout-' + component.layoutNumber;
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
    let componentClass = 'material-layout-' + component.layoutNumber;
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
    let componentClass = 'material-layout-' + component.layoutNumber;
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
    let componentClass = 'material-layout-' + component.layoutNumber;
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
