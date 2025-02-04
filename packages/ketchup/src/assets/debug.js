// Replace the object below with yours.
const compName = 'kup-dialog';

// Replace the props below with yours.
const props = {
    modal: null,
    sizeX: '50dvw',
    sizeY: '80dvh',
    // anchor: 'right',
};

const wrapper = document.querySelector('#debug-wrapper');
if (props) {
    const comp = document.createElement(compName);
    for (const key in props) {
        comp[key] = props[key];
    }
    wrapper.append(comp);
} else {
    const span = document.createElement('span');
    span.innerText = 'Did you forget to paste your props?';
    wrapper.append(span);
}
