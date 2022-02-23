<template>
  <div>
    <div class="demo-wrapper">
      <p>
        The drawer is a very useful web component, it allows you to navigate
        around the various sections of a web page.
      </p>
      <p>
        The Ketchup drawer itself contains only the main structure. The user can
        append any child component through the usage of slots.
      </p>
      <br />
      <br />
      <p class="centered">Sample markup</p>
      <code class="flat"
        >{{ markupBasic }}<br />{{ markupBasic2 }}<br />{{ markupBasic3
        }}<br />{{ markupBasic4 }}<br />{{ markupBasic5 }}<br />{{ markupBasic6
        }}<br />{{ markupBasic7 }}</code
      >
      <br />
      <br />
      <div>
        These are two possible slot names presets, which will give a specific
        style (any other slot's style must be set by the application using
        kup-drawer):
        <kup-list
          show-icons
          class="handles-custom-style hydrated"
          :data.prop="listdata"
          display-mode="description"
          filter
          role-type="listbox"
          selectable
        ></kup-list>
        <div
          >Get a look at the
          <a href="https://ketchup.smeup.com/ketchup-showcase/#/list">
            Ketchup List
          </a>
          documentation</div
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DrawerBasic',
  data() {
    return {
      markupBasic: '<kup-drawer>',
      markupBasic2: '  <span slot="title">Title</span> ',
      markupBasic3: '  <span slot="subtitle">Subtitle</span>',
      markupBasic4: '  <div>',
      markupBasic5: '     <kup-list></kup-list>',
      markupBasic6: '  </div>',
      markupBasic7: '</kup-drawer>',

      listdata: [
        {
          text: "slot with the name 'title' to set the title of drawer.",
          value: '1',
          icon: 'trending_flat',
          trailingIcon: true,
        },
        {
          text: "slot with the name 'subtitle' to set the subtitle of drawer.",
          value: '2',

          icon: 'trending_flat',
        },
      ],
    };
  },
};
</script>
