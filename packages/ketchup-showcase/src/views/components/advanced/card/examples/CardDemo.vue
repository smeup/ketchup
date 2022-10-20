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
import { baseData } from '@/mock/chart';

export default {
  components: {
    Demo,
  },
  name: 'CardDemo',
  data() {
    return {
      demoComp: createComp(),
      demoEvents: [
        {
          name: 'kup-card-click',
          type: 'click',
        },
        {
          name: 'kup-card-close',
          type: 'click',
        },
        {
          name: 'kup-card-event',
          type: 'custom',
        },
        {
          name: 'kup-card-ready',
          type: 'custom',
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
          name: 'resizeCallback',
          description:
            'This method is invoked by KupManager whenever the component changes size.',
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
          description: 'The actual data of the card.',
          type: 'KupCardData',
          default: 'null',
          try: 'json',
        },
        {
          prop: 'isMenu',
          description: 'Defines whether the card is a menu or not.',
          type: 'boolean',
          default: 'false',
          try: 'switch',
        },
        {
          prop: 'layoutFamily',
          description:
            'Sets the type of the card. Currently supported values: "box", "built-in", "collapsible", "dialog",  "free", "scalable", "standard".',
          type: 'KupCardFamily',
          default: 'standard',
          try: 'field',
        },
        {
          prop: 'layoutNumber',
          description: 'Sets the number of the layout.',
          type: 'number',
          default: '1',
          try: 'field',
        },
        {
          prop: 'menuVisible',
          description:
            "Sets the status of the menu, when false it's hidden otherwise it's visible.",
          type: 'boolean',
          default: 'false',
          try: 'switch',
        },
        {
          prop: 'sizeX',
          description:
            'The width of the card, defaults to 100%. Accepts any valid CSS format (px, %, vw, etc.).',
          type: 'string',
          default: '100%',
          try: 'field',
        },
        {
          prop: 'sizeY',
          description:
            'The height of the card, defaults to 100%. Accepts any valid CSS format (px, %, vh, etc.).',
          type: 'string',
          default: '100%',
          try: 'field',
        },
      ],
    };
  },
};

function createComp() {
  let comp = document.createElement('kup-card');
  comp.data = {
    button: [
      { icon: 'play', flat: true },
      { icon: 'favorite', flat: true },
      { icon: 'share', label: 'share' },
    ],
    chart: [
      {
        title: 'chart1',
        data: baseData,
        series: ['Col2', 'Col3', 'Col4'],
        axis: 'Col1',
        offlineMode: { value: '1;7;-5;6;10;-5;3;4', shape: 'line' },
      },
    ],
    checkbox: [
      {
        label: 'checkbox[0]',
        title: 'checkbox[0]',
      },
      {
        label: 'checkbox[1]',
        title: 'checkbox[1]',
      },
      {
        label: 'checkbox[2]',
        title: 'checkbox[2]',
      },
      {
        label: 'checkbox[3]',
        title: 'checkbox[3]',
      },
      {
        label: 'checkbox[4]',
        title: 'checkbox[4]',
      },
      {
        label: 'checkbox[5]',
        title: 'checkbox[5]',
      },
      {
        label: 'checkbox[6]',
        title: 'checkbox[6]',
      },
    ],
    chip: [
      {
        title: 'chip1',
        data: [
          {
            icon: 'filter_1',
            id: '1_chip',
            value: 'First chip',
          },
          {
            icon: 'filter_2',
            id: '2_chip',
            value: 'Second chip',
          },
          {
            icon: 'filter_3',
            id: '3_chip',
            value: 'Third chip',
          },
          {
            icon: 'filter_4',
            id: '4_chip',
            value: 'Fourth chip',
          },
          {
            icon: 'filter_5',
            id: '5_chip',
            value: 'Fifth chip',
          },
          {
            icon: 'filter_6',
            id: '6_chip',
            value: 'Sixth chip',
          },
          {
            icon: 'filter_7',
            id: '7_chip',
            value: 'Seventh chip',
          },
          {
            icon: 'filter_8',
            id: '8_chip',
            value: 'Eighth chip',
          },
          {
            icon: 'filter_9',
            id: '9_chip',
            value: 'Ninth chip',
          },
        ],
      },
    ],
    color: ['#498204', 'var(--kup-title-background-color)'],
    image: [
      {
        resource: 'images/catz_small.jpg',
      },
      { resource: 'widgets' },
    ],
    progressbar: [{ value: 75, centeredLabel: false }],
    text: [
      'I am a title',
      'I am a subtitle',
      'I am a description, so I need more words compared to other texts. I will contain some nonsense, apologies.',
      'Text #4',
      'Text #5',
      'Text #6',
      'Text #7',
    ],
    textfield: [
      {
        fullWidth: true,
        icon: 'widgets',
        isClearable: true,
        label: 'textfield[0]',
        title: 'textfield[0]',
      },
    ],
    tree: [
      {
        data: [
          {
            cells: {
              Mat: {
                obj: {
                  t: 'NR',
                  p: '',
                  k: '00Mat',
                },
                value: '00Mat',
                options: true,
              },
              Program: {
                obj: {
                  t: 'NR',
                  p: '',
                  k: '00Program',
                },
                value: '00Program',
                options: false,
              },
              Attack: {
                obj: {
                  t: 'NR',
                  p: '',
                  k: '00Attack',
                },
                value: '00Attack',
                options: true,
              },
            },
            children: [
              {
                cells: {
                  Mat: {
                    obj: {
                      t: 'NR',
                      p: '',
                      k: '10Mat',
                    },
                    value: '10Mat',
                    options: false,
                  },
                  Program: {
                    obj: {
                      t: 'NR',
                      p: '',
                      k: '10Program',
                    },
                    value: '10Program',
                    options: false,
                  },
                  Attack: {
                    obj: {
                      t: 'NR',
                      p: '',
                      k: '10Attack',
                    },
                    value: '10Attack',
                    options: true,
                  },
                },
                children: [],
                disabled: false,
                expandable: false,
                icon: 'filter_1',
                id: '00100',
                isExpanded: false,
                obj: {
                  t: 'TN',
                  p: '',
                  k: 'First column',
                },
                options: false,
                value: 'First column',
                visible: true,
              },
              {
                cells: {
                  Mat: {
                    obj: {
                      t: 'NR',
                      p: '',
                      k: '10Mat',
                    },
                    value: '10Mat',
                    options: false,
                  },
                  Program: {
                    obj: {
                      t: 'NR',
                      p: '',
                      k: '10Program',
                    },
                    value: '10Program',
                    options: false,
                  },
                  Attack: {
                    obj: {
                      t: 'NR',
                      p: '',
                      k: '10Attack',
                    },
                    value: '10Attack',
                    options: true,
                  },
                },
                children: [],
                disabled: false,
                expandable: false,
                icon: 'filter_1',
                id: '00100',
                isExpanded: false,
                obj: {
                  t: 'TN',
                  p: '',
                  k: 'First column',
                },
                options: false,
                value: 'First column',
                visible: true,
              },
              {
                cells: {
                  Mat: {
                    obj: {
                      t: 'NR',
                      p: '',
                      k: '10Mat',
                    },
                    value: '10Mat',
                    options: false,
                  },
                  Program: {
                    obj: {
                      t: 'NR',
                      p: '',
                      k: '10Program',
                    },
                    value: '10Program',
                    options: false,
                  },
                  Attack: {
                    obj: {
                      t: 'NR',
                      p: '',
                      k: '10Attack',
                    },
                    value: '10Attack',
                    options: true,
                  },
                },
                children: [],
                disabled: false,
                expandable: false,
                icon: 'filter_1',
                id: '00100',
                isExpanded: false,
                obj: {
                  t: 'TN',
                  p: '',
                  k: 'First column',
                },
                options: false,
                value: 'First column',
                visible: true,
              },
              {
                cells: {
                  Mat: {
                    obj: {
                      t: 'NR',
                      p: '',
                      k: '10Mat',
                    },
                    value: '10Mat',
                    options: false,
                  },
                  Program: {
                    obj: {
                      t: 'NR',
                      p: '',
                      k: '10Program',
                    },
                    value: '10Program',
                    options: false,
                  },
                  Attack: {
                    obj: {
                      t: 'NR',
                      p: '',
                      k: '10Attack',
                    },
                    value: '10Attack',
                    options: true,
                  },
                },
                children: [],
                disabled: false,
                expandable: false,
                icon: 'filter_1',
                id: '00100',
                isExpanded: false,
                obj: {
                  t: 'TN',
                  p: '',
                  k: 'First column',
                },
                options: false,
                value: 'First column',
                visible: true,
              },
              {
                cells: {
                  Mat: {
                    obj: {
                      t: 'NR',
                      p: '',
                      k: '10Mat',
                    },
                    value: '10Mat',
                    options: false,
                  },
                  Program: {
                    obj: {
                      t: 'NR',
                      p: '',
                      k: '10Program',
                    },
                    value: '10Program',
                    options: false,
                  },
                  Attack: {
                    obj: {
                      t: 'NR',
                      p: '',
                      k: '10Attack',
                    },
                    value: '10Attack',
                    options: true,
                  },
                },
                children: [],
                disabled: false,
                expandable: false,
                icon: 'filter_1',
                id: '00100',
                isExpanded: false,
                obj: {
                  t: 'TN',
                  p: '',
                  k: 'First column',
                },
                options: false,
                value: 'First column',
                visible: true,
              },
              {
                cells: {
                  Mat: {
                    obj: {
                      t: 'NR',
                      p: '',
                      k: '10Mat',
                    },
                    value: '10Mat',
                    options: false,
                  },
                  Program: {
                    obj: {
                      t: 'NR',
                      p: '',
                      k: '10Program',
                    },
                    value: '10Program',
                    options: false,
                  },
                  Attack: {
                    obj: {
                      t: 'NR',
                      p: '',
                      k: '10Attack',
                    },
                    value: '10Attack',
                    options: true,
                  },
                },
                children: [],
                disabled: false,
                expandable: false,
                icon: 'filter_1',
                id: '00100',
                isExpanded: false,
                obj: {
                  t: 'TN',
                  p: '',
                  k: 'First column',
                },
                options: false,
                value: 'First column',
                visible: true,
              },
              {
                cells: {
                  Mat: {
                    obj: {
                      t: 'NR',
                      p: '',
                      k: '10Mat',
                    },
                    value: '10Mat',
                    options: false,
                  },
                  Program: {
                    obj: {
                      t: 'NR',
                      p: '',
                      k: '10Program',
                    },
                    value: '10Program',
                    options: false,
                  },
                  Attack: {
                    obj: {
                      t: 'NR',
                      p: '',
                      k: '10Attack',
                    },
                    value: '10Attack',
                    options: true,
                  },
                },
                children: [],
                disabled: false,
                expandable: false,
                icon: 'filter_1',
                id: '00100',
                isExpanded: false,
                obj: {
                  t: 'TN',
                  p: '',
                  k: 'First column',
                },
                options: false,
                value: 'First column',
                visible: true,
              },
              {
                cells: {
                  Mat: {
                    obj: {
                      t: 'NR',
                      p: '',
                      k: '10Mat',
                    },
                    value: '10Mat',
                    options: false,
                  },
                  Program: {
                    obj: {
                      t: 'NR',
                      p: '',
                      k: '10Program',
                    },
                    value: '10Program',
                    options: false,
                  },
                  Attack: {
                    obj: {
                      t: 'NR',
                      p: '',
                      k: '10Attack',
                    },
                    value: '10Attack',
                    options: true,
                  },
                },
                children: [],
                disabled: false,
                expandable: false,
                icon: 'filter_1',
                id: '00100',
                isExpanded: false,
                obj: {
                  t: 'TN',
                  p: '',
                  k: 'First column',
                },
                options: false,
                value: 'First column',
                visible: true,
              },
              {
                cells: {
                  Mat: {
                    obj: {
                      t: 'NR',
                      p: '',
                      k: '10Mat',
                    },
                    value: '10Mat',
                    options: false,
                  },
                  Program: {
                    obj: {
                      t: 'NR',
                      p: '',
                      k: '10Program',
                    },
                    value: '10Program',
                    options: false,
                  },
                  Attack: {
                    obj: {
                      t: 'NR',
                      p: '',
                      k: '10Attack',
                    },
                    value: '10Attack',
                    options: true,
                  },
                },
                children: [],
                disabled: false,
                expandable: false,
                icon: 'filter_1',
                id: '00100',
                isExpanded: false,
                obj: {
                  t: 'TN',
                  p: '',
                  k: 'First column',
                },
                options: false,
                value: 'First column',
                visible: true,
              },
              {
                cells: {
                  Mat: {
                    obj: {
                      t: 'NR',
                      p: '',
                      k: '10Mat',
                    },
                    value: '10Mat',
                    options: false,
                  },
                  Program: {
                    obj: {
                      t: 'NR',
                      p: '',
                      k: '10Program',
                    },
                    value: '10Program',
                    options: false,
                  },
                  Attack: {
                    obj: {
                      t: 'NR',
                      p: '',
                      k: '10Attack',
                    },
                    value: '10Attack',
                    options: true,
                  },
                },
                children: [],
                disabled: false,
                expandable: false,
                icon: 'filter_1',
                id: '00100',
                isExpanded: false,
                obj: {
                  t: 'TN',
                  p: '',
                  k: 'First column',
                },
                options: false,
                value: 'First column',
                visible: true,
              },
              {
                cells: {
                  Mat: {
                    obj: {
                      t: 'NR',
                      p: '',
                      k: '10Mat',
                    },
                    value: '10Mat',
                    options: false,
                  },
                  Program: {
                    obj: {
                      t: 'NR',
                      p: '',
                      k: '10Program',
                    },
                    value: '10Program',
                    options: false,
                  },
                  Attack: {
                    obj: {
                      t: 'NR',
                      p: '',
                      k: '10Attack',
                    },
                    value: '10Attack',
                    options: true,
                  },
                },
                children: [],
                disabled: false,
                expandable: false,
                icon: 'filter_1',
                id: '00100',
                isExpanded: false,
                obj: {
                  t: 'TN',
                  p: '',
                  k: 'First column',
                },
                options: false,
                value: 'First column',
                visible: true,
              },
              {
                cells: {
                  Mat: {
                    obj: {
                      t: 'NR',
                      p: '',
                      k: '10Mat',
                    },
                    value: '10Mat',
                    options: false,
                  },
                  Program: {
                    obj: {
                      t: 'NR',
                      p: '',
                      k: '10Program',
                    },
                    value: '10Program',
                    options: false,
                  },
                  Attack: {
                    obj: {
                      t: 'NR',
                      p: '',
                      k: '10Attack',
                    },
                    value: '10Attack',
                    options: true,
                  },
                },
                children: [],
                disabled: false,
                expandable: false,
                icon: 'filter_1',
                id: '00100',
                isExpanded: false,
                obj: {
                  t: 'TN',
                  p: '',
                  k: 'First column',
                },
                options: false,
                value: 'First column',
                visible: true,
              },
              {
                cells: {
                  Mat: {
                    obj: {
                      t: 'NR',
                      p: '',
                      k: '10Mat',
                    },
                    value: '10Mat',
                    options: false,
                  },
                  Program: {
                    obj: {
                      t: 'NR',
                      p: '',
                      k: '10Program',
                    },
                    value: '10Program',
                    options: false,
                  },
                  Attack: {
                    obj: {
                      t: 'NR',
                      p: '',
                      k: '10Attack',
                    },
                    value: '10Attack',
                    options: true,
                  },
                },
                children: [],
                disabled: false,
                expandable: false,
                icon: 'filter_1',
                id: '00100',
                isExpanded: false,
                obj: {
                  t: 'TN',
                  p: '',
                  k: 'First column',
                },
                options: false,
                value: 'First column',
                visible: true,
              },
              {
                cells: {
                  Mat: {
                    obj: {
                      t: 'NR',
                      p: '',
                      k: '10Mat',
                    },
                    value: '10Mat',
                    options: false,
                  },
                  Program: {
                    obj: {
                      t: 'NR',
                      p: '',
                      k: '10Program',
                    },
                    value: '10Program',
                    options: false,
                  },
                  Attack: {
                    obj: {
                      t: 'NR',
                      p: '',
                      k: '10Attack',
                    },
                    value: '10Attack',
                    options: true,
                  },
                },
                children: [],
                disabled: false,
                expandable: false,
                icon: 'filter_1',
                id: '00100',
                isExpanded: false,
                obj: {
                  t: 'TN',
                  p: '',
                  k: 'First column',
                },
                options: false,
                value: 'First column',
                visible: true,
              },
              {
                cells: {
                  Mat: {
                    obj: {
                      t: 'NR',
                      p: '',
                      k: '10Mat',
                    },
                    value: '10Mat',
                    options: false,
                  },
                  Program: {
                    obj: {
                      t: 'NR',
                      p: '',
                      k: '10Program',
                    },
                    value: '10Program',
                    options: false,
                  },
                  Attack: {
                    obj: {
                      t: 'NR',
                      p: '',
                      k: '10Attack',
                    },
                    value: '10Attack',
                    options: true,
                  },
                },
                children: [],
                disabled: false,
                expandable: false,
                icon: 'filter_1',
                id: '00100',
                isExpanded: false,
                obj: {
                  t: 'TN',
                  p: '',
                  k: 'First column',
                },
                options: false,
                value: 'First column',
                visible: true,
              },
              {
                cells: {
                  Mat: {
                    obj: {
                      t: 'NR',
                      p: '',
                      k: '10Mat',
                    },
                    value: '10Mat',
                    options: false,
                  },
                  Program: {
                    obj: {
                      t: 'NR',
                      p: '',
                      k: '10Program',
                    },
                    value: '10Program',
                    options: false,
                  },
                  Attack: {
                    obj: {
                      t: 'NR',
                      p: '',
                      k: '10Attack',
                    },
                    value: '10Attack',
                    options: true,
                  },
                },
                children: [],
                disabled: false,
                expandable: false,
                icon: 'filter_1',
                id: '00100',
                isExpanded: false,
                obj: {
                  t: 'TN',
                  p: '',
                  k: 'First column',
                },
                options: false,
                value: 'First column',
                visible: true,
              },
              {
                cells: {
                  Mat: {
                    obj: {
                      t: 'NR',
                      p: '',
                      k: '10Mat',
                    },
                    value: '10Mat',
                    options: false,
                  },
                  Program: {
                    obj: {
                      t: 'NR',
                      p: '',
                      k: '10Program',
                    },
                    value: '10Program',
                    options: false,
                  },
                  Attack: {
                    obj: {
                      t: 'NR',
                      p: '',
                      k: '10Attack',
                    },
                    value: '10Attack',
                    options: true,
                  },
                },
                children: [],
                disabled: false,
                expandable: false,
                icon: 'filter_1',
                id: '00100',
                isExpanded: false,
                obj: {
                  t: 'TN',
                  p: '',
                  k: 'First column',
                },
                options: false,
                value: 'First column',
                visible: true,
              },
              {
                cells: {
                  Mat: {
                    obj: {
                      t: 'NR',
                      p: '',
                      k: '10Mat',
                    },
                    value: '10Mat',
                    options: false,
                  },
                  Program: {
                    obj: {
                      t: 'NR',
                      p: '',
                      k: '10Program',
                    },
                    value: '10Program',
                    options: false,
                  },
                  Attack: {
                    obj: {
                      t: 'NR',
                      p: '',
                      k: '10Attack',
                    },
                    value: '10Attack',
                    options: true,
                  },
                },
                children: [],
                disabled: false,
                expandable: false,
                icon: 'filter_1',
                id: '00100',
                isExpanded: false,
                obj: {
                  t: 'TN',
                  p: '',
                  k: 'First column',
                },
                options: false,
                value: 'First column',
                visible: true,
              },
              {
                cells: {
                  Mat: {
                    obj: {
                      t: 'NR',
                      p: '',
                      k: '10Mat',
                    },
                    value: '10Mat',
                    options: false,
                  },
                  Program: {
                    obj: {
                      t: 'NR',
                      p: '',
                      k: '10Program',
                    },
                    value: '10Program',
                    options: false,
                  },
                  Attack: {
                    obj: {
                      t: 'NR',
                      p: '',
                      k: '10Attack',
                    },
                    value: '10Attack',
                    options: true,
                  },
                },
                children: [],
                disabled: false,
                expandable: false,
                icon: 'filter_1',
                id: '00100',
                isExpanded: false,
                obj: {
                  t: 'TN',
                  p: '',
                  k: 'First column',
                },
                options: false,
                value: 'First column',
                visible: true,
              },
              {
                cells: {
                  Mat: {
                    obj: {
                      t: 'NR',
                      p: '',
                      k: '10Mat',
                    },
                    value: '10Mat',
                    options: false,
                  },
                  Program: {
                    obj: {
                      t: 'NR',
                      p: '',
                      k: '10Program',
                    },
                    value: '10Program',
                    options: false,
                  },
                  Attack: {
                    obj: {
                      t: 'NR',
                      p: '',
                      k: '10Attack',
                    },
                    value: '10Attack',
                    options: true,
                  },
                },
                children: [],
                disabled: false,
                expandable: false,
                icon: 'filter_1',
                id: '00100',
                isExpanded: false,
                obj: {
                  t: 'TN',
                  p: '',
                  k: 'First column',
                },
                options: false,
                value: 'First column',
                visible: true,
              },
              {
                cells: {
                  Mat: {
                    obj: {
                      t: 'NR',
                      p: '',
                      k: '11Mat',
                    },
                    value: '11Mat',
                    options: false,
                  },
                  Program: {
                    obj: {
                      t: 'NR',
                      p: '',
                      k: '11Program',
                    },
                    value: '11Program',
                    options: true,
                  },
                  Attack: {
                    obj: {
                      t: 'NR',
                      p: '',
                      k: '11Attack',
                    },
                    value: '11Attack',
                    options: false,
                  },
                },
                disabled: false,
                expandable: true,
                icon: 'filter_2',
                id: '00111',
                isExpanded: true,
                obj: {
                  t: 'TN',
                  p: '',
                  k: 'Second column',
                },
                options: false,
                value: 'Second column',
                visible: true,
              },
            ],
            disabled: false,
            expandable: true,
            icon: 'widgets',
            id: '0005',
            isExpanded: true,
            obj: {
              t: '',
              p: '',
              k: 'Favorites',
            },
            options: true,
            value: 'Favorites',
            visible: true,
          },
        ],
      },
    ],
  };
  comp.id = 'demo-component';
  comp.layoutFamily = 'standard';
  comp.layoutNumber = '1';
  comp.sizeX = '100%';
  comp.sizeY = '100%';
  return comp;
}
</script>
