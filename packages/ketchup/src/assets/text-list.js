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
        value: 'Button Flat 3',
    },
    {
        value: 'Button Flat 5',
    },
];

const textList = document.getElementById('text-list');
textList.data = simpleData;

const toolbarTitle = [
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
];

const textListToolbar = document.getElementById('text-list-toolbar');
textListToolbar.data = toolbarTitle;
