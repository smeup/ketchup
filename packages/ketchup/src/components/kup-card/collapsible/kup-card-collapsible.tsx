import { h } from '@stencil/core';
import { KupImage } from '../../kup-image/kup-image';
import { KupChip } from '../../kup-chip/kup-chip';
import { KupCard } from '../kup-card';

export function create1(component: KupCard) {
    let data = component.data;
    let layout = component.layoutNumber;
    let componentClass = 'collapsible-layout-' + layout + ' collapsible-card';
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
                <div class="sub-3 collapsible-wrapper">{chip1}</div>
            </div>
            {collapsibleBar()}
        </div>
    );
}

export function create2(component: KupCard) {
    let data = component.data;
    let layout = component.layoutNumber;
    let componentClass = 'collapsible-layout-' + layout + ' collapsible-card';
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
                <div class="sub-4 collapsible-wrapper">{chip1}</div>
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
