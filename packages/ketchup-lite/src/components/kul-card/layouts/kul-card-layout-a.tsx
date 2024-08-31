import { h, VNode } from '@stencil/core';
import { KulDataShapesMap } from '../../../components';
import { KulCard } from './../kul-card';
import { kulManagerInstance } from '../../../managers/kul-manager/kul-manager';
import { RIPPLE_SURFACE_CLASS } from '../../../variables/GenericVariables';
import { KulCardCSSClasses } from './../kul-card-declarations';
import { KulDataCyAttributes } from '../../../types/GenericTypes';
import { getShapes } from '../helpers/shapes';

export function getLayoutA(component: KulCard, shapes: KulDataShapesMap = {}) {
    const buttons = getShapes.buttons(shapes.button);
    const images = getShapes.image(shapes.image, [
        {
            kulSizeX: '100%',
            kulSizeY: '100%',
        },
    ]);
    const text = getShapes.text(shapes.text);

    const coverIndex = 0;
    const cover: VNode = images.length ? images[coverIndex] : null;

    const titleIndex = 0;
    const title = text.length ? shapes.text[titleIndex] : null;

    const subtitleIndex = 1;
    const subtitle =
        text.length > subtitleIndex ? shapes.text[subtitleIndex] : null;

    const descriptionIndex = 2;
    const description =
        text.length > descriptionIndex
            ? shapes.text[descriptionIndex]
            : undefined;
    return (
        <div
            class={`layout-${component.kulLayout} ${
                buttons.length ? KulCardCSSClasses.HAS_ACTIONS : ''
            }`}
        >
            <div
                class={RIPPLE_SURFACE_CLASS}
                data-cy={KulDataCyAttributes.RIPPLE}
                onPointerDown={(e) => {
                    kulManagerInstance().theme.ripple.trigger(
                        e as PointerEvent,
                        e.currentTarget as HTMLElement
                    );
                }}
            >
                <div class="section-1">{cover}</div>
                <div class="section-2">
                    <div class="sub-2 title">{title}</div>
                    <div class="sub-2 subtitle">{subtitle}</div>
                    <div class="sub-2 description">{description}</div>
                </div>
            </div>
            {buttons.length ? <div class="section-3">{buttons}</div> : null}
        </div>
    );
}
