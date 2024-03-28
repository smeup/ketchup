const comp = document.getElementById('pdf');

comp.addEventListener('kup-pdf-ready', (e) => {
    console.log('Pdf ready', e);
});

const props = {
    pdfPath: '../../assets/kup-pdf-sample.pdf',
};

if (props) {
    for (const key in props) {
        comp[key] = props[key];
    }
}
