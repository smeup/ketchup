<template>
  <v-app id="inspire">
    <v-navigation-drawer v-model="drawer" fixed app>
      <v-list dense>
        <v-list-tile :to="{ path: '/' }">
          <v-list-tile-action>
            <v-icon>home</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Home</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>

        <v-list-group
          v-for="(section, index) in navigationSections"
          :key="index">
          <template v-slot:activator>
            <v-list-tile>
              <v-list-tile-content>
                <v-list-tile-title>{{ section.title }}</v-list-tile-title>
              </v-list-tile-content>
            </v-list-tile>
          </template>

          <v-list-tile
            v-for="route in section.routes"
            :key="route.to.name"
            :to="route.to"
          >
            <v-list-tile-content>
              <v-list-tile-title>{{ route.title }}</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
        </v-list-group>

      </v-list>
    </v-navigation-drawer>

    <v-toolbar color="indigo" dark fixed app>
      <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
      <v-toolbar-title>Ketch.UP showcase</v-toolbar-title>
    </v-toolbar>

    <v-content>
      <v-container>
        <v-fade-transition mode="out-in">
          <router-view></router-view>
        </v-fade-transition>
      </v-container>
    </v-content>

    <v-footer color="indigo" app></v-footer>
  </v-app>
</template>

<script>
export default {
  data: () => ({
    drawer: null,
    navigationSections: [
      {
        title: 'Data Table',
        routes: [
          {
            title: 'Basic',
            to: {
              name: 'dtBasic',
            },
          },
          {
            title: 'Filters',
            to: {
              name: 'dtFilters',
            },
          },
          {
            title: 'Grouping',
            to: {
              name: 'dtGroups',
            },
          },
          {
            title: 'Pagination',
            to: {
              name: 'dtPag',
            },
          },
          {
            title: 'Row selection',
            to: {
              name: 'dtRowSel',
            },
          },
          {
            title: 'Sort',
            to: {
              name: 'dtSort',
            },
          },
          {
            title: 'Totals',
            to: {
              name: 'dtTotals',
            },
          },
        ],
      },
      {
        title: 'Field',
        routes: [
          {
            title: `Combo form`,
            to: {
              name: 'fldCombo'
            }
          },
          {
            title: `Radio form`,
            to: {
              name: 'fldRadio'
            }
          },
          {
            title: `Text Input form`,
            to: {
              name: 'fldText'
            }
          },
          {
            title: `Custom graphic`,
            to: {
              name: 'fldGraphic'
            }
          }
        ]
      }
    ],
  }),
  props: {
    source: String,
  },
};
</script>

<style lang="scss">
  // For small titles
  h3 {
    margin: 2rem 0 1rem;
  }

  h4 {
    margin: 0 0 .5rem;
  }

  // Main container
  .example-container {
    display: grid;
    grid-template-areas: "component space configuration";
    grid-template-columns: 47% 6% 47%;

    > *:nth-child(2) {
      grid-area: configuration;

      > * {
        margin-bottom: 10px;
      }
    }
  }

  .hide-overflow {
    overflow: hidden;
  }

  // For code sources
  code {
    box-sizing: border-box;
    padding: 8px;
  }


  //---- Common styles for elements ----
  // Combo must have display flex.
  kup-fld {
    border: 1px solid rgba(0,0,0,.54);
    border-radius: 4px;
    display: inline-flex;
    padding: 12px;
  }
</style>