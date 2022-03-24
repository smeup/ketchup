<template>
  <div>
    <comp :giturl="giturl" :headtitle="headtitle" :titles="titles">
      <template v-slot:0>
        <kup-dates-basic></kup-dates-basic>
      </template>
      <template v-slot:1>
        <kup-dates-features></kup-dates-features>
      </template>
      <template v-slot:2>
        <kup-dates-events></kup-dates-events>
      </template>
    </comp>
  </div>
</template>

<script>
import KupDatesBasic from '@/views/framework/kup-dates/examples/KupDatesBasic';
import KupDatesEvents from '@/views/framework/kup-dates/examples/KupDatesEvents';
import KupDatesFeatures from '@/views/framework/kup-dates/examples/KupDatesFeatures';
import Comp from '@/views/templates/Comp';
export default {
  components: {
    KupDatesBasic,
    KupDatesEvents,
    KupDatesFeatures,
    Comp,
  },
  data() {
    return {
      giturl:
        'https://github.com/smeup/ketchup/tree/develop/packages/ketchup/src/managers/kup-dates',
      headtitle: 'KupDates',
      titles: ['What is it?', 'Features', 'Events'],
    };
  },
  title: 'Ketchup | KupDates',
};
</script>
