<template>
  <div>
    <div class="demo-wrapper">
      <p>Cards are surfaces containing informations and/or actions.</p>
      <p>
        What makes the cards really useful is the concept of a premade layout
        which can be filled through the
        <span class="code-word">data</span> prop.
      </p>
      <p
        >The idea behind JSON population is pretty simple, properties are arrays
        of sub-components prop reflecting the name of the component itself.<br />
        Here is a list of properties that are currently used.</p
      >
      <br />
      <span class="code-word">button</span>: array of objects containing
      <a href="https://ketchup.smeup.com/ketchup-showcase/#/button"
        >kup-button</a
      >
      props.
      <br />
      <span class="code-word">chart</span>: array of objects containing
      <a href="https://ketchup.smeup.com/ketchup-showcase/#/chart">kup-chart</a>
      props.
      <br />
      <span class="code-word">checkbox</span>: array of objects containing
      <a href="https://ketchup.smeup.com/ketchup-showcase/#/checkbox"
        >kup-checkbox</a
      >
      <br />
      <span class="code-word">chip</span>: array of objects containing
      <a href="https://ketchup.smeup.com/ketchup-showcase/#/button">kup-chip</a>
      props.
      <br />
      <span class="code-word">color</span>: array of CSS color strings.
      <br />
      <span class="code-word">combobox</span>: array of objects containing
      <a href="https://ketchup.smeup.com/ketchup-showcase/#/combobox"
        >kup-combobox</a
      >
      props.
      <br />
      <span class="code-word">image</span>: array of objects containing
      <a href="https://ketchup.smeup.com/ketchup-showcase/#/image">kup-image</a>
      props.
      <br />
      <span class="code-word">progressbar</span>: array of objects containing
      <a href="https://ketchup.smeup.com/ketchup-showcase/#/progressbar"
        >kup-progress-bar</a
      >
      props.
      <br />
      <span class="code-word">text</span>: array of strings.
      <br />
      <span class="code-word">textfield</span>: array of objects containing
      <a href="https://ketchup.smeup.com/ketchup-showcase/#/textfield"
        >kup-text-field</a
      >
      props.
      <br />
      <br />
      <p>
        The layouts can be selected through the combination of
        <span class="code-word">layoutFamily</span> and
        <span class="code-word">layoutNumber</span>. <br />
        Currently, the following layouts families are available.
        <br />
        <br />
        <span class="code-word">collapsible</span>: features cards that can be
        expanded after a user action (2 layouts).
        <br />
        <span class="code-word">dialog</span>: features closable and draggable
        cards with an header bar (3 layouts).
        <br />
        <span class="code-word">scalable</span>: features cards that can fit
        their container and resize their content accordingly (8 layouts).
        <br />
        <span class="code-word">standard</span>: consists of static layouts
        without additional features for common use cases (13 layouts).
      </p>
      <br />
      <p class="centered">Sample markup</p>
      <code class="flat">{{ markupBasic }}</code>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CardBasic',
  data() {
    return {
      markupBasic: '<kup-card></kup-card>',
    };
  },
};
</script>
