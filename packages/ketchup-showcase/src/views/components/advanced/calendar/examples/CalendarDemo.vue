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

export default {
  components: {
    Demo,
  },
  name: 'CalendarDemo',
  data() {
    return {
      demoComp: createComp(),
      demoEvents: [
        {
          name: 'kup-calendar-dateclick',
          type: 'click',
        },
        {
          name: 'kup-calendar-eventclick',
          type: 'click',
        },
        {
          name: 'kup-calendar-eventdrop',
          type: 'click',
        },
        {
          name: 'kup-calendar-viewchange',
          type: 'click',
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
          prop: 'currentDate',
          description:
            'Sets the initial date of the calendar. Must be in ISO format (YYYY-MM-DD).',
          type: 'string',
          default: 'null',
          try: 'field',
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
          description: 'The actual data of the calendar.',
          type: 'KupCalendarData',
          default: 'null',
          try: 'json',
        },
        {
          prop: 'hideNavigation',
          description:
            "When disabled, the navigation toolbar won't be displayed.",
          type: 'boolean',
          default: 'false',
          try: 'switch',
        },
        {
          prop: 'viewType',
          description: 'Type of the view.',
          type: 'KupCalendarViewTypes',
          default: 'KupCalendarViewTypes.MONTH',
          try: 'field',
        },
      ],
    };
  },
};

function createComp() {
  let comp = document.createElement('kup-calendar');
  comp.data = {
    columns: [
      {
        name: 'date',
        title: 'Date',
        calendarOption: 'date',
      },
      {
        name: 'descr',
        title: 'Description',
        calendarOption: 'descr',
      },
      {
        name: 'start',
        title: 'Start',
        calendarOption: 'start',
      },
      {
        name: 'end',
        title: 'End',
        calendarOption: 'end',
      },
      {
        name: 'icon',
        title: 'Icon',
      },
      {
        name: 'image',
        title: 'Image',
      },
      {
        name: 'style',
        title: 'Style',
      },
    ],
    rows: [
      {
        cells: {
          date: {
            obj: {
              t: 'D8',
              p: '*YYMD',
              k: new Date().toISOString().substring(0, 10),
            },
            value: new Date().toISOString().substring(0, 10),
          },
          descr: {
            obj: {
              t: '',
              p: '',
              k: '',
            },
            value: 'Dentist',
          },
          start: {
            obj: {
              t: '',
              p: '',
              k: '',
            },
            value: '10:00:00',
          },
          end: {
            obj: {
              t: '',
              p: '',
              k: '',
            },
            value: '11:00:00',
          },
          icon: {
            obj: {
              t: 'J4',
              p: 'ICO',
              k: '...',
            },
            value: 'widgets;menu',
          },
          image: {
            obj: {
              t: 'J4',
              p: 'IMG',
              k: '...',
            },
            value:
              'https://via.placeholder.com/64?text=PF;https://via.placeholder.com/64?text=CF;https://via.placeholder.com/64?text=DG',
          },
          style: {
            obj: {
              t: '',
              p: '',
              k: '...',
            },
            value: '',
            style: {
              background: 'purple',
              color: 'yellow',
            },
          },
        },
      },
      {
        cells: {
          date: {
            obj: {
              t: 'D8',
              p: '*YYMD',
              k: '20210917',
            },
            value: '2021-09-17',
          },
          descr: {
            obj: {
              t: '',
              p: '',
              k: '',
            },
            value: 'Cinema',
          },
          start: {
            obj: {
              t: '',
              p: '',
              k: '',
            },
            value: '21:00:00',
          },
          end: {
            obj: {
              t: '',
              p: '',
              k: '',
            },
            value: '23:00:00',
          },
          icon: {
            obj: {
              t: 'J4',
              p: 'ICO',
              k: '...',
            },
            value: 'wrench',
          },
          image: {
            obj: {
              t: 'J4',
              p: 'IMG',
              k: '...',
            },
            value:
              'https://via.placeholder.com/64?text=PF;https://via.placeholder.com/64?text=CF;https://via.placeholder.com/64?text=DG',
          },
          style: {
            obj: {
              t: '',
              p: '',
              k: '...',
            },
            value: '',
            style: {
              background: 'purple',
              color: 'yellow',
            },
          },
        },
      },
    ],
  };
  comp.id = 'demo-component';
  comp.currentDate = '2021-09-17';
  comp.viewType = 'dayGridMonth';
  return comp;
}
</script>
