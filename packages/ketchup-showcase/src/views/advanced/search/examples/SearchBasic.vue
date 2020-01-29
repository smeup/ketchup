<template>
  <div class="max-width-container">
    <h3>Basic search</h3>
    <kup-search
      :data.prop="data"
      :valueField.prop="valueField"
      @kupSearchSelectionUpdated="onSearchSelectionUpdated"
      @kupSearchFilterSubmitted="onSearchFilterSubmitted"
    />
  </div>
</template>

<script>
import { sortDataTable } from '@/mock/dataTable';

export default {
  data() {
    return {
      name: 'SearchBasic',
      data: {
        ...sortDataTable,
      },
      valueField: 'FLD1',
    };
  },
  methods: {
    onSearchSelectionUpdated(e) {
      this.logEvent('SearchSelectionUpdated', e);
    },
    onSearchFilterSubmitted(e) {
      this.logEvent('SearchFilterSubmitted', e);
    },
    logEvent(eventType, e) {
      console.log(
        'Event ' + eventType + ' detail: ' + JSON.stringify(e.detail)
      );
    },
  },
};
</script>
