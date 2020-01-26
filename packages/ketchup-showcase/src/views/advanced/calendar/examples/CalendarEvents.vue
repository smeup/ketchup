<template>
  <div>
    <h3>Select an event</h3>
    <div class="wrapper">
      <kup-calendar
        class="calendar"
        :data.prop="basicData"
        date-col="date"
        descr-col="descr"
        initial-date="2019-09-19"
        week-view
        @kupCalendarEventClicked="onEventClicked"
        @kupCalendarEventDropped="onEventDropped"
        @kupCalendarDateClicked="onDateClicked"
        @kupCalendarViewChanged="onViewChanged"
      ></kup-calendar>

      <div class="selection">
        <h4>Selected Event</h4>
        <ul v-if="selectedEvent">
          <li> Date: {{ selectedEvent.cells['date'].value }} </li>
          <li> Description: {{ selectedEvent.cells['descr'].value }} </li>
        </ul>
        <hr />

        <h4>Dropped event</h4>
        <div v-if="droppedEvent">
          <p>From date: {{ droppedEvent.fromDate.start }}</p>
          <p>To date: {{ droppedEvent.toDate.start }}</p>
        </div>
        <hr />

        <h4>Selected date</h4>
        <p v-if="selectedDate">{{ selectedDate }}</p>
        <hr />

        <h4>Current view</h4>
        <div v-if="currentView">
          <p>From date: {{ currentView.from }}</p>
          <p>To date: {{ currentView.to }}</p>
        </div>
        <hr />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'calendarBasic',
  data() {
    return {
      selectedEvent: null,
      droppedEvent: null,
      selectedDate: null,
      currentView: null,

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

  methods: {
    onEventClicked({ detail }) {
      this.selectedEvent = detail;
    },
    onEventDropped({ detail }) {
      this.droppedEvent = detail;
    },
    onDateClicked({ detail }) {
      this.selectedDate = detail;
    },
    onViewChanged({ detail }) {
      this.currentView = detail;
    },
  },
};
</script>

<style lang="scss" scoped>
.wrapper {
  display: flex;

  .calendar {
    width: 700px;
  }

  .selection {
    padding-left: 2rem;
    flex: 1 0 0%;
  }
}
</style> 