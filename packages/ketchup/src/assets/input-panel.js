let data = {
    columns: [
        {
            name: 'NAM',
            title: 'Name',
            visible: true,
        },
        {
            name: 'SUR',
            title: 'Surname',
            visible: true,
        },
        {
            name: 'NAT',
            title: 'Nation',
            visible: true,
        },
        {
            name: 'CIT',
            title: 'Tree Options',
            visible: true,
        },
        {
            name: 'LIS',
            title: 'Table Options',
            visible: true,
        },
        {
            name: 'CHK',
            title: 'Checkbox',
            visible: true,
        },
        {
            name: 'RAD',
            title: 'Radio Buttons',
            visible: true,
        },
    ],
    rows: [
        {
            cells: {
                NAM: {
                    value: '',
                    obj: {
                        t: '',
                        p: '',
                        k: '',
                    },
                    editable: true,
                    mandatory: true,
                    shape: 'ITX',
                },
                SUR: {
                    value: '',
                    obj: {
                        t: '',
                        p: '',
                        k: '',
                    },
                    editable: true,
                    mandatory: true,
                    shape: 'ITX',
                },
                NAT: {
                    value: '',
                    options: [
                        {
                            id: 'ITA',
                            label: 'Italy',
                        },
                        {
                            id: 'SPA',
                            label: 'Spain',
                        },
                        {
                            id: 'GER',
                            label: 'Germany',
                        },
                        {
                            id: 'FRA',
                            label: 'France',
                        },
                        {
                            id: 'POR',
                            label: 'Portugal',
                        },
                        {
                            id: 'ENG',
                            label: 'England',
                        },
                    ],
                    obj: {
                        t: '',
                        p: '',
                        k: '',
                    },
                    editable: true,
                    mandatory: true,
                    shape: 'CMB',
                },
                CIT: {
                    value: '',
                    obj: {
                        t: '',
                        p: '',
                        k: '',
                    },
                    editable: true,
                    mandatory: true,
                    options: {
                        type: 'SmeupTree',
                        messages: [],
                        children: [
                            {
                                content: {
                                    codice: 'ROM',
                                    testo: 'Rome',
                                },
                                children: [
                                    {
                                        content: {
                                            codice: 'ROS',
                                            testo: 'Rome Sud',
                                        },
                                        children: [],
                                    },
                                    {
                                        content: {
                                            codice: 'RON',
                                            testo: 'Rome Nord',
                                        },
                                        children: [],
                                    },
                                ],
                            },
                            {
                                content: {
                                    codice: 'FLO',
                                    testo: 'Florence',
                                },
                                children: [],
                            },
                            {
                                content: {
                                    codice: 'VEN',
                                    testo: 'Venice',
                                },
                            },
                            {
                                content: {
                                    codice: 'MAD',
                                    testo: 'Madrid',
                                },
                            },
                            {
                                content: {
                                    codice: 'BAR',
                                    testo: 'Barcelona',
                                },
                            },
                            {
                                content: {
                                    codice: 'SEV',
                                    testo: 'Seville',
                                },
                            },
                            {
                                content: {
                                    codice: 'BER',
                                    testo: 'Berlin',
                                },
                            },
                            {
                                content: {
                                    codice: 'MUN',
                                    testo: 'Munich',
                                },
                            },
                            {
                                content: {
                                    codice: 'HAM',
                                    testo: 'Hamburg',
                                },
                            },
                            {
                                content: {
                                    codice: 'PAR',
                                    testo: 'Paris',
                                },
                            },
                            {
                                content: {
                                    codice: 'MAR',
                                    testo: 'Marseille',
                                },
                            },
                            {
                                content: {
                                    codice: 'LYO',
                                    testo: 'Lyon',
                                },
                            },
                            {
                                content: {
                                    codice: 'LIS',
                                    testo: 'Lisbon',
                                },
                            },
                            {
                                content: {
                                    codice: 'POR',
                                    testo: 'Porto',
                                },
                            },
                            {
                                content: {
                                    codice: 'FAR',
                                    testo: 'Faro',
                                },
                            },
                            {
                                content: {
                                    codice: 'LON',
                                    testo: 'London',
                                },
                            },
                            {
                                content: {
                                    codice: 'MAN',
                                    testo: 'Manchester',
                                },
                            },
                            {
                                content: {
                                    codice: 'LIV',
                                    testo: 'Liverpool',
                                },
                            },
                        ],
                    },
                    shape: 'ACP',
                },
                LIS: {
                    value: '',
                    obj: {
                        t: '',
                        p: '',
                        k: '',
                    },
                    editable: true,
                    mandatory: true,
                    options: {
                        type: 'SmeupTable',
                        messages: [],
                        rows: [
                            {
                                fields: {
                                    E1: {
                                        smeupObject: {
                                            codice: 'E1',
                                            testo: 'Element 1',
                                        },
                                    },
                                    E2: {
                                        smeupObject: {
                                            codice: 'E2',
                                            testo: 'Element 2',
                                        },
                                    },
                                    E3: {
                                        smeupObject: {
                                            codice: 'E3',
                                            testo: 'Element 3',
                                        },
                                    },
                                },
                            },
                            {
                                fields: {
                                    E4: {
                                        smeupObject: {
                                            codice: 'E4',
                                            testo: 'Element 4',
                                        },
                                    },
                                    E5: {
                                        smeupObject: {
                                            codice: 'E5',
                                            testo: 'Element 5',
                                        },
                                    },
                                    E6: {
                                        smeupObject: {
                                            codice: 'E6',
                                            testo: 'Element 6',
                                        },
                                    },
                                },
                            },
                            {
                                fields: {
                                    E14: {
                                        smeupObject: {
                                            codice: 'E14',
                                            testo: 'Element 14',
                                        },
                                    },
                                    E15: {
                                        smeupObject: {
                                            codice: 'E15',
                                            testo: 'Element 15',
                                        },
                                    },
                                    E16: {
                                        smeupObject: {
                                            codice: 'E16',
                                            testo: 'Element 16',
                                        },
                                    },
                                },
                            },
                        ],
                    },
                    shape: 'ACP',
                },
                CHK: {
                    value: 'on',
                    editable: true,
                    mandatory: true,
                    shape: 'CHK',
                },
                RAD: {
                    value: '3',
                    options: [
                        {
                            id: '1',
                            label: 'One',
                        },
                        {
                            id: '2',
                            label: 'Two',
                        },
                        {
                            id: '3',
                            label: 'Three',
                        },
                        {
                            id: '4',
                            label: 'Four',
                        },
                    ],
                    editable: true,
                    mandatory: true,
                    shape: 'RAD',
                },
            },
            layout: {
                sections: [
                    {
                        content: [
                            {
                                id: 'NAM',
                                colStart: 1,
                                colEnd: 1,
                                rowStart: 1,
                                rowEnd: 1,
                            },
                            {
                                id: 'SUR',
                                colStart: 2,
                                colEnd: 2,
                                rowStart: 1,
                                rowEnd: 1,
                            },
                            {
                                id: 'NAT',
                                colStart: 1,
                                colEnd: 1,
                                rowStart: 2,
                                rowEnd: 2,
                            },
                            {
                                id: 'CIT',
                                colStart: 2,
                                colEnd: 2,
                                rowStart: 2,
                                rowEnd: 2,
                            },
                            {
                                id: 'CHK',
                                colStart: 1,
                                colEnd: 1,
                                rowStart: 3,
                                rowEnd: 3,
                            },
                            {
                                id: 'RAD',
                                colSpan: 2,
                                rowStart: 3,
                                rowEnd: 3,
                            },
                            {
                                id: 'LIS',
                                colStart: 3,
                                colEnd: 3,
                                rowStart: 2,
                                rowEnd: 2,
                            },
                        ],
                        dim: '50%',
                        gridCols: 3,
                        gridRows: 3,
                        gap: 2,
                    },
                ],
                horizontal: true,
            },
        },
    ],
};

const inputPanel = document.getElementById('input-panel');
inputPanel.data = data;

const inputPanelCallback = [
    {
        eventName: 'kup-autocomplete-input',
        eventCallback: (e) => {
            const newdata = {
                ...data,
                rows: data.rows.map((row) => {
                    const keys = Object.keys(row.cells);
                    const updatedCells = keys.reduce((acc, key) => {
                        let updatedValue = e.state.find(
                            (state) => state.column.name === key
                        ).cell.value;
                        return {
                            ...acc,
                            [key]: {
                                ...row.cells[key],
                                value: updatedValue,
                            },
                        };
                    }, {});
                    return { ...row, cells: updatedCells };
                }),
            };
            const inputPanel = document.getElementById('input-panel');
            inputPanel.data = newdata;
        },
    },
];

inputPanel.valueChangeCb = inputPanelCallback;
inputPanel.submitCb = (e) => console.log(e);
