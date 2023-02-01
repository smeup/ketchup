const echart1 = document.getElementById('piechart');
const echart2 = document.getElementById('mapchart');
const echart3 = document.getElementById('gaussianchart');
const echart4 = document.getElementById('gaussian1chart');
const echart5 = document.getElementById('gaussian2chart');
const echart6 = document.getElementById('funnelChart');


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
          name: 'Col4',
          title: 'Value5',
          size: '10',
        }
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
        }
      ],
};
document.addEventListener('kup-echart-click', (e) => {
    console.log(e);
});
