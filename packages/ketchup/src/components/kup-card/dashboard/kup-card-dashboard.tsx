import { h } from '@stencil/core';
import { KupCard } from '../kup-card';

export function create1(component: KupCard) {
    let componentClass =
        'dashboard-layout-' + component.layoutNumber + ' dashboard-card';
    let CSSVariables = {
        ['--multiplier']: '1',
    };
    return (
        <div class={componentClass} style={CSSVariables}>
            <div>
                <div class="description">
                    <div>{component.data['text1']}</div>
                </div>
                <div class="value dashboard-element">
                    <div>{component.data['text2']}</div>
                </div>
            </div>
        </div>
    );
}
