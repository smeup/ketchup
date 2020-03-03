<template>
  <div>
    <div class="demo-wrapper">
      <p
        >If you need visual feedback for loading times related to the whole app,
        you might want to set the component to fill the whole viewport. You can
        do so by setting the <span class="code-word">fullScreen</span> prop to
        true. In this scenario, it is also possible to give even more emphasis
        to the loading process by using a blending background of neutral grey to
        the page. This will darken light themes and lighten dark ones. The prop
        to activate this feature is <span class="code-word">fader</span> and it
        comes with a setup-prop which lets you customize the waiting time before
        it triggers (<span class="code-word">faderTimeout</span>). You can try
        this props in the playground above.
      </p>
      <br />
      <div class="demo-container">
        <p class="centered">Full screen sample markup</p>
        <code class="flat">{{ markupFullScreen }}</code>
        <p class="centered">Fader sample markup</p>
        <code class="flat">{{ markupFader }}</code>
      </div>
    </div>

    <div class="demo-wrapper">
      <p
        >It is possible to set a custom size for the spinner using the
        <span class="code-word">dimensions</span> prop. This will effect
        standard spinners in both height and width, while it will only affect
        height in case the spinner is set to render a bar variant.
      </p>
      <br />
      <div class="demo-container">
        <div class="kup-container" style="height: 100px; width: 100%;">
          <kup-spinner active dimensions="10px"></kup-spinner>
        </div>
        <div class="kup-container" style="height: 10vh; width: 100%;">
          <kup-spinner active dimensions="15px" bar-variant></kup-spinner>
        </div>
        <p class="centered">Dimensions bar sample markup</p>
        <code class="flat">{{ markupBarDimensions }}</code>
        <p class="centered">Dimensions spinner sample markup</p>
        <code class="flat">{{ markupSpinnerDimensions }}</code>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SpinnerStyling',
  data() {
    return {
      markupBarDimensions:
        '<kup-spinner dimensions="15px" bar-variant></kup-spinner>',
      markupSpinnerDimensions: '<kup-spinner dimensions="10px"></kup-spinner>',
      markupFader: '<kup-spinner fader full-screen></kup-spinner>',
      markupFullScreen: '<kup-spinner full-screen></kup-spinner>',
    };
  },
};
</script>
