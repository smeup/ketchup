<template>
  <comp :titles="titles">
    <template v-slot:0>
      <calendar-basic></calendar-basic>
    </template>
    <template v-slot:1>
      <calendar-events></calendar-events>
    </template>
    <template v-slot:2>
      <calendar-icons></calendar-icons>
    </template>
    <template v-slot:3>
      <calendar-style></calendar-style>
    </template>
  </comp>
</template>

<script>
import CalendarBasic from '@/views/calendar/examples/CalendarBasic';
import CalendarEvents from '@/views/calendar/examples/CalendarEvents';
import CalendarIcons from '@/views/calendar/examples/CalendarIcons';
import CalendarStyle from '@/views/calendar/examples/CalendarStyle';
import Comp from '@/views/page/templates/Comp';

export default {
  components: {
    CalendarBasic,
    CalendarEvents,
    CalendarIcons,
    CalendarStyle,
    Comp,
  },
  data() {
    return {
      titles: ['Calendar', 'With events', 'With icons', 'Style'],
    };
  },
};
</script>
