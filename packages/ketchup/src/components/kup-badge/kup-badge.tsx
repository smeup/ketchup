import { Component, Element, Prop, h, Host } from '@stencil/core';
import { BadgePosition } from './kup-badge-declarations';
import { errorLogging } from '../../utils/error-logging';

@Component({
    tag: 'kup-badge',
    styleUrl: 'kup-badge.scss',
    shadow: true,
})
export class KupBadge {
    @Element() rootElement: HTMLElement;

    /**
     * Custom style to be passed to the component.
     */
    @Prop({ reflect: true }) customStyle: string = undefined;
    /**
     * The data of the image displayed inside the badge.
     */
    @Prop() imageData: {} = undefined;
    /**
     * The position of the badge relative to its parent. Supported values: "TL" (top left), "TR" (top right), "BL" (bottom left), "BR" (bottom left).
     */
    @Prop({ reflect: true }) position: BadgePosition = BadgePosition.TOP_RIGHT;
    /**
     * The text displayed inside the badge.
     */
    @Prop({ reflect: true }) text: string = undefined;

    render() {
        if (this.text === undefined && this.imageData === undefined) {
            let message = 'Empty badge, not rendering!';
            errorLogging('kup-badge', message);
            return;
        }

        let imageEl: HTMLElement = undefined;
        let customStyle = undefined;
        if (this.customStyle) {
            customStyle = <style>{this.customStyle}</style>;
        }

        const isTopRight = BadgePosition.TOP_RIGHT === this.position;
        const isBottomRight = BadgePosition.BOTTOM_RIGHT === this.position;
        const isBottomLeft = BadgePosition.BOTTOM_LEFT === this.position;

        const hostClass = {
            'top-left': !isTopRight && !isBottomRight && !isBottomLeft,
            'top-right': isTopRight,
            'bottom-right': isBottomRight,
            'bottom-left': isBottomLeft,
        };

        if (this.text === undefined && this.imageData !== undefined) {
            if (!this.imageData['sizeX']) {
                this.imageData['sizeX'] = '.8rem';
            }
            if (!this.imageData['sizeY']) {
                this.imageData['sizeY'] = '.8rem';
            }
            if (!this.imageData['color']) {
                this.imageData['color'] = 'var(--kup-text-on-main-color)';
            }
            imageEl = <kup-image {...this.imageData}></kup-image>;
        }

        return (
            <Host class={hostClass}>
                {customStyle}
                <div id="kup-component">
                    {this.text}
                    {imageEl}
                </div>
            </Host>
        );
    }
}
