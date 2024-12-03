const tooltip = document.getElementById('with-tooltip');

const tooltipShow = (e) => {
    const anchor = e.detail.details.anchor;
    const cell = e.detail.details.cell;
    const column = e.detail.details.column;

    if (cell.tooltip) {
        kupManager.tooltip.show(anchor, {
            data: {
                text: [`Tooltip: ${column.name}`],
            },
        });
    }
};

tooltip.addEventListener('kup-inputpanel-contextmenu', tooltipShow);

const tooltipData = {
    columns: [
        {
            name: 'COL1',
            title: 'Name',
            visible: true,
        },
        {
            editable: false,
            name: 'COL2',
            title: 'Field1',
            visible: true,
            isEditable: false,
        },
        {
            editable: false,
            name: 'COL3',
            title: 'Field2',
            visible: true,
            isEditable: false,
        },
        {
            editable: false,
            name: 'COL4',
            title: 'Field4',
            visible: true,
            isEditable: false,
        },
        {
            editable: false,
            name: 'COL5',
            title: 'Field5',
            visible: true,
            isEditable: false,
        },
        {
            editable: false,
            name: 'COL6',
            title: 'Field6',
            visible: true,
            isEditable: false,
        },
    ],
    rows: [
        {
            cells: {
                COL1: {
                    value: 'Plain',
                    obj: { t: '', p: '', k: '' },
                    editable: true,
                    mandatory: true,
                    shape: 'ITX',
                    tooltip: false,
                },
                COL2: {
                    value: 'Date',
                    obj: { t: 'D8', p: '', k: '' },
                    editable: true,
                    mandatory: true,
                    tooltip: true,
                },
                COL3: {
                    value: '15',
                    obj: { t: 'NR', p: '', k: '' },
                    editable: false,
                    mandatory: true,
                    tooltip: true,
                },
                COL4: {
                    shape: 'ACP',
                    data: {
                        data: {
                            'kup-list': {
                                data: [
                                    {
                                        value: 'Text 1',
                                        secondaryText: 'Secondary text 1',
                                        id: 'txt1',
                                        icon: '3d_rotation',
                                    },
                                    {
                                        value: 'Text 2',
                                        id: 'txt2',
                                        icon: 'ac_unit',
                                    },
                                    {
                                        value: 'Text 3',
                                        id: 'txt3',
                                        icon: 'accessibility',
                                    },
                                    {
                                        value: 'Text 4',
                                        id: 'txt4',
                                        icon: 'account_box',
                                        separator: true,
                                    },
                                    {
                                        value: 'Text 5',
                                        id: 'txt5',
                                        selected: true,
                                    },
                                ],
                            },
                        },
                    },
                    editable: true,
                    mandatory: true,
                    tooltip: true,
                },
                COL5: {
                    shape: 'CMB',
                    data: {
                        data: {
                            'kup-list': {
                                data: [
                                    {
                                        value: 'Text 1',
                                        secondaryText: 'Secondary text 1',
                                        id: 'txt1',
                                        icon: '3d_rotation',
                                    },
                                    {
                                        value: 'Text 2',
                                        id: 'txt2',
                                        icon: 'ac_unit',
                                    },
                                    {
                                        value: 'Text 3',
                                        id: 'txt3',
                                        icon: 'accessibility',
                                    },
                                    {
                                        value: 'Text 4',
                                        id: 'txt4',
                                        icon: 'account_box',
                                        separator: true,
                                    },
                                    {
                                        value: 'Text 5',
                                        id: 'txt5',
                                        selected: true,
                                    },
                                ],
                            },
                        },
                    },
                    editable: true,
                    mandatory: true,
                },
                COL6: {
                    shape: 'RAD',
                    data: {
                        data: [
                            {
                                value: 'Favorites',
                                label: 'label 1',
                                checked: false,
                            },
                            {
                                value: 'Set alarm clock',
                                label: 'label 2',
                                checked: true,
                            },
                            {
                                value: 'Settings',
                                label: 'label 3',
                                checked: false,
                            },
                        ],
                    },
                    editable: true,
                    mandatory: true,
                },
            },
            layout: {
                type: 'SmeupDataLayout',
                horizontal: false,
                sections: [
                    {
                        content: [
                            {
                                id: 'COL1',
                            },
                            {
                                id: 'COL2',
                            },
                            {
                                id: 'COL3',
                            },
                        ],
                        sections: [],
                        horizontal: true,
                        gridCols: 3,
                        gridRows: 1,
                        gap: 2,
                    },
                    {
                        content: [
                            {
                                id: 'COL4',
                            },
                            {
                                id: 'COL5',
                            },
                            {
                                id: 'COL6',
                            },
                        ],
                        sections: [],
                        horizontal: true,
                        gridCols: 3,
                        gridRows: 1,
                        gap: 2,
                    },
                ],
            },
        },
    ],
};

tooltip.data = tooltipData;
