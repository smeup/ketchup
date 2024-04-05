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
            title: 'City',
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
                    options: [
                        {
                            id: 'ROM',
                            label: 'Rome',
                        },
                        {
                            id: 'FLO',
                            label: 'Florence',
                        },
                        {
                            id: 'VEN',
                            label: 'Venice',
                        },
                        {
                            id: 'MAD',
                            label: 'Madrid',
                        },
                        {
                            id: 'BAR',
                            label: 'Barcelona',
                        },
                        {
                            id: 'SEV',
                            label: 'Seville',
                        },
                        {
                            id: 'BER',
                            label: 'Berlin',
                        },
                        {
                            id: 'MUN',
                            label: 'Munich',
                        },
                        {
                            id: 'HAM',
                            label: 'Hamburg',
                        },
                        {
                            id: 'PAR',
                            label: 'Paris',
                        },
                        {
                            id: 'MAR',
                            label: 'Marseille',
                        },
                        {
                            id: 'LYO',
                            label: 'Lyon',
                        },
                        {
                            id: 'LIS',
                            label: 'Lisbon',
                        },
                        {
                            id: 'POR',
                            label: 'Porto',
                        },
                        {
                            id: 'FAR',
                            label: 'Faro',
                        },
                        {
                            id: 'LON',
                            label: 'London',
                        },
                        {
                            id: 'MAN',
                            label: 'Manchester',
                        },
                        {
                            id: 'LIV',
                            label: 'Liverpool',
                        },
                    ],
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
