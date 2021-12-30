<template>
  <div>
    <div class="demo-wrapper">
      <p>
        <span class="code-word"
          >register(el: KupDynamicPositionElement, anchorEl:
          KupDynamicPositionAnchor, margin?: number, placement?:
          KupDynamicPositionPlacement, detach?: boolean): void </span
        ><br />
        Watches the element eligible to be positioned dynamically.<br />When
        this happens, the attribute
        <span class="code-word">kup-dynamic-position</span> will be placed on
        the repositioned element and the attribute
        <span class="code-word">kup-dynamic-position-anchor</span> will be
        placed on its anchor.<br />This way its easier to style them.<br />
        If the <span class="code-word">detach</span> argument is falsy, then the
        element will have fixed position. Otherwise, the element will be
        detached from its current DOM location to be appended in a container
        placed in the document's body, in order to be positioned absolutely.<br /><br />
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
        <div id="anchor-point"><div>Anchor point</div></div>
      </div>
      <p>
        <span class="code-word"
          >unregister(elements: KupDynamicPositionElement[]): void</span
        ><br />
        Removes the elements from dynamic position management.<br /><br />
      </p>
      <p>
        <span class="code-word"
          >changeAnchor(el: KupDynamicPositionElement, anchorEl:
          KupDynamicPositionAnchor): void</span
        ><br />
        Changes the anchor point of the given element.<br /><br />
      </p>
      <p>
        <span class="code-word"
          >isRegistered(el: KupDynamicPositionElement): boolean</span
        ><br />
        Checks whether an element is currently registered or not.<br /><br />
      </p>
      <p>
        <span class="code-word">start(el: KupDynamicPositionElement): void</span
        ><br />
        Starts the process of dynamically reposition the element (which must be
        firstly registered).<br />
        When the start method is invoked, the class
        <span class="code-word">kup-dynamic-position-active</span> will be added
        to the class list of the element. You can use this class to style it as
        you wish.<br />
        for example, to hide the element until this class is present.<br /><br />
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
        </div>
      </div>
      <p>
        <span class="code-word">stop(el: KupDynamicPositionElement): void</span
        ><br />
        Ends the process of dynamically reposition the element.<br /><br />
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
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { KupDom } from '@sme.up/ketchup/dist/types/utils/kup-manager/kup-manager-declarations';

var anchor: HTMLElement = null;
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
      anchor = document.querySelector('#anchor-point');
      buttonRegister = document.querySelector('#register-button');
      buttonStart = document.querySelector('#start-button');
      buttonStop = document.querySelector('#stop-button');
    },
    /**
     * Registers the button in the KupDynamicPosition class.
     */
    register() {
      dom.ketchup.dynamicPosition.register(buttonRegister, anchor);
      buttonRegister.disabled = true;
      buttonRegister.label = 'Registered!';
      buttonStart.disabled = false;
      buttonStart.label = 'Start!';
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
  },
};
</script>

<style lang="scss" scoped>
#anchor-point {
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

#register-button {
  transition: opacity 200ms ease-in;
}

#register-button[kup-dynamic-position] {
  opacity: 0;
}

#register-button[kup-dynamic-position].kup-dynamic-position-active {
  opacity: 1;
}
</style>
