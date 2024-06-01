import { KulDataDataset } from '../../components';

export const COMPONENTS = [
    'article',
    'badge',
    'button',
    'card',
    'chart',
    'code',
    'image',
    'lazy',
    'list',
    'photoframe',
    'splash',
    'spinner',
    'switch',
    'tabbar',
    'textfield',
    'toast',
    'tree',
    'upload',
];

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
    monoPrimaryH3Large: {
        ['--kul_article_h3_color']: 'var(--kul-primary-color)',
        ['--kul_article_h3_font_family']: 'var(--kul-font-family-monospace)',
        ['--kul_article_h3_font_size']: 'calc(var(--kul-font-size) * 1.5)',
    },
};

export const KUL_SHOWCASE_UTILITIES: KulDataDataset = {
    nodes: [
        {
            description:
                'Provides an environment to test individual component functionality.',
            icon: 'bug',
            id: 'Debug',
            value: 'Debug',
        },
    ],
};

export const KUL_SHOWCASE_COMPONENTS: KulDataDataset = {
    nodes: [
        {
            description:
                'Generates semantic HTML for articles based on a JSON input.',
            icon: 'document',
            id: 'Article',
            value: 'Article',
        },
        {
            description:
                'Displays a count and label to provide context to content.',
            icon: 'notifications',
            id: 'Badge',
            value: 'Badge',
        },
        {
            description:
                'Provides a reusable button for various user interactions.',
            icon: 'brightness-1',
            id: 'Button',
            value: 'Button',
        },
        {
            description:
                'Displays content and actions related to a single topic in card format.',
            icon: 'art_track',
            id: 'Card',
            value: 'Card',
        },
        {
            description:
                'Integrates multiple types of charts using the Echarts library.',
            icon: 'pie_chart',
            id: 'Chart',
            value: 'Chart',
        },
        {
            description: 'Visualizes code in a readable format.',
            icon: 'code',
            id: 'Code',
            value: 'Code',
        },
        {
            description: 'Displays images and supports different resolutions.',
            icon: 'image',
            id: 'Image',
            value: 'Image',
        },
        {
            description:
                'Displays a placeholder until content is ready or enters viewport.',
            icon: 'flip_to_back',
            id: 'Lazy',
            value: 'Lazy',
        },
        {
            description: 'A component that displays a list of items.',
            icon: 'list',
            id: 'List',
            value: 'List',
        },
        {
            description:
                'Shows a placeholder image until the actual image is loaded upon entering viewport.',
            icon: 'photo_album',
            id: 'Photoframe',
            value: 'Photoframe',
        },
        {
            description:
                'Full-screen component for prominent app branding or introductory content.',
            icon: 'water',
            id: 'Splash',
            value: 'Splash',
        },
        {
            description:
                'Indicates a loading state, commonly used during content or page loading.',
            icon: 'vanish',
            id: 'Spinner',
            value: 'Spinner',
        },
        {
            description:
                'Simple component to toggle a boolean state on and off.',
            icon: 'toll',
            id: 'Switch',
            value: 'Switch',
        },
        {
            description: 'Provides a bar of clickable tabs for navigation.',
            icon: 'featured_play_list',
            id: 'Tabbar',
            value: 'Tab bar',
        },
        {
            description: 'Component for text input fields.',
            icon: 'text_fields',
            id: 'Textfield',
            value: 'Text field',
        },
        {
            description: 'Displays notification messages in a simple format.',
            icon: 'information-variant',
            id: 'Toast',
            value: 'Toast',
        },
        {
            description:
                'Renders a tree structure to display hierarchical data.',
            icon: 'file-tree',
            id: 'Tree',
            value: 'Tree',
        },
        {
            description: 'Provides functionality to upload files easily.',
            icon: 'upload',
            id: 'Upload',
            value: 'Upload',
        },
    ],
};

export const KUL_SHOWCASE_FRAMEWORK: KulDataDataset = {
    nodes: [
        {
            description: 'Handles various management tasks within the library.',
            icon: 'settings',
            id: 'KulManager',
            value: 'KulManager',
        },
    ],
};

export const KUL_SHOWCASE_LAYOUT: KulDataDataset = {
    nodes: [
        {
            description: 'Acts as the side menu within the application layout.',
            icon: 'web',
            id: 'Drawer',
            value: 'Drawer',
        },
        {
            description: 'Serves as the top header bar for the application.',
            icon: 'web_asset',
            id: 'Header',
            value: 'Header',
        },
    ],
};
