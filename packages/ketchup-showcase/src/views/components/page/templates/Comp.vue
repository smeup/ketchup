<template>
  <div id="page-wrapper">
    <div id="page-content">
      <h1>{{ headtitle }}</h1>
      <div v-for="(item, index) in titles" :key="item" class="section">
        <h3 class="nav-title">{{ item }}</h3>
        <slot :name="'' + index"></slot>
      </div>
    </div>
    <div id="page-nav">
      <div class="page-nav-list">
        <a
          v-for="item in titles"
          :key="item"
          onclick="scrollToSmoothly();"
          class="page-nav-element"
          >{{ item }}</a
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    headtitle: String,
    titles: Array,
  },
};
</script>
