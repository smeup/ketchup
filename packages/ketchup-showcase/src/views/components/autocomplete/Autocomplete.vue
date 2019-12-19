<template>
  <comp :titles="titles">
    <template v-slot:0>
      <autocomplete-basic/>
    </template>
  </comp>
</template>

<script>
import Comp from '@/views/components/page/templates/Comp';
import AutocompleteBasic from "./examples/AutocompleteBasic";

export default {
  name: "Autocomplete",
  components: {
    AutocompleteBasic,
    Comp,
  },
  data() {
    return {
      titles: ['Autocomplete basics'],
    };
  },
}
</script>

<style scoped>

</style>