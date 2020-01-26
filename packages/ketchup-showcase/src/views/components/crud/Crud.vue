<template>
  <comp :giturl="giturl" :headtitle="headtitle" :titles="titles">
    <template v-slot:0>
      <crud-basic></crud-basic>
    </template>
    <template v-slot:1>
      <crud-docs></crud-docs>
    </template>
  </comp>
</template>

<script>
import CrudBasic from '@/views/components/crud/examples/CrudBasic';
import CrudDocs from '@/views/components/crud/examples/CrudDocs';
import Comp from '@/views/components/page/templates/Comp';

export default {
  components: {
    CrudBasic,
    CrudDocs,
    Comp,
  },
  data() {
    return {
      giturl:
        'https://github.com/smeup/ketchup/tree/develop/packages/ketchup/src/components/kup-crud',
      headtitle: 'Crud',
      titles: ['Playground', 'Docs'],
    };
  },
};
</script>
