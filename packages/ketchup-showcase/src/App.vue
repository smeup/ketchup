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

        <v-list-group>
          <template v-slot:activator>
            <v-list-tile>
              <v-list-tile-content>
                <v-list-tile-title>Data Table</v-list-tile-title>
              </v-list-tile-content>
            </v-list-tile>
          </template>

          <v-list-tile
            v-for="tile in dataTableTiles"
            :key="tile.title"
            :to="tile.to"
          >
            <v-list-tile-content>
              <v-list-tile-title>{{ tile.title }}</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
        </v-list-group>
      </v-list>
    </v-navigation-drawer>

    <v-toolbar color="indigo" dark fixed app>
      <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
      <v-toolbar-title>Application</v-toolbar-title>
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
    dataTableTiles: [
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
  }),

  props: {
    source: String,
  },
};
</script>