<template>
  <div>
    <div class="demo-wrapper">
      <p>
        Images are used in many Ketchup components. The default behavior will be
        fetching SVG icons contained inside this folder, placed in the root of
        your app:
        <br />
        <br />
        <span class="code-word">assets/svg/${resource}.svg</span>
        <br />
        <br />To fetch the icon you need, just set the
        <span class="code-word">resource</span> prop to the name of the icon you
        need. <br />It is also possible to set a URL or another path of your
        choice in the <span class="code-word">resource</span> prop, by doing so
        the component will display the resource located in the specified path.
      </p>
      <div class="demo-container">
        <div class="kup-container">
          <kup-image
            size-x="128px"
            size-y="128px"
            resource="widgets"
          ></kup-image>
        </div>
        <p class="centered">SVG icon sample markup</p>
        <code class="flat">{{ markupSVG }}</code>
        <div class="kup-container">
          <kup-image
            size-x="auto"
            size-y="128px"
            resource="https://ketchup.smeup.com/ketchup-showcase/header_logo.svg"
          ></kup-image>
        </div>
        <p class="centered">URL image sample markup</p>
        <code class="flat">{{ markupURL }}</code>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ImageBasic',
  data() {
    return {
      markupSVG:
        '<kup-image size-x="128px" size-y="128px" resource="your_icon"></kup-image>',
      markupURL:
        '<kup-image size-x="auto" size-y="128px" resource="https://ketchup.smeup.com/ketchup-showcase/header_logo.svg"></kup-image>',
    };
  },
};
</script>
