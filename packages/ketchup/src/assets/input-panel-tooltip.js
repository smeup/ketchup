const tooltipData = (hasTooltip) => {
    return {
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
            {
                editable: false,
                name: 'COL7',
                title: 'Field7',
                visible: true,
                isEditable: false,
            },
            {
                editable: false,
                name: 'COL8',
                title: 'Field8',
                visible: true,
                isEditable: false,
            },
            {
                editable: false,
                name: 'COL9',
                title: 'Field9',
                visible: true,
                isEditable: false,
            },
            {
                editable: false,
                name: 'COL10',
                title: 'Field10',
                visible: true,
                isEditable: false,
            },
            {
                editable: false,
                name: 'COL11',
                title: 'Field11',
                visible: true,
                isEditable: false,
            },
            {
                editable: false,
                name: 'COL12',
                title: 'Field12',
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
                        tooltip: hasTooltip,
                    },
                    COL2: {
                        value: 'Date',
                        obj: { t: 'D8', p: '', k: '' },
                        editable: true,
                        mandatory: true,
                        tooltip: hasTooltip,
                    },
                    COL3: {
                        value: '15',
                        shape: 'INR',
                        obj: { t: 'NR', p: '', k: '' },
                        editable: true,
                        mandatory: true,
                        tooltip: hasTooltip,
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
                        tooltip: hasTooltip,
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
                        tooltip: hasTooltip,
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
                        tooltip: hasTooltip,
                    },
                    COL7: {
                        value: 'Time',
                        shape: 'TIM',
                        obj: { t: 'I12', p: '', k: '' },
                        editable: true,
                        mandatory: true,
                        tooltip: hasTooltip,
                    },
                    COL8: {
                        value: 'Checkbox',
                        shape: 'CHK',
                        editable: true,
                        mandatory: true,
                        tooltip: hasTooltip,
                    },
                    COL9: {
                        value: 'Object',
                        shape: 'OBJ',
                        editable: true,
                        mandatory: true,
                        tooltip: hasTooltip,
                    },
                    COL10: {
                        value: 'Chip',
                        shape: 'CHI',
                        editable: true,
                        mandatory: true,
                        tooltip: hasTooltip,
                    },
                    COL11: {
                        shape: 'AML',
                        editable: true,
                        mandatory: true,
                        tooltip: hasTooltip,
                    },
                    COL12: {
                        value: 'Button',
                        shape: 'BTN',
                        editable: true,
                        mandatory: true,
                        tooltip: hasTooltip,
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
                        {
                            content: [
                                {
                                    id: 'COL7',
                                },
                                {
                                    id: 'COL8',
                                },
                                {
                                    id: 'COL9',
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
                                    id: 'COL10',
                                },
                                {
                                    id: 'COL11',
                                },
                                {
                                    id: 'COL12',
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
};

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

// with tooltip
const tooltip = document.getElementById('with-tooltip');
tooltip.addEventListener('kup-inputpanel-contextmenu', tooltipShow);
tooltip.data = tooltipData(true);

// without tooltip
const noTooltip = document.getElementById('without-tooltip');
noTooltip.addEventListener('kup-inputpanel-contextmenu', tooltipShow);
noTooltip.data = tooltipData(false);
