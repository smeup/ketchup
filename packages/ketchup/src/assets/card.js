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
