<template>
  <div>
    <comp :giturl="giturl" :headtitle="headtitle" :titles="titles">
      <template v-slot:0>
        <autocomplete-demo></autocomplete-demo>
      </template>
      <template v-slot:1>
        <autocomplete-basic></autocomplete-basic>
      </template>
    </comp>
  </div>
</template>

<script>
import AutocompleteDemo from '@/views/components/basic/autocomplete/examples/AutocompleteDemo';
import AutocompleteBasic from '@/views/components/basic/autocomplete/examples/AutocompleteBasic';
import Comp from '@/views/templates/Comp';
export default {
  components: {
    AutocompleteDemo,
    AutocompleteBasic,
    Comp,
  },
  data() {
    return {
      giturl:
        'https://github.com/smeup/ketchup/tree/develop/packages/ketchup/src/components/kup-autocomplete',
      headtitle: 'Autocomplete',
      titles: ['Playground', 'Basic usage'],
    };
  },
  title: 'Ketchup | Autocomplete',
};
</script>
