<template>
  <div>
    <div class="demo-wrapper">
      <p
        >The nav bar provides content and actions related to the current screen.
        It’s used for branding, screen titles, navigation, and actions.<br />
        There should be only one nav bar for page.<br />
      </p>
      <p>
        The left section of the nav bar is static and can be filled with the
        following optional elements:
        <br />
        <br />
        <span class="code-word">- menu button</span>: by default this is
        visible, it can be switched off by setting to false the prop
        <span class="code-word">showMenuButton</span>;
        <br />
        <span class="code-word">- image</span>: icon or image;
        <br />
        <span class="code-word">- label</span>: text.
        <br />
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
