<template>
  <div>
    <div class="demo-wrapper">
      <p>
        There are several different view types available which can be set
        through the <span class="code-word">viewType</span> prop.<br />The
        default is the month view.<br /><br />
        <strong>Month view</strong> (<span class="code-word">dayGridMonth</span
        >):
      </p>
      <div class="demo-container">
        <div class="kup-container">
          <kup-calendar
            :data.prop="basicData"
            date-col="date"
            descr-col="descr"
          ></kup-calendar>
        </div>
      </div>
      <p class="centered">Month view type markup</p>
      <code class="flat">{{ markupMonth }}</code>
    </div>
    <div class="demo-wrapper">
      <p>
        <strong>Week view</strong> (<span class="code-word">timeGridWeek</span
        >):
      </p>
      <div class="demo-container">
        <div class="kup-container">
          <kup-calendar
            :data.prop="basicData"
            date-col="date"
            descr-col="descr"
            view-type="timeGridWeek"
          ></kup-calendar>
        </div>
      </div>
      <p class="centered">Week view type markup</p>
      <code class="flat">{{ markupWeek }}</code>
    </div>
    <div class="demo-wrapper">
      <p>
        <strong>Day view</strong> (<span class="code-word">timeGridDay</span>):
      </p>
      <div class="demo-container">
        <div class="kup-container">
          <kup-calendar
            :data.prop="basicData"
            date-col="date"
            descr-col="descr"
            view-type="timeGridDay"
          ></kup-calendar>
        </div>
      </div>
      <p class="centered">Day view type markup</p>
      <code class="flat">{{ markupDay }}</code>
    </div>
    <div class="demo-wrapper">
      <p>
        <strong>List view</strong> (<span class="code-word">listMonth</span>):
      </p>
      <div class="demo-container">
        <div class="kup-container">
          <kup-calendar
            :data.prop="basicData"
            date-col="date"
            descr-col="descr"
            view-type="listMonth"
          ></kup-calendar>
        </div>
      </div>
      <p class="centered">List view type markup</p>
      <code class="flat">{{ markupList }}</code>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: 'CalendarStyling',
  data() {
    return {
      basicData: {
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
      },
      markupMonth: '<kup-calendar view-type="dayGridMonth"></kup-calendar>',
      markupWeek: '<kup-calendar view-type="timeGridWeek"></kup-calendar>',
      markupDay: '<kup-calendar view-type="timeGridDay"></kup-calendar>',
      markupList: '<kup-calendar view-type="listMonth"></kup-calendar>',
    };
  },
};
</script>
