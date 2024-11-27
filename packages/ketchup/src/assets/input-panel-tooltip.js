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
    ],
    rows: [
        {
            cells: {
                COL1: {
                    value: 'Plain',
                    obj: { t: '', p: '', k: '' },
                    tooltip: false,
                    editable: true,
                    mandatory: true,
                    shape: 'ITX',
                },
                COL2: {
                    value: 'Date',
                    obj: { t: 'D8', p: '', k: '' },
                    tooltip: true,
                    editable: true,
                    mandatory: true,
                },
                COL3: {
                    value: '15',
                    obj: { t: 'NR', p: '', k: '' },
                    tooltip: true,
                    editable: false,
                    mandatory: true,
                },
                COL4: {
                    value: 'ACP',
                    shape: 'ACP',
                    obj: { t: 'NR', p: '', k: '' },
                    tooltip: true,
                    editable: false,
                    mandatory: true,
                },
                COL5: {
                    value: 'CMB',
                    shape: 'CMB',
                    obj: { t: 'NR', p: '', k: '' },
                    editable: false,
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
