<template>
  <v-app id="inspire" :dark="darkTheme">
    <v-navigation-drawer v-model="drawer" fixed app>
      <div class="logo">
        <a target="_blank" href="https://www.smeup.com/">
          <img class="light" src="header_logo.png" />
          <img class="dark" src="header_logo_dark.png" />
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
              v-for="route in group.componentsItems"
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
              v-for="route in group.widgetsItems"
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
      <v-toolbar-title>Ketch.UP showcase</v-toolbar-title>
      <v-switch v-model="darkTheme" :label="`Dark Mode`"></v-switch>
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
      <span class="company-text">© Copyright 2019 - SME UP Spa</span>
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
        title: 'Components',
        componentsItems: [
          {
            title: 'Box',
            to: {
              name: 'box',
            },
          },
          {
            title: `Button`,
            to: {
              name: 'button',
            },
          },
          {
            title: `Calendar`,
            to: {
              name: 'calendar',
            },
          },
          {
            title: `Chart`,
            to: {
              name: 'chart',
            },
          },
          {
            title: `Chips`,
            to: {
              name: 'chips',
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
            title: `Html`,
            to: {
              name: 'html',
            },
          },
          {
            title: `Image`,
            to: {
              name: 'image',
            },
          },
          {
            title: `Image button`,
            to: {
              name: 'imagebutton',
            },
          },
          {
            title: `Portal`,
            to: {
              name: 'portal',
            },
          },
          {
            title: 'Progress bar',
            to: {
              name: 'progressbar',
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
        title: 'Widgets',
        widgetsItems: [
          {
            title: `Checkbox`,
            to: {
              name: 'checkbox',
            },
          },
        ],
      },
      {
        title: 'Javascript',
        javascriptItems: [
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

// A scrollable container which can be used to perform test on some components.
.scrollable-container {
  height: 400px;
  overflow: auto;
}

// When there is the need to hide overflow
.hide-overflow {
  overflow: hidden;
}

//---- Common styles for elements ----
// Combo must have display flex.
kup-fld {
  border: 1px solid rgba(0, 0, 0, 0.54);
  border-radius: 4px;
  display: inline-flex;
  padding: 12px;
}
</style>
