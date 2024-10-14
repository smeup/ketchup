const toolbarData = {
    columns: [
        {
            name: 'BUTTON1',
            title: 'Button1',
            visible: true,
        },
        {
            name: 'BUTTON2',
            title: 'Button2',
            visible: true,
        },
        {
            name: 'BUTTON3',
            title: 'Button2',
            visible: true,
        },
    ],
    rows: [
        {
            cells: {
                BUTTON1: {
                    value: 'Setup di scheda 2',
                    obj: { t: '', p: '' },
                    editable: true,
                    mandatory: true,
                    data: {},
                    options: [
                        // layer interno
                        {
                            label: 'Setup 1 - CMP',

                            id: 'value1',
                        },
                        {
                            label: 'Setup 2 - CMB',
                            id: 'value2',
                        },
                    ],
                    children: [
                        {
                            value: 'click here',
                            obj: { t: '', p: '' },
                            editable: true,
                            mandatory: true,
                            options: [
                                // layer interno
                                {
                                    label: 'Setup 1',

                                    id: 'value1',
                                },
                                {
                                    label: 'Setup 2',
                                    id: 'value2',
                                },
                            ],
                        },
                    ],
                },
                BUTTON2: {
                    value: 'Refresh',
                    obj: { t: '', p: '' },
                    editable: true,
                    mandatory: true,
                    data: {},
                    exec: 'REFRESH([SEZID])',
                },
                BUTTON3: {
                    value: 'Maximize',
                    obj: { t: '', p: '' },
                    editable: true,
                    mandatory: true,
                    exec: 'MAXIMIZE([SEZID])',
                },
            },
        },
    ],
};

const esempio = document.getElementById('esempio');
esempio.data = toolbarData;

console.log(toolbarData);
