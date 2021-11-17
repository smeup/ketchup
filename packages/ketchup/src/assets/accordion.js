document.addEventListener('kup-accordion-itemselected', (e) => console.log(e));

const ksData = {
    columns: [
        {
            name: 'FLD1',
            title: 'Dashboard',
            icon: 'compass-outline',
        },
        {
            name: 'FLD2',
            title: 'People',
        },
        {
            name: 'FLD3',
            title: 'Buy',
            icon: 'add_shopping_cart',
        },
        {
            name: 'FLD4',
            title: 'All Locations',
        },
    ],
};

const ksAccordion = document.getElementById('ks');
ksAccordion.data = ksData;

const emptyAccordion = document.getElementById('empty');
emptyAccordion.data = {};
