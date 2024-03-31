import { ComponentInterface } from '@stencil/core';
import { KulButtonEvents } from '../components/kul-button/kul-button-declarations';
import { KulImageEvents } from '../components/kul-image/kul-image-declarations';
import { KulCardEvents } from '../components/kul-card/kul-card-declarations';
import { KulBadgeEvents } from '../components/kul-badge/kul-badge-declarations';

/**
 * Generic KulComponent.
 */
export interface KulComponent extends ComponentInterface {
    kulStyle: string;
    debugInfo?: {
        endTime: number;
        renderCount: number;
        renderEnd: number;
        renderStart: number;
        startTime: number;
    };
    rootElement?: unknown;
    getProps?: (descriptions?: boolean) => Promise<GenericObject>;
    refresh?: () => Promise<void>;
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
        | KulImageEvents;
    id: string;
    originalEvent: Event;
}
/**
 * Ketchup elements tag names.
 */
export type KulTagNames = 'KUL-BADGE' | 'KUP-BUTTON' | 'KUP-CARD' | 'KUP-IMAGE';
