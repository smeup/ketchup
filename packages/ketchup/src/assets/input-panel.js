const datatable = {
    type: 'SmeupDataTable',
    columns: [
        {
            editable: true,
            name: 'COL1',
            title: 'Column 1',
            visible: true,
            isEditable: true,
        },
        {
            editable: false,
            name: 'COL2',
            title: 'Column 2',
            visible: true,
            isEditable: false,
        },
    ],
    rows: [
        {
            cells: {
                COL1: {
                    value: 'Override value',
                    options: [],
                    icon: 'home',
                    editable: false,
                    mandatory: false,
                    fun: 'EXEC',
                },
                COL2: {
                    value: 'Row 1 column 2',
                    options: [],
                    editable: false,
                    mandatory: false,
                },
            },
            layout: {
                type: 'SmeupDataLayout',
                horizontal: false,
                sections: [],
            },
        },
        {
            cells: {
                COL1: {
                    value: 'Row 2 column 1',
                    options: [],
                    editable: false,
                    mandatory: false,
                },
                COL2: {
                    value: 'Row 2 column 2',
                    options: [],
                    editable: false,
                    mandatory: false,
                },
            },
            layout: {
                type: 'SmeupDataLayout',
                horizontal: false,
                sections: [],
            },
        },
    ],
};

const data = {
    columns: [
        {
            name: 'NAM',
            title: 'Name',
            visible: true,
        },
        {
            editable: false,
            name: 'INP1',
            title: 'Field1',
            visible: true,
            isEditable: false,
        },
        {
            editable: false,
            name: 'INP2',
            title: 'Field2',
            visible: true,
            isEditable: false,
        },
        {
            name: 'DATA',
            title: '',
            visible: true,
        },
        { editable: false, name: 'BTN1', visible: true, isEditable: false },
        { editable: false, name: 'BTN2', visible: true, isEditable: false },
        { name: 'NAT', title: 'Combo', visible: true },
    ],
    rows: [
        {
            cells: {
                NAM: {
                    value: 'Giovanni',
                    obj: { t: '', p: '', k: '' },
                    editable: true,
                    mandatory: true,
                    shape: 'ITX',
                },
                INP1: {
                    value: '',
                    obj: { t: 'D8', p: '', k: '' },
                    editable: true,
                    mandatory: true,
                },
                INP2: {
                    value: '',
                    obj: { t: 'NR', p: '' },
                    editable: true,
                    mandatory: true,
                },
                BTN1: {
                    value: 'Load data',
                    obj: { t: 'J4', p: 'BTN' },
                    options: [],
                    editable: true,
                    mandatory: true,
                },
                BTN2: {
                    value: 'Avanti',
                    obj: { t: 'J4', p: 'BTN' },
                    options: [],
                    editable: true,
                    mandatory: true,
                },
                DATA: {
                    // value: datatable,
                    shape: 'TBL',
                    editable: true,
                    mandatory: true,
                },
                NAT: {
                    value: 'ITA',
                    fun: 'combo',
                    obj: {
                        t: '',
                        p: '',
                        k: '',
                    },
                    editable: true,
                    mandatory: true,
                    shape: 'CMB',
                },
            },
            layout: {
                type: 'SmeupDataLayout',
                horizontal: false,
                sections: [
                    // {
                    //     content: [
                    //         {
                    //             id: 'NAM',
                    //         },
                    //         {
                    //             options: [],
                    //             editable: false,
                    //             mandatory: false,
                    //             id: 'INP1',
                    //         },
                    //         {
                    //             options: [],
                    //             editable: false,
                    //             mandatory: false,
                    //             id: 'INP2',
                    //         },
                    //     ],
                    //     sections: [],
                    //     horizontal: false,
                    //     gridCols: 4,
                    //     gridRows: 2,
                    //     gap: 2,
                    //     title: 'Anagrafica',
                    // },
                    // {
                    //     content: [{id: 'NAT',colSpan: 1, rowSpan: 1,}],
                    //     gridCols: 1,
                    //     gridRows:1
                    // },
                    {
                        content: [
                            {
                                id: 'DATA',
                                colSpan: 1,
                                rowSpan: 1,
                            },
                        ],
                        horizontal: false,
                        gridCols: 1,
                        gridRows: 1,
                        title: 'Table',
                    },
                    {
                        content: [
                            {
                                options: [],
                                editable: false,
                                mandatory: false,
                                id: 'BTN1',
                                colSpan: 1,
                                rowSpan: 1,
                            },
                            // {
                            //     options: [],
                            //     editable: false,
                            //     mandatory: false,
                            //     id: 'BTN2',
                            //     colSpan: 1,
                            //     rowSpan: 1,
                            // },
                        ],
                        sections: [],
                        horizontal: false,
                        gridCols: 4,
                        gridRows: 2,
                        gap: 2,
                        title: 'Actions',
                    },
                ],
            },
        },
    ],
    debugInfo: {
        executionTime_ms: 51,
        initialTimestamp: '2024-06-11T15:02:17.854994131Z',
        finalTimestamp: '2024-06-11T15:02:17.906443131Z',
        runtime: 'Java 21',
    },
};

const data1 = {
    columns: [
        {
            name: 'NAM',
            title: 'Name',
            visible: true,
        },
        {
            editable: false,
            name: 'INP1',
            title: 'Field1',
            visible: true,
            isEditable: false,
        },
        {
            editable: false,
            name: 'INP2',
            title: 'Field2',
            visible: true,
            isEditable: false,
        },
        {
            name: 'DATA',
            title: '',
            visible: true,
        },
        { editable: false, name: 'BTN1', visible: true, isEditable: false },
        { editable: false, name: 'BTN2', visible: true, isEditable: false },
    ],
    rows: [
        {
            cells: {
                NAM: {
                    value: '',
                    editable: true,
                    mandatory: true,

                    obj: { t: '', p: '', k: '' },
                    shape: 'ITX',
                },
                INP1: {
                    value: '',
                    obj: { t: 'D8' },
                    editable: true,
                    mandatory: true,
                },
                INP2: {
                    value: '',
                    obj: { t: 'NR', p: '' },
                    editable: true,
                    mandatory: true,
                },
                BTN1: {
                    value: 'Load data',
                    obj: { t: 'J4', p: 'BTN' },
                    options: [],
                    editable: true,
                    mandatory: true,
                },
                BTN2: {
                    value: 'Avanti',
                    obj: { t: 'J4', p: 'BTN' },
                    options: [],
                    editable: true,
                    mandatory: true,
                },
                DATA: {
                    value: datatable,
                    obj: { t: 'TABLE' },
                    // options: datatable,
                    editable: true,
                    mandatory: true,
                },
            },
            layout: {
                type: 'SmeupDataLayout',
                horizontal: false,
                sections: [
                    {
                        content: [
                            {
                                id: 'NAM',
                            },
                            {
                                id: 'INP1',
                            },
                            {
                                id: 'INP2',
                            },
                        ],
                        sections: [],
                        horizontal: false,
                        gridCols: 4,
                        gridRows: 2,
                        gap: 2,
                        title: 'Anagrafica',
                    },
                    // {
                    //     content: [
                    //         {
                    //             id: 'DATA',
                    //             colSpan: 1,
                    //             rowSpan: 1
                    //         },
                    //     ],
                    //     horizontal: false,
                    //     gridCols: 1,
                    //     gridRows: 1,
                    //     title: 'Table',
                    // },
                    // {
                    //     content: [
                    //         {
                    //             options: [],
                    //             editable: false,
                    //             mandatory: false,
                    //             id: 'BTN1',
                    //             colSpan: 1,
                    //             rowSpan: 1,
                    //         },
                    //         {
                    //             options: [],
                    //             editable: false,
                    //             mandatory: false,
                    //             id: 'BTN2',
                    //             colSpan: 1,
                    //             rowSpan: 1,
                    //         },
                    //     ],
                    //     sections: [],
                    //     horizontal: false,
                    //     gridCols: 4,
                    //     gridRows: 2,
                    //     gap: 2,
                    //     title: 'Actions',
                    // },
                ],
            },
        },
    ],
};

// Example of rerender configuration
// const data1 = {
//     columns: [
//         {
//             name: 'NAM',
//             title: 'Name',
//             visible: true,
//         },
//         {
//             name: 'SUR',
//             title: 'Surname',
//             visible: true,
//         },
//         {
//             name: 'NAT',
//             title: 'Nation',
//             visible: true,
//         },
//         {
//             name: 'CIT',
//             title: 'Tree Options',
//             visible: true,
//         },
//         {
//             name: 'LIS',
//             title: 'Table Options',
//             visible: true,
//         },
//         {
//             name: 'CHK',
//             title: 'Checkbox',
//             visible: true,
//         },
//         {
//             name: 'RAD',
//             title: 'Radio Buttons',
//             visible: true,
//         },
//     ],
//     rows: [
//         {
//             cells: {
//                 NAM: {
//                     value: 'Giovanni',
//                     obj: {
//                         t: '',
//                         p: '',
//                         k: '',
//                     },
//                     editable: true,
//                     mandatory: true,
//                     shape: 'ITX',
//                 },
//                 SUR: {
//                     value: 'serio',
//                     obj: {
//                         t: '',
//                         p: '',
//                         k: '',
//                     },
//                     editable: true,
//                     mandatory: true,
//                     shape: 'ITX',
//                 },
//                 NAT: {
//                     value: 'ITA',
//                     fun: 'combo',
//                     obj: {
//                         t: '',
//                         p: '',
//                         k: '',
//                     },
//                     editable: true,
//                     mandatory: true,
//                     shape: 'CMB',
//                 },
//                 CIT: {
//                     value: 'E1',
//                     obj: {
//                         t: '',
//                         p: '',
//                         k: '',
//                     },
//                     editable: true,
//                     mandatory: true,
//                     shape: 'ACP',
//                     fun: 'ddas',
//                 },
//                 LIS: {
//                     value: 'E2',
//                     obj: {
//                         t: '',
//                         p: '',
//                         k: '',
//                     },
//                     editable: true,
//                     mandatory: true,
//                     shape: 'ACP',
//                     fun: 'fff',
//                 },
//                 CHK: {
//                     value: 'on',
//                     editable: true,
//                     mandatory: true,
//                     shape: 'CHK',
//                 },
//                 RAD: {
//                     value: '1',
//                     options: [
//                         {
//                             id: '1',
//                             label: 'One',
//                         },
//                         {
//                             id: '2',
//                             label: 'Two',
//                         },
//                         {
//                             id: '3',
//                             label: 'Three',
//                         },
//                         {
//                             id: '4',
//                             label: 'Four',
//                         },
//                     ],
//                     editable: true,
//                     mandatory: true,
//                     shape: 'RAD',
//                 },
//             },
//             layout: {
//                 sections: [
//                     {
//                         content: [
//                             {
//                                 id: 'NAM',
//                                 colStart: 1,
//                                 colEnd: 1,
//                                 rowStart: 1,
//                                 rowEnd: 1,
//                             },
//                             {
//                                 id: 'SUR',
//                                 colStart: 2,
//                                 colEnd: 2,
//                                 rowStart: 1,
//                                 rowEnd: 1,
//                             },
//                             {
//                                 id: 'NAT',
//                                 colStart: 1,
//                                 colEnd: 1,
//                                 rowStart: 2,
//                                 rowEnd: 2,
//                             },
//                             {
//                                 id: 'CIT',
//                                 colStart: 2,
//                                 colEnd: 2,
//                                 rowStart: 2,
//                                 rowEnd: 2,
//                             },
//                             {
//                                 id: 'CHK',
//                                 colStart: 1,
//                                 colEnd: 1,
//                                 rowStart: 3,
//                                 rowEnd: 3,
//                             },
//                             {
//                                 id: 'RAD',
//                                 colSpan: 2,
//                                 rowStart: 3,
//                                 rowEnd: 3,
//                             },
//                             {
//                                 id: 'LIS',
//                                 colStart: 3,
//                                 colEnd: 3,
//                                 rowStart: 2,
//                                 rowEnd: 2,
//                             },
//                         ],
//                         dim: '50%',
//                         gridCols: 3,
//                         gridRows: 3,
//                         gap: 2,
//                     },
//                 ],
//                 horizontal: true,
//             },
//         },
//     ],
// };

const inputPanel = document.getElementById('input-panel');
inputPanel.data = data;
inputPanel.optionsHandler = (fun, inputValue, currentState) => {
    console.log('optionsHandler event', { fun, inputValue, currentState });

    // return Promise.resolve({
    //     type: 'SmeupTable',
    //     messages: [],
    //     rows: [
    //         {
    //             fields: {
    //                 E1: {
    //                     smeupObject: {
    //                         codice: 'E1',
    //                         testo: 'Element 1',
    //                     },
    //                 },
    //                 E2: {
    //                     smeupObject: {
    //                         codice: 'E2',
    //                         testo: 'Element 2',
    //                     },
    //                 },
    //                 E3: {
    //                     smeupObject: {
    //                         codice: 'E3',
    //                         testo: 'Element 3',
    //                     },
    //                 },
    //             },
    //         },
    //         {
    //             fields: {
    //                 E4: {
    //                     smeupObject: {
    //                         codice: 'E4',
    //                         testo: 'Element 4',
    //                     },
    //                 },
    //                 E5: {
    //                     smeupObject: {
    //                         codice: 'E5',
    //                         testo: 'Element 5',
    //                     },
    //                 },
    //                 E6: {
    //                     smeupObject: {
    //                         codice: 'E6',
    //                         testo: 'Element 6',
    //                     },
    //                 },
    //             },
    //         },
    //         {
    //             fields: {
    //                 E14: {
    //                     smeupObject: {
    //                         codice: 'E14',
    //                         testo: 'Element 14',
    //                     },
    //                 },
    //                 E15: {
    //                     smeupObject: {
    //                         codice: 'E15',
    //                         testo: 'Element 15',
    //                     },
    //                 },
    //                 E16: {
    //                     smeupObject: {
    //                         codice: 'E16',
    //                         testo: 'Element 16',
    //                     },
    //                 },
    //             },
    //         },
    //     ],
    // });

    return Promise.resolve({
        type: 'SmeupTable',
        columns: [
            {
                IO: 'I',
                code: 'COL1',
                ogg: '',
                sortMode: 'A',
                text: 'Column 1',
                tooltip: false,
            },
            {
                IO: 'O',
                code: 'COL2',
                ogg: '',
                sortMode: 'A',
                text: 'Column 2',
                tooltip: false,
            },
        ],
        rows: [
            {
                fields: {
                    RowId: {
                        name: 'RowId',
                        smeupObject: {
                            codice: '0',
                            parametro: '',
                            tipo: 'NR',
                        },
                        tooltip: false,
                    },
                    ID: {
                        name: 'ID',
                        smeupObject: {
                            codice: '1',
                            parametro: '',
                            tipo: 'NR',
                        },
                        tooltip: false,
                    },
                    COL2: {
                        name: 'COL2',
                        smeupObject: {
                            codice: 'Row 1 column 2',
                            parametro: '',
                            testo: 'Row 1 column 2',
                            tipo: '',
                        },
                        tooltip: false,
                    },
                    COL1: {
                        name: 'COL1',
                        smeupObject: {
                            codice: 'Row 1 column 1',
                            exec: 'EXEC',
                            i: 'home',
                            parametro: '',
                            testo: 'Override value',
                            tipo: '',
                        },
                        tooltip: false,
                    },
                },
            },
            {
                fields: {
                    RowId: {
                        name: 'RowId',
                        smeupObject: {
                            codice: '1',
                            parametro: '',
                            tipo: 'NR',
                        },
                        tooltip: false,
                    },
                    ID: {
                        name: 'ID',
                        smeupObject: {
                            codice: '2',
                            parametro: '',
                            tipo: 'NR',
                        },
                        tooltip: false,
                    },
                    COL2: {
                        name: 'COL2',
                        smeupObject: {
                            codice: 'Row 2 column 2',
                            parametro: '',
                            testo: 'Row 2 column 2',
                            tipo: '',
                        },
                        tooltip: false,
                    },
                    COL1: {
                        name: 'COL1',
                        smeupObject: {
                            codice: 'Row 2 column 1',
                            parametro: '',
                            testo: 'Row 2 column 1',
                            tipo: '',
                        },
                        tooltip: false,
                    },
                },
            },
        ],
    });
};

inputPanel.submitCb = (e) => {
    console.log('submit', e);

    // Example of rerender event
    const inputPanel = document.getElementById('input-panel');
    let updated;
    if (e.cell === 'BTN2') {
        updated = structuredClone(data1);
    } else if (e.cell === 'BTN1') {
        updated = structuredClone(data);
        updated.rows[0].cells.DATA.value = datatable;
        updated.rows[0].layout.sections[1].content[0].id = 'BTN2';
    } else {
        updated = structuredClone(data);
    }
    inputPanel.data = updated;
};

inputPanel.customButtonClickHandler = (fun, cellId, currentState) => {
    console.log('customButtonClick event', { fun, cell: cellId, currentState });
};

// Example of Ergon Form configuration
// const ergonForm = {
//     columns: [
//         {
//             name: 'TEL',
//             title: 'Tempo Elaborazione',
//             visible: true,
//         },
//         {
//             name: 'CRE',
//             title: 'Cumulo Reparti',
//             visible: true,
//         },
//         {
//             name: 'CVE',
//             title: 'Costo Venduto',
//             visible: true,
//         },
//         {
//             name: 'DIV',
//             title: 'Divisa',
//             visible: true,
//         },
//         {
//             name: 'ELA',
//             title: 'Elabora',
//             visible: true,
//         },
//         {
//             name: 'SAP',
//             title: 'Salto Pagina',
//             visible: true,
//         },
//         {
//             name: 'ART',
//             title: 'Articoli',
//             visible: true,
//         },
//         {
//             name: 'MOA',
//             title: 'Mostra movimento per articoli',
//             visible: true,
//         },
//         {
//             name: 'ONE',
//             title: 'Includi Oneri',
//             visible: true,
//         },
//         {
//             name: 'MCD',
//             title: 'Solo marche in conto deposito',
//             visible: true,
//         },
//         {
//             name: 'NET',
//             title: 'Solo netti',
//             visible: true,
//         },
//         {
//             name: 'COD',
//             title: 'Codice',
//             visible: true,
//         },
//         {
//             name: 'MAR',
//             title: 'Marca',
//             visible: true,
//         },
//         {
//             name: 'FAM',
//             title: 'Famiglia',
//             visible: true,
//         },
//         {
//             name: 'TAR',
//             title: 'Tipo Articolo',
//             visible: true,
//         },
//         {
//             name: 'GRM',
//             title: 'Gruppo Merci',
//             visible: true,
//         },
//         {
//             name: 'ABC',
//             title: 'Classe ABC',
//             visible: true,
//         },
//         {
//             name: 'MDL',
//             title: 'Modelli',
//             visible: true,
//         },
//         {
//             name: 'CSA',
//             title: 'Cat. Sc. Articolo',
//             visible: true,
//         },
//         {
//             name: 'TRA',
//             title: 'Tratt. Articolo',
//             visible: true,
//         },
//         {
//             name: 'FOR',
//             title: 'Cliente/Fornitore',
//             visible: true,
//         },
//         {
//             name: 'CCF',
//             title: 'Categ. C/F',
//             visible: true,
//         },
//         {
//             name: 'ZON',
//             title: 'Zona',
//             visible: true,
//         },
//         {
//             name: 'COM',
//             title: 'Comune',
//             visible: true,
//         },
//         {
//             name: 'PRO',
//             title: 'Provincia',
//             visible: true,
//         },
//         {
//             name: 'AGE',
//             title: 'Agente',
//             visible: true,
//         },
//         {
//             name: 'REG',
//             title: 'Regione',
//             visible: true,
//         },
//         {
//             name: 'NAT',
//             title: 'Nazione',
//             visible: true,
//         },
//         {
//             name: 'RCF',
//             title: 'Raggrupp. C/F',
//             visible: true,
//         },
//         {
//             name: 'ATT',
//             title: 'Attività',
//             visible: true,
//         },
//         {
//             name: 'CAU',
//             title: 'Causale',
//             visible: true,
//         },
//         {
//             name: 'LST',
//             title: 'Gruppo Liste',
//             visible: true,
//         },
//         {
//             name: 'DOC',
//             title: 'Tipo Documento',
//             visible: true,
//         },
//         {
//             name: 'LDO',
//             title: 'Lettera Doc.',
//             visible: true,
//         },
//         {
//             name: 'TDO',
//             title: '',
//             visible: true,
//         },
//         {
//             name: 'DAT',
//             title: 'Data',
//             visible: true,
//         },
//         {
//             name: 'TDA',
//             title: '',
//             visible: true,
//         },
//         {
//             // ORDINE CODICE
//             name: 'OCD',
//             title: 'Modalità',
//             visible: true,
//         },
//         {
//             // ORDINE MARCA
//             name: 'OMR',
//             title: 'Modalità',
//             visible: true,
//         },
//         {
//             // ORDINE FAMIGLIA
//             name: 'OFM',
//             title: 'Modalità',
//             visible: true,
//         },
//         {
//             // ORDINE TIPO ARTICOLO
//             name: 'OTA',
//             title: 'Modalità',
//             visible: true,
//         },
//         {
//             // ORDINE GRUPPO MERCI
//             name: 'OGM',
//             title: 'Modalità',
//             visible: true,
//         },
//         {
//             // ORDINE CLASSE ABC
//             name: 'OCL',
//             title: 'Modalità',
//             visible: true,
//         },
//         {
//             // ORDINE MODELLI
//             name: 'OMD',
//             title: 'Modalità',
//             visible: true,
//         },
//         {
//             // ORDINE CAT SC ARTICOLO
//             name: 'OCA',
//             title: 'Modalità',
//             visible: true,
//         },
//         {
//             // ORDINE TRATT ARTICOLO
//             name: 'OTR',
//             title: 'Modalità',
//             visible: true,
//         },
//         {
//             // ORDINE CLIENTE FORNITORE
//             name: 'OCF',
//             title: 'Modalità',
//             visible: true,
//         },
//         {
//             // ORDINE CATEG C/F
//             name: 'OCT',
//             title: 'Modalità',
//             visible: true,
//         },
//         {
//             // ORDINE ZONA
//             name: 'OZN',
//             title: 'Modalità',
//             visible: true,
//         },
//         {
//             // ORDINE COMUNE
//             name: 'OCM',
//             title: 'Modalità',
//             visible: true,
//         },
//         {
//             // ORDINE PROVINCIA
//             name: 'OPR',
//             title: 'Modalità',
//             visible: true,
//         },
//         {
//             // ORDINE AGENTE
//             name: 'OAG',
//             title: 'Modalità',
//             visible: true,
//         },
//         {
//             // ORDINE REGIONE
//             name: 'ORG',
//             title: 'Modalità',
//             visible: true,
//         },
//         {
//             // ORDINE NAZIONE
//             name: 'ONZ',
//             title: 'Modalità',
//             visible: true,
//         },
//         {
//             // ORDINE RAGGRUPP C/F
//             name: 'ORF',
//             title: 'Modalità',
//             visible: true,
//         },
//         {
//             // ORDINE ATTIVITA
//             name: 'OAT',
//             title: 'Modalità',
//             visible: true,
//         },
//         {
//             // ORDINE CAUSALE
//             name: 'OCS',
//             title: 'Modalità',
//             visible: true,
//         },
//         {
//             // ORDINE GRUPPO LIST
//             name: 'OGL',
//             title: 'Modalità',
//             visible: true,
//         },
//         {
//             // ORDINE TIPO DOCUMENTO
//             name: 'OTD',
//             title: 'Modalità',
//             visible: true,
//         },
//         {
//             // ORDINE DATA
//             name: 'ODT',
//             title: 'Modalità',
//             visible: true,
//         },
//     ],
//     rows: [
//         {
//             cells: {
//                 TEL: {
//                     value: '',
//                     editable: true,
//                     options: [
//                         {
//                             id: 'CLI',
//                             label: 'Clienti',
//                         },
//                         {
//                             id: 'FOR',
//                             label: 'Fornitori',
//                         },
//                     ],
//                     shape: 'RAD',
//                 },
//                 CRE: {
//                     value: '',
//                     editable: true,
//                     mandatory: true,
//                     shape: 'CHK',
//                 },
//                 CVE: {
//                     value: '',
//                     options: [
//                         {
//                             id: 'MED',
//                             label: 'Media acquisto',
//                         },
//                     ],
//                     editable: true,
//                     shape: 'CMB',
//                 },
//                 DIV: {
//                     value: '',
//                     editable: true,
//                     shape: 'ITX',
//                 },
//                 ELA: {
//                     value: '',
//                     editable: true,
//                     options: [
//                         {
//                             id: 'YFA',
//                             label: 'Solo Fatturato',
//                         },
//                         {
//                             id: 'NFA',
//                             label: 'Escluso Fatturato',
//                         },
//                         {
//                             id: 'BOT',
//                             label: 'Entrambi',
//                         },
//                     ],
//                     shape: 'RAD',
//                 },
//                 SAP: {
//                     value: '',
//                     editable: true,
//                     options: [
//                         {
//                             id: 'NO',
//                             label: 'Nessuno',
//                         },
//                         {
//                             id: 'SI',
//                             label: 'Effettua',
//                         },
//                         {
//                             id: 'TES',
//                             label: 'Stampa Testata',
//                         },
//                     ],
//                     shape: 'RAD',
//                 },
//                 ART: {
//                     value: '',
//                     editable: true,
//                     options: [
//                         {
//                             id: 'ALL',
//                             label: 'Tutti',
//                         },
//                         {
//                             id: 'NFM',
//                             label: 'Escludi FM',
//                         },
//                         {
//                             id: 'SFM',
//                             label: 'Solo FM',
//                         },
//                     ],
//                     shape: 'RAD',
//                 },
//                 MOA: {
//                     value: '',
//                     editable: true,
//                     shape: 'CHK',
//                 },
//                 ONE: {
//                     value: '',
//                     editable: false,
//                     shape: 'CHK',
//                 },
//                 MCD: {
//                     value: '',
//                     editable: true,
//                     shape: 'CHK',
//                 },
//                 NET: {
//                     value: '',
//                     editable: true,
//                     shape: 'CHK',
//                 },
//                 COD: {
//                     value: '',
//                     editable: true,
//                     options: [
//                         {
//                             id: '1',
//                             label: '1',
//                         },
//                         {
//                             id: '2',
//                             label: '2',
//                         },
//                         {
//                             id: '3',
//                             label: '3',
//                         },
//                         {
//                             id: '4',
//                             label: '4',
//                         },
//                         {
//                             id: '5',
//                             label: '5',
//                         },
//                     ],
//                     shape: 'ACP',
//                 },
//                 MAR: {
//                     value: '',
//                     editable: true,
//                     shape: 'ACP',
//                     options: [
//                         {
//                             id: '1',
//                             label: '1',
//                         },
//                         {
//                             id: '2',
//                             label: '2',
//                         },
//                         {
//                             id: '3',
//                             label: '3',
//                         },
//                         {
//                             id: '4',
//                             label: '4',
//                         },
//                         {
//                             id: '5',
//                             label: '5',
//                         },
//                     ],
//                 },
//                 FAM: {
//                     value: '',
//                     editable: true,
//                     shape: 'ACP',
//                     options: [
//                         {
//                             id: '1',
//                             label: '1',
//                         },
//                         {
//                             id: '2',
//                             label: '2',
//                         },
//                         {
//                             id: '3',
//                             label: '3',
//                         },
//                         {
//                             id: '4',
//                             label: '4',
//                         },
//                         {
//                             id: '5',
//                             label: '5',
//                         },
//                     ],
//                 },
//                 TAR: {
//                     value: '',
//                     editable: true,
//                     shape: 'ACP',
//                     options: [
//                         {
//                             id: '1',
//                             label: '1',
//                         },
//                         {
//                             id: '2',
//                             label: '2',
//                         },
//                         {
//                             id: '3',
//                             label: '3',
//                         },
//                         {
//                             id: '4',
//                             label: '4',
//                         },
//                         {
//                             id: '5',
//                             label: '5',
//                         },
//                     ],
//                 },
//                 GRM: {
//                     value: '',
//                     editable: true,
//                     shape: 'ACP',
//                     options: [
//                         {
//                             id: '1',
//                             label: '1',
//                         },
//                         {
//                             id: '2',
//                             label: '2',
//                         },
//                         {
//                             id: '3',
//                             label: '3',
//                         },
//                         {
//                             id: '4',
//                             label: '4',
//                         },
//                         {
//                             id: '5',
//                             label: '5',
//                         },
//                     ],
//                 },
//                 ABC: {
//                     value: '',
//                     editable: true,
//                     shape: 'ACP',
//                     options: [
//                         {
//                             id: '1',
//                             label: '1',
//                         },
//                         {
//                             id: '2',
//                             label: '2',
//                         },
//                         {
//                             id: '3',
//                             label: '3',
//                         },
//                         {
//                             id: '4',
//                             label: '4',
//                         },
//                         {
//                             id: '5',
//                             label: '5',
//                         },
//                     ],
//                 },
//                 MDL: {
//                     value: '',
//                     editable: true,
//                     shape: 'ACP',
//                     options: [
//                         {
//                             id: '1',
//                             label: '1',
//                         },
//                         {
//                             id: '2',
//                             label: '2',
//                         },
//                         {
//                             id: '3',
//                             label: '3',
//                         },
//                         {
//                             id: '4',
//                             label: '4',
//                         },
//                         {
//                             id: '5',
//                             label: '5',
//                         },
//                     ],
//                 },
//                 CSA: {
//                     value: '',
//                     editable: true,
//                     shape: 'ACP',
//                     options: [
//                         {
//                             id: '1',
//                             label: '1',
//                         },
//                         {
//                             id: '2',
//                             label: '2',
//                         },
//                         {
//                             id: '3',
//                             label: '3',
//                         },
//                         {
//                             id: '4',
//                             label: '4',
//                         },
//                         {
//                             id: '5',
//                             label: '5',
//                         },
//                     ],
//                 },
//                 TRA: {
//                     value: '',
//                     editable: true,
//                     shape: 'CMB',
//                     options: [
//                         {
//                             id: '1',
//                             label: '1',
//                         },
//                         {
//                             id: '2',
//                             label: '2',
//                         },
//                         {
//                             id: '3',
//                             label: '3',
//                         },
//                         {
//                             id: '4',
//                             label: '4',
//                         },
//                         {
//                             id: '5',
//                             label: '5',
//                         },
//                     ],
//                 },
//                 FOR: {
//                     value: '',
//                     editable: true,
//                     shape: 'ACP',
//                     options: [
//                         {
//                             id: '1',
//                             label: '1',
//                         },
//                         {
//                             id: '2',
//                             label: '2',
//                         },
//                         {
//                             id: '3',
//                             label: '3',
//                         },
//                         {
//                             id: '4',
//                             label: '4',
//                         },
//                         {
//                             id: '5',
//                             label: '5',
//                         },
//                     ],
//                 },
//                 CCF: {
//                     value: '',
//                     editable: true,
//                     shape: 'ACP',
//                     options: [
//                         {
//                             id: '1',
//                             label: '1',
//                         },
//                         {
//                             id: '2',
//                             label: '2',
//                         },
//                         {
//                             id: '3',
//                             label: '3',
//                         },
//                         {
//                             id: '4',
//                             label: '4',
//                         },
//                         {
//                             id: '5',
//                             label: '5',
//                         },
//                     ],
//                 },
//                 ZON: {
//                     value: '',
//                     editable: true,
//                     shape: 'ACP',
//                     options: [
//                         {
//                             id: '1',
//                             label: '1',
//                         },
//                         {
//                             id: '2',
//                             label: '2',
//                         },
//                         {
//                             id: '3',
//                             label: '3',
//                         },
//                         {
//                             id: '4',
//                             label: '4',
//                         },
//                         {
//                             id: '5',
//                             label: '5',
//                         },
//                     ],
//                 },
//                 COM: {
//                     value: '',
//                     editable: true,
//                     shape: 'ACP',
//                     options: [
//                         {
//                             id: '1',
//                             label: '1',
//                         },
//                         {
//                             id: '2',
//                             label: '2',
//                         },
//                         {
//                             id: '3',
//                             label: '3',
//                         },
//                         {
//                             id: '4',
//                             label: '4',
//                         },
//                         {
//                             id: '5',
//                             label: '5',
//                         },
//                     ],
//                 },
//                 PRO: {
//                     value: '',
//                     editable: true,
//                     shape: 'ACP',
//                     options: [
//                         {
//                             id: '1',
//                             label: '1',
//                         },
//                         {
//                             id: '2',
//                             label: '2',
//                         },
//                         {
//                             id: '3',
//                             label: '3',
//                         },
//                         {
//                             id: '4',
//                             label: '4',
//                         },
//                         {
//                             id: '5',
//                             label: '5',
//                         },
//                     ],
//                 },
//                 AGE: {
//                     value: '',
//                     editable: true,
//                     shape: 'ACP',
//                     options: [
//                         {
//                             id: '1',
//                             label: '1',
//                         },
//                         {
//                             id: '2',
//                             label: '2',
//                         },
//                         {
//                             id: '3',
//                             label: '3',
//                         },
//                         {
//                             id: '4',
//                             label: '4',
//                         },
//                         {
//                             id: '5',
//                             label: '5',
//                         },
//                     ],
//                 },
//                 REG: {
//                     value: '',
//                     editable: true,
//                     shape: 'ACP',
//                     options: [
//                         {
//                             id: '1',
//                             label: '1',
//                         },
//                         {
//                             id: '2',
//                             label: '2',
//                         },
//                         {
//                             id: '3',
//                             label: '3',
//                         },
//                         {
//                             id: '4',
//                             label: '4',
//                         },
//                         {
//                             id: '5',
//                             label: '5',
//                         },
//                     ],
//                 },
//                 NAT: {
//                     value: '',
//                     editable: true,
//                     shape: 'ACP',
//                     options: [
//                         {
//                             id: '1',
//                             label: '1',
//                         },
//                         {
//                             id: '2',
//                             label: '2',
//                         },
//                         {
//                             id: '3',
//                             label: '3',
//                         },
//                         {
//                             id: '4',
//                             label: '4',
//                         },
//                         {
//                             id: '5',
//                             label: '5',
//                         },
//                     ],
//                 },
//                 RCF: {
//                     value: '',
//                     editable: true,
//                     shape: 'ACP',
//                     options: [
//                         {
//                             id: '1',
//                             label: '1',
//                         },
//                         {
//                             id: '2',
//                             label: '2',
//                         },
//                         {
//                             id: '3',
//                             label: '3',
//                         },
//                         {
//                             id: '4',
//                             label: '4',
//                         },
//                         {
//                             id: '5',
//                             label: '5',
//                         },
//                     ],
//                 },
//                 ATT: {
//                     value: '',
//                     editable: true,
//                     shape: 'ACP',
//                     options: [
//                         {
//                             id: '1',
//                             label: '1',
//                         },
//                         {
//                             id: '2',
//                             label: '2',
//                         },
//                         {
//                             id: '3',
//                             label: '3',
//                         },
//                         {
//                             id: '4',
//                             label: '4',
//                         },
//                         {
//                             id: '5',
//                             label: '5',
//                         },
//                     ],
//                 },
//                 CAU: {
//                     value: '',
//                     editable: true,
//                     shape: 'ACP',
//                     options: [
//                         {
//                             id: '1',
//                             label: '1',
//                         },
//                         {
//                             id: '2',
//                             label: '2',
//                         },
//                         {
//                             id: '3',
//                             label: '3',
//                         },
//                         {
//                             id: '4',
//                             label: '4',
//                         },
//                         {
//                             id: '5',
//                             label: '5',
//                         },
//                     ],
//                 },
//                 LST: {
//                     value: '',
//                     editable: true,
//                     shape: 'ACP',
//                     options: [
//                         {
//                             id: '1',
//                             label: '1',
//                         },
//                         {
//                             id: '2',
//                             label: '2',
//                         },
//                         {
//                             id: '3',
//                             label: '3',
//                         },
//                         {
//                             id: '4',
//                             label: '4',
//                         },
//                         {
//                             id: '5',
//                             label: '5',
//                         },
//                     ],
//                 },
//                 DOC: {
//                     value: '',
//                     editable: true,
//                     shape: 'ACP',
//                     options: [
//                         {
//                             id: '1',
//                             label: '1',
//                         },
//                         {
//                             id: '2',
//                             label: '2',
//                         },
//                         {
//                             id: '3',
//                             label: '3',
//                         },
//                         {
//                             id: '4',
//                             label: '4',
//                         },
//                         {
//                             id: '5',
//                             label: '5',
//                         },
//                     ],
//                 },
//                 LDO: {
//                     value: '',
//                     editable: true,
//                     shape: 'ITX',
//                 },
//                 TDO: {
//                     value: '',
//                     editable: true,
//                     shape: 'RAD',
//                     options: [
//                         {
//                             id: '1',
//                             label: 'Doc. Precendete',
//                         },
//                         {
//                             id: '2',
//                             label: 'Doc. Attuale',
//                         },
//                     ],
//                 },
//                 DAT: {
//                     value: '',
//                     editable: true,
//                     shape: 'ITX',
//                 },
//                 TDA: {
//                     value: '',
//                     editable: true,
//                     shape: 'RAD',
//                     options: [
//                         {
//                             id: '1',
//                             label: 'Data Lista',
//                         },
//                         {
//                             id: '2',
//                             label: 'Data Doc. Precendete',
//                         },
//                     ],
//                 },
//                 OCD: {
//                     value: '',
//                     editable: true,
//                     shape: 'CMB',
//                     options: [
//                         {
//                             id: '1',
//                             label: 'Uguale',
//                         },
//                         {
//                             id: '2',
//                             label: 'Diverso',
//                         },
//                         {
//                             id: '3',
//                             label: 'Maggiore',
//                         },
//                         {
//                             id: '4',
//                             label: 'Minore',
//                         },
//                         {
//                             id: '5',
//                             label: 'Maggiore Uguale',
//                         },
//                         {
//                             id: '6',
//                             label: 'Minore Uguale',
//                         },
//                         {
//                             id: '7',
//                             label: 'Inizia con',
//                         },
//                         {
//                             id: '8',
//                             label: 'Non inizia con',
//                         },
//                         {
//                             id: '9',
//                             label: 'Termina con',
//                         },
//                         {
//                             id: '10',
//                             label: 'Non termina con',
//                         },
//                         {
//                             id: '11',
//                             label: 'Contiene',
//                         },
//                         {
//                             id: '12',
//                             label: 'Non contiene',
//                         },
//                         {
//                             id: '13',
//                             label: 'Incluso in',
//                         },
//                         {
//                             id: '14',
//                             label: 'Escluso da',
//                         },
//                         {
//                             id: '15',
//                             label: 'In elenco',
//                         },
//                         {
//                             id: '16',
//                             label: 'Non in elenco',
//                         },
//                         {
//                             id: '17',
//                             label: 'Simile',
//                         },
//                         {
//                             id: '18',
//                             label: 'Non simile',
//                         },
//                         {
//                             id: '19',
//                             label: 'Nullo',
//                         },
//                         {
//                             id: '20',
//                             label: 'Non nullo',
//                         },
//                     ],
//                 },
//                 OMR: {
//                     value: '',
//                     editable: true,
//                     shape: 'CMB',
//                     options: [
//                         {
//                             id: '1',
//                             label: 'Uguale',
//                         },
//                         {
//                             id: '2',
//                             label: 'Diverso',
//                         },
//                         {
//                             id: '3',
//                             label: 'Maggiore',
//                         },
//                         {
//                             id: '4',
//                             label: 'Minore',
//                         },
//                         {
//                             id: '5',
//                             label: 'Maggiore Uguale',
//                         },
//                         {
//                             id: '6',
//                             label: 'Minore Uguale',
//                         },
//                         {
//                             id: '7',
//                             label: 'Inizia con',
//                         },
//                         {
//                             id: '8',
//                             label: 'Non inizia con',
//                         },
//                         {
//                             id: '9',
//                             label: 'Termina con',
//                         },
//                         {
//                             id: '10',
//                             label: 'Non termina con',
//                         },
//                         {
//                             id: '11',
//                             label: 'Contiene',
//                         },
//                         {
//                             id: '12',
//                             label: 'Non contiene',
//                         },
//                         {
//                             id: '13',
//                             label: 'Incluso in',
//                         },
//                         {
//                             id: '14',
//                             label: 'Escluso da',
//                         },
//                         {
//                             id: '15',
//                             label: 'In elenco',
//                         },
//                         {
//                             id: '16',
//                             label: 'Non in elenco',
//                         },
//                         {
//                             id: '17',
//                             label: 'Simile',
//                         },
//                         {
//                             id: '18',
//                             label: 'Non simile',
//                         },
//                         {
//                             id: '19',
//                             label: 'Nullo',
//                         },
//                         {
//                             id: '20',
//                             label: 'Non nullo',
//                         },
//                     ],
//                 },
//                 OFM: {
//                     value: '',
//                     editable: true,
//                     shape: 'CMB',
//                     options: [
//                         {
//                             id: '1',
//                             label: 'Uguale',
//                         },
//                         {
//                             id: '2',
//                             label: 'Diverso',
//                         },
//                         {
//                             id: '3',
//                             label: 'Maggiore',
//                         },
//                         {
//                             id: '4',
//                             label: 'Minore',
//                         },
//                         {
//                             id: '5',
//                             label: 'Maggiore Uguale',
//                         },
//                         {
//                             id: '6',
//                             label: 'Minore Uguale',
//                         },
//                         {
//                             id: '7',
//                             label: 'Inizia con',
//                         },
//                         {
//                             id: '8',
//                             label: 'Non inizia con',
//                         },
//                         {
//                             id: '9',
//                             label: 'Termina con',
//                         },
//                         {
//                             id: '10',
//                             label: 'Non termina con',
//                         },
//                         {
//                             id: '11',
//                             label: 'Contiene',
//                         },
//                         {
//                             id: '12',
//                             label: 'Non contiene',
//                         },
//                         {
//                             id: '13',
//                             label: 'Incluso in',
//                         },
//                         {
//                             id: '14',
//                             label: 'Escluso da',
//                         },
//                         {
//                             id: '15',
//                             label: 'In elenco',
//                         },
//                         {
//                             id: '16',
//                             label: 'Non in elenco',
//                         },
//                         {
//                             id: '17',
//                             label: 'Simile',
//                         },
//                         {
//                             id: '18',
//                             label: 'Non simile',
//                         },
//                         {
//                             id: '19',
//                             label: 'Nullo',
//                         },
//                         {
//                             id: '20',
//                             label: 'Non nullo',
//                         },
//                     ],
//                 },
//                 OTA: {
//                     value: '',
//                     editable: true,
//                     shape: 'CMB',
//                     options: [
//                         {
//                             id: '1',
//                             label: 'Uguale',
//                         },
//                         {
//                             id: '2',
//                             label: 'Diverso',
//                         },
//                         {
//                             id: '3',
//                             label: 'Maggiore',
//                         },
//                         {
//                             id: '4',
//                             label: 'Minore',
//                         },
//                         {
//                             id: '5',
//                             label: 'Maggiore Uguale',
//                         },
//                         {
//                             id: '6',
//                             label: 'Minore Uguale',
//                         },
//                         {
//                             id: '7',
//                             label: 'Inizia con',
//                         },
//                         {
//                             id: '8',
//                             label: 'Non inizia con',
//                         },
//                         {
//                             id: '9',
//                             label: 'Termina con',
//                         },
//                         {
//                             id: '10',
//                             label: 'Non termina con',
//                         },
//                         {
//                             id: '11',
//                             label: 'Contiene',
//                         },
//                         {
//                             id: '12',
//                             label: 'Non contiene',
//                         },
//                         {
//                             id: '13',
//                             label: 'Incluso in',
//                         },
//                         {
//                             id: '14',
//                             label: 'Escluso da',
//                         },
//                         {
//                             id: '15',
//                             label: 'In elenco',
//                         },
//                         {
//                             id: '16',
//                             label: 'Non in elenco',
//                         },
//                         {
//                             id: '17',
//                             label: 'Simile',
//                         },
//                         {
//                             id: '18',
//                             label: 'Non simile',
//                         },
//                         {
//                             id: '19',
//                             label: 'Nullo',
//                         },
//                         {
//                             id: '20',
//                             label: 'Non nullo',
//                         },
//                     ],
//                 },
//                 OGM: {
//                     value: '',
//                     editable: true,
//                     shape: 'CMB',
//                     options: [
//                         {
//                             id: '1',
//                             label: 'Uguale',
//                         },
//                         {
//                             id: '2',
//                             label: 'Diverso',
//                         },
//                         {
//                             id: '3',
//                             label: 'Maggiore',
//                         },
//                         {
//                             id: '4',
//                             label: 'Minore',
//                         },
//                         {
//                             id: '5',
//                             label: 'Maggiore Uguale',
//                         },
//                         {
//                             id: '6',
//                             label: 'Minore Uguale',
//                         },
//                         {
//                             id: '7',
//                             label: 'Inizia con',
//                         },
//                         {
//                             id: '8',
//                             label: 'Non inizia con',
//                         },
//                         {
//                             id: '9',
//                             label: 'Termina con',
//                         },
//                         {
//                             id: '10',
//                             label: 'Non termina con',
//                         },
//                         {
//                             id: '11',
//                             label: 'Contiene',
//                         },
//                         {
//                             id: '12',
//                             label: 'Non contiene',
//                         },
//                         {
//                             id: '13',
//                             label: 'Incluso in',
//                         },
//                         {
//                             id: '14',
//                             label: 'Escluso da',
//                         },
//                         {
//                             id: '15',
//                             label: 'In elenco',
//                         },
//                         {
//                             id: '16',
//                             label: 'Non in elenco',
//                         },
//                         {
//                             id: '17',
//                             label: 'Simile',
//                         },
//                         {
//                             id: '18',
//                             label: 'Non simile',
//                         },
//                         {
//                             id: '19',
//                             label: 'Nullo',
//                         },
//                         {
//                             id: '20',
//                             label: 'Non nullo',
//                         },
//                     ],
//                 },
//                 OCL: {
//                     value: '',
//                     editable: true,
//                     shape: 'CMB',
//                     options: [
//                         {
//                             id: '1',
//                             label: 'Uguale',
//                         },
//                         {
//                             id: '2',
//                             label: 'Diverso',
//                         },
//                         {
//                             id: '3',
//                             label: 'Maggiore',
//                         },
//                         {
//                             id: '4',
//                             label: 'Minore',
//                         },
//                         {
//                             id: '5',
//                             label: 'Maggiore Uguale',
//                         },
//                         {
//                             id: '6',
//                             label: 'Minore Uguale',
//                         },
//                         {
//                             id: '7',
//                             label: 'Inizia con',
//                         },
//                         {
//                             id: '8',
//                             label: 'Non inizia con',
//                         },
//                         {
//                             id: '9',
//                             label: 'Termina con',
//                         },
//                         {
//                             id: '10',
//                             label: 'Non termina con',
//                         },
//                         {
//                             id: '11',
//                             label: 'Contiene',
//                         },
//                         {
//                             id: '12',
//                             label: 'Non contiene',
//                         },
//                         {
//                             id: '13',
//                             label: 'Incluso in',
//                         },
//                         {
//                             id: '14',
//                             label: 'Escluso da',
//                         },
//                         {
//                             id: '15',
//                             label: 'In elenco',
//                         },
//                         {
//                             id: '16',
//                             label: 'Non in elenco',
//                         },
//                         {
//                             id: '17',
//                             label: 'Simile',
//                         },
//                         {
//                             id: '18',
//                             label: 'Non simile',
//                         },
//                         {
//                             id: '19',
//                             label: 'Nullo',
//                         },
//                         {
//                             id: '20',
//                             label: 'Non nullo',
//                         },
//                     ],
//                 },
//                 OMD: {
//                     value: '',
//                     editable: true,
//                     shape: 'CMB',
//                     options: [
//                         {
//                             id: '1',
//                             label: 'Uguale',
//                         },
//                         {
//                             id: '2',
//                             label: 'Diverso',
//                         },
//                         {
//                             id: '3',
//                             label: 'Maggiore',
//                         },
//                         {
//                             id: '4',
//                             label: 'Minore',
//                         },
//                         {
//                             id: '5',
//                             label: 'Maggiore Uguale',
//                         },
//                         {
//                             id: '6',
//                             label: 'Minore Uguale',
//                         },
//                         {
//                             id: '7',
//                             label: 'Inizia con',
//                         },
//                         {
//                             id: '8',
//                             label: 'Non inizia con',
//                         },
//                         {
//                             id: '9',
//                             label: 'Termina con',
//                         },
//                         {
//                             id: '10',
//                             label: 'Non termina con',
//                         },
//                         {
//                             id: '11',
//                             label: 'Contiene',
//                         },
//                         {
//                             id: '12',
//                             label: 'Non contiene',
//                         },
//                         {
//                             id: '13',
//                             label: 'Incluso in',
//                         },
//                         {
//                             id: '14',
//                             label: 'Escluso da',
//                         },
//                         {
//                             id: '15',
//                             label: 'In elenco',
//                         },
//                         {
//                             id: '16',
//                             label: 'Non in elenco',
//                         },
//                         {
//                             id: '17',
//                             label: 'Simile',
//                         },
//                         {
//                             id: '18',
//                             label: 'Non simile',
//                         },
//                         {
//                             id: '19',
//                             label: 'Nullo',
//                         },
//                         {
//                             id: '20',
//                             label: 'Non nullo',
//                         },
//                     ],
//                 },
//                 OCA: {
//                     value: '',
//                     editable: true,
//                     shape: 'CMB',
//                     options: [
//                         {
//                             id: '1',
//                             label: 'Uguale',
//                         },
//                         {
//                             id: '2',
//                             label: 'Diverso',
//                         },
//                         {
//                             id: '3',
//                             label: 'Maggiore',
//                         },
//                         {
//                             id: '4',
//                             label: 'Minore',
//                         },
//                         {
//                             id: '5',
//                             label: 'Maggiore Uguale',
//                         },
//                         {
//                             id: '6',
//                             label: 'Minore Uguale',
//                         },
//                         {
//                             id: '7',
//                             label: 'Inizia con',
//                         },
//                         {
//                             id: '8',
//                             label: 'Non inizia con',
//                         },
//                         {
//                             id: '9',
//                             label: 'Termina con',
//                         },
//                         {
//                             id: '10',
//                             label: 'Non termina con',
//                         },
//                         {
//                             id: '11',
//                             label: 'Contiene',
//                         },
//                         {
//                             id: '12',
//                             label: 'Non contiene',
//                         },
//                         {
//                             id: '13',
//                             label: 'Incluso in',
//                         },
//                         {
//                             id: '14',
//                             label: 'Escluso da',
//                         },
//                         {
//                             id: '15',
//                             label: 'In elenco',
//                         },
//                         {
//                             id: '16',
//                             label: 'Non in elenco',
//                         },
//                         {
//                             id: '17',
//                             label: 'Simile',
//                         },
//                         {
//                             id: '18',
//                             label: 'Non simile',
//                         },
//                         {
//                             id: '19',
//                             label: 'Nullo',
//                         },
//                         {
//                             id: '20',
//                             label: 'Non nullo',
//                         },
//                     ],
//                 },
//                 OTR: {
//                     value: '',
//                     editable: true,
//                     shape: 'CMB',
//                     options: [
//                         {
//                             id: '1',
//                             label: 'Uguale',
//                         },
//                         {
//                             id: '2',
//                             label: 'Diverso',
//                         },
//                         {
//                             id: '3',
//                             label: 'Maggiore',
//                         },
//                         {
//                             id: '4',
//                             label: 'Minore',
//                         },
//                         {
//                             id: '5',
//                             label: 'Maggiore Uguale',
//                         },
//                         {
//                             id: '6',
//                             label: 'Minore Uguale',
//                         },
//                         {
//                             id: '7',
//                             label: 'Inizia con',
//                         },
//                         {
//                             id: '8',
//                             label: 'Non inizia con',
//                         },
//                         {
//                             id: '9',
//                             label: 'Termina con',
//                         },
//                         {
//                             id: '10',
//                             label: 'Non termina con',
//                         },
//                         {
//                             id: '11',
//                             label: 'Contiene',
//                         },
//                         {
//                             id: '12',
//                             label: 'Non contiene',
//                         },
//                         {
//                             id: '13',
//                             label: 'Incluso in',
//                         },
//                         {
//                             id: '14',
//                             label: 'Escluso da',
//                         },
//                         {
//                             id: '15',
//                             label: 'In elenco',
//                         },
//                         {
//                             id: '16',
//                             label: 'Non in elenco',
//                         },
//                         {
//                             id: '17',
//                             label: 'Simile',
//                         },
//                         {
//                             id: '18',
//                             label: 'Non simile',
//                         },
//                         {
//                             id: '19',
//                             label: 'Nullo',
//                         },
//                         {
//                             id: '20',
//                             label: 'Non nullo',
//                         },
//                     ],
//                 },
//                 OCF: {
//                     value: '',
//                     editable: true,
//                     shape: 'CMB',
//                     options: [
//                         {
//                             id: '1',
//                             label: 'Uguale',
//                         },
//                         {
//                             id: '2',
//                             label: 'Diverso',
//                         },
//                         {
//                             id: '3',
//                             label: 'Maggiore',
//                         },
//                         {
//                             id: '4',
//                             label: 'Minore',
//                         },
//                         {
//                             id: '5',
//                             label: 'Maggiore Uguale',
//                         },
//                         {
//                             id: '6',
//                             label: 'Minore Uguale',
//                         },
//                         {
//                             id: '7',
//                             label: 'Inizia con',
//                         },
//                         {
//                             id: '8',
//                             label: 'Non inizia con',
//                         },
//                         {
//                             id: '9',
//                             label: 'Termina con',
//                         },
//                         {
//                             id: '10',
//                             label: 'Non termina con',
//                         },
//                         {
//                             id: '11',
//                             label: 'Contiene',
//                         },
//                         {
//                             id: '12',
//                             label: 'Non contiene',
//                         },
//                         {
//                             id: '13',
//                             label: 'Incluso in',
//                         },
//                         {
//                             id: '14',
//                             label: 'Escluso da',
//                         },
//                         {
//                             id: '15',
//                             label: 'In elenco',
//                         },
//                         {
//                             id: '16',
//                             label: 'Non in elenco',
//                         },
//                         {
//                             id: '17',
//                             label: 'Simile',
//                         },
//                         {
//                             id: '18',
//                             label: 'Non simile',
//                         },
//                         {
//                             id: '19',
//                             label: 'Nullo',
//                         },
//                         {
//                             id: '20',
//                             label: 'Non nullo',
//                         },
//                     ],
//                 },
//                 OCT: {
//                     value: '',
//                     editable: true,
//                     shape: 'CMB',
//                     options: [
//                         {
//                             id: '1',
//                             label: 'Uguale',
//                         },
//                         {
//                             id: '2',
//                             label: 'Diverso',
//                         },
//                         {
//                             id: '3',
//                             label: 'Maggiore',
//                         },
//                         {
//                             id: '4',
//                             label: 'Minore',
//                         },
//                         {
//                             id: '5',
//                             label: 'Maggiore Uguale',
//                         },
//                         {
//                             id: '6',
//                             label: 'Minore Uguale',
//                         },
//                         {
//                             id: '7',
//                             label: 'Inizia con',
//                         },
//                         {
//                             id: '8',
//                             label: 'Non inizia con',
//                         },
//                         {
//                             id: '9',
//                             label: 'Termina con',
//                         },
//                         {
//                             id: '10',
//                             label: 'Non termina con',
//                         },
//                         {
//                             id: '11',
//                             label: 'Contiene',
//                         },
//                         {
//                             id: '12',
//                             label: 'Non contiene',
//                         },
//                         {
//                             id: '13',
//                             label: 'Incluso in',
//                         },
//                         {
//                             id: '14',
//                             label: 'Escluso da',
//                         },
//                         {
//                             id: '15',
//                             label: 'In elenco',
//                         },
//                         {
//                             id: '16',
//                             label: 'Non in elenco',
//                         },
//                         {
//                             id: '17',
//                             label: 'Simile',
//                         },
//                         {
//                             id: '18',
//                             label: 'Non simile',
//                         },
//                         {
//                             id: '19',
//                             label: 'Nullo',
//                         },
//                         {
//                             id: '20',
//                             label: 'Non nullo',
//                         },
//                     ],
//                 },
//                 OZN: {
//                     value: '',
//                     editable: true,
//                     shape: 'CMB',
//                     options: [
//                         {
//                             id: '1',
//                             label: 'Uguale',
//                         },
//                         {
//                             id: '2',
//                             label: 'Diverso',
//                         },
//                         {
//                             id: '3',
//                             label: 'Maggiore',
//                         },
//                         {
//                             id: '4',
//                             label: 'Minore',
//                         },
//                         {
//                             id: '5',
//                             label: 'Maggiore Uguale',
//                         },
//                         {
//                             id: '6',
//                             label: 'Minore Uguale',
//                         },
//                         {
//                             id: '7',
//                             label: 'Inizia con',
//                         },
//                         {
//                             id: '8',
//                             label: 'Non inizia con',
//                         },
//                         {
//                             id: '9',
//                             label: 'Termina con',
//                         },
//                         {
//                             id: '10',
//                             label: 'Non termina con',
//                         },
//                         {
//                             id: '11',
//                             label: 'Contiene',
//                         },
//                         {
//                             id: '12',
//                             label: 'Non contiene',
//                         },
//                         {
//                             id: '13',
//                             label: 'Incluso in',
//                         },
//                         {
//                             id: '14',
//                             label: 'Escluso da',
//                         },
//                         {
//                             id: '15',
//                             label: 'In elenco',
//                         },
//                         {
//                             id: '16',
//                             label: 'Non in elenco',
//                         },
//                         {
//                             id: '17',
//                             label: 'Simile',
//                         },
//                         {
//                             id: '18',
//                             label: 'Non simile',
//                         },
//                         {
//                             id: '19',
//                             label: 'Nullo',
//                         },
//                         {
//                             id: '20',
//                             label: 'Non nullo',
//                         },
//                     ],
//                 },
//                 OCM: {
//                     value: '',
//                     editable: true,
//                     shape: 'CMB',
//                     options: [
//                         {
//                             id: '1',
//                             label: 'Uguale',
//                         },
//                         {
//                             id: '2',
//                             label: 'Diverso',
//                         },
//                         {
//                             id: '3',
//                             label: 'Maggiore',
//                         },
//                         {
//                             id: '4',
//                             label: 'Minore',
//                         },
//                         {
//                             id: '5',
//                             label: 'Maggiore Uguale',
//                         },
//                         {
//                             id: '6',
//                             label: 'Minore Uguale',
//                         },
//                         {
//                             id: '7',
//                             label: 'Inizia con',
//                         },
//                         {
//                             id: '8',
//                             label: 'Non inizia con',
//                         },
//                         {
//                             id: '9',
//                             label: 'Termina con',
//                         },
//                         {
//                             id: '10',
//                             label: 'Non termina con',
//                         },
//                         {
//                             id: '11',
//                             label: 'Contiene',
//                         },
//                         {
//                             id: '12',
//                             label: 'Non contiene',
//                         },
//                         {
//                             id: '13',
//                             label: 'Incluso in',
//                         },
//                         {
//                             id: '14',
//                             label: 'Escluso da',
//                         },
//                         {
//                             id: '15',
//                             label: 'In elenco',
//                         },
//                         {
//                             id: '16',
//                             label: 'Non in elenco',
//                         },
//                         {
//                             id: '17',
//                             label: 'Simile',
//                         },
//                         {
//                             id: '18',
//                             label: 'Non simile',
//                         },
//                         {
//                             id: '19',
//                             label: 'Nullo',
//                         },
//                         {
//                             id: '20',
//                             label: 'Non nullo',
//                         },
//                     ],
//                 },
//                 OPR: {
//                     value: '',
//                     editable: true,
//                     shape: 'CMB',
//                     options: [
//                         {
//                             id: '1',
//                             label: 'Uguale',
//                         },
//                         {
//                             id: '2',
//                             label: 'Diverso',
//                         },
//                         {
//                             id: '3',
//                             label: 'Maggiore',
//                         },
//                         {
//                             id: '4',
//                             label: 'Minore',
//                         },
//                         {
//                             id: '5',
//                             label: 'Maggiore Uguale',
//                         },
//                         {
//                             id: '6',
//                             label: 'Minore Uguale',
//                         },
//                         {
//                             id: '7',
//                             label: 'Inizia con',
//                         },
//                         {
//                             id: '8',
//                             label: 'Non inizia con',
//                         },
//                         {
//                             id: '9',
//                             label: 'Termina con',
//                         },
//                         {
//                             id: '10',
//                             label: 'Non termina con',
//                         },
//                         {
//                             id: '11',
//                             label: 'Contiene',
//                         },
//                         {
//                             id: '12',
//                             label: 'Non contiene',
//                         },
//                         {
//                             id: '13',
//                             label: 'Incluso in',
//                         },
//                         {
//                             id: '14',
//                             label: 'Escluso da',
//                         },
//                         {
//                             id: '15',
//                             label: 'In elenco',
//                         },
//                         {
//                             id: '16',
//                             label: 'Non in elenco',
//                         },
//                         {
//                             id: '17',
//                             label: 'Simile',
//                         },
//                         {
//                             id: '18',
//                             label: 'Non simile',
//                         },
//                         {
//                             id: '19',
//                             label: 'Nullo',
//                         },
//                         {
//                             id: '20',
//                             label: 'Non nullo',
//                         },
//                     ],
//                 },
//                 OAG: {
//                     value: '',
//                     editable: true,
//                     shape: 'CMB',
//                     options: [
//                         {
//                             id: '1',
//                             label: 'Uguale',
//                         },
//                         {
//                             id: '2',
//                             label: 'Diverso',
//                         },
//                         {
//                             id: '3',
//                             label: 'Maggiore',
//                         },
//                         {
//                             id: '4',
//                             label: 'Minore',
//                         },
//                         {
//                             id: '5',
//                             label: 'Maggiore Uguale',
//                         },
//                         {
//                             id: '6',
//                             label: 'Minore Uguale',
//                         },
//                         {
//                             id: '7',
//                             label: 'Inizia con',
//                         },
//                         {
//                             id: '8',
//                             label: 'Non inizia con',
//                         },
//                         {
//                             id: '9',
//                             label: 'Termina con',
//                         },
//                         {
//                             id: '10',
//                             label: 'Non termina con',
//                         },
//                         {
//                             id: '11',
//                             label: 'Contiene',
//                         },
//                         {
//                             id: '12',
//                             label: 'Non contiene',
//                         },
//                         {
//                             id: '13',
//                             label: 'Incluso in',
//                         },
//                         {
//                             id: '14',
//                             label: 'Escluso da',
//                         },
//                         {
//                             id: '15',
//                             label: 'In elenco',
//                         },
//                         {
//                             id: '16',
//                             label: 'Non in elenco',
//                         },
//                         {
//                             id: '17',
//                             label: 'Simile',
//                         },
//                         {
//                             id: '18',
//                             label: 'Non simile',
//                         },
//                         {
//                             id: '19',
//                             label: 'Nullo',
//                         },
//                         {
//                             id: '20',
//                             label: 'Non nullo',
//                         },
//                     ],
//                 },
//                 ORG: {
//                     value: '',
//                     editable: true,
//                     shape: 'CMB',
//                     options: [
//                         {
//                             id: '1',
//                             label: 'Uguale',
//                         },
//                         {
//                             id: '2',
//                             label: 'Diverso',
//                         },
//                         {
//                             id: '3',
//                             label: 'Maggiore',
//                         },
//                         {
//                             id: '4',
//                             label: 'Minore',
//                         },
//                         {
//                             id: '5',
//                             label: 'Maggiore Uguale',
//                         },
//                         {
//                             id: '6',
//                             label: 'Minore Uguale',
//                         },
//                         {
//                             id: '7',
//                             label: 'Inizia con',
//                         },
//                         {
//                             id: '8',
//                             label: 'Non inizia con',
//                         },
//                         {
//                             id: '9',
//                             label: 'Termina con',
//                         },
//                         {
//                             id: '10',
//                             label: 'Non termina con',
//                         },
//                         {
//                             id: '11',
//                             label: 'Contiene',
//                         },
//                         {
//                             id: '12',
//                             label: 'Non contiene',
//                         },
//                         {
//                             id: '13',
//                             label: 'Incluso in',
//                         },
//                         {
//                             id: '14',
//                             label: 'Escluso da',
//                         },
//                         {
//                             id: '15',
//                             label: 'In elenco',
//                         },
//                         {
//                             id: '16',
//                             label: 'Non in elenco',
//                         },
//                         {
//                             id: '17',
//                             label: 'Simile',
//                         },
//                         {
//                             id: '18',
//                             label: 'Non simile',
//                         },
//                         {
//                             id: '19',
//                             label: 'Nullo',
//                         },
//                         {
//                             id: '20',
//                             label: 'Non nullo',
//                         },
//                     ],
//                 },
//                 ONZ: {
//                     value: '',
//                     editable: true,
//                     shape: 'CMB',
//                     options: [
//                         {
//                             id: '1',
//                             label: 'Uguale',
//                         },
//                         {
//                             id: '2',
//                             label: 'Diverso',
//                         },
//                         {
//                             id: '3',
//                             label: 'Maggiore',
//                         },
//                         {
//                             id: '4',
//                             label: 'Minore',
//                         },
//                         {
//                             id: '5',
//                             label: 'Maggiore Uguale',
//                         },
//                         {
//                             id: '6',
//                             label: 'Minore Uguale',
//                         },
//                         {
//                             id: '7',
//                             label: 'Inizia con',
//                         },
//                         {
//                             id: '8',
//                             label: 'Non inizia con',
//                         },
//                         {
//                             id: '9',
//                             label: 'Termina con',
//                         },
//                         {
//                             id: '10',
//                             label: 'Non termina con',
//                         },
//                         {
//                             id: '11',
//                             label: 'Contiene',
//                         },
//                         {
//                             id: '12',
//                             label: 'Non contiene',
//                         },
//                         {
//                             id: '13',
//                             label: 'Incluso in',
//                         },
//                         {
//                             id: '14',
//                             label: 'Escluso da',
//                         },
//                         {
//                             id: '15',
//                             label: 'In elenco',
//                         },
//                         {
//                             id: '16',
//                             label: 'Non in elenco',
//                         },
//                         {
//                             id: '17',
//                             label: 'Simile',
//                         },
//                         {
//                             id: '18',
//                             label: 'Non simile',
//                         },
//                         {
//                             id: '19',
//                             label: 'Nullo',
//                         },
//                         {
//                             id: '20',
//                             label: 'Non nullo',
//                         },
//                     ],
//                 },
//                 ORF: {
//                     value: '',
//                     editable: true,
//                     shape: 'CMB',
//                     options: [
//                         {
//                             id: '1',
//                             label: 'Uguale',
//                         },
//                         {
//                             id: '2',
//                             label: 'Diverso',
//                         },
//                         {
//                             id: '3',
//                             label: 'Maggiore',
//                         },
//                         {
//                             id: '4',
//                             label: 'Minore',
//                         },
//                         {
//                             id: '5',
//                             label: 'Maggiore Uguale',
//                         },
//                         {
//                             id: '6',
//                             label: 'Minore Uguale',
//                         },
//                         {
//                             id: '7',
//                             label: 'Inizia con',
//                         },
//                         {
//                             id: '8',
//                             label: 'Non inizia con',
//                         },
//                         {
//                             id: '9',
//                             label: 'Termina con',
//                         },
//                         {
//                             id: '10',
//                             label: 'Non termina con',
//                         },
//                         {
//                             id: '11',
//                             label: 'Contiene',
//                         },
//                         {
//                             id: '12',
//                             label: 'Non contiene',
//                         },
//                         {
//                             id: '13',
//                             label: 'Incluso in',
//                         },
//                         {
//                             id: '14',
//                             label: 'Escluso da',
//                         },
//                         {
//                             id: '15',
//                             label: 'In elenco',
//                         },
//                         {
//                             id: '16',
//                             label: 'Non in elenco',
//                         },
//                         {
//                             id: '17',
//                             label: 'Simile',
//                         },
//                         {
//                             id: '18',
//                             label: 'Non simile',
//                         },
//                         {
//                             id: '19',
//                             label: 'Nullo',
//                         },
//                         {
//                             id: '20',
//                             label: 'Non nullo',
//                         },
//                     ],
//                 },
//                 OAT: {
//                     value: '',
//                     editable: true,
//                     shape: 'CMB',
//                     options: [
//                         {
//                             id: '1',
//                             label: 'Uguale',
//                         },
//                         {
//                             id: '2',
//                             label: 'Diverso',
//                         },
//                         {
//                             id: '3',
//                             label: 'Maggiore',
//                         },
//                         {
//                             id: '4',
//                             label: 'Minore',
//                         },
//                         {
//                             id: '5',
//                             label: 'Maggiore Uguale',
//                         },
//                         {
//                             id: '6',
//                             label: 'Minore Uguale',
//                         },
//                         {
//                             id: '7',
//                             label: 'Inizia con',
//                         },
//                         {
//                             id: '8',
//                             label: 'Non inizia con',
//                         },
//                         {
//                             id: '9',
//                             label: 'Termina con',
//                         },
//                         {
//                             id: '10',
//                             label: 'Non termina con',
//                         },
//                         {
//                             id: '11',
//                             label: 'Contiene',
//                         },
//                         {
//                             id: '12',
//                             label: 'Non contiene',
//                         },
//                         {
//                             id: '13',
//                             label: 'Incluso in',
//                         },
//                         {
//                             id: '14',
//                             label: 'Escluso da',
//                         },
//                         {
//                             id: '15',
//                             label: 'In elenco',
//                         },
//                         {
//                             id: '16',
//                             label: 'Non in elenco',
//                         },
//                         {
//                             id: '17',
//                             label: 'Simile',
//                         },
//                         {
//                             id: '18',
//                             label: 'Non simile',
//                         },
//                         {
//                             id: '19',
//                             label: 'Nullo',
//                         },
//                         {
//                             id: '20',
//                             label: 'Non nullo',
//                         },
//                     ],
//                 },
//                 OCS: {
//                     value: '',
//                     editable: true,
//                     shape: 'CMB',
//                     options: [
//                         {
//                             id: '1',
//                             label: 'Uguale',
//                         },
//                         {
//                             id: '2',
//                             label: 'Diverso',
//                         },
//                         {
//                             id: '3',
//                             label: 'Maggiore',
//                         },
//                         {
//                             id: '4',
//                             label: 'Minore',
//                         },
//                         {
//                             id: '5',
//                             label: 'Maggiore Uguale',
//                         },
//                         {
//                             id: '6',
//                             label: 'Minore Uguale',
//                         },
//                         {
//                             id: '7',
//                             label: 'Inizia con',
//                         },
//                         {
//                             id: '8',
//                             label: 'Non inizia con',
//                         },
//                         {
//                             id: '9',
//                             label: 'Termina con',
//                         },
//                         {
//                             id: '10',
//                             label: 'Non termina con',
//                         },
//                         {
//                             id: '11',
//                             label: 'Contiene',
//                         },
//                         {
//                             id: '12',
//                             label: 'Non contiene',
//                         },
//                         {
//                             id: '13',
//                             label: 'Incluso in',
//                         },
//                         {
//                             id: '14',
//                             label: 'Escluso da',
//                         },
//                         {
//                             id: '15',
//                             label: 'In elenco',
//                         },
//                         {
//                             id: '16',
//                             label: 'Non in elenco',
//                         },
//                         {
//                             id: '17',
//                             label: 'Simile',
//                         },
//                         {
//                             id: '18',
//                             label: 'Non simile',
//                         },
//                         {
//                             id: '19',
//                             label: 'Nullo',
//                         },
//                         {
//                             id: '20',
//                             label: 'Non nullo',
//                         },
//                     ],
//                 },
//                 OGL: {
//                     value: '',
//                     editable: true,
//                     shape: 'CMB',
//                     options: [
//                         {
//                             id: '1',
//                             label: 'Uguale',
//                         },
//                         {
//                             id: '2',
//                             label: 'Diverso',
//                         },
//                         {
//                             id: '3',
//                             label: 'Maggiore',
//                         },
//                         {
//                             id: '4',
//                             label: 'Minore',
//                         },
//                         {
//                             id: '5',
//                             label: 'Maggiore Uguale',
//                         },
//                         {
//                             id: '6',
//                             label: 'Minore Uguale',
//                         },
//                         {
//                             id: '7',
//                             label: 'Inizia con',
//                         },
//                         {
//                             id: '8',
//                             label: 'Non inizia con',
//                         },
//                         {
//                             id: '9',
//                             label: 'Termina con',
//                         },
//                         {
//                             id: '10',
//                             label: 'Non termina con',
//                         },
//                         {
//                             id: '11',
//                             label: 'Contiene',
//                         },
//                         {
//                             id: '12',
//                             label: 'Non contiene',
//                         },
//                         {
//                             id: '13',
//                             label: 'Incluso in',
//                         },
//                         {
//                             id: '14',
//                             label: 'Escluso da',
//                         },
//                         {
//                             id: '15',
//                             label: 'In elenco',
//                         },
//                         {
//                             id: '16',
//                             label: 'Non in elenco',
//                         },
//                         {
//                             id: '17',
//                             label: 'Simile',
//                         },
//                         {
//                             id: '18',
//                             label: 'Non simile',
//                         },
//                         {
//                             id: '19',
//                             label: 'Nullo',
//                         },
//                         {
//                             id: '20',
//                             label: 'Non nullo',
//                         },
//                     ],
//                 },
//                 OTD: {
//                     value: '',
//                     editable: true,
//                     shape: 'CMB',
//                     options: [
//                         {
//                             id: '1',
//                             label: 'Uguale',
//                         },
//                         {
//                             id: '2',
//                             label: 'Diverso',
//                         },
//                         {
//                             id: '3',
//                             label: 'Maggiore',
//                         },
//                         {
//                             id: '4',
//                             label: 'Minore',
//                         },
//                         {
//                             id: '5',
//                             label: 'Maggiore Uguale',
//                         },
//                         {
//                             id: '6',
//                             label: 'Minore Uguale',
//                         },
//                         {
//                             id: '7',
//                             label: 'Inizia con',
//                         },
//                         {
//                             id: '8',
//                             label: 'Non inizia con',
//                         },
//                         {
//                             id: '9',
//                             label: 'Termina con',
//                         },
//                         {
//                             id: '10',
//                             label: 'Non termina con',
//                         },
//                         {
//                             id: '11',
//                             label: 'Contiene',
//                         },
//                         {
//                             id: '12',
//                             label: 'Non contiene',
//                         },
//                         {
//                             id: '13',
//                             label: 'Incluso in',
//                         },
//                         {
//                             id: '14',
//                             label: 'Escluso da',
//                         },
//                         {
//                             id: '15',
//                             label: 'In elenco',
//                         },
//                         {
//                             id: '16',
//                             label: 'Non in elenco',
//                         },
//                         {
//                             id: '17',
//                             label: 'Simile',
//                         },
//                         {
//                             id: '18',
//                             label: 'Non simile',
//                         },
//                         {
//                             id: '19',
//                             label: 'Nullo',
//                         },
//                         {
//                             id: '20',
//                             label: 'Non nullo',
//                         },
//                     ],
//                 },
//                 ODT: {
//                     value: '',
//                     editable: true,
//                     shape: 'CMB',
//                     options: [
//                         {
//                             id: '1',
//                             label: 'Uguale',
//                         },
//                         {
//                             id: '2',
//                             label: 'Diverso',
//                         },
//                         {
//                             id: '3',
//                             label: 'Maggiore',
//                         },
//                         {
//                             id: '4',
//                             label: 'Minore',
//                         },
//                         {
//                             id: '5',
//                             label: 'Maggiore Uguale',
//                         },
//                         {
//                             id: '6',
//                             label: 'Minore Uguale',
//                         },
//                         {
//                             id: '7',
//                             label: 'Inizia con',
//                         },
//                         {
//                             id: '8',
//                             label: 'Non inizia con',
//                         },
//                         {
//                             id: '9',
//                             label: 'Termina con',
//                         },
//                         {
//                             id: '10',
//                             label: 'Non termina con',
//                         },
//                         {
//                             id: '11',
//                             label: 'Contiene',
//                         },
//                         {
//                             id: '12',
//                             label: 'Non contiene',
//                         },
//                         {
//                             id: '13',
//                             label: 'Incluso in',
//                         },
//                         {
//                             id: '14',
//                             label: 'Escluso da',
//                         },
//                         {
//                             id: '15',
//                             label: 'In elenco',
//                         },
//                         {
//                             id: '16',
//                             label: 'Non in elenco',
//                         },
//                         {
//                             id: '17',
//                             label: 'Simile',
//                         },
//                         {
//                             id: '18',
//                             label: 'Non simile',
//                         },
//                         {
//                             id: '19',
//                             label: 'Nullo',
//                         },
//                         {
//                             id: '20',
//                             label: 'Non nullo',
//                         },
//                     ],
//                 },
//             },
//             layout: {
//                 sections: [
//                     {
//                         content: [
//                             {
//                                 id: 'TEL',
//                                 colStart: 1,
//                                 colEnd: 3,
//                                 rowStart: 1,
//                                 rowEnd: 1,
//                             },
//                             {
//                                 id: 'CRE',
//                                 colStart: 4,
//                                 colEnd: 4,
//                                 rowStart: 1,
//                                 rowEnd: 1,
//                             },
//                             {
//                                 id: 'CVE',
//                                 colStart: 1,
//                                 colEnd: 1,
//                                 rowStart: 2,
//                                 rowEnd: 2,
//                             },
//                             {
//                                 id: 'DIV',
//                                 colStart: 2,
//                                 colEnd: 2,
//                                 rowStart: 2,
//                                 rowEnd: 2,
//                             },
//                             {
//                                 id: 'ELA',
//                                 colStart: 1,
//                                 colEnd: 4,
//                                 rowStart: 3,
//                                 rowEnd: 3,
//                             },
//                             {
//                                 id: 'SAP',
//                                 colStart: 1,
//                                 colEnd: 4,
//                                 rowStart: 4,
//                                 rowEnd: 4,
//                             },
//                             {
//                                 id: 'ART',
//                                 colStart: 1,
//                                 colEnd: 4,
//                                 rowStart: 5,
//                                 rowEnd: 5,
//                             },
//                             {
//                                 id: 'MOA',
//                                 colStart: 1,
//                                 colEnd: 1,
//                                 rowStart: 6,
//                                 rowEnd: 6,
//                             },
//                             {
//                                 id: 'ONE',
//                                 colStart: 2,
//                                 colEnd: 2,
//                                 rowStart: 6,
//                                 rowEnd: 6,
//                             },
//                             {
//                                 id: 'MCD',
//                                 colStart: 3,
//                                 colEnd: 3,
//                                 rowStart: 6,
//                                 rowEnd: 6,
//                             },
//                             {
//                                 id: 'NET',
//                                 colStart: 4,
//                                 colEnd: 4,
//                                 rowStart: 6,
//                                 rowEnd: 6,
//                             },
//                         ],
//                         gridCols: 4,
//                         gridRows: 6,
//                         gap: 2,
//                     },
//                     // ONE COL
//                     {
//                         content: [
//                             {
//                                 id: 'OCD',
//                                 colStart: 1,
//                                 colEnd: 1,
//                                 rowStart: 1,
//                                 rowEnd: 1,
//                             },
//                             {
//                                 id: 'COD',
//                                 colStart: 2,
//                                 colEnd: 4,
//                                 rowStart: 1,
//                                 rowEnd: 1,
//                             },
//                         ],
//                         gridCols: 6,
//                         gridRows: 1,
//                         gap: 0.5,
//                     },
//                     // TWO COL
//                     {
//                         content: [
//                             {
//                                 id: 'OMR',
//                                 colStart: 1,
//                                 colEnd: 1,
//                                 rowStart: 1,
//                                 rowEnd: 1,
//                             },
//                             {
//                                 id: 'MAR',
//                                 colStart: 2,
//                                 colEnd: 4,
//                                 rowStart: 1,
//                                 rowEnd: 1,
//                             },
//                             {
//                                 id: 'OFM',
//                                 colStart: 6,
//                                 colEnd: 6,
//                                 rowStart: 1,
//                                 rowEnd: 1,
//                             },
//                             {
//                                 id: 'FAM',
//                                 colStart: 7,
//                                 colEnd: 9,
//                                 rowStart: 1,
//                                 rowEnd: 1,
//                             },
//                         ],
//                         gridCols: 9,
//                         gridRows: 1,
//                         gap: 0.5,
//                     },
//                     // TWO COL
//                     {
//                         content: [
//                             {
//                                 id: 'OTA',
//                                 colStart: 1,
//                                 colEnd: 1,
//                                 rowStart: 1,
//                                 rowEnd: 1,
//                             },
//                             {
//                                 id: 'TAR',
//                                 colStart: 2,
//                                 colEnd: 4,
//                                 rowStart: 1,
//                                 rowEnd: 1,
//                             },
//                             {
//                                 id: 'OGM',
//                                 colStart: 6,
//                                 colEnd: 6,
//                                 rowStart: 1,
//                                 rowEnd: 1,
//                             },
//                             {
//                                 id: 'GRM',
//                                 colStart: 7,
//                                 colEnd: 9,
//                                 rowStart: 1,
//                                 rowEnd: 1,
//                             },
//                         ],
//                         gridCols: 9,
//                         gridRows: 1,
//                         gap: 0.5,
//                     },
//                     // TWO COL
//                     {
//                         content: [
//                             {
//                                 id: 'OCL',
//                                 colStart: 1,
//                                 colEnd: 1,
//                                 rowStart: 1,
//                                 rowEnd: 1,
//                             },
//                             {
//                                 id: 'ABC',
//                                 colStart: 2,
//                                 colEnd: 4,
//                                 rowStart: 1,
//                                 rowEnd: 1,
//                             },
//                             {
//                                 id: 'OMD',
//                                 colStart: 6,
//                                 colEnd: 6,
//                                 rowStart: 1,
//                                 rowEnd: 1,
//                             },
//                             {
//                                 id: 'MDL',
//                                 colStart: 7,
//                                 colEnd: 9,
//                                 rowStart: 1,
//                                 rowEnd: 1,
//                             },
//                         ],
//                         gridCols: 9,
//                         gridRows: 1,
//                         gap: 0.5,
//                     },
//                     // TWO COL
//                     {
//                         content: [
//                             {
//                                 id: 'OCA',
//                                 colStart: 1,
//                                 colEnd: 1,
//                                 rowStart: 1,
//                                 rowEnd: 1,
//                             },
//                             {
//                                 id: 'CSA',
//                                 colStart: 2,
//                                 colEnd: 4,
//                                 rowStart: 1,
//                                 rowEnd: 1,
//                             },
//                             {
//                                 id: 'OTR',
//                                 colStart: 6,
//                                 colEnd: 6,
//                                 rowStart: 1,
//                                 rowEnd: 1,
//                             },
//                             {
//                                 id: 'TRA',
//                                 colStart: 7,
//                                 colEnd: 9,
//                                 rowStart: 1,
//                                 rowEnd: 1,
//                             },
//                         ],
//                         gridCols: 9,
//                         gridRows: 1,
//                         gap: 0.5,
//                     },
//                     // TWO COL
//                     {
//                         content: [
//                             {
//                                 id: 'OCF',
//                                 colStart: 1,
//                                 colEnd: 1,
//                                 rowStart: 1,
//                                 rowEnd: 1,
//                             },
//                             {
//                                 id: 'FOR',
//                                 colStart: 2,
//                                 colEnd: 4,
//                                 rowStart: 1,
//                                 rowEnd: 1,
//                             },
//                             {
//                                 id: 'OCT',
//                                 colStart: 6,
//                                 colEnd: 6,
//                                 rowStart: 1,
//                                 rowEnd: 1,
//                             },
//                             {
//                                 id: 'CCF',
//                                 colStart: 7,
//                                 colEnd: 9,
//                                 rowStart: 1,
//                                 rowEnd: 1,
//                             },
//                         ],
//                         gridCols: 9,
//                         gridRows: 1,
//                         gap: 0.5,
//                     },
//                     // THREE COL
//                     {
//                         content: [
//                             {
//                                 id: 'OZN',
//                                 colStart: 1,
//                                 colEnd: 1,
//                                 rowStart: 1,
//                                 rowEnd: 1,
//                             },
//                             {
//                                 id: 'ZON',
//                                 colSpan: 2,
//                                 rowStart: 1,
//                                 rowEnd: 1,
//                             },
//                             {
//                                 id: 'OCM',
//                                 colStart: 5,
//                                 colEnd: 5,
//                                 rowStart: 1,
//                                 rowEnd: 1,
//                             },
//                             {
//                                 id: 'COM',
//                                 colSpan: 2,
//                                 rowStart: 1,
//                                 rowEnd: 1,
//                             },
//                             {
//                                 id: 'OPR',
//                                 colStart: 9,
//                                 colEnd: 9,
//                                 rowStart: 1,
//                                 rowEnd: 1,
//                             },
//                             {
//                                 id: 'PRO',
//                                 colSpan: 2,
//                                 rowStart: 1,
//                                 rowEnd: 1,
//                             },
//                         ],
//                         gridCols: 11,
//                         gridRows: 1,
//                         gap: 0.5,
//                     },
//                     // THREE COL
//                     {
//                         content: [
//                             {
//                                 id: 'OAG',
//                                 colStart: 1,
//                                 colEnd: 1,
//                                 rowStart: 1,
//                                 rowEnd: 1,
//                             },
//                             {
//                                 id: 'AGE',
//                                 colSpan: 2,
//                                 rowStart: 1,
//                                 rowEnd: 1,
//                             },
//                             {
//                                 id: 'ORG',
//                                 colStart: 5,
//                                 colEnd: 5,
//                                 rowStart: 1,
//                                 rowEnd: 1,
//                             },
//                             {
//                                 id: 'REG',
//                                 colSpan: 2,
//                                 rowStart: 1,
//                                 rowEnd: 1,
//                             },
//                             {
//                                 id: 'ONZ',
//                                 colStart: 9,
//                                 colEnd: 9,
//                                 rowStart: 1,
//                                 rowEnd: 1,
//                             },
//                             {
//                                 id: 'NAT',
//                                 colSpan: 2,
//                                 rowStart: 1,
//                                 rowEnd: 1,
//                             },
//                         ],
//                         gridCols: 11,
//                         gridRows: 1,
//                         gap: 0.5,
//                     },
//                     // TWO COL
//                     {
//                         content: [
//                             {
//                                 id: 'ORF',
//                                 colStart: 1,
//                                 colEnd: 1,
//                                 rowStart: 1,
//                                 rowEnd: 1,
//                             },
//                             {
//                                 id: 'RCF',
//                                 colStart: 2,
//                                 colEnd: 4,
//                                 rowStart: 1,
//                                 rowEnd: 1,
//                             },
//                             {
//                                 id: 'OAT',
//                                 colStart: 6,
//                                 colEnd: 6,
//                                 rowStart: 1,
//                                 rowEnd: 1,
//                             },
//                             {
//                                 id: 'ATT',
//                                 colStart: 7,
//                                 colEnd: 9,
//                                 rowStart: 1,
//                                 rowEnd: 1,
//                             },
//                         ],
//                         gridCols: 9,
//                         gridRows: 1,
//                         gap: 0.5,
//                     },
//                     // TWO COL
//                     {
//                         content: [
//                             {
//                                 id: 'OCS',
//                                 colStart: 1,
//                                 colEnd: 1,
//                                 rowStart: 1,
//                                 rowEnd: 1,
//                             },
//                             {
//                                 id: 'CAU',
//                                 colStart: 2,
//                                 colEnd: 4,
//                                 rowStart: 1,
//                                 rowEnd: 1,
//                             },
//                             {
//                                 id: 'OGL',
//                                 colStart: 6,
//                                 colEnd: 6,
//                                 rowStart: 1,
//                                 rowEnd: 1,
//                             },
//                             {
//                                 id: 'LST',
//                                 colStart: 7,
//                                 colEnd: 9,
//                                 rowStart: 1,
//                                 rowEnd: 1,
//                             },
//                         ],
//                         gridCols: 9,
//                         gridRows: 1,
//                         gap: 0.5,
//                     },
//                     // THREE COL
//                     {
//                         content: [
//                             {
//                                 id: 'OTD',
//                                 colStart: 1,
//                                 colEnd: 1,
//                                 rowStart: 1,
//                                 rowEnd: 1,
//                             },
//                             {
//                                 id: 'DOC',
//                                 colSpan: 2,
//                                 rowStart: 1,
//                                 rowEnd: 1,
//                             },
//                             {
//                                 id: 'LDO',
//                                 colStart: 5,
//                                 colEnd: 7,
//                                 rowStart: 1,
//                                 rowEnd: 1,
//                             },
//                             {
//                                 id: 'TDO',
//                                 colStart: 8,
//                                 colEnd: 11,
//                                 rowStart: 1,
//                                 rowEnd: 1,
//                             },
//                         ],
//                         gridCols: 11,
//                         gridRows: 1,
//                         gap: 0.5,
//                     },
//                     // TWO COL
//                     {
//                         content: [
//                             {
//                                 id: 'ODT',
//                                 colStart: 1,
//                                 colEnd: 1,
//                                 rowStart: 1,
//                                 rowEnd: 1,
//                             },
//                             {
//                                 id: 'DAT',
//                                 colStart: 2,
//                                 colEnd: 4,
//                                 rowStart: 1,
//                                 rowEnd: 1,
//                             },
//                             {
//                                 id: 'TDA',
//                                 colStart: 5,
//                                 colEnd: 8,
//                                 rowStart: 1,
//                                 rowEnd: 1,
//                             },
//                         ],
//                         gridCols: 9,
//                         gridRows: 1,
//                         gap: 0.5,
//                     },
//                 ],
//             },
//         },
//     ],
// };

// const inputPanel = document.getElementById('input-panel');
// inputPanel.data = ergonForm;
// inputPanel.submitCb = (e) => {
//     console.log(e);
//     const inputPanel = document.getElementById('input-panel');
//     inputPanel.data = ergonForm;
// };
