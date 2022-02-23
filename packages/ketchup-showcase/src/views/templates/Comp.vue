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
        <h3 class="page__section-header">{{ item }}</h3>
        <slot :name="'' + index"></slot>
      </div>
    </div>
    <div class="page__nav">
      <div class="page__nav-list">
        <a
          :data-item="item"
          v-for="item in titles"
          :key="item"
          class="page__nav-element"
          @click="scrollTo"
          ><kup-cell :data-item="item" drag-enabled :data.prop="setCell(item)"
        /></a>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import type { Components } from '@sme.up/ketchup/dist/types/components';
import { KupDataCell } from '@sme.up/ketchup/dist/types/managers/kup-data/kup-data-declarations';
var labels: NodeListOf<HTMLKupCellElement> = null;
var sections: NodeListOf<HTMLElement> = null;
var title: NodeListOf<HTMLElement> = null;

export default {
  beforeMount: function () {
    document.addEventListener('scroll', this.checkNav);
    document.addEventListener('resize', this.checkNav);
  },
  destroyed: function () {
    document.removeEventListener('scroll', this.checkNav);
    document.removeEventListener('resize', this.checkNav);
  },
  mounted: function () {
    labels = document.querySelectorAll('.page__nav-element');
    sections = document.querySelectorAll('.page__section');
    title = document.querySelectorAll('.page__section-header');
    this.checkNav();
  },
  methods: {
    setCell(item: string): KupDataCell {
      return {
        cssClass: 'expand-on-hover c-centered',
        obj: {
          t: 'NAVMENU',
          p: '',
          k: item,
        },
        value: item,
      };
    },
    checkNav(): void {
      if (labels.length === 0) {
        return;
      }
      const offset: number =
        document.querySelector('#app__nav-bar').clientHeight;
      for (let i = 0; i < labels.length; i++) {
        labels[i].classList.remove('active');
      }
      for (let i = 0; i < sections.length; i++) {
        if (this.isElementPartiallyInViewport(sections[i], offset)) {
          const lastEl: number = sections.length - 1;
          const currentPos: number = window.scrollY || window.screenTop;
          const maxPos: number =
            document.documentElement.scrollHeight -
            document.documentElement.clientHeight;
          if (maxPos - currentPos < 10) {
            labels[lastEl].classList.add('active');
            return;
          } else {
            labels[i].classList.add('active');
            return;
          }
        }
      }
    },
    isElementPartiallyInViewport(el: HTMLElement, offset: number): boolean {
      const rect: DOMRect = el.getBoundingClientRect();
      if (
        rect.top === 0 &&
        rect.left === 0 &&
        rect.right === 0 &&
        rect.bottom === 0 &&
        rect.height === 0 &&
        rect.width === 0 &&
        rect.x === 0 &&
        rect.y === 0
      ) {
        return false;
      }
      let windowHeight: number =
        window.innerHeight || document.documentElement.clientHeight;
      const windowWidth: number =
        window.innerWidth || document.documentElement.clientWidth;
      windowHeight = windowHeight - offset;
      const vertInView: boolean =
        rect.top - offset <= windowHeight &&
        rect.top - offset + rect.height >= 0;
      const horInView: boolean =
        rect.left <= windowWidth && rect.left + rect.width >= 0;
      return vertInView && horInView;
    },
    scrollTo(e: MouseEvent): void {
      // pos is the y-position to scroll to (in pixels)
      let pos: number = null;
      const target: HTMLElement = (e.target as HTMLElement).closest(
        '.page__nav-element'
      );
      for (let i = 0; i < labels.length; i++) {
        if (target.dataset.item === labels[i].dataset.item) {
          pos = title[i].offsetTop;
        }
      }
      if (isNaN(pos)) {
        throw 'Position must be a number';
      }
      if (pos < 0) {
        throw 'Position can not be negative';
      }
      window.scrollTo(0, pos);
    },
  },
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
    display: block;
    margin-top: 8px;
    max-height: 22px;
    padding-left: 15px;
    padding-top: 7.5px;
    transition: all 0.2s ease-in;
    color: var(--kup-text-color);
    width: max-content;

    &.active {
      color: var(--kup-secondary-color);
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
      padding: 0;
      width: 100%;
    }

    &__nav {
      margin-bottom: 4em;
      max-height: unset;
      padding: 0;
      position: relative;
      right: unset;
      top: unset;
      width: 100%;
    }

    &__nav-list {
      border: none;
    }

    &__nav-element {
      max-height: unset;
      text-align: center;
      padding-top: 15px;
      padding-left: 0;
      width: 100%;
    }
  }
}

@media screen and (min-width: 1264px) {
  .page__content {
    padding: 0.5em 0;
  }
}
</style>
