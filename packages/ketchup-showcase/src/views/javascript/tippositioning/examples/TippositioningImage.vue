<template>
  <div>
    <br />
    <p class="test-anchor">Chip component will be anchored to the image.</p>
    <kup-button id="test-image-button" label="Reposition!"></kup-button>
    <kup-image :src.prop="'images/woodheart.JPG'"></kup-image>
  </div>
</template>

<style>
.dynamic-position {
  position: fixed;
  z-index: 1;
}

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
    var anchorEl = document.querySelector('kup-image');
    var triggerEl = document.querySelector('#test-image-button');
    triggerEl.addEventListener('click', function() {
      el.classList.add('dynamic-position');
      anchorEl.classList.add('dynamic-position-anchor');
      var positionEl = function(el, anchorEl) {
        let offsetH = el.clientHeight;
        let offsetW = el.clientWidth;
        let margin = 0;
        const rect = anchorEl.getBoundingClientRect();
        el.removeAttribute('style');

        if (window.innerHeight - rect.bottom < offsetH) {
          el.style.bottom = `${window.innerHeight - rect.top + margin}px`;
        } else {
          el.style.top = `${rect.bottom + margin}px`;
        }
        if (window.innerWidth - rect.left < offsetW) {
          el.style.right = `${window.innerWidth - rect.right}px`;
        } else {
          el.style.left = `${rect.left}px`;
        }
      };
      positionEl(el, anchorEl);
      document.addEventListener('scroll', function() {
        positionEl(el, anchorEl);
      });
      document.addEventListener('resize', function() {
        positionEl(el, anchorEl);
      });
    });
  },
};
</script>
