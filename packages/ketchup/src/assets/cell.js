const sampleCell = document.getElementById('sampleCell');
sampleCell.data = {
    value: 'Simple text with click event',
};
sampleCell.addEventListener('kup-cell-click', (e) => {
    console.log(e);
});

const buttonCell = document.getElementById('buttonCell');
buttonCell.data = {
    obj: {
        t: 'J4',
        p: 'BTN',
        k: '',
    },
    data: {
        icon: 'favorite',
        label: 'Simple button',
    },
    value: 'Simple button',
};

const dateCell = document.getElementById('dateCell');
dateCell.data = {
    obj: {
        t: 'D8',
        p: '*YYMD',
        k: '20211101',
    },
    value: '2021-11-01',
    title: 'Simple date',
    icon: 'calendar',
};

const editableCell = document.getElementById('editableCell');
editableCell.data = {
    value: 'Editable text with update event',
    isEditable: true,
};
editableCell.addEventListener('kup-cell-update', (e) => {
    console.log(e);
});

const styleCell = document.getElementById('styleCell');
styleCell.data = {
    value: 'Styled text',
    style: {
        color: 'green',
        'background-color': 'yellow',
    },
};
