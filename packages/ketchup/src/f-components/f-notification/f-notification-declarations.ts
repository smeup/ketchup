import type { FComponent } from '../../types/GenericTypes';
/**
 * Props of the f-switch component.
 */
export interface FNotificationProps extends FComponent {
    /**
     * When true, the component is visible.
     * @default false
     */
    visible: boolean;
    /**
     * The text to display.
     * @default ""
     */
    text: string;
    /**
     * The type of the notification.
     * @default "info"
     */
    type: 'info' | 'success' | 'warning' | 'danger';
}
