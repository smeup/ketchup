<template>
  <comp :headtitle="headtitle" :titles="titles">
    <template v-slot:0>
      <theming-basic></theming-basic>
    </template>
    <template v-slot:1>
      <theming-templates></theming-templates>
    </template>
    <template v-slot:2>
      <theming-variables></theming-variables>
    </template>
  </comp>
</template>

<script>
import ThemingBasic from '@/views/css/theming/examples/ThemingBasic';
import ThemingTemplates from '@/views/css/theming/examples/ThemingTemplates';
import ThemingVariables from '@/views/css/theming/examples/ThemingVariables';
import Comp from '@/views/advanced/page/templates/Comp';

export default {
  components: {
    ThemingBasic,
    ThemingTemplates,
    ThemingVariables,
    Comp,
  },
  data() {
    return {
      headtitle: 'Theming',
      titles: ['Basic usage', 'List of templates', 'Variables'],
    };
  },
};
</script>
