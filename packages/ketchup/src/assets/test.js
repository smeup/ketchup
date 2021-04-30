// Elements selectors
const printButton = document.querySelector('#print');
const autorunButton = document.querySelector('#autorun');
const wrapper = document.querySelector('#test-section');
const average = document.querySelector('#average');
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
// Events handling
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
    destroyComps();
    createComps();
    const tests = document.querySelectorAll('kup-test');
    const promises = [];
    for (let index = 0; index < tests.length; index++) {
        promises.push(tests[index].printLifecycleTime());
    }
    Promise.all(promises).then((values) => {
        number.innerText = (parseInt(number.innerText) + 1).toString();
        for (let index = 0; index < values.length; index++) {
            const id = values[index].id;
            const time = values[index].time;
            elements[totalID].values.push(time);
            if (elements[id]) {
                elements[id].values.push(time);
            }
        }
        for (const key in elements) {
            if (Object.hasOwnProperty.call(elements, key)) {
                let sum = 0;
                const element = elements[key];
                for (let index = 0; index < element.values.length; index++) {
                    const value = element.values[index];
                    sum += value;
                }
                element.averageEl.innerText = sum / element.values.length;
            }
        }
    });
}

function createComps() {
    for (let index = 0; index < IDs.length; index++) {
        const ID = IDs[index];
        if (ID !== totalID) {
            const comp = document.createElement('kup-test');
            comp.id = ID;
            switch (ID) {
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
            }
            wrapper.append(comp);
        }
    }
}

function destroyComps() {
    const tests = document.querySelectorAll('kup-test');
    for (let index = 0; index < tests.length; index++) {
        tests[index].remove();
    }
}
