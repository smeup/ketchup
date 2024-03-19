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
        {
            name: 'CIT',
            title: 'City',
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
                    value: 'Italy',
                    data: {
                        'kup-text-field': {
                            trailingIcon: true,
                            label: 'Label',
                            icon: 'arrow_drop_down',
                        },
                        'kup-list': {
                            data: [
                                {
                                    value: 'Italy',
                                    id: 'Italy',
                                    selected: true,
                                },
                                {
                                    value: 'Spain',
                                    id: 'Spain',
                                    selected: false,
                                },
                            ],
                            showIcons: true,
                        },
                    },
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
                CIT: {
                    value: 'Rome',
                    obj: {
                        t: '',
                        p: '',
                        k: '',
                    },
                    editable: true,
                    mandatory: true,
                    options: false,
                    shape: 'ACP',
                },
            },
        },
    ],
};

const inputPanel = document.getElementById('input-panel');
inputPanel.data = data;
