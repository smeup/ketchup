<template>
  <div>
    <div class="demo-wrapper">
      <p
        >The button widget can be rendered in an alternate way: as an icon
        button. In order to do so, you need to specify the
        <span class="code-word">icon</span> attribute without the
        <span class="code-word">label</span> attribute. The styling options are
        not supported for this variant and they shouldn't be used.</p
      ><div class="demo-container">
        <div class="kup-container">
          <wup-button icon="play_arrow"></wup-button>
        </div>
        <p class="centered">Icon button sample markup</p>
        <code class="flat">{{ markupIconButton }}</code>
      </div>
    </div>

    <div class="demo-wrapper">
      <p
        >The icon button can also work as a toggler switching between ON and
        OFF. To use it in this way, you need to specify the attribute
        <span class="code-word">toggable</span>. To render an icon toggled ON,
        use the attribute <span class="code-word">checked</span>. By default,
        the off state will show an outlined version of the
        <span class="code-word">icon</span>. You can change this by setting an
        icon value in the prop <span class="code-word">iconOff</span>.</p
      ><div class="demo-container">
        <div class="kup-container">
          <wup-button toggable icon="favorite"></wup-button>
          <wup-button toggable checked icon="favorite"></wup-button>
        </div>
        <p class="centered">Toggable icon button sample markup</p>
        <code class="flat">{{ markupIconButtonToggable }}</code>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ButtonIconVariant',
  data() {
    return {
      markupIconButton: '<wup-button icon="play_arrow"></wup-button>',
      markupIconButtonToggable:
        '<wup-button toggable icon="favorite"></wup-button>',
    };
  },
};
</script>
