<template>
  <comp :titles="titles">
    <template v-slot:0>
      <autocomplete-basic/>
    </template>
    <template v-slot:1>
      <autocomplete-multiple/>
    </template>
  </comp>
</template>

<script>
import Comp from '@/views/components/page/templates/Comp';
import AutocompleteBasic from "./examples/AutocompleteBasic";
import AutocompleteMultiple from "./examples/AutocompleteMultiple";

export default {
  name: "Autocomplete",
  components: {
    AutocompleteBasic,
    AutocompleteMultiple,
    Comp,
  },
  data() {
    return {
      titles: ['Autocomplete basics', 'Autocomplete multiple'],
    };
  },
}
</script>