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
            - <strong>anchor (KupDynamicPositionAnchor)</strong> - Anchor point
            of the tooltip: HTML element or x/y coordinates.<br />
            - <strong>options (Partial&lt;HTMLKupCardElement&gt;)</strong> -
            Props/attributes of the tooltip.<br /><br />
          </p>
          <div class="demo-container">
            <div class="kup-container">
              <kup-button
                id="show-button"
                label="Show - anchored here"
                @kup-button-click="(e) => show(e)"
              ></kup-button>
              <kup-button
                id="show-mouse-button"
                label="Show - anchored on mouse coords"
                @click="(e) => show(e)"
              ></kup-button>
            </div> </div></div
        ><div class="accordion-slot" slot="4">
          <p>
            <span class="code-word">hide(): void</span><br />
            Hides the tooltip.<br /><br /></p></div
        ><div class="accordion-slot" slot="5">
          <p>
            <span class="code-word">fCellCallbacks: KupTooltipCallbacks</span
            ><br />
            By setting a value to this property, KupTooltip will be
            automatically displayed on mouse over when hovering on a FCell
            functional component.<br /><br />The available callbacks are:<br /><br />
            - <strong>enter</strong>: (event: PointerEvent, anchor: HTMLElement)
            => void<br />- <strong>over</strong>: (event: PointerEvent, anchor:
            HTMLElement) => void<br />- <strong>leave</strong>: (event:
            PointerEvent, anchor: HTMLElement) => void<br />In order to properly
            read the cell's props, it's possible to invoke a getter associated
            to the attribute
            <span class="code-word">kup-get-cell-props</span> on the FCell
            HTMLElement.</p
          >
          <code class="flat"
            >const props = anchor['kup-get-cell-props']();</code
          >
          <div class="demo-container">
            <div class="kup-container">
              <kup-button
                id="fcell-button"
                label="Toggle FCell callbacks"
                @kup-button-click="fCellCallbacks()"
              ></kup-button>
            </div>
            <kup-data-table id="fcell-data-table"></kup-data-table></div></div
        ><div class="accordion-slot" slot="6">
          <p>
            <span class="code-word">destroy(): void</span><br />
            Destroys the tooltip.<br /><br
          /></p>
          <div class="demo-container">
            <div class="kup-container">
              <kup-button
                id="destroy-button"
                label="Destroy"
                @kup-button-click="destroy()"
              ></kup-button> </div></div></div
        ><div class="accordion-slot" slot="7">
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
import { KupButtonClickEventPayload } from '@sme.up/ketchup/dist/types/components/kup-button/kup-button-declarations';

var accordion: HTMLKupAccordionElement = null;
var anchor: KupTooltipAnchor = null;
var fCellDatatable: HTMLKupDataTableElement = null;
var registerButton: HTMLKupButtonElement = null;
var showButton: HTMLKupButtonElement = null;

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
      fCellDatatable = document.querySelector('#fcell-data-table');
      registerButton = document.querySelector('#register-button');
      showButton = document.querySelector('#show-button');
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
            title: 'fCellCallbacks',
          },
          {
            name: '6',
            title: 'destroy',
          },
          {
            name: '7',
            title: 'unregister',
          },
        ],
      };
      fCellDatatable.data = {
        columns: [{ name: 'FCELL', title: 'FCell' }],
        rows: [
          {
            cells: {
              FCELL: {
                value: 'Toggle the callbacks the hover on me!',
              },
            },
          },
        ],
      };
      accordion.expandAll();
    },
    /**
     * Invokes the destroy method.
     */
    destroy() {
      dom.ketchup.tooltip.destroy();
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
    /**
     * Enables fCellCallbacks.
     */
    fCellCallbacks() {
      if (dom.ketchup.tooltip.fCellCallbacks) {
        dom.ketchup.tooltip.fCellCallbacks = null;
      } else {
        dom.ketchup.tooltip.fCellCallbacks = {
          enter: (_e, anchor) => {
            anchor.style.setProperty(
              '--kup-cell-background',
              'var(--kup-primary-color)'
            );
            anchor.style.setProperty(
              '--kup-cell-text-color',
              'var(--kup-text-on-primary-color)'
            );
            const props = anchor['kup-get-cell-props']();
            const cardText = ['Cell props'];
            for (const key in props) {
              const prop = props[key];
              if (key !== 'component') {
                cardText.push(key);
                let value = '';
                try {
                  value = JSON.stringify(prop);
                } catch (error) {
                  value = 'Unstringifiable JSON';
                }
                cardText.push(value);
              }
            }
            dom.ketchup.tooltip.show(anchor, {
              data: {
                text: cardText,
              },
              layoutNumber: 15,
            });
          },
          leave: (_e, anchor) => {
            anchor.style.setProperty('--kup-cell-background', '');
            anchor.style.setProperty('--kup-cell-text-color', '');
            dom.ketchup.tooltip.hide();
          },
        };
      }
    },
    /**
     * Displays the tooltip.
     */
    show(event: MouseEvent | CustomEvent<KupButtonClickEventPayload>) {
      if (event.type === 'kup-button-click') {
        dom.ketchup.tooltip.show(showButton, {
          data: { text: ["I'm anchored to this button"] },
          layoutNumber: 1,
        });
      } else {
        const rect = document.documentElement.getBoundingClientRect();
        const x = (event as MouseEvent).clientX - rect.left;
        const y = (event as MouseEvent).clientY - rect.top;
        dom.ketchup.tooltip.show(
          {
            x,
            y,
          },
          {
            data: {
              text: [
                "I'm anchored to mouse x and y coordinates",
                x.toString(),
                y.toString(),
              ],
            },
            layoutNumber: 1,
          }
        );
      }
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
