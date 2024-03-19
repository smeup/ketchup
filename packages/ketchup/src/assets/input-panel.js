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
            },
        },
    ],
};

const inputPanel = document.getElementById('input-panel');
inputPanel.data = data;
