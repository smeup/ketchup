// Replace the object below with yours.
const compName = 'kup-button';

// Replace the props below with yours.
const props = {
    checked: true,
    customStyle: '',
    disabled: false,
    icon: 'favorite',
    iconOff: null,
    label: null,
    styling: 'raised',
    toggable: false,
    trailingIcon: false,
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
