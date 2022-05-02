<template>
  <div>
    <div class="demo-wrapper">
      <p>
        Another feature of the list is the displaying of it as a context menu.
        In order to activate this feature the
        <span class="code-word">isMenu</span> prop must be set to true.
        Considering the nature of this layout, which is usually displayed after
        an interface action, by default it is hidden. <br />The component will
        be displayed when the <span class="code-word">menuVisible</span> prop is
        set to true.
      </p>
      <br />
      <div class="demo-container">
        <div class="kup-container">
          <kup-list
            is-menu
            menu-visible
            :data.prop="dataLIST"
            role-type="listbox"
          ></kup-list>
        </div>
        <p class="centered">Sample menu markup</p>
        <code class="flat">{{ markupMenu }}</code>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ListMenu',
  data() {
    return {
      dataLIST: [
        {
          value: 'First item',
          id: '1',
          selected: true,
        },
        {
          value: 'Second item',
          id: '2',
        },
        {
          value: 'Third item',
          id: '3',
        },
      ],
      markupMenu: '<kup-list is-menu menu-visible></kup-list>',
    };
  },
};
</script>
