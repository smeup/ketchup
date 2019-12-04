<template>
  <div>
    <h3>Events with custom style</h3>
    <kup-calendar
      :data.prop="basicData"
      date-col="date"
      descr-col="descr"
      style-col="style"
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
            name: 'style',
            title: 'Description',
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
                value: 'Test',
              },
              style: {
                obj: {
                  t: '',
                  p: '',
                  k: '',
                },
                value: '',
                style: {
                  color: 'yellow',
                  background: 'peru',
                },
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