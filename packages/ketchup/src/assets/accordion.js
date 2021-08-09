document.addEventListener('kup-accordion-treenodeselected', (e) =>
    console.log(e)
);

document.addEventListener('kup-accordion-itemselected', (e) => console.log(e));

const data = {
    columns: [
        {
            name: 'FLD1',
            title: 'Dashboard',
        },
        {
            name: 'FLD2',
            title: 'People',
        },
        {
            name: 'FLD3',
            title: 'Buy',
        },
        {
            name: 'FLD4',
            title: 'Locations',
        },
    ],
    rows: [
        {
            cells: {
                FLD1: {
                    data: {
                        data: [
                            {
                                children: [
                                    {
                                        disabled: false,
                                        expandable: true,
                                        icon: 'accessibility',
                                        id: '',
                                        isExpanded: false,
                                        options: false,
                                        value: 'Primary',
                                    },
                                    {
                                        disabled: false,
                                        expandable: true,
                                        icon: 'account_box',
                                        id: '',
                                        isExpanded: false,
                                        options: false,
                                        value: 'Secondary',
                                    },
                                    {
                                        disabled: false,
                                        expandable: true,
                                        icon: 'ac_unit',
                                        id: '',
                                        isExpanded: false,
                                        options: false,
                                        value: 'Third',
                                    },
                                ],
                                disabled: false,
                                expandable: true,
                                icon: 'filter_2',
                                id: '',
                                isExpanded: false,
                                options: false,
                                value: 'Favorites',
                            },
                            {
                                disabled: false,
                                expandable: true,
                                icon: '3d_rotation',
                                id: '',
                                isExpanded: false,
                                options: false,
                                value: 'Account',
                            },
                            {
                                disabled: false,
                                expandable: true,
                                icon: 'book',
                                id: '',
                                isExpanded: false,
                                options: false,
                                value: 'Chronology',
                            },
                        ],
                    },
                    shape: 'TRE',
                },
                FLD2: {
                    data: {
                        data: [
                            {
                                children: [
                                    {
                                        disabled: false,
                                        expandable: true,
                                        icon: 'warning',
                                        id: '',
                                        isExpanded: false,
                                        options: false,
                                        value: 'By province',
                                    },
                                    {
                                        disabled: false,
                                        expandable: true,
                                        icon: 'magnify',
                                        id: '',
                                        isExpanded: false,
                                        options: false,
                                        value: 'By region',
                                    },
                                ],
                                disabled: false,
                                expandable: true,
                                icon: 'star',
                                id: '',
                                isExpanded: false,
                                options: false,
                                value: 'Customers',
                            },
                            {
                                disabled: false,
                                expandable: true,
                                icon: 'rename-box',
                                id: '',
                                isExpanded: false,
                                options: false,
                                value: 'Employees',
                            },
                            {
                                disabled: false,
                                expandable: true,
                                icon: 'thumb-up',
                                id: '',
                                isExpanded: false,
                                options: false,
                                value: 'Suppliers',
                            },
                        ],
                    },
                    shape: 'TRE',
                },
                FLD4: {
                    data: {
                        data: [
                            {
                                disabled: false,
                                expandable: true,
                                icon: 'omega',
                                id: '',
                                isExpanded: false,
                                options: false,
                                value: 'Our Locations',
                            },
                            {
                                disabled: false,
                                expandable: true,
                                icon: 'view-quilt',
                                id: '',
                                isExpanded: false,
                                options: false,
                                value: 'Customers locations',
                            },
                        ],
                    },
                    shape: 'TRE',
                },
            },
            id: '1',
            readOnly: false,
        },
    ],
    key: '123',
};

const accordion = document.getElementById('first');
accordion.data = data;
accordion.globalFilter = 'true';
