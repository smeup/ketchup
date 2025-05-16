document.addEventListener('kup-accordion-itemselected', (e) => console.log(e));

const ksData = [
    {
        id: 'FLD1',
        title: 'Dashboard (title)',
        value: 'Dashboard',
        icon: 'compass-outline',
    },
    {
        id: 'FLD2',
        title: 'People (title)',
        value: 'People',
    },
    {
        id: 'FLD3',
        title: 'Buy (title)',
        value: 'Buy',
        icon: 'add_shopping_cart',
    },
    {
        id: 'FLD4',
        title: 'All Locations (title)',
        value: 'All Locations',
    },
];
const ksAccordion = document.getElementById('ks');
ksAccordion.data = ksData;

const emptyAccordion = document.getElementById('empty');
emptyAccordion.data = {};

const accordionIntoAnother = document.getElementById(
    'accordionIntoAnother-main'
);
const props = {
    customStyle: '',
    data: [
        {
            contentVisible: false,
            value: 'First accordion',
            id: 'main-first',
        },
        {
            contentVisible: false,
            value: 'Second accordion',
            id: 'main-second',
            expandable: true,
        },
    ],
    infoIcon: false,
    ripple: false,
    toolbar: true,
    sizing: 'small',
};
for (const key in props) {
    accordionIntoAnother[key] = props[key];
}
accordionIntoAnother.toolbarCallback = (e) => {
    console.log('Toolbar callback', e);
};

let child = document.getElementById('accordionIntoAnother-main-second');
const childProps = {
    customStyle: '',
    data: [
        {
            contentVisible: false,
            value: 'First child accordion',
            id: 'child-first',
        },
        {
            contentVisible: false,
            value: 'Second child accordion',
            id: 'child-second',
            expandable: true,
        },
    ],
    infoIcon: false,
    ripple: false,
    toolbar: true,
};
for (const key in childProps) {
    child[key] = childProps[key];
}
