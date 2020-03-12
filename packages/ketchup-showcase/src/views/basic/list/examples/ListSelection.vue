<template>
  <div>
    <div class="demo-wrapper">
      <p>
        Multi selection list is basically a list of checkboxes and to activate
        it you need to set to
        <span class="code-word">group</span> the
        <span class="code-word">role-type</span> prop.
      </p>
      <br />
      <wup-list role-type="group"></wup-list>
      <p class="centered">Sample multi-selection markup</p>
      <code class="flat">{{ markupMulti }}</code>
    </div>

    <div class="demo-wrapper">
      <p>
        One selection list could be of two types.
        <br />If you want view a radio button for each item, used for selection,
        you need to set to
        <span class="code-word">radiogroup</span> the
        <span class="code-word">role-type</span> prop.
      </p>
      <br />
      <wup-list role-type="radiogroup"></wup-list>
      <p class="centered">Sample one-selection with radio button markup</p>
      <code class="flat">{{ markupRadio }}</code>
    </div>

    <div class="demo-wrapper">
      <p>
        Otherwise, if you want view just the simple list, set the prop to
        <span
          class="code-word"
        >listbox</span>.
      </p>
      <br />
      <wup-list role-type="listbox"></wup-list>
      <p class="centered">Sample one-selection markup</p>
      <code class="flat">{{ markupOne }}</code>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ListSelection',
  data() {
    return {
      markupMulti: '<wup-list role-type="group"></wup-list>',
      markupRadio: '<wup-list role-type="radiogroup"></wup-list>',
      markupOne: '<wup-list role-type="listbox"></wup-list>',
    };
  },
};
</script>
