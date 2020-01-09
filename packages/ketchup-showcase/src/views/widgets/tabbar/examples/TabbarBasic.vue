<template>
  <div>
    <div class="demo-wrapper">
      <p
        >Tab bars are generally used to navigate between different sections of
        content on the same hierarchy. Tabs must be defined in a JavaScript
        object.</p
      >
      <br />
      <div class="demo-container">
        <div class="kup-container">
          <wup-tab-bar></wup-tab-bar>
        </div>
        <p class="centered">Sample markup</p>
        <code class="flat">{{ markupBasic }}</code>
        <p class="centered">Sample object</p>
        <code class="flat">{{ markupObject }}</code>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TabbarBasic',
  data() {
    return {
      markupBasic: '<wup-tab-bar></wup-tab-bar>',
      markupObject:
        "{ text: 'Favorites', icon: '', status: 'Active' }, { text: 'Settings', icon: '', status: ''}",
    };
  },
};
</script>
