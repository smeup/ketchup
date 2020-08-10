<template>
  <comp :headtitle="headtitle" :titles="titles">
    <template v-slot:0>
      <theming-basic></theming-basic>
    </template>
    <template v-slot:1>
      <theming-list></theming-list>
    </template>
    <template v-slot:2>
      <theming-templates></theming-templates>
    </template>
  </comp>
</template>

<script>
import ThemingBasic from '@/views/css/theming/examples/ThemingBasic';
import ThemingList from '@/views/css/theming/examples/ThemingList';
import ThemingTemplates from '@/views/css/theming/examples/ThemingTemplates';
import Comp from '@/views/advanced/page/templates/Comp';

export default {
  components: {
    ThemingBasic,
    ThemingList,
    ThemingTemplates,
    Comp,
  },
  data() {
    return {
      headtitle: 'Theming',
      titles: ['Basic usage', 'List of CSS variables', 'List of templates'],
    };
  },
};
</script>
