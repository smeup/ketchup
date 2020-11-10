<template>
  <div>
    <div class="demo-wrapper">
      <p>
        To get the Ketch.UP drawer visible it is possible to call the public
        method
        <span class="code-word">open</span>. This method simply set the drawer's
        prop <span class="code-word">opened</span> to true. In order to manage
        the drawer's visibility it is possible to call the public method
        <span class="code-word">toggle</span> which is able to open or close the
        Drawer automatically.
      </p>
      <p class="centered">
        In this example, when the button is pressed, the drawer's
        <span class="code-word">open</span> method will be called.
      </p>

      <code align="center" class="flat"
        >{{ markupBasic1 }}<br />{{ markupBasic2 }}<br />{{ markupBasic3
        }}<br />{{ markupBasic4 }}<br />{{ markupBasic5 }}</code
      >
      <br />
      <br />
      <kup-button
        align="center"
        v-on:kupButtonClick="openDrawer"
        class="hydrated handles-custom-style"
        icon
        label="open drawer"
        id="side-drawer-btn"
        icon-off
      ></kup-button>
      <kup-drawer id="firstdrawer">
        <span slot="title">Title</span>
        <span slot="subtitle">Subtitle</span>

        <nav class="side-nav" slot="MainContent">
          <kup-list
            show-icons
            class="handles-custom-style hydrated"
            :data.prop="listdate"
            display-mode="description"
            filter
            role-type="listbox"
            selectable
          ></kup-list>
        </nav>
      </kup-drawer>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ComboboxBasic',
  data() {
    return {
      markupBasic1:
        '<kup-button label="open drawer" id="side-drawer-btn"></kup-button>',
      markupBasic2:
        'const example_btn = document.querySelector("kup-button"); ',
      markupBasic3:
        'const example_drawer = document.querySelector("kup-drawer");',
      markupBasic4:
        'function openDrawerExample() { example_drawer.open(); }  }',
      markupBasic5:
        'example_btn.addEventListener("kupButtonClick", openDrawerExample);',
      listdate: [
        {
          text: 'First choice',
          value: '1',
          icon: 'add_alert',
          trailingIcon: true,
          selected: false,
        },
        {
          text: 'Selected choice',
          value: '2',
          selected: false,
          icon: 'ac_unit',
        },

        {
          text: 'Third choice',
          value: '3',
          icon: '3d_rotation',
          selected: true,
        },
      ],
    };
  },
  methods: {
    openDrawer: function () {
      const sideDrawer = document.getElementById('firstdrawer');
      if (!sideDrawer.opened) {
        sideDrawer.open();
      }
    },
  },
};
</script>
