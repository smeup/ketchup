const lists = document.querySelectorAll('kup-list');

for (let index = 0; index < lists.length; index++) {
    const list = lists[index];
    list.data = [
        {
            value: 'First item',
            secondaryText: 'I am a description',
            id: '1',
            icon: 'filter_1',
            selected: false,
        },
        {
            value: 'Second item',
            secondaryText: 'I am a description',
            id: '2',
            icon: 'filter_2',
            selected: false,
        },
        {
            value: 'Third item',
            secondaryText: 'I am a description',
            id: '3',
            icon: 'filter_3',
            selected: false,
        },
    ];
}
