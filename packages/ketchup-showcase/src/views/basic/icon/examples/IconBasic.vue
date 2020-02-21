<template>
  <div>
    <div class="demo-wrapper">
      <p
        >Icons are used in many components and they are rendered through mainly
        SVG images. Currently, its the only type of file supported.</p
      >
      <br />
      <p class="centered">Sample markup</p>
      <code class="flat">{{ markupBasic }}</code>
    </div>

    <div class="demo-wrapper">
      <p>
        All
        <a href="https://material.io/resources/icons/?style=baseline"
          >Material Design icons</a
        >
        are supported. In order to use them, you need to set the prop
        <span class="code-word">name</span> using the correct key word.
      </p>
      <div class="demo-container">
        <div class="kup-container">
          <wup-icon name="favorite"></wup-icon>
        </div>
        <p class="centered">Favorite icon sample markup</p>
        <code class="flat">{{ markupFavorite }}</code>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'IconBasic',
  data() {
    return {
      markupBasic: '<wup-icon name="your_icon"></wup-icon>',
      markupFavorite: '<wup-icon name="favorite"></wup-icon>',
    };
  },
};
</script>
