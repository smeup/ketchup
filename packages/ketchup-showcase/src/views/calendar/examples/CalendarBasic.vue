<template>
  <div>
    <h3>Month view</h3>
    <kup-calendar
      :data.prop="basicData"
      date-col="date"
      descr-col="descr"
      initial-date="2019-09-19"
    ></kup-calendar>

    <h3>Week view</h3>
    <kup-calendar
      :data.prop="basicData"
      date-col="date"
      descr-col="descr"
      start-col="start"
      end-col="end"
      week-view
      initial-date="2019-09-19"
    ></kup-calendar>

    <h3>Hidden navigation</h3>
    <kup-calendar
      :data.prop="basicData"
      date-col="date"
      descr-col="descr"
      hide-navigation
      initial-date="2019-09-19"
    ></kup-calendar>

    <h3>Initial Date (2019-01-01)</h3>
    <kup-calendar
      :data.prop="basicData"
      date-col="date"
      descr-col="descr"
      initial-date="2019-01-01"
    ></kup-calendar>
  </div>
</template>

<script>
export default {
  name: 'calendarBasic',
  data() {
    return {
      basicData: {
        columns: [
          {
            name: 'date',
            title: 'Date',
            size: '',
          },
          {
            name: 'descr',
            title: 'Description',
            size: 10,
          },
          {
            name: 'start',
            title: 'Start',
            size: 10,
          },
          {
            name: 'end',
            title: 'End',
            size: 10,
          },
        ],
        rows: [
          {
            cells: {
              date: {
                obj: {
                  t: 'D8',
                  p: '*YYMD',
                  k: '20190919',
                },
                value: '19/09/2019',
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
            },
          },
          {
            cells: {
              date: {
                obj: {
                  t: 'D8',
                  p: '*YYMD',
                  k: '20190917',
                },
                value: '17/09/2019',
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
            },
          },
        ],
      },
    };
  },
};
</script>

<style scoped>
</style> 