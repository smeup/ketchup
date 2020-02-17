<template>
  <div>
    <div class="demo-wrapper">
      <p
        >By default the text field will be flat, this can be changed by using
        the attribute <span class="code-word">outlined</span>.
      </p>
      <br />
      <div class="demo-container">
        <div class="kup-container">
          <wup-text-field outlined label="I am outlined"></wup-text-field>
        </div>
        <p class="centered">Outlined sample markup</p>
        <code class="flat">{{ markupOutlined }}</code>
      </div>
    </div>

    <div class="demo-wrapper">
      <p
        >The attribute <span class="code-word">shaped</span> will render a
        shaped text field with its edges shaped.
      </p>
      <br />
      <div class="demo-container">
        <div class="kup-container">
          <wup-text-field shaped label="I am shaped and flat"></wup-text-field>
          <wup-text-field
            shaped
            outlined
            label="I am shaped and outlined"
          ></wup-text-field>
        </div>
        <p class="centered">Shaped sample markup</p>
        <code class="flat">{{ markupShaped }}</code>
      </div>
    </div>

    <div class="demo-wrapper">
      <p
        >In order to render a text field which occupies all the available
        horizontal space of a given container, you can use the prop
        <span class="code-word">fullWidth</span>. In this case,
        <span class="code-word">label</span> will not have the floating
        animation but instead it will behave as a static placeholder.
      </p>
      <br />
      <div class="demo-container">
        <div class="kup-container-fw">
          <wup-text-field
            full-width
            label="I am a full width field"
          ></wup-text-field>
        </div>
        <p class="centered">Full width sample markup</p>
        <code class="flat">{{ markupFullwidth }}</code>
      </div>
    </div>

    <div class="demo-wrapper">
      <p
        >To render a text field which occupies all the available vertical space,
        you can use the prop <span class="code-word">fullHeight</span>.
      </p>
      <br />
      <div class="demo-container">
        <div class="kup-container-fw" style="height: 75px;">
          <wup-text-field
            full-height
            label="I am a full height field"
          ></wup-text-field>
        </div>
        <p class="centered">Full height sample markup</p>
        <code class="flat">{{ markupFullheight }}</code>
      </div>
    </div>

    <div class="demo-wrapper">
      <p
        >You can use icons to help the user understand the nature of the field
        he is filling in. To do so, use the
        <span class="code-word">icon</span> attribute. You can use any value
        supported inside the
        <a href="https://material.io/resources/icons/?style=baseline"
          >Material Design library</a
        >.
      </p>
      <div class="demo-container">
        <div class="kup-container">
          <wup-text-field
            label="I have a heart"
            icon="favorite"
          ></wup-text-field>
          <wup-text-field
            label="I am rich"
            icon="attach_money"
            outlined
          ></wup-text-field>
          <wup-text-field
            shaped
            label="I feel like dancing"
            icon="music_note"
          ></wup-text-field>
        </div>
        <p class="centered">Icon sample markup</p>
        <code class="flat">{{ markupIcon }}</code>
      </div>
      <p
        >If you need to show a trailing icon, you can do so by also using the
        <span class="code-word">trailingIcon</span> prop.
      </p>
      <div class="demo-container">
        <div class="kup-container">
          <wup-text-field
            label="I am right-hearted"
            trailing-icon
            icon="favorite"
          ></wup-text-field>
        </div>
        <p class="centered">Trailing icon sample markup</p>
        <code class="flat">{{ markupTrailingIcon }}</code>
      </div>
    </div>

    <div class="demo-wrapper">
      <p
        >It is possible to display a helper text below the field by using the
        <span class="code-word">helper</span> prop. By default it is persistent,
        but it can also be shown when the field is focused. The prop to set to
        true to be able to do so is
        <span class="code-word">helperWhenFocused</span>.
      </p>
      <br />
      <div class="demo-container">
        <div class="kup-container">
          <wup-text-field
            label="Persistent helper"
            helper="I am persistent"
          ></wup-text-field>
          <wup-text-field
            helper-when-focused
            label="Discrete helper"
            helper="I show when asked to"
          ></wup-text-field>
        </div>
        <p class="centered">Helper sample markup</p>
        <code class="flat">{{ markupHelper }}</code>
        <p class="centered">Helper when focused sample markup</p>
        <code class="flat">{{ markupFocusHelper }}</code>
      </div>
    </div>

    <div class="demo-wrapper">
      <p
        >Another useful feature is the character counter, especially when the
        user shouldn't be able to type more than a given number of characters.
        The <span class="code-word">maxLength</span> prop will enable the
        counter, using its value as the maximun one.
      </p>
      <br />
      <div class="demo-container">
        <div class="kup-container">
          <wup-text-field
            max-length="10"
            label="Counter in field"
          ></wup-text-field>
          <wup-text-field
            text-area
            max-length="120"
            label="Counter in text area"
          ></wup-text-field>
        </div>
        <p class="centered">Counter sample markup</p>
        <code class="flat">{{ markupCounter }}</code>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TextfieldStyling',
  data() {
    return {
      markupOutlined: '<wup-text-field outlined></wup-text-field>',
      markupShaped: '<wup-text-field shaped></wup-text-field>',
      markupFullwidth: '<wup-text-field full-width></wup-text-field>',
      markupFullheight: '<wup-text-field full-height></wup-text-field>',
      markupIcon: '<wup-text-field icon="your_icon"></wup-text-field>',
      markupTrailingIcon:
        '<wup-text-field trailing-icon icon="your_icon"></wup-text-field>',
      markupHelper: '<wup-text-field helper="Your help text"></wup-text-field>',
      markupFocusHelper:
        '<wup-text-field helper-when-focused helper="Your help text"></wup-text-field>',
      markupCounter: '<wup-text-field max-length="10"></wup-text-field>',
    };
  },
};
</script>
