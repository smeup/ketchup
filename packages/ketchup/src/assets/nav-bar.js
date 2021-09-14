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
    drawerEl.toggle().then(() => {
        if (drawerEl.opened) {
            e.detail.comp.rootElement.classList.add('padded');
        } else {
            e.detail.comp.rootElement.classList.remove('padded');
        }
    });
});
dropdownEl.addEventListener('kup-dropdownbutton-itemclick', (e) => {
    barEl.styling = e.detail.value;
});
switchEl.addEventListener('kup-switch-change', (e) => {
    if (e.detail.value === 'on') {
        document.documentElement.ketchup.theme.set('dark');
    } else {
        document.documentElement.ketchup.theme.set('ketchup');
    }
});
