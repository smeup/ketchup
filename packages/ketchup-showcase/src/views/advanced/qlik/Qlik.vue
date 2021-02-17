<template>
  <div>
    <comp :giturl="giturl" :headtitle="headtitle" :titles="titles">
      <template v-slot:0>
        <qlik-basic></qlik-basic>
      </template>
      <template v-slot:1>
        <qlik-propertys></qlik-propertys>
      </template>
      <template v-slot:2>
        <qlik-examples></qlik-examples>
      </template>  
    </comp>
  </div>
</template>

<script>
import QlikBasic from './examples/QlikBasic';
import QlikExamples from './examples/QlikExamples';
import QlikPropertys from './examples/QlikPropertys';
import Comp from '../page/templates/Comp'
export default {
  components: {
    QlikBasic,
    QlikExamples,
    QlikPropertys,
    Comp

  },
  data() {
    return {
      giturl:
        'https://github.com/smeup/ketchup/tree/develop/packages/ketchup/src/components/kup-qlik',
      headtitle: 'Qlik',
      titles: ['Basic usage', 'Propertys', 'Examples'],
    };
  },
};
</script>
