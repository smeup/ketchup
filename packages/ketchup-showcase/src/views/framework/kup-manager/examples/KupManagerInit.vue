<template>
  <div>
    <div class="demo-wrapper">
      <p>
        <span class="code-word">KupManager</span> is automatically instanced as
        a singleton by the first component loaded inside the DOM. <br />
        There are a few default behaviors of the library which can be altered.
        In order to do so, it's possible to define a custom property on the
        documentElement named
        <span class="code-word">ketchupInit</span> before the
        <span class="code-word">body</span> of the document.<br /><br />
        For example, let's say you wish to load ketchup with the "Dark" theme
        enabled. <br />This is everything you need to do in a script inside the
        <span class="code-word">head</span> tag:
        <code style="margin: 2em auto" class="flat"
          >{{ darkThemeExample1 }}<br /><br />{{ darkThemeExample2 }}<br />{{
            darkThemeExample3
          }}<br />{{ darkThemeExample4 }}<br
        /></code>
        There are many initialization settings, here is the list:<br /><br />
        <span class="code-word">assetsPath</span>(string): sets the URL where
        static assets used by the library are located, such as SVGs.<br /><br />
        <span class="code-word">autoSetLocalization</span>(boolean): when true,
        the library automatically sets KupLanguage and KupMath locales to
        KupDates'.<br /><br />
        <span class="code-word">dates</span><br />
        - <strong>locale(string)</strong>: sets the locale of the library (used
        by components such as kup-date-picker).<br /><br />
        <span class="code-word">debug</span><br />
        - <strong>active(boolean)</strong>: sets whether the debug is active or
        not.<br />- <strong>autoPrint(boolean)</strong>: sets whether the debug
        widget automatically print new logs.<br />-
        <strong>logLimit(number)</strong>: sets the maximum number of debug logs
        to store.<br /><br />
        <span class="code-word">interact</span><br />
        - <strong>restrictContainer(HTMLElement)</strong>: sets the container of
        which boundaries can't be crossed by dialogs.<br />
        - <strong>zIndex(number)</strong>: sets the initial zIndex of
        dialogs.<br /><br />
        <span class="code-word">language</span><br />
        - <strong>list(JSON)</strong>: sets a custom list of languages.<br />
        - <strong>name(string)</strong>: sets the initial language of the
        library.<br /><br />
        <span class="code-word">objects</span><br />
        - <strong>list(JSON)</strong>: sets a custom list of objects (this
        feature is currently not used).<br /><br />
        <span class="code-word">scrollOnHover</span><br />
        - <strong>delay(number)</strong>: sets the delay after which the scroll
        on hover starts.<br />
        - <strong>step(number)</strong>: sets the step size in pixel of each
        scroll.<br /><br />
        <span class="code-word">theme</span><br />
        - <strong>list(JSON)</strong>: sets a custom list of themes.<br />
        - <strong>name(string)</strong>: sets the initial theme of the
        library.<br /><br />
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'KupManagerInit',
  data() {
    return {
      darkThemeExample1: 'const dom = document.documentElement;',
      darkThemeExample2: 'dom.ketchupInit = {',
      darkThemeExample3: "theme: { name: 'dark' },",
      darkThemeExample4: '};',
    };
  },
};
</script>
