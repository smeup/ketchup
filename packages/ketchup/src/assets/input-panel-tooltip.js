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
            name: 'NAM',
            title: 'Name',
            visible: true,
        },
        {
            editable: false,
            name: 'INP1',
            title: 'Field1',
            visible: true,
            isEditable: false,
        },
        {
            editable: false,
            name: 'INP2',
            title: 'Field2',
            visible: true,
            isEditable: false,
        },
    ],
    rows: [
        {
            cells: {
                NAM: {
                    value: 'Giovanni',
                    obj: { t: '', p: '', k: '' },
                    tooltip: false,
                    editable: true,
                    mandatory: true,
                    shape: 'ITX',
                },
                INP1: {
                    value: '',
                    obj: { t: 'D8', p: '', k: '' },
                    tooltip: true,
                    editable: true,
                    mandatory: true,
                },
                INP2: {
                    value: '',
                    obj: { t: 'NR', p: '' },
                    tooltip: true,
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
                                id: 'NAM',
                            },
                            {
                                id: 'INP1',
                            },
                            {
                                id: 'INP2',
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
