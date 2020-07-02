import { h } from '@stencil/core';
import { KupImage } from '../../kup-image/kup-image';
import { KupButton } from '../../kup-button/kup-button';
import { KupCard } from '../kup-card';

export function create1(component: KupCard) {
    let data = component.data;
    let layout = component.layoutNumber;
    let componentClass = 'material-layout-' + layout;
    let buttonEl: HTMLElement = undefined;
    let button1: KupButton = undefined;
    let button2: KupButton = undefined;
    let button3: KupButton = undefined;
    let button4: KupButton = undefined;
    let button5: KupButton = undefined;
    let image1: KupImage = (
        <kup-image
            customStyle="img {border-radius: 4px 4px 0 0; object-fit: cover;}"
            id="image1"
            {...data['image1']}
        ></kup-image>
    );
    if (data.button1) {
        button1 = <kup-button id="button1" {...data['button1']}></kup-button>;
        componentClass += ' has-actions';
    }
    if (data.button2) {
        button2 = <kup-button id="button2" {...data['button2']}></kup-button>;
    }
    if (data.button3) {
        button3 = <kup-button id="button3" {...data['button3']}></kup-button>;
    }
    if (data.button4) {
        button4 = <kup-button id="button4" {...data['button4']}></kup-button>;
    }
    if (data.button5) {
        button5 = <kup-button id="button5" {...data['button5']}></kup-button>;
    }
    if (button1 || button2 || button3 || button4 || button5) {
        buttonEl = (
            <div class="section-3">
                {button1}
                {button2}
                {button3}
                {button4}
                {button5}
            </div>
        );
    }
    return (
        <div class={componentClass}>
            <div class="mdc-ripple-surface">
                <div class="section-1">{image1}</div>
                <div class="section-2">
                    <div class="sub-2 title">
                        <div>{data['text1']}</div>
                    </div>
                    <div class="sub-2 subtitle">
                        <div>{data['text2']}</div>
                    </div>
                    <div class="sub-2 description">
                        <div>{data['text3']}</div>
                    </div>
                </div>
            </div>
            {buttonEl}
        </div>
    );
}

export function create2(component: KupCard) {
    let data = component.data;
    let layout = component.layoutNumber;
    let componentClass = 'material-layout-' + layout;
    let buttonEl: HTMLElement = undefined;
    let button1: KupButton = undefined;
    let button2: KupButton = undefined;
    let button3: KupButton = undefined;
    let button4: KupButton = undefined;
    let button5: KupButton = undefined;
    let image1: KupImage = (
        <kup-image
            customStyle="img {object-fit: cover;}"
            id="image1"
            {...data['image1']}
        ></kup-image>
    );
    if (data.button1) {
        componentClass += ' has-actions';
        button1 = <kup-button id="button1" {...data['button1']}></kup-button>;
    }
    if (data.button2) {
        button2 = <kup-button id="button2" {...data['button2']}></kup-button>;
    }
    if (data.button3) {
        button3 = <kup-button id="button3" {...data['button3']}></kup-button>;
    }
    if (data.button4) {
        button4 = <kup-button id="button4" {...data['button4']}></kup-button>;
    }
    if (data.button5) {
        button5 = <kup-button id="button5" {...data['button5']}></kup-button>;
    }
    if (button1 || button2 || button3 || button4 || button5) {
        buttonEl = (
            <div class="section-4">
                {button1}
                {button2}
                {button3}
                {button4}
                {button5}
            </div>
        );
    }
    return (
        <div class={componentClass}>
            <div class="section-1">
                <div class="sub-1 title">
                    <div>{data['text1']}</div>
                </div>
                <div class="sub-1 subtitle">
                    <div>{data['text2']}</div>
                </div>
            </div>
            <div class="mdc-ripple-surface">
                <div class="section-2">{image1}</div>
                <div class="section-3">
                    <div class="sub-3 description">
                        <div>{data['text3']}</div>
                    </div>
                </div>
            </div>
            {buttonEl}
        </div>
    );
}

export function create3(component: KupCard) {
    let data = component.data;
    let layout = component.layoutNumber;
    let componentClass = 'material-layout-' + layout;
    let buttonEl: HTMLElement = undefined;
    let button1: KupButton = undefined;
    let button2: KupButton = undefined;
    let button3: KupButton = undefined;
    let button4: KupButton = undefined;
    let button5: KupButton = undefined;
    let image1: KupImage = (
        <kup-image
            customStyle="img {object-fit: cover;}"
            id="image1"
            {...data['image1']}
        ></kup-image>
    );
    if (data.button1) {
        componentClass += ' has-actions';
        button1 = <kup-button id="button1" {...data['button1']}></kup-button>;
    }
    if (data.button2) {
        button2 = <kup-button id="button2" {...data['button2']}></kup-button>;
    }
    if (data.button3) {
        button3 = <kup-button id="button3" {...data['button3']}></kup-button>;
    }
    if (data.button4) {
        button4 = <kup-button id="button4" {...data['button4']}></kup-button>;
    }
    if (data.button5) {
        button5 = <kup-button id="button5" {...data['button5']}></kup-button>;
    }
    if (button1 || button2 || button3 || button4 || button5) {
        buttonEl = (
            <div class="section-3">
                {button1}
                {button2}
                {button3}
                {button4}
                {button5}
            </div>
        );
    }
    return (
        <div class={componentClass}>
            <div class="mdc-ripple-surface">
                <div class="section-1">
                    <div class="media">
                        {image1}
                        <div class="text-on-media">
                            <div class="sub-1 title">
                                <div>{data['text1']}</div>
                            </div>
                            <div class="sub-1 subtitle">
                                <div>{data['text2']}</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="section-2">
                    <div class="sub-2 description">
                        <div>{data['text3']}</div>
                    </div>
                </div>
            </div>
            {buttonEl}
        </div>
    );
}

export function create4(component: KupCard) {
    let data = component.data;
    let layout = component.layoutNumber;
    let componentClass = 'material-layout-' + layout;
    let buttonEl: HTMLElement = undefined;
    let button1: KupButton = undefined;
    let button2: KupButton = undefined;
    let button3: KupButton = undefined;
    let button4: KupButton = undefined;
    let button5: KupButton = undefined;
    let image1: KupImage = (
        <kup-image
            customStyle="img {object-fit: cover;}"
            id="image1"
            {...data['image1']}
        ></kup-image>
    );
    if (data.button1) {
        componentClass += ' has-actions';
        button1 = <kup-button id="button1" {...data['button1']}></kup-button>;
    }
    if (data.button2) {
        button2 = <kup-button id="button2" {...data['button2']}></kup-button>;
    }
    if (data.button3) {
        button3 = <kup-button id="button3" {...data['button3']}></kup-button>;
    }
    if (data.button4) {
        button4 = <kup-button id="button4" {...data['button4']}></kup-button>;
    }
    if (data.button5) {
        button5 = <kup-button id="button5" {...data['button5']}></kup-button>;
    }
    if (button1 || button2 || button3 || button4 || button5) {
        buttonEl = (
            <div class="section-2">
                {button1}
                {button2}
                {button3}
                {button4}
                {button5}
            </div>
        );
    }
    return (
        <div class={componentClass}>
            <div class="mdc-ripple-surface">
                <div class="section-1">
                    <div class="sub-1 image">{image1}</div>
                    <div class="text">
                        <div class="sub-1 title">
                            <div>{data['text1']}</div>
                        </div>
                        <div class="sub-1 subtitle">
                            <div>{data['text2']}</div>
                        </div>
                    </div>
                </div>
            </div>
            {buttonEl}
        </div>
    );
}
