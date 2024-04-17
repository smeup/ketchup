import { ComponentInterface } from '@stencil/core';
import { KulArticleEvents } from '../components/kul-article/kul-article-declarations';
import { KulBadgeEvents } from '../components/kul-badge/kul-badge-declarations';
import { KulButtonEvents } from '../components/kul-button/kul-button-declarations';
import { KulCardEvents } from '../components/kul-card/kul-card-declarations';
import { KulCodeEvents } from '../components/kul-code/kul-code-declarations';
import { KulDebugComponentInfo } from '../components';
import { KulImageEvents } from '../components/kul-image/kul-image-declarations';
import { KulSpinnerEvents } from '../components/kul-spinner/kul-spinner-declarations';
import { KulSplashEvents } from '../components/kul-splash/kul-splash-declarations';
import { KulUploadEvents } from '../components/kul-upload/kul-upload-declarations';

/**
 * Generic KulComponent.
 */
export interface KulComponent extends ComponentInterface {
    getDebugInfo: () => Promise<KulDebugComponentInfo>;
    getProps: (descriptions?: boolean) => Promise<GenericObject>;
    kulStyle: string;
    refresh: () => Promise<void>;
    rootElement: unknown;
}
/**
 * Resizable KulComponent.
 */
export interface ResizableKulComponent extends KulComponent {
    resizeCallback: () => {};
}
/**
 * Generic map.
 */
export interface GenericMap {
    [index: string]: string;
}
/**
 * Generic object.
 */
export interface GenericObject<T = unknown> {
    [index: string]: T;
}
/**
 * Generic payload of a kul event.
 */
export interface KulEventPayload {
    comp: unknown;
    eventType:
        | KulArticleEvents
        | KulCodeEvents
        | KulBadgeEvents
        | KulButtonEvents
        | KulCardEvents
        | KulImageEvents
        | KulSpinnerEvents
        | KulSplashEvents
        | KulUploadEvents;
    id: string;
    originalEvent: Event;
}
