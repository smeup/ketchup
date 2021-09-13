const drawer = document.querySelector('kup-drawer');
const switches = document.querySelectorAll('kup-switch');
const bars = document.querySelectorAll('kup-nav-bar');
switches.forEach((el) => {
    el.addEventListener('kup-switch-change', (e) => {
        if (e.detail.value === 'on') {
            document.documentElement.ketchup.theme.set('dark');
        } else {
            document.documentElement.ketchup.theme.set('ketchup');
        }
    });
});
bars.forEach((el) => {
    el.image = {
        resource:
            'https://ketchup.smeup.com/ketchup-showcase/ketchup_logo_header.svg',
    };
    el.addEventListener('kup-navbar-menuclick', (e) => {
        drawer.toggle().then(() => {
            if (drawer.opened) {
                e.detail.comp.rootElement.classList.add('padded');
            } else {
                e.detail.comp.rootElement.classList.remove('padded');
            }
        });
    });
});
document.addEventListener('kup-dropdownbutton-itemclick', (e) => {
    for (let index = 0; index < bars.length; index++) {
        const el = bars[index];
        if (e.detail.value !== el.id) {
            el.classList.remove('visible');
        } else {
            el.classList.add('visible');
        }
    }
});
const stylingSelector = document.getElementById('styling-selector');
stylingSelector.data = {
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
