const basicCard = document.getElementById('basic-card');
addEventListener('kupCardEvent', (e) => {
    console.log(e);
});
if (basicCard != null) {
    basicCard.data = {
        button1: {
            icon: 'book',
        },
        button2: {
            icon: 'table-column-plus-after',
            title: 'Add column',
        },
        button3: {
            icon: 'label',
            title: 'Add code/description column',
        },
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
