<template>
  <div>
    <div class="demo-wrapper">
      <p>It is possible to add 2 useful classes to the drawer:</p>
      <ul>
        <li
          ><span class="code-word">kup-right</span> in order to show the drawer
          on the right</li
        >
        <li
          ><span class="code-word">kup-permanent</span> in order to make the
          drawer permanent on the screen (usually for desktop applications)</li
        >
      </ul>
      <br />
      <p
        >Of course you can also combine the classes to get a permanent drawer
        showed on the right.</p
      >
      <br />
      <br />

      <p class="centered">Sample markup</p>
      <code align="center" class="flat"
        >{{ markupBasic }}<br />{{ markupBasic2 }}<br />{{ markupBasic3 }}</code
      >
    </div>
  </div>
</template>

<script>
export default {
  name: 'DrawerProp',
  data() {
    return {
      markupBasic: '<kup-drawer class="kup-right"></kup-drawer>',
      markupBasic2: '<kup-drawer class="kup-permanent"></kup-drawer>',
      markupBasic3: '<kup-drawer class="kup-permanent kup-right"></kup-drawer>',
    };
  },
  methods: {
    Updrawer1: function() {
      const sideDrawer1 = document.getElementById('seconddrawer');
      if (!sideDrawer1.opened) {
        sideDrawer1.open();
      }
    },
  },
};
</script>
