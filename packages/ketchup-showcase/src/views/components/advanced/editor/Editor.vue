<template>
  <div>
    <comp :giturl="giturl" :headtitle="headtitle" :titles="titles">
      <template v-slot:0>
        <editor-demo></editor-demo>
      </template>
      <template v-slot:1>
        <editor-basic></editor-basic>
      </template>
    </comp>
  </div>
</template>

<script>
import Comp from '@/views/templates/Comp';
import EditorDemo from './examples/EditorDemo';
import EditorBasic from './examples/EditorBasic';

export default {
  components: {
    EditorDemo,
    EditorBasic,
    Comp,
  },

  data() {
    return {
      giturl:
        'https://github.com/smeup/ketchup/tree/develop/packages/ketchup/src/components/kup-editor',
      headtitle: 'Editor',
      titles: ['Playground', 'Basic Usage'],
    };
  },
  title: 'Ketchup | Editor',
};
</script>
