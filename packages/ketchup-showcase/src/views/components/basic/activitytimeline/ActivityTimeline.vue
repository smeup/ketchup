<template>
  <comp :giturl="giturl" :headtitle="headtitle" :titles="titles">
    <template v-slot:0>
      <activity-timeline-demo></activity-timeline-demo>
    </template>
    <template v-slot:1>
      <activity-timeline-basic></activity-timeline-basic>
    </template>
  </comp>
</template>

<script>
import ActivityTimelineBasic from '@/views/components/basic/activitytimeline/examples/ActivityTimelineBasic';
import ActivityTimelineDemo from '@/views/components/basic/activitytimeline/examples/ActivityTimelineDemo';
import Comp from '@/views/templates/Comp';

export default {
  components: {
    ActivityTimelineBasic,
    ActivityTimelineDemo,
    Comp,
  },
  data() {
    return {
      giturl:
        'https://github.com/smeup/ketchup/tree/develop/packages/ketchup/src/components/kup-activity-timeline',
      headtitle: 'Activity Timeline',
      titles: ['Playground', 'Basic usage'],
    };
  },
  title: 'Ketchup | Activity Timeline',
};
</script>
