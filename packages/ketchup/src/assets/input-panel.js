// let data = {
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
//                     value: '',
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
//                     value: '',
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
//                     value: '',
//                     options: [
//                         {
//                             id: 'ITA',
//                             label: 'Italy',
//                         },
//                         {
//                             id: 'SPA',
//                             label: 'Spain',
//                         },
//                         {
//                             id: 'GER',
//                             label: 'Germany',
//                         },
//                         {
//                             id: 'FRA',
//                             label: 'France',
//                         },
//                         {
//                             id: 'POR',
//                             label: 'Portugal',
//                         },
//                         {
//                             id: 'ENG',
//                             label: 'England',
//                         },
//                     ],
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
//                     value: '',
//                     obj: {
//                         t: '',
//                         p: '',
//                         k: '',
//                     },
//                     editable: true,
//                     mandatory: true,
//                     options: {
//                         type: 'SmeupTree',
//                         messages: [],
//                         children: [
//                             {
//                                 content: {
//                                     codice: 'ROM',
//                                     testo: 'Rome',
//                                 },
//                                 children: [
//                                     {
//                                         content: {
//                                             codice: 'ROS',
//                                             testo: 'Rome Sud',
//                                         },
//                                         children: [],
//                                     },
//                                     {
//                                         content: {
//                                             codice: 'RON',
//                                             testo: 'Rome Nord',
//                                         },
//                                         children: [],
//                                     },
//                                 ],
//                             },
//                             {
//                                 content: {
//                                     codice: 'FLO',
//                                     testo: 'Florence',
//                                 },
//                                 children: [],
//                             },
//                             {
//                                 content: {
//                                     codice: 'VEN',
//                                     testo: 'Venice',
//                                 },
//                             },
//                             {
//                                 content: {
//                                     codice: 'MAD',
//                                     testo: 'Madrid',
//                                 },
//                             },
//                             {
//                                 content: {
//                                     codice: 'BAR',
//                                     testo: 'Barcelona',
//                                 },
//                             },
//                             {
//                                 content: {
//                                     codice: 'SEV',
//                                     testo: 'Seville',
//                                 },
//                             },
//                             {
//                                 content: {
//                                     codice: 'BER',
//                                     testo: 'Berlin',
//                                 },
//                             },
//                             {
//                                 content: {
//                                     codice: 'MUN',
//                                     testo: 'Munich',
//                                 },
//                             },
//                             {
//                                 content: {
//                                     codice: 'HAM',
//                                     testo: 'Hamburg',
//                                 },
//                             },
//                             {
//                                 content: {
//                                     codice: 'PAR',
//                                     testo: 'Paris',
//                                 },
//                             },
//                             {
//                                 content: {
//                                     codice: 'MAR',
//                                     testo: 'Marseille',
//                                 },
//                             },
//                             {
//                                 content: {
//                                     codice: 'LYO',
//                                     testo: 'Lyon',
//                                 },
//                             },
//                             {
//                                 content: {
//                                     codice: 'LIS',
//                                     testo: 'Lisbon',
//                                 },
//                             },
//                             {
//                                 content: {
//                                     codice: 'POR',
//                                     testo: 'Porto',
//                                 },
//                             },
//                             {
//                                 content: {
//                                     codice: 'FAR',
//                                     testo: 'Faro',
//                                 },
//                             },
//                             {
//                                 content: {
//                                     codice: 'LON',
//                                     testo: 'London',
//                                 },
//                             },
//                             {
//                                 content: {
//                                     codice: 'MAN',
//                                     testo: 'Manchester',
//                                 },
//                             },
//                             {
//                                 content: {
//                                     codice: 'LIV',
//                                     testo: 'Liverpool',
//                                 },
//                             },
//                         ],
//                     },
//                     fun: 'FUN ',
//                     shape: 'ACP',
//                 },
//                 LIS: {
//                     value: '',
//                     obj: {
//                         t: '',
//                         p: '',
//                         k: '',
//                     },
//                     editable: true,
//                     mandatory: true,
//                     options: {
//                         type: 'SmeupTable',
//                         messages: [],
//                         rows: [
//                             {
//                                 fields: {
//                                     E1: {
//                                         smeupObject: {
//                                             codice: 'E1',
//                                             testo: 'Element 1',
//                                         },
//                                     },
//                                     E2: {
//                                         smeupObject: {
//                                             codice: 'E2',
//                                             testo: 'Element 2',
//                                         },
//                                     },
//                                     E3: {
//                                         smeupObject: {
//                                             codice: 'E3',
//                                             testo: 'Element 3',
//                                         },
//                                     },
//                                 },
//                             },
//                             {
//                                 fields: {
//                                     E4: {
//                                         smeupObject: {
//                                             codice: 'E4',
//                                             testo: 'Element 4',
//                                         },
//                                     },
//                                     E5: {
//                                         smeupObject: {
//                                             codice: 'E5',
//                                             testo: 'Element 5',
//                                         },
//                                     },
//                                     E6: {
//                                         smeupObject: {
//                                             codice: 'E6',
//                                             testo: 'Element 6',
//                                         },
//                                     },
//                                 },
//                             },
//                             {
//                                 fields: {
//                                     E14: {
//                                         smeupObject: {
//                                             codice: 'E14',
//                                             testo: 'Element 14',
//                                         },
//                                     },
//                                     E15: {
//                                         smeupObject: {
//                                             codice: 'E15',
//                                             testo: 'Element 15',
//                                         },
//                                     },
//                                     E16: {
//                                         smeupObject: {
//                                             codice: 'E16',
//                                             testo: 'Element 16',
//                                         },
//                                     },
//                                 },
//                             },
//                         ],
//                     },
//                     shape: 'ACP',
//                 },
//                 CHK: {
//                     value: 'on',
//                     editable: true,
//                     mandatory: true,
//                     shape: 'CHK',
//                 },
//                 RAD: {
//                     value: '3',
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

// const inputPanel = document.getElementById('input-panel');
// inputPanel.data = data;

// const inputPanelCallback = [
//     {
//         eventName: 'kup-autocomplete-input',
//         eventCallback: (e) => {
//             const newdata = {
//                 ...data,
//                 rows: data.rows.map((row) => {
//                     const keys = Object.keys(row.cells);
//                     const updatedCells = keys.reduce((acc, key) => {
//                         let updatedValue = e.state.find(
//                             (state) => state.column.name === key
//                         ).cell.value;
//                         return {
//                             ...acc,
//                             [key]: {
//                                 ...row.cells[key],
//                                 value: updatedValue,
//                             },
//                         };
//                     }, {});
//                     return { ...row, cells: updatedCells };
//                 }),
//             };
//             const inputPanel = document.getElementById('input-panel');
//             inputPanel.data = newdata;
//         },
//     },
// ];

// const optionsHandlerCallback = () => {
//     return Promise.resolve({
//         type: 'SmeupTree',
//         messages: [],
//         children: [
//             {
//                 content: {
//                     codice: 'ROM',
//                     testo: 'Rome',
//                 },
//                 children: [],
//             },
//             {
//                 content: {
//                     codice: 'TAR',
//                     testo: 'Taranto',
//                 },
//                 children: [],
//             },
//         ],
//     });
// };

// inputPanel.valueChangeCb = inputPanelCallback;
// inputPanel.optionsHandler = optionsHandlerCallback;
// inputPanel.submitCb = (e) => console.log(e);

const ergonForm = {
    columns: [
        {
            name: 'TEL',
            title: 'Tempo Elaborazione',
            visible: true,
        },
        {
            name: 'CRE',
            title: 'Cumulo Reparti',
            visible: true,
        },
        {
            name: 'CVE',
            title: 'Costo Venduto',
            visible: true,
        },
        {
            name: 'DIV',
            title: 'Divisa',
            visible: true,
        },
        {
            name: 'ELA',
            title: 'Elabora',
            visible: true,
        },
        {
            name: 'SAP',
            title: 'Salto Pagina',
            visible: true,
        },
        {
            name: 'ART',
            title: 'Articoli',
            visible: true,
        },
        {
            name: 'MOA',
            title: 'Mostra movimento per articoli',
            visible: true,
        },
        {
            name: 'ONE',
            title: 'Includi Oneri',
            visible: true,
        },
        {
            name: 'MCD',
            title: 'Solo marche in conto deposito',
            visible: true,
        },
        {
            name: 'NET',
            title: 'Solo netti',
            visible: true,
        },
        {
            name: 'COD',
            title: 'Codice',
            visible: true,
        },
        {
            name: 'MAR',
            title: 'Marca',
            visible: true,
        },
        {
            name: 'FAM',
            title: 'Famiglia',
            visible: true,
        },
        {
            name: 'TAR',
            title: 'Tipo Articolo',
            visible: true,
        },
        {
            name: 'GRM',
            title: 'Gruppo Merci',
            visible: true,
        },
        {
            name: 'ABC',
            title: 'Classe ABC',
            visible: true,
        },
        {
            name: 'MDL',
            title: 'Modelli',
            visible: true,
        },
        {
            name: 'CSA',
            title: 'Cat. Sc. Articolo',
            visible: true,
        },
        {
            name: 'TRA',
            title: 'Tratt. Articolo',
            visible: true,
        },
        {
            name: 'FOR',
            title: 'Cliente/Fornitore',
            visible: true,
        },
        {
            name: 'CCF',
            title: 'Categ. C/F',
            visible: true,
        },
        {
            name: 'ZON',
            title: 'Zona',
            visible: true,
        },
        {
            name: 'COM',
            title: 'Comune',
            visible: true,
        },
        {
            name: 'PRO',
            title: 'Provincia',
            visible: true,
        },
        {
            name: 'AGE',
            title: 'Agente',
            visible: true,
        },
        {
            name: 'REG',
            title: 'Regione',
            visible: true,
        },
        {
            name: 'NAT',
            title: 'Nazione',
            visible: true,
        },
        {
            name: 'RCF',
            title: 'Raggrupp. C/F',
            visible: true,
        },
        {
            name: 'ATT',
            title: 'Attività',
            visible: true,
        },
        {
            name: 'CAU',
            title: 'Causale',
            visible: true,
        },
        {
            name: 'LST',
            title: 'Gruppo Liste',
            visible: true,
        },
        {
            name: 'DOC',
            title: 'Tipo Documento',
            visible: true,
        },
        {
            name: 'LDO',
            title: 'Lettera Doc.',
            visible: true,
        },
        {
            name: 'TDO',
            title: '',
            visible: true,
        },
        {
            name: 'DAT',
            title: 'Data',
            visible: true,
        },
        {
            name: 'TDA',
            title: '',
            visible: true,
        },
    ],
    rows: [
        {
            cells: {
                TEL: {
                    value: '',
                    editable: true,
                    options: [
                        {
                            id: 'CLI',
                            label: 'Clienti',
                        },
                        {
                            id: 'FOR',
                            label: 'Fornitori',
                        },
                    ],
                    shape: 'RAD',
                },
                CRE: {
                    value: '',
                    editable: true,
                    mandatory: true,
                    shape: 'CHK',
                },
                CVE: {
                    value: '',
                    options: [
                        {
                            id: 'MED',
                            label: 'Media acquisto',
                        },
                    ],
                    editable: true,
                    shape: 'CMB',
                },
                DIV: {
                    value: '',
                    editable: true,
                    shape: 'ITX',
                },
                ELA: {
                    value: '',
                    editable: true,
                    options: [
                        {
                            id: 'YFA',
                            label: 'Solo Fatturato',
                        },
                        {
                            id: 'NFA',
                            label: 'Escluso Fatturato',
                        },
                        {
                            id: 'BOT',
                            label: 'Entrambi',
                        },
                    ],
                    shape: 'RAD',
                },
                SAP: {
                    value: '',
                    editable: true,
                    options: [
                        {
                            id: 'NO',
                            label: 'Nessuno',
                        },
                        {
                            id: 'SI',
                            label: 'Effettua',
                        },
                        {
                            id: 'TES',
                            label: 'Stampa Testata',
                        },
                    ],
                    shape: 'RAD',
                },
                ART: {
                    value: '',
                    editable: true,
                    options: [
                        {
                            id: 'ALL',
                            label: 'Tutti',
                        },
                        {
                            id: 'NFM',
                            label: 'Escludi FM',
                        },
                        {
                            id: 'SFM',
                            label: 'Solo FM',
                        },
                    ],
                    shape: 'RAD',
                },
                MOA: {
                    value: '',
                    editable: true,
                    shape: 'CHK',
                },
                ONE: {
                    value: '',
                    editable: false,
                    shape: 'CHK',
                },
                MCD: {
                    value: '',
                    editable: true,
                    shape: 'CHK',
                },
                NET: {
                    value: '',
                    editable: true,
                    shape: 'CHK',
                },
                COD: {
                    value: '',
                    editable: true,
                    options: [
                        {
                            id: '1',
                            label: '1',
                        },
                        {
                            id: '2',
                            label: '2',
                        },
                        {
                            id: '3',
                            label: '3',
                        },
                        {
                            id: '4',
                            label: '4',
                        },
                        {
                            id: '5',
                            label: '5',
                        },
                    ],
                    shape: 'ACP',
                },
                MAR: {
                    value: '',
                    editable: true,
                    shape: 'ACP',
                    options: [
                        {
                            id: '1',
                            label: '1',
                        },
                        {
                            id: '2',
                            label: '2',
                        },
                        {
                            id: '3',
                            label: '3',
                        },
                        {
                            id: '4',
                            label: '4',
                        },
                        {
                            id: '5',
                            label: '5',
                        },
                    ],
                },
                FAM: {
                    value: '',
                    editable: true,
                    shape: 'ACP',
                    options: [
                        {
                            id: '1',
                            label: '1',
                        },
                        {
                            id: '2',
                            label: '2',
                        },
                        {
                            id: '3',
                            label: '3',
                        },
                        {
                            id: '4',
                            label: '4',
                        },
                        {
                            id: '5',
                            label: '5',
                        },
                    ],
                },
                TAR: {
                    value: '',
                    editable: true,
                    shape: 'ACP',
                    options: [
                        {
                            id: '1',
                            label: '1',
                        },
                        {
                            id: '2',
                            label: '2',
                        },
                        {
                            id: '3',
                            label: '3',
                        },
                        {
                            id: '4',
                            label: '4',
                        },
                        {
                            id: '5',
                            label: '5',
                        },
                    ],
                },
                GRM: {
                    value: '',
                    editable: true,
                    shape: 'ACP',
                    options: [
                        {
                            id: '1',
                            label: '1',
                        },
                        {
                            id: '2',
                            label: '2',
                        },
                        {
                            id: '3',
                            label: '3',
                        },
                        {
                            id: '4',
                            label: '4',
                        },
                        {
                            id: '5',
                            label: '5',
                        },
                    ],
                },
                ABC: {
                    value: '',
                    editable: true,
                    shape: 'ACP',
                    options: [
                        {
                            id: '1',
                            label: '1',
                        },
                        {
                            id: '2',
                            label: '2',
                        },
                        {
                            id: '3',
                            label: '3',
                        },
                        {
                            id: '4',
                            label: '4',
                        },
                        {
                            id: '5',
                            label: '5',
                        },
                    ],
                },
                MDL: {
                    value: '',
                    editable: true,
                    shape: 'ACP',
                    options: [
                        {
                            id: '1',
                            label: '1',
                        },
                        {
                            id: '2',
                            label: '2',
                        },
                        {
                            id: '3',
                            label: '3',
                        },
                        {
                            id: '4',
                            label: '4',
                        },
                        {
                            id: '5',
                            label: '5',
                        },
                    ],
                },
                CSA: {
                    value: '',
                    editable: true,
                    shape: 'ACP',
                    options: [
                        {
                            id: '1',
                            label: '1',
                        },
                        {
                            id: '2',
                            label: '2',
                        },
                        {
                            id: '3',
                            label: '3',
                        },
                        {
                            id: '4',
                            label: '4',
                        },
                        {
                            id: '5',
                            label: '5',
                        },
                    ],
                },
                TRA: {
                    value: '',
                    editable: true,
                    shape: 'CMB',
                    options: [
                        {
                            id: '1',
                            label: '1',
                        },
                        {
                            id: '2',
                            label: '2',
                        },
                        {
                            id: '3',
                            label: '3',
                        },
                        {
                            id: '4',
                            label: '4',
                        },
                        {
                            id: '5',
                            label: '5',
                        },
                    ],
                },
                FOR: {
                    value: '',
                    editable: true,
                    shape: 'ACP',
                    options: [
                        {
                            id: '1',
                            label: '1',
                        },
                        {
                            id: '2',
                            label: '2',
                        },
                        {
                            id: '3',
                            label: '3',
                        },
                        {
                            id: '4',
                            label: '4',
                        },
                        {
                            id: '5',
                            label: '5',
                        },
                    ],
                },
                CCF: {
                    value: '',
                    editable: true,
                    shape: 'ACP',
                    options: [
                        {
                            id: '1',
                            label: '1',
                        },
                        {
                            id: '2',
                            label: '2',
                        },
                        {
                            id: '3',
                            label: '3',
                        },
                        {
                            id: '4',
                            label: '4',
                        },
                        {
                            id: '5',
                            label: '5',
                        },
                    ],
                },
                ZON: {
                    value: '',
                    editable: true,
                    shape: 'ACP',
                    options: [
                        {
                            id: '1',
                            label: '1',
                        },
                        {
                            id: '2',
                            label: '2',
                        },
                        {
                            id: '3',
                            label: '3',
                        },
                        {
                            id: '4',
                            label: '4',
                        },
                        {
                            id: '5',
                            label: '5',
                        },
                    ],
                },
                COM: {
                    value: '',
                    editable: true,
                    shape: 'ACP',
                    options: [
                        {
                            id: '1',
                            label: '1',
                        },
                        {
                            id: '2',
                            label: '2',
                        },
                        {
                            id: '3',
                            label: '3',
                        },
                        {
                            id: '4',
                            label: '4',
                        },
                        {
                            id: '5',
                            label: '5',
                        },
                    ],
                },
                PRO: {
                    value: '',
                    editable: true,
                    shape: 'ACP',
                    options: [
                        {
                            id: '1',
                            label: '1',
                        },
                        {
                            id: '2',
                            label: '2',
                        },
                        {
                            id: '3',
                            label: '3',
                        },
                        {
                            id: '4',
                            label: '4',
                        },
                        {
                            id: '5',
                            label: '5',
                        },
                    ],
                },
                AGE: {
                    value: '',
                    editable: true,
                    shape: 'ACP',
                    options: [
                        {
                            id: '1',
                            label: '1',
                        },
                        {
                            id: '2',
                            label: '2',
                        },
                        {
                            id: '3',
                            label: '3',
                        },
                        {
                            id: '4',
                            label: '4',
                        },
                        {
                            id: '5',
                            label: '5',
                        },
                    ],
                },
                REG: {
                    value: '',
                    editable: true,
                    shape: 'ACP',
                    options: [
                        {
                            id: '1',
                            label: '1',
                        },
                        {
                            id: '2',
                            label: '2',
                        },
                        {
                            id: '3',
                            label: '3',
                        },
                        {
                            id: '4',
                            label: '4',
                        },
                        {
                            id: '5',
                            label: '5',
                        },
                    ],
                },
                NAT: {
                    value: '',
                    editable: true,
                    shape: 'ACP',
                    options: [
                        {
                            id: '1',
                            label: '1',
                        },
                        {
                            id: '2',
                            label: '2',
                        },
                        {
                            id: '3',
                            label: '3',
                        },
                        {
                            id: '4',
                            label: '4',
                        },
                        {
                            id: '5',
                            label: '5',
                        },
                    ],
                },
                RCF: {
                    value: '',
                    editable: true,
                    shape: 'ACP',
                    options: [
                        {
                            id: '1',
                            label: '1',
                        },
                        {
                            id: '2',
                            label: '2',
                        },
                        {
                            id: '3',
                            label: '3',
                        },
                        {
                            id: '4',
                            label: '4',
                        },
                        {
                            id: '5',
                            label: '5',
                        },
                    ],
                },
                ATT: {
                    value: '',
                    editable: true,
                    shape: 'ACP',
                    options: [
                        {
                            id: '1',
                            label: '1',
                        },
                        {
                            id: '2',
                            label: '2',
                        },
                        {
                            id: '3',
                            label: '3',
                        },
                        {
                            id: '4',
                            label: '4',
                        },
                        {
                            id: '5',
                            label: '5',
                        },
                    ],
                },
                CAU: {
                    value: '',
                    editable: true,
                    shape: 'ACP',
                    options: [
                        {
                            id: '1',
                            label: '1',
                        },
                        {
                            id: '2',
                            label: '2',
                        },
                        {
                            id: '3',
                            label: '3',
                        },
                        {
                            id: '4',
                            label: '4',
                        },
                        {
                            id: '5',
                            label: '5',
                        },
                    ],
                },
                LST: {
                    value: '',
                    editable: true,
                    shape: 'ACP',
                    options: [
                        {
                            id: '1',
                            label: '1',
                        },
                        {
                            id: '2',
                            label: '2',
                        },
                        {
                            id: '3',
                            label: '3',
                        },
                        {
                            id: '4',
                            label: '4',
                        },
                        {
                            id: '5',
                            label: '5',
                        },
                    ],
                },
                DOC: {
                    value: '',
                    editable: true,
                    shape: 'ACP',
                    options: [
                        {
                            id: '1',
                            label: '1',
                        },
                        {
                            id: '2',
                            label: '2',
                        },
                        {
                            id: '3',
                            label: '3',
                        },
                        {
                            id: '4',
                            label: '4',
                        },
                        {
                            id: '5',
                            label: '5',
                        },
                    ],
                },
                LDO: {
                    value: '',
                    editable: true,
                    shape: 'ITX',
                },
                TDO: {
                    value: '',
                    editable: true,
                    shape: 'RAD',
                    options: [
                        {
                            id: '1',
                            label: 'Doc. Precendete',
                        },
                        {
                            id: '2',
                            label: 'Doc. Attuale',
                        },
                    ],
                },
                DAT: {
                    value: '',
                    editable: true,
                    shape: 'ITX',
                },
                TDA: {
                    value: '',
                    editable: true,
                    shape: 'RAD',
                    options: [
                        {
                            id: '1',
                            label: 'Data Lista',
                        },
                        {
                            id: '2',
                            label: 'Data Doc. Precendete',
                        },
                    ],
                },
            },
            layout: {
                sections: [
                    {
                        content: [
                            {
                                id: 'TEL',
                                colStart: 1,
                                colEnd: 3,
                                rowStart: 1,
                                rowEnd: 1,
                            },
                            {
                                id: 'CRE',
                                colStart: 2,
                                colEnd: 2,
                                rowStart: 1,
                                rowEnd: 1,
                            },
                            {
                                id: 'CVE',
                                colStart: 1,
                                colEnd: 2,
                                rowStart: 2,
                                rowEnd: 2,
                            },
                            {
                                id: 'DIV',
                                colStart: 2,
                                colEnd: 2,
                                rowStart: 2,
                                rowEnd: 2,
                            },
                            {
                                id: 'ELA',
                                colStart: 1,
                                colEnd: 4,
                                rowStart: 3,
                                rowEnd: 3,
                            },
                            {
                                id: 'SAP',
                                colStart: 1,
                                colEnd: 4,
                                rowStart: 4,
                                rowEnd: 4,
                            },
                            {
                                id: 'ART',
                                colStart: 1,
                                colEnd: 4,
                                rowStart: 5,
                                rowEnd: 5,
                            },
                            {
                                id: 'MOA',
                                colStart: 1,
                                colEnd: 1,
                                rowStart: 6,
                                rowEnd: 6,
                            },
                            {
                                id: 'ONE',
                                colStart: 2,
                                colEnd: 2,
                                rowStart: 6,
                                rowEnd: 6,
                            },
                            {
                                id: 'MCD',
                                colStart: 3,
                                colEnd: 3,
                                rowStart: 6,
                                rowEnd: 6,
                            },
                            {
                                id: 'NET',
                                colStart: 4,
                                colEnd: 4,
                                rowStart: 6,
                                rowEnd: 6,
                            },
                        ],
                        gridCols: 4,
                        gridRows: 6,
                        gap: 2,
                    },
                    {
                        content: [
                            {
                                id: 'COD',
                                colStart: 1,
                                colEnd: 1,
                                rowStart: 1,
                                rowEnd: 1,
                            },
                            {
                                id: 'MAR',
                                colStart: 1,
                                colEnd: 1,
                                rowStart: 2,
                                rowEnd: 2,
                            },
                            {
                                id: 'FAM',
                                colStart: 2,
                                colEnd: 2,
                                rowStart: 2,
                                rowEnd: 2,
                            },
                            {
                                id: 'TAR',
                                colStart: 1,
                                colEnd: 1,
                                rowStart: 3,
                                rowEnd: 3,
                            },
                            {
                                id: 'GRM',
                                colStart: 2,
                                colEnd: 2,
                                rowStart: 3,
                                rowEnd: 3,
                            },
                            {
                                id: 'ABC',
                                colStart: 1,
                                colEnd: 1,
                                rowStart: 4,
                                rowEnd: 4,
                            },
                            {
                                id: 'MDL',
                                colStart: 2,
                                colEnd: 2,
                                rowStart: 4,
                                rowEnd: 4,
                            },
                            {
                                id: 'CSA',
                                colStart: 1,
                                colEnd: 1,
                                rowStart: 5,
                                rowEnd: 5,
                            },
                            {
                                id: 'TRA',
                                colStart: 2,
                                colEnd: 2,
                                rowStart: 5,
                                rowEnd: 5,
                            },
                            {
                                id: 'FOR',
                                colStart: 1,
                                colEnd: 1,
                                rowStart: 6,
                                rowEnd: 6,
                            },
                            {
                                id: 'CCF',
                                colStart: 2,
                                colEnd: 2,
                                rowStart: 6,
                                rowEnd: 6,
                            },
                            {
                                id: 'ZON',
                                colStart: 1,
                                colEnd: 1,
                                rowStart: 7,
                                rowEnd: 7,
                            },
                            {
                                id: 'COM',
                                colStart: 2,
                                colEnd: 2,
                                rowStart: 7,
                                rowEnd: 7,
                            },
                            {
                                id: 'PRO',
                                colStart: 3,
                                colEnd: 3,
                                rowStart: 7,
                                rowEnd: 7,
                            },
                            {
                                id: 'AGE',
                                colStart: 1,
                                colEnd: 1,
                                rowStart: 8,
                                rowEnd: 8,
                            },
                            {
                                id: 'REG',
                                colStart: 2,
                                colEnd: 2,
                                rowStart: 8,
                                rowEnd: 8,
                            },
                            {
                                id: 'NAT',
                                colStart: 3,
                                colEnd: 3,
                                rowStart: 8,
                                rowEnd: 8,
                            },
                            {
                                id: 'RCF',
                                colStart: 1,
                                colEnd: 1,
                                rowStart: 9,
                                rowEnd: 9,
                            },
                            {
                                id: 'ATT',
                                colStart: 2,
                                colEnd: 2,
                                rowStart: 9,
                                rowEnd: 9,
                            },
                            {
                                id: 'CAU',
                                colStart: 1,
                                colEnd: 1,
                                rowStart: 10,
                                rowEnd: 10,
                            },
                            {
                                id: 'LST',
                                colStart: 2,
                                colEnd: 2,
                                rowStart: 10,
                                rowEnd: 10,
                            },
                            {
                                id: 'DOC',
                                colStart: 1,
                                colEnd: 1,
                                rowStart: 11,
                                rowEnd: 11,
                            },
                            {
                                id: 'LDO',
                                colStart: 2,
                                colEnd: 2,
                                rowStart: 11,
                                rowEnd: 11,
                            },
                            {
                                id: 'TDO',
                                colStart: 3,
                                colEnd: 3,
                                rowStart: 11,
                                rowEnd: 11,
                            },
                            {
                                id: 'DAT',
                                colStart: 1,
                                colEnd: 1,
                                rowStart: 12,
                                rowEnd: 12,
                            },
                            {
                                id: 'TDA',
                                colStart: 2,
                                colEnd: 2,
                                rowStart: 12,
                                rowEnd: 12,
                            },
                        ],
                        gridCols: 3,
                        gridRows: 12,
                        gap: 2,
                    },
                ],
            },
        },
    ],
};

const inputPanel = document.getElementById('input-panel');
inputPanel.data = ergonForm;
inputPanel.submitCb = (e) => console.log(e);
