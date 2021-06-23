<template>
  <div>
    <div class="demo-wrapper">
      <p>
        Badges can be positioned in different places depending on their class.
        By default they will be anchored to the top left, specifying the
        following classes will change this behavior:
        <br />
        <span class="code-word">top-right</span> (top right),
        <br />
        <span class="code-word">bottom-left</span> (bottom left),
        <br />
        <span class="code-word">bottom-right</span> (bottom right).
      </p>
      <div class="demo-container">
        <div class="kup-container">
          <div class="badge-anchor">
            <span>YOUR CONTAINER</span>
            <kup-badge text="TL"></kup-badge>
            <kup-badge class="kup-top-right" text="TR"></kup-badge>
            <kup-badge class="kup-bottom-left" text="BL"></kup-badge>
            <kup-badge class="kup-bottom-right" text="BR"></kup-badge>
          </div>
        </div>
        <p class="centered">Sample position markup</p>
        <code class="flat">{{ markupPosition }}</code>
      </div>
    </div>

    <div class="demo-wrapper">
      <p>
        As mentioned earlier, it is possible to use icons instead of text
        through the
        <span class="code-word">imageData</span> prop. <br />Considering the
        nature of the Image component, it is also possible to use images that
        aren't strictly SVGs, but in this case you have to keep in mind sizes. A
        wider than taller image will most likely render outside the badge's
        background.
      </p>
      <div class="demo-container">
        <div class="kup-container">
          <div class="badge-anchor">
            <span>YOUR CONTAINER</span>
            <kup-badge :imageData.prop="imageData"></kup-badge>
            <kup-badge
              :imageData.prop="imageDataURL"
              class="top-right"
            ></kup-badge>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BadgeStyling',
  data() {
    return {
      imageData: {
        resource: 'widgets',
      },
      imageDataURL: {
        sizeX: 'auto',
        resource:
          'https://ketchup.smeup.com/ketchup-showcase/header_logo_dark.svg',
      },
      markupPosition: '<kup-badge class="top-right"></kup-badge>',
    };
  },
};
</script>
