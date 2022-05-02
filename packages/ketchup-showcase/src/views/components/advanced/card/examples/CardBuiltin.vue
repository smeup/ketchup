<template>
  <div>
    <p>
      These cards are generated automatically with specific behaviors. In this
      family we can find, for example, a small
      <span class="code-word">calendar</span>. <br />Usually the settings for
      this layouts are specified inside the
      <span class="code-word">options</span> property of the
      <span class="code-word">data</span> prop.
    </p>
    <div class="demo-wrapper">
      <p>
        <span class="code-word">Layout 1</span> is a calendar:
        <br />
        <br />
        <span class="code-word">options</span> <br />
        <span class="code-word">- initialValue (string | KupObj)</span>: The
        starting date.<br />
        <span class="code-word">- firstDayIndex (number)</span>: The first day
        of the week (0-6 from monday to sunday).<br />
        <span class="code-word">- resetStatus (boolean)</span>: Flag used to
        reset the view.<br />
      </p>
      <div class="demo-container">
        <div class="kup-container">
          <kup-card
            layout-family="built-in"
            layout-number="1"
            size-x="300px"
            :data.prop="dataCalendar"
          ></kup-card>
        </div>
      </div>
    </div>
    <div class="demo-wrapper">
      <p>
        <span class="code-word">Layout 2</span> is a clock:
        <br />
        <br />
        <span class="code-word">options</span> <br />
        <span class="code-word">- initialValue (string | KupObj)</span>: The
        starting hour.<br />
        <span class="code-word">- manageSeconds (boolean)</span>: Specifies
        whether to display a section to choose seconds, or not.<br />
        <span class="code-word">- hoursActive (boolean)</span>: True when the
        active view is the hours one.<br />
        <span class="code-word">- minutesActive (boolean)</span>: True when the
        active view is the minutes one.<br />
        <span class="code-word">- secondsActive (boolean)</span>: True when the
        active view is the seconds one.<br />
      </p>
      <div class="demo-container">
        <div class="kup-container">
          <kup-card
            layout-family="built-in"
            layout-number="2"
            size-x="300px"
            :data.prop="dataClock"
          ></kup-card>
        </div>
      </div>
    </div>
    <div class="demo-wrapper">
      <p>
        <span class="code-word">Layout 3</span> is the menu used when a column
        is dropped onto another one:
        <br />
        <br />
        <span class="code-word">options</span> <br />
        <span class="code-word">- data (KupDataDataset)</span>: The dataset
        containing rows and columns which must be treated.<br /><span
          class="code-word"
          >- enableFormula (boolean)</span
        >: Displays the components used to set formulas. Chipset and button will
        be displayed only when there is at least a numerical column.<br />
        <span class="code-word">- enableMerge (boolean)</span>: Displays the
        list item related to the merging of columns.<br />
        <span class="code-word">- enableMove (boolean)</span>: Displays the list
        item related to sorting the columns.<br />
        <span class="code-word">- formulaCb (() => void))</span>: Callback
        invoked when a valid formula is typed inside the combobox.<br />
        <span class="code-word">- mergeCb (() => void)</span>: Callback invoked
        when clicking on the list item related to merge.<br />
        <span class="code-word">- moveCb (() => void)</span>: Callback invoked
        when clicking on the list item related to move.<br />
      </p>
      <div class="demo-container">
        <div class="kup-container">
          <kup-card
            layout-family="built-in"
            layout-number="3"
            size-x="280px"
            size-y="auto"
            :data.prop="dataColumnDropMenu"
          ></kup-card>
        </div>
      </div>
    </div>
    <div class="demo-wrapper">
      <p>
        <span class="code-word">Layout 4</span> is a color picker creating using
        the external library
        <a href="https://vanilla-picker.js.org/">Vanilla Picker</a>
        <br />
        <br />
        <span class="code-word">options</span> <br />
        <span class="code-word">- color (string)</span>: The initial color which
        will be displayed by the color picker once created.<br />When not set,
        it will default to <span class="code-word">#00ccff</span><br />
        <span class="code-word">- changeCb ((color) => void))</span>: Callback
        invoked when the color selected changes. The color argument is an object
        constructed like this: <br />
        <span class="code-word-container">
          <span class="code-word">rgba</span>:
          <span class="code-word">number[]</span>;<br />
          <span class="code-word">hsla</span>:
          <span class="code-word">number[]</span>;<br />
          <span class="code-word">rgbString</span>:
          <span class="code-word">string</span>;<br />
          <span class="code-word">rgbaString</span>:
          <span class="code-word">string</span>;<br />
          <span class="code-word">hslString</span>:
          <span class="code-word">string</span>;<br />
          <span class="code-word">hslaString</span>:
          <span class="code-word">string</span>;<br />
          <span class="code-word">hex</span>:
          <span class="code-word">string</span>; <br
        /></span>
        <span class="code-word">- creationCb ((picker) => void)</span>: Callback
        invoked after the creation of the picker is complete. <br />The picker
        argument is essentially the instance of the vanilla color picker, on
        which it's possible to call methods like
        <span class="code-word">setColor(color: string, silent: boolean)</span
        >.<br />Documentation about the available APIs
        <a href="https://vanilla-picker.js.org/gen/Picker.html">here</a>.<br />
      </p>
      <div class="demo-container">
        <div class="kup-container">
          <kup-card
            layout-family="built-in"
            layout-number="4"
            size-x="280px"
            size-y="auto"
            :data.prop="dataColorPicker"
          ></kup-card>
        </div>
      </div>
    </div>
    <div class="demo-wrapper">
      <p>
        <span class="code-word">Layout 5</span> is a numeric calculator:
        <br />
        <br />
        <span class="code-word">options</span> <br />
        <span class="code-word">- decimals (boolean)</span>: Enable to use
        decimal numerbers.<br />
        <span class="code-word">- initialValue (string | KupObj)</span>: The
        starting number.<br />
        <span class="code-word">- maxDecimals (number)</span>: Sets the maximun
        decimal numbers.<br />
        <span class="code-word">- maxIntegers (number)</span>: Sets the maximun
        integer numbers.<br />
        <span class="code-word">- maxLength (number)</span>: Sets the maximun
        length of number (integer + decimal).<br />
        <span class="code-word">- negative (boolean)</span>: Enable to use
        negative numbers.<br />
        <span class="code-word">- resetStatus (boolean)</span>: Flag used to
        reset the view.<br />
      </p>
      <div class="demo-container">
        <div class="kup-container">
          <kup-card
            layout-family="built-in"
            layout-number="5"
            size-x="300px"
            :data.prop="dataNumeric"
          ></kup-card>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { defaultDataTable } from '@/mock/dataTable';

const today = new Date();
export default {
  name: 'CardBuiltin',
  data() {
    return {
      dataCalendar: {
        options: {
          initialValue: new Date().toISOString(),
        },
      },
      dataClock: {
        options: {
          initialValue: today.getHours() + ':' + today.getMinutes(),
          hoursActive: true,
        },
      },
      dataColorPicker: {
        options: {
          initialValue: '#a61a2f',
        },
      },
      dataColumnDropMenu: {
        options: {
          data: defaultDataTable,
          enableFormula: true,
          enableMerge: true,
          enableMove: true,
          receivingColumn: defaultDataTable.columns[1],
          starterColumn: defaultDataTable.columns[2],
        },
      },
      dataNumeric: {
        options: {
          initialValue: (3.14).toString(),
          decimals: true,
          negative: true,
          resetStatus: true,
        },
      },
    };
  },
};
</script>

<style lang="scss" scoped>
.code-word-container {
  text-align: center;
  display: block;
  margin: 1.5em 0;
}
</style>
