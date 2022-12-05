<template>
  <div>
    <div class="demo-wrapper">
      <p>
        The drawer is a very useful web component, it allows you to navigate
        around the various sections of a web page.
      </p>
      <p>
        The Ketchup drawer itself contains only the main structure. The user can
        append any child component through the usage of slots. <br />Remember
        that the drawer must be opened to be visible.
      </p>
      <br />
      <br />
      <p class="centered">Sample markup</p>
      <code class="flat"
        >{{ markupBasic }}<br />{{ markupBasic2 }}<br />{{ markupBasic3 }}</code
      >
    </div>
  </div>
</template>

<script>
export default {
  name: 'DrawerBasic',
  data() {
    return {
      markupBasic: '<kup-drawer>',
      markupBasic2: '  <span>Title</span>',
      markupBasic3: '</kup-drawer>',
    };
  },
};
</script>
