const defaultData = {
    title: 'title for nav-bar bla bla laaaa a   a a a a',
    menuActions: [
        { icon: 'search', value: 'AA', text: 'Search AA' },
        { icon: 'search', value: 'BB', text: 'Search BB' },
        { icon: 'search', value: 'CC', text: 'Search CC' },
        { icon: 'search', value: 'DD', text: 'Search DD' },
    ],
    optionActions: [
        { icon: 'favorite', value: 'f', tooltip: 'Favorite', visible: true },
        { icon: 'search', value: 's', tooltip: 'Search', visible: true },
        { icon: 'search', value: 'A', text: 'Search A', visible: true },
        { icon: 'search', value: 'B', text: 'Search B', visible: true },
        { icon: 'search', value: 'C', text: 'Search C', visible: true },
        { icon: 'search', value: 'D', text: 'Search D' },
    ],
};
const navBar = document.getElementById('navbar');
navBar.data = { ...defaultData };

const navBarShort = document.getElementById('navbar-short');
//const aa = { ...defaultData };
navBarShort.data = { ...defaultData };
navBarShort.data.title = 'navbar with mode';
