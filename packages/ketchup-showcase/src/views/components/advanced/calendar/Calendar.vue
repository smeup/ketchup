<template>
  <comp :giturl="giturl" :headtitle="headtitle" :titles="titles">
    <template v-slot:0>
      <calendar-demo></calendar-demo>
    </template>
    <template v-slot:1>
      <calendar-basic></calendar-basic>
    </template>
    <template v-slot:2>
      <calendar-styling></calendar-styling>
    </template>
    <template v-slot:3>
      <calendar-event-customization></calendar-event-customization>
    </template>
  </comp>
</template>

<script>
import CalendarBasic from '@/views/components/advanced/calendar/examples/CalendarBasic';
import CalendarDemo from '@/views/components/advanced/calendar/examples/CalendarDemo';
import CalendarEventCustomization from '@/views/components/advanced/calendar/examples/CalendarEventCustomization';
import CalendarStyling from '@/views/components/advanced/calendar/examples/CalendarStyling';
import Comp from '@/views/templates/Comp';

export default {
  components: {
    CalendarBasic,
    CalendarDemo,
    CalendarStyling,
    CalendarEventCustomization,
    Comp,
  },
  data() {
    return {
      giturl:
        'https://github.com/smeup/ketchup/tree/develop/packages/ketchup/src/components/kup-calendar',
      headtitle: 'Calendar',
      titles: ['Playground', 'Basic usage', 'Styling', 'Event customization'],
    };
  },
  title: 'Ketchup | Calendar',
};
</script>
