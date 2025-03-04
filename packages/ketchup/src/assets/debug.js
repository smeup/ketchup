// Replace the object below with yours.
const compName = 'kup-data-table';

// Replace the props below with yours.
const props = {
    data: {
        updatableData: true,
        type: 'SmeupDataTable',
        columns: [
            {
                name: 'COL1',
                title: 'Column 4 (depends on Column 5)',
                visible: true,
                obj: {
                    t: 'CN',
                    p: 'CLI',
                    k: '',
                },
                maxLength: 15,
                length: 15,
                shape: 'ACP',
            },
            {
                name: 'COL2',
                title: 'Comumn 5',
                visible: true,
                obj: {
                    t: 'CN',
                    p: 'AZI',
                    k: '',
                },
                maxLength: 2,
                length: 2,
                shape: 'AML',
            },
        ],
        rows: [
            {
                cells: {
                    COL1: {
                        value: '710001',
                        obj: {
                            t: 'CN',
                            p: 'CLI',
                            k: '710001',
                        },
                        editable: true,
                        shape: 'ACP',
                        tooltip: true,
                        data: {
                            data: {
                                'kup-text-field': {
                                    trailingIcon: true,
                                    label: '',
                                },
                                'kup-list': {
                                    showIcons: true,
                                    data: [],
                                },
                            },
                            initialValue: '710001',
                            label: '',
                            size: 15,
                            maxLength: 15,
                            displayMode: 'Both',
                            legacyLook: false,
                            showMarker: true,
                        },
                        inputSettings: {
                            checkValueOnExit: true,
                        },
                        decode: 'CNCLI 710001 Decode',
                        isEditable: true,
                        style: {},
                        fun: 'F(EXB;LOA10_SE;ELK.COM) 1([T1];[P1];)  P(K([K1]) RPa(500))',
                        element: {
                            's-hn': 'KUP-DATA-TABLE',
                        },
                    },
                    COL2: {
                        value: '49',
                        decode: 'CNAZI 49 Decode',
                        obj: {
                            t: 'CN',
                            p: 'AZI',
                            k: '49',
                        },
                        editable: true,
                        shape: 'AML',
                        tooltip: true,
                        data: {
                            size: 2,
                            maxLength: 2,
                            displayMode: 'Both',
                            legacyLook: false,
                            showMarker: true,
                        },
                        isEditable: true,
                        style: {},
                        fun: 'F(EXB;LOA10_SE;ELK.COM) 1([T1];[P1];)  P(K([K1]) RPa(500))',
                        element: {
                            's-hn': 'KUP-DATA-TABLE',
                        },
                    },
                },
                id: '0',
            },
        ],
    },
};

const wrapper = document.querySelector('#debug-wrapper');
if (props) {
    const comp = document.createElement(compName);
    for (const key in props) {
        comp[key] = props[key];
    }
    wrapper.append(comp);
} else {
    const span = document.createElement('span');
    span.innerText = 'Did you forget to paste your props?';
    wrapper.append(span);
}

// {
//     "type": "SmeupDataTable",
//     "columns": [
//         {
//             "name": "COL1",
//             "title": "Column 4 (depends on Column 5)",
//             "visible": true,
//             "obj": {
//                 "t": "CN",
//                 "p": "CLI",
//                 "k": ""
//             },
//             "maxLength": 15,
//             "length": 15,
//             "shape": "ACP"
//         },
//         {
//             "name": "COL2",
//             "title": "Comumn 5",
//             "visible": true,
//             "obj": {
//                 "t": "CN",
//                 "p": "AZI",
//                 "k": ""
//             },
//             "maxLength": 2,
//             "length": 2,
//             "shape": "AML"
//         }
//     ],
//     "rows": [
//         {
//             "cells": {
//                 "COL1": {
//                     "value": "710001",
//                     "obj": {
//                         "t": "CN",
//                         "p": "CLI",
//                         "k": "710001"
//                     },
//                     "editable": true,
//                     "shape": "ACP",
//                     "tooltip": true,
//                     "data": {
//                         "data": {
//                             "kup-text-field": {
//                                 "trailingIcon": true,
//                                 "label": ""
//                             },
//                             "kup-list": {
//                                 "showIcons": true,
//                                 "data": []
//                             }
//                         },
//                         "initialValue": "710001",
//                         "label": "",
//                         "size": 15,
//                         "maxLength": 15,
//                         "displayMode": "Both",
//                         "legacyLook": false,
//                         "showMarker": true
//                     },
//                     "inputSettings": {
//                         "checkValueOnExit": true
//                     },
//                     "decode": "CNCLI 710001 Decode",
//                     "isEditable": true,
//                     "style": {},
//                     "fun": "F(EXB;LOA10_SE;ELK.COM) 1([T1];[P1];)  P(K([K1]) RPa(500))",
//                     "element": {
//                         "s-hn": "KUP-DATA-TABLE"
//                     }
//                 },
//                 "COL2": {
//                     "value": "49",
//                     "decode": "CNAZI 49 Decode",
//                     "obj": {
//                         "t": "CN",
//                         "p": "AZI",
//                         "k": "49"
//                     },
//                     "editable": true,
//                     "shape": "AML",
//                     "tooltip": true,
//                     "data": {
//                         "size": 2,
//                         "maxLength": 2,
//                         "displayMode": "Both",
//                         "legacyLook": false,
//                         "showMarker": true
//                     },
//                     "isEditable": true,
//                     "style": {},
//                     "fun": "F(EXB;LOA10_SE;ELK.COM) 1([T1];[P1];)  P(K([K1]) RPa(500))",
//                     "element": {
//                         "s-hn": "KUP-DATA-TABLE"
//                     }
//                 }
//             },
//             "id": "0"
//         }
//     ]
// }
