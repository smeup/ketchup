<template>
  <div>
    <div class="demo-wrapper">
      <p>
        Images are used in many Ketch.UP components. This component will fetch assets contained in this folder of your app, so before using it you should setup this directory first:
        <br />
        <br />
        <span class="code-word">assets/YOUR_FILE_EXTENSION/YOUR_FILE.YOUR_FILE_EXTENSION</span>
        <br />
        <br />Once you're done with the setup of the assets, all you need
        to do to render the image you want is setting the
        <span
          class="code-word"
        >name</span> prop with your file's name and
        setting the
        <span class="code-word">type</span> prop with your file's
        extension.
        <br />It is also possible to set a URL or another path of your choice in the
        <span
          class="code-word"
        >name</span> prop, by doing so the standard behavior
        of the component will be overridden and it will display the resource located inside the directory specified.
      </p>
      <div class="demo-container">
        <div class="kup-container">
          <kup-image size-x="128px" size-y="128px" name="widgets"></kup-image>
        </div>
        <p class="centered">SVG icon sample markup</p>
        <code class="flat">{{ markupSVG }}</code>
        <div class="kup-container">
          <kup-image type="png" size-x="auto" size-y="auto" name="smeup"></kup-image>
        </div>
        <p class="centered">PNG image sample markup</p>
        <code class="flat">{{ markupPNG }}</code>
        <div class="kup-container">
          <kup-image
            size-x="auto"
            size-y="auto"
            name="https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png"
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
        '<kup-image size-x="128px" size-y="128px" name="your_icon"></kup-image>',
      markupPNG:
        '<kup-image type="png" size-x="auto" size-y="auto" name="your_icon"></kup-image>',
      markupURL:
        '<kup-image size-x="auto" size-y="auto" name="https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png"></kup-image>',
    };
  },
};
</script>
