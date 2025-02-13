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
        value: 'Accordion',
        id: 'accordion.html',
    },
    {
        value: 'Activity Timeline',
        id: 'activity-timeline.html',
    },
    {
        value: 'Autocomplete',
        id: 'autocomplete.html',
    },
    {
        value: 'Badge',
        id: 'badge.html',
    },
    {
        value: 'Box',
        id: 'box.html',
    },
    {
        value: 'Button',
        id: 'button.html',
    },
    {
        value: 'Button list',
        id: 'button-list.html',
    },
    {
        value: 'Calendar',
        id: 'calendar.html',
    },
    {
        value: 'Card',
        id: 'card.html',
    },
    {
        value: 'Card list',
        id: 'card-list.html',
    },
    {
        value: 'Cell',
        id: 'cell.html',
    },
    {
        value: 'Chart',
        id: 'chart.html',
    },
    {
        value: 'Checkbox',
        id: 'checkbox.html',
    },
    {
        value: 'Chip',
        id: 'chip.html',
    },
    {
        value: 'Color picker',
        id: 'color-picker.html',
    },
    {
        value: 'Combobox',
        id: 'combobox.html',
    },
    {
        value: 'Dashboard',
        id: 'dashboard.html',
    },
    {
        value: 'Data table',
        id: 'data-table.html',
    },
    {
        value: 'Date picker',
        id: 'date-picker.html',
    },
    {
        value: 'Dialog',
        id: 'dialog.html',
    },
    {
        value: 'Drawer',
        id: 'drawer.html',
    },
    {
        value: 'Dropdown button',
        id: 'dropdown-button.html',
    },
    {
        value: 'Echart',
        id: 'echart.html',
    },
    {
        value: 'Editor',
        id: 'editor.html',
    },
    {
        value: 'Editor example 1',
        id: 'editor-example-1.html',
    },
    {
        value: 'Family tree',
        id: 'family-tree.html',
    },
    {
        value: 'Form',
        id: 'form.html',
    },
    {
        value: 'Gantt',
        id: 'gantt.html',
    },
    {
        value: 'Gauge',
        id: 'gauge.html',
    },
    {
        value: 'Grid',
        id: 'grid.html',
    },
    {
        value: 'HTM',
        id: 'htm.html',
    },
    {
        value: 'Image',
        id: 'image.html',
    },
    {
        value: 'Image list',
        id: 'image-list.html',
    },
    {
        value: 'Input panel',
        id: 'input-panel.html',
    },
    {
        value: 'KupData',
        id: 'kupdata.html',
    },
    {
        value: 'KupInteract',
        id: 'kupinteract.html',
    },
    {
        value: 'KupTooltip',
        id: 'kuptooltip.html',
    },
    {
        value: 'List',
        id: 'list.html',
    },
    {
        value: 'Magic box',
        id: 'magic-box.html',
    },
    {
        value: 'Multi Select',
        id: 'multi-select.html',
    },
    {
        value: 'Nav bar',
        id: 'nav-bar.html',
    },
    {
        value: 'Numeric picker',
        id: 'numeric-picker.html',
    },
    {
        value: 'Pdf',
        id: 'pdf.html',
    },
    {
        value: 'Planner',
        id: 'planner.html',
    },
    {
        value: 'Planner example 1',
        id: 'planner-example-1.html',
    },
    {
        value: 'Planner example 2',
        id: 'planner-example-2.html',
    },
    {
        value: 'Planner example 3',
        id: 'planner-example-3.html',
    },
    {
        value: 'Planner example 4',
        id: 'planner-example-4.html',
    },
    {
        value: 'Planner example 5',
        id: 'planner-example-5.html',
    },
    {
        value: 'Planner example 6',
        id: 'planner-example-6.html',
    },
    {
        value: 'Progress Bar',
        id: 'progress-bar.html',
    },
    {
        value: 'Radio',
        id: 'radio.html',
    },
    {
        value: 'Rating',
        id: 'rating.html',
    },
    {
        value: 'Snackbar',
        id: 'snackbar.html',
    },
    {
        value: 'Switch',
        id: 'switch.html',
    },
    {
        value: 'Tab bar',
        id: 'tab-bar.html',
    },
    {
        value: 'Time picker',
        id: 'time-picker.html',
    },
    {
        value: 'Toolbar',
        id: 'toolbar.html',
    },
    {
        value: 'Typography',
        id: 'typography.html',
    },
    {
        value: 'Typography List',
        id: 'typography-list.html',
    },
    {
        value: 'Text field',
        id: 'text-field.html',
    },
    {
        value: 'Tooltip',
        id: 'tooltip.html',
    },
    {
        value: 'Tree',
        id: 'tree.html',
    },
    {
        value: 'TXT',
        id: 'txt.html',
    },
];
// Setting up performance pages
const performances = document.querySelector('#performances');
performances.data = [
    {
        value: 'Box',
        id: 'box-performance.html',
    },
    {
        value: 'Card',
        id: 'card-performance.html',
    },
    {
        value: 'Data table',
        id: 'data-table-performance.html',
    },
    {
        value: 'Tree',
        id: 'tree-performance.html',
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
    gotoPage(e, e.detail.selected.id);
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
