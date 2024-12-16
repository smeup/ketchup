const comp = document.getElementById('txt');

comp.addEventListener('kup-txt-ready', (e) => {
    console.log('TXT ready', e);
});

const props = {
    data: {
        value: `Welcome to the kup-txt component demo.\r\nThis component handles text transformations,\r\nsuch as replacing custom line breaks.\r\nIt's useful for displaying formatted content\r\nin a web application.`,
        obj: { t: '', p: '', k: '' },
    },
};

if (props) {
    for (const key in props) {
        comp[key] = props[key];
    }
}
