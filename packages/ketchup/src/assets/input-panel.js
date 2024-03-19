const data = {
    columns: [
        {
            name: 'PNL',
            title: 'Input Panel',
            visible: true,
        },
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
    ],
    rows: [
        {
            cells: {
                PNL: {
                    value: '',
                    obj: {
                        t: 'CN',
                        p: 'COL',
                        k: '',
                    },
                    editable: true,
                    mandatory: true,
                },
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
                    value: 'CODE_2',
                    obj: {
                        t: '',
                        p: '',
                        k: '',
                    },
                    editable: true,
                    mandatory: true,
                    options: false,
                    shape: 'CMB',
                },
            },
        },
    ],
};

const inputPanel = document.getElementById('input-panel');
inputPanel.data = data;
