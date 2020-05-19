<template>
  <div class="max-width-container">
    <h3>Server handled filter</h3>
    <kup-search
      server-handled-filter
      :data.prop="data"
      :valueField.prop="valueField"
      @kupSearchSelectionUpdated="onSearchSelectionUpdated"
      @kupSearchFilterSubmitted="onSearchFilterSubmitted"
    />
  </div>
</template>

<script>
import { filterFakeDepartmentData } from '@/mock/dataTable';
export default {
  name: 'SearchServerHandled',
  data() {
    return {
      data: {},
      valueField: 'code',
    };
  },
  methods: {
    onSearchSelectionUpdated(e) {
      this.logEvent('SearchSelectionUpdated', e);
    },
    onSearchFilterSubmitted(e) {
      this.logEvent('SearchFilterSubmitted', e);
      this.data = filterFakeDepartmentData(e.detail.filter, '');
    },
    logEvent(eventType, e) {
      console.log(
        'Event ' + eventType + ' detail: ' + JSON.stringify(e.detail)
      );
    },
  },
};
</script>
