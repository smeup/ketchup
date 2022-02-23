<template>
  <div>
    <div class="demo-wrapper">
      <p>
        By default the text field will be flat, this can be changed by using the
        attribute
        <span class="code-word">outlined</span>.
      </p>
      <br />
      <div class="demo-container">
        <div class="kup-container">
          <kup-text-field outlined label="I am outlined"></kup-text-field>
        </div>
        <p class="centered">Outlined sample markup</p>
        <code class="flat">{{ markupOutlined }}</code>
      </div>
    </div>

    <div class="demo-wrapper">
      <p>
        The class
        <span class="code-word">kup-shaped</span> will render a shaped text
        field with rounded corners.
      </p>
      <br />
      <div class="demo-container">
        <div class="kup-container">
          <kup-text-field
            class="kup-shaped"
            label="I am shaped"
          ></kup-text-field>
          <kup-text-field
            class="kup-shaped"
            outlined
            label="I am shaped and outlined"
          ></kup-text-field>
        </div>
        <p class="centered">Shaped sample markup</p>
        <code class="flat">{{ markupShaped }}</code>
      </div>
    </div>

    <div class="demo-wrapper">
      <p>
        In order to render a text field which occupies all the available
        horizontal space of a given container, you can use the prop
        <span class="code-word">fullWidth</span>. In this case,
        <span class="code-word">label</span> will not have the floating
        animation but instead it will behave as a static placeholder.
      </p>
      <br />
      <div class="demo-container">
        <div class="kup-container-fw">
          <kup-text-field
            full-width
            label="I am a full width field"
          ></kup-text-field>
        </div>
        <p class="centered">Full width sample markup</p>
        <code class="flat">{{ markupFullwidth }}</code>
      </div>
    </div>

    <div class="demo-wrapper">
      <p>
        To render a text field which occupies all the available vertical space,
        you can use the class
        <span class="code-word">kup-full-height</span>.
      </p>
      <br />
      <div class="demo-container">
        <div class="kup-container-fw" style="height: 75px">
          <kup-text-field
            class="kup-full-height"
            label="I am a full height field"
          ></kup-text-field>
        </div>
        <p class="centered">Full height sample markup</p>
        <code class="flat">{{ markupFullheight }}</code>
      </div>
    </div>

    <div class="demo-wrapper">
      <p>
        You can use icons to help the user understand the nature of the field he
        is filling in. To do so, use the
        <span class="code-word">icon</span> attribute. You can use any value
        supported by the
        <a href="https://ketchup.smeup.com/ketchup-showcase/#/icon">Icon</a>
        component.
      </p>
      <div class="demo-container">
        <div class="kup-container">
          <kup-text-field
            label="I have a heart"
            icon="favorite"
          ></kup-text-field>
          <kup-text-field
            label="I am rich"
            icon="attach_money"
            outlined
          ></kup-text-field>
          <kup-text-field
            class="kup-shaped"
            label="I feel like dancing"
            icon="music_note"
          ></kup-text-field>
        </div>
        <p class="centered">Icon sample markup</p>
        <code class="flat">{{ markupIcon }}</code>
      </div>
      <p>
        If you need to show a trailing icon, you can do so by also using the
        <span class="code-word">trailingIcon</span> prop.
      </p>
      <div class="demo-container">
        <div class="kup-container">
          <kup-text-field
            label="I am right-hearted"
            trailing-icon
            icon="favorite"
          ></kup-text-field>
        </div>
        <p class="centered">Trailing icon sample markup</p>
        <code class="flat">{{ markupTrailingIcon }}</code>
      </div>
    </div>

    <div class="demo-wrapper">
      <p>
        It is possible to display a helper text below the field by using the
        <span class="code-word">helper</span> prop. By default it is persistent,
        but it can also be shown when the field is focused. The prop to set to
        true to be able to do so is
        <span class="code-word">helperWhenFocused</span>.
      </p>
      <br />
      <div class="demo-container">
        <div class="kup-container">
          <kup-text-field
            label="Persistent helper"
            helper="I am persistent"
          ></kup-text-field>
          <kup-text-field
            helper-when-focused
            label="Discrete helper"
            helper="I show up when asked to"
          ></kup-text-field>
        </div>
        <p class="centered">Helper sample markup</p>
        <code class="flat">{{ markupHelper }}</code>
        <p class="centered">Helper when focused sample markup</p>
        <code class="flat">{{ markupFocusHelper }}</code>
      </div>
    </div>

    <div class="demo-wrapper">
      <p>
        Another useful feature is the character counter, especially when the
        user shouldn't be able to type more than a given number of characters.
        The
        <span class="code-word">maxLength</span> prop will enable the counter,
        using its value as the maximun one.
      </p>
      <br />
      <div class="demo-container">
        <div class="kup-container">
          <kup-text-field
            max-length="10"
            label="Counter in field"
          ></kup-text-field>
          <kup-text-field
            text-area
            max-length="120"
            label="Counter in text area"
          ></kup-text-field>
        </div>
        <p class="centered">Counter sample markup</p>
        <code class="flat">{{ markupCounter }}</code>
      </div>
    </div>

    <div class="demo-wrapper">
      <p>
        It's possible to add an icon to clear the content of the field. To do
        so, you need to set to true the
        <span class="code-word">isClearable</span> prop.
      </p>
      <br />
      <div class="demo-container">
        <div class="kup-container">
          <kup-text-field
            is-clearable
            initial-value="I am clearable"
          ></kup-text-field>
        </div>
        <p class="centered">Clearable sample markup</p>
        <code class="flat">{{ markupClearable }}</code>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TextfieldStyling',
  data() {
    return {
      markupOutlined: '<kup-text-field outlined></kup-text-field>',
      markupShaped: '<kup-text-field class="kup-shaped"></kup-text-field>',
      markupFullwidth: '<kup-text-field full-width></kup-text-field>',
      markupFullheight:
        '<kup-text-field class="kup-full-height"></kup-text-field>',
      markupIcon: '<kup-text-field icon="your_icon"></kup-text-field>',
      markupTrailingIcon:
        '<kup-text-field trailing-icon icon="your_icon"></kup-text-field>',
      markupHelper: '<kup-text-field helper="Your help text"></kup-text-field>',
      markupFocusHelper:
        '<kup-text-field helper-when-focused helper="Your help text"></kup-text-field>',
      markupCounter: '<kup-text-field max-length="10"></kup-text-field>',
      markupClearable: '<kup-text-field is-clearable></kup-text-field>',
    };
  },
};
</script>

<style scoped lang="scss">
kup-text-field {
  margin: auto;
  padding: 0.5em;
}
</style>
