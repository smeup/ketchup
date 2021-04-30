<template>
  <div>
    <div id="test-section">
      <h1>Test</h1>
      <p>Here a simple performance test made with kup-test.</p>
      <div id="button-section">
        <kup-button id="print" label="Print lifecycle time"></kup-button>
        <kup-button
          id="autorun"
          styling="flat"
          label="autorun (50ms interval)"
        ></kup-button></div
      ><div id="average-section">
        <h1>Full lifecycle average time (milliseconds):</h1>
        <div class="counter-wrapper">
          <span class="label">Empty:</span>
          <span id="average-empty">0</span></div
        ><br />
        <div class="counter-wrapper">
          <span class="label">KupDebug:</span>
          <span id="average-debug">0</span></div
        >
        <div class="counter-wrapper">
          <span class="label">KupLanguage:</span>
          <span id="average-language">0</span></div
        >
        <div class="counter-wrapper">
          <span class="label">KupTheme:</span>
          <span id="average-theme">0</span></div
        ><br />
        <div class="counter-wrapper">
          <span class="label">Long cycle (props):</span>
          <span id="average-cycleprops">0</span></div
        >
        <div class="counter-wrapper">
          <span class="label">Long cycle (vars):</span>
          <span id="average-cyclevars">0</span></div
        ><br />
        <div class="counter-wrapper">
          <span class="label">Full:</span>
          <span id="average-full">0</span></div
        ><br />
        <div class="counter-wrapper">
          <span class="label">Total:</span>
          <span id="average-total">0</span></div
        >
      </div>
      <div id="misc-section">
        <h1>Additional info:</h1>
        <div class="counter-wrapper">
          <span class="label">Number of renders:</span>
          <span id="number">0</span>
        </div></div
      ></div
    >
  </div>
</template>

<style>
#button-section {
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
}

#autorun {
  margin: 0 auto 0 5px;
}

#print {
  margin: 0 5px 0 auto;
}

kup-test {
  text-align: center;
  width: 100%;
  height: auto;
  padding: 10px 0;
}

.counter-wrapper {
  display: flex;
  flex-direction: row;
}

.label {
  width: 20em;
  font-size: 1.2em;
  opacity: 0.75;
}

#test-section {
  padding-top: 1em;
}
</style>

<script>
export default {
  name: 'Test',
  mounted() {
    // Elements selectors
    const printButton = document.querySelector('#print');
    const autorunButton = document.querySelector('#autorun');
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
  },
};
</script>
