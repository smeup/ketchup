document.addEventListener('kup-accordion-treenodeselected', (e) =>
    console.log(e)
);

document.addEventListener('kup-accordion-itemselected', (e) => console.log(e));

document.addEventListener('kup-accordion-treenodeexpanded', (e) =>
    console.log(e)
);

document.addEventListener('kup-accordion-itemexpanded', (e) => console.log(e));

document.addEventListener('kup-accordion-treenodecollapsed', (e) =>
    console.log(e)
);

document.addEventListener('kup-accordion-itemcollapsed', (e) => console.log(e));

const ksData = {
    columns: [
        {
            name: 'FLD1',
            title: 'Dashboard',
            icon: 'compass-outline',
        },
        {
            name: 'FLD2',
            title: 'People',
        },
        {
            name: 'FLD3',
            title: 'Buy',
            icon: 'add_shopping_cart',
        },
        {
            name: 'FLD4',
            title: 'All Locations',
        },
    ],
    rows: [
        {
            cells: {
                FLD1: {
                    data: {
                        selectedNode: [0, 1],
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
                                        icon: '',
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
                                isExpanded: true,
                                options: false,
                                value: 'Favorites',
                            },
                            {
                                disabled: false,
                                expandable: true,
                                icon: '',
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
                                icon: '',
                                id: '',
                                isExpanded: false,
                                options: false,
                                value: 'Our Locations',
                            },
                            {
                                disabled: false,
                                expandable: true,
                                icon: '',
                                id: '',
                                isExpanded: false,
                                options: false,
                                value: 'Customers Locations',
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

const ksAccordion = document.getElementById('ks');
ksAccordion.data = ksData;
ksAccordion.globalFilter = 'true';
ksAccordion.selectedItemsNames = 'FLD1';

const emptyAccordion = document.getElementById('empty');
emptyAccordion.data = {};
