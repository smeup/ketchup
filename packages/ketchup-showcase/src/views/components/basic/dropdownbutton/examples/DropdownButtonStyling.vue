<template>
  <div>
    <div class="demo-wrapper">
      <p>
        There are two other ways to render a dropdown button in addition to the
        default styling. The attribute
        <span class="code-word">flat</span>
        will render a dropdown button without its background, only the text will
        be visible. On the other hand, the attribute
        <span class="code-word">outlined</span> will render an outlined dropdown
        button. These attributes are mutually exclusive.
      </p>
      <div class="demo-container">
        <div class="kup-container">
          <kup-dropdown-button
            styling="flat"
            label="Flat"
            :data.prop="data"
          ></kup-dropdown-button>
          <kup-dropdown-button
            styling="outlined"
            label="Outlined"
            :data.prop="data"
          ></kup-dropdown-button>
        </div>
        <p class="centered">Flat sample markup</p>
        <code class="flat">{{ markupFlat }}</code>
        <p class="centered">Outlined sample markup</p>
        <code class="flat">{{ markupOutlined }}</code>
      </div>
    </div>

    <div class="demo-wrapper">
      <p>
        The class
        <span class="code-word">shaped</span> may be used for any of the
        stylings above, and it will shape the edges of the dropdown button to be
        more round.
      </p>
      <div class="demo-container">
        <div class="kup-container">
          <kup-dropdown-button
            class="shaped"
            label="Raised"
            :data.prop="data"
          ></kup-dropdown-button>
          <kup-dropdown-button
            styling="flat"
            class="shaped"
            label="Flat"
            :data.prop="data"
          ></kup-dropdown-button>
          <kup-dropdown-button
            styling="outlined"
            class="shaped"
            label="Outlined"
            :data.prop="data"
          ></kup-dropdown-button>
        </div>
        <p class="centered">Shaped sample markup</p>
        <code class="flat">{{ markupRounded }}</code>
      </div>
    </div>

    <div class="demo-wrapper">
      <p>
        If you want to use an icon to give further emphasis to the dropdown
        button's meaning, you can use the attribute
        <span class="code-word">icon</span> and specify a value supported by the
        <a href="https://ketchup.smeup.com/ketchup-showcase/#/image"
          >Ketchup Icon component</a
        >.
      </p>
      <div class="demo-container">
        <div class="kup-container">
          <kup-dropdown-button
            icon="document"
            label="Document"
            :data.prop="data"
          ></kup-dropdown-button>
          <kup-dropdown-button
            styling="flat"
            icon="folder"
            label="Folder"
            :data.prop="data"
          ></kup-dropdown-button>
          <kup-dropdown-button
            styling="outlined"
            icon="local_phone"
            label="Contact"
            :data.prop="data"
          ></kup-dropdown-button>
        </div>
        <p class="centered">Icon sample markup</p>
        <code class="flat">{{ markupIcon }}</code>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DropdownButtonStyling',
  data() {
    return {
      data: {
        'kup-list': {
          data: [
            {
              value: 'Extra action #1',
              id: '1',
              icon: 'filter_1',
            },
            {
              value: 'Extra action #2',
              id: '2',
              icon: 'filter_2',
            },
            {
              value: 'Extra action #3',
              id: '3',
              icon: 'filter_3',
            },
          ],
        },
      },
      markupFlat:
        '<kup-dropdown-button styling="flat" label="Flat"></kup-dropdown-button>',
      markupOutlined:
        '<kup-dropdown-button styling="outlined" label="Outlined"></kup-dropdown-button>',
      markupRounded:
        '<kup-dropdown-button class="shaped" label="Shaped"></kup-dropdown-button>',
      markupIcon:
        '<kup-dropdown-button icon="Favorite" label="Favorite"></kup-dropdown-button>',
    };
  },
};
</script>

<style scoped lang="scss">
kup-dropdown-button {
  margin: auto;
  padding: 0.5em;
}
</style>
