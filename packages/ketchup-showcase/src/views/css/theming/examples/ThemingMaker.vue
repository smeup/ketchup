<template>
  <div>
    <p>
      In this section you can create your own theme. <br />Choose a template to
      start from, then start editing your variables.<br />
      Keep in mind that the JSON tab will always contain the data of your theme,
      if it doesn't yet exist it will be created.<br /><br />
      Your theme will be stored until you refresh the page or until you delete
      it, so you can freely swap to another template during the creation
      process.
    </p>
    <div id="theme-container-demo" class="kup-container"></div>
    <div id="theme-action-demo">
      <kup-button
        title="Download"
        icon="download"
        @kupButtonClick="downloadTheme" />
      <kup-button title="Delete" icon="delete" @kupButtonClick="deleteTheme"
    /></div>
    <div id="sample-wrapper" class="theming">
      <div id="sample-specs">
        <kup-tab-bar
          id="demo-tab-bar"
          :data.prop="tabs"
          @kupTabBarClick="handleTab"
        ></kup-tab-bar>
        <div id="sample-comp" class="full">
          <table class="instruction-table" id="css-variables-tab">
            <thead>
              <tr>
                <th>Variable name</th>
                <th>Description</th>
                <th>Type</th>
                <th>Try it!</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td class="prevent-cr">
                  <span class="code-word">--kup-main-color</span>
                </td>
                <td>
                  Sets the main color of the app, changing components
                  accordingly.
                </td>
                <td class="prevent-cr">
                  <span class="code-word">color</span>
                </td>
                <td class="text-cell">
                  <kup-text-field
                    full-width
                    id="main-color"
                    @kupTextFieldInput="updateThemeVariable"
                  ></kup-text-field>
                </td>
              </tr>
              <tr>
                <td class="prevent-cr">
                  <span class="code-word">--kup-background-color</span>
                </td>
                <td>Sets the color of the background.</td>
                <td class="prevent-cr">
                  <span class="code-word">color</span>
                </td>
                <td class="text-cell">
                  <kup-text-field
                    full-width
                    id="background-color"
                    @kupTextFieldInput="updateThemeVariable"
                  ></kup-text-field>
                </td>
              </tr>
              <tr>
                <td class="prevent-cr">
                  <span class="code-word">--kup-nav-bar-background-color</span>
                </td>
                <td>Sets the background color of the header/nav bar.</td>
                <td class="prevent-cr">
                  <span class="code-word">color</span>
                </td>
                <td class="text-cell">
                  <kup-text-field
                    full-width
                    id="nav-bar-background-color"
                    @kupTextFieldInput="updateThemeVariable"
                  ></kup-text-field>
                </td>
              </tr>
              <tr>
                <td class="prevent-cr">
                  <span class="code-word">--kup-drawer-background-color</span>
                </td>
                <td>Sets the color of the drawer/side menu.</td>
                <td class="prevent-cr">
                  <span class="code-word">color</span>
                </td>
                <td class="text-cell">
                  <kup-text-field
                    full-width
                    id="drawer-background-color"
                    @kupTextFieldInput="updateThemeVariable"
                  ></kup-text-field>
                </td>
              </tr>
              <tr>
                <td class="prevent-cr">
                  <span class="code-word">--kup-font-family</span>
                </td>
                <td>
                  Sets a different font family, overriding the default Roboto
                  provided by Material Design. To set a custom font not natively
                  supported by the browser, you must import manually its font
                  face.
                </td>
                <td class="prevent-cr">
                  <span class="code-word">font</span>
                </td>
                <td class="text-cell">
                  <kup-text-field
                    full-width
                    id="font-family"
                    @kupTextFieldInput="updateThemeVariable"
                  ></kup-text-field>
                </td>
              </tr>
              <tr>
                <td class="prevent-cr">
                  <span class="code-word">--kup-font-family-monospace</span>
                </td>
                <td>
                  Sets the font family used for monospace text. Right now it's
                  used only by kup-datatable when cells are numbers.
                </td>
                <td class="prevent-cr">
                  <span class="code-word">font</span>
                </td>
                <td class="text-cell">
                  <kup-text-field
                    full-width
                    id="font-family-monospace"
                    @kupTextFieldInput="updateThemeVariable"
                  ></kup-text-field>
                </td>
              </tr>
              <tr>
                <td class="prevent-cr">
                  <span class="code-word">--kup-font-size</span>
                </td>
                <td>
                  Sets a different font size, a sensible range is between 12px
                  and 18px. It's possible to break this boundary but some
                  strange behaviors might occur.
                </td>
                <td class="prevent-cr">
                  <span class="code-word">size</span>
                </td>
                <td class="text-cell">
                  <kup-text-field
                    full-width
                    id="font-size"
                    @kupTextFieldInput="updateThemeVariable"
                  ></kup-text-field>
                </td>
              </tr>
              <tr>
                <td class="prevent-cr">
                  <span class="code-word">--kup-text-color</span>
                </td>
                <td>Sets the color of plain text, such as labels.</td>
                <td class="prevent-cr">
                  <span class="code-word">color</span>
                </td>
                <td class="text-cell">
                  <kup-text-field
                    full-width
                    id="text-color"
                    @kupTextFieldInput="updateThemeVariable"
                  ></kup-text-field>
                </td>
              </tr>
              <tr>
                <td class="prevent-cr">
                  <span class="code-word">--kup-text-on-main-color</span>
                </td>
                <td>
                  Sets the color of text displayed above the main color, keep in
                  mind readability when setting this!
                </td>
                <td class="prevent-cr">
                  <span class="code-word">color</span>
                </td>
                <td class="text-cell">
                  <kup-text-field
                    full-width
                    id="text-on-main-color"
                    @kupTextFieldInput="updateThemeVariable"
                  ></kup-text-field>
                </td>
              </tr>
              <tr>
                <td class="prevent-cr">
                  <span class="code-word">--kup-disabled-background-color</span>
                </td>
                <td>
                  Sets the background color of disabled text, keep in mind
                  readability when setting its counterpart
                  "--kup-disabled-color".
                </td>
                <td class="prevent-cr">
                  <span class="code-word">color</span>
                </td>
                <td class="text-cell">
                  <kup-text-field
                    full-width
                    id="disabled-background-color"
                    @kupTextFieldInput="updateThemeVariable"
                  ></kup-text-field>
                </td>
              </tr>
              <tr>
                <td class="prevent-cr">
                  <span class="code-word">--kup-disabled-color</span>
                </td>
                <td>Sets the color of disabled text.</td>
                <td class="prevent-cr">
                  <span class="code-word">color</span>
                </td>
                <td class="text-cell">
                  <kup-text-field
                    full-width
                    id="disabled-color"
                    @kupTextFieldInput="updateThemeVariable"
                  ></kup-text-field>
                </td>
              </tr>
              <tr>
                <td class="prevent-cr">
                  <span class="code-word">--kup-hover-background-color</span>
                </td>
                <td>Sets the background of elements at mouse hover.</td>
                <td class="prevent-cr">
                  <span class="code-word">color</span>
                </td>
                <td class="text-cell">
                  <kup-text-field
                    full-width
                    id="hover-background-color"
                    @kupTextFieldInput="updateThemeVariable"
                  ></kup-text-field>
                </td>
              </tr>
              <tr>
                <td class="prevent-cr">
                  <span class="code-word">--kup-hover-color</span>
                </td>
                <td>
                  Sets the color of text at mouse hover, keep in mind
                  readability with its counterpart
                  "--kup-hover-background-color".
                </td>
                <td class="prevent-cr">
                  <span class="code-word">color</span>
                </td>
                <td class="text-cell">
                  <kup-text-field
                    full-width
                    id="hover-color"
                    @kupTextFieldInput="updateThemeVariable"
                  ></kup-text-field>
                </td>
              </tr>
              <tr>
                <td class="prevent-cr">
                  <span class="code-word">--kup-title-background-color</span>
                </td>
                <td
                  >Sets the background color of titles (trees, data tables,
                  etc.).</td
                >
                <td class="prevent-cr">
                  <span class="code-word">color</span>
                </td>
                <td class="text-cell">
                  <kup-text-field
                    full-width
                    id="title-background-color"
                    @kupTextFieldInput="updateThemeVariable"
                  ></kup-text-field>
                </td>
              </tr>
              <tr>
                <td class="prevent-cr">
                  <span class="code-word">--kup-title-color</span>
                </td>
                <td>Sets the color of titles (trees, data tables, etc.).</td>
                <td class="prevent-cr">
                  <span class="code-word">color</span>
                </td>
                <td class="text-cell">
                  <kup-text-field
                    full-width
                    id="title-color"
                    @kupTextFieldInput="updateThemeVariable"
                  ></kup-text-field>
                </td>
              </tr>
              <tr>
                <td class="prevent-cr">
                  <span class="code-word">--kup-icon-color</span>
                </td>
                <td>
                  Sets the color of icons, for example leading and trailing
                  icons in text fields.
                </td>
                <td class="prevent-cr">
                  <span class="code-word">color</span>
                </td>
                <td class="text-cell">
                  <kup-text-field
                    full-width
                    id="icon-color"
                    @kupTextFieldInput="updateThemeVariable"
                  ></kup-text-field>
                </td>
              </tr>
              <tr>
                <td class="prevent-cr">
                  <span class="code-word">--kup-border-color</span>
                </td>
                <td>Sets the color of borders, such as checkboxes borders.</td>
                <td class="prevent-cr">
                  <span class="code-word">color</span>
                </td>
                <td class="text-cell">
                  <kup-text-field
                    full-width
                    id="border-color"
                    @kupTextFieldInput="updateThemeVariable"
                  ></kup-text-field>
                </td>
              </tr>
              <tr>
                <td class="prevent-cr">
                  <span class="code-word">--kup-box-shadow</span>
                </td>
                <td
                  >Generic box shadow mostly used for stacked elements (like
                  contextual menus).</td
                >
                <td class="prevent-cr">
                  <span class="code-word">box-shadow</span>
                </td>
                <td class="text-cell">
                  <kup-text-field
                    full-width
                    id="box-shadow"
                    @kupTextFieldInput="updateThemeVariable"
                  ></kup-text-field>
                </td>
              </tr>
              <tr>
                <td class="prevent-cr">
                  <span class="code-word">--kup-field-background-color</span>
                </td>
                <td>Sets the background color of filled text fields.</td>
                <td class="prevent-cr">
                  <span class="code-word">color</span>
                </td>
                <td class="text-cell">
                  <kup-text-field
                    full-width
                    id="field-background-color"
                    @kupTextFieldInput="updateThemeVariable"
                  ></kup-text-field>
                </td>
              </tr>
              <tr>
                <td class="prevent-cr">
                  <span class="code-word">--kup-success-color</span>
                </td>
                <td
                  >Sets the color which defines a success status within the
                  app.</td
                >
                <td class="prevent-cr">
                  <span class="code-word">color</span>
                </td>
                <td class="text-cell">
                  <kup-text-field
                    full-width
                    id="success-color"
                    @kupTextFieldInput="updateThemeVariable"
                  ></kup-text-field>
                </td>
              </tr>
              <tr>
                <td class="prevent-cr">
                  <span class="code-word">--kup-warning-color</span>
                </td>
                <td
                  >Sets the color which defines a warning status within the
                  app.</td
                >
                <td class="prevent-cr">
                  <span class="code-word">color</span>
                </td>
                <td class="text-cell">
                  <kup-text-field
                    full-width
                    id="warning-color"
                    @kupTextFieldInput="updateThemeVariable"
                  ></kup-text-field>
                </td>
              </tr>
              <tr>
                <td class="prevent-cr">
                  <span class="code-word">--kup-danger-color</span>
                </td>
                <td
                  >Sets the color which defines a danger status within the
                  app.</td
                >
                <td class="prevent-cr">
                  <span class="code-word">color</span>
                </td>
                <td class="text-cell">
                  <kup-text-field
                    full-width
                    id="danger-color"
                    @kupTextFieldInput="updateThemeVariable"
                  ></kup-text-field>
                </td>
              </tr>
              <tr>
                <td class="prevent-cr">
                  <span class="code-word">--kup-spinner-color</span>
                </td>
                <td>Sets the color of spinners.</td>
                <td class="prevent-cr">
                  <span class="code-word">color</span>
                </td>
                <td class="text-cell">
                  <kup-text-field
                    full-width
                    id="spinner-color"
                    @kupTextFieldInput="updateThemeVariable"
                  ></kup-text-field>
                </td>
              </tr>
              <tr>
                <td class="prevent-cr">
                  <span class="code-word">--kup-chart-color-1</span>
                </td>
                <td
                  >Sets the first color of kup-chart. Offline mode variants:
                  "bar" (positive bar color), "dis" (line color), "lin" (line
                  color), "pie" (first slice).</td
                >
                <td class="prevent-cr">
                  <span class="code-word">color</span>
                </td>
                <td class="text-cell">
                  <kup-text-field
                    full-width
                    id="chart-color-1"
                    @kupTextFieldInput="updateThemeVariable"
                  ></kup-text-field>
                </td>
              </tr>
              <tr>
                <td class="prevent-cr">
                  <span class="code-word">--kup-chart-color-2</span>
                </td>
                <td
                  >Sets the second color of kup-chart. Offline mode variants:
                  "bar" (negative bar color), "lin" (fill color), "pie" (second
                  slice).</td
                >
                <td class="prevent-cr">
                  <span class="code-word">color</span>
                </td>
                <td class="text-cell">
                  <kup-text-field
                    full-width
                    id="chart-color-2"
                    @kupTextFieldInput="updateThemeVariable"
                  ></kup-text-field>
                </td>
              </tr>
              <tr>
                <td class="prevent-cr">
                  <span class="code-word">--kup-chart-color-3</span>
                </td>
                <td
                  >Sets the third color of kup-chart. Offline mode variants:
                  "bar" (neutral bar color), "pie" (third slice).</td
                >
                <td class="prevent-cr">
                  <span class="code-word">color</span>
                </td>
                <td class="text-cell">
                  <kup-text-field
                    full-width
                    id="chart-color-3"
                    @kupTextFieldInput="updateThemeVariable"
                  ></kup-text-field>
                </td>
              </tr>
              <tr>
                <td class="prevent-cr">
                  <span class="code-word">--kup-chart-color-4</span>
                </td>
                <td
                  >Sets the fourth color of kup-chart and so on. It is possible
                  to specify an infinite amount of "--kup-chart-color"
                  variables.</td
                >
                <td class="prevent-cr">
                  <span class="code-word">color</span>
                </td>
                <td class="text-cell">
                  <kup-text-field
                    full-width
                    id="chart-color-4"
                    @kupTextFieldInput="updateThemeVariable"
                  ></kup-text-field>
                </td>
              </tr>
              <tr>
                <td class="prevent-cr">
                  <span class="code-word">--kup-obj-cursor</span>
                </td>
                <td
                  >Sets the cursor style when the mouse hovers over an
                  object.</td
                >
                <td class="prevent-cr">
                  <span class="code-word">cursor</span>
                </td>
                <td class="text-cell">
                  <kup-text-field
                    full-width
                    id="obj-cursor"
                    @kupTextFieldInput="updateThemeVariable"
                  ></kup-text-field>
                </td>
              </tr>
            </tbody>
          </table>
          <table class="instruction-table" id="customstyle-tab">
            <thead>
              <tr>
                <th>Component</th>
                <th>Value</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td class="prevent-cr">
                  <span class="code-word">MASTER</span>
                </td>
                <td class="text-cell">
                  <kup-text-field
                    text-area
                    full-width
                    id="master"
                    @kupTextFieldInput="updateThemeCustomStyles"
                  ></kup-text-field
                ></td>
              </tr>
              <tr>
                <td class="prevent-cr">
                  <span class="code-word">KUP-AUTOCOMPLETE</span>
                </td>
                <td class="text-cell">
                  <kup-text-field
                    text-area
                    full-width
                    id="kup-autocomplete"
                    @kupTextFieldInput="updateThemeCustomStyles"
                  ></kup-text-field
                ></td>
              </tr>
              <tr>
                <td class="prevent-cr">
                  <span class="code-word">KUP-BADGE</span>
                </td>
                <td class="text-cell">
                  <kup-text-field
                    text-area
                    full-width
                    id="kup-badge"
                    @kupTextFieldInput="updateThemeCustomStyles"
                  ></kup-text-field
                ></td>
              </tr>
              <tr>
                <td class="prevent-cr">
                  <span class="code-word">KUP-BUTTON</span>
                </td>
                <td class="text-cell">
                  <kup-text-field
                    text-area
                    full-width
                    id="kup-button"
                    @kupTextFieldInput="updateThemeCustomStyles"
                  ></kup-text-field
                ></td>
              </tr>
              <tr>
                <td class="prevent-cr">
                  <span class="code-word">KUP-BOX</span>
                </td>
                <td class="text-cell">
                  <kup-text-field
                    text-area
                    full-width
                    id="kup-box"
                    @kupTextFieldInput="updateThemeCustomStyles"
                  ></kup-text-field
                ></td>
              </tr>
              <tr>
                <td class="prevent-cr">
                  <span class="code-word">KUP-CARD</span>
                </td>
                <td class="text-cell">
                  <kup-text-field
                    text-area
                    full-width
                    id="kup-card"
                    @kupTextFieldInput="updateThemeCustomStyles"
                  ></kup-text-field
                ></td>
              </tr>
              <tr>
                <td class="prevent-cr">
                  <span class="code-word">KUP-CHECKBOX</span>
                </td>
                <td class="text-cell">
                  <kup-text-field
                    text-area
                    full-width
                    id="kup-checkbox"
                    @kupTextFieldInput="updateThemeCustomStyles"
                  ></kup-text-field
                ></td>
              </tr>
              <tr>
                <td class="prevent-cr">
                  <span class="code-word">KUP-CHIP</span>
                </td>
                <td class="text-cell">
                  <kup-text-field
                    text-area
                    full-width
                    id="kup-chip"
                    @kupTextFieldInput="updateThemeCustomStyles"
                  ></kup-text-field
                ></td>
              </tr>
              <tr>
                <td class="prevent-cr">
                  <span class="code-word">KUP-COLOR-PICKER</span>
                </td>
                <td class="text-cell">
                  <kup-text-field
                    text-area
                    full-width
                    id="kup-color-picker"
                    @kupTextFieldInput="updateThemeCustomStyles"
                  ></kup-text-field
                ></td>
              </tr>
              <tr>
                <td class="prevent-cr">
                  <span class="code-word">KUP-COMBOBOX</span>
                </td>
                <td class="text-cell">
                  <kup-text-field
                    text-area
                    full-width
                    id="kup-combobox"
                    @kupTextFieldInput="updateThemeCustomStyles"
                  ></kup-text-field
                ></td>
              </tr>
              <tr>
                <td class="prevent-cr">
                  <span class="code-word">KUP-DATA-TABLE</span>
                </td>
                <td class="text-cell">
                  <kup-text-field
                    text-area
                    full-width
                    id="kup-data-table"
                    @kupTextFieldInput="updateThemeCustomStyles"
                  ></kup-text-field
                ></td>
              </tr>
              <tr>
                <td class="prevent-cr">
                  <span class="code-word">KUP-DATE-PICKER</span>
                </td>
                <td class="text-cell">
                  <kup-text-field
                    text-area
                    full-width
                    id="kup-date-picker"
                    @kupTextFieldInput="updateThemeCustomStyles"
                  ></kup-text-field
                ></td>
              </tr>
              <tr>
                <td class="prevent-cr">
                  <span class="code-word">KUP-DRAWER</span>
                </td>
                <td class="text-cell">
                  <kup-text-field
                    text-area
                    full-width
                    id="kup-drawer"
                    @kupTextFieldInput="updateThemeCustomStyles"
                  ></kup-text-field
                ></td>
              </tr>
              <tr>
                <td class="prevent-cr">
                  <span class="code-word">KUP-FIELD</span>
                </td>
                <td class="text-cell">
                  <kup-text-field
                    text-area
                    full-width
                    id="kup-field"
                    @kupTextFieldInput="updateThemeCustomStyles"
                  ></kup-text-field
                ></td>
              </tr>
              <tr>
                <td class="prevent-cr">
                  <span class="code-word">KUP-GAUGE</span>
                </td>
                <td class="text-cell">
                  <kup-text-field
                    text-area
                    full-width
                    id="kup-gauge"
                    @kupTextFieldInput="updateThemeCustomStyles"
                  ></kup-text-field
                ></td>
              </tr>
              <tr>
                <td class="prevent-cr">
                  <span class="code-word">KUP-GRID</span>
                </td>
                <td class="text-cell">
                  <kup-text-field
                    text-area
                    full-width
                    id="kup-grid"
                    @kupTextFieldInput="updateThemeCustomStyles"
                  ></kup-text-field
                ></td>
              </tr>
              <tr>
                <td class="prevent-cr">
                  <span class="code-word">KUP-IMAGE</span>
                </td>
                <td class="text-cell">
                  <kup-text-field
                    text-area
                    full-width
                    id="kup-image"
                    @kupTextFieldInput="updateThemeCustomStyles"
                  ></kup-text-field
                ></td>
              </tr>
              <tr>
                <td class="prevent-cr">
                  <span class="code-word">KUP-LAZY</span>
                </td>
                <td class="text-cell">
                  <kup-text-field
                    text-area
                    full-width
                    id="kup-lazy"
                    @kupTextFieldInput="updateThemeCustomStyles"
                  ></kup-text-field
                ></td>
              </tr>
              <tr>
                <td class="prevent-cr">
                  <span class="code-word">KUP-LIST</span>
                </td>
                <td class="text-cell">
                  <kup-text-field
                    text-area
                    full-width
                    id="kup-list"
                    @kupTextFieldInput="updateThemeCustomStyles"
                  ></kup-text-field
                ></td>
              </tr>
              <tr>
                <td class="prevent-cr">
                  <span class="code-word">KUP-NAV-BAR</span>
                </td>
                <td class="text-cell">
                  <kup-text-field
                    text-area
                    full-width
                    id="kup-nav-bar"
                    @kupTextFieldInput="updateThemeCustomStyles"
                  ></kup-text-field
                ></td>
              </tr>
              <tr>
                <td class="prevent-cr">
                  <span class="code-word">KUP-PROGRESS-BAR</span>
                </td>
                <td class="text-cell">
                  <kup-text-field
                    text-area
                    full-width
                    id="kup-progress-bar"
                    @kupTextFieldInput="updateThemeCustomStyles"
                  ></kup-text-field
                ></td>
              </tr>
              <tr>
                <td class="prevent-cr">
                  <span class="code-word">KUP-RADIO</span>
                </td>
                <td class="text-cell">
                  <kup-text-field
                    text-area
                    full-width
                    id="kup-radio"
                    @kupTextFieldInput="updateThemeCustomStyles"
                  ></kup-text-field
                ></td>
              </tr>
              <tr>
                <td class="prevent-cr">
                  <span class="code-word">KUP-RATING</span>
                </td>
                <td class="text-cell">
                  <kup-text-field
                    text-area
                    full-width
                    id="kup-rating"
                    @kupTextFieldInput="updateThemeCustomStyles"
                  ></kup-text-field
                ></td>
              </tr>
              <tr>
                <td class="prevent-cr">
                  <span class="code-word">KUP-SPINNER</span>
                </td>
                <td class="text-cell">
                  <kup-text-field
                    text-area
                    full-width
                    id="kup-spinner"
                    @kupTextFieldInput="updateThemeCustomStyles"
                  ></kup-text-field
                ></td>
              </tr>
              <tr>
                <td class="prevent-cr">
                  <span class="code-word">KUP-SWITCH</span>
                </td>
                <td class="text-cell">
                  <kup-text-field
                    text-area
                    full-width
                    id="kup-switch"
                    @kupTextFieldInput="updateThemeCustomStyles"
                  ></kup-text-field
                ></td>
              </tr>
              <tr>
                <td class="prevent-cr">
                  <span class="code-word">KUP-TAB-BAR</span>
                </td>
                <td class="text-cell">
                  <kup-text-field
                    text-area
                    full-width
                    id="kup-tab-bar"
                    @kupTextFieldInput="updateThemeCustomStyles"
                  ></kup-text-field
                ></td>
              </tr>
              <tr>
                <td class="prevent-cr">
                  <span class="code-word">KUP-TEXT-FIELD</span>
                </td>
                <td class="text-cell">
                  <kup-text-field
                    text-area
                    full-width
                    id="kup-text-field"
                    @kupTextFieldInput="updateThemeCustomStyles"
                  ></kup-text-field
                ></td>
              </tr>
              <tr>
                <td class="prevent-cr">
                  <span class="code-word">KUP-TIME-PICKER</span>
                </td>
                <td class="text-cell">
                  <kup-text-field
                    text-area
                    full-width
                    id="kup-time-picker"
                    @kupTextFieldInput="updateThemeCustomStyles"
                  ></kup-text-field
                ></td>
              </tr>
              <tr>
                <td class="prevent-cr">
                  <span class="code-word">KUP-TREE</span>
                </td>
                <td class="text-cell">
                  <kup-text-field
                    text-area
                    full-width
                    id="kup-tree"
                    @kupTextFieldInput="updateThemeCustomStyles"
                  ></kup-text-field
                ></td> </tr></tbody
          ></table>
          <table class="instruction-table" id="icons-tab">
            <thead>
              <tr>
                <th>Variable name</th>
                <th>Description</th>
                <th>Try it!</th>
              </tr> </thead
            ><tbody>
              <tr>
                <td class="prevent-cr">
                  <span class="code-word">--kup-ascending-icon</span>
                </td>
                <td> Used for ascending sorts. </td>
                <td class="text-cell">
                  <kup-text-field
                    full-width
                    id="ascending-icon"
                    @kupTextFieldInput="updateThemeIcons"
                  ></kup-text-field>
                </td>
              </tr>
              <tr>
                <td class="prevent-cr">
                  <span class="code-word">--kup-descending-icon</span>
                </td>
                <td> Used for descending sorts. </td>
                <td class="text-cell">
                  <kup-text-field
                    full-width
                    id="descending-icon"
                    @kupTextFieldInput="updateThemeIcons"
                  ></kup-text-field>
                </td>
              </tr>
              <tr>
                <td class="prevent-cr">
                  <span class="code-word">--kup-expanded-icon</span>
                </td>
                <td>Used when a node or a group are expanded.</td>
                <td class="text-cell">
                  <kup-text-field
                    full-width
                    id="expanded-icon"
                    @kupTextFieldInput="updateThemeIcons"
                  ></kup-text-field>
                </td>
              </tr>
              <tr>
                <td class="prevent-cr">
                  <span class="code-word">--kup-collapsed-icon</span>
                </td>
                <td>Used when a node or a group are collapsed.</td>
                <td class="text-cell">
                  <kup-text-field
                    full-width
                    id="collapsed-icon"
                    @kupTextFieldInput="updateThemeIcons"
                  ></kup-text-field>
                </td>
              </tr>
              <tr>
                <td class="prevent-cr">
                  <span class="code-word">--kup-clear-icon</span>
                </td>
                <td>Used when an element can be cleared or deleted.</td>
                <td class="text-cell">
                  <kup-text-field
                    full-width
                    id="clear-icon"
                    @kupTextFieldInput="updateThemeIcons"
                  ></kup-text-field>
                </td>
              </tr>
              <tr>
                <td class="prevent-cr">
                  <span class="code-word">--kup-filter-remove-icon</span>
                </td>
                <td>Used as a button to clear filters previously set.</td>
                <td class="text-cell">
                  <kup-text-field
                    full-width
                    id="filter-remove-icon"
                    @kupTextFieldInput="updateThemeIcons"
                  ></kup-text-field>
                </td> </tr
            ></tbody>
          </table>
          <div id="json-tab" class="sample-section" style="display: none">
            <textarea id="json-textarea" style="display: none"></textarea>
            <kup-button
              id="json-warning"
              icon="warning"
              title="Invalid JSON. Theme not set."
            ></kup-button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ThemingMaker',
  data() {
    return {
      tabs: [
        {
          text: 'CSS variables',
          icon: 'color_lens',
          title: "List of the current theme's variables",
        },
        {
          text: 'customStyles',
          icon: 'style',
          title: "List of the current theme's customStyles",
        },
        {
          text: 'Icons',
          icon: 'photo',
          title: "List of the current theme's icons",
        },
        {
          text: 'JSON',
          icon: 'json',
          title: 'The JSON of your theme',
        },
      ],
    };
  },
  methods: {
    updateThemeVariable(e) {
      const dom = document.documentElement;
      this.initTheme();

      dom.kupThemes['showcaseDemo']['cssVariables']['--kup-' + e.target.id] =
        e.detail.value;
      e.target.customStyle =
        '#kup-component .icon-container { background-color: ' +
        e.detail.value +
        ' }';

      this.refreshTheme();
    },

    updateThemeCustomStyles(e) {
      const dom = document.documentElement;
      this.initTheme();

      dom.kupThemes['showcaseDemo']['customStyles'][e.target.id.toUpperCase()] =
        e.detail.value;

      this.refreshTheme();
    },

    updateThemeIcons(e) {
      const dom = document.documentElement;
      this.initTheme();

      dom.kupThemes['showcaseDemo']['icons']['--kup-' + e.target.id] =
        e.detail.value;
      e.target.icon = e.detail.value;

      this.refreshTheme();
    },

    initTheme() {
      const dom = document.documentElement;

      if (!dom.kupThemes['showcaseDemo']) {
        dom.kupThemes['showcaseDemo'] = JSON.parse(
          JSON.stringify(dom.kupCurrentTheme)
        );
        if (!dom.kupThemes['showcaseDemo'].cssVariables) {
          dom.kupThemes['showcaseDemo'].cssVariables = {};
        }
        if (!dom.kupThemes['showcaseDemo'].customStyles) {
          dom.kupThemes['showcaseDemo'].customStyles = {};
        }
        if (!dom.kupThemes['showcaseDemo'].icons) {
          dom.kupThemes['showcaseDemo'].icons = {};
        }
      }

      const tile = document.querySelector('#showcaseDemo');
      if (!tile) {
        createTile();
      }
    },

    downloadTheme() {
      const dom = document.documentElement;
      var dataStr =
        'data:text/json;charset=utf-8,' +
        encodeURIComponent(
          JSON.stringify(dom.kupThemes['showcaseDemo'], null, 2)
        );
      var downloadAnchorNode = document.createElement('a');
      downloadAnchorNode.setAttribute('href', dataStr);
      downloadAnchorNode.setAttribute('download', 'your_theme.json');
      document.body.appendChild(downloadAnchorNode);
      downloadAnchorNode.click();
      downloadAnchorNode.remove();
    },

    deleteTheme() {
      const dom = document.documentElement;
      const tile = document.querySelector('#showcaseDemo');
      const actions = document.querySelector('#theme-action-demo');

      dom.setAttribute('kup-theme', 'ketchup');

      actions.classList.remove('visible');
      tile.remove();
      delete dom.kupThemes['showcaseDemo'];
    },

    refreshTheme() {
      const dom = document.documentElement;

      if (dom.getAttribute('kup-theme') === 'showcaseDemo') {
        dom.kupRefreshTheme();
      } else {
        dom.setAttribute('kup-theme', 'showcaseDemo');
      }
      updateTile();
    },

    handleTab(e) {
      let i = e.detail.index;
      let tabBar = document.querySelector('#demo-tab-bar');
      let cssVariablesTab = document.querySelector('#css-variables-tab');
      let customStyleTab = document.querySelector('#customstyle-tab');
      let iconsTab = document.querySelector('#icons-tab');
      let jsonTab = document.querySelector('#json-tab');

      cssVariablesTab.setAttribute('style', 'display: none;');
      customStyleTab.setAttribute('style', 'display: none;');
      iconsTab.setAttribute('style', 'display: none;');
      jsonTab.setAttribute('style', 'display: none;');

      switch (tabBar.data[i].text) {
        case 'CSS variables':
          cssVariablesTab.setAttribute('style', '');
          break;
        case 'customStyles':
          customStyleTab.setAttribute('style', '');
          break;
        case 'Icons':
          iconsTab.setAttribute('style', '');
          break;
        case 'JSON':
          jsonTab.setAttribute('style', '');
          this.initTheme();
          this.jsonSet();
          break;
      }
    },

    jsonSet() {
      const dom = document.documentElement;
      let jsonWarning = document.querySelector('#json-warning');
      let jsonTextarea = document.querySelector('#json-textarea');
      let codemirrorTextarea = document.querySelector('#json-tab .CodeMirror');
      let stringifiedJSON = JSON.stringify(
        dom.kupThemes['showcaseDemo'],
        null,
        2
      );
      if (jsonTextarea.value === stringifiedJSON) {
        return;
      } else {
        jsonTextarea.value = stringifiedJSON;
      }
      if (codemirrorTextarea) {
        codemirrorTextarea.remove();
      }
      CodeMirror.fromTextArea(jsonTextarea, {
        mode: { name: 'javascript', json: true },
        lineNumbers: true,
        lineWrapping: true,
        foldGutter: true,
        gutters: ['CodeMirror-linenumbers', 'CodeMirror-foldgutter'],
      }).on('change', function (cm) {
        cm.save();
        try {
          let jsonifiedData = JSON.parse(jsonTextarea.value);
          dom.kupThemes['showcaseDemo'] = jsonifiedData;
          dom.setAttribute('kup-theme', 'ketchup');
          dom.setAttribute('kup-theme', 'showcaseDemo');
          jsonWarning.classList.remove('visible');
        } catch (error) {
          jsonWarning.classList.add('visible');
        }
      });
    },
  },

  destroyed() {
    document.removeEventListener('kupThemeChange', initDemo);
  },

  mounted() {
    const dom = document.documentElement;
    let customStyleTab = document.querySelector('#customstyle-tab');
    let iconsTab = document.querySelector('#icons-tab');

    customStyleTab.setAttribute('style', 'display: none;');
    iconsTab.setAttribute('style', 'display: none;');

    if (document.documentElement.kupCurrentTheme) {
      initDemo();
    }

    document.addEventListener('kupThemeChange', initDemo);
  },
};

function initDemo() {
  const dom = document.documentElement;
  const theme = dom.kupCurrentTheme;
  const fields = document.querySelectorAll('#sample-comp kup-text-field');
  const tile = document.querySelector('#showcaseDemo');

  if (tile) {
    updateTile();
  } else if (dom.kupThemes['showcaseDemo']) {
    createTile();
  }

  for (let index = 0; index < fields.length; index++) {
    fields[index].customStyle = undefined;
    fields[index].icon = undefined;
    fields[index].initialValue = '';
  }

  let cssVariablesTab = document.querySelector('#css-variables-tab');
  for (let key in theme.cssVariables) {
    let variable = key.replace('--kup-', '');
    let field = cssVariablesTab.querySelector('#' + variable);
    try {
      if (key.indexOf('color') > -1) {
        field.icon = 'color_lens';
        field.customStyle =
          '#kup-component .icon-container { background-color: ' +
          theme.cssVariables[key] +
          ' }';
      }
      field.initialValue = theme.cssVariables[key];
    } catch (error) {
      console.warn("Couldn't set field for variable '" + key + "'.");
    }
  }

  let customStyleTab = document.querySelector('#customstyle-tab');
  for (let key in theme.customStyles) {
    let field = customStyleTab.querySelector('#' + key.toLowerCase());
    try {
      field.initialValue = theme.customStyles[key];
    } catch (error) {
      console.warn("Couldn't set field set customStyle '" + key + "'.");
    }
  }

  let iconsTab = document.querySelector('#icons-tab');
  for (let key in theme.icons) {
    let variable = key.replace('--kup-', '');
    let field = iconsTab.querySelector('#' + variable);
    try {
      field.icon = theme.icons[key];
      field.initialValue = theme.icons[key];
    } catch (error) {
      console.warn("Couldn't set field for icon '" + key + "'.");
    }
  }
}

function createTile() {
  const dom = document.documentElement;
  const themeContainer = document.querySelector('#theme-container-demo');
  let themeWrapper = document.createElement('div');
  let themeImage = document.createElement('kup-image');
  let themeText = document.createElement('div');
  themeWrapper.classList.add('icon-wrapper');
  themeWrapper.classList.add('theme-wrapper');
  themeWrapper.id = 'showcaseDemo';
  themeWrapper.onclick = function () {
    setDemoTheme();
  };
  themeWrapper.title = 'Toggle your theme';
  themeImage.sizeX = '70px';
  themeImage.sizeY = '70px';
  themeImage.resource = 'widgets';
  themeText.classList.add('icon-label');
  themeText.innerText = 'Your theme!';
  themeText.style.letterSpacing = '1.5px';
  themeWrapper.append(themeImage);
  themeWrapper.append(themeText);
  themeContainer.append(themeWrapper);
  updateTile();
}

function updateTile() {
  const dom = document.documentElement;
  var variables = dom.kupThemes['showcaseDemo'].cssVariables;
  let themeWrapper = document.querySelector('#showcaseDemo');
  let themeImage = document.querySelector('#showcaseDemo kup-image');
  let themeText = document.querySelector('#showcaseDemo .icon-label');
  if (variables) {
    themeWrapper.style.backgroundColor = variables['--kup-background-color'];
    themeWrapper.style.borderColor = variables['--kup-border-color'];
    themeImage.color = variables['--kup-main-color'];
    themeText.style.color = variables['--kup-text-color'];
    themeText.style.fontFamily = variables['--kup-font-family'];
    themeText.style.fontSize = variables['--kup-font-size'];
  }
  const actions = document.querySelector('#theme-action-demo');
  actions.classList.add('visible');
}

function setDemoTheme() {
  let dom = document.documentElement;
  dom.setAttribute('kup-theme', 'showcaseDemo');
}
</script>
