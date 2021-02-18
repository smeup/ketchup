import { h } from '@stencil/core';
import { FImage } from '../../../f-components/f-image/f-image';
import { KupCard } from '../kup-card';

export function create1(component: KupCard) {
    let componentClass =
        'collapsible-layout-' + component.layoutNumber + ' collapsible-card';
    let CSSVariables = {
        ['--color-1']: component.data['color1'],
    };
    return (
        <div class={componentClass} style={CSSVariables}>
            <div class="section-1"></div>
            <div class="section-2">
                <div class="sub-1">
                    <div class="text left">{component.data['text1']}</div>
                    <div class="text right">{component.data['text3']}</div>
                </div>
                <div class="sub-2">
                    <div class="text">{component.data['text2']}</div>
                </div>
                <div class="sub-3 collapsible-wrapper">
                    {component.data['chip1'] && (
                        <kup-chip
                            class="collapsible-element"
                            id="chip1"
                            {...component.data['chip1']}
                        ></kup-chip>
                    )}
                </div>
            </div>
            {collapsibleBar()}
        </div>
    );
}

export function create2(component: KupCard) {
    let componentClass =
        'collapsible-layout-' + component.layoutNumber + ' collapsible-card';
    let CSSVariables = {
        ['--color-1']: component.data['color1'],
    };
    return (
        <div class={componentClass} style={CSSVariables}>
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
                <div class="sub-4 collapsible-wrapper">
                    {component.data['chip1'] && (
                        <kup-chip
                            class="collapsible-element"
                            id="chip1"
                            {...component.data['chip1']}
                        ></kup-chip>
                    )}
                </div>
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
