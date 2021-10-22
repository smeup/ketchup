<template>
  <div>
    <demo
      :demoComp="demoComp"
      :demoProps="demoProps"
      :demoEvents="demoEvents"
      :demoMethods="demoMethods"
    >
    </demo>
  </div>
</template>

<script>
import Demo from '@/views/advanced/page/templates/Demo';
import { bornToDie, imageUrls, cellOptionsTree } from '@/mock/tooltip';
export default {
  components: {
    Demo,
  },
  name: 'TooltipDemo',

  data() {
    return {
      demoComp: createComp(),
      demoEvents: [
        {
          name: 'kup-tooltip-actioncommandclick',
          type: 'click',
        },
        {
          name: 'kup-tooltip-defaultactionclick',
          type: 'click',
        },
        {
          name: 'kup-tooltip-defaultoptionclick',
          type: 'click',
        },
        {
          name: 'kup-tooltip-defaultpreviewclick',
          type: 'click',
        },
        {
          name: 'kup-tooltip-loadcelloptions',
          type: 'custom',
        },
        {
          name: 'kup-tooltip-loaddata',
          type: 'custom',
        },
        {
          name: 'kup-tooltip-loaddetail',
          type: 'custom',
        },
        {
          name: 'kup-tooltip-treedynamicmassexpansion',
          type: 'custom',
        },
        {
          name: 'kup-tooltip-treenodebuttonclick',
          type: 'click',
        },
        {
          name: 'kup-tooltip-treenodedblclick',
          type: 'click',
        },
        {
          name: 'kup-tooltip-treenodeexpand',
          type: 'custom',
        },
        {
          name: 'kup-tooltip-treenodeselected',
          type: 'custom',
        },
      ],
      demoProps: [
        {
          prop: 'cellOptions',
          description: 'Data for cell options',
          type: 'TooltipCellOptions',
          default: 'undefined',
          try: 'json',
        },
        {
          prop: 'customStyle',
          description:
            'Custom style of the component. For more information: https://ketchup.smeup.com/ketchup-showcase/#/customization',
          type: 'string',
          default: '""',
          try: 'css',
        },
        {
          prop: 'data',
          description: 'Data for top section',
          type: 'TooltipData',
          default: 'undefined',
          try: 'json',
        },
        {
          prop: 'detailData',
          description: 'Data for the detail',
          type: 'TooltipDetailData',
          default: 'undefined',
          try: 'json',
        },
        {
          prop: 'detailTimeout',
          description: 'Timeout for loadDetail',
          type: 'number',
          default: '800',
          try: 'number',
        },
        {
          prop: 'layout',
          description: 'Layout used to display the items',
          type: 'string',
          default: "'1'",
          try: 'field',
        },
        {
          prop: 'loadTimeout',
          description: 'Timeout for tooltip',
          type: 'number',
          default: '1000',
          try: 'number',
        },
        {
          prop: 'owner',
          description: 'Owner of this tooltip',
          type: 'string',
          default: "'not-set'",
          try: 'field',
        },
        {
          prop: 'relatedObject',
          description: 'Container element for tooltip',
          type: 'TooltipRelatedObject',
          default: 'undefined',
          try: 'object',
        },
      ],
      demoMethods: [
        {
          name: 'getProps(descriptions?: boolean) => Promise<GenericObject>',
          description: "Used to retrieve component's props values",
        },
        {
          name: 'refresh() => Promise<void>',
          description: "Used to retrieve component's props values",
        },
        {
          name: 'setProps(props: GenericObject) => Promise<void>',
          description: 'Sets the props to the component.',
        },
        {
          name: 'setTooltipInfo(relatedObject: TooltipRelatedObject) => Promise<void>',
          description: '',
        },
        {
          name: 'unsetTooltipInfo() => Promise<void>',
          description: '',
        },
      ],
    };
  },
};

function createComp() {
  let comp = document.createElement('div');
  let compSurface = document.createElement('span');
  let compEl = document.createElement('kup-tooltip');
  comp.classList.add('badge-anchor');
  compSurface.innerText = 'Right click me!';
  compEl.id = 'demo-component';
  comp.addEventListener('contextmenu', function (event) {
    event.preventDefault();
    if (event.button === 2) {
      compEl.relatedObject = { element: comp };
      compEl.loadTimeout = 250;
    }
  });
  compEl.addEventListener('kup-tooltip-loadcelloptions', function ({ detail }) {
    setTimeout(() => (compEl.cellOptions = cellOptionsTree), 250);
  });
  compEl.addEventListener('kup-tooltip-loaddetail', function (event) {
    setTimeout(() => (compEl.detailData = bornToDie), 250);
  });
  compEl.addEventListener('kup-tooltip-loaddata', function (event) {
    compEl.data = {
      image: imageUrls.bornToDie,
      title: 'Born to die',
      content: {
        info1: {
          label: 'Author',
          value: 'Lana del Rey',
        },
        info2: {
          label: 'Year',
          value: 2012,
        },
      },
    };
  });
  comp.appendChild(compSurface);
  comp.appendChild(compEl);
  return comp;
}
</script>
