<template>
  <div class="max-width-container">
    <h3>Basic autocomplete</h3>
    <kup-autocomplete :listData.prop="items" field-id="f1" />
    <!-- @kupAutocompleteSelectionUpdate="logEvent" -->

    <!--
    <h3>Autocomplete disabled</h3>
    <kup-autocomplete
      :listData.prop="items"
      disabled
      @kupAutocompleteSelectionUpdate="logEvent"
    />

    <h3>Display mode code and mode description</h3>
    <div class="example-container">
      <kup-autocomplete
        :listData.prop="items"
        display-mode="code"
        @kupAutocompleteSelectionUpdate="logEvent"
      />
      <kup-autocomplete
        :listData.prop="items"
        display-mode="description"
        @kupAutocompleteSelectionUpdate="logEvent"
      />
    </div>

    <h3>Show clear icon or dropdown icon</h3>
    <div class="example-container">
      <kup-autocomplete
        :listData.prop="items"
        show-clear-icon
        @kupAutocompleteSelectionUpdate="logEvent"
      />
      <kup-autocomplete
        :listDaa.prop="items"
        show-dropdown-icon
        @kupAutocompleteSelectionUpdate="logEvent"
      />
    </div>

    <h3>Show clear icon and dropdown icon</h3>
    <kup-autocomplete
      :lisData.prop="items"
      show-clear-icon
      show-dropdown-icon
      @kupAutocompleteSelectionUpdate="logEvent"
    />

    <h3>Change number of filter chars necessary to trigger the autocomplete</h3>
    <div class="example-container">
      <div>
        <p>2 characters necessary</p>
        <kup-autocomplete
          :listData.prop="items"
          minimum-chars="2"
          show-clear-icon
          @kupAutocompleteSelectionUpdate="logEvent"
        />
      </div>
      <div>
        <p>5 characters necessary</p>
        <kup-autocomplete
          :listData.prop="items"
          minimum-chars="5"
          show-clear-icon
          @kupAutocompleteSelectionUpdate="logEvent"
        />
      </div>
    </div>

    <h3>With sorting by code or sorting by description (decreasing order)</h3>
    <p>Use the arrows of the autocomplete to force the opening of the menu</p>
    <div class="example-container">
      <kup-autocomplete
        :listData.prop="items"
        :sortOrder.prop="'decreasing'"
        display-mode="code"
        sort-by="code"
        show-dropdown-icon
        @kupAutocompleteSelectionUpdate="logEvent"
      />
      <kup-autocomplete
        :listData.prop="items"
        :sortOrder.prop="'decreasing'"
        display-mode="description"
        sort-by="description"
        show-dropdown-icon
        @kupAutocompleteSelectionUpdate="logEvent"
      />
    </div>

    <h3>Limit results to: {{ limitResultsTo }} items</h3>
    <kup-autocomplete
      :listData.prop="items"
      :limit-results.prop="limitResultsTo"
      @kupAutocompleteSelectionUpdate="logEvent"
    />

    <h3>Allow custom items</h3>
    <kup-autocomplete
      :listData.prop="items"
      :limit-results.prop="limitResultsTo"
      allow-custom-items
      @kupAutocompleteSelectionUpdate="logEvent"
    />
    -->
  </div>
</template>

<script>
import { AutocompleteItemFactory } from '@/mock/autocomplete';

export default {
  name: 'AutocompleteBasic',
  data() {
    return {
      items: AutocompleteItemFactory(),
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
