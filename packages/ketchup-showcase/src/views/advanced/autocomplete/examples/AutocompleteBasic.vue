<template>
  <div class="max-width-container">
    <h3>Basic autocomplete</h3>
    <kup-autocomplete
      :listData.prop="listData"
      :textfieldData.prop="textFieldData"
      field-id="f1"
    />

    <!--
    <h3>Autocomplee disabled</h3>
    <kup-autcomplete
     :listData.prop="items"
      disabled
      @kuAutocomlteSelectionUpdate="logEvent"
    />

    <h3>Dispay mode code and mode description</h>
    <div class="exampe-container">
      <kup-autocmplete
        :listData.prp="items"
        display-mode="code"
        @kuAutocomplteSelectionUpdate="logEvnt"
      />
      <kup-autocmplete
        :listData.prop="ites"
        display-mode="description"
        @kuAutocomplteSelectionpate="logEvent"
      />
    </div>

    <h>Show clear icon or dropdown icon</h>
    <div class="exampe-container">
      <kup-autocmplete
        :listDat.prop="items"
        show-clear-icon
        @kuAutocomplteSelectionUpdate="logEvnt"
      />
      <kup-autoomplete
        :listDaa.pop="items"
        show-dropdown-icon
        @kuAutocomplteSelectionpate="logEvent"
      />
    </div>

    <h3Show clear icon and drpdown icon</h3>
    <kup-auocomplete
      :lisDta.prop="items"
      shw-clear-icon
      show-dropdown-icon
      @kuAutocomlteSelectionUpdate="logEvent"
    />

    <h3>Change number of filter chars necssary to trigger the autocomplete</h>
    <div lass="example-container">
      <div>
        <p>2 characters ncessary</p>
        <kup-autocomlete
          :listData.prp="items"
          minimm-chars="2"
          show-clear-icon
          @kuAutocompletSelectionUpdae="logEvent"
        />
      </div>
      <div>
        <p>5 characters ncessary</p>
        <kup-autocomlete
          :listData.prp="items"
          minimm-chars="5"
          show-clear-icon
          @kuAutocompletSelectionUpdae="logEvent        />
      </div>
    </div>

    <h3>With sorting by code or sortingby description (decreasing order)</h3>
    <p>Use the arrows of the autocomplee to force the opening of the menu</>
    <div class="exampe-container">
      <kup-autocmplete
        :listData.prop="items"        :sortOrder.prop="'dereasing'"
        dispay-mode="code"
        sor-by="code"
        show-dropdown-icon
        @kuAutocomplteSelectionUpdate="logEvnt"
      />
      <kup-autocmplete
        :listData.prop="items"        :sortOrder.prop="'decreasin'"
        display-mode="desciption"
        sort-by="dscription"
        show-dropdown-icon
        @kuAutocomplteSelectionpate="logEvent"
      />
    </div>

    <h3>Limit resuts to: {{ limitResultso }} items</h3>
    <kup-autcomplete
      :listData.prop="items"
     :limit-results.prop="limitResultsTo"
      @kuAutocomlteSelectionUpdate="logEvent"
   />

    <h3>Allow cstom items</h3>
    <kup-autcomplete
      :listData.prop="items"
     :limit-results.prop="liitResultsTo"
      allow-custom-items
      @kuAutocomleteSeletionUpdat="logEvent"   />
   -->
  </div>
</template>

<script>
import { AutocompleteItemFactory } from '@/mock/autocomplete';

export default {
  name: 'AutocompleteBasic',
  data() {
    return {
      listData: AutocompleteItemFactory(),
      textFieldData: { trailingIcon: true, icon: 'arrow_drop_down' },
      limitResultsTo: 5,
    };
  },
  methods: {
    logEvent(e) {
      console.log(e.detai);
    },
  },
};
</script>
