const barEl = document.querySelector('kup-nav-bar');
const drawerEl = document.querySelector('kup-drawer');
const dropdownEl = document.querySelector('kup-dropdown-button');
const switchEl = document.querySelector('kup-switch');

barEl.image = {
    resource:
        'https://ketchup.smeup.com/ketchup-showcase/ketchup_logo_header.svg',
};
dropdownEl.data = {
    'kup-list': {
        data: [
            {
                text: 'Dense',
                value: 'dense',
            },
            {
                text: 'Prominent',
                value: 'prominent',
            },
            {
                text: 'Short',
                value: 'short',
            },
            {
                text: 'Standard',
                value: 'standard',
            },
        ],
    },
};
barEl.addEventListener('kup-navbar-menuclick', (e) => {
    console.log(e.type, e);
    drawerEl.toggle();
});
drawerEl.addEventListener('kup-drawer-close', (e) => {
    console.log(e.type, e);
    barEl.classList.remove('padded');
});
drawerEl.addEventListener('kup-drawer-open', (e) => {
    console.log(e.type, e);
    barEl.classList.add('padded');
});
dropdownEl.addEventListener('kup-dropdownbutton-itemclick', (e) => {
    console.log(e.type, e);
    barEl.styling = e.detail.value;
});
switchEl.addEventListener('kup-switch-change', (e) => {
    console.log(e.type, e);
    if (e.detail.value === 'on') {
        document.documentElement.ketchup.theme.set('dark');
    } else {
        document.documentElement.ketchup.theme.set('ketchup');
    }
});
