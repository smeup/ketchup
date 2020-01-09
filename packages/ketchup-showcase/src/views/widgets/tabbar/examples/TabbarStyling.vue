<template>
  <div>
    <div class="demo-wrapper">
      <p>
        It's possible to set an icon to be displayed beside the tab's text.
      </p>
      <div class="demo-container">
        <div class="kup-container">
          <wup-tab-bar></wup-tab-bar>
        </div>
        <p class="centered">Icons sample object</p>
        <code class="flat">{{ markupObject }}</code>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TabbarStyling',
  data() {
    return {
      markupObject:
        "{ text: 'Favorites', icon: 'favorites', status: 'Active' }, { text: 'Settings', icon: 'build', status: ''}",
    };
  },
};
</script>
