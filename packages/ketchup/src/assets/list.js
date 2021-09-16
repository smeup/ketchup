const lists = document.querySelectorAll('kup-list');

for (let index = 0; index < lists.length; index++) {
    const list = lists[index];
    list.data = [
        {
            text: 'First item',
            secondaryText: 'I am a description',
            value: '1',
            icon: 'filter_1',
            selected: false,
        },
        {
            text: 'Second item',
            secondaryText: 'I am a description',
            value: '2',
            icon: 'filter_2',
            selected: false,
        },
        {
            text: 'Third item',
            secondaryText: 'I am a description',
            value: '3',
            icon: 'filter_3',
            selected: false,
        },
    ];
}
