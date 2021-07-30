// Replace the object below with yours.
const compName = 'kup-list';

// Replace the props below with yours.
const props = {
    customStyle: '',
    data: [
        {
            text: 'Count',
            value: 'Count',
            selected: false,
        },
        {
            text: 'Distinct',
            value: 'Distinct',
            selected: false,
        },
        {
            text: 'Sum',
            value: 'Sum',
            selected: false,
            separator: true,
        },
        {
            text: 'Average',
            value: 'Average',
            selected: false,
        },
        {
            text: 'Minimum',
            value: 'Min',
            selected: false,
        },
        {
            text: 'Maximum',
            value: 'Max',
            selected: false,
        },
    ],
    displayMode: 'description',
    filter: '',
    hideText: false,
    isMenu: true,
    menuVisible: true,
    roleType: 'listbox',
    selectable: true,
    showIcons: false,
    twoLine: false,
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
