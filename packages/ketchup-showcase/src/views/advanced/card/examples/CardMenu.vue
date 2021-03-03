<template>
  <div>
    <div class="demo-wrapper">
      <p>
        Cards can also be displayed as context menus or as tooltips by setting
        the
        <span class="code-word">isMenu</span> prop to true. Considering the
        nature of this layout, which is usually displayed after an interface
        action, by default it is hidden. <br />The component will be displayed
        when the <span class="code-word">menuVisible</span> prop is set to true.
      </p>
      <br />
      <div class="demo-container">
        <div class="kup-container">
          <kup-card
            size-x="300px"
            size-y="300px"
            is-menu
            menu-visible
            :data.prop="data"
          ></kup-card>
        </div>
        <p class="centered">Sample menu markup</p>
        <code class="flat">{{ markupMenu }}</code>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CardMenu',
  data() {
    return {
      data: {
        button: [{ icon: 'favorite', flat: true }],
        image: [
          {
            resource: 'images/catz_small_3.jpg',
          },
        ],
        text: [
          'Menu variant',
          'Note the distinctive box-shadow surrounding the element',
        ],
      },
      markupMenu: '<kup-card is-menu menu-visible></kup-card>',
    };
  },
};
</script>
