<template>
  <div>
    <div class="demo-wrapper">
      <p>
        <span class="code-word">KupDates</span>
        manages dates formatting and library locale. The manipulation of date
        objects is handled by a lightweight external library called
        <a href="https://day.js.org/">dayjs</a>. <br />
        Only a handful of features are enabled, since Ketchup still doesn't need
        an intensive handling of dates/locales.<br />Speaking of locales,
        Ketchup defaults to the locale of your browser. If it isn't supported,
        it falls back to English.
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'KupDatesBasic',
  data() {
    return {};
  },
};
</script>
