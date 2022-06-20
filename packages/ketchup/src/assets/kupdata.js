const inputTable = document.querySelector('#input-table');
const outputTable = document.querySelector('#output-table');
outputTable.autoFillMissingCells = true;
const props = {
    autoFillMissingCells: false,
    customStyle: '',
    data: {
        columns: [
            {
                isKey: false,
                name: 'COL',
                obj: {
                    k: '',
                    p: 'COL',
                    t: 'CN',
                },
                title: 'Collaboratore',
                tooltip: true,
            },
            {
                decimals: 0,
                isKey: false,
                name: 'ETA',
                obj: {
                    k: '',
                    p: '',
                    t: 'NR',
                },
                title: 'Età',
                tooltip: true,
            },
            {
                decimals: 0,
                isKey: false,
                name: 'BIRTH',
                obj: {
                    k: '',
                    p: '',
                    t: 'D8',
                },
                title: 'Anno di nascita',
                tooltip: true,
            },
        ],
        rows: [
            {
                cells: {
                    COL: {
                        cssClass: 'strong-text top-right-indicator',
                        isEditable: false,
                        obj: {
                            k: 'Marco Rosasi',
                            p: 'COL',
                            t: 'CN',
                        },
                        value: 'Marco Rosasi',
                    },
                    ETA: {
                        cssClass: ' top-right-indicator',
                        isEditable: false,
                        obj: {
                            k: '43',
                            p: '',
                            t: 'NR',
                        },
                        value: '43',
                        displayedValue: '43',
                    },
                    BIRTH: {
                        obj: {
                            k: '1900-12-12',
                            p: '',
                            t: 'D8',
                        },
                        value: '1900-12-12',
                    },
                },
                id: '0',
                object: '',
                readOnly: true,
            },
            {
                cells: {
                    COL: {
                        cssClass: 'strong-text top-right-indicator',
                        isEditable: false,
                        obj: {
                            k: 'Alessandro Manzoni',
                            p: 'COL',
                            t: 'CN',
                        },
                        value: 'Alessandro Manzoni',
                    },
                    ETA: {
                        cssClass: ' top-right-indicator',
                        isEditable: false,
                        obj: {
                            k: '69',
                            p: '',
                            t: 'NR',
                        },
                        value: '69',
                        displayedValue: '69',
                    },
                    BIRTH: {
                        obj: {
                            k: '1921-02-01',
                            p: '',
                            t: 'D8',
                        },
                        value: '1921-02-01',
                    },
                },
                id: '1',
                object: '',
                readOnly: true,
            },
            {
                cells: {
                    COL: {
                        cssClass: 'strong-text top-right-indicator',
                        isEditable: false,
                        obj: {
                            k: 'Giuseppe Garibaldi',
                            p: 'COL',
                            t: 'CN',
                        },
                        value: 'Giuseppe Garibaldi',
                    },
                    ETA: {
                        cssClass: ' top-right-indicator',
                        isEditable: false,
                        obj: {
                            k: '33',
                            p: '',
                            t: 'NR',
                        },
                        value: '33',
                        displayedValue: '33',
                    },
                    BIRTH: {
                        obj: {
                            k: '1932-06-30',
                            p: '',
                            t: 'D8',
                        },
                        value: '1932-06-30',
                    },
                },
                id: '2',
                object: '',
                readOnly: true,
            },
            {
                cells: {
                    COL: {
                        cssClass: 'strong-text top-right-indicator',
                        isEditable: false,
                        obj: {
                            k: 'Ugo Foscolo',
                            p: 'COL',
                            t: 'CN',
                        },
                        value: 'Ugo Foscolo',
                    },
                    ETA: {
                        cssClass: ' top-right-indicator',
                        isEditable: false,
                        obj: {
                            k: '24',
                            p: '',
                            t: 'NR',
                        },
                        value: '24',
                        displayedValue: '24',
                    },
                    BIRTH: {
                        obj: {
                            k: '2015-01-31',
                            p: '',
                            t: 'D8',
                        },
                        value: '2015-01-31',
                    },
                },
                id: '3',
                object: '',
                readOnly: true,
            },
            {
                cells: {
                    COL: {
                        cssClass: 'strong-text top-right-indicator',
                        isEditable: false,
                        obj: {
                            k: 'Giovanni Pascoli',
                            p: 'COL',
                            t: 'CN',
                        },
                        value: 'Giovanni Pascoli',
                    },
                    ETA: {
                        cssClass: ' top-right-indicator',
                        isEditable: false,
                        obj: {
                            k: '59',
                            p: '',
                            t: 'NR',
                        },
                        value: '59',
                        displayedValue: '59',
                    },
                    BIRTH: {
                        obj: {
                            k: '2000-01-01',
                            p: '',
                            t: 'D8',
                        },
                        value: '2000-01-01',
                    },
                },
                id: '4',
                object: '',
                readOnly: true,
            },
            {
                cells: {
                    COL: {
                        cssClass: 'strong-text top-right-indicator',
                        isEditable: false,
                        obj: {
                            k: 'Dante Alighieri',
                            p: 'COL',
                            t: 'CN',
                        },
                        value: 'Dante Alighieri',
                    },
                    ETA: {
                        cssClass: ' top-right-indicator',
                        isEditable: false,
                        obj: {
                            k: '33',
                            p: '',
                            t: 'NR',
                        },
                        value: '33',
                        displayedValue: '33',
                    },
                    BIRTH: {
                        obj: {
                            k: '1999-05-12',
                            p: '',
                            t: 'D8',
                        },
                        value: '1999-05-12',
                    },
                },
                id: '5',
                object: '',
                readOnly: true,
            },
            {
                cells: {
                    COL: {
                        cssClass: 'strong-text top-right-indicator',
                        isEditable: false,
                        obj: {
                            k: 'Eugenio Montale',
                            p: 'COL',
                            t: 'CN',
                        },
                        value: 'Eugenio Montale',
                    },
                    ETA: {
                        cssClass: ' top-right-indicator',
                        isEditable: false,
                        obj: {
                            k: '51',
                            p: '',
                            t: 'NR',
                        },
                        value: '51',
                        displayedValue: '51',
                    },
                    BIRTH: {
                        obj: {
                            k: '1807-08-21',
                            p: '',
                            t: 'D8',
                        },
                        value: '1807-08-21',
                    },
                },
                id: '6',
                object: '',
                readOnly: true,
            },
            {
                cells: {
                    COL: {
                        cssClass: 'strong-text top-right-indicator',
                        isEditable: false,
                        obj: {
                            k: 'Francesco Petrarca',
                            p: 'COL',
                            t: 'CN',
                        },
                        value: 'Francesco Petrarca',
                    },
                    ETA: {
                        cssClass: ' top-right-indicator',
                        isEditable: false,
                        obj: {
                            k: '27',
                            p: '',
                            t: 'NR',
                        },
                        value: '27',
                        displayedValue: '27',
                    },
                    BIRTH: {
                        obj: {
                            k: '1780-10-01',
                            p: '',
                            t: 'D8',
                        },
                        value: '1780-10-01',
                    },
                },
                id: '7',
                object: '',
                readOnly: true,
            },
            {
                cells: {
                    COL: {
                        cssClass: 'strong-text top-right-indicator',
                        isEditable: false,
                        obj: {
                            k: 'Eugenio Montale',
                            p: 'COL',
                            t: 'CN',
                        },
                        value: 'Eugenio Montale',
                    },
                    ETA: {
                        cssClass: ' top-right-indicator',
                        isEditable: false,
                        obj: {
                            k: '51',
                            p: '',
                            t: 'NR',
                        },
                        value: '51',
                        displayedValue: '51',
                    },
                    BIRTH: {
                        obj: {
                            k: '2021-03-12',
                            p: '',
                            t: 'D8',
                        },
                        value: '2021-03-12',
                    },
                },
                id: '8',
                object: '',
                readOnly: true,
            },
            {
                cells: {
                    COL: {
                        cssClass: 'strong-text top-right-indicator',
                        isEditable: false,
                        obj: {
                            k: 'Giuseppe Ungheretti',
                            p: 'COL',
                            t: 'CN',
                        },
                        value: 'Giuseppe Ungheretti',
                    },
                    ETA: {
                        cssClass: ' top-right-indicator',
                        isEditable: false,
                        obj: {
                            k: '79',
                            p: '',
                            t: 'NR',
                        },
                        value: '79',
                        displayedValue: '79',
                    },
                    BIRTH: {
                        obj: {
                            k: '1790-11-11',
                            p: '',
                            t: 'D8',
                        },
                        value: '1790-11-11',
                    },
                },
                id: '9',
                object: '',
                readOnly: true,
            },
            {
                cells: {
                    COL: {
                        cssClass: 'strong-text top-right-indicator',
                        isEditable: false,
                        obj: {
                            k: 'Umberto Saba',
                            p: 'COL',
                            t: 'CN',
                        },
                        value: 'Umberto Saba',
                    },
                    ETA: {
                        cssClass: ' top-right-indicator',
                        isEditable: false,
                        obj: {
                            k: '29',
                            p: '',
                            t: 'NR',
                        },
                        value: '29',
                        displayedValue: '29',
                    },
                    BIRTH: {
                        obj: {
                            k: '1990-12-02',
                            p: '',
                            t: 'D8',
                        },
                        value: '1990-12-02',
                    },
                },
                id: '10',
                object: '',
                readOnly: true,
            },
            {
                cells: {
                    COL: {
                        cssClass: 'strong-text top-right-indicator',
                        isEditable: false,
                        obj: {
                            k: 'Salvatore Quasimodo',
                            p: 'COL',
                            t: 'CN',
                        },
                        value: 'Salvatore Quasimodo',
                    },
                    ETA: {
                        cssClass: ' top-right-indicator',
                        isEditable: false,
                        obj: {
                            k: '51',
                            p: '',
                            t: 'NR',
                        },
                        value: '51',
                        displayedValue: '51',
                    },
                    BIRTH: {
                        obj: {
                            k: '1945-03-17',
                            p: '',
                            t: 'D8',
                        },
                        value: '1945-03-17',
                    },
                },
                id: '11',
                object: '',
                readOnly: true,
            },
            {
                cells: {
                    COL: {
                        cssClass: 'strong-text top-right-indicator',
                        isEditable: false,
                        obj: {
                            k: 'Giacomo Leopardi',
                            p: 'COL',
                            t: 'CN',
                        },
                        value: 'Giacomo Leopardi',
                    },
                    ETA: {
                        cssClass: ' top-right-indicator',
                        isEditable: false,
                        obj: {
                            k: '38',
                            p: '',
                            t: 'NR',
                        },
                        value: '38',
                        displayedValue: '38',
                    },
                    BIRTH: {
                        obj: {
                            k: '1968-08-15',
                            p: '',
                            t: 'D8',
                        },
                        value: '1968-08-15',
                    },
                },
                id: '12',
                object: '',
                readOnly: true,
            },
            {
                cells: {
                    COL: {
                        cssClass: 'strong-text top-right-indicator',
                        isEditable: false,
                        obj: {
                            k: 'Piero Angela',
                            p: 'COL',
                            t: 'CN',
                        },
                        value: 'Piero Angela',
                    },
                    ETA: {
                        cssClass: ' top-right-indicator',
                        isEditable: false,
                        obj: {
                            k: '99',
                            p: '',
                            t: 'NR',
                        },
                        value: '99',
                        displayedValue: '99',
                    },
                    BIRTH: {
                        obj: {
                            k: '1922-02-24',
                            p: '',
                            t: 'D8',
                        },
                        value: '1922-02-24',
                    },
                },
                id: '13',
                object: '',
                readOnly: true,
            },
            {
                cells: {
                    COL: {
                        cssClass: 'strong-text top-right-indicator',
                        isEditable: false,
                        obj: {
                            k: 'Giosue Carducci',
                            p: 'COL',
                            t: 'CN',
                        },
                        value: 'Giosue Carducci',
                    },
                    ETA: {
                        cssClass: ' top-right-indicator',
                        isEditable: false,
                        obj: {
                            k: '77',
                            p: '',
                            t: 'NR',
                        },
                        value: '77',
                        displayedValue: '77',
                    },
                    BIRTH: {
                        obj: {
                            k: '1850-01-30',
                            p: '',
                            t: 'D8',
                        },
                        value: '1850-01-30',
                    },
                },
                id: '14',
                object: '',
                readOnly: true,
            },
        ],
    },
    density: 'dense',
    dragEnabled: false,
    dropEnabled: false,
    editableData: true,
    emptyDataLabel: 'Nessun risultato',
    enableColumnsFormula: true,
    enableMergeColumns: true,
    enableExtraColumns: true,
    enableSortableColumns: true,
    expandGroups: false,
    filters: {},
    fixedColumns: 0,
    fixedRows: 0,
    forceOneLine: true,
    globalFilter: false,
    globalFilterValue: '',
    groupLabelDisplay: 'Both',
    groups: [],
    headerIsPersistent: true,
    isFocusable: false,
    lazyLoadRows: false,
    lineBreakCharacter: '\n',
    loadMoreLimit: 1000,
    loadMoreMode: 'progressive_threshold',
    loadMoreStep: 60,
    pageSelected: -1,
    paginatorPos: 'Top',
    removableColumns: true,
    resizableColumns: true,
    rowsPerPage: 50,
    scrollOnHover: true,
    showCustomization: true,
    showFilters: true,
    showFooter: true,
    showGrid: 'Row',
    showGroups: true,
    showHeader: true,
    showLoadMore: false,
    sort: [],
    store: {},
    sortableColumnsMutateData: true,
    sortEnabled: true,
};
for (const key in props) {
    inputTable[key] = props[key];
}

const newColumns = [
    {
        column: {
            name: '2039',
            title: 'Range 20-39',
        },
        criteria: {
            columns: ['ETA'],
            range: {
                min: 20,
                max: 39,
            },
        },
    },
    {
        column: {
            name: '4059',
            title: 'Range 40-59',
        },
        criteria: {
            columns: ['ETA'],
            range: {
                min: 40,
                max: 59,
            },
        },
    },
    {
        column: {
            name: '6099',
            title: 'Range 60-99',
        },
        criteria: {
            columns: ['ETA'],
            range: {
                min: 60,
                max: 99,
            },
        },
    },
];

const newColumnsString = [
    {
        column: {
            name: 'AC',
            title: 'Range A-C',
        },
        criteria: {
            columns: ['COL'],
            range: {
                min: 'A',
                max: 'C',
            },
        },
    },
    {
        column: {
            name: 'DP',
            title: 'Range D-P',
        },
        criteria: {
            columns: ['COL'],
            range: {
                min: 'D',
                max: 'P',
            },
        },
    },
    {
        column: {
            name: 'QZ',
            title: 'Range Q-Z',
        },
        criteria: {
            columns: ['COL'],
            range: {
                min: 'Q',
                max: 'Z',
            },
        },
    },
];

const newColumnsDate = [
    {
        column: {
            name: '17001900',
            title: 'Range 1700-1900',
        },
        criteria: {
            columns: ['BIRTH'],
            range: {
                min: '1700-01-01',
                max: '1900-12-31',
            },
        },
    },
    {
        column: {
            name: '19011950',
            title: 'Range 1901-1950',
        },
        criteria: {
            columns: ['BIRTH'],
            range: {
                min: '1901-01-01',
                max: '1950-12-31',
            },
        },
    },
    {
        column: {
            name: '19512022',
            title: 'Range 1951-2022',
        },
        criteria: {
            columns: ['BIRTH'],
            range: {
                min: '1951-01-01',
                max: '2022-12-31',
            },
        },
    },
];

const resultingColumn = {
    name: '2099',
    title: 'Range 20-99',
};

const resultingColumnString = {
    name: 'AZ',
    title: 'Range A-Z',
};

const resultingColumnDate = {
    name: '17002022',
    title: 'Range 1700-2022',
};

const newButtons = document.querySelectorAll('[label="New"]');
const replaceButtons = document.querySelectorAll('[label="Replace"]');
const mergeButtons = document.querySelectorAll('[label="Merge"]');
const distinctButtons = document.querySelectorAll('[label="Distinct"]');
const allInOneButtons = document.querySelectorAll('[label="All in one"]');
const allInOneValuesButtons = document.querySelectorAll(
    '[label="All in one (+ values column)"]'
);
const gaussianButtons = document.querySelectorAll('[label="Gaussian"]');

const echart = document.querySelector('kup-echart');
echart.types = ['Gaussian'];

newButtons.forEach((but, index) => {
    but.addEventListener('kup-button-click', () => newEvent(index));
});
replaceButtons.forEach((but, index) => {
    but.addEventListener('kup-button-click', () => replaceEvent(index));
});
mergeButtons.forEach((but, index) => {
    but.addEventListener('kup-button-click', () => mergeEvent(index));
});
distinctButtons.forEach((but, index) => {
    but.addEventListener('kup-button-click', () => distinctEvent(index));
});
allInOneButtons.forEach((but, index) => {
    but.addEventListener('kup-button-click', () => allInOneEvent(index));
});
allInOneValuesButtons.forEach((but, index) => {
    but.addEventListener('kup-button-click', () =>
        allInOneEvent(index, {
            name: 'VALUES',
            title: 'Values',
        })
    );
});
gaussianButtons.forEach((but, index) => {
    but.addEventListener('kup-button-click', () => gaussianEvent(index));
});

function newEvent(index) {
    outputTable.data = null;
    const dataset = { ...inputTable.data };
    outputTable.data = kupManager.data.new(
        dataset,
        index === 0
            ? newColumns
            : index === 1
            ? newColumnsString
            : newColumnsDate
    );
}

function replaceEvent(index) {
    newEvent(index);
    const newDataset = { ...outputTable.data };
    if (index === 0) {
        kupManager.data.cell.replace(newDataset, { value: 'From 20 to 39' }, [
            '2039',
        ]);
        kupManager.data.cell.replace(newDataset, { value: 'From 40 to 59' }, [
            '4059',
        ]);
        kupManager.data.cell.replace(newDataset, { value: 'From 60 to 99' }, [
            '6099',
        ]);
    } else if (index === 1) {
        kupManager.data.cell.replace(newDataset, { value: 'From A to C' }, [
            'AC',
        ]);
        kupManager.data.cell.replace(newDataset, { value: 'From D to P' }, [
            'DP',
        ]);
        kupManager.data.cell.replace(newDataset, { value: 'From Q to Z' }, [
            'QZ',
        ]);
    } else if (index === 2) {
        kupManager.data.cell.replace(
            newDataset,
            { value: 'From 1700 to 1900' },
            ['17001900']
        );
        kupManager.data.cell.replace(
            newDataset,
            { value: 'From 1901 to 1950' },
            ['19011950']
        );
        kupManager.data.cell.replace(
            newDataset,
            { value: 'From 1951 to 2022' },
            ['19512022']
        );
    }
    outputTable.data = newDataset;
}

function mergeEvent(index) {
    replaceEvent(index);
    const newDataset = { ...outputTable.data };
    if (index === 0) {
        kupManager.data.column.new(newDataset, 'merge', {
            columns: ['2039', '4059', '6099'],
            newColumn: resultingColumn,
        });
    } else if (index === 1) {
        kupManager.data.column.new(newDataset, 'merge', {
            columns: ['AC', 'DP', 'QZ'],
            newColumn: resultingColumnString,
        });
    } else if (index === 2) {
        kupManager.data.column.new(newDataset, 'merge', {
            columns: ['17001900', '19011950', '19512022'],
            newColumn: resultingColumnDate,
        });
    }
    outputTable.data = newDataset;
}

function distinctEvent(index) {
    mergeEvent(index);
    const newDataset = kupManager.data.distinct({
        ...outputTable.data,
    });
    outputTable.data = newDataset;
}

function allInOneEvent(index, titleColumn) {
    outputTable.data = null;
    const dataset = { ...inputTable.data };
    let newDataset;
    if (index === 0) {
        newDataset = kupManager.data.rangedDistinct(
            dataset,
            newColumns,
            resultingColumn,
            titleColumn
        );
    } else if (index === 1) {
        newDataset = kupManager.data.rangedDistinct(
            dataset,
            newColumnsString,
            resultingColumnString,
            titleColumn
        );
    } else if (index === 2) {
        newDataset = kupManager.data.rangedDistinct(
            dataset,
            newColumnsDate,
            resultingColumnDate,
            titleColumn
        );
    }
    outputTable.data = newDataset;
}

function gaussianEvent(index) {
    distinctEvent(index);
    echart.data = outputTable.data;
}
