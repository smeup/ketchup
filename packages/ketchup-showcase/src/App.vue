<template>
  <div id="app">
    <div id="app__modal"
      ><div class="spinner">
        <div class="spinner__container"
          ><kup-spinner active layout="13"></kup-spinner
        ></div>
        <div class="spinner__label">Loading...</div></div
      >
    </div>
    <kup-nav-bar id="app__nav-bar" @kup-navbar-resize="redrawNavigation">
      <kup-switch
        class="kup-secondary"
        id="theme-switch"
        label="Dark Mode"
        leading-label
        slot="right"
        @kup-switch-change="changeTheme"
      ></kup-switch>
      <kup-button
        class="kup-pulsating"
        icon="bug"
        icon-off="bug"
        id="debug-toggler"
        slot="right"
        toggable
        @kup-button-click="toggleDebug"
      ></kup-button>
      <kup-button
        icon="home"
        @kup-button-click="$router.push('/').catch(() => {})"
        slot="right"
      ></kup-button
      ><kup-button
        icon="menu"
        @kup-button-click="menuClick"
        slot="left"
      ></kup-button
      ><img
        class="navbar__logo"
        slot="left"
        src="ketchup_logo_header.svg"
      /><span class="navbar__title" slot="left"
        >Ketch.UP | Showcase
      </span></kup-nav-bar
    >

    <kup-drawer
      class="kup-full-width kup-permanent"
      custom-style="::-webkit-scrollbar { width: 9px; }::-webkit-scrollbar-thumb {background-color: var(--kup-disabled-color);transition: background-color 0.2s ease-in-out;}::-webkit-scrollbar-track {background-color: var(--kup-background-color);}"
      id="app__drawer"
      @kup-drawer-close="redrawNavigation"
      @kup-drawer-open="redrawNavigation"
      @kup-drawer-ready="drawerReady"
      ><div class="drawer-grid">
        <div class="logo">
          <a title="Sme.UP" target="_blank" href="https://www.smeup.com/"
            ><svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 519.34 210.83"
            >
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
        <kup-tree
          as-accordion
          class="kup-borderless kup-full-width"
          :data.prop="treeData"
          density="wide"
          expansion-mode="node"
          global-filter
          id="navigation-accordion"
          prevent-x-scroll
          @kup-tree-nodeselected="treeClick"
        ></kup-tree
        ><div class="version"
          ><a href="https://github.com/smeup/ketchup">v4.2.0-SNAPSHOT</a></div
        ></div
      >
    </kup-drawer>
    <div id="app__content">
      <div id="app__container">
        <router-view></router-view>
      </div>
    </div>
    <div id="app__footer">
      <a
        class="footer__icon--leading"
        target="_blank"
        rel="noopener"
        title="View Ketch.UP on GitHub"
        href="https://github.com/smeup/ketchup"
      >
        <kup-image
          class="footer__icon"
          resource="github"
          color="var(--kup-navbar-color)"
          size-x="24px"
          size-y="24px"
        ></kup-image>
      </a>
      <span class="company-text">© Copyright 2021 - Sme.UP Spa</span>
      <a
        class="footer__icon--trailing"
        target="_blank"
        rel="noopener"
        title="View Ketch.UP on npm"
        href="https://www.npmjs.com/package/@sme.up/ketchup"
      >
        <kup-image
          class="footer__icon"
          resource="npm"
          color="var(--kup-navbar-color)"
          size-x="24px"
          size-y="24px"
        ></kup-image>
      </a>
    </div>
  </div>
</template>

<script lang="ts">
import type { Components } from '@sme.up/ketchup/dist/types/components';
import type { Cell } from '@sme.up/ketchup/dist/types/components/kup-data-table/kup-data-table-declarations';
import type { KupDom } from '@sme.up/ketchup/dist/types/utils/kup-manager/kup-manager-declarations';
import type { KupSwitchEventPayload } from '@sme.up/ketchup/dist/types/components/kup-switch/kup-switch-declarations';
import { KupTreeNodeSelectedEventPayload } from '@sme.up/ketchup/dist/types/components/kup-tree/kup-tree-declarations';

var debug: HTMLKupButtonElement = null;
var drawer: HTMLKupDrawerElement = null;
var main: HTMLElement = null;
var modal: HTMLElement = null;
var navbar: HTMLKupNavBarElement = null;
var spinnerLabel: HTMLElement = null;
var theme: HTMLKupSwitchElement = null;

const dom: KupDom = document.documentElement as KupDom;

export default {
  beforeCreate: function () {
    if (
      window.matchMedia &&
      window.matchMedia('(prefers-color-scheme: dark)').matches
    ) {
      dom.ketchupInit = {
        theme: { name: 'dark' },
      };
    }
  },
  mounted: function () {
    debug = document.getElementById('debug-toggler') as HTMLKupButtonElement;
    drawer = document.getElementById('app__drawer') as HTMLKupDrawerElement;
    main = document.getElementById('app__content') as HTMLElement;
    main.style.padding = '';
    modal = document.getElementById('app__modal') as HTMLElement;
    navbar = document.getElementById('app__nav-bar') as HTMLKupNavBarElement;
    spinnerLabel = document.querySelector('.spinner__label');
    theme = document.getElementById('theme-switch') as HTMLKupSwitchElement;
    document.addEventListener('kup-manager-ready', () => {
      dom.ketchup.setLibraryLocalization(dom.ketchup.dates.locale);
    });
    document.addEventListener('kup-drawer-ready', () => this.removeSpinner());
    document.addEventListener('kup-debug-active', () => {
      debug.checked = true;
    });
    document.addEventListener('kup-debug-inactive', () => {
      debug.checked = false;
    });
    document.addEventListener('kup-manager-stringfinder', (e: CustomEvent) => {
      console.log('[kup-manager-stringfinder] => ' + e.detail.string);
    });
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
          if (opened) {
            main.classList.add('has-padding');
            navbar.classList.add('has-padding');
          } else {
            if (!drawer.classList.contains('kup-permanent')) {
              drawer.open();
            }
            main.classList.remove('has-padding');
            navbar.classList.remove('has-padding');
          }
          drawer.classList.add('kup-permanent');
        } else {
          if (drawer.classList.contains('kup-permanent')) {
            drawer.classList.remove('kup-permanent');
            drawer.close();
          }
          main.classList.remove('has-padding');
          navbar.classList.remove('has-padding');
        }
      });
    },
    removeSpinner(): void {
      setTimeout(() => {
        if (dom.ketchup.theme.name === 'dark') {
          theme.checked = true;
        }
        spinnerLabel.innerHTML = 'Ready!';
        modal.style.opacity = '0';
        setTimeout(() => modal.remove(), 500);
      }, 1000);
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
    treeClick(e: CustomEvent<KupTreeNodeSelectedEventPayload>): void {
      const route: Cell =
        e.detail.treeNode.cells && e.detail.treeNode.cells['ROUTE']
          ? e.detail.treeNode.cells['ROUTE']
          : null;
      if (route) {
        this.$router.push(route.value).catch(() => {});
        drawer.isOpened().then(() => {
          if (!drawer.classList.contains('kup-permanent')) {
            drawer.close();
          }
        });
      }
    },
  },
  data: () => ({
    treeData: [
      {
        children: [
          {
            children: [
              {
                cells: {
                  ROUTE: {
                    value: 'box',
                  },
                },
                value: 'Box',
                visible: true,
              },
              {
                cells: {
                  ROUTE: {
                    value: 'buttonlist',
                  },
                },
                value: 'Button list',
                visible: true,
              },
              {
                cells: {
                  ROUTE: {
                    value: 'calendar',
                  },
                },
                value: 'Calendar',
                visible: true,
              },
              {
                cells: {
                  ROUTE: {
                    value: 'card',
                  },
                },
                value: 'Card',
                visible: true,
              },
              {
                cells: {
                  ROUTE: {
                    value: 'chart',
                  },
                },
                value: 'Chart',
                visible: true,
              },
              {
                cells: {
                  ROUTE: {
                    value: 'dash',
                  },
                },
                value: 'Dash',
                visible: true,
              },
              {
                cells: {
                  ROUTE: {
                    value: 'dashlist',
                  },
                },
                value: 'Dash list',
                visible: true,
              },
              {
                cells: {
                  ROUTE: {
                    value: 'datatable',
                  },
                },
                value: 'Data table',
                visible: true,
              },
              {
                cells: {
                  ROUTE: {
                    value: 'field',
                  },
                },
                value: 'Field',
                visible: true,
              },
              {
                cells: {
                  ROUTE: {
                    value: 'tooltip',
                  },
                },
                value: 'Tooltip',
                visible: true,
              },
              {
                cells: {
                  ROUTE: {
                    value: 'tree',
                  },
                },
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
                cells: {
                  ROUTE: {
                    value: 'accordion',
                  },
                },
                value: 'Accordion',
                visible: true,
              },
              {
                cells: {
                  ROUTE: {
                    value: 'autocomplete',
                  },
                },
                value: 'Autocomplete',
                visible: true,
              },
              {
                cells: {
                  ROUTE: {
                    value: 'badge',
                  },
                },
                value: 'Badge',
                visible: true,
              },
              {
                cells: {
                  ROUTE: {
                    value: 'button',
                  },
                },
                value: 'Button',
                visible: true,
              },
              {
                cells: {
                  ROUTE: {
                    value: 'checkbox',
                  },
                },
                value: 'Checkbox',
                visible: true,
              },
              {
                cells: {
                  ROUTE: {
                    value: 'chip',
                  },
                },
                value: 'Chip',
                visible: true,
              },
              {
                cells: {
                  ROUTE: {
                    value: 'colorpicker',
                  },
                },
                value: 'Color picker',
                visible: true,
              },
              {
                cells: {
                  ROUTE: {
                    value: 'combobox',
                  },
                },
                value: 'Combobox',
                visible: true,
              },
              {
                cells: {
                  ROUTE: {
                    value: 'datepicker',
                  },
                },
                value: 'Datepicker',
                visible: true,
              },
              {
                cells: {
                  ROUTE: {
                    value: 'drawer',
                  },
                },
                value: 'Drawer',
                visible: true,
              },
              {
                cells: {
                  ROUTE: {
                    value: 'dropdownbutton',
                  },
                },
                value: 'Dropdown button',
                visible: true,
              },
              {
                cells: {
                  ROUTE: {
                    value: 'gauge',
                  },
                },
                value: 'Gauge',
                visible: true,
              },
              {
                cells: {
                  ROUTE: {
                    value: 'grid',
                  },
                },
                value: 'Grid',
                visible: true,
              },
              {
                cells: {
                  ROUTE: {
                    value: 'iframe',
                  },
                },
                value: 'Iframe',
                visible: true,
              },
              {
                cells: {
                  ROUTE: {
                    value: 'image',
                  },
                },
                value: 'Image',
                visible: true,
              },
              {
                cells: {
                  ROUTE: {
                    value: 'lazy',
                  },
                },
                value: 'Lazy',
                visible: true,
              },
              {
                cells: {
                  ROUTE: {
                    value: 'list',
                  },
                },
                value: 'List',
                visible: true,
              },
              {
                cells: {
                  ROUTE: {
                    value: 'navbar',
                  },
                },
                value: 'Nav bar',
                visible: true,
              },
              {
                cells: {
                  ROUTE: {
                    value: 'progressbar',
                  },
                },
                value: 'Progress bar',
                visible: true,
              },
              {
                cells: {
                  ROUTE: {
                    value: 'radio',
                  },
                },
                value: 'Radio',
                visible: true,
              },
              {
                cells: {
                  ROUTE: {
                    value: 'rating',
                  },
                },
                value: 'Rating',
                visible: true,
              },
              {
                cells: {
                  ROUTE: {
                    value: 'spinner',
                  },
                },
                value: 'Spinner',
                visible: true,
              },
              {
                cells: {
                  ROUTE: {
                    value: 'switch',
                  },
                },
                value: 'Switch',
                visible: true,
              },
              {
                cells: {
                  ROUTE: {
                    value: 'tabbar',
                  },
                },
                value: 'Tab bar',
                visible: true,
              },
              {
                cells: {
                  ROUTE: {
                    value: 'textfield',
                  },
                },
                value: 'Text field',
                visible: true,
              },
              {
                cells: {
                  ROUTE: {
                    value: 'timepicker',
                  },
                },
                value: 'Time picker',
                visible: true,
              },
            ],
            expandable: true,
            isExpanded: false,
            value: 'Basic',
            visible: true,
          },
          {
            children: [
              {
                cells: {
                  ROUTE: {
                    value: 'qlik',
                  },
                },
                value: 'Qlik',
                visible: true,
              },
            ],
            expandable: true,
            isExpanded: false,
            value: '3rd Parties',
            visible: true,
          },
        ],
        expandable: true,
        icon: 'widgets',
        isExpanded: false,
        value: 'Components',
        visible: true,
      },
      {
        children: [
          {
            cells: {
              ROUTE: {
                value: 'customization',
              },
            },
            value: 'Customization',
            visible: true,
          },
          {
            cells: {
              ROUTE: {
                value: 'theming',
              },
            },
            value: 'Theming',
            visible: true,
          },
        ],
        expandable: true,
        icon: 'style',
        isExpanded: false,
        value: 'CSS',
        visible: true,
      },
      {
        children: [
          {
            cells: {
              ROUTE: {
                value: 'debugging',
              },
            },
            value: 'Debugging',
            visible: true,
          },
          {
            cells: {
              ROUTE: {
                value: 'dynamicposition',
              },
            },
            value: 'Dynamic position',
            visible: true,
          },
          {
            cells: {
              ROUTE: {
                value: 'scrollonhover',
              },
            },
            value: 'Scroll on hover',
            visible: true,
          },
        ],
        expandable: true,
        icon: 'json',
        isExpanded: false,
        value: 'Javascript',
        visible: true,
      },
    ],
  }),
};
</script>

<style lang="scss">
* {
  background-repeat: no-repeat;
  margin: 0;
  padding: 0;
}

html {
  background-color: var(--kup-background-color);
  color: var(--kup-text-color);
  font-family: var(--kup-font-family);
  font-size: var(--kup-font-size);
}

a {
  cursor: pointer;
}

p {
  margin-bottom: 1em;
}

ul {
  padding-left: 1.75em;
}

code {
  box-sizing: border-box;
  overflow: auto;
  padding: 8px;
  width: 100%;

  &.inline {
    display: inline;
    margin: 1px 2px;
    padding: 2px;
  }
}

h1 {
  font-size: 2.5em;
  font-weight: 400;
  margin: 0 0 0.5em;
}

h2 {
  font-size: 1.75em;
  margin: 2em 0 1em;
}

h3 {
  border-bottom: 1px solid;
  font-size: 1.25em;
  font-weight: 500;
  letter-spacing: 0.0125em;
  line-height: 2em;
  margin: 1.75em 0 1em;
}

h4 {
  margin: 0 0 0.5rem;
}

hr {
  margin: 2rem 0;
}

label {
  margin-right: 8px;
}

.max-width-container {
  display: block;
  margin: 0 auto;
  max-width: 80%;
  overscroll-behavior: none;
  padding: 24px 40px;
}

#app {
  line-height: 1.5;

  &__container {
    padding: 1.2em 2.4em;
  }

  &__content {
    padding-bottom: 32px;
    padding-top: var(--kup-navbar-height);
    transition: all 250ms;
  }

  &__modal {
    --kup-spinner-color: var(--kup-primary-color);
    display: flex;
    width: 100%;
    height: 100%;
    position: fixed;
    background: var(--kup-background-color, white);
    left: 0;
    top: 0;
    opacity: 1;
    transition: opacity 0.5s ease-out;
    z-index: 999;
  }

  &__footer {
    align-items: center;
    background: var(--kup-navbar-background-color);
    bottom: 0;
    box-shadow: 0px -1px 4px -1px rgba(128, 128, 128, 0.2),
      0px -1px 5px 0 rgba(128, 128, 128, 0.14),
      0px -1px 10px 0 rgba(128, 128, 128, 0.12);
    box-sizing: border-box;
    color: white;
    display: flex;
    height: 32px;
    justify-content: center;
    padding: 0.375em 0;
    position: fixed;
    width: 100%;
    z-index: var(--kup-drawer-zindex);
  }
}

.navbar__logo {
  height: 100%;
}

.navbar__title {
  font-size: calc(var(--kup-font-size) * 1.25);
  font-weight: 200;
  letter-spacing: 0.1em;
  margin-left: 1em;
}

.drawer-grid {
  display: grid;
  height: 100%;
  grid-template-rows: auto 1fr auto;
}

#navigation-accordion {
  overflow: auto;
}

.logo svg {
  box-sizing: border-box;
  cursor: pointer;
  display: block;
  fill: var(--kup-primary-color);
  height: 70px;
  margin-bottom: 50px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 30px;
  width: calc(var(--kup-drawer-width) / 1.5);
}

.logo svg.visible {
  display: block;
}

.version {
  border-top: 1px solid var(--kup-border-color);
  box-sizing: border-box;
  font-weight: 600;
  margin-top: auto;
  padding: 1em 2em;
  text-align: center;
  width: 100%;
}

.version a {
  color: var(--kup-drawer-color);
}

.spinner {
  margin: auto;

  &__container {
    height: 150px;
    width: 150px;
  }

  &__label {
    color: var(--kup-text-color, transparent);
    font-family: 'Ubuntu', sans-serif;
    font-size: 14px;
    text-align: center;
    font-weight: bold;
    letter-spacing: 2px;
  }
}

a.footer__icon--leading {
  margin-right: 20px;
}

a.footer__icon--trailing {
  margin-left: 20px;
}

.footer__icon {
  cursor: pointer;
  transition: opacity 0.2s;
}

.footer__icon:hover {
  opacity: 0.7;
}

.company-text {
  color: var(--kup-navbar-color);
}

.demo-container {
  text-align: center;
  margin: auto;

  code.flat {
    margin-bottom: 2em;
  }

  kup-text-field {
    margin: 0 1.25em;
  }
}

.has-padding {
  padding-left: var(--kup-drawer-width);
}

::-webkit-scrollbar {
  width: 9px;
}

::-webkit-scrollbar-thumb {
  background-color: var(--kup-disabled-color);
  transition: background-color 0.2s ease-in-out;
}

::-webkit-scrollbar-track {
  background-color: var(--kup-background-color);
}

@media only screen and (max-width: 960px) {
  #app__container {
    padding: 0.5em 2em;
    padding-bottom: 2.5em;
  }

  .navbar__logo,
  #debug-toggler,
  #app__footer,
  #theme-switch {
    display: none;
  }
}
</style>
