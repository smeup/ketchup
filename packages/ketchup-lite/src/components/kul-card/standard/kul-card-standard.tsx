import { h, VNode } from '@stencil/core';
import type { KulCard } from '../kul-card';
import type { GenericObject } from '../../../types/GenericTypes';
import { compList } from '../kul-card-helper';
import { KulCardCSSClasses } from '../kul-card-declarations';

export function create1(component: KulCard): VNode {
    const buttonArray: GenericObject[] = component.data['button']
        ? component.data['button']
        : [];
    const imageArray: GenericObject[] = component.data['image']
        ? component.data['image']
        : [];
    let textIndex: number = 0;
    const textArray: string[] = component.data['text']
        ? component.data['text']
        : [];
    return (
        <div
            class={`standard-layout-${component.layoutNumber} ${
                buttonArray.length > 0 ? KulCardCSSClasses.HAS_ACTIONS : ''
            }`}
        >
            <div class="mdc-ripple-surface">
                {imageArray[0] ? (
                    <div class="section-1">
                        <kup-image
                            id="image1"
                            {...imageArray[0]}
                            sizeX="100%"
                            sizeY="100%"
                        ></kup-image>
                    </div>
                ) : null}
                <div class="section-2">
                    {textArray[textIndex] ? (
                        <div class="sub-2 title">
                            <div>{textArray[textIndex]}</div>
                        </div>
                    ) : null}
                    {textArray[++textIndex] ? (
                        <div class="sub-2 subtitle">
                            <div>{textArray[textIndex]}</div>
                        </div>
                    ) : null}
                    {textArray[++textIndex] ? (
                        <div class="sub-2 description">
                            <div>{textArray[textIndex]}</div>
                        </div>
                    ) : null}
                </div>
            </div>
            {buttonArray.length > 0 ? (
                <div class="section-3">{compList(buttonArray, 'button')}</div>
            ) : null}
        </div>
    );
}
