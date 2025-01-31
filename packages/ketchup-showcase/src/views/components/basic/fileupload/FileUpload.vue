<template>
  <comp :giturl="giturl" :headtitle="headtitle" :titles="titles">
    <template v-slot:0>
      <file-upload-demo></file-upload-demo>
    </template>
  </comp>
</template>

<script>
import Comp from '@/views/templates/Comp';
import FileUploadDemo from './examples/FileUploadDemo.vue';
export default {
  components: {
    Comp,
    FileUploadDemo,
  },
  data() {
    return {
      giturl:
        'https://github.com/smeup/ketchup/tree/develop/packages/ketchup/src/components/kup-file-upload',
      headtitle: 'FileUpload',
      titles: ['Playground'],
    };
  },
  title: 'Ketchup | Button',
};
</script>
