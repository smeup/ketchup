<template>
  <div>
    <div class="demo-wrapper">
      <p
        >There are two other ways to render a button in addition to the default
        styling. The attribute
        <span class="code-word">flat</span>
        will render a button without its background, only the text will be
        visible. On the other hand, the attribute
        <span class="code-word">transparent</span> will render an outlined
        button. These attributes must be used exclusively.</p
      >
      <div class="demo-container">
        <div class="kup-container">
          <wup-button flat text="Flat"></wup-button>
          <wup-button transparent text="Transparent"></wup-button>
        </div>
        <p class="centered">Flat sample markup</p>
        <code class="flat">{{ markupFlat }}</code>
        <p class="centered">Transparent sample markup</p>
        <code class="flat">{{ markupTransparent }}</code>
      </div>
    </div>

    <div class="demo-wrapper">
      <p
        >The attribute <span class="code-word">rounded</span> may be used for
        any of the stylings above, and it will shape the edges of the button to
        be rounded.</p
      ><div class="demo-container">
        <div class="kup-container">
          <wup-button rounded text="Raised"></wup-button>
          <wup-button flat rounded text="Flat"></wup-button>
          <wup-button transparent rounded text="Transparent"></wup-button>
        </div>
        <p class="centered">Rounded sample markup</p>
        <code class="flat">{{ markupRounded }}</code>
      </div>
    </div>

    <div class="demo-wrapper">
      <p
        >If you want to use an icon to give further emphasis to the button's
        meaning, you can use the attribute
        <span class="code-word">icon</span> and specify a value supported inside
        the
        <a href="https://material.io/resources/icons/?style=baseline"
          >Material Design library</a
        >. rounded. It's important to specify both
        <span class="code-word">text</span> and
        <span class="code-word">icon</span> attributes in this case, because
        specifying only <span class="code-word">icon</span> will render the
        <span class="code-word">icon button variant</span>.</p
      ><div class="demo-container">
        <div class="kup-container">
          <wup-button icon="favorite" text="Favorite"></wup-button>
          <wup-button flat icon="play_arrow" text="Play"></wup-button>
          <wup-button transparent icon="done" text="Submit"></wup-button>
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
      markupFlat: '<wup-button flat text="Flat"></wup-button>',
      markupTransparent:
        '<wup-button transparent text="Transparent"></wup-button>',
      markupRounded: '<wup-button rounded text="Rounded"></wup-button>',
      markupIcon: '<wup-button icon="Favorite" text="Favorite"></wup-button>',
    };
  },
};
</script>
