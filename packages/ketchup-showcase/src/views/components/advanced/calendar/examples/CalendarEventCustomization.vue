<template>
  <div>
    <div class="demo-wrapper">
      <p>
        In order to customize the calendar's events, you need to set up some
        specific columns in the <span class="code-word">data</span> prop.<br />
        The most common columns (referenced by the related props) are:<br /><br />
        - <span class="code-word">dateCol</span>, which is the date of the
        event;<br />
        - <span class="code-word">descrCol</span>, which is the description of
        the event;<br />
        - <span class="code-word">startCol</span>, which is the starting time of
        the event;<br />
        - <span class="code-word">startCol</span>, which is the ending time of
        the event.<br /><br />
        There are also some extra columns, mainly to customize the look of the
        event:<br /><br />
        <strong>Custom icons</strong> (<span class="code-word">iconCol</span>
        prop):
      </p>
      <div class="demo-container">
        <div class="kup-container">
          <kup-calendar
            :data.prop="basicData"
            date-col="date"
            descr-col="descr"
            icon-col="icon"
          ></kup-calendar>
        </div>
      </div>
      <p class="centered">Icons type markup</p>
      <code class="flat">{{ markupIcon }}</code>
    </div>
    <div class="demo-wrapper">
      <p>
        <strong>Custom images</strong> (<span class="code-word">imageCol</span>
        prop):
      </p>
      <div class="demo-container">
        <div class="kup-container">
          <kup-calendar
            :data.prop="basicData"
            date-col="date"
            descr-col="descr"
            image-col="image"
          ></kup-calendar>
        </div>
      </div>
      <p class="centered">Image type markup</p>
      <code class="flat">{{ markupImage }}</code>
    </div>
    <div class="demo-wrapper">
      <p>
        <strong>Custom CSS style</strong> (<span class="code-word"
          >styleCol</span
        >
        prop):
      </p>
      <div class="demo-container">
        <div class="kup-container">
          <kup-calendar
            :data.prop="basicData"
            date-col="date"
            descr-col="descr"
            style-col="style"
          ></kup-calendar>
        </div>
      </div>
      <p class="centered">Style type markup</p>
      <code class="flat">{{ markupStyle }}</code>
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
                  k: new Date().toISOString().substr(0, 10),
                },
                value: new Date().toISOString().substr(0, 10),
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
      markupIcon: '<kup-calendar icon-col="icon"></kup-calendar>',
      markupImage: '<kup-calendar image-col="image"></kup-calendar>',
      markupStyle: '<kup-calendar style-col="style"></kup-calendar>',
    };
  },
};
</script>
