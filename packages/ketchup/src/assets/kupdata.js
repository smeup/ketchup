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
    showTooltipOnRightClick: true,
    sort: [],
    store: {},
    sortableColumnsMutateData: true,
    sortEnabled: true,
    tooltipDetailTimeout: 1,
    tooltipEnabled: true,
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

const resultingColumn = {
    name: '2099',
    title: 'Range 20-99',
};

const resultingColumnString = {
    name: 'AZ',
    title: 'Range A-Z',
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
    outputTable.data = kupManager.data.datasetOperations.new(
        dataset,
        index === 0 ? newColumns : newColumnsString
    );
}

function replaceEvent(index) {
    newEvent(index);
    const newDataset = { ...outputTable.data };
    if (index === 0) {
        kupManager.data.datasetOperations.cell.replace(
            newDataset,
            { value: 'From 20 to 39' },
            ['2039']
        );
        kupManager.data.datasetOperations.cell.replace(
            newDataset,
            { value: 'From 40 to 59' },
            ['4059']
        );
        kupManager.data.datasetOperations.cell.replace(
            newDataset,
            { value: 'From 60 to 99' },
            ['6099']
        );
    } else {
        kupManager.data.datasetOperations.cell.replace(
            newDataset,
            { value: 'From A to C' },
            ['AC']
        );
        kupManager.data.datasetOperations.cell.replace(
            newDataset,
            { value: 'From D to P' },
            ['DP']
        );
        kupManager.data.datasetOperations.cell.replace(
            newDataset,
            { value: 'From Q to Z' },
            ['QZ']
        );
    }
    outputTable.data = newDataset;
}

function mergeEvent(index) {
    replaceEvent(index);
    let newDataset;
    if (index === 0) {
        newDataset = kupManager.data.datasetOperations.column.merge(
            { ...outputTable.data },
            ['2039', '4059', '6099'],
            resultingColumn
        );
    } else {
        newDataset = kupManager.data.datasetOperations.column.merge(
            { ...outputTable.data },
            ['AC', 'DP', 'QZ'],
            resultingColumnString
        );
    }
    outputTable.data = newDataset;
}

function distinctEvent(index) {
    mergeEvent(index);
    const newDataset = kupManager.data.datasetOperations.distinct({
        ...outputTable.data,
    });
    outputTable.data = newDataset;
}

function allInOneEvent(index, titleColumn) {
    outputTable.data = null;
    const dataset = { ...inputTable.data };
    let newDataset;
    if (index === 0) {
        newDataset = kupManager.data.datasetOperations.rangedDistinct(
            dataset,
            newColumns,
            resultingColumn,
            titleColumn
        );
    } else {
        newDataset = kupManager.data.datasetOperations.rangedDistinct(
            dataset,
            newColumnsString,
            resultingColumnString,
            titleColumn
        );
    }
    outputTable.data = newDataset;
}

function gaussianEvent(index) {
    distinctEvent(index);
    echart.data = outputTable.data;
}
