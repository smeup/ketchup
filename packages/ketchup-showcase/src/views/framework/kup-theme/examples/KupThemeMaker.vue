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
        @kup-button-click="downloadTheme"
      ></kup-button>
      <kup-button title="Delete" icon="delete" @kup-button-click="deleteTheme"
    /></div>
    <div id="sample-wrapper" class="theming">
      <div id="sample-specs">
        <kup-tab-bar
          id="demo-tab-bar"
          :data.prop="tabs"
          @kup-tabbar-click="tabSelection"
        ></kup-tab-bar>
        <div id="sample-comp" class="full">
          <table
            class="instruction-table sample-section"
            id="css-variables-tab"
          >
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
                  <span class="code-word">--kup-primary-color</span>
                </td>
                <td>
                  Sets the primary color of the app, changing components
                  accordingly.
                </td>
                <td class="prevent-cr">
                  <span class="code-word">color</span>
                </td>
                <td class="text-cell">
                  <kup-color-picker
                    id="primary-color"
                    :data.prop="colorPickerData"
                    @kup-colorpicker-input="updateVariable"
                    @kup-colorpicker-change="updateVariable"
                  ></kup-color-picker>
                </td>
              </tr>
              <tr>
                <td class="prevent-cr">
                  <span class="code-word">--kup-secondary-color</span>
                </td>
                <td>
                  Sets the secondary color of the app, usable by specifying the
                  .kup-secondary class to kup components.
                </td>
                <td class="prevent-cr">
                  <span class="code-word">color</span>
                </td>
                <td class="text-cell">
                  <kup-color-picker
                    id="secondary-color"
                    :data.prop="colorPickerData"
                    @kup-colorpicker-input="updateVariable"
                    @kup-colorpicker-change="updateVariable"
                  ></kup-color-picker>
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
                  <kup-color-picker
                    id="background-color"
                    :data.prop="colorPickerData"
                    @kup-colorpicker-input="updateVariable"
                    @kup-colorpicker-change="updateVariable"
                  ></kup-color-picker>
                </td>
              </tr>
              <tr>
                <td class="prevent-cr">
                  <span class="code-word">--kup-navbar-background-color</span>
                </td>
                <td>Sets the background color of the header/nav bar.</td>
                <td class="prevent-cr">
                  <span class="code-word">color</span>
                </td>
                <td class="text-cell">
                  <kup-color-picker
                    id="navbar-background-color"
                    :data.prop="colorPickerData"
                    @kup-colorpicker-input="updateVariable"
                    @kup-colorpicker-change="updateVariable"
                  ></kup-color-picker>
                </td>
              </tr>
              <tr>
                <td class="prevent-cr">
                  <span class="code-word">--kup-navbar-color</span>
                </td>
                <td
                  >Sets the color for slotted content. To achieve a more
                  predictable result, it is suggested to set the wanted colors
                  directly on the slots.</td
                >
                <td class="prevent-cr">
                  <span class="code-word">color</span>
                </td>
                <td class="text-cell">
                  <kup-color-picker
                    id="navbar-color"
                    :data.prop="colorPickerData"
                    @kup-colorpicker-input="updateVariable"
                    @kup-colorpicker-change="updateVariable"
                  ></kup-color-picker>
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
                  <kup-color-picker
                    id="drawer-background-color"
                    :data.prop="colorPickerData"
                    @kup-colorpicker-input="updateVariable"
                    @kup-colorpicker-change="updateVariable"
                  ></kup-color-picker>
                </td>
              </tr>
              <tr>
                <td class="prevent-cr">
                  <span class="code-word">--kup-drawer-color</span>
                </td>
                <td
                  >Sets the color for slotted content. To achieve a more
                  predictable result, it is suggested to set the wanted colors
                  directly on the slots.</td
                >
                <td class="prevent-cr">
                  <span class="code-word">color</span>
                </td>
                <td class="text-cell">
                  <kup-color-picker
                    id="drawer-color"
                    :data.prop="colorPickerData"
                    @kup-colorpicker-input="updateVariable"
                    @kup-colorpicker-change="updateVariable"
                  ></kup-color-picker>
                </td>
              </tr>
              <tr>
                <td class="prevent-cr">
                  <span class="code-word">--kup-navbar-height</span>
                </td>
                <td
                  >Sets the height of the nav bar (any valid CSS unit can be
                  used - vw, px, em, etc.).</td
                >
                <td class="prevent-cr">
                  <span class="code-word">size</span>
                </td>
                <td class="text-cell">
                  <kup-text-field
                    id="navbar-height"
                    @kup-textfield-input="updateVariable"
                  ></kup-text-field>
                </td>
              </tr>
              <tr>
                <td class="prevent-cr">
                  <span class="code-word">--kup-drawer-width</span>
                </td>
                <td
                  >Sets the width of the drawer (any valid CSS unit can be used
                  - vw, px, em, etc.).</td
                >
                <td class="prevent-cr">
                  <span class="code-word">size</span>
                </td>
                <td class="text-cell">
                  <kup-text-field
                    id="drawer-width"
                    @kup-textfield-input="updateVariable"
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
                    id="font-family"
                    @kup-textfield-input="updateVariable"
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
                    id="font-family-monospace"
                    @kup-textfield-input="updateVariable"
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
                    id="font-size"
                    @kup-textfield-input="updateVariable"
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
                  <kup-color-picker
                    id="text-color"
                    :data.prop="colorPickerData"
                    @kup-colorpicker-input="updateVariable"
                    @kup-colorpicker-change="updateVariable"
                  ></kup-color-picker>
                </td>
              </tr>
              <tr>
                <td class="prevent-cr">
                  <span class="code-word">--kup-text-on-primary-color</span>
                </td>
                <td>
                  Sets the color of text displayed above the primary color, keep
                  in mind readability when setting this!
                </td>
                <td class="prevent-cr">
                  <span class="code-word">color</span>
                </td>
                <td class="text-cell">
                  <kup-color-picker
                    id="text-on-primary-color"
                    :data.prop="colorPickerData"
                    @kup-colorpicker-input="updateVariable"
                    @kup-colorpicker-change="updateVariable"
                  ></kup-color-picker>
                </td>
              </tr>
              <tr>
                <td class="prevent-cr">
                  <span class="code-word">--kup-text-on-secondary-color</span>
                </td>
                <td>
                  Sets the color of text displayed above the secondary color,
                  keep in mind readability when setting this!
                </td>
                <td class="prevent-cr">
                  <span class="code-word">color</span>
                </td>
                <td class="text-cell">
                  <kup-color-picker
                    id="text-on-secondary-color"
                    :data.prop="colorPickerData"
                    @kup-colorpicker-input="updateVariable"
                    @kup-colorpicker-change="updateVariable"
                  ></kup-color-picker>
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
                  <kup-color-picker
                    id="disabled-background-color"
                    :data.prop="colorPickerData"
                    @kup-colorpicker-input="updateVariable"
                    @kup-colorpicker-change="updateVariable"
                  ></kup-color-picker>
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
                  <kup-color-picker
                    id="disabled-color"
                    :data.prop="colorPickerData"
                    @kup-colorpicker-input="updateVariable"
                    @kup-colorpicker-change="updateVariable"
                  ></kup-color-picker>
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
                  <kup-color-picker
                    id="hover-background-color"
                    :data.prop="colorPickerData"
                    @kup-colorpicker-input="updateVariable"
                    @kup-colorpicker-change="updateVariable"
                  ></kup-color-picker>
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
                  <kup-color-picker
                    id="hover-color"
                    :data.prop="colorPickerData"
                    @kup-colorpicker-input="updateVariable"
                    @kup-colorpicker-change="updateVariable"
                  ></kup-color-picker>
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
                  <kup-color-picker
                    id="title-background-color"
                    :data.prop="colorPickerData"
                    @kup-colorpicker-input="updateVariable"
                    @kup-colorpicker-change="updateVariable"
                  ></kup-color-picker>
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
                  <kup-color-picker
                    id="title-color"
                    :data.prop="colorPickerData"
                    @kup-colorpicker-input="updateVariable"
                    @kup-colorpicker-change="updateVariable"
                  ></kup-color-picker>
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
                  <kup-color-picker
                    id="icon-color"
                    :data.prop="colorPickerData"
                    @kup-colorpicker-input="updateVariable"
                    @kup-colorpicker-change="updateVariable"
                  ></kup-color-picker>
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
                  <kup-color-picker
                    id="border-color"
                    :data.prop="colorPickerData"
                    @kup-colorpicker-input="updateVariable"
                    @kup-colorpicker-change="updateVariable"
                  ></kup-color-picker>
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
                    id="box-shadow"
                    @kup-textfield-input="updateVariable"
                  ></kup-text-field>
                </td>
              </tr>
              <tr>
                <td class="prevent-cr">
                  <span class="code-word">--kup-info-color</span>
                </td>
                <td
                  >Sets the color which defines an informational status within
                  the app.</td
                >
                <td class="prevent-cr">
                  <span class="code-word">color</span>
                </td>
                <td class="text-cell">
                  <kup-color-picker
                    id="info-color"
                    :data.prop="colorPickerData"
                    @kup-colorpicker-input="updateVariable"
                    @kup-colorpicker-change="updateVariable"
                  ></kup-color-picker>
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
                  <kup-color-picker
                    id="success-color"
                    :data.prop="colorPickerData"
                    @kup-colorpicker-input="updateVariable"
                    @kup-colorpicker-change="updateVariable"
                  ></kup-color-picker>
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
                  <kup-color-picker
                    id="warning-color"
                    :data.prop="colorPickerData"
                    @kup-colorpicker-input="updateVariable"
                    @kup-colorpicker-change="updateVariable"
                  ></kup-color-picker>
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
                  <kup-color-picker
                    id="danger-color"
                    :data.prop="colorPickerData"
                    @kup-colorpicker-input="updateVariable"
                    @kup-colorpicker-change="updateVariable"
                  ></kup-color-picker>
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
                  <kup-color-picker
                    id="spinner-color"
                    :data.prop="colorPickerData"
                    @kup-colorpicker-input="updateVariable"
                    @kup-colorpicker-change="updateVariable"
                  ></kup-color-picker>
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
                  <kup-color-picker
                    id="chart-color-1"
                    :data.prop="colorPickerData"
                    @kup-colorpicker-input="updateVariable"
                    @kup-colorpicker-change="updateVariable"
                  ></kup-color-picker>
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
                  <kup-color-picker
                    id="chart-color-2"
                    :data.prop="colorPickerData"
                    @kup-colorpicker-input="updateVariable"
                    @kup-colorpicker-change="updateVariable"
                  ></kup-color-picker>
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
                  <kup-color-picker
                    id="chart-color-3"
                    :data.prop="colorPickerData"
                    @kup-colorpicker-input="updateVariable"
                    @kup-colorpicker-change="updateVariable"
                  ></kup-color-picker>
                </td>
              </tr>
              <tr>
                <td class="prevent-cr">
                  <span class="code-word">--kup-chart-color-4</span>
                </td>
                <td
                  >Sets the fourth color of kup-chart and so on. It is possible
                  to specify an infinite amount of "--kup-chart-color" variables
                  (use the JSON tab to add as many as you like).</td
                >
                <td class="prevent-cr">
                  <span class="code-word">color</span>
                </td>
                <td class="text-cell">
                  <kup-color-picker
                    id="chart-color-4"
                    :data.prop="colorPickerData"
                    @kup-colorpicker-input="updateVariable"
                    @kup-colorpicker-change="updateVariable"
                  ></kup-color-picker>
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
                    id="obj-cursor"
                    @kup-textfield-input="updateVariable"
                  ></kup-text-field>
                </td>
              </tr>
              <tr>
                <td class="prevent-cr">
                  <span class="code-word">--kup-card-zindex</span>
                </td>
                <td
                  >Sets the z-index for kup-card. Should be set accordingly to
                  the app using the component.</td
                >
                <td class="prevent-cr">
                  <span class="code-word">z-index</span>
                </td>
                <td class="text-cell">
                  <kup-text-field
                    id="card-zindex"
                    input-type="number"
                    @kup-textfield-input="updateVariable"
                  ></kup-text-field>
                </td>
              </tr>
              <tr>
                <td class="prevent-cr">
                  <span class="code-word">--kup-drawer-zindex</span>
                </td>
                <td
                  >Sets the z-index for kup-drawer. Should be set accordingly to
                  the app using the component.</td
                >
                <td class="prevent-cr">
                  <span class="code-word">z-index</span>
                </td>
                <td class="text-cell">
                  <kup-text-field
                    id="drawer-zindex"
                    input-type="number"
                    @kup-textfield-input="updateVariable"
                  ></kup-text-field>
                </td>
              </tr>
              <tr>
                <td class="prevent-cr">
                  <span class="code-word">--kup-navbar-zindex</span>
                </td>
                <td
                  >Sets the z-index for kup-nav-bar. Should be set accordingly
                  to the app using the component.</td
                >
                <td class="prevent-cr">
                  <span class="code-word">z-index</span>
                </td>
                <td class="text-cell">
                  <kup-text-field
                    id="navbar-zindex"
                    input-type="number"
                    @kup-textfield-input="updateVariable"
                  ></kup-text-field>
                </td>
              </tr>
            </tbody>
          </table>
          <table class="instruction-table sample-section" id="customstyle-tab">
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
                    id="master"
                    @kup-textfield-input="updateCustomStyles"
                  ></kup-text-field
                ></td>
              </tr>
              <tr>
                <td class="prevent-cr">
                  <span class="code-word">KUP-ACCORDION</span>
                </td>
                <td class="text-cell">
                  <kup-text-field
                    text-area
                    id="kup-accordion"
                    @kup-textfield-input="updateCustomStyles"
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
                    id="kup-autocomplete"
                    @kup-textfield-input="updateCustomStyles"
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
                    id="kup-badge"
                    @kup-textfield-input="updateCustomStyles"
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
                    id="kup-box"
                    @kup-textfield-input="updateCustomStyles"
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
                    id="kup-button"
                    @kup-textfield-input="updateCustomStyles"
                  ></kup-text-field
                ></td>
              </tr>
              <tr>
                <td class="prevent-cr">
                  <span class="code-word">KUP-BUTTON-LIST</span>
                </td>
                <td class="text-cell">
                  <kup-text-field
                    text-area
                    id="kup-button-list"
                    @kup-textfield-input="updateCustomStyles"
                  ></kup-text-field
                ></td>
              </tr>
              <tr>
                <td class="prevent-cr">
                  <span class="code-word">KUP-CALENDAR</span>
                </td>
                <td class="text-cell">
                  <kup-text-field
                    text-area
                    id="kup-calendar"
                    @kup-textfield-input="updateCustomStyles"
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
                    id="kup-card"
                    @kup-textfield-input="updateCustomStyles"
                  ></kup-text-field
                ></td>
              </tr>
              <tr>
                <td class="prevent-cr">
                  <span class="code-word">KUP-CELL</span>
                </td>
                <td class="text-cell">
                  <kup-text-field
                    text-area
                    id="kup-cell"
                    @kup-textfield-input="updateCustomStyles"
                  ></kup-text-field
                ></td>
              </tr>
              <tr>
                <td class="prevent-cr">
                  <span class="code-word">KUP-CHART</span>
                </td>
                <td class="text-cell">
                  <kup-text-field
                    text-area
                    id="kup-chart"
                    @kup-textfield-input="updateCustomStyles"
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
                    id="kup-checkbox"
                    @kup-textfield-input="updateCustomStyles"
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
                    id="kup-chip"
                    @kup-textfield-input="updateCustomStyles"
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
                    id="kup-color-picker"
                    @kup-textfield-input="updateCustomStyles"
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
                    id="kup-combobox"
                    @kup-textfield-input="updateCustomStyles"
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
                    id="kup-data-table"
                    @kup-textfield-input="updateCustomStyles"
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
                    id="kup-date-picker"
                    @kup-textfield-input="updateCustomStyles"
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
                    id="kup-drawer"
                    @kup-textfield-input="updateCustomStyles"
                  ></kup-text-field
                ></td>
              </tr>
              <tr>
                <td class="prevent-cr">
                  <span class="code-word">KUP-DROPDOWN-BUTTON</span>
                </td>
                <td class="text-cell">
                  <kup-text-field
                    text-area
                    id="kup-dropdown-button"
                    @kup-textfield-input="updateCustomStyles"
                  ></kup-text-field
                ></td>
              </tr>
              <tr>
                <td class="prevent-cr">
                  <span class="code-word">KUP-ECHART</span>
                </td>
                <td class="text-cell">
                  <kup-text-field
                    text-area
                    full-width
                    id="kup-echart"
                    @kup-textfield-input="updateCustomStyles"
                  ></kup-text-field
                ></td>
              </tr>
              <tr>
                <td class="prevent-cr">
                  <span class="code-word">KUP-FAMILY-TREE</span>
                </td>
                <td class="text-cell">
                  <kup-text-field
                    text-area
                    id="kup-family-tree"
                    @kup-textfield-input="updateCustomStyles"
                  ></kup-text-field
                ></td>
              </tr>
              <tr>
                <td class="prevent-cr">
                  <span class="code-word">KUP-FORM</span>
                </td>
                <td class="text-cell">
                  <kup-text-field
                    text-area
                    id="kup-form"
                    @kup-textfield-input="updateCustomStyles"
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
                    id="kup-gauge"
                    @kup-textfield-input="updateCustomStyles"
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
                    id="kup-grid"
                    @kup-textfield-input="updateCustomStyles"
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
                    id="kup-image"
                    @kup-textfield-input="updateCustomStyles"
                  ></kup-text-field
                ></td>
              </tr>
              <tr>
                <td class="prevent-cr">
                  <span class="code-word">KUP-IMAGE-LIST</span>
                </td>
                <td class="text-cell">
                  <kup-text-field
                    text-area
                    id="kup-image-list"
                    @kup-textfield-input="updateCustomStyles"
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
                    id="kup-lazy"
                    @kup-textfield-input="updateCustomStyles"
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
                    id="kup-list"
                    @kup-textfield-input="updateCustomStyles"
                  ></kup-text-field
                ></td>
              </tr>
              <tr>
                <td class="prevent-cr">
                  <span class="code-word">KUP-MAGIC-BOX</span>
                </td>
                <td class="text-cell">
                  <kup-text-field
                    text-area
                    id="kup-magic-box"
                    @kup-textfield-input="updateCustomStyles"
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
                    id="kup-nav-bar"
                    @kup-textfield-input="updateCustomStyles"
                  ></kup-text-field
                ></td>
              </tr>
              <tr>
                <td class="prevent-cr">
                  <span class="code-word">KUP-NUMERIC-PICKER</span>
                </td>
                <td class="text-cell">
                  <kup-text-field
                    text-area
                    id="kup-numeric-picker"
                    @kup-textfield-input="updateCustomStyles"
                  ></kup-text-field
                ></td>
              </tr>
              <tr>
                <td class="prevent-cr">
                  <span class="code-word">KUP-PHOTO-FRAME</span>
                </td>
                <td class="text-cell">
                  <kup-text-field
                    text-area
                    id="kup-photo-frame"
                    @kup-textfield-input="updateCustomStyles"
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
                    id="kup-progress-bar"
                    @kup-textfield-input="updateCustomStyles"
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
                    id="kup-radio"
                    @kup-textfield-input="updateCustomStyles"
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
                    id="kup-rating"
                    @kup-textfield-input="updateCustomStyles"
                  ></kup-text-field
                ></td>
              </tr>
              <tr>
                <td class="prevent-cr">
                  <span class="code-word">KUP-SNACKBAR</span>
                </td>
                <td class="text-cell">
                  <kup-text-field
                    text-area
                    id="kup-snackbar"
                    @kup-textfield-input="updateCustomStyles"
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
                    id="kup-spinner"
                    @kup-textfield-input="updateCustomStyles"
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
                    id="kup-switch"
                    @kup-textfield-input="updateCustomStyles"
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
                    id="kup-tab-bar"
                    @kup-textfield-input="updateCustomStyles"
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
                    id="kup-text-field"
                    @kup-textfield-input="updateCustomStyles"
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
                    id="kup-time-picker"
                    @kup-textfield-input="updateCustomStyles"
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
                    id="kup-tree"
                    @kup-textfield-input="updateCustomStyles"
                  ></kup-text-field
                ></td> </tr></tbody
          ></table>
          <table class="instruction-table sample-section" id="icons-tab">
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
                    id="ascending-icon"
                    @kup-textfield-input="updateIcons"
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
                    id="descending-icon"
                    @kup-textfield-input="updateIcons"
                  ></kup-text-field>
                </td>
              </tr>
              <tr>
                <td class="prevent-cr">
                  <span class="code-word">--kup-expanded-icon</span>
                </td>
                <td>Used when a node/group is expanded.</td>
                <td class="text-cell">
                  <kup-text-field
                    id="expanded-icon"
                    @kup-textfield-input="updateIcons"
                  ></kup-text-field>
                </td>
              </tr>
              <tr>
                <td class="prevent-cr">
                  <span class="code-word">--kup-collapsed-icon</span>
                </td>
                <td>Used when a node/group is collapsed.</td>
                <td class="text-cell">
                  <kup-text-field
                    id="collapsed-icon"
                    @kup-textfield-input="updateIcons"
                  ></kup-text-field>
                </td>
              </tr>
              <tr>
                <td class="prevent-cr">
                  <span class="code-word">--kup-dropdown-icon</span>
                </td>
                <td>Used in dropdown fields/items.</td>
                <td class="text-cell">
                  <kup-text-field
                    id="dropdown-icon"
                    @kup-textfield-input="updateIcons"
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
                    id="clear-icon"
                    @kup-textfield-input="updateIcons"
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
                    id="filter-remove-icon"
                    @kup-textfield-input="updateIcons"
                  ></kup-text-field>
                </td>
              </tr>
              <tr>
                <td class="prevent-cr">
                  <span class="code-word">--kup-key-icon</span>
                </td>
                <td>Used to identify a key.</td>
                <td class="text-cell">
                  <kup-text-field
                    id="key-icon"
                    @kup-textfield-input="updateIcons"
                  ></kup-text-field>
                </td>
              </tr>
              <tr>
                <td class="prevent-cr">
                  <span class="code-word">--kup-search-icon</span>
                </td>
                <td>Used in search-related fields.</td>
                <td class="text-cell">
                  <kup-text-field
                    id="search-icon"
                    @kup-textfield-input="updateIcons"
                  ></kup-text-field>
                </td> </tr
            ></tbody>
          </table>
          <div id="json-tab" class="sample-section">
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

<script lang="ts">
import type { KupColorPickerEventPayload } from '@sme.up/ketchup/dist/types/components/kup-color-picker/kup-color-picker-declarations';
import type { KupDom } from '@sme.up/ketchup/dist/types/managers/kup-manager/kup-manager-declarations';
import type { KupTabBarEventPayload } from '@sme.up/ketchup/dist/types/components/kup-tab-bar/kup-tab-bar-declarations';
import type { KupTextFieldEventPayload } from '@sme.up/ketchup/dist/types/components/kup-text-field/kup-text-field-declarations';
import type {
  KupThemeCSSVariables,
  KupThemeElement,
  KupThemeJSON,
} from '@sme.up/ketchup/dist/types/managers/kup-theme/kup-theme-declarations';

enum ThemeMakerTabs {
  VARIABLES = 'CSS variables',
  CUSTOM_STYLES = 'customStyles',
  ICONS = 'Icons',
  JSON = 'JSON',
}

// Recurring CSS classes
const visibleClass: string = 'visible';
// Name of the theme in creation
const temporaryTheme: string = 'showcaseDemo';

const dom: KupDom = document.documentElement as KupDom;

// Navigation tab bar
var tabBar: HTMLKupTabBarElement = null,
  // Views
  variablesView: HTMLElement = null,
  customStyleView: HTMLElement = null,
  iconsView: HTMLElement = null,
  jsonView: HTMLElement = null,
  // Textareas
  jsonTextarea: HTMLTextAreaElement = null,
  // Container of the theme in cretion's tile
  themeContainer: HTMLElement = null,
  // Wrapper for the tile actions
  themeActions: HTMLElement = null,
  // JSON tab sub-components
  jsonWarning: HTMLKupButtonElement = null;

export default {
  name: 'ThemingMaker',
  data() {
    return {
      colorPickerData: { 'kup-text-field': { fullWidth: true } },
      tabs: [
        {
          icon: 'color_lens',
          id: ThemeMakerTabs.VARIABLES,
          title: "List of the current theme's variables",
          value: ThemeMakerTabs.VARIABLES,
        },
        {
          icon: 'style',
          id: ThemeMakerTabs.CUSTOM_STYLES,
          title: "List of the current theme's customStyles",
          value: ThemeMakerTabs.CUSTOM_STYLES,
        },
        {
          icon: 'photo',
          id: ThemeMakerTabs.ICONS,
          title: "List of the current theme's icons",
          value: ThemeMakerTabs.ICONS,
        },
        {
          icon: 'json',
          id: ThemeMakerTabs.JSON,
          title: 'The JSON of your theme',
          value: ThemeMakerTabs.JSON,
        },
      ],
    };
  },
  mounted() {
    this.initVariables();
    this.handleTab(0);

    if (dom.ketchup) {
      this.initWidget();
    }

    document.addEventListener('kup-theme-change', this.initWidget);
  },
  destroyed() {
    document.removeEventListener('kup-theme-change', this.initWidget);
  },
  methods: {
    /**
     * Initializes Vue component's variables.
     */
    initVariables(): void {
      tabBar = document.querySelector('#demo-tab-bar');
      variablesView = document.querySelector('#css-variables-tab');
      customStyleView = document.querySelector('#customstyle-tab');
      iconsView = document.querySelector('#icons-tab');
      jsonView = document.querySelector('#json-tab');
      jsonTextarea = document.querySelector('#json-textarea');
      jsonWarning = document.querySelector('#json-warning');
      themeContainer = document.querySelector('#theme-container-demo');
      themeActions = document.querySelector('#theme-action-demo');
    },
    /**
     * Checks whether the theme in creation is still to be iniziatilized (or its tile).
     * When theme or tile are missing, they are created.
     */
    initTheme(): void {
      const list: KupThemeJSON = { ...dom.ketchup.theme.list };
      if (!list[temporaryTheme]) {
        list[temporaryTheme] = JSON.parse(
          JSON.stringify(dom.ketchup.theme.list[dom.ketchup.theme.name])
        );
        if (!list[temporaryTheme].cssVariables) {
          list[temporaryTheme].cssVariables = {} as any;
        }
        if (!list[temporaryTheme].customStyles) {
          list[temporaryTheme].customStyles = {} as any;
        }
        if (!list[temporaryTheme].icons) {
          list[temporaryTheme].icons = {} as any;
        }
        dom.ketchup.theme.set(null, list);
      }
      const tile: HTMLElement = document.querySelector('#' + temporaryTheme);
      if (!tile) {
        this.createTile();
      }
    },
    /**
     * Updates the value of the updated variable for the theme in creation.
     * @param {CustomEvent<KupTextFieldEventPayload|KupColorPickerEventPayload>} e - Event fired by a CSS variables-related color picker or text field.
     */
    updateVariable(
      e: CustomEvent<KupTextFieldEventPayload | KupColorPickerEventPayload>
    ): void {
      this.initTheme();
      const list: KupThemeJSON = { ...dom.ketchup.theme.list };
      list[temporaryTheme].cssVariables['--kup-' + e.detail.id] =
        e.detail.value;
      dom.ketchup.theme.set(null, list);
      e.detail.comp.customStyle =
        '#kup-component .kup-icon { background-color: ' + e.detail.value + ' }';
      this.refreshTheme();
    },
    /**
     * Updates the value of the updated custom style for the theme in creation.
     * @param {CustomEvent<KupTextFieldEventPayload>} e - Event fired by a customStyle-related text field.
     */
    updateCustomStyles(e: CustomEvent<KupTextFieldEventPayload>): void {
      this.initTheme();
      const list: KupThemeJSON = { ...dom.ketchup.theme.list };
      list[temporaryTheme].customStyles[e.detail.id.toUpperCase()] =
        e.detail.value;
      dom.ketchup.theme.set(null, list);
      this.refreshTheme();
    },
    /**
     * Updates the value of the updated icon for the theme in creation.
     * @param {CustomEvent<KupTextFieldEventPayload>} e - Event fired by an icon-related text field.
     */
    updateIcons(e: CustomEvent<KupTextFieldEventPayload>): void {
      this.initTheme();
      const list: KupThemeJSON = { ...dom.ketchup.theme.list };
      list[temporaryTheme].icons['--kup-' + e.detail.id] = e.detail.value;
      dom.ketchup.theme.set(null, list);
      (e.detail.comp as HTMLKupTextFieldElement).icon = e.detail.value;
      this.refreshTheme();
    },
    /**
     * Downloads the theme in creation in JSON format.
     */
    downloadTheme(): void {
      const stingifiedJson: string =
        'data:text/json;charset=utf-8,' +
        encodeURIComponent(
          JSON.stringify(dom.ketchup.theme.list[temporaryTheme], null, 2)
        );
      const downloadEl: HTMLAnchorElement = document.createElement('a');
      downloadEl.setAttribute('href', stingifiedJson);
      downloadEl.setAttribute('download', 'your_theme.json');
      document.body.appendChild(downloadEl);
      downloadEl.click();
      downloadEl.remove();
    },
    /**
     * Deletes the theme in creation.
     */
    deleteTheme(): void {
      const list: KupThemeJSON = { ...dom.ketchup.theme.list };
      const tile: HTMLElement = document.querySelector('#' + temporaryTheme);
      themeActions.classList.remove(visibleClass);
      tile.remove();
      delete list[temporaryTheme];
      dom.ketchup.theme.set('ketchup', list);
    },
    /**
     * Sets the theme in creation as active, or refreshes it in order to trigger components' own refreshes when is already active.
     */
    refreshTheme(): void {
      if (dom.ketchup.theme.name === temporaryTheme) {
        dom.ketchup.theme.refresh();
      } else {
        dom.ketchup.theme.set(temporaryTheme);
      }
      this.updateTile();
    },
    /**
     * Swaps between different tabs on click.
     * @param {CustomEvent<KupTextFieldEventPayload>} e - kup-tab-bar click event.
     */
    tabSelection(e: CustomEvent<KupTabBarEventPayload>): void {
      this.handleTab(e.detail.index);
    },
    /**
     * Enables the view related to the given tab index.
     * @param {number} i - Index of the tab to select.
     */
    handleTab(i: number): void {
      variablesView.classList.remove(visibleClass);
      customStyleView.classList.remove(visibleClass);
      iconsView.classList.remove(visibleClass);
      jsonView.classList.remove(visibleClass);

      switch (tabBar.data[i].value) {
        case ThemeMakerTabs.VARIABLES:
          variablesView.classList.add(visibleClass);
          break;
        case ThemeMakerTabs.CUSTOM_STYLES:
          customStyleView.classList.add(visibleClass);
          break;
        case ThemeMakerTabs.ICONS:
          iconsView.classList.add(visibleClass);
          break;
        case ThemeMakerTabs.JSON:
          jsonView.classList.add(visibleClass);
          this.initTheme();
          this.prepareJsonView();
          break;
      }
    },
    /**
     * When the theme doesn't exist, this method retrieves the json data of the active theme, creating an instance of the theme in creation.
     * Otherwise, the json displayed will be the one associated with the theme in creation.
     */
    prepareJsonView(): void {
      const list: KupThemeJSON = { ...dom.ketchup.theme.list };
      const codemirrorTextarea: HTMLElement = document.querySelector(
        '#json-tab .CodeMirror'
      );
      const stringifiedJSON: string = JSON.stringify(
        list[temporaryTheme],
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
      //@ts-ignore
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
          list[temporaryTheme] = jsonifiedData;
          dom.ketchup.theme.set(temporaryTheme, list);
          jsonWarning.classList.remove('visible');
        } catch (error) {
          jsonWarning.classList.add('visible');
        }
      });
    },
    /**
     * Initializes the theme maker widget by setting all the values to the related components.
     */
    initWidget(): void {
      const theme: KupThemeElement =
        dom.ketchup.theme.list[dom.ketchup.theme.name];
      const tile: HTMLElement = document.querySelector('#' + temporaryTheme);

      if (tile) {
        this.updateTile();
      } else if (dom.ketchup.theme.list[temporaryTheme]) {
        this.createTile();
      }

      // Clears all components.
      const fields: NodeListOf<HTMLElement> = document.querySelectorAll(
        '#css-variables-tab kup-color-picker, #css-variables-tab kup-text-field, #customstyle-tab kup-color-picker, #customstyle-tab kup-text-field, #icons-tab kup-color-picker, #icons-tab kup-text-field'
      );
      for (let index = 0; index < fields.length; index++) {
        const field = fields[index];
        if (document.activeElement.id !== field.id) {
          (field as HTMLKupTextFieldElement).setValue('');
        }
      }
      // Sets the variables components.
      for (let key in theme.cssVariables) {
        const variable: string = key.replace('--kup-', '');
        const field: HTMLKupTextFieldElement = variablesView.querySelector(
          '#' + variable
        );
        try {
          if (document.activeElement.id !== field.id) {
            field.setValue(theme.cssVariables[key]);
          }
        } catch (error) {
          console.warn("Couldn't set field for variable '" + key + "'.");
        }
      }
      // Sets the custom styles components.
      for (let key in theme.customStyles) {
        const field: HTMLKupTextFieldElement = customStyleView.querySelector(
          '#' + key.toLowerCase()
        );
        try {
          if (document.activeElement.id !== field.id) {
            field.setValue(theme.customStyles[key]);
          }
        } catch (error) {
          console.warn("Couldn't set field for customStyle '" + key + "'.");
        }
      }
      // Sets the icons components.
      for (let key in theme.icons) {
        const variable: string = key.replace('--kup-', '');
        const field: HTMLKupTextFieldElement = iconsView.querySelector(
          '#' + variable
        );
        try {
          if (document.activeElement.id !== field.id) {
            field.icon = theme.icons[key];
            field.setValue(theme.icons[key]);
          }
        } catch (error) {
          console.warn("Couldn't set field for icon '" + key + "'.");
        }
      }
    },
    /**
     * Creates the tile of the theme in creation.
     */
    createTile(): void {
      const themeWrapper: HTMLElement = document.createElement('div');
      const themeImage: HTMLKupImageElement =
        document.createElement('kup-image');
      const themeText: HTMLElement = document.createElement('div');
      themeWrapper.classList.add('icon-wrapper');
      themeWrapper.classList.add('theme-wrapper');
      themeWrapper.id = temporaryTheme;
      themeWrapper.onclick = function () {
        dom.ketchup.theme.set(temporaryTheme);
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
      this.updateTile();
    },
    /**
     * Updates the tile of the theme in creation with the new values.
     */
    updateTile(): void {
      const variables: KupThemeCSSVariables =
        dom.ketchup.theme.list[temporaryTheme].cssVariables;
      const themeWrapper: HTMLElement = document.querySelector(
        '#' + temporaryTheme
      );
      const themeImage: HTMLKupImageElement = document.querySelector(
        '#' + temporaryTheme + ' kup-image'
      );
      const themeText: HTMLElement = document.querySelector(
        '#' + temporaryTheme + ' .icon-label'
      );
      if (variables) {
        themeWrapper.style.backgroundColor =
          variables['--kup-background-color'];
        themeWrapper.style.borderColor = variables['--kup-border-color'];
        themeImage.color = variables['--kup-primary-color'];
        themeText.style.color = variables['--kup-text-color'];
        themeText.style.fontFamily = variables['--kup-font-family'];
        themeText.style.fontSize = variables['--kup-font-size'];
      }
      themeActions.classList.add('visible');
    },
  },
};
</script>
