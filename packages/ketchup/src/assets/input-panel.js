const data = {
    columns: [
        {
            name: 'PNL',
            title: 'Input Panel',
        },
        {
            name: 'NAM',
            title: 'Name',
        },
        {
            name: 'SUR',
            title: 'Surname',
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
                },
                SUR: {
                    value: 'Totti',
                    obj: {
                        t: 'CN',
                        p: 'COL',
                        k: '',
                    },
                    editable: true,
                    mandatory: true,
                },
            },
        },
    ],
};

const inputPanel = document.getElementById('input-panel');
inputPanel.data = data;
