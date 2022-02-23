<template>
  <div class="max-width-container">
    <p
      >In this section, items populating the autocomplete are like the following
      one: <code class="inline">MUL1 - MulDes1</code></p
    >

    <h3>Basic autocomplete with multiple selection</h3>
    <kup-autocomplete
      :items.prop="itemsMultiple"
      multiple-selection
      @kupAutocompleteSelectionUpdate="logEvent"
    />

    <h3>With icons and sorting (decreasing)</h3>
    <kup-autocomplete
      :items.prop="itemsMultiple"
      :sortOrder.prop="'decreasing'"
      multiple-selection
      sort-by="description"
      show-clear-icon
      show-dropdown-icon
      @kupAutocompleteSelectionUpdate="logEvent"
    />

    <h3>Allow custom items</h3>
    <kup-autocomplete
      :items.prop="itemsMultiple"
      allow-custom-items
      multiple-selection
      @kupAutocompleteSelectionUpdate="logEvent"
    />
  </div>
</template>

<script>
import { AutocompleteItemFactory } from '@/mock/autocomplete';

export default {
  name: 'AutocompleteMultiple',
  data() {
    return {
      itemsMultiple: AutocompleteItemFactory(30, 'MUL', 'MulDes'),
      limitResultsTo: 5,
    };
  },
  methods: {
    logEvent(e) {
      console.log(e.detail);
    },
  },
};
</script>
