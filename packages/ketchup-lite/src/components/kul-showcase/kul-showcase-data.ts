import { KulDataDataset } from '../../components';

export const DOC_STYLES = {
    monoPrimaryContent: {
        ['--kul_article_content_color']: 'var(--kul-primary-color)',
        ['--kul_article_content_font_family']:
            'var(--kul-font-family-monospace)',
    },
    monoPrimaryH3: {
        ['--kul_article_h3_color']: 'var(--kul-primary-color)',
        ['--kul_article_h3_font_family']: 'var(--kul-font-family-monospace)',
        ['--kul_article_h3_font_size']: 'var(--kul-font-size)',
    },
};

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
            description: 'A simple code visualizer.',
            icon: 'code',
            id: 'Code',
            value: 'Code',
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
        {
            description: 'A bar of clickable tabs.',
            icon: 'featured_play_list',
            id: 'Tabbar',
            value: 'Tab bar',
        },
        {
            description:
                'A simple component suitable to display notification messages.',
            icon: 'information-variant',
            id: 'Toast',
            value: 'Toast',
        },
        {
            description: 'A simple component useful to upload files.',
            icon: 'upload',
            id: 'Upload',
            value: 'Upload',
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

export const KUL_SHOWCASE_LAYOUT: KulDataDataset = {
    nodes: [
        {
            description: 'Designed to be the aside menu of the application.',
            icon: 'web',
            id: 'Drawer',
            value: 'Drawer',
        },
        {
            description: 'Designed to be the header bar of the application.',
            icon: 'web_asset',
            id: 'Header',
            value: 'Header',
        },
    ],
};
