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
    },
    {
        name: 'FLD3',
        title: 'Column C',
        size: 10,
    },
    {
        name: 'FLD4',
        title: 'Column D',
        size: 10,
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
                    k: '100.60',
                },
                value: '100.60',
            },
            FLD4: {
                obj: {
                    t: 'D8',
                    p: '*YYMD',
                    k: '20180101',
                },
                value: '01/01/2018',
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
                value: '02/01/2018',
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
                value: '03/01/2018',
            },
        },
    },
];

const sortRows = [
    ...mockedRows,
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
                    k: '11',
                },
                value: '11',
            },
            FLD3: {
                obj: {
                    t: 'NR',
                    p: '',
                    k: '100.60',
                },
                value: '100.60',
            },
            FLD4: {
                obj: {
                    t: 'D8',
                    p: '*YYMD',
                    k: '20180101',
                },
                value: '01/01/2018',
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
                    k: '7',
                },
                value: '7',
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
                value: '02/01/2018',
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
                    k: '6',
                },
                value: '6',
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
                value: '03/01/2018',
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
                    k: '12',
                },
                value: '12',
            },
            FLD3: {
                obj: {
                    t: 'NR',
                    p: '',
                    k: '100.60',
                },
                value: '100.60',
            },
            FLD4: {
                obj: {
                    t: 'D8',
                    p: '*YYMD',
                    k: '20180101',
                },
                value: '01/01/2018',
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
                    k: '8',
                },
                value: '8',
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
                value: '02/01/2018',
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
                    k: '7',
                },
                value: '7',
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
                value: '03/01/2018',
            },
        },
    },
];

const defaultData = {
    data: {
        columns: mockedColumns,
        rows: mockedRows,
    },
};

const sortData = {
    data: {
        columns: mockedColumns,
        rows: sortRows,
    },
};

document.getElementById('only-cols').data = {
    data: {
        columns: mockedColumns,
    },
};

document.getElementById('basic-data').data = defaultData;

// filters
const showFilter = document.getElementById('show-filter');
showFilter.data = defaultData;
showFilter.config = {
    showFilter: true,
};

const filter = document.getElementById('filter');
filter.data = defaultData;
filter.config = {
    showFilter: true,
    filter: {
        FLD1: 'fra',
    },
};

const globalFilter = document.getElementById('global-filter');
globalFilter.data = defaultData;
globalFilter.config = {
    showFilter: true,
    globalFilter: true,
};

// sort
const noSort = document.getElementById('no-sort');
noSort.data = sortData;
noSort.config = {
    enableSort: false,
};

const dftSort = document.getElementById('dft-sort');
dftSort.data = sortData;
dftSort.config = {
    sort: [
        {
            column: 'FLD1',
            sortMode: 'A',
        },
        {
            column: 'FLD2',
            sortMode: 'D',
        },
    ],
};

// pagination
function createDataForPagination(colSize, rowSize) {
    const columns = [];
    for (let i = 0; i < colSize; i++) {
        columns.push({
            name: 'FLD' + i,
            title: 'Column ' + i,
            size: 10,
        });
    }

    const rows = [];
    for (let i = 0; i < rowSize; i++) {
        const currentRow = {};
        const cells = {};

        for (let j = 0; j < columns.length; j++) {
            const cell = {};
            cell.value = i.toString() + j.toString();

            cells[columns[j].name] = cell;
        }

        currentRow.cells = cells;
        rows.push(currentRow);
    }

    const pagination = document.getElementById('pagination');
    pagination.data = {
        data: {
            columns,
            rows,
        },
    };
    pagination.config = {
        showFilter: true,
        globalFilter: true,
        rowsPerPage: 20,
    };
}

function updatePaginationTable() {
    // getting inputs
    const cols = document.getElementById('cols').value;
    const rows = document.getElementById('rows').value;

    createDataForPagination(parseInt(cols), parseInt(rows));
}

createDataForPagination(10, 100);
