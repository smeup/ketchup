<template>
  <div>
    <div class="demo-wrapper">
      <kup-accordion id="accordion">
        <div class="accordion-slot" slot="1">
          <p>
            <span class="code-word"
              >register(el, vertical?, percentages?): void</span
            ><br />
            Watches the given element in order to trigger the scroll on hover
            when conditions are met.<br />Children nodes with the
            "hover-scrolling-child" will be watched and scrolled when the main
            element scrolls.<br /><br />
            - <strong>el (KupScrollOnHoverElement)</strong> - Element to
            watch.<br />
            - <strong>vertical (boolean)</strong> - Enables vertical scroll.<br />
            - <strong>percentages (KupScrollOnHoverPercentages)</strong> - Sets
            how big is the area in which the scroll is enabled.<br />
            - <strong>step (number)</strong> - Sets the speed of the scroll.<br /> </p
          ><div class="demo-container">
            <div id="scrolling-div"
              ><kup-card id="scrolling-card"></kup-card>
            </div> </div
        ></div>
        <div class="accordion-slot" slot="2">
          <p>
            <span class="code-word">isRegistered(el): boolean</span><br />
            Checks whether an element is currently registered or not.<br /><br />
            - <strong>el (KupScrollOnHoverElement)</strong> - Element to
            check.<br /><br /> </p></div
        ><div class="accordion-slot" slot="3">
          <p>
            <span class="code-word">unregister(el): void</span><br />
            Removes the given element from ScrollOnHover watchlist.<br /><br />
            - <strong>el (KupScrollOnHoverElement)</strong> - Element to
            unregister.<br /> </p></div
      ></kup-accordion>
    </div>
  </div>
</template>

<script lang="ts">
import { KupDom } from '@sme.up/ketchup/dist/types/managers/kup-manager/kup-manager-declarations';
import { KupScrollOnHoverElement } from '@sme.up/ketchup/dist/types/managers/kup-scroll-on-hover/kup-scroll-on-hover-declarations';

var accordion: HTMLKupAccordionElement = null;
var scrollingCard: HTMLKupCardElement = null;
var scrollingDiv: HTMLElement = null;

const dom: KupDom = document.documentElement as KupDom;

export default {
  name: 'KupScrollOnHoverFeatures',
  data() {
    return {};
  },
  methods: {
    /**
     * Initializes Vue component's variables.
     */
    initVariables(): void {
      accordion = document.querySelector('#accordion');
      scrollingCard = document.querySelector('#scrolling-card');
      scrollingDiv = document.querySelector('#scrolling-div');
    },
    /**
     * Initializes the widgets by setting all the values to the related components.
     */
    initWidgets(): void {
      accordion.data = {
        columns: [
          {
            name: '1',
            title: 'register',
          },
          {
            name: '2',
            title: 'isRegistered',
          },
          {
            name: '3',
            title: 'unregister',
          },
        ],
      };
      scrollingCard.data = {
        image: [{ resource: 'images/catz_small.jpg' }],
        text: [
          'Very large card!',
          null,
          'This card is super large so it triggers scrollbars on its container. Try hovering on the edges of the element: it should scroll automatically!',
        ],
      };
      scrollingCard.sizeX = '200vw';
      scrollingCard.sizeY = '400px';
      dom.ketchup.scrollOnHover.register(
        scrollingDiv as KupScrollOnHoverElement,
        true,
        {
          back: 0.3,
          forward: 0.7,
        }
      );
      accordion.expandAll();
    },
  },
  mounted() {
    this.initVariables();

    if (dom.ketchup) {
      this.initWidgets();
    } else {
      document.addEventListener('kup-manager-ready', this.initWidgets);
    }
  },
  destroyed() {
    document.removeEventListener('kup-manager-ready', this.initWidgets);
  },
};
</script>

<style scoped>
#scrolling-div {
  height: 200px;
  overflow: auto;
}
</style>
