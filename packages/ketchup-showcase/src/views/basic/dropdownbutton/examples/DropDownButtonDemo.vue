<template>
  <div>
    <demo
      :demoComp="demoComp"
      :demoEvents="demoEvents"
      :demoProps="demoProps"
      :demoClasses="demoClasses"
    ></demo>
  </div>
</template>

<script>
import Demo from '@/views/advanced/page/templates/Demo';

export default {
  components: {
    Demo,
  },
  name: 'DropdownButtonDemo',
  data() {
    return {
      demoComp: createComp(),
      demoEvents: [
        {
          name: 'kupDropdownButtonClick',
          type: 'click',
        },
        {
          name: 'kupDropdownButtonFocus',
          type: 'focus',
        },
        {
          name: 'kupDropdownButtonBlur',
          type: 'blur',
        },
        {
          name: 'kupDropdownSelectionChange',
          type: 'change',
        },
        {
          name: 'kupDropdownSelectionItemClick',
          type: 'click',
        },
      ],
      demoProps: [
        {
          prop: 'customStyle',
          description:
            'Custom style of the component. For more information: https://ketchup.smeup.com/ketchup-showcase/#/customization',
          type: 'string',
          default: 'undefined',
          try: 'css',
        },
        {
          prop: 'data',
          description: 'Props of the sub-components.',
          type: 'Object',
          default: 'undefined',
          try: 'json',
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
          prop: 'displayMode',
          description:
            'Sets how the show the selected item value. Suported values: "code", "description", "both".',
          type: 'string',
          default: 'description',
          try: 'field',
        },
        {
          prop: 'icon',
          description:
            'The button will be rendered with the specified Material Design icon.',
          type: 'string',
          default: 'null',
          try: 'field',
        },
        {
          prop: 'initialValue',
          description: 'Sets the initial value of the component.',
          type: 'string',
          default: '""',
          try: 'field',
        },
        {
          prop: 'label',
          description:
            "The button's text. If no value is specified, the button will render as an icon button, in this variant specifying an icon is mandatory.",
          type: 'string',
          default: 'null',
          try: 'field',
        },
        {
          prop: 'selectMode',
          description:
            'Sets how the return the selected item value. Suported values: "code", "description", "both".',
          type: 'string',
          default: 'description',
          try: 'field',
        },
        {
          prop: 'styling',
          description:
            'Defines the style of the button. Available style are "flat" and "outlined", "raised" is the default.',
          type: 'string',
          default: '""',
          try: 'field',
        },
        {
          prop: 'trailingIcon',
          description:
            'The button will display its associated icon after the text.',
          type: 'boolean',
          default: 'false',
          try: 'switch',
        },
      ],
      demoClasses: [
        {
          class: 'full-height',
          description: 'The button will fill all the available vertical space.',
        },
        {
          class: 'full-width',
          description:
            'The button will fill all the available horizontal space.',
        },
        {
          class: 'kup-secondary-color',
          description:
            'The component will be rendered using the secondary color of the app.',
        },
        {
          class: 'shaped',
          description: 'The borders of the button will be shaped.',
        },
      ],
    };
  },
};

function createComp() {
  let comp = document.createElement('kup-dropdown-button');
  comp.icon = 'document';
  comp.id = 'demo-component';
  comp.label = 'View Document';
  return comp;
}
</script>
