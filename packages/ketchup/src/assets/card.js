addEventListener('kupCardEvent', (e) => {
    console.log(e);
});

const cards = document.querySelectorAll('kup-card');

for (let index = 0; index < cards.length; index++) {
    cards[index].data = {
        button: [
            {
                icon: 'book',
            },
            {
                icon: 'table-column-plus-after',
                title: 'Add column',
            },
            {
                icon: 'label',
                title: 'Add code/description column',
            },
        ],
        chart: [
            {
                data: {
                    columns: [
                        {
                            name: 'Col1',
                            title: 'Person',
                            size: '10',
                        },
                        {
                            name: 'Col2',
                            title: 'Value1',
                            size: '10',
                        },
                        {
                            name: 'Col3',
                            title: 'Value2',
                            size: '10',
                        },
                        {
                            name: 'Col4',
                            title: 'Value3',
                            size: '10',
                        },
                    ],
                    rows: [
                        {
                            cells: {
                                Col1: {
                                    obj: {
                                        t: 'CN',
                                        p: 'COL',
                                        k: 'CASFRA',
                                    },
                                    value: 'CASFRA',
                                },
                                Col2: {
                                    obj: {
                                        t: 'NR',
                                        p: '',
                                        k: '10',
                                    },
                                    value: '10',
                                },
                                Col3: {
                                    obj: {
                                        t: 'NR',
                                        p: '',
                                        k: '100.60',
                                    },
                                    value: '100.60',
                                },
                                Col4: {
                                    obj: {
                                        t: 'NR',
                                        p: '',
                                        k: '55',
                                    },
                                    value: '55',
                                },
                            },
                            id: '0',
                        },
                        {
                            cells: {
                                Col1: {
                                    obj: {
                                        t: 'CN',
                                        p: 'COL',
                                        k: 'DELGIO',
                                    },
                                    value: 'DELGIO',
                                },
                                Col2: {
                                    obj: {
                                        t: 'NR',
                                        p: '',
                                        k: '6',
                                    },
                                    value: '6',
                                },
                                Col3: {
                                    obj: {
                                        t: 'NR',
                                        p: '',
                                        k: '67.8',
                                    },
                                    value: '67.8',
                                },
                                Col4: {
                                    obj: {
                                        t: 'NR',
                                        p: '',
                                        k: '33',
                                    },
                                    value: '33',
                                },
                            },
                            id: '1',
                        },
                        {
                            cells: {
                                Col1: {
                                    obj: {
                                        t: 'CN',
                                        p: 'COL',
                                        k: 'PARFRA',
                                    },
                                    value: 'PARFRA',
                                },
                                Col2: {
                                    obj: {
                                        t: 'NR',
                                        p: '',
                                        k: '5',
                                    },
                                    value: '5',
                                },
                                Col3: {
                                    obj: {
                                        t: 'NR',
                                        p: '',
                                        k: '120.06',
                                    },
                                    value: '120.06',
                                },
                                Col4: {
                                    obj: {
                                        t: 'NR',
                                        p: '',
                                        k: '77',
                                    },
                                    value: '77',
                                },
                            },
                            id: '2',
                        },
                    ],
                },
                series: ['Col2', 'Col3', 'Col4'],
                axis: 'Col1',
                offlineMode: {
                    value: '1;7;-5;6;10;-5;3;4',
                    shape: 'line',
                },
            },
        ],
        checkbox: [
            {
                label: 'Checkbox1',
            },
            {
                label: 'Checkbox2',
            },
            {
                label: 'Checkbox3',
            },
            {
                label: 'Checkbox4',
            },
        ],
        chip: [
            {
                data: [
                    {
                        value: '1_chip',
                        icon: 'filter_1',
                        label: 'First chip',
                        checked: false,
                    },
                    {
                        value: '2_chip',
                        icon: 'filter_2',
                        label: 'Second chip',
                        checked: true,
                    },
                    {
                        value: '3_chip',
                        icon: 'filter_3',
                        label: 'Third chip',
                        checked: false,
                    },
                    {
                        value: '4_chip',
                        icon: 'filter_4',
                        label: 'Fourth chip',
                        checked: false,
                    },
                    {
                        value: '5_chip',
                        icon: 'filter_5',
                        label: 'Fifth chip',
                        checked: false,
                    },
                    {
                        value: '6_chip',
                        icon: 'filter_6',
                        label: 'Sixth chip',
                        checked: false,
                    },
                    {
                        value: '7_chip',
                        icon: 'filter_7',
                        label: 'Seventh chip',
                        checked: false,
                    },
                    {
                        value: '8_chip',
                        icon: 'filter_8',
                        label: 'Eighth chip',
                        checked: false,
                    },
                    {
                        value: '9_chip',
                        icon: 'filter_9',
                        label: 'Ninth chip',
                        checked: false,
                    },
                ],
            },
        ],
        image: [
            {
                resource: 'omega',
            },
            {
                resource: 'radioactive',
            },
        ],
        progressbar: [
            {
                value: 75,
                centeredLabel: false,
            },
        ],
        text: [
            '#1 L U L',
            '#2 LUL',
            '#3 omegalul',
            '#4 L U L',
            '#5 LUL',
            '#6 omegalul',
            '#7 L U L',
            '#8 LUL',
            '#9 omegalul',
        ],
        textfield: [
            {
                fullWidth: true,
                icon: 'magnify',
                isClearable: true,
                label: 'Search...',
            },
        ],
    };
}
