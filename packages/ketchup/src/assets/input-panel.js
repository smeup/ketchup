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
            name: 'COL',
            title: 'Color Shirt',
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
            name: 'CAM',
            title: 'Campionato vinto',
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
                        t: '',
                        p: '',
                        k: '',
                    },
                    editable: true,
                    mandatory: true,
                    shape: 'INF',
                },
                COL: {
                    value: '#8E1F2F',
                    obj: {
                        t: '',
                        p: '',
                        k: '',
                    },
                    editable: true,
                    mandatory: true,
                    shape: 'CLP',
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
                CAM: {
                    value: 'on',
                    obj: {
                        t: '',
                        p: '',
                        k: '',
                    },
                    editable: true,
                    mandatory: true,
                    shape: 'CHK',
                },
            },
        },
    ],
};

const inputPanel = document.getElementById('input-panel');
inputPanel.data = data;
