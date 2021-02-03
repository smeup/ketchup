<template>
  <div>
    <comp :giturl="giturl" :headtitle="headtitle" :titles="titles">
      <template v-slot:0>
        <qlik-basic></qlik-basic>
      </template>
      <template v-slot:1>
        <qlik-event></qlik-event>
      </template>
    </comp>
  </div>
</template>

<script>
import QlikBasic from '../qlik/examples/QlikBasic';
import QlikEvent from '../qlik/examples/QlikEvent';
import Comp from '../page/templates/Comp';
export default {
  components: {
    QlikBasic,
    QlikEvent,
    Comp,
  },
  data() {
    return {
      giturl:
        'https://github.com/smeup/ketchup/tree/develop/packages/ketchup/src/components/kup-qlik',
      headtitle: 'Qlik',
      titles: [
        'Basic usage',
        'Qlik Event',
      ],
    };
  },
};
</script>
