const echart1 = document.getElementById('piechart');
const echart2 = document.getElementById('mapchart');
const echart3 = document.getElementById('gaussianchart');
const echart4 = document.getElementById('gaussian1chart');
const echart5 = document.getElementById('gaussian2chart');
const echart6 = document.getElementById('funnelChart');
const echart7 = document.getElementById('radarChart');
const echart8 = document.getElementById('bubbleChart');
const echart9 = document.getElementById('sankeyChart');
const echart10 = document.getElementById('candleStickChart');
const echart11 = document.getElementById('calendarChart');
const echart12 = document.getElementById('barChart');

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
echart2.chartTitle = {
    value: 'Map',
    color: 'red',
    position: 'top',
    size: 16,
};
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
echart3.chartTitle = {
    value: 'Gaussian',
    color: 'red',
    position: 'top',
    size: 16,
};
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
echart4.chartTitle = {
    value: 'Gaussian | Bar',
    color: 'red',
    position: 'top',
    size: 16,
};
echart4.axis = 'COL3';
echart4.data = {
    columns: testMockColumns,
    rows: testMockRows,
};
echart5.consistencyCheck = true;
echart5.types = ['Gaussian', 'Bar', 'Scatter'];
echart5.chartTitle = {
    value: 'Gaussian | Bar | Scatter',
    color: 'red',
    position: 'top',
    size: 16,
};
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
echart7.axis = 'COL1';
echart7.series = ['COL2', 'COL3'];
echart7.chartTitle = {
    value: 'Radar',
    color: 'red',
    position: 'top',
    size: 16,
};
echart7.data = {
    columns: [
        {
            isEditable: false,
            isKey: false,
            name: 'COL1',
            obj: {
                k: '',
                p: 'STR',
                t: 'J1',
            },
            title: 'Budget type',
            tooltip: true,
        },
        {
            decimals: 0,
            isEditable: false,
            isKey: false,
            name: 'COL2',
            obj: {
                k: '',
                p: '',
                t: 'NR',
            },
            title: 'Allocated Budget',
            tooltip: false,
        },
        {
            decimals: 0,
            isEditable: false,
            isKey: false,
            name: 'COL3',
            obj: {
                k: '',
                p: '',
                t: 'NR',
            },
            title: 'Actual Spending',
            tooltip: false,
        },
    ],
    rows: [
        {
            cells: {
                COL3: {
                    obj: {
                        k: '',
                        p: '',
                        t: 'NR',
                    },
                    value: '5000',
                },
                COL2: {
                    obj: {
                        k: '',
                        p: '',
                        t: 'NR',
                    },
                    value: '4200',
                },
                COL1: {
                    obj: {
                        k: 'Sales',
                        p: 'STR',
                        t: 'J1',
                    },
                    value: 'Sales',
                },
            },
            id: '0',
            object: '',
            readOnly: true,
        },
        {
            cells: {
                COL3: {
                    obj: {
                        k: '',
                        p: '',
                        t: 'NR',
                    },
                    value: '14000',
                },
                COL2: {
                    obj: {
                        k: '',
                        p: '',
                        t: 'NR',
                    },
                    value: '3000',
                },
                COL1: {
                    obj: {
                        k: 'Administration',
                        p: 'STR',
                        t: 'J1',
                    },
                    value: 'Administration',
                },
            },
            id: '1',
            object: '',
            readOnly: true,
        },
        {
            cells: {
                COL3: {
                    obj: {
                        k: '',
                        p: '',
                        t: 'NR',
                    },
                    value: '28000',
                },
                COL2: {
                    obj: {
                        k: '',
                        p: '',
                        t: 'NR',
                    },
                    value: '20000',
                },
                COL1: {
                    obj: {
                        k: 'Information Technology',
                        p: 'STR',
                        t: 'J1',
                    },
                    value: 'Information Technology',
                },
            },
            id: '2',
            object: '',
            readOnly: true,
        },
        {
            cells: {
                COL3: {
                    obj: {
                        k: '',
                        p: '',
                        t: 'NR',
                    },
                    value: '26000',
                },
                COL2: {
                    obj: {
                        k: '',
                        p: '',
                        t: 'NR',
                    },
                    value: '35000',
                },
                COL1: {
                    obj: {
                        k: 'Customer Support',
                        p: 'STR',
                        t: 'J1',
                    },
                    value: 'Customer Support',
                },
            },
            id: '3',
            object: '',
            readOnly: true,
        },
        {
            cells: {
                COL3: {
                    obj: {
                        k: '',
                        p: '',
                        t: 'NR',
                    },
                    value: '42000',
                },
                COL2: {
                    obj: {
                        k: '',
                        p: '',
                        t: 'NR',
                    },
                    value: '50000',
                },
                COL1: {
                    obj: {
                        k: 'Development',
                        p: 'STR',
                        t: 'J1',
                    },
                    value: 'Development',
                },
            },
            id: '4',
            object: '',
            readOnly: true,
        },
        {
            cells: {
                COL3: {
                    obj: {
                        k: '',
                        p: '',
                        t: 'NR',
                    },
                    value: '21000',
                },
                COL2: {
                    obj: {
                        k: '',
                        p: '',
                        t: 'NR',
                    },
                    value: '18000',
                },
                COL1: {
                    obj: {
                        k: 'Marketing',
                        p: 'STR',
                        t: 'J1',
                    },
                    value: 'Marketing',
                },
            },
            id: '5',
            object: '',
            readOnly: true,
        },
    ],
};

echart8.consistencyCheck = true;
echart8.types = ['Bubble'];
echart8.colors = ['blue'];
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
        },
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
    ],
};

echart9.consistencyCheck = true;
echart9.types = ['Sankey'];
echart9.colors = ['blue'];
echart9.axis = '';
echart9.chartTitle = {
    value: 'Sankey',
    color: 'red',
    position: 'top',
    size: 16,
};
echart9.data = {
    // actual dataset
    columns: [
        {
            name: 'SOURCE',
            title: 'Source',
        },
        {
            name: 'TARGET',
            title: 'Target',
        },
        {
            name: 'VALUE',
            obj: {
                t: 'NR',
                p: '',
                k: '',
            },
            title: 'Value',
        },
    ],
    rows: [
        {
            cells: {
                SOURCE: {
                    value: 'a',
                },
                TARGET: {
                    value: 'a1',
                },
                VALUE: {
                    obj: {
                        t: 'NR',
                        p: '',
                        k: '5',
                    },
                    value: '5',
                },
            },
        },
        {
            cells: {
                SOURCE: {
                    value: 'a',
                },
                TARGET: {
                    value: 'a2',
                },
                VALUE: {
                    obj: {
                        t: 'NR',
                        p: '',
                        k: '3',
                    },
                    value: '3',
                },
            },
        },
        {
            cells: {
                SOURCE: {
                    value: 'b',
                },
                TARGET: {
                    value: 'b1',
                },
                VALUE: {
                    obj: {
                        t: 'NR',
                        p: '',
                        k: '8',
                    },
                    value: '8',
                },
            },
        },
        {
            cells: {
                SOURCE: {
                    value: 'a',
                },
                TARGET: {
                    value: 'b1',
                },
                VALUE: {
                    obj: {
                        t: 'NR',
                        p: '',
                        k: '3',
                    },
                    value: '3',
                },
            },
        },
        {
            cells: {
                SOURCE: {
                    value: 'b1',
                },
                TARGET: {
                    value: 'a1',
                },
                VALUE: {
                    obj: {
                        t: 'NR',
                        p: '',
                        k: '1',
                    },
                    value: '1',
                },
            },
        },
        {
            cells: {
                SOURCE: {
                    value: 'b1',
                },
                TARGET: {
                    value: 'c',
                },
                VALUE: {
                    obj: {
                        t: 'NR',
                        p: '',
                        k: '2',
                    },
                    value: '2',
                },
            },
        },
    ],
};

echart10.consistencyCheck = true;
echart10.types = ['Candle'];
echart10.colors = ['blue'];
echart10.axis = '';
echart10.chartTitle = {
    value: 'Candle',
    color: 'red',
    position: 'top',
    size: 16,
};
echart10.data = {
    // actual dataset
    columns: [
        {
            name: 'DATE',
            obj: {
                t: 'D8',
                p: '*YYMD',
                k: '',
            },
            title: 'Date',
        },
        {
            name: 'LOW',
            obj: {
                t: 'NR',
                p: '',
                k: '',
            },
            title: 'Low',
        },
        {
            name: 'HIGH',
            obj: {
                t: 'NR',
                p: '',
                k: '',
            },
            title: 'High',
        },
        {
            name: 'OPEN',
            obj: {
                t: 'NR',
                p: '',
                k: '',
            },
            title: 'Open',
        },
        {
            name: 'CLOSE',
            obj: {
                t: 'NR',
                p: '',
                k: '',
            },
            title: 'Close',
        },
    ],
    rows: [
        {
            cells: {
                DATE: {
                    obj: {
                        t: 'D8',
                        p: '*YYMD',
                        k: '20171024',
                    },
                    value: '2017-10-24',
                },
                HIGH: {
                    obj: {
                        t: 'NR',
                        p: '',
                        k: '38',
                    },
                    value: '38',
                },
                LOW: {
                    obj: {
                        t: 'NR',
                        p: '',
                        k: '10',
                    },
                    value: '10',
                },
                OPEN: {
                    obj: {
                        t: 'NR',
                        p: '',
                        k: '34',
                    },
                    value: '34',
                },
                CLOSE: {
                    obj: {
                        t: 'NR',
                        p: '',
                        k: '20',
                    },
                    value: '20',
                },
            },
        },
        {
            cells: {
                DATE: {
                    obj: {
                        t: 'D8',
                        p: '*YYMD',
                        k: '20171025',
                    },
                    value: '2017-10-25',
                },
                HIGH: {
                    obj: {
                        t: 'NR',
                        p: '',
                        k: '50',
                    },
                    value: '50',
                },
                LOW: {
                    obj: {
                        t: 'NR',
                        p: '',
                        k: '30',
                    },
                    value: '30',
                },
                OPEN: {
                    obj: {
                        t: 'NR',
                        p: '',
                        k: '35',
                    },
                    value: '35',
                },
                CLOSE: {
                    obj: {
                        t: 'NR',
                        p: '',
                        k: '40',
                    },
                    value: '40',
                },
            },
        },
    ],
};

echart11.consistencyCheck = true;
echart11.types = ['Calendar'];
echart11.colors = ['blue'];
echart11.axis = '';
echart11.chartTitle = {
    value: 'Calendar',
    color: 'red',
    position: 'top',
    size: 16,
};
echart11.data = {
    // actual dataset
    columns: [
        {
            name: 'DATE',
            obj: {
                t: 'D8',
                p: '*YYMD',
                k: '',
            },
            title: 'Date',
        },
        {
            name: 'VALUE',
            obj: {
                t: 'NR',
                p: '',
                k: '',
            },
            title: 'Value',
        },
    ],
    rows: [
        {
            cells: {
                DATE: {
                    obj: {
                        t: 'D8',
                        p: '*YYMD',
                        k: '20230401',
                    },
                    value: '2023-04-01',
                },
                VALUE: {
                    obj: {
                        t: 'NR',
                        p: '',
                        k: '50',
                    },
                    value: '50',
                },
            },
        },
        {
            cells: {
                DATE: {
                    obj: {
                        t: 'D8',
                        p: '*YYMD',
                        k: '20230415',
                    },
                    value: '2023-04-15',
                },
                VALUE: {
                    obj: {
                        t: 'NR',
                        p: '',
                        k: '25',
                    },
                    value: '25',
                },
            },
        },
        {
            cells: {
                DATE: {
                    obj: {
                        t: 'D8',
                        p: '*YYMD',
                        k: '20230430',
                    },
                    value: '2023-04-30',
                },
                VALUE: {
                    obj: {
                        t: 'NR',
                        p: '',
                        k: '100',
                    },
                    value: '100',
                },
            },
        },
    ],
};

echart12.types = ['Bar', 'Bar'];
echart12.colors = ['blue'];
echart12.chartTitle = {
    value: 'Bar',
    color: 'red',
    position: 'top',
    size: 16,
};
echart12.stacked = true;
echart12.showMarks = true;
echart12.axis = 'ragSocfornitore';
echart12.series = ['fatturato'];
echart12.data = {
    columns: [
        {
            name: 'OBJ',
            title: 'ID',
            fill: 'K01',
            obj: {
                t: 'G_',
                p: 'FATT2',
            },
        },
        {
            name: 'id',
            title: 'id',
            visible: false,
            fill: 'id',
            obj: {
                t: 'G_',
                p: 'FATT2',
            },
        },
        {
            name: 'annoMovimento',
            title: 'Anno Movimento',
            fill: 'annoMovimento',
            obj: {
                t: '',
                p: '',
            },
            shape: 'Itx',
        },
        {
            name: 'tipoCodice',
            title: 'Tipo Codice',
            fill: 'tipoCodice',
            obj: {
                t: '',
                p: '',
            },
            shape: 'Itx',
        },
        {
            name: 'codice',
            title: 'Codice',
            fill: 'codice',
            obj: {
                t: '',
                p: '',
            },
            shape: 'Itx',
        },
        {
            name: 'fatturato',
            title: 'Fatturato',
            fill: 'fatturato',
            obj: {
                t: 'NR',
                p: 'VE',
            },
            shape: 'Inr',
            decimals: 2,
        },
        {
            name: 'clifor',
            title: 'Clifor',
            fill: 'clifor',
            obj: {
                t: 'CL',
                p: 'IFOR',
            },
            shape: 'Itx',
        },
        {
            name: 'ragSocfornitore',
            title: 'Ragione sociale Fornitore',
            fill: 'ragSocfornitore',
            obj: {
                t: '',
                p: '',
            },
            shape: 'Itx',
        },
    ],
    rows: [
        {
            cells: {
                OBJ: {
                    value: '20241001',
                    obj: {
                        t: 'G_',
                        p: 'FATT2',
                        k: '20241001',
                    },
                    tooltip: true,
                    data: {},
                    style: {},
                },
                id: {
                    value: '20241001',
                    obj: {
                        t: 'G_',
                        p: 'FATT2',
                        k: '20241001',
                    },
                    tooltip: true,
                    data: {},
                    style: {},
                },
                annoMovimento: {
                    value: '2024',
                    obj: {
                        t: '',
                        p: '',
                        k: '2024',
                    },
                    tooltip: false,
                    data: {},
                    style: {},
                },
                tipoCodice: {
                    value: '1',
                    obj: {
                        t: '',
                        p: '',
                        k: '1',
                    },
                    tooltip: false,
                    data: {},
                    style: {},
                },
                codice: {
                    value: '100',
                    obj: {
                        t: '',
                        p: '',
                        k: '100',
                    },
                    tooltip: false,
                    data: {},
                    style: {},
                },
                fatturato: {
                    value: '2639.17',
                    obj: {
                        t: 'NR',
                        p: 'VE',
                        k: '2639.17',
                    },
                    tooltip: false,
                    data: {},
                    style: {},
                    shape: 'INR',
                },
                clifor: {
                    value: '1100',
                    obj: {
                        t: 'CL',
                        p: 'IFOR',
                        k: '1100',
                    },
                    tooltip: true,
                    data: {},
                    style: {},
                },
                ragSocfornitore: {
                    value: 'PALMACCI SRL',
                    obj: {
                        t: '',
                        p: '',
                        k: 'PALMACCI SRL',
                    },
                    tooltip: false,
                    data: {},
                    style: {},
                },
            },
            cssClass: 'clickable',
            id: '0',
        },
        {
            cells: {
                OBJ: {
                    value: '20241881',
                    obj: {
                        t: 'G_',
                        p: 'FATT2',
                        k: '20241881',
                    },
                    tooltip: true,
                    data: {},
                    style: {},
                },
                id: {
                    value: '20241881',
                    obj: {
                        t: 'G_',
                        p: 'FATT2',
                        k: '20241881',
                    },
                    tooltip: true,
                    data: {},
                    style: {},
                },
                annoMovimento: {
                    value: '2024',
                    obj: {
                        t: '',
                        p: '',
                        k: '2024',
                    },
                    tooltip: false,
                    data: {},
                    style: {},
                },
                tipoCodice: {
                    value: '1',
                    obj: {
                        t: '',
                        p: '',
                        k: '1',
                    },
                    tooltip: false,
                    data: {},
                    style: {},
                },
                codice: {
                    value: '188',
                    obj: {
                        t: '',
                        p: '',
                        k: '188',
                    },
                    tooltip: false,
                    data: {},
                    style: {},
                },
                fatturato: {
                    value: '454.86',
                    obj: {
                        t: 'NR',
                        p: 'VE',
                        k: '454.86',
                    },
                    tooltip: false,
                    data: {},
                    style: {},
                    shape: 'INR',
                },
                clifor: {
                    value: '1188',
                    obj: {
                        t: 'CL',
                        p: 'IFOR',
                        k: '1188',
                    },
                    tooltip: true,
                    data: {},
                    style: {},
                },
                ragSocfornitore: {
                    value: 'EDIL. CAMALDOLI SANSONE S.R.L.',
                    obj: {
                        t: '',
                        p: '',
                        k: 'EDIL. CAMALDOLI SANSONE S.R.L.',
                    },
                    tooltip: false,
                    data: {},
                    style: {},
                },
            },
            cssClass: 'clickable',
            id: '1',
        },
        {
            cells: {
                OBJ: {
                    value: '202441',
                    obj: {
                        t: 'G_',
                        p: 'FATT2',
                        k: '202441',
                    },
                    tooltip: true,
                    data: {},
                    style: {},
                },
                id: {
                    value: '202441',
                    obj: {
                        t: 'G_',
                        p: 'FATT2',
                        k: '202441',
                    },
                    tooltip: true,
                    data: {},
                    style: {},
                },
                annoMovimento: {
                    value: '2024',
                    obj: {
                        t: '',
                        p: '',
                        k: '2024',
                    },
                    tooltip: false,
                    data: {},
                    style: {},
                },
                tipoCodice: {
                    value: '1',
                    obj: {
                        t: '',
                        p: '',
                        k: '1',
                    },
                    tooltip: false,
                    data: {},
                    style: {},
                },
                codice: {
                    value: '4',
                    obj: {
                        t: '',
                        p: '',
                        k: '4',
                    },
                    tooltip: false,
                    data: {},
                    style: {},
                },
                fatturato: {
                    value: '190.66',
                    obj: {
                        t: 'NR',
                        p: 'VE',
                        k: '190.66',
                    },
                    tooltip: false,
                    data: {},
                    style: {},
                    shape: 'INR',
                },
                clifor: {
                    value: '14',
                    obj: {
                        t: 'CL',
                        p: 'IFOR',
                        k: '14',
                    },
                    tooltip: true,
                    data: {},
                    style: {},
                },
                ragSocfornitore: {
                    value: 'FORESTIERI GIUSEPPE E C RETTIFICA MOTORI',
                    obj: {
                        t: '',
                        p: '',
                        k: 'FORESTIERI GIUSEPPE E C RETTIFICA MOTORI',
                    },
                    tooltip: false,
                    data: {},
                    style: {},
                },
            },
            cssClass: 'clickable',
            id: '2',
        },
        {
            cells: {
                OBJ: {
                    value: '2024735861',
                    obj: {
                        t: 'G_',
                        p: 'FATT2',
                        k: '2024735861',
                    },
                    tooltip: true,
                    data: {},
                    style: {},
                },
                id: {
                    value: '2024735861',
                    obj: {
                        t: 'G_',
                        p: 'FATT2',
                        k: '2024735861',
                    },
                    tooltip: true,
                    data: {},
                    style: {},
                },
                annoMovimento: {
                    value: '2024',
                    obj: {
                        t: '',
                        p: '',
                        k: '2024',
                    },
                    tooltip: false,
                    data: {},
                    style: {},
                },
                tipoCodice: {
                    value: '1',
                    obj: {
                        t: '',
                        p: '',
                        k: '1',
                    },
                    tooltip: false,
                    data: {},
                    style: {},
                },
                codice: {
                    value: '73586',
                    obj: {
                        t: '',
                        p: '',
                        k: '73586',
                    },
                    tooltip: false,
                    data: {},
                    style: {},
                },
                fatturato: {
                    value: '2.19',
                    obj: {
                        t: 'NR',
                        p: 'VE',
                        k: '2.19',
                    },
                    tooltip: false,
                    data: {},
                    style: {},
                    shape: 'INR',
                },
                clifor: {
                    value: '173586',
                    obj: {
                        t: 'CL',
                        p: 'IFOR',
                        k: '173586',
                    },
                    tooltip: true,
                    data: {},
                    style: {},
                },
                ragSocfornitore: {
                    value: 'SOLOMEO IMPIANTI S.N.C.DI ',
                    obj: {
                        t: '',
                        p: '',
                        k: 'SOLOMEO IMPIANTI S.N.C.DI BONDI FRANCESCO E ROTONI MATTEO',
                    },
                    tooltip: false,
                    data: {},
                    style: {},
                },
            },
            cssClass: 'clickable',
            id: '3',
        },
    ],
};

document.addEventListener('kup-echart-click', (e) => {
    console.log(e);
});
