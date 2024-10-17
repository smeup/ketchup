const radioEls = document.querySelectorAll('kup-radio');
radioEls.forEach((element) => {
    element.addEventListener('kup-radio-blur', (e) => {
        console.log('Radio has been BLURRED', e);
    });
    element.addEventListener('kup-radio-change', (e) => {
        console.log('Radio has been CHANGED', e);
    });
    element.addEventListener('kup-radio-focus', (e) => {
        console.log('Radio has been FOCUSED', e);
    });
});

radioEls[0].data = [
    {
        value: 'Favorites',
        label: 'label 1',
        checked: false,
    },
    {
        value: 'Set alarm clock',
        label: 'label 2',
        checked: true,
    },
    {
        value: 'Settings',
        label: 'label 3',
        checked: false,
    },
];

radioEls.type = 'radio';

radioEls[2].data = [
    {
        value: 'Favorites',
        label: 'label 1',
        checked: false,
    },
    {
        value: 'Set alarm clock',
        label: 'label 2',
        checked: true,
    },
    {
        value: 'Settings',
        label: 'label 3',
        checked: false,
    },
];
