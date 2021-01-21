<template>
  <div>
    <div class="demo-wrapper">
      <p>
        There are two other ways to render a dropdown button in addition to the
        default styling. The attribute
        <span class="code-word">flat</span>
        will render a dropdown button without its background, only the text will
        be visible. On the other hand, the attribute
        <span class="code-word">outlined</span> will render an outlined dropdown
        button. These attributes are mutually exclusive.
      </p>
      <div class="demo-container">
        <div class="kup-container">
          <kup-dropdown-button
            styling="flat"
            label="Flat"
          ></kup-dropdown-button>
          <kup-dropdown-button
            styling="outlined"
            label="Outlined"
          ></kup-dropdown-button>
        </div>
        <p class="centered">Flat sample markup</p>
        <code class="flat">{{ markupFlat }}</code>
        <p class="centered">Outlined sample markup</p>
        <code class="flat">{{ markupOutlined }}</code>
      </div>
    </div>

    <div class="demo-wrapper">
      <p>
        The class
        <span class="code-word">shaped</span> may be used for any of the
        stylings above, and it will shape the edges of the dropdown button to be
        more round.
      </p>
      <div class="demo-container">
        <div class="kup-container">
          <kup-dropdown-button
            class="shaped"
            label="Raised"
          ></kup-dropdown-button>
          <kup-dropdown-button
            styling="flat"
            class="shaped"
            label="Flat"
          ></kup-dropdown-button>
          <kup-dropdown-button
            styling="outlined"
            class="shaped"
            label="Outlined"
          ></kup-dropdown-button>
        </div>
        <p class="centered">Shaped sample markup</p>
        <code class="flat">{{ markupRounded }}</code>
      </div>
    </div>

    <div class="demo-wrapper">
      <p>
        It is possible to set the dropdown button to fill all available space
        both vertically and horizontally, using the
        <span class="code-word">full-height</span> and
        <span class="code-word">full-width</span> classes. You can use them both
        as in the example below.
      </p>
      <div class="demo-container">
        <div
          class="kup-container"
          style="height: 25vh; width: 50vw; margin: auto; margin-bottom: 2rem"
        >
          <kup-dropdown-button
            class="full-height full-width"
            label="Full height and full width"
          ></kup-dropdown-button>
        </div>
        <p class="centered">Full height sample markup</p>
        <code class="flat">{{ markupFullheight }}</code>
        <p class="centered">Full width sample markup</p>
        <code class="flat">{{ markupFullwidth }}</code>
      </div>
    </div>

    <div class="demo-wrapper">
      <p>
        If you want to use an icon to give further emphasis to the dropdown
        button's meaning, you can use the attribute
        <span class="code-word">icon</span> and specify a value supported by the
        <a href="https://ketchup.smeup.com/ketchup-showcase/#/image"
          >Ketch.UP Icon component</a
        >.
      </p>
      <div class="demo-container">
        <div class="kup-container">
          <kup-dropdown-button
            icon="favorite"
            label="Favorite"
          ></kup-dropdown-button>
          <kup-dropdown-button
            styling="flat"
            icon="play_arrow"
            label="Play"
          ></kup-dropdown-button>
          <kup-dropdown-button
            styling="outlined"
            icon="done"
            label="Submit"
          ></kup-dropdown-button>
        </div>
        <p class="centered">Icon sample markup</p>
        <code class="flat">{{ markupIcon }}</code>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ButtonStyling',
  data() {
    return {
      markupFlat:
        '<kup-dropdown-button styling="flat" label="Flat"></kup-dropdown-button>',
      markupFullheight:
        '<kup-dropdown-button class="full-height" label="Full height"></kup-dropdown-button>',
      markupFullwidth:
        '<kup-dropdown-button class="full-width" label="Full width"></kup-dropdown-button>',
      markupOutlined:
        '<kup-dropdown-button styling="outlined" label="Outlined"></kup-dropdown-button>',
      markupRounded:
        '<kup-dropdown-button class="shaped" label="Shaped"></kup-dropdown-button>',
      markupIcon:
        '<kup-dropdown-button icon="Favorite" label="Favorite"></kup-dropdown-button>',
    };
  },
};
</script>
