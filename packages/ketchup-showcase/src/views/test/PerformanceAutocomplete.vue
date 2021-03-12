<template>
  <div>
    <div id="performance-wrapper"></div>
  </div>
</template>

<script>
document.documentElement['ketchupInit'] = { debug: { active: true } };

export default {
  name: 'PerformanceAutocomplete',
  mounted() {
    const dom = document.documentElement;
    if (dom.ketchup) {
      dom.ketchup.debug.toggle(true);
    }
    let wrapper = document.querySelector('#performance-wrapper');
    for (let index = 0; index < 300; index++) {
      let comp = document.createElement('kup-autocomplete');
      comp.listData = {
        data: [
          {
            text: 'First item',
            value: 'CODE_1',
          },
          {
            text: 'Second item',
            value: 'CODE_2',
          },
          {
            text: 'Third item',
            value: 'CODE_3',
          },
        ],
        displayMode: 'both',
        selectable: true,
      };
      comp.minimumChars = '1';
      comp.selectMode = 'description';
      comp.textfieldData = {
        icon: 'arrow_drop_down',
        label: 'demo',
        trailingIcon: true,
      };
      wrapper.appendChild(comp);
    }
  },
};
</script>
