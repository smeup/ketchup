<template>
  <comp :giturl="giturl" :headtitle="headtitle" :titles="titles">
    <template v-slot:0>
      <calendar-demo></calendar-demo>
    </template>
    <template v-slot:1>
      <calendar-basic></calendar-basic>
    </template>
    <template v-slot:2>
      <calendar-events></calendar-events>
    </template>
    <template v-slot:3>
      <calendar-icons></calendar-icons>
    </template>
    <template v-slot:4>
      <calendar-style></calendar-style>
    </template>
  </comp>
</template>

<script>
import CalendarBasic from '@/views/advanced/calendar/examples/CalendarBasic';
import CalendarDemo from '@/views/advanced/calendar/examples/CalendarDemo';
import CalendarEvents from '@/views/advanced/calendar/examples/CalendarEvents';
import CalendarIcons from '@/views/advanced/calendar/examples/CalendarIcons';
import CalendarStyle from '@/views/advanced/calendar/examples/CalendarStyle';
import Comp from '@/views/advanced/page/templates/Comp';

export default {
  components: {
    CalendarBasic,
    CalendarDemo,
    CalendarEvents,
    CalendarIcons,
    CalendarStyle,
    Comp,
  },
  data() {
    return {
      giturl:
        'https://github.com/smeup/ketchup/tree/develop/packages/ketchup/src/components/kup-calendar',
      headtitle: 'Calendar',
      titles: [
        'Playground',
        'Basic usage',
        'With events',
        'With icons',
        'Style',
      ],
    };
  },
};
</script>
