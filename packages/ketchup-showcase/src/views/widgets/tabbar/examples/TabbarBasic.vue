<template>
  <div>
    <div class="demo-wrapper">
      <p
        >Tab bars are generally used to navigate between different sections of
        content on the same hierarchy. Tabs must be defined in JavaScript
        objects which support the following properties.<br /><br />
        <span class="code-word">text</span> is mandatory and defines the label
        of the tab.<br /><span class="code-word">icon</span> defines the icon to
        be displayed.<br /><span class="code-word">status</span> defines whether
        the tab is active or not.</p
      >
      <br />
      <div class="demo-container">
        <div class="kup-container">
          <wup-tab-bar :items.prop="items"></wup-tab-bar>
        </div>
        <p class="centered">Sample markup</p>
        <code class="flat">{{ markupBasic }}</code>
        <p class="centered">Sample object</p>
        <code class="flat">{{ markupObject }}</code>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TabbarBasic',
  data() {
    return {
      items: [
        {
          text: 'Favorites',
          icon: '',
          status: 'Active',
        },
        {
          text: 'Settings',
          icon: '',
          status: '',
        },
      ],
      markupBasic: '<wup-tab-bar></wup-tab-bar>',
      markupObject:
        "{ text: 'Favorites', icon: '', status: 'Active' }, { text: 'Settings', icon: '', status: ''}",
    };
  },
};
</script>
