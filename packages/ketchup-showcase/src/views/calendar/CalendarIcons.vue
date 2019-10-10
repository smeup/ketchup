<template>
  <div>
    <h3>Events with icons (month view)</h3>
    <kup-calendar
      :data.prop="iconData"
      date-col="date"
      descr-col="descr"
      icon-col="icon"
      initial-date="2019-09-18"
    ></kup-calendar>
    <hr />

    <h3>Events with icons (week view)</h3>
    <kup-calendar
      :data.prop="iconData"
      date-col="date"
      descr-col="descr"
      week-view
      icon-col="icon"
      initial-date="2019-09-18"
    ></kup-calendar>

    <h3>Events with images (month view)</h3>
    <kup-calendar
      :data.prop="imageData"
      date-col="date"
      descr-col="descr"
      image-col="image"
      initial-date="2019-09-18"
    ></kup-calendar>

    <h3>Events with images (week view)</h3>
    <kup-calendar
      :data.prop="imageData"
      date-col="date"
      descr-col="descr"
      week-view
      image-col="image"
      initial-date="2019-09-18"
    ></kup-calendar>
    <hr />
  </div>
</template>

<script>
export default {
  name: 'calendarBasic',
  data() {
    return {
      iconData: {
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
            name: 'icon',
            title: 'Icon',
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
              icon: {
                obj: {
                  t: 'J4',
                  p: 'ICO',
                  k: 'OG;CON;COL',
                },
                value:
                  'mdi mdi-account;mdi mdi-plus;mdi mdi-briefcase;mdi mdi-github-circle',
              },
            },
          },
        ],
      },
      imageData: {
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
            name: 'image',
            title: 'Image',
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
              image: {
                obj: {
                  t: 'J4',
                  p: 'IMG',
                  k: '...',
                },
                value:
                  'https://via.placeholder.com/64?text=PF;https://via.placeholder.com/64?text=CF;https://via.placeholder.com/64?text=DG',
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