<template>
  <div>
    <div class="demo-wrapper">
      <p>
        Comboboxes are
        <span class="code-word">Text Field</span> components with a list of
        preset choices associated to them, displayed in
        <span class="code-word">List</span> components. <br />The
        <span class="code-word">listData</span> prop is where the data of the
        list is stored. <br />In the same way, the
        <span class="code-word">textfieldData</span> prop takes care of the text
        field's configuration.
        <br />
        <br />It's possible to select which information should be displayed
        inside the text field by setting up the
        <span class="code-word">displayMode</span> prop accordingly. This prop
        will set the <span class="code-word">displayMode</span> for the list
        items too. <br />It's possible to select which information should be
        returned to backend by setting up the
        <span class="code-word">selectMode</span> prop accordingly.
        <br />
        These two props can be set to return the item's
        <span class="code-word">code</span>, its
        <span class="code-word">description</span> or
        <span class="code-word">both</span>.
      </p>
      <p>
        When the
        <span class="code-word">isSelect</span> prop is set to true, the
        component will behave as a <span class="code-word">select</span>: the
        text field won't be interactable, the only way to set a value is to
        select one from the drop down list.
      </p>
      <p>
        <br />Considering that this component is pretty much a mix of two other
        ones, it can be styled accordingly by using their props. To learn more
        about styling options for each one of them, check
        <a href="https://ketchup.smeup.com/ketchup-showcase/#/textfield"
          >Text Field</a
        >
        and
        <a href="https://ketchup.smeup.com/ketchup-showcase/#/list">List</a>.
      </p>
      <p class="centered">Sample markup</p>
      <code class="flat">{{ markupBasic }}</code>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ComboboxBasic',
  data() {
    return {
      markupBasic: '<kup-combobox></kup-combobox>',
    };
  },
};
</script>
