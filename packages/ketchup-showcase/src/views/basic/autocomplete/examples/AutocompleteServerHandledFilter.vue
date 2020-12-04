<template>
  <div class="max-width-container">
    <h3>With no items set and interchangeable items</h3>
    <div class="example-container">
      <div>
        <p>Single selection</p>
        <kup-autocomplete
          :items.prop="changeableAutocompleteItems"
          :placeholder.prop="'Single selection'"
          server-handled-filter
          @kupAutocompleteFilterUpdate="logFilterUpdate"
          @kupAutocompleteSelectionUpdate="logEvent"
        />

        <br /><br />
        <p>Multiple selection</p>
        <kup-autocomplete
          :items.prop="changeableAutocompleteItems"
          :placeholder.prop="'Multiple selection'"
          multiple-selection
          server-handled-filter
          @kupAutocompleteFilterUpdate="logFilterUpdate"
          @kupAutocompleteSelectionUpdate="logEvent"
        />
      </div>
      <div>
        <p
          >Use these buttons to change the elements which are used by this
          autocomplete</p
        >
        <v-btn @click="changeableAutocompleteItems = setElements"
          >SET elements</v-btn
        >
        <v-btn @click="changeableAutocompleteItems = multipleElements"
          >MULTIPLE elements</v-btn
        >
        <v-btn @click="changeableAutocompleteItems = testElements"
          >TEST elements</v-btn
        >
        <v-btn @click="changeableAutocompleteItems = []">Empty</v-btn>
      </div>
    </div>
  </div>
</template>

<script>
import { AutocompleteItemFactory } from '@/mock/autocomplete';

export default {
  name: 'AutocompleteServerHandledFilter',
  data() {
    return {
      items: AutocompleteItemFactory(),
      changeableAutocompleteItems: [],
      setElements: AutocompleteItemFactory(10, 'SET', 'Setter '),
      multipleElements: AutocompleteItemFactory(10, 'MULT', 'Multiple '),
      testElements: AutocompleteItemFactory(10, 'TST', 'Testing '),
    };
  },
  methods: {
    logEvent(e) {
      console.log(e.detail);
    },
    logFilterUpdate(e) {
      console.log('filter updated', e.detail);
    },
  },
};
</script>
