const simpleData = [
    {
        data: {
            type: 'heading-01',
        },
        value: 'Button Flat 1',
        obj: {
            t: '',
            p: '',
            k: 'b1',
        },
    },
    {
        value: 'Button Flat 2',
    },
    {
        value: 'This is a text that will be outputted as text for the LAB component also called in ketchup typography.',
    },
    {
        value: 'Button Flat 5',
    },
];

const textList = document.getElementById('text-list');
textList.data = simpleData;

const toolbarTitle = [
    {
        value: 'Button Flat 1',
        obj: {
            t: '',
            p: '',
            k: 'b1',
        },
    },
];

const textListToolbar = document.getElementById('text-list-toolbar');
textListToolbar.data = toolbarTitle;
