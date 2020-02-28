<template>
  <div>
    <div class="demo-wrapper">
      <p
        >Icons are used in many Ketch.UP components. After building the library
        a <span class="code-word">dist</span> folder will be created, which will
        contain all the files needed to run Ketch.UP. Inside it, you'll find an
        <span class="code-word">assets</span> folder which must be placed in
        your app's root directory, this way the component will be able to fetch
        the files correctly. You can add your own files to it, just be sure to
        put them inside folders named as the files' extension.<br /><br />
        I.E:
        <span class="code-word"
          >assets/YOUR_FILE_EXTENSION/YOUR_FILE.YOUR_FILE_EXTENSION</span
        >
        <br /><br />Once you're done with the setup of the assets, all you need
        to do to render the image you want is setting the
        <span class="code-word">name</span> prop with your file's name and
        setting the <span class="code-word">type</span> prop with your file's
        extension.</p
      >
      <div class="demo-container">
        <div class="kup-container">
          <wup-icon dimensions="48px" name="widgets"></wup-icon>
        </div>
        <p class="centered">SVG icon sample markup</p>
        <code class="flat">{{ markupSVG }}</code>
        <div class="kup-container"
          ><wup-icon type="png" dimension="auto" name="smeup"></wup-icon>
        </div>
        <p class="centered">PNG image sample markup</p>
        <code class="flat">{{ markupPNG }}</code>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'IconBasic',
  data() {
    return {
      markupSVG: '<wup-icon dimensions="48px" name="your_icon"></wup-icon>',
      markupPNG:
        '<wup-icon type="png" dimensions="auto" name="your_icon"></wup-icon>',
    };
  },
};
</script>
