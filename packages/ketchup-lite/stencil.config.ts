import { Config } from '@stencil/core';
import { sass } from '@stencil/sass';
import { reactOutputTarget } from '@stencil/react-output-target';

export const config: Config = {
    sourceMap: false,
    namespace: 'ketchup-lite',
    outputTargets: [
        { type: 'docs-readme' },
        {
            type: 'www',
            serviceWorker: null,
            copy: [
                { src: 'pages', dest: 'pages' },
                { src: 'assets', dest: 'assets' },
            ],
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
            includePaths: ['./node_modules'],
            injectGlobalPaths: ['src/style/global.scss'],
        }),
    ],
};
