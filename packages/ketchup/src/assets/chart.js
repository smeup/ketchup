const baseData = {
    columns: [
        {
            name: 'Col1',
            title: 'Person',
            size: '10',
        },
        {
            name: 'Col2',
            title: 'Value',
            size: '10',
        },
        {
            name: 'Col3',
            title: 'Value2',
            size: '10',
        },
    ],
    rows: [
        {
            cells: {
                Col1: {
                    obj: {
                        t: 'CN',
                        p: 'COL',
                        k: 'CASFRA',
                    },
                    value: 'CASFRA',
                },
                Col2: {
                    obj: {
                        t: 'NR',
                        p: '',
                        k: '10',
                    },
                    value: '10',
                },
                Col3: {
                    obj: {
                        t: 'NR',
                        p: '',
                        k: '100.60',
                    },
                    value: '100.60',
                },
            },
        },
        {
            cells: {
                Col1: {
                    obj: {
                        t: 'CN',
                        p: 'COL',
                        k: 'DELGIO',
                    },
                    value: 'DELGIO',
                },
                Col2: {
                    obj: {
                        t: 'NR',
                        p: '',
                        k: '6',
                    },
                    value: '6',
                },
                Col3: {
                    obj: {
                        t: 'NR',
                        p: '',
                        k: '67.8',
                    },
                    value: '67.8',
                },
            },
        },
        {
            cells: {
                Col1: {
                    obj: {
                        t: 'CN',
                        p: 'COL',
                        k: 'PARFRA',
                    },
                    value: 'PARFRA',
                },
                Col2: {
                    obj: {
                        t: 'NR',
                        p: '',
                        k: '5',
                    },
                    value: '5',
                },
                Col3: {
                    obj: {
                        t: 'NR',
                        p: '',
                        k: '120.06',
                    },
                    value: '120.06',
                },
            },
        },
    ],
};

const baseConfig = {
    type: 'Hbar',
    axe: 'Col1',
    series: ['Col2', 'Col3'],
};

// HBAR
const hbar = document.getElementById('hbar');
hbar.data = baseData;
hbar.config = baseConfig;

// VBAR
const vbar = document.getElementById('vbar');
vbar.data = baseData;
vbar.config = {
    ...baseConfig,
    type: 'Vbar',
};
document
    .getElementById('vbar-stacked')
    .addEventListener('change', ({ target }) => {
        vbar.config = {
            ...vbar.config,
            stacked: target.checked,
        };
    });

// PIE
const pie = document.getElementById('pie');
pie.data = baseData;
pie.config = {
    ...baseConfig,
    series: ['Col2'],
    type: 'Pie',
};
document.getElementById('pie-aspect').addEventListener('change', (e) => {
    pie.config = {
        ...pie.config,
        asp: e.target.checked ? '3D' : '',
    };
});

// custom colors
document.getElementById('colors').addEventListener('change', ({ target }) => {
    const charts = document.querySelectorAll('ketchup-chart');

    charts.forEach((chart) => {
        const config = { ...chart.config };

        if (target.checked) {
            config.colors = ['#ccc', '#333', '#666'];
        } else {
            delete config['colors'];
        }

        chart.config = config;
    });
});

// custom size
document.getElementById('size').addEventListener('change', ({ target }) => {
    const charts = document.querySelectorAll('ketchup-chart');

    charts.forEach((chart) => {
        const config = { ...chart.config };

        if (target.checked) {
            config.width = config.height = 400;
        } else {
            delete config['width'];
            delete config['height'];
        }

        chart.config = config;
    });
});

// enable / disable legend
document.getElementById('legend').addEventListener('change', ({ target }) => {
    const charts = document.querySelectorAll('ketchup-chart');

    charts.forEach((chart) => {
        chart.config = {
            ...chart.config,
            leg: target.checked,
        };
    });
});

// title
document.getElementById('title').addEventListener('change', ({ target }) => {
    const charts = document.querySelectorAll('ketchup-chart');

    charts.forEach((chart) => {
        chart.config = {
            ...chart.config,
            title: target.value,
        };
    });
});

// title color
document
    .getElementById('title-color')
    .addEventListener('change', ({ target }) => {
        const charts = document.querySelectorAll('ketchup-chart');

        charts.forEach((chart) => {
            chart.config = {
                ...chart.config,
                titleColor: target.value,
            };
        });
    });

// title size
document
    .getElementById('title-size')
    .addEventListener('change', ({ target }) => {
        console.log(target.value);

        if (!target.value) {
            return;
        }

        const charts = document.querySelectorAll('ketchup-chart');

        charts.forEach((chart) => {
            chart.config = {
                ...chart.config,
                titleSize: target.value,
            };
        });
    });
