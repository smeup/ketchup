<template>
  <div>
    <div class="demo-wrapper">
      <p
        >Comboboxes are <span class="code-word">Text Field</span> components
        with a list of preset choices associated to them, displayed in
        <span class="code-word">List</span> components.
        <br />
        The <span class="code-word">listData</span> prop is where the data of
        the list is stored. <br />In the same way, the
        <span class="code-word">textfieldData</span> prop takes care of the text
        field's configuration.</p
      ><p>
        <br />
        Considering that this component is pretty much a mix of two other ones,
        it can be styled accordingly by using their props. To learn more about
        styling options for each one of them, check
        <a href="https://ketchup.smeup.com/ketchup-showcase/#/textfield"
          >Text Field</a
        >
        and
        <a href="https://ketchup.smeup.com/ketchup-showcase/#/list">List</a
        >. </p
      ><p class="centered">Sample markup</p>
      <code class="flat">{{ markupBasic }}</code>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ComboboxBasic',
  data() {
    return {
      markupBasic: '<wup-combobox></wup-combobox>',
    };
  },
};
</script>
