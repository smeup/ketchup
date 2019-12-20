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
        >The attribute <span class="code-word">rounded</span> will render a
        shaped text field with its edges rounded.
      </p>
      <br />
      <div class="demo-container">
        <div class="kup-container">
          <wup-text-field rounded label="I am shaped and flat"></wup-text-field>
          <wup-text-field
            rounded
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
        horizontal space of a given container, you can use the attribute
        <span class="code-word">fullwidth</span>. In this case,
        <span class="code-word">label</span> will not have the floating
        animation but instead it will behave as a static placeholder.
      </p>
      <br />
      <div class="demo-container">
        <div class="kup-container-fw">
          <wup-text-field
            fullwidth
            label="I am a full width field"
          ></wup-text-field>
        </div>
        <p class="centered">Full width sample markup</p>
        <code class="flat">{{ markupFullwidth }}</code>
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
            rounded
            label="I feel like dancing"
            icon="music_note"
          ></wup-text-field>
        </div>
        <p class="centered">Icon sample markup</p>
        <code class="flat">{{ markupIcon }}</code>
      </div>
      <p
        >If you need to show a trailing icon, you can do so by also using the
        <span class="code-word">trailingicon</span> attribute.
      </p>
      <div class="demo-container">
        <div class="kup-container">
          <wup-text-field
            label="I am right-hearted"
            trailingicon
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
        <span class="code-word">helper</span> attribute. By default it is
        persistent, but it can also be shown when the field is focused. The
        attribute to do so is <span class="code-word">helperwhenfocus</span>.
      </p>
      <br />
      <div class="demo-container">
        <div class="kup-container">
          <wup-text-field
            label="Persistent helper"
            helper="I am persistent"
          ></wup-text-field>
          <wup-text-field
            helperwhenfocus
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
        The <span class="code-word">maxlength</span> attribute will enable the
        counter, using its value as the maximun one.
      </p>
      <br />
      <div class="demo-container">
        <div class="kup-container">
          <wup-text-field
            maxlength="10"
            label="Counter in field"
          ></wup-text-field>
          <wup-text-field
            textarea
            maxlength="120"
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
      markupShaped: '<wup-text-field rounded></wup-text-field>',
      markupFullwidth: '<wup-text-field fullwidth></wup-text-field>',
      markupIcon: '<wup-text-field icon="your_icon"></wup-text-field>',
      markupTrailingIcon:
        '<wup-text-field trailingicon icon="your_icon"></wup-text-field>',
      markupHelper: '<wup-text-field helper="Your help text"></wup-text-field>',
      markupFocusHelper:
        '<wup-text-field helperwhenfocus helper="Your help text"></wup-text-field>',
      markupCounter: '<wup-text-field maxlength="10"></wup-text-field>',
    };
  },
};
</script>
