<template>
  <div>
    <div class="demo-wrapper">
      <p
        >The drawer component also has an useful public method;
        <span class="code-word">toggle</span>, which is able to automatically
        open or close the drawer depending on its current status.
      </p>
      <br />
      <br />
      <p class="centered">Sample markup</p>
      <code align="center" class="flat"
        >{{ markupBasic }}<br />{{ markupBasic2 }} <br
      /></code>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DrawerBasic',
  data() {
    return {
      markupBasic:
        'const ketchupDrawer = document.querySelector("kup-drawer");',
      markupBasic2:
        'function toggleKetchupDrawer(() => {ketchupDrawer.toggle()})',
    };
  },
};
</script>
