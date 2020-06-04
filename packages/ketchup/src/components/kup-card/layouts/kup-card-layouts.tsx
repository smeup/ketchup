/*
Common use cases for layouts

Layout 1: TODOs
Layout 2: ???

*/

import { h } from '@stencil/core';
import { ComponentCardElement } from '../kup-card-declarations';
import { KupImage } from '../../kup-image/kup-image';
import { KupButton } from '../../kup-button/kup-button';
import { KupProgressBar } from '../../kup-progress-bar/kup-progress-bar';

export function create1(data: ComponentCardElement) {
    let componentClass = 'layout-1';
    let CSSVariables = {
        ['--color-1']: data['color1'],
        ['--color-2']: data['color2'],
    };
    let button1: KupButton = <kup-button {...data['button1']}></kup-button>;
    let image1: KupImage = <kup-image {...data['image1']}></kup-image>;
    let image2: KupImage = (
        <kup-image
            sizeX="100%"
            sizeY="auto"
            customStyle="img {object-fit: contain;}"
            {...data['image2']}
        ></kup-image>
    );
    let progressBar1: KupProgressBar = (
        <kup-progress-bar {...data['progressBar1']}></kup-progress-bar>
    );
    return (
        <div class={componentClass} style={CSSVariables}>
            <div class="section-1"></div>
            <div class="section-2">
                <div class="sub-2 icon">{image1}</div>
                <div class="sub-2 text">
                    <div>{data['text1']}</div>
                    <div class="emph-text">{data['emphText1']}</div>
                </div>
                <div class="sub-2 image">{image2}</div>
            </div>
            <div class="section-3">
                <div class="sub-3 progress-bar">{progressBar1}</div>

                <div class="sub-3 button">{button1}</div>
            </div>
            <div class="section-4">
                <div class="sub-4 text">
                    <div>{data['text2']}</div>
                    <div class="emph-text">{data['emphText2']}</div>
                </div>
                <div class="sub-4 text">
                    <div>{data['text3']}</div>
                    <div class="emph-text">{data['emphText3']}</div>
                </div>
            </div>
        </div>
    );
}

export function create2(data: ComponentCardElement) {
    let componentClass = 'layout-2';
    return (
        <div class={componentClass}>
            <span>{data['title']}</span>
            <span>{data['subtitle']}</span>
        </div>
    );
}
