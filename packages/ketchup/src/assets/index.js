// Setting up utilities cards
const cards = document.querySelectorAll('kup-card');
for (let index = 0; index < cards.length; index++) {
    const card = cards[index];
    card.data = {
        image: card.dataset.icon ? [{ resource: card.dataset.icon }] : null,
        text: [
            card.dataset.title ? card.dataset.title : null,
            card.dataset.description ? card.dataset.description : null,
        ],
    };
    card.onclick = (e) => {
        gotoPage(e, card.dataset.href);
    };
    card.sizeX = '264px';
    card.sizeY = '264px';
}
// Setting up components
const components = document.querySelector('#components');
components.data = [
    {
        text: 'Accordion',
        value: 'accordion.html',
    },
    {
        text: 'Autocomplete',
        value: 'autocomplete.html',
    },
    {
        text: 'Box',
        value: 'box.html',
    },
    {
        text: 'Bpmn.io',
        value: 'bpmn.html',
    },
    {
        text: 'Button',
        value: 'button.html',
    },
    {
        text: 'Button list',
        value: 'button-list.html',
    },
    {
        text: 'Card',
        value: 'card.html',
    },
    {
        text: 'Chart',
        value: 'chart.html',
    },
    {
        text: 'Checkbox',
        value: 'checkbox.html',
    },
    {
        text: 'Chip',
        value: 'chip.html',
    },
    {
        text: 'Color picker',
        value: 'color-picker.html',
    },
    {
        text: 'Combobox',
        value: 'combobox.html',
    },
    {
        text: 'Dash list',
        value: 'dash-list.html',
    },
    {
        text: 'Data table',
        value: 'data-table.html',
    },
    {
        text: 'Date picker',
        value: 'date-picker.html',
    },
    {
        text: 'Drawer',
        value: 'drawer.html',
    },
    {
        text: 'Dropdown button',
        value: 'dropdown-button.html',
    },
    {
        text: 'Echart',
        value: 'echart.html',
    },
    {
        text: 'Gauge',
        value: 'gauge.html',
    },
    {
        text: 'Layout',
        value: 'layout.html',
    },
    {
        text: 'List',
        value: 'list.html',
    },
    {
        text: 'Magic box',
        value: 'magic-box.html',
    },
    {
        text: 'Nav bar',
        value: 'nav-bar.html',
    },
    {
        text: 'Radio',
        value: 'radio.html',
    },
    {
        text: 'Rating',
        value: 'rating.html',
    },
    {
        text: 'Switch',
        value: 'switch.html',
    },
    {
        text: 'Tab bar',
        value: 'tab-bar.html',
    },
    {
        text: 'Time picker',
        value: 'time-picker.html',
    },
    {
        text: 'Text field',
        value: 'text-field.html',
    },
    {
        text: 'Tooltip',
        value: 'tooltip.html',
    },
    {
        text: 'Tree',
        value: 'tree.html',
    },
];
// Setting up performance pages
const performances = document.querySelector('#performances');
performances.data = [
    {
        text: 'Box',
        value: 'box-performance.html',
    },
    {
        text: 'Card',
        value: 'card-performance.html',
    },
    {
        text: 'Data table',
        value: 'data-table-performance.html',
    },
];
// Setting up events
var ctrlKey = false;
document.addEventListener('keydown', (e) => {
    if (e.key === 'Control' || e.key === 'Meta') {
        console.log('Pressing CTRL key.');
        ctrlKey = true;
    }
});
document.addEventListener('keyup', (e) => {
    if (e.key === 'Control' || e.key === 'Meta') {
        console.log('CTRL key was released.');
        ctrlKey = false;
    }
});
document.addEventListener('kup-button-click', (e) => {
    const id = e.detail.id;
    switch (id) {
        case 'debug':
            console.log('Toggling debug.');
            kupManager.debug.toggle();
            break;
        case 'theme':
            if (isDarkMode()) {
                console.log('Switching to light mode.');
                e.detail.comp.icon = 'brightness_3';
                kupManager.theme.set('ketchup');
            } else {
                console.log('Switching to dark mode.');
                e.detail.comp.icon = 'brightness_5';
                kupManager.theme.set('dark');
            }
            break;
    }
});
document.addEventListener('kup-list-click', (e) => {
    gotoPage(e, e.detail.selected.value);
});

function isDarkMode() {
    return kupManager.theme.name === 'dark' ? true : false;
}

function gotoPage(e, href) {
    console.log('Opening page:' + href);
    const a = document.createElement('a');
    a.setAttribute('href', href);
    if (ctrlKey) {
        a.setAttribute('target', '_blank');
    }
    document.body.appendChild(a);
    a.click();
    a.remove();
}
