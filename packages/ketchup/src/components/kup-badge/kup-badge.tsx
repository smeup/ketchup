import { Component, Prop, h, Host } from '@stencil/core';

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

        const hostClass = {
            'top-left': !isTopRight && !isBottomRight && !isBottomLeft,
            'top-right': isTopRight,
            'bottom-right': isBottomRight,
            'bottom-left': isBottomLeft,
        };

        const badgeClass: any = {};
        if (!text && this.icon) {
            badgeClass[this.icon] = true;
        }

        return (
            <Host class={hostClass}>
                <div id="badge" class={badgeClass}>
                    {text}
                </div>
            </Host>
        );
    }
}
