<template>
  <div>
    <div class="demo-wrapper">
      <p>
        In order to customize the calendar's events, you need to configure some
        specific columns in the
        <span class="code-word">calendarColumns</span> prop.<br />

        The calendarColumns property receives an object where the keys are the
        names of each column, and to enable them you must give the boolean value
        of true<br />
        The most common columns are:<br /><br />

        - <span class="code-word">date</span>, which is the date of the
        event;<br />
        - <span class="code-word">descr</span>, which is the description of the
        event;<br />
        - <span class="code-word">start</span>, which is the starting time of
        the event;<br />
        - <span class="code-word">end</span>, which is the ending time of the
        event.<br /><br />

        There are also some extra columns, mainly to customize the look of the
        event.<br />
        The other columns are:<br /><br />

        - <span class="code-word">icon</span>, which is the icon of the
        event;<br />
        - <span class="code-word">image</span>, which is the image of the
        event;<br />
        - <span class="code-word">style</span>, which is the custom style of the
        event;<br /><br />

        <strong
          >In the following example were set icons images and custom
          style</strong
        >
        (<span class="code-word">icon</span>,
        <span class="code-word">image</span>,
        <span class="code-word">style</span> keywords):
      </p>
      <div class="demo-container">
        <div class="kup-container">
          <kup-calendar
            :data.prop="basicData"
            :calendar-columns.prop="calendarColumns"
          ></kup-calendar>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: 'CalendarEventCustomization',
  data() {
    return {
      basicData: {
        columns: [
          {
            name: 'date',
            title: 'Date',
          },
          {
            name: 'descr',
            title: 'Description',
          },
          {
            name: 'start',
            title: 'Start',
          },
          {
            name: 'end',
            title: 'End',
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
      calendarColumns: {
        date: true,
        descr: true,
        icon: true,
        image: true,
        style: true,
      },
    };
  },
};
</script>
