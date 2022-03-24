<template>
  <div>
    <div class="demo-wrapper">
      <p
        >The nav bar provides content and actions related to the current screen.
        It’s used for branding, screen titles, navigation, and actions.<br />
        There should be only one nav bar in a document.<br /><br />
        The nav bar is divided into two sections (left and right). <br />These
        sections can be filled with any HTML element through the use of
        slots.<br /><br />
        Slots named <span class="code-word">left</span> will be displayed inside
        the left section, while slots named
        <span class="code-word">right</span> will be placed in the right
        section.
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
