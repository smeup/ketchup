export type KulSplashEvents = 'unmount';

export enum KulSplashProps {
    kulLabel = 'The text displayed inside the badge.',
    kulStyle = 'Custom style of the component.',
}

export interface KulSplashPropsInterface {
    kulLabel: string;
    kulStyle: string;
}

export type KulSplashStates = 'initializing' | 'unmounting';
