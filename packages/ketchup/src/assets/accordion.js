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
