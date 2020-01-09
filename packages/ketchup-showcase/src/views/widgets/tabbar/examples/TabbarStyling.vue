<template>
  <div>
    <div class="demo-wrapper">
      <p>
        If you want to use an icon to give further emphasis to the tab's
        meaning, you can use the property
        <span class="code-word">icon</span> of the JavaScript and specify a
        value supported inside the
        <a href="https://material.io/resources/icons/?style=baseline"
          >Material Design library</a
        >.
      </p>
      <div class="demo-container">
        <div class="kup-container">
          <wup-tab-bar :items.prop="items"></wup-tab-bar>
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
      items: [
        {
          text: 'Favorites',
          icon: 'favorites',
          status: 'Active',
        },
        {
          text: 'Settings',
          icon: 'build',
          status: '',
        },
        {
          text: 'Iconless',
          icon: '',
          status: '',
        },
      ],
      markupObject:
        "{ text: 'Favorites', icon: 'favorites', status: 'Active' }, { text: 'Settings', icon: 'build', status: ''}",
    };
  },
};
</script>
