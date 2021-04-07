const mockedColumns = [
    {
        name: 'FLD1',
        title: 'Column A',
        size: '',
    },
    {
        name: 'FLD2',
        title: 'Column B',
        size: 10,
        obj: {
            t: 'NR',
            p: '',
            k: '',
        },
    },
    {
        name: 'FLD3',
        title: 'Column C',
        size: 10,
        obj: {
            t: 'NR',
            p: '',
            k: '',
        },
    },
    {
        name: 'FLD4',
        title: 'Column D',
        size: 10,
        obj: {
            t: 'D8',
            p: '*YYMD',
            k: '',
        },
        icon: 'calendar',
        isKey: true,
    },
    {
        name: 'FLD5',
        title: 'Column Percentuale',
        size: 10,
        obj: {
            t: 'NR',
            p: 'P',
            k: '',
        },
    },
];

const mockedRows = [
    {
        cells: {
            FLD1: {
                obj: {
                    t: 'CN',
                    p: 'COL',
                    k: 'CASFRA',
                },
                value: 'CASFRA',
            },
            FLD2: {
                obj: {
                    t: 'NR',
                    p: '',
                    k: '10',
                },
                value: '10',
            },
            FLD3: {
                obj: {
                    t: 'NR',
                    p: '',
                    k: '100000.60',
                },
                value: '100,000.60',
            },
            FLD4: {
                obj: {
                    t: 'D8',
                    p: '*YYMD',
                    k: '20181101',
                },
                value: '2018-11-01',
            },
            FLD5: {
                obj: {
                    t: 'NR',
                    p: 'P',
                    k: '10.60',
                },
                value: '10.60',
            },
        },
    },
    {
        cells: {
            FLD1: {
                obj: {
                    t: 'CN',
                    p: 'COL',
                    k: 'CASFRA',
                },
                value: 'CASFRA',
            },
            FLD2: {
                obj: {
                    t: 'NR',
                    p: '',
                    k: '10',
                },
                value: '10',
            },
            FLD3: {
                obj: {
                    t: 'NR',
                    p: '',
                    k: '100000.60',
                },
                value: '100,000.60',
            },
            FLD4: {
                obj: {
                    t: 'D8',
                    p: '*YYMD',
                    k: '20181101',
                },
                value: '2018-11-01',
            },
            FLD5: {
                obj: {
                    t: 'NR',
                    p: 'P',
                    k: '0',
                },
                value: '0.00',
            },
        },
    },
    {
        cells: {
            FLD1: {
                obj: {
                    t: 'CN',
                    p: 'COL',
                    k: 'DELGIO',
                },
                value: 'DELGIO',
            },
            FLD2: {
                obj: {
                    t: 'NR',
                    p: '',
                    k: '6',
                },
                value: '6',
            },
            FLD3: {
                obj: {
                    t: 'NR',
                    p: '',
                    k: '67.8',
                },
                value: '67.8',
            },
            FLD4: {
                obj: {
                    t: 'D8',
                    p: '*YYMD',
                    k: '20180102',
                },
                value: '2018-01-02',
            },
            FLD5: {
                obj: {
                    t: 'NR',
                    p: 'P',
                    k: '20.60',
                },
                value: '20.60',
            },
        },
    },
    {
        cells: {
            FLD1: {
                obj: {
                    t: 'CN',
                    p: 'COL',
                    k: 'PARFRA',
                },
                value: 'PARFRA',
            },
            FLD2: {
                obj: {
                    t: 'NR',
                    p: '',
                    k: '5',
                },
                value: '5',
            },
            FLD3: {
                obj: {
                    t: 'NR',
                    p: '',
                    k: '120.06',
                },
                value: '120.06',
            },
            FLD4: {
                obj: {
                    t: 'D8',
                    p: '*YYMD',
                    k: '20180103',
                },
                value: '2018-01-03',
            },
            FLD5: {
                obj: {
                    t: 'NR',
                    p: 'P',
                    k: '30.60',
                },
                value: '30.60',
            },
        },
    },
    {
        cells: {
            FLD1: {
                obj: {
                    t: 'CN',
                    p: 'COL',
                    k: 'DELGIO',
                },
                value: 'DELGIO',
            },
            FLD2: {
                obj: {
                    t: 'NR',
                    p: '',
                    k: '6',
                },
                value: '6',
            },
            FLD3: {
                obj: {
                    t: 'NR',
                    p: '',
                    k: '67.8',
                },
                value: '67.8',
            },
            FLD4: {
                obj: {
                    t: 'D8',
                    p: '*YYMD',
                    k: '20180102',
                },
                value: '2018-01-02',
            },
            FLD5: {
                obj: {
                    t: 'NR',
                    p: 'P',
                    k: '40.60',
                },
                value: '40.60',
            },
        },
    },
    {
        cells: {
            FLD1: {
                obj: {
                    t: 'CN',
                    p: 'COL',
                    k: 'DELGIO',
                },
                value: 'DELGIO',
            },
            FLD2: {
                obj: {
                    t: 'NR',
                    p: '',
                    k: '6',
                },
                value: '6',
            },
            FLD3: {
                obj: {
                    t: 'NR',
                    p: '',
                    k: '67.8',
                },
                value: '67.8',
            },
            FLD4: {
                obj: {
                    t: 'D8',
                    p: '*YYMD',
                    k: '20180102',
                },
                value: '2018-01-02',
            },
            FLD5: {
                obj: {
                    t: 'NR',
                    p: 'P',
                    k: '50.60',
                },
                value: '50.60',
            },
        },
    },
    {
        cells: {
            FLD1: {
                obj: {
                    t: 'CN',
                    p: 'COL',
                    k: 'DELGIO',
                },
                value: 'DELGIO',
            },
            FLD2: {
                obj: {
                    t: 'NR',
                    p: '',
                    k: '6',
                },
                value: '6',
            },
            FLD3: {
                obj: {
                    t: 'NR',
                    p: '',
                    k: '67.8',
                },
                value: '67.8',
            },
            FLD4: {
                obj: {
                    t: 'D8',
                    p: '*YYMD',
                    k: '20180102',
                },
                value: '2018-01-02',
            },
            FLD5: {
                obj: {
                    t: 'NR',
                    p: 'P',
                    k: '60.60',
                },
                value: '60.60',
            },
        },
    },
    {
        cells: {
            FLD1: {
                obj: {
                    t: 'CN',
                    p: 'COL',
                    k: 'DELGIO',
                },
                value: 'DELGIO',
            },
            FLD2: {
                obj: {
                    t: 'NR',
                    p: '',
                    k: '6',
                },
                value: '6',
            },
            FLD3: {
                obj: {
                    t: 'NR',
                    p: '',
                    k: '67.8',
                },
                value: '67.8',
            },
            FLD4: {
                obj: {
                    t: 'D8',
                    p: '*YYMD',
                    k: '20180102',
                },
                value: '2018-01-02',
            },
            FLD5: {
                obj: {
                    t: 'NR',
                    p: 'P',
                    k: '70.60',
                },
                value: '70.60',
            },
        },
    },
    {
        cells: {
            FLD1: {
                obj: {
                    t: 'CN',
                    p: 'COL',
                    k: 'DELGIO',
                },
                value: 'DELGIO',
            },
            FLD2: {
                obj: {
                    t: 'NR',
                    p: '',
                    k: '6',
                },
                value: '6',
            },
            FLD3: {
                obj: {
                    t: 'NR',
                    p: '',
                    k: '67.8',
                },
                value: '67.8',
            },
            FLD4: {
                obj: {
                    t: 'D8',
                    p: '*YYMD',
                    k: '20180102',
                },
                value: '2018-01-02',
            },
            FLD5: {
                obj: {
                    t: 'NR',
                    p: 'P',
                    k: '80.60',
                },
                value: '80.60',
            },
        },
    },
    {
        cells: {
            FLD1: {
                obj: {
                    t: 'CN',
                    p: 'COL',
                    k: 'DELGIO',
                },
                value: 'DELGIO',
            },
            FLD2: {
                obj: {
                    t: 'NR',
                    p: '',
                    k: '6',
                },
                value: '6',
            },
            FLD3: {
                obj: {
                    t: 'NR',
                    p: '',
                    k: '67.8',
                },
                value: '67.8',
            },
            FLD4: {
                obj: {
                    t: 'D8',
                    p: '*YYMD',
                    k: '20180102',
                },
                value: '2018-01-02',
            },
            FLD5: {
                obj: {
                    t: 'NR',
                    p: 'P',
                    k: '90.60',
                },
                value: '90.60',
            },
        },
    },
    {
        cells: {
            FLD1: {
                obj: {
                    t: 'CN',
                    p: 'COL',
                    k: 'DELGIO',
                },
                value: 'DELGIO',
            },
            FLD2: {
                obj: {
                    t: 'NR',
                    p: '',
                    k: '6',
                },
                value: '6',
            },
            FLD3: {
                obj: {
                    t: 'NR',
                    p: '',
                    k: '67.8',
                },
                value: '67.8',
            },
            FLD4: {
                obj: {
                    t: 'D8',
                    p: '*YYMD',
                    k: '20180102',
                },
                value: '2018-01-02',
            },
            FLD5: {
                obj: {
                    t: 'NR',
                    p: 'P',
                    k: '0',
                },
                value: '',
            },
        },
    },
];
const defaultData = {
    columns: mockedColumns,
    rows: mockedRows,
};
const datatable = document.getElementById('datatable');
if (datatable != null) {
    datatable.data = defaultData;
}
