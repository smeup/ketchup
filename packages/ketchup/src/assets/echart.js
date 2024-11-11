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

const bubbleChartData1 = {
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
const data1Series = ['GDP', 'AGE', 'SIZE', 'COUNTRY', 'YEAR'];
const bubbleChartData2 = {
    columns: [
        {
            isEditable: false,
            isKey: false,
            name: 'A',
            obj: {
                k: '',
                p: '',
                t: '**',
            },
            title: 'Marchi',
            tooltip: false,
        },
        {
            decimals: 0,
            isEditable: false,
            isKey: false,
            name: 'B',
            obj: {
                k: '',
                p: '',
                t: 'NR',
            },
            title: 'Price',
            tooltip: false,
        },
        {
            decimals: 0,
            isEditable: false,
            isKey: false,
            name: 'C',
            obj: {
                k: '',
                p: '',
                t: 'NR',
            },
            title: 'Labels',
            tooltip: false,
        },
        {
            decimals: 0,
            isEditable: false,
            isKey: false,
            name: 'D',
            obj: {
                k: '',
                p: '',
                t: 'NR',
            },
            title: 'Size',
            tooltip: false,
        },
    ],
    rows: [
        {
            cells: {
                A: {
                    obj: {
                        k: 'Audi',
                        p: '',
                        t: '**',
                    },
                    value: 'Audi',
                },
                B: {
                    obj: {
                        k: '100',
                        p: '',
                        t: 'NR',
                    },
                    value: '100',
                },
                C: {
                    obj: {
                        k: '14',
                        p: '',
                        t: 'NR',
                    },
                    value: '14',
                },
                D: {
                    obj: {
                        k: '1',
                        p: '',
                        t: 'NR',
                    },
                    value: '1',
                },
            },
            cssClass: 'clickable',
            id: '0',
            object: '',
            readOnly: true,
        },
        {
            cells: {
                A: {
                    obj: {
                        k: 'Alfa Romeo',
                        p: '',
                        t: '**',
                    },
                    value: 'Alfa Romeo',
                },
                B: {
                    obj: {
                        k: '28',
                        p: '',
                        t: 'NR',
                    },
                    value: '28',
                },
                C: {
                    obj: {
                        k: '27',
                        p: '',
                        t: 'NR',
                    },
                    value: '27',
                },
                D: {
                    obj: {
                        k: '7',
                        p: '',
                        t: 'NR',
                    },
                    value: '7',
                },
            },
            cssClass: 'clickable',
            id: '1',
            object: '',
            readOnly: true,
        },
        {
            cells: {
                A: {
                    obj: {
                        k: 'BMW',
                        p: '',
                        t: '**',
                    },
                    value: 'BMW',
                },
                B: {
                    obj: {
                        k: '10',
                        p: '',
                        t: 'NR',
                    },
                    value: '10',
                },
                C: {
                    obj: {
                        k: '160',
                        p: '',
                        t: 'NR',
                    },
                    value: '160',
                },
                D: {
                    obj: {
                        k: '15',
                        p: '',
                        t: 'NR',
                    },
                    value: '15',
                },
            },
            cssClass: 'clickable',
            id: '2',
            object: '',
            readOnly: true,
        },
        {
            cells: {
                A: {
                    obj: {
                        k: 'FCA',
                        p: '',
                        t: '**',
                    },
                    value: 'FCA',
                },
                B: {
                    obj: {
                        k: '20',
                        p: '',
                        t: 'NR',
                    },
                    value: '20',
                },
                C: {
                    obj: {
                        k: '12',
                        p: '',
                        t: 'NR',
                    },
                    value: '12',
                },
                D: {
                    obj: {
                        k: '10',
                        p: '',
                        t: 'NR',
                    },
                    value: '10',
                },
            },
            cssClass: 'clickable',
            id: '3',
            object: '',
            readOnly: true,
        },
        {
            cells: {
                A: {
                    obj: {
                        k: 'Ferrari',
                        p: '',
                        t: '**',
                    },
                    value: 'Ferrari',
                },
                B: {
                    obj: {
                        k: '230',
                        p: '',
                        t: 'NR',
                    },
                    value: '230',
                },
                C: {
                    obj: {
                        k: '3',
                        p: '',
                        t: 'NR',
                    },
                    value: '3',
                },
                D: {
                    obj: {
                        k: '10',
                        p: '',
                        t: 'NR',
                    },
                    value: '10',
                },
            },
            cssClass: 'clickable',
            id: '4',
            object: '',
            readOnly: true,
        },
        {
            cells: {
                A: {
                    obj: {
                        k: 'Lamborghini',
                        p: '',
                        t: '**',
                    },
                    value: 'Lamborghini',
                },
                B: {
                    obj: {
                        k: '190',
                        p: '',
                        t: 'NR',
                    },
                    value: '190',
                },
                C: {
                    obj: {
                        k: '2',
                        p: '',
                        t: 'NR',
                    },
                    value: '2',
                },
                D: {
                    obj: {
                        k: '3',
                        p: '',
                        t: 'NR',
                    },
                    value: '3',
                },
            },
            cssClass: 'clickable',
            id: '5',
            object: '',
            readOnly: true,
        },
        {
            cells: {
                A: {
                    obj: {
                        k: 'Jeep',
                        p: '',
                        t: '**',
                    },
                    value: 'Jeep',
                },
                B: {
                    obj: {
                        k: '49',
                        p: '',
                        t: 'NR',
                    },
                    value: '49',
                },
                C: {
                    obj: {
                        k: '6',
                        p: '',
                        t: 'NR',
                    },
                    value: '6',
                },
                D: {
                    obj: {
                        k: '10',
                        p: '',
                        t: 'NR',
                    },
                    value: '10',
                },
            },
            cssClass: 'clickable',
            id: '6',
            object: '',
            readOnly: true,
        },
    ],
};
const data2Series = ['B', 'C', 'D'];
echart8.consistencyCheck = true;
echart8.types = ['Bubble'];
echart8.colors = ['blue'];
// if no series are specified chart would be empty
echart8.series = data1Series;
echart8.axis = '';
echart8.chartTitle = {
    value: 'Bubble',
    color: 'red',
    position: 'top',
    size: 16,
};
echart8.data = bubbleChartData1;

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
echart12.axis = 'A';
echart12.series = ['B', 'C'];
echart12.data = {
    columns: [
        {
            isEditable: false,
            isKey: false,
            name: 'A',
            obj: {
                k: '',
                p: 'COL',
                t: 'CN',
            },
            title: 'Persone',
            tooltip: true,
        },
        {
            decimals: 0,
            isEditable: false,
            isKey: false,
            name: 'B',
            obj: {
                k: '',
                p: '',
                t: 'NR',
            },
            title: 'Anno Cur',
            tooltip: false,
        },
        {
            decimals: 0,
            isEditable: false,
            isKey: false,
            name: 'C',
            obj: {
                k: '',
                p: '',
                t: 'NR',
            },
            title: 'Anno Pre',
            tooltip: false,
        },
    ],
    rows: [
        {
            cells: {
                A: {
                    obj: {
                        k: 'SANCOS',
                        p: 'COL',
                        t: 'CN',
                    },
                    value: 'SANCOS',
                },
                B: {
                    obj: {
                        k: '3',
                        p: '',
                        t: 'NR',
                    },
                    value: '3',
                },
                C: {
                    obj: {
                        k: '7',
                        p: '',
                        t: 'NR',
                    },
                    value: '7',
                },
            },
            id: '0',
            object: '',
            readOnly: true,
        },
        {
            cells: {
                A: {
                    obj: {
                        k: 'BENMAR',
                        p: 'COL',
                        t: 'CN',
                    },
                    value: 'BENMAR',
                },
                B: {
                    obj: {
                        k: '3',
                        p: '',
                        t: 'NR',
                    },
                    value: '3',
                },
                C: {
                    obj: {
                        k: '4',
                        p: '',
                        t: 'NR',
                    },
                    value: '4',
                },
            },
            id: '1',
            object: '',
            readOnly: true,
        },
        {
            cells: {
                A: {
                    obj: {
                        k: 'CARLUC',
                        p: 'COL',
                        t: 'CN',
                    },
                    value: 'CARLUC',
                },
                B: {
                    obj: {
                        k: '8',
                        p: '',
                        t: 'NR',
                    },
                    value: '8',
                },
                C: {
                    obj: {
                        k: '20',
                        p: '',
                        t: 'NR',
                    },
                    value: '20',
                },
            },
            id: '2',
            object: '',
            readOnly: true,
        },
        {
            cells: {
                A: {
                    obj: {
                        k: 'FIOGIA',
                        p: 'COL',
                        t: 'CN',
                    },
                    value: 'FIOGIA',
                },
                B: {
                    obj: {
                        k: '2',
                        p: '',
                        t: 'NR',
                    },
                    value: '2',
                },
                C: {
                    obj: {
                        k: '12',
                        p: '',
                        t: 'NR',
                    },
                    value: '12',
                },
            },
            id: '3',
            object: '',
            readOnly: true,
        },
        {
            cells: {
                A: {
                    obj: {
                        k: 'Franco',
                        p: 'COL',
                        t: 'CN',
                    },
                    value: 'Franco',
                },
                B: {
                    obj: {
                        k: '1',
                        p: '',
                        t: 'NR',
                    },
                    value: '1',
                },
                C: {
                    obj: {
                        k: '2',
                        p: '',
                        t: 'NR',
                    },
                    value: '2',
                },
            },
            id: '4',
            object: '',
            readOnly: true,
        },
        {
            cells: {
                A: {
                    obj: {
                        k: "Carlo D'Azeglio",
                        p: 'COL',
                        t: 'CN',
                    },
                    value: "Carlo D'Azeglio",
                },
                B: {
                    obj: {
                        k: '16',
                        p: '',
                        t: 'NR',
                    },
                    value: '16',
                },
                C: {
                    obj: {
                        k: '1',
                        p: '',
                        t: 'NR',
                    },
                    value: '1',
                },
            },
            id: '5',
            object: '',
            readOnly: true,
        },
        {
            cells: {
                A: {
                    obj: {
                        k: 'Oliviero',
                        p: 'COL',
                        t: 'CN',
                    },
                    value: 'Oliviero',
                },
                B: {
                    obj: {
                        k: '10',
                        p: '',
                        t: 'NR',
                    },
                    value: '10',
                },
                C: {
                    obj: {
                        k: '4',
                        p: '',
                        t: 'NR',
                    },
                    value: '4',
                },
            },
            id: '6',
            object: '',
            readOnly: true,
        },
        {
            cells: {
                A: {
                    obj: {
                        k: 'Quinto',
                        p: 'COL',
                        t: 'CN',
                    },
                    value: 'Quinto',
                },
                B: {
                    obj: {
                        k: '3',
                        p: '',
                        t: 'NR',
                    },
                    value: '3',
                },
                C: {
                    obj: {
                        k: '11',
                        p: '',
                        t: 'NR',
                    },
                    value: '11',
                },
            },
            id: '7',
            object: '',
            readOnly: true,
        },
    ],
};

document.addEventListener('kup-echart-click', (e) => {
    console.log(e);
});
