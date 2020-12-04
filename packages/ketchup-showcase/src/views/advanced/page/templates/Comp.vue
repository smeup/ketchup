<template>
  <div id="page-wrapper">
    <div id="page-content">
      <h1>{{ headtitle }}</h1>
      <a
        class="github-link-area"
        target="_blank"
        :href="giturl"
        aria-label="Open GitHub documentation"
        title="Open GitHub documentation"
        v-if="giturl !== undefined"
      >
        <kup-image
          color="var(--kup-main-color)"
          size-x="32px"
          size-y="32px"
          resource="github"
        ></kup-image>
        <span class="github-text">View on GitHub</span>
        <kup-image
          color="var(--kup-main-color)"
          size-x="16px"
          size-y="16px"
          resource="open-in-new"
        ></kup-image>
      </a>
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
    giturl: String,
    headtitle: String,
    titles: Array,
  },
};
</script>
