import { Config } from '@stencil/core';
import { sass } from '@stencil/sass';

export const config: Config = {
    copy: [
        {
            src: 'chart.html',
        },
        {
            src: 'data-table.html',
        },
        {
            src: 'dash.html',
        },
    ],
    namespace: 'mycomponent',
    outputTargets: [
        { type: 'dist' },
        { type: 'docs-readme' },
        {
            type: 'www',
            serviceWorker: null, // disable service workers
        },
    ],
    plugins: [
        sass({
            injectGlobalPaths: [
                'src/style/_variables.scss',
                'src/style/global.scss',
            ],
        }),
    ],
};
