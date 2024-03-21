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
    ],
    rows: [
        {
            cells: {
                NAM: {
                    value: 'Francesco',
                    obj: {
                        t: 'CN',
                        p: 'COL',
                        k: '',
                    },
                    editable: true,
                    mandatory: true,
                    shape: 'ITX',
                },
                SUR: {
                    value: 'Totti',
                    obj: {
                        t: 'CN',
                        p: 'COL',
                        k: '',
                    },
                    editable: false,
                    mandatory: true,
                    shape: 'ITX',
                },
                NAT: {
                    value: 'It',
                    options: [
                        { id: 'It', label: 'Italy' },
                        { id: 'Sp', label: 'Spain' },
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
                    value: 'Rom',
                    obj: {
                        t: '',
                        p: '',
                        k: '',
                    },
                    editable: true,
                    mandatory: true,
                    options: [
                        { id: 'Rom', label: 'Roma' },
                        { id: 'Flam', label: 'Flaminio' },
                        { id: 'PorMet', label: 'Porta Metronia' },
                        { id: 'Garbat', label: 'Garbatella' },
                    ],
                    shape: 'ACP',
                },
            },
        },
    ],
};

const inputPanel = document.getElementById('input-panel');
inputPanel.data = data;
