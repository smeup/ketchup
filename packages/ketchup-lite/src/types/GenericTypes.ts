import { ComponentInterface } from '@stencil/core';
import { KulArticleEvent } from '../components/kul-article/kul-article-declarations';
import { KulBadgeEvent } from '../components/kul-badge/kul-badge-declarations';
import { KulButtonEvent } from '../components/kul-button/kul-button-declarations';
import { KulCardEvent } from '../components/kul-card/kul-card-declarations';
import { KulCodeEvent } from '../components/kul-code/kul-code-declarations';
import { KulDebugComponentInfo } from '../components';
import { KulImageEvent } from '../components/kul-image/kul-image-declarations';
import { KulSpinnerEvent } from '../components/kul-spinner/kul-spinner-declarations';
import { KulSplashEvent } from '../components/kul-splash/kul-splash-declarations';
import { KulUploadEvent } from '../components/kul-upload/kul-upload-declarations';
import { KulToastEvent } from '../components/kul-toast/kul-toast-declarations';
import { KulDrawerEvent } from '../components/kul-drawer/kul-drawer-declarations';
import { KulTextfieldEvent } from '../components/kul-textfield/kul-textfield-declarations';
import { KulChartEvent } from '../components/kul-chart/kul-chart-declarations';
import { KulHeaderEvent } from '../components/kul-header/kul-header-declarations';
import { KulLazyEvent } from '../components/kul-lazy/kul-lazy-declarations';
import { KulPhotoframeEvent } from '../components/kul-photoframe/kul-photoframe-declarations';
import { KulTabbarEvent } from '../components/kul-tabbar/kul-tabbar-declarations';
import { KulTreeEvent } from '../components/kul-tree/kul-tree-declarations';

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
        | KulArticleEvent
        | KulBadgeEvent
        | KulButtonEvent
        | KulCardEvent
        | KulChartEvent
        | KulCodeEvent
        | KulDrawerEvent
        | KulHeaderEvent
        | KulImageEvent
        | KulLazyEvent
        | KulPhotoframeEvent
        | KulSpinnerEvent
        | KulSplashEvent
        | KulTabbarEvent
        | KulTextfieldEvent
        | KulToastEvent
        | KulTreeEvent
        | KulUploadEvent;
    id: string;
    originalEvent: Event;
}
