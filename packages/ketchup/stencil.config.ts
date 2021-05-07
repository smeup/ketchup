import { Config } from '@stencil/core';
import { sass } from '@stencil/sass';

export const config: Config = {
    buildEs5: false,
    extras: {
        cssVarsShim: true,
    },
    namespace: 'ketchup',
    outputTargets: [
        { type: 'dist' },
        { type: 'docs-readme' },
        {
            type: 'www',
            copy: [
                { src: 'autocomplete.html' },
                { src: 'box.html' },
                { src: 'box-performance.html' },
                { src: 'btn.html' },
                { src: 'card.html' },
                { src: 'chart.html' },
                { src: 'color-picker.html' },
                { src: 'dash.html' },
                { src: 'dash-list.html' },
                { src: 'data-table.html' },
                { src: 'data-table-performance.html' },
                { src: 'debug.html' },
                { src: 'drawer.html' },
                { src: 'echart.html' },
                { src: 'gauge.html' },
                { src: 'magic-box.html' },
                { src: 'nav-bar.html' },
                { src: 'probe.html' },
                { src: 'rating.html' },
                { src: 'tooltip.html' },
                { src: 'tree.html' },
            ],
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
