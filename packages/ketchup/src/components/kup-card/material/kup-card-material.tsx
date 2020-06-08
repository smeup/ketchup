/*
Common use cases for layouts

Layout 1: Material
Layout 2: Material
Layout 3: Custom
Layout 4: Custom
Layout 5: Custom

*/

import { h } from '@stencil/core';
import { ComponentCardElement } from '../kup-card-declarations';
import { KupImage } from '../../kup-image/kup-image';
import { KupButton } from '../../kup-button/kup-button';

export function create1(layout: number, data: ComponentCardElement) {
    let componentClass = 'material-layout-' + layout;
    var button1: KupButton = undefined;
    var button2: KupButton = undefined;
    var button3: KupButton = undefined;
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
        button2 = <kup-button id="button1" {...data['button2']}></kup-button>;
    }
    if (data.button3) {
        button3 = <kup-button id="button1" {...data['button3']}></kup-button>;
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
            <div class="section-3">
                {button1}
                {button2}
                {button3}
            </div>
        </div>
    );
}

export function create2(layout: number, data: ComponentCardElement) {
    let componentClass = 'material-layout-' + layout;
    var button1: KupButton = undefined;
    var button2: KupButton = undefined;
    var button3: KupButton = undefined;
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
        button2 = <kup-button id="button1" {...data['button2']}></kup-button>;
    }
    if (data.button3) {
        button3 = <kup-button id="button1" {...data['button3']}></kup-button>;
    }
    return (
        <div class={componentClass}>
            <div class="mdc-ripple-surface">
                <div class="section-1">
                    <div class="sub-1 title">
                        <div>{data['text1']}</div>
                    </div>
                    <div class="sub-1 subtitle">
                        <div>{data['text2']}</div>
                    </div>
                </div>
                <div class="section-2">{image1}</div>
                <div class="section-3">
                    <div class="sub-2 description">
                        <div>{data['text3']}</div>
                    </div>
                </div>
            </div>
            <div class="section-4">
                {button1}
                {button2}
                {button3}
            </div>
        </div>
    );
}
