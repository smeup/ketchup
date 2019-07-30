import { Component, Prop, h } from '@stencil/core';
import { Badge } from './kup-image-declarations';

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
                return (
                    <kup-badge
                        text={badge.text}
                        position={badge.position}
                        icon={badge.icon}
                    />
                );
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
