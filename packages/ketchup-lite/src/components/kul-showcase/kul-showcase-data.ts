import { KulDataDataset } from '../../components';

export const KUL_SHOWCASE_UTILITIES: KulDataDataset = {
    nodes: [
        {
            description: "Environment to test a single component's behavior.",
            icon: 'bug',
            id: 'kul-debug',
            value: 'Debug',
        },
        {
            description:
                'Environment for performance testing through kul-probe.',
            icon: 'timer',
            id: 'kul-probe',
            value: 'Probe',
        },
    ],
};

export const KUL_SHOWCASE_COMPONENTS: KulDataDataset = {
    nodes: [
        {
            description:
                'A small count and labeling component that adds context to content.',
            icon: 'notifications',
            id: 'kul-badge',
            value: 'Badge',
        },
        {
            description: 'A reusable button component for user interactions.',
            icon: 'brightness-1',
            id: 'kul-button',
            value: 'Button',
        },
        {
            description:
                'A card component for displaying content and actions on a single topic.',
            icon: 'art_track',
            id: 'kul-card',
            value: 'Card',
        },
        {
            description:
                'A component for displaying images with support for different resolutions.',
            icon: 'image',
            id: 'kul-image',
            value: 'Image',
        },
        {
            description:
                'A full-screen component designed to display prominent app branding or introductory content.',
            icon: 'water',
            id: 'kul-splash',
            value: 'Splash',
        },
        {
            description:
                'A component that indicates a loading state, often used during content or page loading.',
            icon: 'vanish',
            id: 'kul-spinner',
            value: 'Spinner',
        },
    ],
};
