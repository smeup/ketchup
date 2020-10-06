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
          <kup-tab-bar :data.prop="data"></kup-tab-bar>
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
      data: [
        {
          text: 'Favorites',
          icon: 'favorite',
          active: true,
        },
        {
          text: 'Settings',
          icon: 'build',
          active: false,
        },
        {
          text: 'Iconless',
          icon: '',
          active: false,
        },
      ],
      markupObject:
        "{ text: 'Favorites', icon: 'favorite', active: true }, { text: 'Settings', icon: 'build', active: false}",
    };
  },
};
</script>
