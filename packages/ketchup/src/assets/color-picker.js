const pickers = document.querySelectorAll('kup-color-picker');
pickers.forEach((picker) => {
    picker.data = {
        'kup-text-field': {
            label: picker.getAttribute('initial-value'),
        },
    };
});
