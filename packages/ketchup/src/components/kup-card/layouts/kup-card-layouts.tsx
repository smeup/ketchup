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
    let button1: KupButton = (
        <kup-button id="button1" {...data['button1']}></kup-button>
    );
    let image1: KupImage = (
        <kup-image id="image1" {...data['image1']}></kup-image>
    );
    let image2: KupImage = (
        <kup-image
            id="image2"
            customStyle="img {object-fit: contain;}"
            {...data['image2']}
        ></kup-image>
    );
    let progressBar1: KupProgressBar = (
        <kup-progress-bar
            id="progressBar1"
            is-slim
            {...data['progressBar1']}
        ></kup-progress-bar>
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
    let CSSVariables = {
        ['--color-1']: data['color1'],
        ['--dyn-color-1']: getContrastYIQ(data['color1']),
    };
    let button1: KupButton = (
        <kup-button id="button1" {...data['button1']}></kup-button>
    );
    let progressBar1: KupProgressBar = (
        <kup-progress-bar
            id="progressBar1"
            is-radial
            icon={...data['image1'].resource}
            {...data['progressBar1']}
        ></kup-progress-bar>
    );
    return (
        <div class={componentClass} style={CSSVariables}>
            <div class="section-1">
                <div class="emph-text">{data['emphText1']}</div>
            </div>
            <div class="section-2">
                <div class="sub-2">
                    {progressBar1}
                    <div>{data['text1']}</div>
                </div>
                {button1}
            </div>
        </div>
    );
}

export function create3(data: ComponentCardElement) {
    let componentClass = 'layout-3';
    let CSSVariables = {
        ['--color-1']: data['color1'],
    };
    let image1: KupImage = (
        <kup-image
            id="image1"
            sizeX="auto"
            customStyle="img {border-radius: 50%; margin: auto;}"
            {...data['image2']}
        ></kup-image>
    );
    return (
        <div class={componentClass} style={CSSVariables}>
            <div class="section-1"></div>
            <div class="section-2">
                <div class="sub-2 image">{image1}</div>
                <div class="sub-2 text">
                    <div>{data['text1']}</div>
                </div>
            </div>
            <div class="section-3">
                <div class="sub-3 emph-text">{data['emphText1']}</div>
                <div class="sub-3 emph-text">{data['progressBar1'].value}%</div>
            </div>
        </div>
    );
}

function getContrastYIQ(hexcolor: string) {
    //Only works when an hex color is the argument
    hexcolor = hexcolor.replace('#', '');
    var r = parseInt(hexcolor.substr(0, 2), 16);
    var g = parseInt(hexcolor.substr(2, 2), 16);
    var b = parseInt(hexcolor.substr(4, 2), 16);
    var yiq = (r * 299 + g * 587 + b * 114) / 1000;
    return yiq >= 128 ? 'black' : 'white';
}
