<template>
  <div>
    <demo
      :demoComp="demoComp"
      :demoEvents="demoEvents"
      :demoMethods="demoMethods"
      :demoProps="demoProps"
    ></demo>
  </div>
</template>

<script>
import Demo from '@/views/templates/Demo';
import { defaultData } from '@/mock/accordion';

export default {
  components: {
    Demo,
  },
  name: 'DialogDemo',
  data() {
    return {
      demoComp: createComp(),
      demoEvents: [
        {
          name: 'kup-dialog-close',
          type: 'CustomEvent',
        },
        {
          name: 'kup-dialog-ready',
          type: 'CustomEvent',
        },
      ],
      demoMethods: [
        {
          name: 'close',
          description: 'Closes the dialog detaching it from the DOM.',
        },
        {
          name: 'getProps',
          description:
            "Returns the props' values of the component. When invoked giving true as the only argument, returns the props descriptions instead.",
        },
        {
          name: 'refresh',
          description:
            'This method is used to trigger a new render of the component.',
        },
        {
          name: 'setProps',
          description: 'Sets the props to the component.',
        },
      ],
      demoProps: [
        {
          prop: 'autoCenter',
          description: 'Auto centers the dialog relatively to the viewport.',
          type: 'KupDialogAutoCenter',
          default: '{ onReady: true }',
          try: 'json',
        },
        {
          prop: 'customStyle',
          description:
            'Custom style of the component. For more information: https://smeup.github.io/ketchup/#/customization',
          type: 'string',
          default: '""',
          try: 'css',
        },
        {
          prop: 'header',
          description: 'Header options.',
          type: 'KupDialogHeader',
          default: '{ icons: { close: true } }',
          try: 'json',
        },
        {
          prop: 'modal',
          description: 'Set of options to display the dialog as a modal.',
          type: 'KupDialogModal',
          default: '{ closeOnBackdropClick: true }',
          try: 'json',
        },
        {
          prop: 'resizable',
          description: 'Sets whether the dialog is resizable or not.',
          type: 'boolean',
          default: 'true',
          try: 'switch',
        },
        {
          prop: 'sizeX',
          description:
            'The width of the dialog, defaults to auto. Accepts any valid CSS format (px, %, vw, etc.).',
          type: 'string',
          default: 'auto',
          try: 'field',
        },
        {
          prop: 'sizeY',
          description:
            'The height of the card, defaults to auto. Accepts any valid CSS format (px, %, vh, etc.).',
          type: 'string',
          default: 'auto',
          try: 'field',
        },
      ],
    };
  },
};

function createComp() {
  const slot = document.createElement('div');
  slot.innerText = 'This is a simple div which uses Ketchup theme colors.';
  slot.style.background = 'var(--kup-primary-color)';
  slot.style.color = 'var(--kup-text-on-primary-color)';
  slot.style.padding = '1.25em 2em';
  const comp = document.createElement('kup-dialog');
  comp.autoCenter = null;
  comp.modal = null;
  comp.data = defaultData;
  comp.id = 'demo-component';
  comp.appendChild(slot);
  return comp;
}
</script>
