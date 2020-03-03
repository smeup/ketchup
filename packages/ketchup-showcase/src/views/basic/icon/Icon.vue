<template>
  <div>
    <comp :giturl="giturl" :headtitle="headtitle" :titles="titles">
      <template v-slot:0>
        <icon-demo></icon-demo>
      </template>
      <template v-slot:1>
        <icon-basic></icon-basic>
      </template>
      <template v-slot:2>
        <icon-material-list></icon-material-list>
      </template>
      <template v-slot:3>
        <icon-extra-list></icon-extra-list>
      </template>
    </comp>
  </div>
</template>

<script>
import IconDemo from '@/views/basic/icon/examples/IconDemo';
import IconBasic from '@/views/basic/icon/examples/IconBasic';
import IconMaterialList from '@/views/basic/icon/examples/IconMaterialList';
import IconExtraList from '@/views/basic/icon/examples/IconExtraList';
import Comp from '@/views/advanced/page/templates/Comp';
export default {
  components: {
    IconDemo,
    IconBasic,
    IconMaterialList,
    IconExtraList,
    Comp,
  },
  data() {
    return {
      giturl:
        'https://github.com/smeup/ketchup/tree/develop/packages/ketchup/src/components/wup-icon',
      headtitle: 'Icon',
      titles: [
        'Playground',
        'Basic usage',
        'Material Design SVG List',
        'Extra SVG icons list',
      ],
    };
  },
};
</script>
