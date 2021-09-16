<template>
  <div id="app" style="display: none">
    <kup-nav-bar
      id="app__nav-bar"
      :image.prop="navbarImage"
      label="Ketch.UP | Showcase"
      @kup-navbar-menuclick="menuClick"
      @kup-navbar-resize="redrawNavigation"
    >
      <kup-switch
        id="theme-switch"
        label="Dark Mode"
        leading-label
        @kup-switch-change="changeTheme"
      ></kup-switch>
      <kup-button
        class="kup-pulsating"
        icon="bug"
        icon-off="bug"
        id="debug-toggler"
        toggable
        @kup-button-click="toggleDebug"
      ></kup-button>
      <kup-button
        icon="home"
        @kup-button-click="$router.push('/').catch(() => {})"
      ></kup-button
    ></kup-nav-bar>
    <kup-drawer
      class="kup-permanent"
      id="app__drawer"
      @kup-drawer-close="redrawNavigation"
      @kup-drawer-open="redrawNavigation"
      @kup-drawer-ready="drawerReady"
    >
      <div class="logo">
        <a title="Sme.UP" target="_blank" href="https://www.smeup.com/"
          ><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 519.34 210.83">
            <path
              d="M65.05,119.24q0,11.73-8.61,18.32t-24.93,6.6A64.88,64.88,0,0,1,18.69,143a44.46,44.46,0,0,1-10-3.12,20.2,20.2,0,0,1-6.41-4.4,7.43,7.43,0,0,1-2.3-5,8.21,8.21,0,0,1,1.19-4.21,10.37,10.37,0,0,1,3.58-3.48,56.72,56.72,0,0,0,11.54,6.5,37.62,37.62,0,0,0,15,2.84q19.05,0,19.05-12.82,0-10.44-12.64-13.56l-15.21-4Q11.32,98.78,6.19,93.2T1.1,78.74A22.41,22.41,0,0,1,3,69.58a20.44,20.44,0,0,1,6-7.69,30.37,30.37,0,0,1,10-5.22,45.45,45.45,0,0,1,14-1.93q12.82,0,20.7,3.76t7.88,8.7a7.57,7.57,0,0,1-1.19,4.21,7.28,7.28,0,0,1-3.21,2.75,59.47,59.47,0,0,0-9.34-4.76,36.35,36.35,0,0,0-14.36-2.57q-8.25,0-13.1,3.12a9.88,9.88,0,0,0-4.86,8.79,10.09,10.09,0,0,0,2.75,7.15q2.74,2.94,9.16,4.4L40.1,93.4q12.46,3.12,18.69,9.25T65.05,119.24Z"
              transform="translate(0.02 0)"
            />
            <path
              d="M189.51,71q-5.13-4.22-13.74-4.22a30.9,30.9,0,0,0-21.26,8.45,27.28,27.28,0,0,1,1.1,7.88v58.27a21.93,21.93,0,0,1-2.84.83,17.39,17.39,0,0,1-3.94.46q-7.87,0-7.88-6.61V84.24q0-9-5.13-13.19t-14-4.22a33.16,33.16,0,0,0-11.08,1.84,41.34,41.34,0,0,0-8.89,4.21v68.53a24.15,24.15,0,0,1-2.75.83,16.82,16.82,0,0,1-4,.46q-7.87,0-7.87-6.61V73.61a11.32,11.32,0,0,1,1.55-6.14,18.31,18.31,0,0,1,5.41-5A51.42,51.42,0,0,1,106.74,57,52.91,52.91,0,0,1,122,54.74,44.64,44.64,0,0,1,138,57.4a24.38,24.38,0,0,1,10.63,7.24,40.4,40.4,0,0,1,11.9-7.06,44,44,0,0,1,16.3-2.84q14.85,0,23.64,7.06t8.8,21.71v57.9a21.93,21.93,0,0,1-2.84.83,17.39,17.39,0,0,1-3.94.46q-7.87,0-7.88-6.61V84.24Q194.61,75.26,189.51,71Z"
              transform="translate(0.02 0)"
            />
            <path
              d="M247.19,108q5,24,31.51,24a36.27,36.27,0,0,0,13.93-2.56,40.51,40.51,0,0,0,9.88-5.44c2.94,1.71,4.4,4,4.4,7a7.09,7.09,0,0,1-2.29,4.95,20.49,20.49,0,0,1-6.23,4.22,42.71,42.71,0,0,1-9.16,2.93,55.43,55.43,0,0,1-11.27,1.1q-21.25,0-33.62-11.55T232,99a53.49,53.49,0,0,1,3-18.6,40.09,40.09,0,0,1,8.43-13.83,36.2,36.2,0,0,1,12.92-8.7,43.13,43.13,0,0,1,16.31-3,41.16,41.16,0,0,1,15.2,2.75,34.82,34.82,0,0,1,12,7.79,36.41,36.41,0,0,1,7.88,11.9,39.32,39.32,0,0,1,2.84,15.12c0,2.69-.62,4.62-1.83,5.77a8.52,8.52,0,0,1-5.14,2.11Zm25.32-41.38A24.32,24.32,0,0,0,254,74.44q-7.33,7.78-7.7,22.26l50.39-7q-.92-10.08-7.06-16.59T272.51,66.65Z"
              transform="translate(0.02 0)"
            />
            <path
              d="M486.58,74a22.79,22.79,0,0,0-9.07-5.5,35.05,35.05,0,0,0-10.81-1.65,33.19,33.19,0,0,0-11.19,1.6,56.68,56.68,0,0,0-8.24,3.67v54a30.86,30.86,0,0,0,8.24,4.21A34.25,34.25,0,0,0,466.7,132v0q12.82,0,20.62-7.78t7.78-25A44.38,44.38,0,0,0,492.81,84,26.55,26.55,0,0,0,486.58,74Z"
              transform="translate(0.02 0)"
            />
            <path
              d="M501.43,0h-175s-17.92,0-17.92,19.5V191.34s0,19.49,17.89,19.49h175s17.89,0,17.89-19.49V19.5S519.32,0,501.43,0ZM405.14,126.75a15.69,15.69,0,0,1-1,6.14c-.67,1.53-2.29,3-4.86,4.49A57.29,57.29,0,0,1,387.65,142a63.41,63.41,0,0,1-17.87,2.2q-18.33,0-28.13-8.07t-9.8-25.28V57.49a21.89,21.89,0,0,1,2.84-.82,17.38,17.38,0,0,1,4.13-.46q7.69,0,7.7,6.82v47.09q0,11.91,6.22,16.91T370,132a43.33,43.33,0,0,0,12.46-1.55,41.9,41.9,0,0,0,8.07-3.21V57.49a21.89,21.89,0,0,1,2.84-.82,16.84,16.84,0,0,1,3.94-.46q7.88,0,7.88,6.78Zm101.76-7.69a37.66,37.66,0,0,1-8.52,14,34.57,34.57,0,0,1-13.1,8.34,48.21,48.21,0,0,1-16.57,2.76,48.74,48.74,0,0,1-12.09-1.46,40,40,0,0,1-9.34-3.49v35.55a24.1,24.1,0,0,1-2.75.82,16.32,16.32,0,0,1-4,.46q-7.89,0-7.88-6.77V72.51a11.69,11.69,0,0,1,1.28-5.86c.85-1.46,2.63-3,5.31-4.58a70.54,70.54,0,0,1,11.82-5,49.58,49.58,0,0,1,15.67-2.29,55.05,55.05,0,0,1,16.95,2.57,36,36,0,0,1,13.74,8,38.07,38.07,0,0,1,9.09,13.76q3.39,8.43,3.39,20.15A58.67,58.67,0,0,1,506.9,119.06Z"
              transform="translate(0.02 0)"
            />
          </svg>
        </a>
      </div>
      <kup-accordion
        class="kup-full-width"
        :data.prop="accordionData"
        id="navigation-accordion"
        @kup-accordion-treenodeselected="treeClick"
      ></kup-accordion>
    </kup-drawer>
    <div id="app__content">
      <div id="app__container">
        <router-view></router-view>
      </div>
    </div>
    <div id="app__footer">
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
    </div>
  </div>
</template>

<script lang="ts">
import { KupDom } from 'ketchup/dist/types/utils/kup-manager/kup-manager-declarations';
import { KupSwitchEventPayload } from 'ketchup/dist/types/components/kup-switch/kup-switch-declarations';
import { KupAccordionTreeNodeSelectedEventPayload } from 'ketchup/dist/types/components/kup-accordion/kup-accordion-declarations';

const dom: KupDom = document.documentElement as KupDom;

var main: HTMLElement = null;
var drawer: HTMLKupDrawerElement = null;
var navbar: HTMLKupNavBarElement = null;

export default {
  mounted: function () {
    drawer = document.getElementById('app__drawer') as HTMLKupDrawerElement;
    main = document.getElementById('app__content') as HTMLKupDrawerElement;
    main.style.padding = '';
    navbar = document.getElementById('app__nav-bar') as HTMLKupNavBarElement;
  },
  methods: {
    changeTheme(e: CustomEvent<KupSwitchEventPayload>): void {
      if (e.detail.value === 'on') {
        dom.ketchup.theme.set('dark');
      } else {
        dom.ketchup.theme.set('ketchup');
      }
    },
    drawerReady(): void {
      if (window.outerWidth >= 1264) {
        drawer.open();
      }
    },
    redrawNavigation(): void {
      drawer.isOpened().then((opened: boolean) => {
        if (window.outerWidth >= 1264) {
          drawer.classList.add('kup-permanent');
          if (opened) {
            main.classList.add('has-padding');
            navbar.classList.add('has-padding');
          } else {
            main.classList.remove('has-padding');
            navbar.classList.remove('has-padding');
          }
        } else {
          drawer.classList.remove('kup-permanent');
          main.classList.remove('has-padding');
          navbar.classList.remove('has-padding');
        }
      });
    },
    menuClick(): void {
      drawer.isOpened().then((res: boolean) => {
        if (res) {
          drawer.close();
        } else {
          drawer.open();
        }
      });
    },
    toggleDebug(): void {
      if (dom.ketchup.debug.isDebug()) {
        console.log('Debug deactivated.');
        dom.ketchup.debug.toggle(false);
      } else {
        console.log('Debug activated.');
        dom.ketchup.debug.toggle(true);
      }
    },
    treeClick(e: CustomEvent<KupAccordionTreeNodeSelectedEventPayload>): void {
      console.log(e);
    },
  },
  data: () => ({
    drawer: null,
    accordionData: {
      columns: [
        {
          name: 'Components',
          title: 'Components',
          icon: 'widgets',
        },
        {
          name: 'CSS',
          title: 'CSS',
          icon: 'style',
        },
        {
          name: 'Javascript',
          title: 'Javascript',
          icon: 'json',
        },
      ],
      rows: [
        {
          cells: {
            Components: {
              data: {
                data: [
                  {
                    children: [
                      {
                        expandable: true,
                        isExpanded: false,
                        value: 'Accordion',
                        visible: true,
                      },
                      {
                        expandable: true,
                        isExpanded: false,
                        value: 'Box',
                        visible: true,
                      },
                      {
                        expandable: true,
                        isExpanded: false,
                        value: 'Bpmn.io',
                        visible: true,
                      },
                      {
                        expandable: true,
                        isExpanded: false,
                        value: 'Button list',
                        visible: true,
                      },
                      {
                        expandable: true,
                        isExpanded: false,
                        value: 'Calendar',
                        visible: true,
                      },
                      {
                        expandable: true,
                        isExpanded: false,
                        value: 'Card',
                        visible: true,
                      },
                      {
                        expandable: true,
                        isExpanded: false,
                        value: 'Chart',
                        visible: true,
                      },
                      {
                        expandable: true,
                        isExpanded: false,
                        value: 'Dash',
                        visible: true,
                      },
                      {
                        expandable: true,
                        isExpanded: false,
                        value: 'Dash list',
                        visible: true,
                      },
                      {
                        expandable: true,
                        isExpanded: false,
                        value: 'Data table',
                        visible: true,
                      },
                      {
                        expandable: true,
                        isExpanded: false,
                        value: 'Echart',
                        visible: true,
                      },
                      {
                        expandable: true,
                        isExpanded: false,
                        value: 'Field',
                        visible: true,
                      },
                      {
                        expandable: true,
                        isExpanded: false,
                        value: 'Tooltip',
                        visible: true,
                      },
                      {
                        expandable: true,
                        isExpanded: false,
                        value: 'Tree',
                        visible: true,
                      },
                    ],
                    expandable: true,
                    isExpanded: false,
                    value: 'Advanced',
                    visible: true,
                  },
                  {
                    children: [
                      {
                        expandable: true,
                        isExpanded: false,
                        value: 'Autocomplete',
                        visible: true,
                      },
                      {
                        expandable: true,
                        isExpanded: false,
                        value: 'Badge',
                        visible: true,
                      },
                      {
                        expandable: true,
                        isExpanded: false,
                        value: 'Button',
                        visible: true,
                      },
                      {
                        expandable: true,
                        isExpanded: false,
                        value: 'Checkbox',
                        visible: true,
                      },
                      {
                        expandable: true,
                        isExpanded: false,
                        value: 'Chip',
                        visible: true,
                      },
                      {
                        expandable: true,
                        isExpanded: false,
                        value: 'Color picker',
                        visible: true,
                      },
                      {
                        expandable: true,
                        isExpanded: false,
                        value: 'Combobox',
                        visible: true,
                      },
                      {
                        expandable: true,
                        isExpanded: false,
                        value: 'Datepicker',
                        visible: true,
                      },
                      {
                        expandable: true,
                        isExpanded: false,
                        value: 'Drawer',
                        visible: true,
                      },
                      {
                        expandable: true,
                        isExpanded: false,
                        value: 'Dropdown button',
                        visible: true,
                      },
                      {
                        expandable: true,
                        isExpanded: false,
                        value: 'Gauge',
                        visible: true,
                      },
                      {
                        expandable: true,
                        isExpanded: false,
                        value: 'Grid',
                        visible: true,
                      },
                      {
                        expandable: true,
                        isExpanded: false,
                        value: 'Iframe',
                        visible: true,
                      },
                      {
                        expandable: true,
                        isExpanded: false,
                        value: 'Image',
                        visible: true,
                      },
                      {
                        expandable: true,
                        isExpanded: false,
                        value: 'Lazy',
                        visible: true,
                      },
                      {
                        expandable: true,
                        isExpanded: false,
                        value: 'List',
                        visible: true,
                      },
                      {
                        expandable: true,
                        isExpanded: false,
                        value: 'Nav bar',
                        visible: true,
                      },
                      {
                        expandable: true,
                        isExpanded: false,
                        value: 'Progress bar',
                        visible: true,
                      },
                      {
                        expandable: true,
                        isExpanded: false,
                        value: 'Radio',
                        visible: true,
                      },
                      {
                        expandable: true,
                        isExpanded: false,
                        value: 'Rating',
                        visible: true,
                      },
                      {
                        expandable: true,
                        isExpanded: false,
                        value: 'Spinner',
                        visible: true,
                      },
                      {
                        expandable: true,
                        isExpanded: false,
                        value: 'Switch',
                        visible: true,
                      },
                      {
                        expandable: true,
                        isExpanded: false,
                        value: 'Tab bar',
                        visible: true,
                      },
                      {
                        expandable: true,
                        isExpanded: false,
                        value: 'Text field',
                        visible: true,
                      },
                      {
                        expandable: true,
                        isExpanded: false,
                        value: 'Time picker',
                        visible: true,
                      },
                    ],
                    expandable: true,
                    isExpanded: false,
                    value: 'Basic',
                    visible: true,
                  },
                ],
                density: 'wide',
                scrollOnHover: true,
              },
              shape: 'TRE',
            },
            CSS: {
              data: {
                data: [
                  {
                    expandable: true,
                    isExpanded: false,
                    value: 'Customization',
                    visible: true,
                  },
                  {
                    expandable: true,
                    isExpanded: false,
                    value: 'Theming',
                    visible: true,
                  },
                ],
                density: 'wide',
                scrollOnHover: true,
              },
              shape: 'TRE',
            },
            Javascript: {
              data: {
                data: [
                  {
                    expandable: true,
                    isExpanded: false,
                    value: 'Debugging',
                    visible: true,
                  },
                  {
                    expandable: true,
                    isExpanded: false,
                    value: 'Dynamic position',
                    visible: true,
                  },
                  {
                    expandable: true,
                    isExpanded: false,
                    value: 'Scroll on hover',
                    visible: true,
                  },
                ],
                density: 'wide',
                scrollOnHover: true,
              },
              shape: 'TRE',
            },
          },
          id: '1',
        },
      ],
    },
    navbarImage: { resource: 'ketchup_logo_header.svg' },
    groupNavigationSections: [
      {
        title: 'Components',
        componentsItems: [
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
                title: `Color Picker`,
                to: {
                  name: 'colorpicker',
                },
              },
              {
                title: `Combobox`,
                to: {
                  name: 'combobox',
                },
              },
              {
                title: `Date Picker`,
                to: {
                  name: 'datepicker',
                },
              },
              {
                title: 'Drawer',
                to: {
                  name: 'drawer',
                },
              },
              {
                title: 'Dropdown Button',
                to: {
                  name: 'dropdownbutton',
                },
              },
              {
                title: 'Gauge',
                to: {
                  name: 'gauge',
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
              {
                title: `Time Picker`,
                to: {
                  name: 'timepicker',
                },
              },
            ],
          },
          {
            title: 'Advanced',
            advancedItems: [
              {
                title: 'Accordion',
                to: {
                  name: 'accordion',
                },
              },
              {
                title: 'Box',
                to: {
                  name: 'box',
                },
              },
              {
                title: 'Bpmn.io',
                to: {
                  name: 'bpmn.io',
                },
              },
              {
                title: 'Button list',
                to: {
                  name: 'buttonlist',
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
                title: `Dash`,
                to: {
                  name: 'dash',
                },
              },
              {
                title: `Dash List`,
                to: {
                  name: 'dashlist',
                },
              },
              {
                title: `Data Table`,
                to: {
                  name: 'datatable',
                },
              },
              {
                title: `Echart`,
                to: {
                  name: 'echart',
                },
              },
              {
                title: `Field`,
                to: {
                  name: 'field',
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
            title: '3rd Parties',
            thirdParties: [
              {
                title: 'Qlik',
                to: {
                  name: 'qlik',
                },
              },
            ],
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
            title: 'Dynamic position',
            to: {
              name: 'dynamicposition',
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
