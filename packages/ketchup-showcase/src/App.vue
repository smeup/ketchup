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
      ><svg
        class="navbar__logo"
        slot="left"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 129.05 48.14"
      >
        <g id="Livello_2" data-name="Livello 2">
          <g id="Livello_1-2" data-name="Livello 1">
            <g id="Raggruppa_1634" data-name="Raggruppa 1634">
              <rect
                id="Rettangolo_36-2"
                data-name="Rettangolo 36-2"
                class="cls-1"
                y="3.29"
                width="19.92"
                height="19.92"
              />
              <rect
                id="Rettangolo_37-2"
                data-name="Rettangolo 37-2"
                class="cls-1"
                y="28.22"
                width="19.92"
                height="19.92"
              />
              <rect
                id="Rettangolo_38-2"
                data-name="Rettangolo 38-2"
                class="cls-1"
                x="24.9"
                y="28.22"
                width="19.92"
                height="19.92"
              />
              <rect
                id="Rettangolo_39-2"
                data-name="Rettangolo 39-2"
                class="cls-1"
                x="24.04"
                y="4.12"
                width="19.92"
                height="19.92"
                transform="translate(0 28.16) rotate(-45)"
              />
            </g>
            <g class="cls-2">
              <path
                class="cls-1"
                d="M64.59,36.84a3.2,3.2,0,0,1-.65.06,1.61,1.61,0,0,1-1-.25,1,1,0,0,1-.32-.87V24.42a2.09,2.09,0,0,1,.45-.11,4.28,4.28,0,0,1,.65,0,1.68,1.68,0,0,1,1,.24,1.07,1.07,0,0,1,.32.88v5.89l3.69-3.67a1.94,1.94,0,0,1,1.16.32,1,1,0,0,1,.43.82,1.16,1.16,0,0,1-.27.76,7.31,7.31,0,0,1-.87.82l-2.05,1.78,3.63,3.4a1.83,1.83,0,0,1-.4,1,1.14,1.14,0,0,1-.93.37,1.41,1.41,0,0,1-.77-.21,4.5,4.5,0,0,1-.81-.74L65,32.85v3.9Z"
              />
              <path
                class="cls-1"
                d="M74.16,33.35a2.27,2.27,0,0,0,1,1.4,3.42,3.42,0,0,0,1.79.44A4.36,4.36,0,0,0,78.41,35a5.35,5.35,0,0,0,1.09-.5,1.26,1.26,0,0,1,.44.42,1.06,1.06,0,0,1,.17.57,1,1,0,0,1-.26.67,2,2,0,0,1-.7.51,5.22,5.22,0,0,1-1.05.32,7.83,7.83,0,0,1-1.32.11,6.61,6.61,0,0,1-2-.3,4.1,4.1,0,0,1-1.57-.92,4.26,4.26,0,0,1-1-1.53,5.59,5.59,0,0,1-.37-2.13,5.33,5.33,0,0,1,.36-2.05,4.35,4.35,0,0,1,1-1.47,4,4,0,0,1,1.43-.87,5.23,5.23,0,0,1,1.73-.28,4.72,4.72,0,0,1,1.71.29,4,4,0,0,1,1.33.82,3.7,3.7,0,0,1,.87,1.25,4.17,4.17,0,0,1,.31,1.59,1.05,1.05,0,0,1-.28.8,1.41,1.41,0,0,1-.77.34Zm2.11-4.05a2.15,2.15,0,0,0-1.56.62,2.65,2.65,0,0,0-.7,1.76l4.22-.63a2.17,2.17,0,0,0-.55-1.23A1.81,1.81,0,0,0,76.27,29.3Z"
              />
              <path
                class="cls-1"
                d="M85.13,34.85a1.76,1.76,0,0,0,1,.26,3,3,0,0,0,.66-.07,3.72,3.72,0,0,0,.59-.19,1.12,1.12,0,0,1,.26.37,1.15,1.15,0,0,1,.11.5,1.12,1.12,0,0,1-.52.94,2.83,2.83,0,0,1-1.65.37,3.77,3.77,0,0,1-2.37-.67,2.67,2.67,0,0,1-.86-2.23V25.41l.45-.1a3.06,3.06,0,0,1,.63-.06,1.6,1.6,0,0,1,1,.25,1.06,1.06,0,0,1,.31.87V28h2.8a1.92,1.92,0,0,1,.17.4,1.83,1.83,0,0,1,.07.53,1,1,0,0,1-.22.72.81.81,0,0,1-.61.23H84.76V34A1,1,0,0,0,85.13,34.85Z"
              />
              <path
                class="cls-1"
                d="M94.15,29.42a3,3,0,0,0-1.05.18,2.34,2.34,0,0,0-.84.56,2.65,2.65,0,0,0-.56.89,3.34,3.34,0,0,0-.21,1.23,2.82,2.82,0,0,0,.74,2.12,2.64,2.64,0,0,0,1.92.71,3.31,3.31,0,0,0,1.15-.18,6.3,6.3,0,0,0,.86-.39,1.79,1.79,0,0,1,.43.44,1,1,0,0,1,.16.57A1.23,1.23,0,0,1,96,36.62a4.36,4.36,0,0,1-2,.41,6.23,6.23,0,0,1-2-.29,4.09,4.09,0,0,1-1.55-.89,4,4,0,0,1-1-1.5,5.68,5.68,0,0,1-.35-2.07,5.32,5.32,0,0,1,.38-2.1,4.27,4.27,0,0,1,1-1.5A4.34,4.34,0,0,1,92,27.79a5.77,5.77,0,0,1,1.87-.29,4,4,0,0,1,2,.44A1.29,1.29,0,0,1,96.66,29a1.08,1.08,0,0,1-.16.56,1.54,1.54,0,0,1-.37.39c-.26-.13-.54-.26-.85-.39A3.16,3.16,0,0,0,94.15,29.42Z"
              />
              <path
                class="cls-1"
                d="M100.69,36.84a3.2,3.2,0,0,1-.65.06,1.61,1.61,0,0,1-1-.25,1,1,0,0,1-.32-.87V24.42a2.09,2.09,0,0,1,.45-.11,4.28,4.28,0,0,1,.65,0,1.68,1.68,0,0,1,1,.24,1.07,1.07,0,0,1,.32.88V28a5.35,5.35,0,0,1,1-.36,4.5,4.5,0,0,1,1.21-.15,4,4,0,0,1,2.75.89,3.36,3.36,0,0,1,1,2.7v5.66l-.45.09a3.13,3.13,0,0,1-.63.06,1.61,1.61,0,0,1-1-.25,1,1,0,0,1-.32-.87V31.2a1.75,1.75,0,0,0-.5-1.38,1.93,1.93,0,0,0-1.29-.42,2.67,2.67,0,0,0-1,.16,4,4,0,0,0-.8.39v6.8Z"
              />
              <path
                class="cls-1"
                d="M117.71,35.73a1.32,1.32,0,0,1-.55.52,5.09,5.09,0,0,1-1.4.57,7,7,0,0,1-1.93.23,6.52,6.52,0,0,1-1.78-.22,3.73,3.73,0,0,1-1.37-.67,2.89,2.89,0,0,1-.87-1.16,4.08,4.08,0,0,1-.31-1.67V27.8a2.2,2.2,0,0,1,.45-.1,3.24,3.24,0,0,1,.65-.05,1.72,1.72,0,0,1,1,.23,1,1,0,0,1,.32.89v4.52a1.77,1.77,0,0,0,.51,1.42,2.16,2.16,0,0,0,1.43.42,3.59,3.59,0,0,0,1-.11,2.54,2.54,0,0,0,.62-.25v-7a2.24,2.24,0,0,1,.44-.1,3.26,3.26,0,0,1,.64-.05,1.73,1.73,0,0,1,1,.23,1.06,1.06,0,0,1,.31.89V35A1.58,1.58,0,0,1,117.71,35.73Z"
              />
              <path
                class="cls-1"
                d="M124.53,37a4.64,4.64,0,0,1-1-.1,5.55,5.55,0,0,1-.84-.26v3.5l-.46.09a3.1,3.1,0,0,1-.64.06,1.57,1.57,0,0,1-1-.25,1,1,0,0,1-.32-.87V29.57a1.35,1.35,0,0,1,.18-.74,1.8,1.8,0,0,1,.58-.54,6.27,6.27,0,0,1,1.36-.56,7,7,0,0,1,1.85-.23,6.62,6.62,0,0,1,1.93.27,4.15,4.15,0,0,1,1.52.86,3.71,3.71,0,0,1,1,1.47,5.65,5.65,0,0,1,.36,2.13,5.84,5.84,0,0,1-.34,2.09,4.4,4.4,0,0,1-.94,1.5,3.85,3.85,0,0,1-1.42.91A5.35,5.35,0,0,1,124.53,37Zm-.36-1.92a2.32,2.32,0,0,0,1.79-.7,3.15,3.15,0,0,0,.64-2.18,3,3,0,0,0-.66-2.19,2.37,2.37,0,0,0-1.71-.64,2.77,2.77,0,0,0-.91.13,4.84,4.84,0,0,0-.67.28V34.7a3.41,3.41,0,0,0,.67.3A2.78,2.78,0,0,0,124.17,35.11Z"
              />
            </g>
            <g class="cls-2">
              <path
                class="cls-1"
                d="M67.81,14.05a1.67,1.67,0,0,1-.65,1.4,3.15,3.15,0,0,1-1.91.5,5,5,0,0,1-1-.09,3.24,3.24,0,0,1-.76-.24,1.57,1.57,0,0,1-.49-.34.53.53,0,0,1-.17-.38.62.62,0,0,1,.09-.32.77.77,0,0,1,.27-.27,4.6,4.6,0,0,0,.88.5,3,3,0,0,0,1.15.22c1,0,1.46-.33,1.46-1s-.33-.88-1-1l-1.16-.31a2.58,2.58,0,0,1-1.25-.65,1.56,1.56,0,0,1-.39-1.1,1.73,1.73,0,0,1,.15-.7,1.58,1.58,0,0,1,.45-.59,2.6,2.6,0,0,1,.76-.4,3.83,3.83,0,0,1,1.08-.14A3.73,3.73,0,0,1,67,9.4c.4.2.6.42.6.67a.57.57,0,0,1-.09.32.52.52,0,0,1-.25.21,4.16,4.16,0,0,0-.71-.36,2.79,2.79,0,0,0-1.09-.2,1.8,1.8,0,0,0-1,.24A.75.75,0,0,0,64,11a.73.73,0,0,0,.21.55,1.31,1.31,0,0,0,.7.33l1,.24a3.09,3.09,0,0,1,1.43.71A1.68,1.68,0,0,1,67.81,14.05Z"
              />
              <path
                class="cls-1"
                d="M77.33,10.36a1.61,1.61,0,0,0-1-.32,2.38,2.38,0,0,0-1.63.65,1.89,1.89,0,0,1,.09.6v4.45l-.22.06a1,1,0,0,1-.3,0c-.4,0-.61-.17-.61-.51v-4a1.24,1.24,0,0,0-.39-1A1.63,1.63,0,0,0,72.17,10a2.66,2.66,0,0,0-.85.14,3.93,3.93,0,0,0-.68.32v5.24l-.21.06a1,1,0,0,1-.31,0q-.6,0-.6-.51V10.56a.86.86,0,0,1,.12-.47,1.33,1.33,0,0,1,.42-.38,4,4,0,0,1,1-.42,4.3,4.3,0,0,1,1.17-.17,3.51,3.51,0,0,1,1.22.2,1.84,1.84,0,0,1,.81.55,3.17,3.17,0,0,1,2.16-.75,2.83,2.83,0,0,1,1.81.54,2,2,0,0,1,.67,1.66v4.42l-.22.06a1,1,0,0,1-.3,0q-.6,0-.6-.51v-4A1.22,1.22,0,0,0,77.33,10.36Z"
              />
              <path
                class="cls-1"
                d="M81.76,13.19A2.17,2.17,0,0,0,84.17,15a2.78,2.78,0,0,0,1.06-.2,3.12,3.12,0,0,0,.76-.42.6.6,0,0,1,.33.53.57.57,0,0,1-.17.38,1.61,1.61,0,0,1-.48.32,3,3,0,0,1-.7.23,4.57,4.57,0,0,1-.86.08,3.61,3.61,0,0,1-2.57-.88,3.36,3.36,0,0,1-.94-2.58,4,4,0,0,1,.23-1.42A3.13,3.13,0,0,1,81.47,10a2.78,2.78,0,0,1,1-.66,3.41,3.41,0,0,1,2.41,0,2.7,2.7,0,0,1,.91.59,2.85,2.85,0,0,1,.61.91A3.11,3.11,0,0,1,86.6,12a.57.57,0,0,1-.14.44.64.64,0,0,1-.39.16ZM83.69,10a1.86,1.86,0,0,0-1.41.59,2.48,2.48,0,0,0-.59,1.7l3.85-.53A2.13,2.13,0,0,0,85,10.52,1.71,1.71,0,0,0,83.69,10Z"
              />
              <path
                class="cls-1"
                d="M88.24,9.33l.22-.07a1.55,1.55,0,0,1,.31,0c.4,0,.59.17.59.52v3.6a1.57,1.57,0,0,0,.48,1.29,2,2,0,0,0,1.31.39,3.23,3.23,0,0,0,.95-.12,2.72,2.72,0,0,0,.62-.25V9.33l.22-.07.3,0c.4,0,.6.17.6.52v4.87a1.21,1.21,0,0,1-.08.47.78.78,0,0,1-.37.34,4.21,4.21,0,0,1-.89.35,4.85,4.85,0,0,1-1.36.17A3.32,3.32,0,0,1,89,15.33a2.35,2.35,0,0,1-.75-1.93Z"
              />
              <path
                class="cls-1"
                d="M98.71,16a3.93,3.93,0,0,1-.92-.11,3.65,3.65,0,0,1-.72-.27v2.72l-.21.06a1.36,1.36,0,0,1-.3,0c-.4,0-.61-.18-.61-.52V10.48a.94.94,0,0,1,.1-.45,1.15,1.15,0,0,1,.41-.35,5.51,5.51,0,0,1,.9-.39,4,4,0,0,1,1.2-.17,4.15,4.15,0,0,1,1.29.19,2.74,2.74,0,0,1,1.05.61,2.85,2.85,0,0,1,.7,1.06,4,4,0,0,1,.26,1.54,4.32,4.32,0,0,1-.23,1.51A2.8,2.8,0,0,1,101,15.1a2.57,2.57,0,0,1-1,.64A3.72,3.72,0,0,1,98.71,16ZM98.56,15a2.1,2.1,0,0,0,1.57-.6,2.6,2.6,0,0,0,.6-1.91,3.25,3.25,0,0,0-.18-1.16,1.9,1.9,0,0,0-.47-.77,1.63,1.63,0,0,0-.7-.42,2.47,2.47,0,0,0-.82-.13,2.43,2.43,0,0,0-.86.13,3.63,3.63,0,0,0-.63.28v4.13a2.33,2.33,0,0,0,.63.32A2.78,2.78,0,0,0,98.56,15Z"
              />
            </g>
          </g>
        </g></svg
    ></kup-nav-bar>
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
            <svg
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              x="0px"
              y="0px"
              viewBox="0 0 519.3 212.4"
              style="enable-background: new 0 0 519.3 212.4"
              xml:space="preserve"
            >
              <g>
                <g>
                  <path
                    class="st0"
                    d="M65,120c0,7.8-2.9,13.9-8.6,18.3c-5.7,4.4-14,6.6-24.9,6.6c-4.6,0-8.9-0.4-12.8-1.2c-3.9-0.8-7.2-1.8-10-3.1
			c-2.7-1.3-4.9-2.8-6.4-4.4c-1.5-1.7-2.3-3.3-2.3-5c0-1.5,0.4-2.9,1.2-4.2c0.8-1.3,2-2.5,3.6-3.5c3.3,2.4,7.1,4.6,11.5,6.5
			c4.4,1.9,9.4,2.8,15,2.8c12.7,0,19.1-4.3,19.1-12.8c0-7-4.2-11.5-12.6-13.6l-15.2-4c-7.5-2-12.9-4.8-16.3-8.5
			c-3.4-3.7-5.1-8.5-5.1-14.4c0-3.2,0.6-6.2,1.9-9.2c1.3-2.9,3.3-5.5,6-7.7c2.7-2.2,6-3.9,10-5.2c4-1.3,8.6-1.9,14-1.9
			c8.5,0,15.5,1.3,20.7,3.8c5.3,2.5,7.9,5.4,7.9,8.7c0,1.6-0.4,3-1.2,4.2c-0.8,1.2-1.9,2.1-3.2,2.8c-2.2-1.5-5.3-3.1-9.3-4.8
			c-4-1.7-8.8-2.6-14.3-2.6s-9.9,1-13.1,3.1c-3.2,2.1-4.9,5-4.9,8.8c0,2.8,0.9,5.2,2.8,7.1c1.8,2,4.9,3.4,9.2,4.4l12.6,3.1
			c8.3,2.1,14.5,5.2,18.7,9.3C63,107.5,65,113.1,65,120z"
                  />
                  <path
                    class="st0"
                    d="M189.5,71.8c-3.4-2.8-8-4.2-13.7-4.2c-7.9,0-15,2.8-21.3,8.4c0.7,2.4,1.1,5.1,1.1,7.9v58.3
			c-0.6,0.2-1.6,0.5-2.8,0.8c-1.3,0.3-2.6,0.5-3.9,0.5c-5.3,0-7.9-2.2-7.9-6.6V85c0-6-1.7-10.4-5.1-13.2c-3.4-2.8-8.1-4.2-13.9-4.2
			c-3.9,0-7.6,0.6-11.1,1.8c-3.5,1.2-6.4,2.6-8.9,4.2v68.5c-0.6,0.2-1.5,0.5-2.7,0.8c-1.2,0.3-2.6,0.5-4,0.5c-5.3,0-7.9-2.2-7.9-6.6
			V74.4c0-2.4,0.5-4.5,1.6-6.1c1-1.6,2.8-3.3,5.4-5c3.3-2.1,7.5-3.9,12.6-5.4c5.1-1.5,10.2-2.3,15.3-2.3c6,0,11.3,0.9,15.9,2.7
			s8.2,4.2,10.6,7.2c3.2-2.8,7.1-5.2,11.9-7.1c4.8-1.9,10.2-2.8,16.3-2.8c9.9,0,17.8,2.4,23.6,7.1c5.9,4.7,8.8,11.9,8.8,21.7v57.9
			c-0.6,0.2-1.6,0.5-2.8,0.8c-1.3,0.3-2.6,0.5-3.9,0.5c-5.3,0-7.9-2.2-7.9-6.6V85C194.6,79,192.9,74.7,189.5,71.8z"
                  />
                  <path
                    class="st0"
                    d="M247.2,108.9c3.3,16,13.8,24,31.5,24c5.1,0,9.8-0.9,13.9-2.6c4.2-1.7,7.4-3.5,9.9-5.5c2.9,1.7,4.4,4,4.4,7
			c0,1.7-0.8,3.4-2.3,5c-1.5,1.6-3.6,3-6.2,4.2c-2.6,1.2-5.7,2.2-9.2,2.9c-3.5,0.7-7.2,1.1-11.3,1.1c-14.2,0-25.4-3.9-33.6-11.5
			c-8.2-7.7-12.4-18.9-12.4-33.7c0-7,1-13.2,3-18.6c2-5.4,4.8-10.1,8.4-13.8c3.6-3.8,7.9-6.7,12.9-8.7c5-2,10.4-3,16.3-3
			c5.5,0,10.6,0.9,15.2,2.8c4.6,1.8,8.6,4.4,12,7.8c3.4,3.4,6,7.3,7.9,11.9c1.9,4.6,2.8,9.6,2.8,15.1c0,2.7-0.6,4.6-1.8,5.8
			c-1.2,1.2-2.9,1.9-5.1,2.1L247.2,108.9z M272.5,67.4c-7.5,0-13.6,2.6-18.5,7.8c-4.9,5.2-7.5,12.6-7.7,22.3l50.4-7
			c-0.6-6.7-3-12.2-7.1-16.6C285.5,69.6,279.8,67.4,272.5,67.4z"
                  />
                  <g>
                    <path
                      class="st0"
                      d="M501.4,0.8H326.4c0,0-17.9,0-17.9,19.5v171.8c0,0,0,19.5,17.9,19.5h175.1c0,0,17.9,0,17.9-19.5V20.3
				C519.3,20.3,519.3,0.8,501.4,0.8z M400.9,128.8c0,2.6-0.3,4.6-1,6.1c-0.7,1.5-2.3,3-4.9,4.5c-2.8,1.6-6.7,3.1-11.6,4.6
				c-5,1.5-10.9,2.2-17.9,2.2c-12.2,0-21.6-2.7-28.1-8.1c-6.5-5.4-9.8-13.8-9.8-25.3V59.5c0.6-0.2,1.6-0.5,2.8-0.8
				c1.3-0.3,2.7-0.5,4.1-0.5c5.1,0,7.7,2.3,7.7,6.8v47.1c0,7.9,2.1,13.6,6.2,16.9c4.2,3.4,9.9,5,17.2,5c4.9,0,9-0.5,12.5-1.6
				c3.4-1,6.1-2.1,8.1-3.2V59.5c0.6-0.2,1.6-0.5,2.8-0.8c1.3-0.3,2.6-0.5,3.9-0.5c5.2,0,7.9,2.3,7.9,6.8V128.8z M496.7,121.1
				c-2,5.6-4.9,10.3-8.5,14c-3.7,3.7-8,6.5-13.1,8.3c-5.1,1.8-10.6,2.8-16.6,2.8c-4.3,0-8.3-0.5-12.1-1.5c-3.8-1-6.9-2.1-9.3-3.5
				v35.5c-0.6,0.2-1.5,0.5-2.7,0.8c-1.2,0.3-2.6,0.5-4,0.5c-5.3,0-7.9-2.3-7.9-6.8V74.5c0-2.4,0.4-4.4,1.3-5.9
				c0.9-1.5,2.6-3,5.3-4.6c3.3-1.8,7.2-3.5,11.8-5c4.6-1.5,9.8-2.3,15.7-2.3c6,0,11.6,0.9,17,2.6c5.3,1.7,9.9,4.4,13.7,8
				c3.8,3.6,6.9,8.2,9.2,13.8c2.3,5.6,3.4,12.3,3.4,20.1C499.7,108.9,498.7,115.5,496.7,121.1z"
                    />
                    <path
                      class="st0"
                      d="M476.3,76c-2.6-2.6-5.7-4.4-9.1-5.5c-3.4-1.1-7-1.7-10.8-1.7c-4.4,0-8.1,0.6-11.2,1.7
				c-3.1,1.1-5.8,2.3-8.2,3.7v54.1c2.3,1.7,5.1,3.1,8.2,4.2c3.2,1.1,6.9,1.7,11.2,1.7c8.5,0,15.4-2.6,20.6-7.8
				c5.2-5.2,7.8-13.5,7.8-25c0-6-0.8-11.1-2.3-15.2C481,81.9,479,78.6,476.3,76z"
                    />
                  </g>
                </g>
              </g>
              <g></g>
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
  height: 85%;
  margin-left: 10px;
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
  fill: var(--smeup-logo-color, #a61a2f);
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

  #debug-toggler,
  #app__footer,
  #theme-switch {
    display: none;
  }
}
</style>
