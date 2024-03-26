const data = {
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
                        'Italy',
                        'Spain',
                        'Germany',
                        'France',
                        'Portugal',
                        'England',
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
                        'Rome',
                        'Florence',
                        'Venice',
                        'Madrid',
                        'Barcelona',
                        'Seville',
                        'Berlin',
                        'Munich',
                        'Hamburg',
                        'Paris',
                        'Marseille',
                        'Lyon',
                        'Lisbon',
                        'Porto',
                        'Faro',
                        'London',
                        'Manchester',
                        'Liverpool',
                    ],
                    shape: 'ACP',
                },
                CHK: {
                    value: 'on',
                    obj: {
                        t: 'V2',
                        p: 'SI/NO',
                        k: '',
                    },
                    editable: true,
                    mandatory: true,
                },
                RAD: {
                    value: '1',
                    options: ['1', '2', '3', '4'],
                    editable: true,
                    mandatory: true,
                    shape: 'RAD',
                },
            },
            layout: {},
        },
    ],
};

const inputPanel = document.getElementById('input-panel');
inputPanel.data = data;
