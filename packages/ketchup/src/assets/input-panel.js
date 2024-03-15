const data = {
    columns: [
        {
            name: 'PNL',
            title: 'Input Panel',
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
            },
        },
    ],
};

const inputPanel = document.getElementById('input-panel');
inputPanel.data = data;
