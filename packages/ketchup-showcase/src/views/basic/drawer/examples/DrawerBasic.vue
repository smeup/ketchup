<template>
  <div>
    <div class="demo-wrapper">
      <p> The drawer is a very useful web component. </p>
      <p>
        For example it allows you to navigate around the various sections of a
        web page. Thus, basic drawer, looks like a side menu, with title,
        subtitle and a list of links in order to navigate through the various
        sections of a web app.
      </p>
      <p>
        The Ketch.UP drawer works using slots, thus the component itself
        contains only the main structure. The user can pass the children
        components through the slot, like the title, the subtitle and the main
        content.
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
        These are the types of slots that can be used with the drawer:
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
            Ketch.UP List
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
      markupBasic4: '  <div slot="main-content">',
      markupBasic5: '    <kup-list></kup-list>',
      markupBasic6: ' </div>',
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

        {
          text:
            "a section with the name 'main-content' which contains the main content of the drawer; for example, a list.",
          value: '3',
          icon: 'trending_flat',
        },
      ],
    };
  },
};
</script>
