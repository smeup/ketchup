<template>
  <comp :titles="titles">
    <template v-slot:0>
      <autocomplete-basic/>
    </template>
    <template v-slot:1>
      <autocomplete-multiple/>
    </template>
    <template v-slot:2>
      <autocomplete-server-handled-filter/>
    </template>
  </comp>
</template>

<script>
import Comp from '@/views/components/page/templates/Comp';
import AutocompleteBasic from "./examples/AutocompleteBasic";
import AutocompleteMultiple from "./examples/AutocompleteMultiple";
import AutocompleteServerHandledFilter from "./examples/AutocompleteServerHandledFilter";

export default {
  name: "Autocomplete",
  components: {
    AutocompleteBasic,
    AutocompleteMultiple,
    AutocompleteServerHandledFilter,
    Comp,
  },
  data() {
    return {
      titles: ['Autocomplete basics', 'Autocomplete multiple', 'Autocomplete server handled filter'],
    };
  },
}
</script>