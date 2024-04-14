import { KulDataDataset } from '../../components';

export const KUL_SHOWCASE_UTILITIES: KulDataDataset = {
    nodes: [
        {
            description: "Environment to test a single component's behavior.",
            icon: 'bug',
            id: 'Debugging',
            value: 'Debugging',
        },
        {
            description:
                'Environment for performance testing through kul-probe.',
            icon: 'timer',
            id: 'Probe',
            value: 'Probe',
        },
    ],
};

export const KUL_SHOWCASE_COMPONENTS: KulDataDataset = {
    nodes: [
        {
            description:
                'A component that writes semantic article-related HTML from a JSON dataset.',
            icon: 'document',
            id: 'Article',
            value: 'Article',
        },
        {
            description:
                'A small count and labeling component that adds context to content.',
            icon: 'notifications',
            id: 'Badge',
            value: 'Badge',
        },
        {
            description: 'A reusable button component for user interactions.',
            icon: 'brightness-1',
            id: 'Button',
            value: 'Button',
        },
        {
            description:
                'A card component for displaying content and actions on a single topic.',
            icon: 'art_track',
            id: 'Card',
            value: 'Card',
        },
        {
            description:
                'A component for displaying images with support for different resolutions.',
            icon: 'image',
            id: 'Image',
            value: 'Image',
        },
        {
            description:
                'A full-screen component designed to display prominent app branding or introductory content.',
            icon: 'water',
            id: 'Splash',
            value: 'Splash',
        },
        {
            description:
                'A component that indicates a loading state, often used during content or page loading.',
            icon: 'vanish',
            id: 'Spinner',
            value: 'Spinner',
        },
    ],
};

export const KUL_SHOWCASE_FRAMEWORK: KulDataDataset = {
    nodes: [
        {
            description: 'Manages various aspects of the library.',
            icon: 'settings',
            id: 'Manager',
            value: 'Manager',
        },
    ],
};
