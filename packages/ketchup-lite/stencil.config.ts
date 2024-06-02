import { Config } from '@stencil/core';
import { sass } from '@stencil/sass';
import { reactOutputTarget } from '@stencil/react-output-target';

export const config: Config = {
    bundles: [
        {
            components: [
                'kul-showcase',
                'kul-showcase-article',
                'kul-showcase-badge',
                'kul-showcase-button',
                'kul-showcase-card',
                'kul-showcase-chart',
                'kul-showcase-code',
                'kul-showcase-debug',
                'kul-showcase-drawer',
                'kul-showcase-header',
                'kul-showcase-image',
                'kul-showcase-lazy',
                'kul-showcase-list',
                'kul-showcase-kulmanager',
                'kul-showcase-photoframe',
                'kul-showcase-spinner',
                'kul-showcase-splash',
                'kul-showcase-switch',
                'kul-showcase-tabbar',
                'kul-showcase-textfield',
                'kul-showcase-toast',
                'kul-showcase-tree',
                'kul-showcase-upload',
            ],
        },
    ],
    namespace: 'ketchup-lite',
    outputTargets: [
        {
            file: 'src/docs/doc.json',
            type: 'docs-json',
        },
        { type: 'docs-readme' },
        {
            copy: [{ src: 'assets' }],
            type: 'www',
            serviceWorker: null,
        },
        reactOutputTarget({
            componentCorePackage: 'ketchup-lite',
            proxiesFile: '../ketchup-lite-react/src/index.ts',
            includeDefineCustomElements: true,
        }),
        {
            type: 'dist',
            esmLoaderPath: './loader',
        },
        {
            type: 'dist-custom-elements',
        },
    ],
    plugins: [
        sass({
            includePaths: ['./node_modules', './src/style'],
            injectGlobalPaths: ['src/style/global.scss'],
        }),
    ],
    sourceMap: false,
};
