<template>
  <v-app id="inspire">
    <v-navigation-drawer v-model="drawer" fixed app>
      <div class="logo">
        <a target="_blank" href="https://www.smeup.com/">
          <svg
            id="smeup-logo"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 117.63 62.88"
          >
            <defs />
            <title>Sme.UP Group</title>
            <path
              class="cls-1"
              d="M1.19,43.79l4.68-.46A5.8,5.8,0,0,0,7.59,46.8a5.2,5.2,0,0,0,3.48,1.1,5.42,5.42,0,0,0,3.51-1,3,3,0,0,0,1.18-2.3,2.18,2.18,0,0,0-.5-1.44,3.91,3.91,0,0,0-1.73-1c-.57-.2-1.85-.54-3.85-1a13.1,13.1,0,0,1-5.43-2.36A6.21,6.21,0,0,1,2.05,34a6.13,6.13,0,0,1,1-3.41,6.39,6.39,0,0,1,3-2.41,11.78,11.78,0,0,1,4.69-.83c3,0,5.24.65,6.75,2a6.92,6.92,0,0,1,2.38,5.24l-4.81.22a4.06,4.06,0,0,0-1.32-2.64,4.85,4.85,0,0,0-3.05-.81,5.51,5.51,0,0,0-3.28.86,1.74,1.74,0,0,0-.77,1.48,1.84,1.84,0,0,0,.72,1.45,12.62,12.62,0,0,0,4.42,1.59A23.21,23.21,0,0,1,17,38.38a6.71,6.71,0,0,1,2.63,2.43,7.46,7.46,0,0,1-.18,7.63,6.76,6.76,0,0,1-3.22,2.65A13.51,13.51,0,0,1,11,52Q6.5,52,4.09,49.88A9.13,9.13,0,0,1,1.19,43.79Z"
              transform="translate(-1.19 -1.19)"
            />
            <path
              class="cls-1"
              d="M22.61,34.28h4.21v2.36a6.77,6.77,0,0,1,5.38-2.75,5.83,5.83,0,0,1,2.87.68,5.25,5.25,0,0,1,2,2.07,8.09,8.09,0,0,1,2.46-2.07,6,6,0,0,1,2.81-.68,6.32,6.32,0,0,1,3.22.77,4.76,4.76,0,0,1,2,2.27A9.74,9.74,0,0,1,48,40.51v11H43.43V41.68A7.41,7.41,0,0,0,43,38.36a2.18,2.18,0,0,0-2-1A3.14,3.14,0,0,0,39.2,38,3.26,3.26,0,0,0,38,39.69a12.29,12.29,0,0,0-.37,3.56v8.29H33V42.08a13.33,13.33,0,0,0-.24-3.25A2.07,2.07,0,0,0,32,37.74a2.37,2.37,0,0,0-1.39-.35,3.39,3.39,0,0,0-1.9.56,3.12,3.12,0,0,0-1.21,1.65,12.24,12.24,0,0,0-.37,3.55v8.39H22.61Z"
              transform="translate(-1.19 -1.19)"
            />
            <path
              class="cls-1"
              d="M60.88,46.05l4.55.76a7.48,7.48,0,0,1-2.77,3.81,8.12,8.12,0,0,1-4.74,1.31q-4.5,0-6.67-2.94a9.92,9.92,0,0,1-1.7-6,9.55,9.55,0,0,1,2.24-6.72,7.4,7.4,0,0,1,5.67-2.43,7.67,7.67,0,0,1,6.08,2.54q2.24,2.55,2.13,7.8H54.23a4.63,4.63,0,0,0,1.1,3.16A3.49,3.49,0,0,0,58,48.52a2.8,2.8,0,0,0,1.8-.59A3.62,3.62,0,0,0,60.88,46.05Zm.26-4.62a4.43,4.43,0,0,0-1-3,3.13,3.13,0,0,0-2.37-1,3.18,3.18,0,0,0-2.47,1.08,4.24,4.24,0,0,0-1,3Z"
              transform="translate(-1.19 -1.19)"
            />
            <path
              class="cls-1"
              d="M114.93,20H75.54a3.89,3.89,0,0,0-3.89,3.88V45.62a3.07,3.07,0,1,0,0,6.14v8.43a3.89,3.89,0,0,0,3.89,3.88h39.39a3.89,3.89,0,0,0,3.89-3.88V23.9A3.89,3.89,0,0,0,114.93,20M73.87,50.87a3,3,0,0,1-2.21.89V45.62a3,3,0,0,1,2.21.89,3.09,3.09,0,0,1,0,4.36m21.6-8.75a26.68,26.68,0,0,1-.33,5.08,5.61,5.61,0,0,1-1.21,2.51,6.13,6.13,0,0,1-2.35,1.63,10.29,10.29,0,0,1-3.84.61,11.24,11.24,0,0,1-4.34-.66,6.31,6.31,0,0,1-2.34-1.72,5.58,5.58,0,0,1-1.13-2.22,23.7,23.7,0,0,1-.4-5.07V31.62h4V42.45a22.27,22.27,0,0,0,.15,3.33,3.25,3.25,0,0,0,1.23,2,4.34,4.34,0,0,0,2.67.74,4.09,4.09,0,0,0,2.58-.7,2.72,2.72,0,0,0,1-1.73,22.07,22.07,0,0,0,.18-3.39V31.62h4ZM113,40.87a5.47,5.47,0,0,1-1.7,2,5.81,5.81,0,0,1-2.09.94,23,23,0,0,1-4.18.29h-2.63V51.6h-4v-20h6.48a23.36,23.36,0,0,1,4.79.3,5.25,5.25,0,0,1,2.88,2,6.21,6.21,0,0,1,1.16,3.89,6.49,6.49,0,0,1-.67,3.1m-5.75-5.73a19.31,19.31,0,0,0-2.9-.14h-2v5.67h2.2a10.41,10.41,0,0,0,3.19-.31,2.59,2.59,0,0,0,1.72-2.54,2.55,2.55,0,0,0-.64-1.79,2.78,2.78,0,0,0-1.62-.89"
              transform="translate(-1.19 -1.19)"
            />
            <path
              class="cls-1"
              d="M115,8.84a2.17,2.17,0,0,1-1.73,0,1.78,1.78,0,0,1-.72-.53,2.79,2.79,0,0,1-.5-.94,4.74,4.74,0,0,1-.19-1.4,4.54,4.54,0,0,1,.2-1.4,2.42,2.42,0,0,1,.5-1,1.82,1.82,0,0,1,.73-.53,2.18,2.18,0,0,1,.85-.16,2.25,2.25,0,0,1,.85.16,1.85,1.85,0,0,1,.72.54,2.73,2.73,0,0,1,.5.93A4.5,4.5,0,0,1,116.36,6a4.87,4.87,0,0,1-.16,1.34,2.92,2.92,0,0,1-.52,1,1.9,1.9,0,0,1-.72.54m2.6-6.36a5.31,5.31,0,0,0-6.94,0A4.75,4.75,0,0,0,109.37,6a4.77,4.77,0,0,0,1.25,3.49,5.31,5.31,0,0,0,6.94,0A4.77,4.77,0,0,0,118.82,6a4.76,4.76,0,0,0-1.26-3.49M93.86,5a1.18,1.18,0,0,1-.33.47,1.26,1.26,0,0,1-.65.29,5.45,5.45,0,0,1-1,.08h-.67V3.1h1.34a2.21,2.21,0,0,1,.72.17,1,1,0,0,1,.48.39,1,1,0,0,1,.21.66,1.89,1.89,0,0,1-.1.67m2.26-2.08A2.45,2.45,0,0,0,95.27,2a3.5,3.5,0,0,0-1.06-.45,6.19,6.19,0,0,0-1.48-.15H88.84v9.17h2.37v-3h1.47a4.34,4.34,0,0,0,1.68-.28,3.86,3.86,0,0,0,1.22-.82,2.6,2.6,0,0,0,.61-1,3.31,3.31,0,0,0,.22-1.2,3,3,0,0,0-.29-1.36M72.8,5a1.18,1.18,0,0,1-.33.47,1.26,1.26,0,0,1-.65.29,5.53,5.53,0,0,1-1,.08h-.68V3.1h1.35a2.21,2.21,0,0,1,.72.17,1.1,1.1,0,0,1,.48.39,1,1,0,0,1,.21.66,1.89,1.89,0,0,1-.1.67m2.26-2.08A2.45,2.45,0,0,0,74.21,2a3.5,3.5,0,0,0-1.06-.45,6.25,6.25,0,0,0-1.48-.15H67.78v9.17h2.36v-3h1.48a4.32,4.32,0,0,0,1.67-.28,3.79,3.79,0,0,0,1.23-.82,2.6,2.6,0,0,0,.61-1,3.31,3.31,0,0,0,.22-1.2,3,3,0,0,0-.29-1.36M53.75,1.39H51.37V7.11A2.07,2.07,0,0,1,51,8.55,1.66,1.66,0,0,1,49.67,9a1.62,1.62,0,0,1-1.3-.47A2.13,2.13,0,0,1,48,7.11V1.39H45.59V7.24a3.26,3.26,0,0,0,1,2.6,4.52,4.52,0,0,0,3.05.91,4.53,4.53,0,0,0,3-.91,3.26,3.26,0,0,0,1-2.6ZM29.81,6.63a3.57,3.57,0,0,0,1.34-1.07,2.7,2.7,0,0,0,.47-1.66,2.27,2.27,0,0,0-.3-1.22,2.33,2.33,0,0,0-.82-.8,2.92,2.92,0,0,0-1.1-.4A9.4,9.4,0,0,0,28,1.39H24v9.17h2.35V7.19h1.09L30,10.56h2.89Zm-.74-1.82a1.13,1.13,0,0,1-.37.42,1.28,1.28,0,0,1-.64.26,8.06,8.06,0,0,1-.94,0h-.73V3.07h.85l.75,0a2.21,2.21,0,0,1,.56.12A1,1,0,0,1,29,3.6a1.22,1.22,0,0,1,.14.59,1.5,1.5,0,0,1-.11.62m-19,.7H5.87V7.24H7.7V9l-.3,0H7.1a3.22,3.22,0,0,1-2.38-.81,3.14,3.14,0,0,1-.81-2.33,3.56,3.56,0,0,1,.23-1.31,2.6,2.6,0,0,1,.61-.94,2.84,2.84,0,0,1,.92-.57,3.41,3.41,0,0,1,1.14-.18,3.73,3.73,0,0,1,1,.14,4.33,4.33,0,0,1,.83.34,5.12,5.12,0,0,1,.64.4l.51.37h.26V2a7.9,7.9,0,0,0-1.82-.65,8.73,8.73,0,0,0-1.72-.16A5.07,5.07,0,0,0,2.79,2.52,4.6,4.6,0,0,0,1.45,6,4.63,4.63,0,0,0,2.78,9.47a5.05,5.05,0,0,0,3.66,1.28,8.8,8.8,0,0,0,2-.24A12.47,12.47,0,0,0,10.1,10Z"
              transform="translate(-1.19 -1.19)"
            />
          </svg>
        </a>
      </div>
      <v-list dense>
        <v-list-group v-for="(group, i) in groupNavigationSections" :key="i">
          <template v-slot:activator>
            <v-list-tile>
              <v-list-tile-content>
                <v-list-tile-title>{{ group.title }}</v-list-tile-title>
              </v-list-tile-content>
            </v-list-tile>
          </template>

          <v-list dense>
            <v-list-group v-for="(section, j) in group.items" :key="j">
              <template v-slot:activator>
                <v-list-tile>
                  <v-list-tile-content>
                    <v-list-tile-title>{{ section.title }}</v-list-tile-title>
                  </v-list-tile-content>
                </v-list-tile>
              </template>
            </v-list-group>

            <v-list-tile
              v-for="route in group.advancedItems"
              :key="route.to.name"
              :to="route.to"
            >
              <v-list-tile-content>
                <v-list-tile-title>{{ route.title }}</v-list-tile-title>
              </v-list-tile-content>
            </v-list-tile>
          </v-list>

          <v-list dense>
            <v-list-group v-for="(section, j) in group.items" :key="j">
              <template v-slot:activator>
                <v-list-tile>
                  <v-list-tile-content>
                    <v-list-tile-title>{{ section.title }}</v-list-tile-title>
                  </v-list-tile-content>
                </v-list-tile>
              </template>
            </v-list-group>

            <v-list-tile
              v-for="route in group.cssItems"
              :key="route.to.name"
              :to="route.to"
            >
              <v-list-tile-content>
                <v-list-tile-title>{{ route.title }}</v-list-tile-title>
              </v-list-tile-content>
            </v-list-tile>
          </v-list>

          <v-list dense>
            <v-list-group v-for="(section, j) in group.items" :key="j">
              <template v-slot:activator>
                <v-list-tile>
                  <v-list-tile-content>
                    <v-list-tile-title>{{ section.title }}</v-list-tile-title>
                  </v-list-tile-content>
                </v-list-tile>
              </template>
            </v-list-group>

            <v-list-tile
              v-for="route in group.javascriptItems"
              :key="route.to.name"
              :to="route.to"
            >
              <v-list-tile-content>
                <v-list-tile-title>{{ route.title }}</v-list-tile-title>
              </v-list-tile-content>
            </v-list-tile>
          </v-list>

          <v-list dense>
            <v-list-group v-for="(section, j) in group.items" :key="j">
              <template v-slot:activator>
                <v-list-tile>
                  <v-list-tile-content>
                    <v-list-tile-title>{{ section.title }}</v-list-tile-title>
                  </v-list-tile-content>
                </v-list-tile>
              </template>
            </v-list-group>

            <v-list-tile
              v-for="route in group.basicItems"
              :key="route.to.name"
              :to="route.to"
            >
              <v-list-tile-content>
                <v-list-tile-title>{{ route.title }}</v-list-tile-title>
              </v-list-tile-content>
            </v-list-tile>
          </v-list>
        </v-list-group>
      </v-list>
    </v-navigation-drawer>

    <v-toolbar class="header" fixed app>
      <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
      <div class="logo_header">
        <img src="ketchup_logo_header.svg" class="light" style="height: 40px" />
      </div>
      <v-toolbar-title>Ketch.UP | Showcase</v-toolbar-title>
      <kup-switch
        @kupSwitchChange="
          (e) => {
            this.changeTheme(e);
          }
        "
        style="min-width: 150px; --kup-text-color: #f5f5f5"
        leading-label
        label="Dark Mode"
        id="theme-switch"
      ></kup-switch>
      <kup-button
        @kupButtonClick="
          () => {
            this.toggleDebug();
          }
        "
        id="debug-toggler"
        icon="bug"
        custom-style=":host{--kup-main-color: white}"
      ></kup-button>
      <v-toolbar-side-icon :to="{ path: '/' }">
        <v-icon>home</v-icon>
      </v-toolbar-side-icon>
    </v-toolbar>

    <v-content>
      <v-container>
        <v-fade-transition mode="out-in">
          <router-view></router-view>
        </v-fade-transition>
      </v-container>
    </v-content>

    <v-footer app>
      <a
        class="first-icon"
        target="_blank"
        rel="noopener"
        title="View Ketch.UP on GitHub"
        href="https://github.com/smeup/ketchup"
      >
        <kup-image
          class="footer-icon"
          resource="github"
          color="white"
          size-x="24px"
          size-y="24px"
        ></kup-image>
      </a>
      <span class="company-text">© Copyright 2020 - Sme.UP Spa</span>
      <a
        class="second-icon"
        target="_blank"
        rel="noopener"
        title="View Ketch.UP on npm"
        href="https://www.npmjs.com/package/@sme.up/ketchup"
      >
        <kup-image
          class="footer-icon"
          resource="npm"
          color="white"
          size-x="24px"
          size-y="24px"
        ></kup-image>
      </a>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  methods: {
    changeTheme(e) {
      if (e.detail.value === 'on') {
        this.setTheme('dark');
      } else {
        this.setTheme('default');
      }
    },
    setTheme(themeID) {
      let dom = document.documentElement;
      dom.setAttribute('kup-theme', themeID);
    },
    toggleDebug() {
      let dom = document.documentElement;
      let debugToggler = document.querySelector('#debug-toggler');

      if (!dom['kupDebug']) {
        console.log('Debug activated.');
        debugToggler.customStyle = '';
        dom['kupDebug'] = true;
      } else {
        console.log('Debug deactivated.');
        debugToggler.customStyle = ':host{--kup-main-color: white}';
        dom['kupDebug'] = false;
      }
    },
  },
  data: () => ({
    drawer: null,
    groupNavigationSections: [
      {
        title: 'Advanced',
        advancedItems: [
          {
            title: 'Box',
            to: {
              name: 'box',
            },
          },
          {
            title: `Button`,
            to: {
              name: 'btn',
            },
          },
          {
            title: `Calendar`,
            to: {
              name: 'calendar',
            },
          },
          {
            title: `Card`,
            to: {
              name: 'card',
            },
          },
          {
            title: `Chart`,
            to: {
              name: 'chart',
            },
          },
          {
            title: 'Crud',
            to: {
              name: 'crud',
            },
          },
          {
            title: `Dash`,
            to: {
              name: 'dash',
            },
          },
          {
            title: `Data Table`,
            to: {
              name: 'datatable',
            },
          },
          {
            title: `Field`,
            to: {
              name: 'field',
            },
          },
          {
            title: 'Form',
            to: {
              name: 'form',
            },
          },
          {
            title: `Image button`,
            to: {
              name: 'imagebutton',
            },
          },
          {
            title: 'Search',
            to: {
              name: 'search',
            },
          },
          {
            title: 'Tooltip',
            to: {
              name: 'tooltip',
            },
          },
          {
            title: 'Tree',
            to: {
              name: 'tree',
            },
          },
        ],
      },
      {
        title: 'Basic',
        basicItems: [
          {
            title: 'Autocomplete',
            to: {
              name: 'autocomplete',
            },
          },
          {
            title: `Badge`,
            to: {
              name: 'badge',
            },
          },
          {
            title: `Button`,
            to: {
              name: 'button',
            },
          },
          {
            title: `Checkbox`,
            to: {
              name: 'checkbox',
            },
          },
          {
            title: `Chip`,
            to: {
              name: 'chip',
            },
          },
          {
            title: `Combobox`,
            to: {
              name: 'combobox',
            },
          },
          {
            title: 'Grid',
            to: {
              name: 'grid',
            },
          },
          {
            title: `Iframe`,
            to: {
              name: 'iframe',
            },
          },
          {
            title: `Image`,
            to: {
              name: 'image',
            },
          },
          {
            title: 'Lazy',
            to: {
              name: 'lazy',
            },
          },
          {
            title: `List`,
            to: {
              name: 'list',
            },
          },
          {
            title: 'Nav Bar',
            to: {
              name: 'navbar',
            },
          },
          {
            title: 'Progress bar',
            to: {
              name: 'progressbar',
            },
          },
          {
            title: `Radio`,
            to: {
              name: 'radio',
            },
          },
          {
            title: `Rating`,
            to: {
              name: 'rating',
            },
          },
          {
            title: `Spinner`,
            to: {
              name: 'spinner',
            },
          },
          {
            title: `Switch`,
            to: {
              name: 'switch',
            },
          },
          {
            title: `Tab bar`,
            to: {
              name: 'tabbar',
            },
          },
          {
            title: `Text field`,
            to: {
              name: 'textfield',
            },
          },
        ],
      },
      {
        title: 'CSS',
        cssItems: [
          {
            title: 'Customization',
            to: {
              name: 'customization',
            },
          },
          {
            title: 'Theming',
            to: {
              name: 'theming',
            },
          },
        ],
      },
      {
        title: 'JavaScript',
        javascriptItems: [
          {
            title: 'Debugging',
            to: {
              name: 'debugging',
            },
          },
          {
            title: 'Scroll on hover',
            to: {
              name: 'scrollonhover',
            },
          },
          {
            title: 'Tip positioning',
            to: {
              name: 'tippositioning',
            },
          },
        ],
      },
    ],
  }),
  props: {
    source: String,
  },
};
</script>

<style lang="scss">
//---- Tags ----
// For code sources
code {
  box-sizing: border-box;
  overflow: auto;
  padding: 8px;
  width: 100%;

  // When there is code which needs to be displayed inline
  &.inline {
    display: inline;
    padding: 2px;
    margin: 1px 2px;
  }
}

// For big titles
h2 {
  font-size: 1.75rem;
}

// For small titles
h3 {
  margin: 2rem 0 1rem;
}

h4 {
  margin: 0 0 0.5rem;
}

hr {
  margin: 2rem 0;
}

label {
  margin-right: 8px !important;
}

select,
[type='number'],
[type='text'] {
  border-radius: 2px !important;
  border: 1px solid rgb(169, 169, 169) !important;
  padding: 1px !important;
}

//---- General classes ----
// Basic spacer
.basic-spacer {
  margin: 8px 12px;
}

// For examples where slot has a border
.name-slotted {
  border: 1px solid rgba(0, 0, 0, 0.12);
  box-sizing: border-box;
  padding: 4px;
}

// Max with for a more readable text
.max-width-container {
  display: block;
  margin: 0 auto;
  padding: 24px 40px;
  max-width: 800px;
}

// Main components container
.example-container {
  display: grid;
  grid-template-areas: 'component space configuration';
  grid-template-columns: 47% 6% 47%;

  > *:nth-child(2) {
    grid-area: configuration;

    > * {
      margin-bottom: 10px;
    }
  }
}

// General class for no margin
.no-margin {
  margin: 0;
}

// A scrollable container which can be used to perform test on some components.
.scrollable-container {
  height: 400px;
  overflow: auto;
}

// When there is the need to hide overflow
.hide-overflow {
  overflow: hidden;
}
</style>
