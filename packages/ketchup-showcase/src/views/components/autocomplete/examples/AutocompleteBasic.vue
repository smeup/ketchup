<template>
  <div class="max-width-container">
    <h3>Basic autocomplete</h3>
    <kup-autocomplete
      :items.prop="items"
      @kupAutocompleteSelectionUpdate="logEvent"/>

    <h3>Autocomplete disabled</h3>
    <kup-autocomplete
      :items.prop="items"
      disabled
      @kupAutocompleteSelectionUpdate="logEvent"/>

    <h3>Display mode code and mode description</h3>
    <div class="example-container">
      <kup-autocomplete
        :items.prop="items"
        display-mode="code"
        @kupAutocompleteSelectionUpdate="logEvent"/>
      <kup-autocomplete
        :items.prop="items"
        display-mode="label"
        @kupAutocompleteSelectionUpdate="logEvent"/>
    </div>

    <h3>Show clear icon or dropdown icon</h3>
    <div class="example-container">
      <kup-autocomplete
        :items.prop="items"
        show-clear-icon
        @kupAutocompleteSelectionUpdate="logEvent"/>
      <kup-autocomplete
        :items.prop="items"
        show-dropdown-icon
        @kupAutocompleteSelectionUpdate="logEvent"/>
    </div>

    <h3>Show clear icon and dropdown icon</h3>
    <kup-autocomplete
      :items.prop="items"
      show-clear-icon
      show-dropdown-icon
      @kupAutocompleteSelectionUpdate="logEvent"/>

    <h3>Change number of chars necessary to trigger the autocomplete</h3>
    <div class="example-container">
      <kup-autocomplete
        :items.prop="items"
        minimum-chars="2"
        show-clear-icon
        @kupAutocompleteSelectionUpdate="logEvent"/>
      <kup-autocomplete
        :items.prop="items"
        minimum-chars="5"
        show-clear-icon
        @kupAutocompleteSelectionUpdate="logEvent"/>
    </div>

    <h3>Autocomplete with multiple selection</h3>
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