const comp = document.getElementById('txt');

comp.addEventListener('kup-txt-ready', (e) => {
    console.log('TXT ready', e);
});

const props = {
    data: {
        value: `Welcome to the kup-txt component demo.*char_combination*This component handles text transformations,*char_combination*such as replacing custom line breaks.*char_combination*It's useful for displaying formatted content*char_combination*in a web application.`,
        obj: { t: '', p: '', k: '' },
    },
};

if (props) {
    for (const key in props) {
        comp[key] = props[key];
    }
}
