@@ -1,252 +0,0 @@
<template>
  <div>
    <div id="debug-section">
      <p
        >In this section you can render any component by selecting the one you
        need and pasting in the textarea a valid JSON containing its props.</p
      >
      <kup-combobox
        :data.prop="comboboxData"
        is-select
        id="debug-changer"
        @kup-combobox-change="createDebugComponent"
      ></kup-combobox>
      <kup-text-field
        id="debug-props"
        label="Paste your JSON"
        text-area
        @kup-textfield-change="createDebugComponent"
      ></kup-text-field>
      <div
        id="debug-wrapper"
        title="Your component will be displayed here."
      ></div
    ></div>
  </div>
</template>

<style>
#debug-changer {
  margin-bottom: 1em;
  width: max-content;
}

#debug-props {
  padding-bottom: 2em;
}

#debug-section {
  border-bottom: 2px solid var(--kup-border-color);
  padding-bottom: 1em;
}

#debug-wrapper {
  border: 1px solid var(--kup-border-color);
  padding: 0.5em;
}
</style>

<script>
export default {
  name: 'DebuggingPicker',
  data() {
    return {
      comboboxData: {
        'kup-list': {
          data: [
            {
              value: 'kup-autocomplete',
              id: 'kup-autocomplete',
            },
            {
              value: 'kup-badge',
              id: 'kup-badge',
            },
            {
              value: 'kup-box',
              id: 'kup-box',
            },
            {
              value: 'kup-button-list',
              id: 'kup-button-list',
            },
            {
              value: 'kup-button',
              id: 'kup-button',
            },
            {
              value: 'kup-box',
              id: 'kup-box',
            },
            {
              value: 'kup-card',
              id: 'kup-card',
            },
            {
              value: 'kup-chart',
              id: 'kup-chart',
            },
            {
              value: 'kup-checkbox',
              id: 'kup-checkbox',
            },
            {
              value: 'kup-chip',
              id: 'kup-chip',
            },
            {
              value: 'kup-color-picker',
              id: 'kup-color-picker',
            },
            {
              value: 'kup-combobox',
              id: 'kup-combobox',
            },
            {
              value: 'kup-dash',
              id: 'kup-dash',
            },
            {
              value: 'kup-dash-list',
              id: 'kup-dash-list',
            },
            {
              value: 'kup-data-table',
              id: 'kup-data-table',
            },
            {
              value: 'kup-date-picker',
              id: 'kup-date-picker',
            },
            {
              value: 'kup-drawer',
              id: 'kup-drawer',
            },
            {
              value: 'kup-dropdown-button',
              id: 'kup-dropdown-button',
            },
            {
              value: 'kup-echart',
              id: 'kup-echart',
            },
            {
              value: 'kup-gauge',
              id: 'kup-gauge',
            },
            {
              value: 'kup-grid',
              id: 'kup-grid',
            },
            {
              value: 'kup-iframe',
              id: 'kup-iframe',
            },
            {
              value: 'kup-image',
              id: 'kup-image',
            },
            {
              value: 'kup-lazy',
              id: 'kup-lazy',
            },
            {
              value: 'kup-list',
              id: 'kup-list',
            },
            {
              value: 'kup-magic-box',
              id: 'kup-magic-box',
            },
            {
              value: 'kup-nav-bar',
              id: 'kup-nav-bar',
            },
            {
              value: 'kup-paginator',
              id: 'kup-paginator',
            },
            {
              value: 'kup-progress-bar',
              id: 'kup-progress-bar',
            },
            {
              value: 'kup-radio',
              id: 'kup-radio',
            },
            {
              value: 'kup-rating',
              id: 'kup-rating',
            },
            {
              value: 'kup-spinner',
              id: 'kup-spinner',
            },
            {
              value: 'kup-switch',
              id: 'kup-switch',
            },
            {
              value: 'kup-tab-bar',
              id: 'kup-tab-bar',
            },
            {
              value: 'kup-text-field',
              id: 'kup-text-field',
            },
            {
              value: 'kup-time-picker',
              id: 'kup-time-picker',
            },
            {
              value: 'kup-tree',
              id: 'kup-tree',
            },
          ],
        },
        'kup-text-field': {
          label: 'Select your component',
        },
      },
    };
  },
  methods: {
    createDebugComponent: (e) => {
      const promises = [
        document.querySelector('#debug-changer').getValue(),
        document.querySelector('#debug-props').getValue(),
      ];
      Promise.all(promises).then((responses) => {
        const compName = responses[0];
        let props = responses[1];
        const wrapper = document.querySelector('#debug-wrapper');
        const oldComp = document.querySelector('#debug-comp');
        if (oldComp) {
          oldComp.remove();
        }
        if (props && compName) {
          try {
            props = JSON.parse(props);
          } catch (error) {
            console.warn('Invalid JSON! ' + error);
            return;
          }
          const comp = document.createElement(compName);
          comp.id = 'debug-comp';
          for (const key in props) {
            comp[key] = props[key];
          }
          wrapper.append(comp);
        } else {
          const span = document.createElement('span');
          span.id = 'debug-comp';
          span.innerText = !props
            ? 'Did you forget to paste your props?'
            : 'Select a component.';
          wrapper.append(span);
        }
      });
    },
  },
};
</script>
