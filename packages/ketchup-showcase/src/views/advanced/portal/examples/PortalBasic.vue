<template>
  <div>
    <h2>What is a portal?</h2>
    <p>
      A portal is a concept taken from
      <a
        href="https://reactjs.org/docs/portals.html/"
        target="_blank"
        rel="noopener"
      >React portals</a>
      and modified to be used with Stencil web component system.
    </p>
    <p>
      A portal's purpose it to allow another web component to create some HTML elements inside the root of the application, in most cases inside the
      <code
        class="inline"
      >&lt;body&gt;</code> tag.
    </p>
    <p>
      The main use case for portals is when you want to avoid dealing with
      <code
        class="inline"
      >z-index</code> and
      <code class="inline">overflow: hidden;</code> properties,
      especially when you have to create a component or one of its parts which needs to be placed absolutely or be used like a modal.
    </p>

    <h2>Example</h2>
    <h3>Field in combo form</h3>
    <div class="example-container">
      <div>
        <h4>With portal</h4>
        <kup-field :config.prop="fldConfig" :data.prop="fldData" class="hide-overflow" />
        <p>
          When using a portal, the menu showed by clicking on the dropdown is visible even outside the container.
          <br />If you open your browser dev tools you can see that the menu has been added as a child of the body tag.
        </p>
      </div>
      <div>
        <h4>Without portal</h4>
        <kup-field class="hide-overflow" :config.prop="fldConfigNoPortal" :data.prop="fldData" />
        <p>
          Without a portal, the menu showed by clicking on the dropdown is cut by one of its ancestors component style.
          <br />This happens because the menu is placed inside the web component, and so it must obey to the normal CSS rules flow.
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'KupPortals',
  data() {
    return {
      fldConfig: {},
      fldData: [],
      fldConfigNoPortal: {},
    };
  },
  mounted() {
    import('@/mock/fldData.ts')
      .then((data) => {
        const { fldData, fldConfigFactory } = data;
        this.fldData = fldData;
        this.fldConfig = fldConfigFactory();
        this.fldConfigNoPortal = fldConfigFactory([
          {
            name: 'usePortal',
            value: false,
          },
        ]);
      })
      .catch((err) => {
        console.log(err);
      });
  },
};
</script>