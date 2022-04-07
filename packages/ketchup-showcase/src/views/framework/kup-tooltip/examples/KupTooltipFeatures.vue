<template>
  <div>
    <div class="demo-wrapper">
      <kup-accordion id="accordion">
        <div class="accordion-slot" slot="1">
          <p>
            <span class="code-word">register(element, options?): void</span
            ><br />
            Registers an HTMLElement as KupTooltipAnchor, triggering callback
            invocation on mouse over.<br /><br />
            - <strong>element (KupTooltipAnchor)</strong> - The HTML element to
            be registered.<br />
            - <strong>options (KupTooltipCallbacks)</strong> - Optional
            callbacks.<br />
          </p>
          <div class="demo-container">
            <div class="kup-container">
              <kup-button
                class="kup-shaped"
                id="register-button"
                icon="pin_drop"
                label="Register me"
                @kup-button-click="register()"
                styling="outlined"
              ></kup-button>
            </div>
            <div id="anchor" class="anchor-point"
              ><div
                >Anchor point (hover on me with your mouse after
                registering!)</div
              ></div
            >
          </div></div
        >
        <div class="accordion-slot" slot="2">
          <p>
            <span class="code-word">isRegistered(element): boolean</span><br />
            Checks whether an element is currently registered or not.<br /><br />
            - <strong>element (KupTooltipAnchor)</strong> - Element to test.<br /><br /> </p></div
        ><div class="accordion-slot" slot="3">
          <p>
            <span class="code-word">show(anchor?, options?): void</span><br />
            Displays the tooltip.<br /><br />
            - <strong>anchor (KupTooltipAnchor)</strong> - Anchor point of the
            tooltip.<br />
            - <strong>options (Partial&lt;HTMLKupCardElement&gt;)</strong> -
            Props/attributes of the tooltip.<br /><br /> </p></div
        ><div class="accordion-slot" slot="4">
          <p>
            <span class="code-word">hide(): void</span><br />
            Hides the tooltip.<br /><br /></p></div
        ><div class="accordion-slot" slot="5">
          <p>
            <span class="code-word">unregister(element): void</span><br />
            Unregisters an HTMLElement, preventing its attached callback from
            being invoked.<br /><br />
            - <strong>element (KupTooltipAnchor)</strong> - The HTML element to
            be unregistered.<br /> </p></div
      ></kup-accordion>
    </div>
  </div>
</template>

<script lang="ts">
import { KupDom } from '@sme.up/ketchup/dist/types/managers/kup-manager/kup-manager-declarations';
import { KupTooltipAnchor } from '@sme.up/ketchup/dist/types/managers/kup-tooltip/kup-tooltip-declarations';

var accordion: HTMLKupAccordionElement = null;
var anchor: KupTooltipAnchor = null;
var registerButton: HTMLKupButtonElement = null;

const dom: KupDom = document.documentElement as KupDom;

export default {
  name: 'KupTooltipFeatures',
  data() {
    return {};
  },
  methods: {
    /**
     * Initializes Vue component's variables.
     */
    initVariables(): void {
      accordion = document.querySelector('#accordion');
      anchor = document.querySelector('#anchor');
      registerButton = document.querySelector('#register-button');
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
            title: 'show',
          },
          {
            name: '4',
            title: 'hide',
          },
          {
            name: '5',
            title: 'unregister',
          },
        ],
      };
      accordion.expandAll();
    },
    /**
     * Registers the anchor point in the KupTooltip class.
     */
    register() {
      registerButton.disabled = true;
      dom.ketchup.tooltip.register(anchor, {
        enter: () => {
          dom.ketchup.tooltip.show(anchor, {
            data: {
              text: ['This is a "enter" callback!'],
            },
            layoutNumber: 8,
          });
        },
        over: (e) => {
          const randomBg = dom.ketchup.theme.randomColor(128);
          const contrastText = dom.ketchup.theme.colorContrast(randomBg);
          dom.ketchup.tooltip.element.style.setProperty(
            '--kup-background-color',
            randomBg
          );
          dom.ketchup.tooltip.element.style.setProperty(
            '--kup-text-color',
            contrastText
          );
          dom.ketchup.tooltip.element.style.setProperty(
            '--kup-text-color-rgb',
            dom.ketchup.theme.colorCheck(contrastText).rgbValues
          );
          dom.ketchup.tooltip.show(anchor, {
            data: {
              text: [
                'Coordinates',
                'x:',
                e.x.toString(),
                'y:',
                e.y.toString(),
                'callback:',
                '"over"',
              ],
            },
            layoutNumber: 15,
          });
        },
        leave: () => {
          dom.ketchup.tooltip.hide();
        },
      });
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

<style lang="scss" scoped>
.anchor-point {
  border: 1px solid var(--kup-border-color);
  border-radius: 4px;
  margin: 1em auto;
  max-width: 100%;
  padding: 0.75em;
  width: max-content;
}
</style>
