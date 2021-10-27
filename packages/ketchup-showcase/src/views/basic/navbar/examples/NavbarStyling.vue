<template>
  <div>
    <div class="demo-wrapper">
      <p
        >The appearance of the component can be customized using themes, more
        specifically you can set the nav bar height and its background color.<br />
        The content will be colored dynamically with black or white, depending
        on the contrast with the background.<br />
        There are 4 different styles available for the nav bar component:
        <br />
        <br />
        <span class="code-word">- standard</span>: this is the default look
        (suggested height 64px);
        <br />
        <span class="code-word">- dense</span>: tighter padding, content is more
        dense (suggested height 48px);
        <br />
        <span class="code-word">- prominent</span>: more space between the
        content (suggested height 128px);
        <br />
        <span class="code-word">- short</span>: this style will feature a very
        compact nav bar, ideally with only a couple actions. (suggested height
        64px);
        <br />
      </p>
      <br />
    </div>
  </div>
</template>

<script>
export default {
  name: 'NavbarStyling',
  data() {
    return {};
  },
};
</script>
