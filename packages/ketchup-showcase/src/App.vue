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
          :key="index"
        >
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

        <v-list-tile
          v-for="route in simpleRoutes"
          :key="route.to.name"
          :to="route.to"
        >
          <v-list-tile-content>
            <v-list-tile-title>{{ route.title }}</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
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
        title: 'Box',
        routes: [
          {
            title: 'Basic',
            to: {
              name: 'boxBasic',
            },
          },
          {
            title: 'Badges',
            to: {
              name: 'boxBadge',
            },
          },
          {
            title: 'Objects',
            to: {
              name: 'boxObjects',
            },
          },
          {
            title: 'Classes',
            to: {
              name: 'boxClasses',
            },
          },
          {
            title: 'Filters',
            to: {
              name: 'boxFilter',
            },
          },
          {
            title: 'Layout',
            to: {
              name: 'boxLayout',
            },
          },
          {
            title: 'Pagination',
            to: {
              name: 'boxPagination',
            },
          },
          {
            title: 'Selection',
            to: {
              name: 'boxSel',
            },
          },
          {
            title: 'Row actions',
            to: {
              name: 'boxRowActions',
            },
          },
          {
            title: 'Sort',
            to: {
              name: 'boxSort',
            },
          },
        ],
      },
      {
        title: 'Calendar',
        routes: [
          {
            title: 'Basic',
            to: {
              name: 'calendarBasic',
            },
          },
          {
            title: 'Events',
            to: {
              name: 'calendarEvents',
            },
          },
          {
            title: 'Icons',
            to: {
              name: 'calendarIcons',
            },
          },
          {
            title: 'Style',
            to: {
              name: 'calendarStyle',
            },
          },
        ],
      },
      {
        title: 'Chart',
        routes: [
          {
            title: 'Playground',
            to: {
              name: 'chartPlayground',
            },
          },
          {
            title: 'Events',
            to: {
              name: 'chartEvents',
            },
          },
          {
            title: 'Area',
            to: {
              name: 'chartArea',
            },
          },
          {
            title: 'Bar',
            to: {
              name: 'chartBar',
            },
          },
          {
            title: 'Bubble',
            to: {
              name: 'chartBubble',
            },
          },
          {
            title: 'Calendar',
            to: {
              name: 'chartCalendar',
            },
          },
          {
            title: 'Candlestick',
            to: {
              name: 'chartCandlestick',
            },
          },
          {
            title: 'Column',
            to: {
              name: 'chartColumn',
            },
          },
          {
            title: 'Combo',
            to: {
              name: 'chartCombo',
            },
          },
          {
            title: 'Geo',
            to: {
              name: 'chartGeo',
            },
          },
          {
            title: 'Line',
            to: {
              name: 'chartLine',
            },
          },
          {
            title: 'Pie',
            to: {
              name: 'chartPie',
            },
          },
          {
            title: 'Sankey',
            to: {
              name: 'chartSankey',
            },
          },
          {
            title: 'Scatter',
            to: {
              name: 'chartScatter',
            },
          },
        ],
      },
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
            title: 'Graphic cells',
            to: {
              name: 'dtGraphicCells',
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
            title: 'Row actions',
            to: {
              name: 'dtRowActions',
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
            title: 'Sortable columns',
            to: {
              name: 'dtSortableColumns',
            },
          },
          {
            title: 'Totals',
            to: {
              name: 'dtTotals',
            },
          },
          {
            title: 'Hide repetitions',
            to: {
              name: 'dtRowsRepetition',
            },
          },
          {
            title: 'Button Cell (J4btn)',
            to: {
              name: 'dtButtonCell',
            },
          },
          {
            title: 'Checkbox Cell',
            to: {
              name: 'dtCheckboxCell',
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
              name: 'fldCombo',
            },
          },
          {
            title: `Radio form`,
            to: {
              name: 'fldRadio',
            },
          },
          {
            title: `Text Input form`,
            to: {
              name: 'fldText',
            },
          },
          {
            title: `Custom graphic`,
            to: {
              name: 'fldGraphic',
            },
          },
        ],
      },
      {
        title: 'Tree',
        routes: [
          {
            title: `Tree basics`,
            to: {
              name: 'treeBasic',
            },
          },
          {
            title: `Tree table`,
            to: {
              name: 'treeTable',
            },
          },
          {
            title: `Tree dynamic expansion`,
            to: {
              name: 'treeDynamic',
            },
          },
        ],
      },
    ],
    simpleRoutes: [
      {
        title: `Btn - Bottoniera`,
        to: {
          name: 'btn',
        },
      },
      {
        title: `Chips`,
        to: {
          name: 'chips',
        },
      },
      {
        title: `Checkbox`,
        to: {
          name: 'checkbox',
        },
      },
      {
        title: `Dash`,
        to: {
          name: 'dash',
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
          name: 'image-button',
        },
      },
      {
        title: `Portals`,
        to: {
          name: 'portals',
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

// For tables
kup-data-table {
  // These pixels measurement are taken from the height of the toolbar of the vuetify webapp.
  --kup-data-table_header-offset: 64px;

  @media only screen and (max-width: 959px) {
    --kup-data-table_header-offset: 55px;
  }
}
</style>