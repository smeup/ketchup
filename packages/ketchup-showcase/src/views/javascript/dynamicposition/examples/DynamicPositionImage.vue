<template>
  <div>
    <br />
    <p class="test-anchor">Chip component will be anchored to the image.</p>
    <kup-button id="test-image-button" label="Reposition!"></kup-button>
    <kup-image
      class="anchor-point"
      :sizeX.prop="'128px'"
      :sizeY.prop="'128px'"
      :resource.prop="'images/woodheart.JPG'"
    ></kup-image>
  </div>
</template>

<style>
#test-image-button {
  margin-bottom: 2rem;
}

kup-image {
  display: block;
}
</style>

<script>
export default {
  mounted() {
    var el = document.querySelector('kup-chip');
    var anchorEl = document.querySelector('kup-image.anchor-point');
    var triggerEl = document.querySelector('#test-image-button');
    triggerEl.addEventListener('click', function () {
      document.documentElement.ketchup.dynamicPosition.register(
        el,
        anchorEl,
        -25
      );
      document.documentElement.ketchup.dynamicPosition.start(el);
    });
  },
};
</script>
