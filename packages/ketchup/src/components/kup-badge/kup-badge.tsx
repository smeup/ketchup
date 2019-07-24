import { Component, Prop, h } from '@stencil/core';

import { BadgePosition } from './kup-badge-declarations';

@Component({
    tag: 'kup-badge',
    styleUrl: 'kup-badge.scss',
    shadow: true,
})
export class KupBadge {
    @Prop()
    text: string;

    @Prop()
    position: BadgePosition = BadgePosition.TOP_RIGHT;

    @Prop()
    icon: string;

    render() {
        const text = this.text || '';

        const isTopRight = BadgePosition.TOP_RIGHT === this.position;
        const isBottomRight = BadgePosition.BOTTOM_RIGHT === this.position;
        const isBottomLeft = BadgePosition.BOTTOM_LEFT === this.position;

        const badgeClass = {
            topLeft: !isTopRight && !isBottomRight && !isBottomLeft,
            topRight: isTopRight,
            bottomRight: isBottomRight,
            bottomLeft: isBottomLeft,
        };

        if (!text && this.icon) {
            badgeClass[this.icon] = true;
        }

        return (
            <div id="badge" class={badgeClass}>
                {text}
            </div>
        );
    }
}
