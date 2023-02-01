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
      <span class="code-word">autocomplete</span>: array of objects containing
      <a href="https://ketchup.smeup.com/ketchup-showcase/#/autocomplete"
        >kup-autocomplete</a
      >
      <br />
      <span class="code-word">button</span>: array of objects containing
      <a href="https://ketchup.smeup.com/ketchup-showcase/#/button"
        >kup-button</a
      >
      props.
      <br />
      <span class="code-word">cell</span>: array of cells.
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
      <span class="code-word">columns</span>: array of columns.
      <br />
      <span class="code-word">combobox</span>: array of objects containing
      <a href="https://ketchup.smeup.com/ketchup-showcase/#/combobox"
        >kup-combobox</a
      >
      props.
      <br />
      <span class="code-word">datatable</span>: array of objects containing
      <a href="https://ketchup.smeup.com/ketchup-showcase/#/datatable"
        >kup-data-table</a
      >
      props.
      <br />
      <span class="code-word">datepicker</span>: array of objects containing
      <a href="https://ketchup.smeup.com/ketchup-showcase/#/datepicker"
        >kup-date-picker</a
      >
      props.
      <br />
      <span class="code-word">image</span>: array of objects containing
      <a href="https://ketchup.smeup.com/ketchup-showcase/#/image">kup-image</a>
      props.
      <br />
      <span class="code-word">list</span>: array of objects containing
      <a href="https://ketchup.smeup.com/ketchup-showcase/#/list">kup-list</a>
      props.
      <br />
      <span class="code-word">object</span>: array of objects containing
      KupObjects (t,p,k).
      <br />
      <span class="code-word">options</span>: this property is related to
      built-in layouts and it contains their settings.
      <br />
      <span class="code-word">progressbar</span>: array of objects containing
      <a href="https://ketchup.smeup.com/ketchup-showcase/#/progressbar"
        >kup-progress-bar</a
      >
      props.
      <br />
      <span class="code-word">tabbar</span>: array of objects containing
      <a href="https://ketchup.smeup.com/ketchup-showcase/#/tabbar"
        >kup-tab-bar</a
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
      <span class="code-word">timepicker</span>: array of objects containing
      <a href="https://ketchup.smeup.com/ketchup-showcase/#/timepicker"
        >kup-time-picker</a
      >
      props.
      <br />
      <span class="code-word">tree</span>: array of objects containing
      <a href="https://ketchup.smeup.com/ketchup-showcase/#/tree">kup-tree</a>
      props.
      <br />
      <br />
      <p
        >Some layouts (i.e.: dialog #3 and #5) also support
        <span class="code-word">slots</span>. The layouts can be selected
        through the combination of
        <span class="code-word">layoutFamily</span> and
        <span class="code-word">layoutNumber</span>. <br />
        Currently, the following layouts families are available.
        <br />
        <br />
        <span class="code-word">box</span>: features cards tailored for
        kup-boxes (4 layouts).
        <br />
        <span class="code-word">built-in</span>: features cards that offer a
        premade layout with integrated functionalities (5 layouts).
        <br />
        <span class="code-word">collapsible</span>: features cards that can be
        expanded after a user action (2 layouts).
        <br />
        <span class="code-word">dialog</span>: features closable and draggable
        cards with an header bar (6 layouts).
        <br />
        <span class="code-word">free</span>: features cards which accept only
        slots as content, useful to quickly set-up a generic container or a
        dropdown menu (2 layouts).
        <br />
        <span class="code-word">scalable</span>: features cards that can fit
        their container and resize their content accordingly (8 layouts).
        <br />
        <span class="code-word">standard</span>: consists of static layouts
        without additional features for common use cases (15 layouts).
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
