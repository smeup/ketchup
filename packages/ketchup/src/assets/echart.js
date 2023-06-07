const echart1 = document.getElementById('piechart');
const echart2 = document.getElementById('mapchart');
const echart3 = document.getElementById('gaussianchart');
const echart4 = document.getElementById('gaussian1chart');
const echart5 = document.getElementById('gaussian2chart');
const echart6 = document.getElementById('funnelChart');
const echart7 = document.getElementById('radarChart');
const echart8 = document.getElementById('bubbleChart');

const mockData = {
    columns: [
        {
            name: 'Col1',
            title: 'Person',
            size: '10',
        },
        {
            name: 'Col2',
            title: 'Value1',
            size: '10',
        },
        {
            name: 'Col3',
            title: 'Value2',
            size: '10',
        },
        {
            name: 'Col4',
            title: 'Value3',
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
                Col4: {
                    obj: {
                        t: 'NR',
                        p: '',
                        k: '55',
                    },
                    value: '55',
                },
            },
            id: '0',
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
                Col4: {
                    obj: {
                        t: 'NR',
                        p: '',
                        k: '33',
                    },
                    value: '33',
                },
            },
            id: '1',
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
                Col4: {
                    obj: {
                        t: 'NR',
                        p: '',
                        k: '77',
                    },
                    value: '77',
                },
            },
            id: '2',
        },
    ],
};
echart1.chartTitle = {
    value: 'This is a title.',
    color: 'red',
    position: 'top',
    size: 16,
};
echart1.colors = ['blue'];
echart1.series = ['Col3', 'Col4'];
echart1.types = ['Line', 'Scatter'];
echart1.data = mockData;
echart2.axis = 'Col1';
echart2.types = ['Map'];
echart2.data = {
    columns: [
        {
            name: 'Col1',
            title: 'State',
            size: '10',
        },
        {
            name: 'Col2',
            title: 'Color',
            size: '10',
        },
        {
            name: 'Col3',
            title: 'Value',
            size: '10',
        },
    ],
    rows: [
        {
            cells: {
                Col1: {
                    obj: {
                        t: '',
                        p: '',
                        k: 'DE',
                    },
                    value: 'DE',
                },
                Col2: {
                    obj: {
                        t: 'Color',
                        p: '',
                        k: 'red',
                    },
                    value: 'red',
                },
                Col3: {
                    obj: {
                        t: 'NR',
                        p: '',
                        k: '100',
                    },
                    value: '100',
                },
            },
        },
        {
            cells: {
                Col1: {
                    obj: {
                        t: '',
                        p: '',
                        k: 'US',
                    },
                    value: 'US',
                },
                Col2: {
                    obj: {
                        t: 'Color',
                        p: '',
                        k: 'Green',
                    },
                    value: 'Green',
                },
                Col3: {
                    obj: {
                        t: 'NR',
                        p: '',
                        k: '2000000',
                    },
                    value: '2000000',
                },
            },
        },
        {
            cells: {
                Col1: {
                    obj: {
                        t: '',
                        p: '',
                        k: 'Brazil',
                    },
                    value: 'Brazil',
                },
                Col2: {
                    obj: {
                        t: 'Color',
                        p: '',
                        k: 'purple',
                    },
                    value: 'purple',
                },
                Col3: {
                    obj: {
                        t: 'NR',
                        p: '',
                        k: '300.3',
                    },
                    value: '300.3',
                },
            },
        },
        {
            cells: {
                Col1: {
                    obj: {
                        t: '',
                        p: '',
                        k: 'Canada',
                    },
                    value: 'Canada',
                },
                Col2: {
                    obj: {
                        t: 'Color',
                        p: '',
                        k: 'yellow',
                    },
                    value: 'yellow',
                },
                Col3: {
                    obj: {
                        t: 'NR',
                        p: '',
                        k: '400',
                    },
                    value: '400',
                },
            },
        },
        {
            cells: {
                Col1: {
                    obj: {
                        t: '',
                        p: '',
                        k: 'France',
                    },
                    value: 'France',
                },
                Col2: {
                    obj: {
                        t: 'Color',
                        p: '',
                        k: 'orange',
                    },
                    value: 'orange',
                },
                Col3: {
                    obj: {
                        t: 'NR',
                        p: '',
                        k: '500',
                    },
                    value: '500',
                },
            },
        },
    ],
};
echart3.series = ['S1', 'S2', 'S3'];
echart3.types = ['Gaussian'];
const rows = [];
const columns = [
    {
        name: 'S1',
        obj: {
            t: 'NR',
            p: '',
            k: '',
        },
        title: 'Series 1',
    },
    {
        name: 'S2',
        obj: {
            t: 'NR',
            p: '',
            k: '',
        },
        title: 'Series 2',
    },
    {
        name: 'S3',
        obj: {
            t: 'NR',
            p: '',
            k: '',
        },
        title: 'Series 3',
    },
];
for (let index = 0; index < 200; index++) {
    const value1 = (Math.random() * (20 - 10 + 1) + 10).toString();
    const value2 = (Math.random() * (50 - 45 + 1) + 45).toString();
    const value3 = (Math.random() * (5 - 4.8 + 1) + 4.8).toString();
    const row = {
        cells: {
            S1: {
                obj: {
                    t: 'NR',
                    p: '',
                    k: value1,
                },
                value: value1,
            },
            S2: {
                obj: {
                    t: 'NR',
                    p: '',
                    k: value2,
                },
                value: value2,
            },
            S3: {
                obj: {
                    t: 'NR',
                    p: '',
                    k: value3,
                },
                value: value3,
            },
        },
    };
    rows.push(row);
}
echart3.data = {
    columns: columns,
    rows: rows,
};

const testMock = [
    'A',
    'B',
    'C',
    'D',
    'E',
    'F',
    'G',
    'H',
    'I',
    'L',
    'M',
    'N',
    'O',
    'P',
    'Q',
    'R',
    'S',
    'T',
    'U',
    'V',
    'Z',
];

const testMockRows = [];
for (let index = 0; index < testMock.length; index++) {
    const element = testMock[index];
    const value1 = Math.floor(Math.random() * 100);
    const value2 = Math.floor(Math.random() * 100);

    testMockRows.push({
        cells: {
            COL1: {
                obj: {
                    t: 'NR',
                    p: '',
                    k: value1.toString(),
                },
                value: value1.toString(),
            },
            COL2: {
                obj: {
                    t: 'NR',
                    p: '',
                    k: value2.toString(),
                },
                value: value2.toString(),
            },
            COL3: {
                value: element,
            },
            COL4: {
                obj: {
                    t: 'NR',
                    p: '',
                    k: value1.toString(),
                },
                value: value1.toString(),
            },
        },
    });
}
const testMockColumns = [
    {
        name: 'COL1',
        obj: {
            t: 'NR',
            p: '',
            k: '',
        },
        title: 'Series 1',
    },
    {
        name: 'COL3',
        title: 'Series 3',
    },
];
echart4.consistencyCheck = true;
echart4.types = ['Gaussian', 'Bar'];
echart4.axis = 'COL3';
echart4.data = {
    columns: testMockColumns,
    rows: testMockRows,
};
echart5.consistencyCheck = true;
echart5.types = ['Gaussian', 'Bar', 'Scatter'];
echart5.axis = 'COL3';
echart5.data = {
    columns: testMockColumns,
    rows: testMockRows,
};

echart6.consistencyCheck = true;
echart6.types = ['Funnel'];
echart6.colors = ['blue'];
echart6.axis = 'Col1';
echart6.chartTitle = {
    value: 'Funnel',
    color: 'red',
    position: 'top',
    size: 16,
};
echart6.data = {
    columns: [
        {
            name: 'Col1',
            title: 'Person',
            size: '10',
        },
        {
            name: 'Col2',
            title: 'Value1',
            size: '10',
        },
        {
            name: 'Col3',
            title: 'Value2',
            size: '10',
        },
        {
            name: 'Col4',
            title: 'Value3',
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
                Col4: {
                    obj: {
                        t: 'NR',
                        p: '',
                        k: '55',
                    },
                    value: '55',
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
                Col4: {
                    obj: {
                        t: 'NR',
                        p: '',
                        k: '33',
                    },
                    value: '33',
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
                Col4: {
                    obj: {
                        t: 'NR',
                        p: '',
                        k: '77',
                    },
                    value: '77',
                },
            },
        },
    ],
};

echart7.consistencyCheck = true;
echart7.types = ['Radar'];
echart7.colors = ['blue'];
echart7.axis = 'Col1';
echart7.chartTitle = {
    value: 'Radar',
    color: 'red',
    position: 'top',
    size: 16,
};
echart7.data = {
    columns: [
        {
            name: 'Col1',
            title: 'Budget type',
        },
        {
            name: 'Col2',
            title: 'Sales',
        },
        {
            name: 'Col3',
            title: 'Administration',
        },
        {
            name: 'Col4',
            title: 'Information Technology',
        },
        {
            name: 'Col5',
            title: 'Customer Support',
        },
        {
            name: 'Col6',
            title: 'Development',
        },
        {
            name: 'Col7',
            title: 'Marketing',
        },
    ],
    rows: [
        {
            cells: {
                Col1: {
                    obj: {
                        t: 'CN',
                        p: 'COL',
                        k: 'ALLOCB',
                    },
                    value: 'Allocated Budget',
                },
                Col2: {
                    obj: {
                        t: 'NR',
                        p: '',
                        k: '4200',
                    },
                    value: '4200',
                },
                Col3: {
                    obj: {
                        t: 'NR',
                        p: '',
                        k: '3000',
                    },
                    value: '3000',
                },
                Col4: {
                    obj: {
                        t: 'NR',
                        p: '',
                        k: '20000',
                    },
                    value: '20000',
                },
                Col5: {
                    obj: {
                        t: 'NR',
                        p: '',
                        k: '35000',
                    },
                    value: '35000',
                },
                Col6: {
                    obj: {
                        t: 'NR',
                        p: '',
                        k: '50000',
                    },
                    value: '50000',
                },
                Col7: {
                    obj: {
                        t: 'NR',
                        p: '',
                        k: '18000',
                    },
                    value: '18000',
                },
            },
        },
        {
            cells: {
                Col1: {
                    obj: {
                        t: 'CN',
                        p: 'COL',
                        k: 'ACTSPEND',
                    },
                    value: 'Actual Spending',
                },
                Col2: {
                    obj: {
                        t: 'NR',
                        p: '',
                        k: '5000',
                    },
                    value: '5000',
                },
                Col3: {
                    obj: {
                        t: 'NR',
                        p: '',
                        k: '14000',
                    },
                    value: '14000',
                },
                Col4: {
                    obj: {
                        t: 'NR',
                        p: '',
                        k: '28000',
                    },
                    value: '28000',
                },
                Col5: {
                    obj: {
                        t: 'NR',
                        p: '',
                        k: '26000',
                    },
                    value: '26000',
                },
                Col6: {
                    obj: {
                        t: 'NR',
                        p: '',
                        k: '42000',
                    },
                    value: '42000',
                },
                Col7: {
                    obj: {
                        t: 'NR',
                        p: '',
                        k: '21000',
                    },
                    value: '21000',
                },
            },
        },
    ],
};


echart8.consistencyCheck = true;
echart8.types = ['Bubble'];
echart8.colors =  ['blue'];
echart8.axis = '';
echart8.chartTitle = {
    value: 'Bubble',
    color: 'red',
    position: 'top',
    size: 16,
};
echart8.data = {
    columns: [
        {
            name: 'GDP',
            title: 'Gdp',
        },
        {
            name: 'AGE',
            title: 'Age',
        },
        {
            name: 'SIZE',
            title: 'Size',
        },
        {
            name: 'COUNTRY',
            title: 'Country',
        },
        {
            name: 'YEAR',
            title: 'Year',
        }
    ],
    rows: [
        {
            cells: {
                COUNTRY: {
                    value: 'China',
                },
                GDP: {
                    obj: {
                        t: 'NR',
                        p: '',
                        k: '1516',
                    },
                    value: '1516',
                },
                AGE: {
                    obj: {
                        t: 'NR',
                        p: '',
                        k: '68',
                    },
                    value: '68',
                },
                SIZE: {
                    obj: {
                        t: 'NR',
                        p: '',
                        k: '1154605773',
                    },
                    value: '1154605773',
                },
                YEAR: {
                    value: '1990',
                },
            },
        },
        {
            cells: {
                COUNTRY: {
                    value: 'China',
                },
                GDP: {
                    obj: {
                        t: 'NR',
                        p: '',
                        k: '13334',
                    },
                    value: '13334',
                },
                AGE: {
                    obj: {
                        t: 'NR',
                        p: '',
                        k: '76.9',
                    },
                    value: '76.9',
                },
                SIZE: {
                    obj: {
                        t: 'NR',
                        p: '',
                        k: '1376048943',
                    },
                    value: '1376048943',
                },
                YEAR: {
                    value: '2015',
                },
            },
        },
        {
            cells: {
                COUNTRY: {
                    value: 'United States',
                },
                GDP: {
                    obj: {
                        t: 'NR',
                        p: '',
                        k: '37062',
                    },
                    value: '37062',
                },
                AGE: {
                    obj: {
                        t: 'NR',
                        p: '',
                        k: '75.4',
                    },
                    value: '75.4',
                },
                SIZE: {
                    obj: {
                        t: 'NR',
                        p: '',
                        k: '252847810',
                    },
                    value: '252847810',
                },
                YEAR: {
                    value: '1990',
                },
            },
        },
        {
            cells: {
                COUNTRY: {
                    value: 'United States',
                },
                GDP: {
                    obj: {
                        t: 'NR',
                        p: '',
                        k: '53354',
                    },
                    value: '53354',
                },
                AGE: {
                    obj: {
                        t: 'NR',
                        p: '',
                        k: '79.1',
                    },
                    value: '79.1',
                },
                SIZE: {
                    obj: {
                        t: 'NR',
                        p: '',
                        k: '321773631',
                    },
                    value: '321773631',
                },
                YEAR: {
                    value: '2015',
                },
            },
        },
    ]

};

document.addEventListener('kup-echart-click', (e) => {
    console.log(e);
});
