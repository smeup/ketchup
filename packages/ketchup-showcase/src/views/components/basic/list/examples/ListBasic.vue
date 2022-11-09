<template>
  <div>
    <div class="demo-wrapper">
      <p>
        When there are multiple elements of the same type it is advised to use
        the list component. The actual elements of the list must be defined
        inside the
        <span class="code-word">data</span> prop, following this structure:
        <br />
        <br />
        <span class="code-word">id</span> is mandatory and it's the actual value
        of the item.
        <br />
        <span class="code-word">value</span> is mandatory and defines the
        description.
        <br />
        <span class="code-word">icon</span> is optional and it's the icon
        associated to the row, it will be displayed through the Image component:
        any value supported can be found in the
        <a href="https://ketchup.smeup.com/ketchup-showcase/#/image">Image</a>
        page.
        <br />
        <span class="code-word">secondaryText</span> contains an optional string
        that will be displayed below <span class="code-word">text</span> when
        the component's items are arranged in two lines.
        <br />
        <span class="code-word">separator</span> is optional and will display a
        separator above this item.
        <br />
        <span class="code-word">selected</span> is optional and defines whether
        the tab is selected or not.
      </p>
      <br />
      <p class="centered">Sample markup</p>
      <code class="flat">{{ markupBasic }}</code>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ListBasic',
  data() {
    return {
      markupBasic: '<kup-list></kup-list>',
    };
  },
};
</script>
