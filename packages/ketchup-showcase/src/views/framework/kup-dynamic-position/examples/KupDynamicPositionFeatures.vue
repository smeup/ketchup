<template>
  <div>
    <div class="demo-wrapper">
      <kup-accordion id="accordion">
        <div class="accordion-slot" slot="1">
          <p>
            <span class="code-word"
              >register(el, anchorEl, margin?, placement?, detach?): void </span
            ><br />
            Watches the element eligible to be positioned dynamically.<br />When
            this happens, the attribute
            <span class="code-word">kup-dynamic-position</span> will be placed
            on the repositioned element and the attribute
            <span class="code-word">kup-dynamic-position-anchor</span> will be
            placed on its anchor.<br />This way its easier to style them.<br />
            If the <span class="code-word">detach</span> argument is falsy, then
            the element will have fixed position. Otherwise, the element will be
            detached from its current DOM location to be appended in a container
            placed in the document's body, in order to be positioned
            absolutely.<br /><br />
            - <strong>el (KupDynamicPositionElement)</strong> - Element to be
            positioned.<br />-
            <strong>anchorEl (KupDynamicPositionAnchor)</strong> - Element to
            which <span class="code-word">el</span> will be anchored.<br />
            - <strong>margin (number)</strong> - Offset in pixels.<br />-
            <strong>placement (KupDynamicPositionPlacement)</strong> - Where to
            place <span class="code-word">el</span> relatively to its anchor.<br />-
            <strong>detach (boolean)</strong> - Position absolute instead of
            fixed, <span class="code-word">el</span> will be detached from its
            current DOM position to be moved inside the body of the document.<br /><br />Try
            it yourself with the widget below. You will notice that when the
            positioning isn't started the element will disappear. This happens
            because the element is styled to behave like a tooltip.<br /><br />
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
            <div id="anchor" class="anchor-point"><div>Anchor point</div></div>
          </div></div
        >
        <div class="accordion-slot" slot="2">
          <p>
            <span class="code-word">start(el): void</span><br />
            Starts the process of dynamically reposition the element (which must
            be firstly registered).<br />
            When the start method is invoked, the class
            <span class="code-word">kup-dynamic-position-active</span> will be
            added to the class list of the element. You can use this class to
            style it as you wish.<br />
            for example, to hide the element until this class is present.<br /><br />
            - <strong>el (KupDynamicPositionElement)</strong> - Element to be
            positioned.<br /><br />
          </p>
          <div class="demo-container">
            <div class="kup-container">
              <kup-button
                class="kup-shaped"
                disabled
                id="start-button"
                icon="play_arrow"
                label="Start!"
                @kup-button-click="start()"
                styling="outlined"
              ></kup-button>
            </div> </div
        ></div>
        <div class="accordion-slot" slot="3">
          <p>
            <span class="code-word">stop(el): void</span><br />
            Ends the process of dynamically reposition the element.<br /><br />
            - <strong>el (KupDynamicPositionElement)</strong> - Element to be
            positioned.<br /><br />
          </p>
          <div class="demo-container">
            <div class="kup-container">
              <kup-button
                class="kup-shaped"
                disabled
                id="stop-button"
                icon="stop"
                label="Stop!"
                @kup-button-click="stop()"
                styling="outlined"
              ></kup-button>
            </div> </div
        ></div>
        <div class="accordion-slot" slot="4">
          <p>
            <span class="code-word">changeAnchor(el, anchorEl): void</span
            ><br />
            Changes the anchor point of the given element.<br /><br />
            - <strong>el (KupDynamicPositionElement)</strong> - Element to be
            positioned.<br />
            - <strong>anchorEl (KupDynamicPositionAnchor)</strong> - New anchor
            element.<br /><br />
          </p>
          <div class="demo-container">
            <div id="change-anchor" class="anchor-point" @click="changeAnchor"
              ><div>Change anchor</div></div
            >
          </div></div
        >
        <div class="accordion-slot" slot="5">
          <p>
            <span class="code-word">isRegistered(el): boolean</span><br />
            Checks whether an element is currently registered or not.<br /><br />
            - <strong>el (KupDynamicPositionElement)</strong> - Element to be
            positioned.<br /><br /> </p
        ></div>
        <div class="accordion-slot" slot="6">
          <p>
            <span class="code-word">unregister(elements): void</span><br />
            Removes the elements from dynamic position management.<br /><br />
            - <strong>elements (KupDynamicPositionElement[])</strong> - Elements
            to be unregistered.<br /><br /> </p></div
      ></kup-accordion>
    </div>
  </div>
</template>

<script lang="ts">
import { KupDom } from '@sme.up/ketchup/dist/types/managers/kup-manager/kup-manager-declarations';

var accordion: HTMLKupAccordionElement = null;
var anchor: HTMLElement = null;
var anchorChange: HTMLElement = null;
var buttonRegister: HTMLKupButtonElement = null;
var buttonStart: HTMLKupButtonElement = null;
var buttonStop: HTMLKupButtonElement = null;

const dom: KupDom = document.documentElement as KupDom;

export default {
  name: 'KupDynamicPositionFeatures',
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
      anchorChange = document.querySelector('#change-anchor');
      buttonRegister = document.querySelector('#register-button');
      buttonStart = document.querySelector('#start-button');
      buttonStop = document.querySelector('#stop-button');
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
            title: 'start',
          },
          {
            name: '3',
            title: 'stop',
          },
          {
            name: '4',
            title: 'changeAnchor',
          },
          {
            name: '5',
            title: 'isRegistered',
          },
          {
            name: '6',
            title: 'unregister',
          },
        ],
      };
      accordion.expandAll();
    },
    /**
     * Registers the button in the KupDynamicPosition class.
     */
    register() {
      dom.ketchup.dynamicPosition.register(
        buttonRegister,
        anchor,
        null,
        null,
        true
      );
      buttonRegister.disabled = true;
      buttonRegister.label = 'Registered!';
      buttonStart.disabled = false;
      buttonStart.label = 'Start!';
      anchorChange.classList.add('visible');
    },
    /**
     * Changes the anchor point.
     */
    changeAnchor() {
      dom.ketchup.dynamicPosition.changeAnchor(buttonRegister, anchorChange);
    },
    /**
     * Starts the dynamic positioning.
     */
    start() {
      dom.ketchup.dynamicPosition.start(buttonRegister);
      buttonStart.disabled = true;
      buttonStart.label = 'Already started!';
      buttonStop.disabled = false;
      buttonStop.label = 'Stop!';
    },
    /**
     * Stops the dynamic positioning.
     */
    stop() {
      dom.ketchup.dynamicPosition.stop(buttonRegister);
      buttonStart.disabled = false;
      buttonStart.label = 'Start!';
      buttonStop.disabled = true;
      buttonStop.label = 'Already stopped!';
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
    dom.ketchup.dynamicPosition.unregister(buttonRegister as any);
    buttonRegister.remove();
  },
};
</script>

<style lang="scss" scoped>
.anchor-point {
  align-items: center;
  border: 2px var(--kup-border-color);
  border-style: inset;
  box-sizing: border-box;
  display: flex;
  height: 6em;
  margin: 0.25em auto 5em auto;
  padding: 0 0.75em;
  width: 6em;
}

#register-button[kup-dynamic-position] {
  opacity: 0;

  &.kup-dynamic-position-active {
    opacity: 1;
    transition: opacity 200ms ease-in;
  }
}

#change-anchor {
  border-style: solid;
  border-radius: 16px;
  cursor: pointer;
  display: none;

  &.visible {
    display: flex;
  }
}
</style>
