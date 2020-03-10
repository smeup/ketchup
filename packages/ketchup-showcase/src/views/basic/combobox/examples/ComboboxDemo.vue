<template>
  <div>
    <demo :demoTabs="demoTabs" :demoComp="demoComp" :demoProps="demoProps" :demoEvents="demoEvents"></demo>
  </div>
</template>

<script>
import Demo from '@/views/advanced/page/templates/Demo';

export default {
  components: {
    Demo,
  },
  name: 'ComboboxDemo',
  data() {
    return {
      demoTabs: [
        {
          text: 'Props',
          icon: '',
          active: true,
        },
        {
          text: 'Events',
          icon: '',
          active: false,
        },
        {
          text: 'HTML',
          icon: '',
          active: false,
        },
        {
          text: 'JSON',
          icon: '',
          active: false,
        },
        {
          text: 'CSS',
          icon: '',
          active: false,
        },
      ],
      demoComp: '<wup-combobox id="demo-component"></wup-combobox>',
      demoProps: [
        {
          prop: 'customStyle',
          description:
            'Sets a custom style for the component by feeding this string into a <style> tag.',
          type: 'string',
          default: 'null',
          try: 'css',
        },
        {
          prop: 'data',
          description: 'The data of the list.',
          type: 'ComponentListElement',
          default: 'undefined',
          try: 'json',
        },
      ],
      demoEvents: [
        {
          name: 'kupComboboxClick',
          type: 'click',
        },
        {
          name: 'kupComboboxChange',
          type: 'change',
        },
        {
          name: 'kupComboboxInput',
          type: 'input',
        },
        {
          name: 'kupComboboxFocus',
          type: 'focus',
        },
        {
          name: 'kupComboboxBlur',
          type: 'blur',
        },
      ],
    };
  },
};
</script>
