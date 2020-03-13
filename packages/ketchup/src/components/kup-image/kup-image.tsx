import { Component, Prop, h, Host } from '@stencil/core';
import { Badge } from './kup-image-declarations';
import { formatSize } from '../../utils/utils';

@Component({
    tag: 'kup-image',
    styleUrl: 'kup-image.scss',
    shadow: true,
})
export class KupImage {
    public static readonly DEFAULT_WIDTH = '64px';
    public static readonly DEFAULT_HEIGHT = '64px';

    @Prop()
    src = '';

    @Prop()
    alt = '';

    @Prop()
    width = KupImage.DEFAULT_WIDTH;

    @Prop()
    height = KupImage.DEFAULT_HEIGHT;

    @Prop()
    maxWidth = '';

    @Prop()
    maxHeight = '';

    /**
     * When the image width should be decided by limiting its height.
     * This leverages the browser default image handling mechanism.
     * Have a look at the CSS part for more details.
     */
    @Prop({reflect: true}) limitWidthByHeight = false;

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

        let width = formatSize(`${this.width}`);
        let height = formatSize(`${this.height}`);
        let maxWidth = formatSize(`${this.maxWidth}`);
        let maxHeight = formatSize(`${this.maxHeight}`);

        const wrapperStyle = {
            width: width,
            height: height,
            ...(maxWidth ? { maxWidth: maxWidth } : {}),
            ...(maxHeight ? { maxHeight: maxHeight } : {}),
        };

        return (
            <Host style={wrapperStyle}>
                <img src={this.src} alt={this.alt} />
                {badgesElem}
            </Host>
        );
    }
}
