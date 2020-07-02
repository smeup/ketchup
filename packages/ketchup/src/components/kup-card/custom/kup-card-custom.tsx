import { h } from '@stencil/core';
import { KupImage } from '../../kup-image/kup-image';
import { KupButton } from '../../kup-button/kup-button';
import { KupProgressBar } from '../../kup-progress-bar/kup-progress-bar';
import { KupChip } from '../../kup-chip/kup-chip';
import { KupCard } from '../kup-card';

export function create1(component: KupCard) {
    let data = component.data;
    let layout = component.layoutNumber;
    let componentClass = 'custom-layout-' + layout;
    let CSSVariables = {
        ['--color-1']: data['color1'],
        ['--color-2']: data['color2'],
    };
    let button1: KupButton = (
        <kup-button id="button1" {...data['button1']}></kup-button>
    );
    let image1: KupImage = (
        <kup-image
            id="image1"
            customStyle="img {object-fit: contain;}"
            {...data['image1']}
        ></kup-image>
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
                    <div class="desc-text">{data['text1']}</div>
                    <div class="alt-text">{data['text2']}</div>
                </div>
                <div class="sub-2 image">{image2}</div>
            </div>
            <div class="section-3">
                <div class="sub-3 progress-bar">{progressBar1}</div>

                <div class="sub-3 button">{button1}</div>
            </div>
            <div class="section-4">
                <div class="sub-4 text">
                    <div>{data['text3']}</div>
                    <div class="alt-text">{data['text4']}</div>
                </div>
                <div class="sub-4 text">
                    <div>{data['text5']}</div>
                    <div class="alt-text">{data['text6']}</div>
                </div>
            </div>
        </div>
    );
}

export function create2(component: KupCard) {
    let data = component.data;
    let layout = component.layoutNumber;
    let componentClass = 'custom-layout-' + layout;
    let CSSVariables = {
        ['--color-1']: data['color1'],
        ['--dyn-color-1']: 'white',
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
                <div class="alt-text">{data['text1']}</div>
            </div>
            <div class="section-2">
                <div class="sub-2">
                    {progressBar1}
                    <div>{data['text2']}</div>
                </div>
                {button1}
            </div>
        </div>
    );
}

export function create3(component: KupCard) {
    let data = component.data;
    let layout = component.layoutNumber;
    let componentClass = 'custom-layout-' + layout;
    let CSSVariables = {
        ['--color-1']: data['color1'],
    };
    let image1: KupImage = (
        <kup-image
            id="image1"
            customStyle="img { object-fit: contain; margin: auto;}"
            {...data['image1']}
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
                <div class="sub-3 alt-text">{data['text2']}</div>
                <div class="sub-3 alt-text">{data['text3']}</div>
            </div>
        </div>
    );
}

export function create4(component: KupCard) {
    let data = component.data;
    let layout = component.layoutNumber;
    let componentClass = 'custom-layout-' + layout + ' collapsible-card';
    let CSSVariables = {
        ['--color-1']: data['color1'],
    };
    let chip1: KupChip = (
        <kup-chip
            class="collapsible-element"
            id="chips1"
            {...data['chip1']}
        ></kup-chip>
    );
    let collapsibleWrapperClass = 'sub-3 collapsible-wrapper';
    if (component.sizeY !== '100%' && component.sizeY !== 'auto') {
        collapsibleWrapperClass += ' limited-height';
    }
    return (
        <div class={componentClass} style={CSSVariables}>
            <div class="section-1"></div>
            <div class="section-2">
                <div class="sub-1">
                    <div class="text left">{data['text1']}</div>
                    <div class="text right">{data['text3']}</div>
                </div>
                <div class="sub-2">
                    <div class="text">{data['text2']}</div>
                </div>
                <div class={collapsibleWrapperClass}>{chip1}</div>
            </div>
            {collapsibleBar()}
        </div>
    );
}

export function create5(component: KupCard) {
    let data = component.data;
    let layout = component.layoutNumber;
    let componentClass = 'custom-layout-' + layout;
    let CSSVariables = {
        ['--color-1']: data['color1'],
    };
    let chip1: KupChip = <kup-chip id="chips1" {...data['chip1']}></kup-chip>;
    let image1: KupImage = (
        <kup-image
            id="image1"
            color={data['color1']}
            sizeX="24px"
            sizeY="24px"
            {...data['image1']}
        ></kup-image>
    );
    return (
        <div class={componentClass} style={CSSVariables}>
            <div class="background"></div>
            <div class="section-1">
                <div class="sub-1">
                    <div class="text">{data['text1']}</div>
                </div>
                <div class="sub-2">
                    <div class="text">{data['text2']}</div>
                </div>
                <div class="sub-3">
                    <div class="image">{image1}</div>
                    <div class="text">{data['text3']}</div>
                </div>
            </div>
            <div class="section-2">{chip1}</div>
        </div>
    );
}

export function create6(component: KupCard) {
    let data = component.data;
    let layout = component.layoutNumber;
    let componentClass = 'custom-layout-' + layout + ' collapsible-card';
    let CSSVariables = {
        ['--color-1']: data['color1'],
    };
    let chip1: KupChip = (
        <kup-chip
            class="collapsible-element"
            id="chips1"
            {...data['chip1']}
        ></kup-chip>
    );
    let image1: KupImage = (
        <kup-image
            id="image1"
            color={data['color1']}
            sizeX="24px"
            sizeY="24px"
            {...data['image1']}
        ></kup-image>
    );
    let collapsibleWrapperClass = 'sub-4 collapsible-wrapper';
    if (component.sizeY !== '100%' && component.sizeY !== 'auto') {
        collapsibleWrapperClass += ' limited-height';
    }
    return (
        <div class={componentClass} style={CSSVariables}>
            <div class="section-1">
                <div class="sub-1">
                    <div class="text">{data['text1']}</div>
                </div>
                <div class="sub-2">
                    <div class="text">{data['text2']}</div>
                </div>
                <div class="sub-3">
                    <div class="image">{image1}</div>
                    <div class="text">{data['text3']}</div>
                </div>
                <div class={collapsibleWrapperClass}>{chip1}</div>
            </div>
            {collapsibleBar()}
        </div>
    );
}

function collapsibleBar() {
    return (
        <div class="collapsible-trigger">
            <kup-button
                id="expand-action"
                toggable
                iconOff="keyboard_arrow_down"
                icon="keyboard_arrow_up"
            ></kup-button>
        </div>
    );
}
