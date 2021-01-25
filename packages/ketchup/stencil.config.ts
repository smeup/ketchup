import { Config } from '@stencil/core';
import { sass } from '@stencil/sass';

export const config: Config = {
    /* buildEs5: false,*/
    extras: {
        cssVarsShim: true,
    },
    copy: [
        {
            src: 'autocomplete.html',
        },
        {
            src: 'box.html',
        },
        {
            src: 'chart.html',
        },
        {
            src: 'data-table.html',
        },
        {
            src: 'data-table-performance.html',
        },
        {
            src: 'rating.html',
        },
        {
            src: 'color-picker.html',
        },
        {
            src: 'dash.html',
        },
        {
            src: 'dash-list.html',
        },
        {
            src: 'echart.html',
        },
        {
            src: 'tree.html',
        },
        {
            src: 'nav-bar.html',
        },
        {
            src: 'tooltip.html',
        },
        {
            src: 'drawer.html',
        },
    ],

    namespace: 'ketchup',
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
            includePaths: ['./node_modules'],
            injectGlobalPaths: ['src/style/global.scss'],
        }),
    ],
};
