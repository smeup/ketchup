const button = document.querySelector('#print');
const wrapper = document.querySelector('#test-wrapper');
const average = document.querySelector('#average');
const number = document.querySelector('#number');
const averageArray = [];

button.onclick = () => {
    destroyComps();
    createComps();
    const tests = document.querySelectorAll('kup-test');
    const promises = [];
    for (let index = 0; index < tests.length; index++) {
        promises.push(tests[index].printLifecycleTime());
    }
    Promise.all(promises).then((values) => {
        for (let index = 0; index < values.length; index++) {
            averageArray.push(values[index]);
        }
        number.innerText = (parseInt(number.innerText) + 1).toString();
        let sum = 0;
        for (let index = 0; index < averageArray.length; index++) {
            sum += averageArray[index];
        }
        average.innerText = sum / averageArray.length;
    });
};

function destroyComps() {
    const tests = document.querySelectorAll('kup-test');
    for (let index = 0; index < tests.length; index++) {
        tests[index].remove();
    }
}

function createComps() {
    const emptyTest = document.createElement('kup-test');
    emptyTest.id = 'empty';
    emptyTest.features = {
        debug: false,
        language: false,
        theme: false,
    };
    wrapper.append(emptyTest);

    const debugTest = document.createElement('kup-test');
    debugTest.id = 'debug';
    debugTest.features = {
        debug: true,
        language: false,
        theme: false,
    };
    wrapper.append(debugTest);

    const languageTest = document.createElement('kup-test');
    languageTest.id = 'language';
    languageTest.features = {
        debug: false,
        language: true,
        theme: false,
    };
    wrapper.append(languageTest);

    const themeTest = document.createElement('kup-test');
    themeTest.id = 'theme';
    themeTest.features = {
        debug: false,
        language: false,
        theme: true,
    };
    wrapper.append(themeTest);

    const fullTest = document.createElement('kup-test');
    fullTest.id = 'full';
    wrapper.append(fullTest);
}
