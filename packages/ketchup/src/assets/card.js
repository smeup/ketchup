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
        image: [
            {
                resource: 'widgets',
            },
            {
                resource: 'menu',
            },
        ],
        text: ['mah', 'mih', 'moh'],
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
