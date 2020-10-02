<template>
  <div>
    <div class="demo-wrapper">
      <p>
        The content of the
        <span class="code-word">position</span> prop will decide where to anchor
        the badge. <br />Supported values are:
        <span class="code-word">BR</span> (bottom right),
        <span class="code-word">BL</span> (bottom left),
        <span class="code-word">TR</span> (top right),
        <span class="code-word">TL</span> (top left, this is the default value).
      </p>
      <div class="demo-container">
        <div class="kup-container">
          <div class="badge-anchor">
            <span>YOUR CONTAINER</span>
            <kup-badge position="TL" text="TL"></kup-badge>
            <kup-badge position="TR" text="TR"></kup-badge>
            <kup-badge position="BL" text="BL"></kup-badge>
            <kup-badge position="BR" text="BR"></kup-badge>
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
            <kup-badge :imageData.prop="imageData" position="TL"></kup-badge>
            <kup-badge :imageData.prop="imageDataURL" position="TR"></kup-badge>
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
      markupPosition: '<kup-badge position="your_position"></kup-badge>',
    };
  },
};
</script>
