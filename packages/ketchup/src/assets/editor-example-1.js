let comp = document.getElementById('editor-html');

comp.addEventListener('kup-editor-autosave', (e) => {
    console.log('kup-editor-autosave (html) ' + new Date().toISOString(), e);
});

let props = {
    customStyle: '',
    editorHeight: '400px',
    initialEditType: 'wysiwyg',
    initialValue:
        '<div data-tomark-pass="">prova prova 123456 56<br></div><div data-tomark-pass=""><br></div><div data-tomark-pass="">e vado a capo<br></div><div data-tomark-pass=""><br></div><div data-tomark-pass="">ancora<br></div><div data-tomark-pass=""><br></div><div data-tomark-pass="">e ancora</div>',
    isReadOnly: false,
    previewStyle: 'tab',
    showSaveButton: true,
    showToolbar: true,
    autosaveTimer: 5000,
};

if (props) {
    for (const key in props) {
        comp[key] = props[key];
    }
}

comp = document.getElementById('editor-markdown');

comp.addEventListener('kup-editor-autosave', (e) => {
    console.log(
        'kup-editor-autosave (markdown) ' + new Date().toISOString(),
        e
    );
});

props = {
    customStyle: '',
    initialEditType: 'markdown',
    initialValue: '# title 1 \n ## title2',
    isReadOnly: false,
    previewStyle: 'tab',
    showSaveButton: false,
    showToolbar: true,
    autosaveTimer: 5000,
};

comp.style = '--kup-editor-height: 300px;';

if (props) {
    for (const key in props) {
        comp[key] = props[key];
    }
}

comp = document.getElementById('editor-text');

comp.addEventListener('kup-editor-save', (e) => {
    console.log('kup-editor-save (text) ' + new Date().toISOString(), e);
});
comp.addEventListener('kup-editor-autosave', (e) => {
    console.log('kup-editor-autosave (text) ' + new Date().toISOString(), e);
});

props = {
    customStyle: '',
    initialEditType: 'text',
    initialValue: 'title 1 \n title2',
    isReadOnly: false,
    showSaveButton: true,
    showToolbar: true,
    autosaveTimer: 5000,
};

comp.style = '--kup-editor-height: 300px;';

if (props) {
    for (const key in props) {
        comp[key] = props[key];
    }
}
