const comp = document.getElementById('htm');

comp.addEventListener('kup-htm-ready', (e) => {
    console.log('HTM ready', e);
});

const props = {
    data: {
        // value: 'https://kubernetes.io/',
        // obj: { t: 'J1', p: 'URL', k: '' },
        value: "<h1>Welcome to KupHtm</h1><p>This is a test paragraph with some <strong>bold text</strong> and <em>italic text</em>.</p><ul><li>First item</li><li>Second item</li><li>Third item</li></ul><p>Here’s a link: <a href='https://example.com' target='_blank'>Example.com</a></p>",
        obj: { t: '', p: '', k: '' },
    },
};

if (props) {
    for (const key in props) {
        comp[key] = props[key];
    }
}
