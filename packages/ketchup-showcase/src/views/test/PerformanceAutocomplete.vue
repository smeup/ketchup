<template>
  <div>
    <div id="performance-wrapper"></div>
  </div>
</template>

<script>
export default {
  name: 'PerformanceAutocomplete',
  mounted() {
    document.documentElement.kupDebug = true;
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

const compSort = [
  {
    column: 'COMCOD',
    sortMode: 'A',
  },
];

const compGroups = [
  {
    column: 'COMA01',
    visible: true,
  },
];
</script>
