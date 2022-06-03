<template>
  <div>
    <demo
      :demoComp="demoComp"
      :demoEvents="demoEvents"
      :demoMethods="demoMethods"
      :demoProps="demoProps"
    >
    </demo>
  </div>
</template>

<script>
import Demo from '@/views/templates/Demo';

export default {
  components: {
    Demo,
  },
  name: 'DashboardDemo',
  data() {
    return {
      demoComp: createComp(),
      demoEvents: [
        {
          name: 'kup-dashboard-save',
          type: 'CustomEvent',
        },
      ],
      demoMethods: [
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
          prop: 'customStyle',
          description:
            'Custom style of the component. For more information: https://ketchup.smeup.com/ketchup-showcase/#/customization',
          type: 'string',
          default: '""',
          try: 'css',
        },
        {
          prop: 'data',
          description: 'The actual data of the dashboard.',
          type: 'KupDataDashboard',
          default: 'null',
          try: 'json',
        },
        {
          prop: 'enableDesign',
          description:
            'Defines whether the dashboard is in design mode and it is draggable or not.',
          type: 'boolean',
          default: 'false',
          try: 'switch',
        },
      ],
    };
  },
};

function createComp() {
  const comp = document.createElement('kup-dashboard');

  const slot1 = document.createElement('h2');
  slot1.slot = 'SA';
  slot1.style.marginLeft = 'auto';
  slot1.style.marginRight = 'auto';
  slot1.innerText = "Component 1 in section 'SA'";
  comp.appendChild(slot1);

  const slot2 = document.createElement('h2');
  slot2.slot = 'SB';
  slot2.style.marginLeft = 'auto';
  slot2.style.marginRight = 'auto';
  slot2.innerText = "Component 2 in section 'SB'";
  comp.appendChild(slot2);

  const slot3 = document.createElement('h2');
  slot3.slot = 'SC';
  slot3.style.marginLeft = 'auto';
  slot3.style.marginRight = 'auto';
  slot3.innerText = "Component 3 in section 'SC'";
  comp.appendChild(slot3);

  const slot4 = document.createElement('h2');
  slot4.slot = 'SD';
  slot4.style.marginLeft = 'auto';
  slot4.style.marginRight = 'auto';
  slot4.innerText = "Component 4 in section 'SD'";
  comp.appendChild(slot4);

  comp.data = {
    layout: 'column',
    sections: [
      {
        layout: 'column',
        sections: [],
        id: 'SA',
        loaded: true,
      },
      {
        layout: 'column',
        sections: [],
        id: 'SB',
        loaded: true,
      },
      {
        layout: 'column',
        sections: [],
        id: 'SC',
        loaded: true,
      },
      {
        layout: 'column',
        sections: [],
        id: 'SD',
        loaded: true,
      },
    ],
    fun: 'F(EXD;*SCO;) 2(MB;SCP_SCH;MU_X21_01)',
    type: 'SCH',
    loaded: true,
  };

  comp.id = 'demo-component';
  return comp;
}
</script>
