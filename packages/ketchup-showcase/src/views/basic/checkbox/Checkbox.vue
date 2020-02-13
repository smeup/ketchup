<template>
  <div>
    <comp :giturl="giturl" :headtitle="headtitle" :titles="titles">
      <template v-slot:0>
        <demo
          :demoTabs="demoTabs"
          :demoComp="demoComp"
          :demoProps="demoProps"
          :demoEvents="demoEvents"
        ></demo>
        <checkbox-basic></checkbox-basic>
      </template>
      <template v-slot:1>
        <checkbox-labels></checkbox-labels>
      </template>
      <template v-slot:2>
        <checkbox-disabled></checkbox-disabled>
      </template>
    </comp>
  </div>
</template>

<script>
import CheckboxBasic from '@/views/basic/checkbox/examples/CheckboxBasic';
import CheckboxLabels from '@/views/basic/checkbox/examples/CheckboxLabels';
import CheckboxDisabled from '@/views/basic/checkbox/examples/CheckboxDisabled';
import Comp from '@/views/advanced/page/templates/Comp';
import Demo from '@/views/advanced/page/templates/Demo';
export default {
  components: {
    CheckboxBasic,
    CheckboxLabels,
    CheckboxDisabled,
    Comp,
    Demo,
  },
  data() {
    return {
      giturl:
        'https://github.com/smeup/ketchup/tree/develop/packages/ketchup/src/components/wup-checkbox',
      headtitle: 'Checkbox',
      titles: ['Basic usage', 'Adding labels', 'Disabled'],
      demoTabs: [
        {
          text: 'Props',
          icon: '',
          status: 'Active',
        },
        {
          text: 'Events',
          icon: '',
          status: '',
        },
        {
          text: 'HTML',
          icon: '',
          status: '',
        },
      ],
      demoComp: '<wup-checkbox id="demo-component"></wup-checkbox>',
      demoProps: [
        {
          prop: 'checked',
          description: 'Sets the component to checked state.',
          type: 'boolean',
          default: 'false',
          try: 'switch',
        },
        {
          prop: 'disabled',
          description:
            'Sets the component to disabled state, making it not interactable.',
          type: 'boolean',
          default: 'false',
          try: 'switch',
        },
        {
          prop: 'indeterminate',
          description: 'Sets the component to an indeterminate state.',
          type: 'boolean',
          default: 'false',
          try: 'switch',
        },
        {
          prop: 'labelleft',
          description:
            'Displays the value of this prop on the left of the component as a label. Attribute labelleft must be null.',
          type: 'string',
          default: 'null',
          try: 'field',
        },
        {
          prop: 'labelright',
          description:
            'Displays the value of this prop on the right of the component as a label. Attribute labelright must be null.',
          type: 'string',
          default: 'null',
          try: 'field',
        },
      ],
      demoEvents: [
        {
          name: 'kupCheckboxClick',
          type: 'click',
          refId: 'onkupCheckboxClick',
        },
        {
          name: 'kupCheckboxChange',
          type: 'change',
          refId: 'onkupCheckboxChange',
        },
        {
          name: 'kupCheckboxInput',
          type: 'input',
          refId: 'onkupCheckboxInput',
        },
        {
          name: 'kupCheckboxFocus',
          type: 'focus',
          refId: 'onkupCheckboxFocus',
        },
        {
          name: 'kupCheckboxBlur',
          type: 'blur',
          refId: 'onkupCheckboxBlur',
        },
      ],
    };
  },
};
</script>
