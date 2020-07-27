<template>
  <v-app id="inspire" :dark="darkTheme">
    <v-navigation-drawer v-model="drawer" fixed app>
      <div class="logo">
        <a target="_blank" href="https://www.smeup.com/">
          <img class="light" src="header_logo.svg" />
          <img class="dark" src="header_logo_dark.svg" />
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

            <v-list-tile v-for="route in group.advancedItems" :key="route.to.name" :to="route.to">
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

            <v-list-tile v-for="route in group.cssItems" :key="route.to.name" :to="route.to">
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

            <v-list-tile v-for="route in group.javascriptItems" :key="route.to.name" :to="route.to">
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

            <v-list-tile v-for="route in group.basicItems" :key="route.to.name" :to="route.to">
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
        <img src="ketchup_logo_header.svg" class="light" style="height: 40px;" />
      </div>
      <v-toolbar-title>Ketch.UP | Showcase</v-toolbar-title>
      <kup-switch
        onclick="changeTheme();"
        style="min-width: 150px; --kup-text-color: #f5f5f5;"
        leading-label
        label="Dark Mode"
        id="theme-switch"
      ></kup-switch>
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
        <kup-image class="footer-icon" resource="github" color="white" size-x="24px" size-y="24px"></kup-image>
      </a>
      <span class="company-text">© Copyright 2020 - Sme.UP Spa</span>
      <a
        class="second-icon"
        target="_blank"
        rel="noopener"
        title="View Ketch.UP on npm"
        href="https://www.npmjs.com/package/@sme.up/ketchup"
      >
        <kup-image class="footer-icon" resource="npm" color="white" size-x="24px" size-y="24px"></kup-image>
      </a>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  data: () => ({
    darkTheme: false,
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
            title: `Menu`,
            to: {
              name: 'menu',
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
            title: 'Error logging',
            to: {
              name: 'errorlogging',
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
