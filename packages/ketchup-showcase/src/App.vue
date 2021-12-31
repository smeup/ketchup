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
      ></kup-button
      ><kup-button
        icon="menu"
        @kup-button-click="menuClick"
        slot="left"
      ></kup-button
      ><kup-cell
        class="navbar__logo"
        drag-enabled
        :data.prop="navbarCellData"
        slot="left"
        @click="$router.push('/').catch(() => {})"
        title="Ketchup home"
    /></kup-nav-bar>
    <kup-drawer
      class="kup-full-width kup-permanent"
      custom-style="::-webkit-scrollbar { width: 9px; }::-webkit-scrollbar-thumb {background-color: var(--kup-disabled-color);transition: background-color 0.2s ease-in-out;}::-webkit-scrollbar-track {background-color: var(--kup-background-color);}"
      id="app__drawer"
      @kup-drawer-close="redrawNavigation"
      @kup-drawer-open="redrawNavigation"
      @kup-drawer-ready="drawerReady"
      ><div class="drawer-grid">
        <div class="logo">
          <a title="Sme.UP" target="_blank" href="https://www.smeup.com/">
            <kup-cell drag-enabled :data.prop="drawerCellData" />
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
          ><a href="https://github.com/smeup/ketchup">v4.3.0-SNAPSHOT</a></div
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
        title="View Ketchup on GitHub"
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
        title="View Ketchup on npm"
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
    document.addEventListener('kup-theme-change', () => {
      const themeManager = dom.ketchup.theme;
      if (themeManager) {
        const color: string =
          themeManager.cssVars['--kup-drawer-background-color'];
        if (color) {
          if (themeManager.colorContrast(color) === 'black') {
            dom.style.setProperty('--smeup-logo-color', '#a61a2f');
          } else {
            dom.style.setProperty('--smeup-logo-color', 'white');
          }
        }
      }
    });
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
    drawerCellData: {
      cssClass: 'c-centered',
      data: {
        color: 'var(--smeup-logo-color, #a61a2f)',
        resource: 'smeup',
        sizeX: 'calc(var(--kup-drawer-width) / 1.5)',
        sizeY: '70px',
      },
      obj: {
        t: 'J4',
        p: 'IMG',
        k: 'smeup',
      },
      value: 'smeup',
    },
    navbarCellData: {
      data: {
        color: 'var(--kup-navbar-color)',
        resource: 'ketchup',
        sizeX: '128px',
      },
      obj: {
        t: 'J4',
        p: 'IMG',
        k: 'ketchup',
      },
      value: 'ketchup',
    },
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
                    value: 'cell',
                  },
                },
                value: 'Cell',
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
                value: 'Date picker',
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
                    value: 'snackbar',
                  },
                },
                value: 'Snackbar',
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
                value: 'kup-manager',
              },
            },
            icon: 'settings',
            value: 'KupManager',
            visible: true,
          },
          {
            cells: {
              ROUTE: {
                value: 'kup-dates',
              },
            },
            icon: 'calendar',
            value: 'KupDates',
            visible: true,
          },
          {
            cells: {
              ROUTE: {
                value: 'kup-debug',
              },
            },
            icon: 'bug',
            value: 'KupDebug',
            visible: true,
          },
          {
            cells: {
              ROUTE: {
                value: 'kup-dynamic-position',
              },
            },
            icon: 'assistant',
            value: 'KupDynamicPosition',
            visible: true,
          },
          {
            cells: {
              ROUTE: {
                value: 'kup-interact',
              },
            },
            icon: 'tablet',
            value: 'KupInteract',
            visible: true,
          },
          {
            cells: {
              ROUTE: {
                value: 'kup-language',
              },
            },
            icon: 'translate',
            value: 'KupLanguage',
            visible: true,
          },
        ],
        expandable: true,
        icon: 'json',
        isExpanded: false,
        value: 'Framework',
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
  --kup-obj-cursor: pointer;
  height: 100%;
  margin-left: 12px;
  transition: opacity 120ms ease;
  width: 128px;

  &:hover {
    opacity: 0.75;
  }
}

.logo a {
  display: block;
}

.logo kup-cell {
  margin: 32px auto;
}

.drawer-grid {
  display: grid;
  height: 100%;
  grid-template-rows: auto 1fr auto;
}

#navigation-accordion {
  overflow: auto;
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

  #debug-toggler,
  #app__footer,
  #theme-switch {
    display: none;
  }
}
</style>
