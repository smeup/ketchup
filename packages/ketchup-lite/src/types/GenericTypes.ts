import { ComponentInterface } from '@stencil/core';
import { KulBadgeEvents } from '../components/kul-badge/kul-badge-declarations';
import { KulButtonEvents } from '../components/kul-button/kul-button-declarations';
import { KulCardEvents } from '../components/kul-card/kul-card-declarations';
import { KulImageEvents } from '../components/kul-image/kul-image-declarations';
import { KulDebugComponentInfo } from '../components';
import { KulSplashEvents } from '../components/kul-splash/kul-splash-declarations';

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
        | KulBadgeEvents
        | KulButtonEvents
        | KulCardEvents
        | KulImageEvents
        | KulSplashEvents;
    id: string;
    originalEvent: Event;
}
/**
 * Ketchup elements tag names.
 */
export type KulTagNames =
    | 'KUL-BADGE'
    | 'KUP-BUTTON'
    | 'KUP-CARD'
    | 'KUP-IMAGE'
    | 'KUP-SPLASH'
    | 'KUP-SPINNER';
