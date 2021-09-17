<template>
  <div class="page">
    <div class="page__content">
      <h1>{{ headtitle }}</h1>
      <a
        class="page__github-button"
        target="_blank"
        :href="giturl"
        aria-label="Open GitHub documentation"
        title="Open GitHub documentation"
        v-if="giturl !== undefined"
      >
        <kup-image
          color="var(--kup-primary-color)"
          size-x="32px"
          size-y="32px"
          resource="github"
        ></kup-image>
        <span class="page__github-text">View on GitHub</span>
        <kup-image
          color="var(--kup-primary-color)"
          size-x="16px"
          size-y="16px"
          resource="open-in-new"
        ></kup-image>
      </a>
      <div v-for="(item, index) in titles" :key="item" class="page__section">
        <h3 class="nav-title">{{ item }}</h3>
        <slot :name="'' + index"></slot>
      </div>
    </div>
    <div class="page__nav">
      <div class="page__nav-list">
        <a
          v-for="item in titles"
          :key="item"
          onclick="scrollToSmoothly();"
          class="page__nav-element"
          >{{ item }}</a
        >
      </div>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  props: {
    giturl: String,
    headtitle: String,
    titles: Array,
  },
};
</script>

<style scoped lang="scss">
.page {
  display: inline-flex;
  position: relative;
  width: 100%;

  &__content {
    box-sizing: border-box;
    width: calc(100% - 250px);
    &.no-nav {
      width: 100%;
    }
  }

  &__section {
    margin-bottom: 6em;
  }

  &__nav {
    padding: 15px;
    position: fixed;
    right: 0;
    top: auto;
    width: 250px;
    max-height: 75vh;
    overflow-y: auto;
    overflow-x: hidden;
  }

  &__nav-list {
    border-left: 1px solid var(--kup-primary-color);
    min-height: 45px;
  }

  &__nav-element {
    color: var(--kup-text-color);
    display: block;
    margin-top: 8px;
    max-height: 22px;
    padding-left: 15px;
    padding-top: 7.5px;
    transition: all 0.2s ease-in;
    white-space: pre;

    &.active {
      color: var(--kup-primary-color);
    }

    &:hover {
      font-size: 140%;
    }
  }

  &__github-button {
    width: 100%;
    cursor: pointer;
    max-width: fit-content;
    display: inline-flex;
    margin: 1.2em 0;
    text-decoration: none;
    opacity: 1;
    transition: opacity 0.2s ease-in-out;

    &:hover {
      opacity: 0.8;
    }

    svg {
      fill: var(--kup-primary-color);
      color: var(--kup-primary-color);
    }
  }

  &__github-text {
    color: var(--kup-primary-color);
    font-family: var(--kup-font-family);
    -webkit-font-smoothing: antialiased;
    font-size: 0.875em;
    font-weight: 500;
    letter-spacing: 0.0892857em;
    text-transform: uppercase;
    display: inline-flex;
    position: relative;
    align-items: center;
    justify-content: center;
    box-sizing: border-box;
    min-width: 64px;
    line-height: inherit;
    user-select: none;
    -webkit-appearance: none;
    vertical-align: middle;
    text-decoration: none;
    padding: 0px 8px;
    border-width: initial;
    border-style: none;
    border-color: initial;
    border-image: initial;
    outline: none;
    overflow: visible;
    border-radius: 4px;
  }
}

@media screen and (max-width: 1264px) {
  .page {
    flex-direction: column-reverse;

    &__content {
      width: 100%;
      padding: 0 30px;
    }

    &__nav {
      position: relative;
      right: unset;
      top: unset;
      width: 100%;
      margin-bottom: 4em;
    }

    &__nav-list {
      border: none;
    }

    &__nav-element {
      max-height: unset;
      text-align: center;
      padding-top: 15px;
    }
  }
}

@media screen and (min-width: 1264px) {
  .page__content {
    padding: 0.5em 0;
  }
}
</style>
