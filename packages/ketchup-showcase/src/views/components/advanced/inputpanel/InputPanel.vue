<template>
  <div>
    <comp :giturl="giturl" :headtitle="headtitle" :titles="titles">
      <template v-slot:0>
        <input-panel-demo></input-panel-demo>
      </template>
      <template v-slot:1>
        <input-panel-basic></input-panel-basic>
      </template>
    </comp>
  </div>
</template>

<script>
import InputPanelDemo from '@/views/components/advanced/inputpanel/examples/InputPanelDemo';
import InputPanelBasic from '@/views/components/advanced/inputpanel/examples/InputPanelBasic';
import Comp from '@/views/templates/Comp';
export default {
  components: {
    InputPanelDemo,
    InputPanelBasic,
    Comp,
  },
  data() {
    return {
      giturl:
        'https://github.com/smeup/ketchup/tree/develop/packages/ketchup/src/components/kup-input-panel',
      headtitle: 'Input Panel',
      titles: ['Playground', 'Basic usage'],
    };
  },
  title: 'Ketchup | Input Panel',
};
</script>
