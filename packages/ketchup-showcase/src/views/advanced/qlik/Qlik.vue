<template>
  <div>
    <comp :giturl="giturl" :headtitle="headtitle" :titles="titles">
      <template v-slot:0>
        <qlik-examples></qlik-examples>
      </template>
      <template v-slot:1>
        <qlik-basic></qlik-basic>
      </template>
      <template v-slot:2>
        <qlik-properties></qlik-properties>
      </template>
    </comp>
  </div>
</template>

<script>
import QlikBasic from './examples/QlikBasic';
import QlikExamples from './examples/QlikExamples';
import QlikProperties from './examples/QlikProperties';
import Comp from '../page/templates/Comp';
export default {
  components: {
    QlikBasic,
    QlikExamples,
    QlikProperties,
    Comp,
  },
  data() {
    return {
      giturl:
        'https://github.com/smeup/ketchup/tree/develop/packages/ketchup/src/components/kup-qlik',
      headtitle: 'Qlik',
      titles: ['Examples', 'Basic usage', 'Properties'],
    };
  },
};
</script>
