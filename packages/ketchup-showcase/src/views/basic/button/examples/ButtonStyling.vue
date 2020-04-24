<template>
  <div>
    <div class="demo-wrapper">
      <p>
        There are two other ways to render a button in addition to the default
        styling. The attribute
        <span
          class="code-word"
        >flat</span>
        will render a button without its background, only the text will be
        visible. On the other hand, the attribute
        <span
          class="code-word"
        >outlined</span> will render an outlined button.
        These attributes are mutually exclusive.
      </p>
      <div class="demo-container">
        <div class="kup-container">
          <kup-button flat label="Flat"></kup-button>
          <kup-button outlined label="Outlined"></kup-button>
        </div>
        <p class="centered">Flat sample markup</p>
        <code class="flat">{{ markupFlat }}</code>
        <p class="centered">Outlined sample markup</p>
        <code class="flat">{{ markupOutlined }}</code>
      </div>
    </div>

    <div class="demo-wrapper">
      <p>
        The attribute
        <span class="code-word">shaped</span> may be used for any
        of the stylings above, and it will shape the edges of the button to be
        more round.
      </p>
      <div class="demo-container">
        <div class="kup-container">
          <kup-button shaped label="Raised"></kup-button>
          <kup-button flat shaped label="Flat"></kup-button>
          <kup-button outlined shaped label="Outlined"></kup-button>
        </div>
        <p class="centered">Rounded sample markup</p>
        <code class="flat">{{ markupRounded }}</code>
      </div>
    </div>

    <div class="demo-wrapper">
      <p>
        It is possible to set the button to fill all available space both
        vertically and horizontally, using the
        <span
          class="code-word"
        >fullHeight</span> and
        <span class="code-word">fullWidth</span> props. You can use them both as
        in the example below.
      </p>
      <div class="demo-container">
        <div
          class="kup-container"
          style="height: 25vh; width: 50vw; margin: auto;  margin-bottom: 2rem;"
        >
          <kup-button full-height full-width label="Full height and full width"></kup-button>
        </div>
        <p class="centered">Full height sample markup</p>
        <code class="flat">{{ markupFullheight }}</code>
        <p class="centered">Full width sample markup</p>
        <code class="flat">{{ markupFullwidth }}</code>
      </div>
    </div>

    <div class="demo-wrapper">
      <p>
        If you want to use an icon to give further emphasis to the button's
        meaning, you can use the attribute
        <span
          class="code-word"
        >icon</span> and specify a value supported by the
        <a
          href="https://ketchup.smeup.com/ketchup-showcase/#/image"
        >Ketch.UP Icon component</a>. It's important to specify both
        <span class="code-word">label</span> and
        <span class="code-word">icon</span> attributes in this case, because
        specifying only
        <span class="code-word">icon</span> will render the
        <span class="code-word">icon button variant</span>.
      </p>
      <div class="demo-container">
        <div class="kup-container">
          <kup-button icon="favorite" label="Favorite"></kup-button>
          <kup-button flat icon="play_arrow" label="Play"></kup-button>
          <kup-button outlined icon="done" label="Submit"></kup-button>
        </div>
        <p class="centered">Icon sample markup</p>
        <code class="flat">{{ markupIcon }}</code>
      </div>
    </div>

    <div class="demo-wrapper">
      <p>
        The
        <span class="code-word">iconColor</span> prop will override the
        default behavior of icons, always rendering them using the color
        provided, unless the component is
        <span
          class="code-word"
        >disabled</span>.
      </p>
      <div class="demo-container">
        <div class="kup-container">
          <kup-button icon-color="purple" icon="favorite" label="Purple heart"></kup-button>
        </div>
        <p class="centered">Icon color sample markup</p>
        <code class="flat">{{ markupIconcolor }}</code>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ButtonStyling',
  data() {
    return {
      markupFlat: '<kup-button flat label="Flat"></kup-button>',
      markupFullheight:
        '<kup-button full-height label="Full height"></kup-button>',
      markupFullwidth:
        '<kup-button full-width label="Full width"></kup-button>',
      markupIconcolor:
        '<kup-button icon-color="purple" label="Purple heart"></kup-button>',
      markupOutlined: '<kup-button outlined label="Outlined"></kup-button>',
      markupRounded: '<kup-button shaped label="Shaped"></kup-button>',
      markupIcon: '<kup-button icon="Favorite" label="Favorite"></kup-button>',
    };
  },
};
</script>
