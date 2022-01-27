const inputTable = document.querySelector('#input-table');
const outputTable = document.querySelector('#output-table');
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
            range: {
                min: 60,
                max: 99,
            },
        },
    },
];

const resultingColumn = {
    name: '2099',
    title: 'Range 20-99',
};

const newButton = document.querySelector('[label="New"]');
const replaceButton = document.querySelector('[label="Replace"]');
const mergeButton = document.querySelector('[label="Merge"]');
const distinctButton = document.querySelector('[label="Distinct"]');
const allInOneButton = document.querySelector('[label="All in one"]');
const gaussianButton = document.querySelector('[label="Gaussian"]');

const echart = document.querySelector('kup-echart');
echart.types = ['Gaussian'];

newButton.addEventListener('kup-button-click', () => newEvent());
replaceButton.addEventListener('kup-button-click', () => replaceEvent());
mergeButton.addEventListener('kup-button-click', () => mergeEvent());
distinctButton.addEventListener('kup-button-click', () => distinctEvent());
allInOneButton.addEventListener('kup-button-click', () => allInOneEvent());
gaussianButton.addEventListener('kup-button-click', () => gaussianEvent());

function newEvent() {
    outputTable.data = null;
    const dataset = { ...inputTable.data };
    outputTable.data = kupManager.data.datasetOperations.new(
        dataset,
        newColumns
    );
}

function replaceEvent() {
    newEvent();
    const newDataset = { ...outputTable.data };
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
    outputTable.data = newDataset;
}

function mergeEvent() {
    replaceEvent();
    const newDataset = kupManager.data.datasetOperations.column.merge(
        { ...outputTable.data },
        ['2039', '4059', '6099'],
        resultingColumn
    );
    outputTable.data = newDataset;
}

function distinctEvent() {
    mergeEvent();
    const newDataset = kupManager.data.datasetOperations.distinct({
        ...outputTable.data,
    });
    outputTable.data = newDataset;
}

function allInOneEvent() {
    outputTable.data = null;
    const dataset = { ...inputTable.data };
    const newDataset = kupManager.data.datasetOperations.rangedDistinct(
        dataset,
        newColumns,
        resultingColumn
    );
    outputTable.data = newDataset;
}

function gaussianEvent() {
    distinctEvent();
    echart.data = outputTable.data;
}
