<template>
  <div>
    <div class="demo-wrapper">
      <p>
        It's possible to display a label along with the component, the content of the label must be set inside the
        <span
          class="code-word"
        >label</span> prop.
        ).
      </p>
      <div class="demo-container">
        <div class="kup-container">
          <kup-field label="I'm a label" type="itx" :data.prop="dataITX"></kup-field>
        </div>
        <p class="centered">Label sample markup</p>
        <code class="flat">{{ markupLabel }}</code>
      </div>
    </div>

    <div class="demo-wrapper">
      <p>
        By default, the label is displayed on the left. It's possible to change this default through the
        <span
          class="code-word"
        >labelPos</span> prop. Supported values: "left" (default), "top", "right".
      </p>
      <div class="demo-container">
        <div class="kup-container">
          <kup-field label-pos="top" label="I'm a label" type="itx" :data.prop="dataITX"></kup-field>
        </div>
        <p class="centered">Top label sample markup</p>
        <code class="flat">{{ markupTopLabel }}</code>
      </div>
      <div class="demo-container">
        <div class="kup-container">
          <kup-field label-pos="right" label="I'm a label" type="itx" :data.prop="dataITX"></kup-field>
        </div>
        <p class="centered">Right label sample markup</p>
        <code class="flat">{{ markupRightLabel }}</code>
      </div>
    </div>

    <div class="demo-wrapper">
      <p>
        Another feature of the field component is the displaying of a submit button, it can be done by setting to true the
        <span
          class="code-word"
        >showSubmit</span> prop and by setting a content to the
        <span class="code-word">submitLabel</span> prop.
      </p>
      <div class="demo-container">
        <div class="kup-container">
          <kup-field show-submit submit-label="SUBMIT" type="itx" :data.prop="dataITX"></kup-field>
        </div>
        <p class="centered">Submit sample markup</p>
        <code class="flat">{{ markupSubmit }}</code>
      </div>
    </div>

    <div class="demo-wrapper">
      <p>
        By default, the label is displayed on the right. It's possible to change this default through the
        <span
          class="code-word"
        >submitPos</span> prop. Supported values: "right" (default), "bottom", "top", "left".
      </p>
      <div class="demo-container">
        <div class="kup-container">
          <kup-field
            submit-pos="top"
            submit-label="SUBMIT"
            show-submit
            type="itx"
            :data.prop="dataITX"
          ></kup-field>
        </div>
        <p class="centered">Top submit sample markup</p>
        <code class="flat">{{ markupTopSubmit }}</code>
      </div>
      <div class="demo-container">
        <div class="kup-container">
          <kup-field
            submit-pos="left"
            submit-label="SUBMIT"
            show-submit
            type="itx"
            :data.prop="dataITX"
          ></kup-field>
        </div>
        <p class="centered">Left submit sample markup</p>
        <code class="flat">{{ markupLeftSubmit }}</code>
      </div>
      <div class="demo-container">
        <div class="kup-container">
          <kup-field
            submit-pos="bottom"
            submit-label="SUBMIT"
            show-submit
            type="itx"
            :data.prop="dataITX"
          ></kup-field>
        </div>
        <p class="centered">Bottom submit sample markup</p>
        <code class="flat">{{ markupBottomSubmit }}</code>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FieldStyling',
  data() {
    return {
      markupLabel: '<kup-field label="Your_label" type="itx"></kup-field>',
      markupTopLabel:
        '<kup-field label-pos="top" label="Your_label" type="itx"></kup-field>',
      markupRightLabel:
        '<kup-field label-pos="right" label="Your_label" type="itx"></kup-field>',
      markupSubmit:
        '<kup-field show-submit submit-label="SUBMIT" type="itx"></kup-field>',
      markupTopSubmit:
        '<kup-field submit-pos="top" show-submit submit-label="SUBMIT" type="itx"></kup-field>',
      markupLeftSubmit:
        '<kup-field submit-pos="left" show-submit submit-label="SUBMIT" type="itx"></kup-field>',
      markupBottomSubmit:
        '<kup-field submit-pos="bottom" show-submit submit-label="SUBMIT" type="itx"></kup-field>',
      dataITX: {},
    };
  },
};
</script>
