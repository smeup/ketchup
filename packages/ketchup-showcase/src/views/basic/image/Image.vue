<template>
  <div>
    <comp :giturl="giturl" :headtitle="headtitle" :titles="titles">
      <template v-slot:0>
        <image-demo></image-demo>
      </template>
      <template v-slot:1>
        <image-basic></image-basic>
      </template>
      <template v-slot:2>
        <image-badges></image-badges>
      </template>
      <template v-slot:3>
        <image-css></image-css>
      </template>
      <template v-slot:4>
        <image-material-list></image-material-list>
      </template>
      <template v-slot:5>
        <image-extra-list></image-extra-list>
      </template>
    </comp>
  </div>
</template>

<script>
import ImageDemo from '@/views/basic/image/examples/ImageDemo';
import ImageBasic from '@/views/basic/image/examples/ImageBasic';
import ImageBadges from '@/views/basic/image/examples/ImageBadges';
import ImageCss from '@/views/basic/image/examples/ImageCss';
import ImageMaterialList from '@/views/basic/image/examples/ImageMaterialList';
import ImageExtraList from '@/views/basic/image/examples/ImageExtraList';
import Comp from '@/views/advanced/page/templates/Comp';
export default {
  components: {
    ImageDemo,
    ImageBasic,
    ImageBadges,
    ImageCss,
    ImageMaterialList,
    ImageExtraList,
    Comp,
  },
  data() {
    return {
      giturl:
        'https://github.com/smeup/ketchup/tree/develop/packages/ketchup/src/components/kup-image',
      headtitle: 'Image',
      titles: [
        'Playground',
        'Basic usage',
        'Badges',
        'Drawing with CSS',
        'Material Design SVG List',
        'Extra SVG icons list',
      ],
    };
  },
};
</script>
