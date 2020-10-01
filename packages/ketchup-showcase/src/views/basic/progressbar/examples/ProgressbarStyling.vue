<template>
  <div>
    <div class="demo-wrapper">
      <p>
        The progress bar component can be styled in a few different ways, in
        order to suit different UIs.
        <br />By default, the label will be displayed in the middle of the bar.
        <br />You can change this to display the label in the middle of the
        filled area, by setting to false the
        <span class="code-word">centeredLabel</span> prop. <br />In this case,
        when the bar value is at least 3%, the label color will be optimized to
        be displayed on the filled area. <br />In every other case, this will
        happen when the bar is filled by an amount equal or greater than 50%.
      </p>
      <div class="demo-container">
        <div
          class="kup-container"
          style="width: 50%; margin-left: auto; margin-right: auto;"
        >
          <kup-progress-bar
            centered-label="false"
            value="10"
          ></kup-progress-bar>
        </div>
        <p class="centered">Alternate label positioning sample markup</p>
        <code class="flat">{{ markupLabelPositioning }}</code>
      </div>
    </div>

    <div class="demo-wrapper">
      <p>
        By default, the label will be the percentage value with the addition of
        the "%" symbol. It is possible to set a custom label by setting its
        value inside the
        <span class="code-word">label</span> prop.
      </p>
      <div class="demo-container">
        <div
          class="kup-container"
          style="width: 50%; margin-left: auto; margin-right: auto;"
        >
          <kup-progress-bar
            label="Custom label, here!"
            value="20"
          ></kup-progress-bar>
        </div>
        <p class="centered">Custom label sample markup</p>
        <code class="flat">{{ markupCustomLabel }}</code>
      </div>
    </div>

    <div class="demo-wrapper">
      <p>
        The label can be also disabled altogether, by setting to true the
        <span class="code-word">hideLabel</span> prop.
      </p>
      <div class="demo-container">
        <div
          class="kup-container"
          style="width: 50%; margin-left: auto; margin-right: auto;"
        >
          <kup-progress-bar hide-label value="35"></kup-progress-bar>
        </div>
        <p class="centered">Hidden label sample markup</p>
        <code class="flat">{{ markupHiddenLabel }}</code>
      </div>
    </div>

    <div class="demo-wrapper">
      <p>
        It's also possible to display an icon to replace the label. By setting
        the
        <span class="code-word">icon</span> prop to a valid SVG name supported
        by the
        <a href="https://ketchup.smeup.com/ketchup-showcase/#/image"
          >Ketch.UP Image component</a
        >, the label will be replaced by this icon. <br />Keep in mind that in
        this case, <span class="code-word">hideLabel</span> and
        <span class="code-word">label</span> props won't have any effect.
      </p>
      <div class="demo-container">
        <div
          class="kup-container"
          style="width: 50%; margin-left: auto; margin-right: auto;"
        >
          <kup-progress-bar icon="widgets" value="50"></kup-progress-bar>
        </div>
        <p class="centered">Icon sample markup</p>
        <code class="flat">{{ markupIcon }}</code>
      </div>
    </div>

    <div class="demo-wrapper">
      <p>
        By enabling the
        <span class="code-word">hasPadding</span> prop the bar will be displayed
        with a border.
      </p>
      <div class="demo-container">
        <div
          class="kup-container"
          style="width: 50%; margin-left: auto; margin-right: auto;"
        >
          <kup-progress-bar value="60" has-padding></kup-progress-bar>
        </div>
        <p class="centered">Padding sample markup</p>
        <code class="flat">{{ markupPadding }}</code>
      </div>
    </div>

    <div class="demo-wrapper">
      <p>
        It's possible to add a striped texture to the filled area by setting to
        true the
        <span class="code-word">hasStripes</span> prop. This variant comes with
        an additional prop which animates this texture when set to true:
        <span class="code-word">isAnimated</span>.
      </p>
      <div class="demo-container">
        <div
          class="kup-container"
          style="width: 50%; margin-left: auto; margin-right: auto;"
        >
          <kup-progress-bar
            value="75"
            has-stripes
            style="margin-bottom: 1rem;"
          ></kup-progress-bar>
          <kup-progress-bar
            value="90"
            has-stripes
            is-animated
          ></kup-progress-bar>
        </div>
        <p class="centered">Stripes sample markup</p>
        <code class="flat">{{ markupStripes }}</code>
        <p class="centered">Animated stripes sample markup</p>
        <code class="flat">{{ markupAnimatedStripes }}</code>
      </div>
    </div>

    <div class="demo-wrapper">
      <p>
        If you need a slim version because your UI lacks available space, you
        can set to true the
        <span class="code-word">isSlim</span> prop.
      </p>
      <div class="demo-container">
        <div
          class="kup-container"
          style="width: 50%; margin-left: auto; margin-right: auto;"
        >
          <kup-progress-bar is-slim value="100"></kup-progress-bar>
        </div>
        <p class="centered">Padding sample markup</p>
        <code class="flat">{{ markupPadding }}</code>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProgressbarBasic',
  data() {
    return {
      markupLabelPositioning:
        '<kup-progress-bar centered-label="false" value="your_value"></kup-progress-bar>',
      markupCustomLabel:
        '<kup-progress-bar label="your_label" value="your_value"></kup-progress-bar>',
      markupIcon:
        '<kup-progress-bar icon="your_icon" value="your_value"></kup-progress-bar>',
      markupHiddenLabel:
        '<kup-progress-bar hide-label value="your_value"></kup-progress-bar>',
      markupPadding:
        '<kup-progress-bar has-padding value="your_value"></kup-progress-bar>',
      markupStripes:
        '<kup-progress-bar has-stripes value="your_value"></kup-progress-bar>',
      markupAnimatedStripes:
        '<kup-progress-bar is-animated has-stripes value="your_value"></kup-progress-bar>',
    };
  },
};
</script>
