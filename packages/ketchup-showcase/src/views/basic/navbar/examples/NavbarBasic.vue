<template>
  <div>
    <div class="demo-wrapper">
      <p>Nav bar is an element sticking to the top of the page, containing context and actions about the app. There should be only one nav bar.</p>
      <p>
        The
        <span class="code-word">data</span> prop contains all the data of the nav bar, structured like this:
        <br />
        <br />
        <span class="code-word">title</span> is the text displayed by the nav bar.
        <br />
        <span class="code-word">menuAction</span> contains the data related to the left button, when it's not set it defaults to be a menu button.
        <br />
        <span class="code-word">menuActions</span> contains the data of the menu button list.
        <br />
        <span class="code-word">optionActions</span> contains the data of actions inside the Options menu, which is displayed as three vertical buttons on the right.
      </p>
      <br />
      <p class="centered">Sample markup</p>
      <code class="flat">{{ markupBasic }}</code>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NavbarBasic',
  data() {
    return {
      markupBasic: '<kup-nav-bar></kup-nav-bar>',
    };
  },
};
</script>
