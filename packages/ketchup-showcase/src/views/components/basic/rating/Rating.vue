<template>
  <comp :giturl="giturl" :headtitle="headtitle" :titles="titles">
    <template v-slot:0>
      <rating-demo></rating-demo>
    </template>
    <template v-slot:1>
      <rating-basic></rating-basic>
    </template>
    <template v-slot:2>
      <rating-disabled></rating-disabled>
    </template>
  </comp>
</template>

<script>
import RatingDemo from '@/views/components/basic/rating/examples/RatingDemo';
import RatingBasic from '@/views/components/basic/rating/examples/RatingBasic';
import RatingDisabled from '@/views/components/basic/rating/examples/RatingDisabled';
import Comp from '@/views/templates/Comp';
export default {
  components: {
    RatingDemo,
    RatingBasic,
    RatingDisabled,
    Comp,
  },
  data() {
    return {
      giturl:
        'https://github.com/smeup/ketchup/tree/develop/packages/ketchup/src/components/kup-rating',
      headtitle: 'Rating',
      titles: ['Playground', 'Basic usage', 'Disabled'],
    };
  },
  title: 'Ketchup | Rating',
};
</script>
