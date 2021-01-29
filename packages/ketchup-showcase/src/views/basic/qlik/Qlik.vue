<template>
  <div>
    <comp :giturl="giturl" :headtitle="headtitle" :titles="titles">
      <template v-slot:0>
        <qlik-basic></qlik-basic>
      </template>
      <template v-slot:1>
        <qlik-how-to-use></qlik-how-to-use>
      </template>
      <template v-slot:3>
        <qlik-event></qlik-event>
      </template>
    </comp>
  </div>
</template>

<script>
import QlikBasic from '@/views/basic/qlik/examples/QlikBasic';
import QlikHowToUse from '@/views/basic/qlik/examples/QulikHowToUse';
import QlikEvent from '@/views/basic/qlik/examples/QlikEvent';
import Comp from '@/views/advanced/page/templates/Comp';
export default {
  components: {
    QlikBasic,
    QlikHowToUse,
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
        'How To Use',
        'Qlik Event',
      ],
    };
  },
};
</script>
