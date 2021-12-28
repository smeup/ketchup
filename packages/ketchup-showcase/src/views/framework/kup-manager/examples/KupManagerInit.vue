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
        enabled. This is all you need to do in the
        <span class="code-word">head</span> tag:
        <code style="margin: 2em auto" class="flat"
          >{{ darkThemeExample1 }}<br /><br />{{ darkThemeExample2 }}<br />{{
            darkThemeExample3
          }}<br />{{ darkThemeExample4 }}<br
        /></code>
        There are many initialization settings, here is the list:<br /><br />
        <span class="code-word">dates</span><br />
        - <strong>locale(string)</strong>: sets the locale of the library (used
        by components such as kup-date-picker).<br /><br />
        <span class="code-word">debug</span><br />
        - <strong>active(boolean)</strong>: sets whether the debug is active or
        not.<br />- <strong>autoPrint(boolean)</strong>: sets whether the debug
        widget automatically print new logs.<br />-
        <strong>logLimit(number)</strong>: sets the maximum number of debug logs
        to store.<br /><br />
        interact?: KupManagerInteractSettings; language?:
        KupManagerLanguageSettings; objects?: KupManagerObjectsSettings;
        scrollOnHover?: KupManagerScrollOnHoverSettings; theme?:
        KupManagerThemeSettings;
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
