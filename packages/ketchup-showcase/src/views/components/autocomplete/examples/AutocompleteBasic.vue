<template>
  <div>
    <kup-autocomplete
      :items.prop="items"
      @kupAutocompleteSelectionUpdate="logEvent"/>

    <kup-autocomplete
      :items.prop="itemsMultiple"
      multiple-selection
      @kupAutocompleteSelectionUpdate="logEvent"/>
  </div>
</template>

<script>
function AutocompleteItemFactory(itemsCount = 20, baseCode = 'CD', baseDescription = 'Item ') {
  const toRet = [];

  for (let i = 0; i < itemsCount; i++) {
    toRet.push({
      code: baseCode + i,
      description: baseDescription + i
    });
  }

  return toRet;
}

export default {
  name: "AutocompleteBasic",
  data() {
    return {
      items: AutocompleteItemFactory(),
      itemsMultiple: AutocompleteItemFactory(30, 'MUL', 'MulDes')
    };
  },
  methods: {
    logEvent(e) {
      console.log(e.detail);
    }
  }
}
</script>

<style scoped>

</style>