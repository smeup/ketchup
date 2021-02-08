<template>
  <div>
    <div class="demo-wrapper">
      <p> The drawer component has 2 events: </p>
      <ul>
        <li
          ><span class="code-word">kupDrawerClose</span>: it is launched every
          time the drawer is closed.</li
        >
        <li
          ><span class="code-word">kupDrawerOpen</span>: it is launched every
          time the drawer is opened.</li
        >
      </ul>
      <br />
      <br />
      <p class="centered">Sample markup</p>
      <code class="flat"
        >{{ markupBasic }}<br />{{ markupBasic2 }}<br />{{ markupBasic3 }}<br
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
        "ketchupDrawer.addEventListener('kupDrawerClose', e => {console.log ('Event kupDrawerClose Received', e)});",
      markupBasic3:
        "ketchupDrawer.addEventListener('kupDrawerOpen', e => {console.log ('Event kupDrawerClose Received', e)});",
    };
  },
};
</script>
