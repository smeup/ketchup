const fld1Values = ['DELGIO', 'CASFRA', 'PARFRA', 'FIOGIA', 'ZAMCHI'];

const fld2Values = ['Java', 'Javascript', 'Delphi', 'Kotlin', 'Go'];

// function getRandomArbitrary(min: number, max: number): number {
//     return Math.floor(Math.random() * (max - min) + min);
// }

function createData(colSize: number, rowSize: number) {
    const columns: any = [];
    for (let i = 0; i < colSize; i++) {
        columns.push({
            name: 'FLD' + i,
            title: 'Column ' + i,
            size: 10,
        });
    }

    const rows = [];
    for (let i = 0; i < rowSize; i++) {
        const currentRow: {
            cells: any;
        } = { cells: {} };

        for (let j = 0; j < columns.length; j++) {
            const cell: any = {};

            cell.value = i.toString() + j.toString();

            cell.obj = {
                t: 'NR',
                p: '',
                k: cell.value,
            };

            if (j === 0) {
                cell.obj.t = '';
                cell.value = fld1Values[i % fld1Values.length];
                cell.obj.k = cell.value;
            } else if (j === 1) {
                cell.obj.t = '';
                cell.value = fld2Values[i % fld2Values.length];
                cell.obj.k = cell.value;
            }

            currentRow.cells[columns[j].name] = cell;
        }

        rows.push(currentRow);
    }

    return {
        columns,
        rows,
    };
}

const data = createData(10, 300);

export default data;

export const staticData = {
    columns: [
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
    ],
    rows: [
        {
            cells: {
                FLD1: {
                    obj: {
                        t: 'CN',
                        p: 'COL',
                        k: 'CASFRA',
                    },
                    value: 'CASFRA',
                    options: true,
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
                    options: true,
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
                    options: true,
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
            },
        },
    ],
};

export const hiddenColumns = {
    columns: [
        {
            name: 'FLD1',
            title: 'Column A',
            size: '',
            visible: false,
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
            visible: false,
        },
    ],
    rows: [
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
            },
        },
    ],
};

const msMockData = { ...staticData };
msMockData.rows = [
    ...msMockData.rows,
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
        },
    },
];

export const multiSortMockData = msMockData;

export const groupingData = {
    columns: [
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
    ],
    rows: [
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
                        t: '',
                        p: '',
                        k: 'Javascript',
                    },
                    value: 'Javascript',
                },
                FLD3: {
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
                        t: '',
                        p: '',
                        k: 'Javascript',
                    },
                    value: 'Javascript',
                },
                FLD3: {
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
                        t: '',
                        p: '',
                        k: 'Javascript',
                    },
                    value: 'Javascript',
                },
                FLD3: {
                    obj: {
                        t: 'NR',
                        p: '',
                        k: '120.06',
                    },
                    value: '120.06',
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
                        t: '',
                        p: '',
                        k: 'Delphi',
                    },
                    value: 'Delphi',
                },
                FLD3: {
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
                        t: '',
                        p: '',
                        k: 'Delphi',
                    },
                    value: 'Delphi',
                },
                FLD3: {
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
                        t: '',
                        p: '',
                        k: 'Delphi',
                    },
                    value: 'Delphi',
                },
                FLD3: {
                    obj: {
                        t: 'NR',
                        p: '',
                        k: '120.06',
                    },
                    value: '120.06',
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
                        t: '',
                        p: '',
                        k: 'Go',
                    },
                    value: 'Go',
                },
                FLD3: {
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
                        t: '',
                        p: '',
                        k: 'Go',
                    },
                    value: 'Go',
                },
                FLD3: {
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
                        t: '',
                        p: '',
                        k: 'Go',
                    },
                    value: 'Go',
                },
                FLD3: {
                    obj: {
                        t: 'NR',
                        p: '',
                        k: '120.06',
                    },
                    value: '120.06',
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
                        t: '',
                        p: '',
                        k: 'Java',
                    },
                    value: 'Java',
                },
                FLD3: {
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
                        t: '',
                        p: '',
                        k: 'Java',
                    },
                    value: 'Java',
                },
                FLD3: {
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
                        t: '',
                        p: '',
                        k: 'Java',
                    },
                    value: 'Java',
                },
                FLD3: {
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
