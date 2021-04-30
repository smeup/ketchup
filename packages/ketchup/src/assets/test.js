// Elements selectors
const printButton = document.querySelector('#print');
const autorunButton = document.querySelector('#autorun');
const combobox = document.querySelector('#feature-changer');
const wrapper = document.querySelector('#test-section');
const number = document.querySelector('#number');
// Ids
const totalID = 'total';
const IDs = [
    'empty',
    'debug',
    'language',
    'theme',
    'cycleprops',
    'cyclevars',
    'full',
    totalID,
];
const elements = {};
for (let index = 0; index < IDs.length; index++) {
    const ID = IDs[index];
    elements[ID] = {
        averageEl: document.querySelector(`#average-${ID}`),
        values: [],
    };
}
// Print autorun
let interval = null;
let intervalTime = 50;
// Combobox
combobox.initialValue = 'full';
combobox.data = {
    'kup-list': {
        data: [
            {
                text: 'No features',
                value: 'empty',
            },
            {
                text: 'KupDebug',
                value: 'debug',
            },
            {
                text: 'KupLanguage',
                value: 'language',
            },
            {
                text: 'KupTheme',
                value: 'theme',
            },
            {
                text: 'Long cycle (props)',
                value: 'cycleprops',
            },
            {
                text: 'Long cycle (variables)',
                value: 'cyclevars',
            },
            {
                text: 'All features',
                value: 'full',
            },
        ],
    },
    'kup-text-field': {
        label: 'Select your feature',
    },
};
// Events handling
combobox.addEventListener('kupComboboxItemClick', () => {
    runTests();
});
printButton.onclick = () => runTests();
autorunButton.onclick = () => {
    if (interval) {
        clearInterval(interval);
        interval = null;
    } else {
        interval = setInterval(runTests, intervalTime);
    }
};

function runTests() {
    let comp = document.querySelector('kup-test');
    if (comp) {
        comp.remove();
    }
    comp = document.createElement('kup-test');
    combobox.getValue().then((res) => {
        comp.id = res;
        switch (res) {
            case 'empty':
                break;
            case 'debug':
                comp.features = {
                    debug: true,
                };
                break;
            case 'language':
                comp.features = {
                    language: true,
                };
                break;
            case 'theme':
                comp.features = {
                    theme: true,
                };
                break;
            case 'cycleprops':
                comp.features = {
                    longCycleProps: true,
                };
                break;
            case 'cyclevars':
                comp.features = {
                    longCycleVars: true,
                };
                break;
            case 'full':
                comp.features = {
                    debug: true,
                    language: true,
                    longCycleProps: true,
                    longCycleVars: true,
                    theme: true,
                };
                break;
            case 'total':
                break;
            case 'default':
                console.log(
                    'Something wrong happened, feature not supported by kup-test (' +
                        res +
                        ''
                );
                return;
        }
        wrapper.append(comp);
        if (comp) {
            comp.printLifecycleTime().then((res) => {
                const id = res.id;
                const time = res.time;
                number.innerText = (parseInt(number.innerText) + 1).toString();
                elementIteration([id, totalID], time);
            });
        }
    });
}

function elementIteration(ids, time) {
    for (let index = 0; index < ids.length; index++) {
        let sum = 0;
        const id = ids[index];
        elements[id].values.push(time);
        for (let index = 0; index < elements[id].values.length; index++) {
            sum += elements[id].values[index];
        }
        elements[id].averageEl.innerText = sum / elements[id].values.length;
    }
}
