<template>
  <div>
    <p><strong>IMPORTANT:</strong> For these examples it's better to have a look at the code.</p>
    <p>A lot is happening under to hood to configure everything.</p>

    <h3>With no configuration</h3>
    <p>Since there is no configuration, the menu will use its parent element as a reference for when it needs to be opened,
      which in this case is the content of the button, not the whole button, So the element is slightly out of position</p>
    <v-btn @click="plainButtonClick">
      A plain Vuetify button
      <kup-menu :is-active="plainButtonMenu"
        @ketchupMenuClose="plainButtonMenu = false">
        <p>First menu item</p>
        <p>second menu item</p>
      </kup-menu>
    </v-btn>

    <h3>With positioning element set</h3>
    <p>Here we use a Vue ref to position the menu relatively.<br>Beware of <a href="https://vuejs.org/v2/api/#ref" target="_blank">its limitations</a>.</p>
    <v-btn
      ref="vtfBtn2"
      @click="plainBetterButtonClick">
      A plain but better Vuetify button
      <kup-menu
        :is-active="plainBetterButtonMenu"
        :positionRelativeTo.prop="plainBetterButtonReference"
        @ketchupMenuClose="plainBetterButtonMenu = false">
        <p>First menu item</p>
        <p>second menu item</p>
      </kup-menu>
    </v-btn>

    <h3>With margin and without close on outer click</h3>
    <p>You can add a margin to the menu</p>
    <v-btn
      ref="vtfBtn3Margin"
      @click="plainWithMargin = !plainWithMargin">
      A better Vuetify button with margin
      <kup-menu
        :positionRelativeTo.prop="plainBetterButtonReferenceWithMargin"
        :isActive.prop="plainWithMargin"
        close-on-outer-click="false"
        margin="24">
        <p>First menu item</p>
        <p>second menu item</p>
      </kup-menu>
    </v-btn>

    <h3>With upper and lower slots</h3>
    <v-btn
      ref="betterWithAllSlotsReference"
      @click="betterWithAllSlots = !betterWithAllSlots">
      A better Vuetify button with slots
      <kup-menu
        :isActive.prop="betterWithAllSlots"
        :positionRelativeTo.prop="betterWithAllSlotsReference"
        @ketchupMenuClose="betterWithAllSlots = false">
        <p
          class="name-slotted no-margin"
          slot="top-container">Top slot</p>
        <p
          v-for="(item, key) in menuTestItems"
          :key="key"
          class="no-margin"
        >{{ item }}</p>
        <p
          class="name-slotted no-margin"
          slot="bottom-container">Bottom slot</p>
      </kup-menu>
    </v-btn>

    <h3>Activator separated from menu</h3>
    <p>Pay attention: since the menu is attached somewhere else, you have to specify the <code class="inline">deactivationRelativeTo</code>
      prop in order to tell the menu which html element is used as reference.
    </p>
    <div class="example-container">
      <v-btn
        ref="remoteButtonRef"
        @click="remoteActivation = !remoteActivation"
      >A better Vuetify with remote activation</v-btn>
      <div ref="remoteActivationReference">Menu reference</div>
    </div>
    <kup-menu
      :isActive.prop="remoteActivation"
      :positionRelativeTo.prop="remoteActivationReference"
      :deactivationRelativeTo.prop="remoteButtonRef"
      @ketchupMenuClose="remoteActivation = false">
      <p
        v-for="(item, key) in menuTestItems"
        :key="key"
        class="no-margin"
      >{{ item }}</p>
    </kup-menu>
  </div>
</template>

<script>
  export default {
    name: "MenuBasic",
    data() {
      const menuTestItems = [];
      for (let i = 0; i < 25; i++) {
        menuTestItems.push('Test item ' + i);
      }

      return {
        betterWithAllSlots: false,
        betterWithAllSlotsReference: null,
        plainBetterButtonReference: null,
        plainBetterButtonReferenceWithMargin: null,
        plainBetterButtonMenu: false,
        plainButtonMenu: false,
        plainWithMargin: false,
        remoteActivation: false,
        remoteActivationReference: false,
        remoteButtonRef: null,
        menuTestItems,
      };
    },
    mounted() {
      // The refs are not reactive, and cannot be accessed during the first render, but only after,
      // so this trick is mandatory.
      this.plainBetterButtonReference = this.$refs.vtfBtn2.$el;
      this.plainBetterButtonReferenceWithMargin = this.$refs.vtfBtn3Margin.$el;
      this.betterWithAllSlotsReference = this.$refs.betterWithAllSlotsReference.$el;
      this.remoteActivationReference = this.$refs.remoteActivationReference; // Here there is no .$el since it's a plain html object
      this.remoteButtonRef = this.$refs.remoteButtonRef.$el;
    },
    methods: {
      getElementReference(vueElement) {
        if (vueElement) {
          return vueElement.$el;
        }
        return null;
      },
      plainButtonClick() {
        this.plainButtonMenu = !this.plainButtonMenu;
      },
      plainBetterButtonClick() {
        this.plainBetterButtonMenu = !this.plainBetterButtonMenu;
      }
    }
  }
</script>