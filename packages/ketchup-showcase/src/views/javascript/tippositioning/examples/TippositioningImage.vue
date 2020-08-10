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
    var anchorEl = document.querySelector('kup-image.anchor-point');
    var triggerEl = document.querySelector('#test-image-button');
    triggerEl.addEventListener('click', function () {
      el.classList.add('dynamic-position');
      anchorEl.classList.add('dynamic-position-anchor');
      let margin = -25;
      el['anchorEl'] = anchorEl;
      el['anchorMargin'] = margin;

      var observer = new MutationObserver(function (mutations) {
        let target = mutations[0].target;
        if (target.classList.contains('dynamic-position-active')) {
          el['anchorInterval'] = setInterval(
            function () {
              let offsetH = el.clientHeight;
              let offsetW = el.clientWidth;
              const rect = el.anchorEl.getBoundingClientRect();

              el.style.top = ``;
              el.style.right = ``;
              el.style.bottom = ``;
              el.style.left = ``;

              if (window.innerHeight - rect.bottom < offsetH) {
                el.style.bottom = `${
                  window.innerHeight - rect.top + el['anchorMargin']
                }px`;
              } else {
                el.style.top = `${rect.bottom + el['anchorMargin']}px`;
              }
              if (window.innerWidth - rect.left < offsetW) {
                el.style.right = `${window.innerWidth - rect.right}px`;
              } else {
                el.style.left = `${rect.left}px`;
              }
            },
            10,
            el
          );
        } else {
          clearInterval(el['anchorInterval']);
        }
      });
      observer.observe(el, {
        attributes: true,
        attributeFilter: ['class'],
      });
      el.classList.add('dynamic-position-active');
    });
  },
};
</script>
