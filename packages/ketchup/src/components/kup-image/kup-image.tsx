import { Component, Prop, h } from '@stencil/core';
import { Badge, BadgePosition } from './kup-image-declarations';

@Component({
    tag: 'kup-image',
    styleUrl: 'kup-image.scss',
    shadow: true,
})
export class KupImage {
    @Prop()
    src = '';

    @Prop()
    alt = '';

    @Prop()
    width = 64;

    @Prop()
    height = 64;

    @Prop()
    badges: Badge[];

    render() {
        let badgesElem = null;

        if (this.badges) {
            badgesElem = this.badges.map((badge) => {
                const text = badge.text || '';

                const isTopRight = BadgePosition.TOP_RIGHT === badge.position;
                const isBottomRight =
                    BadgePosition.BOTTOM_RIGHT === badge.position;
                const isBottomLeft =
                    BadgePosition.BOTTOM_LEFT === badge.position;

                const badgeClass = {
                    badge: true,
                    topLeft: !isTopRight && !isBottomRight && !isBottomLeft,
                    topRight: isTopRight,
                    bottomRight: isBottomRight,
                    bottomLeft: isBottomLeft,
                };

                if (!text && badge.icon) {
                    badgeClass[badge.icon] = badge.icon;
                }

                return <span class={badgeClass}>{text}</span>;
            });
        }

        const wrapperStyle = {
            width: `${this.width}px`,
            height: `${this.height}px`,
        };

        return (
            <div id="image-wrapper" style={wrapperStyle}>
                <img src={this.src} alt={this.alt} />
                {badgesElem}
            </div>
        );
    }
}
