<template>
  <comp :giturl="giturl" :headtitle="headtitle" :titles="titles">
    <template v-slot:0>
      <image-list-demo></image-list-demo>
    </template>
    <template v-slot:1>
      <image-list-basic></image-list-basic>
    </template>
    <template v-slot:2>
      <image-list-styling></image-list-styling>
    </template>
  </comp>
</template>
<script>
import Comp from '@/views/templates/Comp';
import ImageListBasic from '@/views/components/advanced/imagelist/examples/ImageListBasic';
import ImageListDemo from '@/views/components/advanced/imagelist/examples/ImageListDemo';
import ImageListStyling from '@/views/components/advanced/imagelist/examples/ImageListStyling';
export default {
  components: {
    Comp,
    ImageListBasic,
    ImageListDemo,
    ImageListStyling,
  },
  data() {
    return {
      giturl:
        'https://github.com/smeup/ketchup/tree/develop/packages/ketchup/src/components/kup-image-list',
      headtitle: 'Image List',
      titles: ['Playground', 'Basic usage', 'Styling'],
    };
  },
  title: 'Ketchup | Image List',
};
</script>
