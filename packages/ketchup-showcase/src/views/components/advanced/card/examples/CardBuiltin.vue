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
        <span class="code-word">- data (DataTable)</span>: The dataset
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
    };
  },
};
</script>
