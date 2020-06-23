<template>
  <div>
    <div class="demo-wrapper">
      <p
        >The nav bar provides content and actions related to the current screen.
        It’s used for branding, screen titles, navigation, and actions.<br />
        There should be only one nav bar for page.<br />
        There are two types of nav bar:</p
      >
      <ul>
        <li>Regular nav bar</li>
        <li>Contextual action bar</li>
      </ul>
      <br /><p
        >A regular nav bar can contain action items for navigate in the app,
        which are placed into the navigation menu, accessible by click on menu
        button (hamburger, on the left side).<br />
        A regular nav bar can transform into a contextual action bar. This one
        usually has a simple action button on the left side, which operates on
        the page content.<br />
        Both nav bars could have on Option menu list of action items (three
        vertical buttons icon), which is placed on the right side, opposite the
        navigation icon (hamburger icon).
      </p>
      <p>
        The
        <span class="code-word">data</span> prop contains all the data of the
        nav bar, structured like this:
        <br />
        <br />
        <span class="code-word">title</span> is the text displayed by the nav
        bar.
        <br />
        <span class="code-word">menuAction</span> contains the data of the
        action linked to the left button, when the nav bar is in contextual
        form, and the left side menu button doesn't show an action list
        on-click, but is just a simple contextual button.
        <br />
        <span class="code-word">menuActions</span> contains the data of the
        actions inside the navigation (left side) menu (hamburger icon).
        <br />
        <span class="code-word">optionActions</span> contains the data of
        actions inside the Options menu (right side, three vertical buttons
        icon).
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
