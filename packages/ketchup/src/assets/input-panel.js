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
                    value: 'Italy',
                    options: {
                        'kup-text-field': {
                            trailingIcon: true,
                            label: 'Nation',
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
                    options: {
                        'kup-text-field': {
                            trailingIcon: true,
                            label: 'City',
                            icon: 'arrow_drop_down',
                        },
                        'kup-list': {
                            data: [
                                {
                                    value: 'Roma',
                                    id: 'Roma',
                                    selected: true,
                                },
                                {
                                    value: 'Flaminio',
                                    id: 'Flaminio',
                                    selected: false,
                                },
                                {
                                    value: 'Porta Metronia',
                                    id: 'Porta Metronia',
                                    selected: false,
                                },
                                {
                                    value: 'Garbatella',
                                    id: 'Garbatella',
                                    selected: false,
                                },
                            ],
                            showIcons: true,
                        },
                    },
                    shape: 'ACP',
                },
            },
        },
    ],
};

const inputPanel = document.getElementById('input-panel');
inputPanel.data = data;
