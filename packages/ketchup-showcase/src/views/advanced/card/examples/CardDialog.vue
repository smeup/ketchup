<template>
  <div>
    <p>
      These cards can be dragged and closed by clicking on the header bar
      button.
      <br />
    </p>
    <div class="demo-wrapper">
      <p>
        <span class="code-word">Layout 1</span> configuration:
        <br />
        <br />
        <span class="code-word">- text[0]</span>: Sets the title inside the
        header bar.
        <br />
        <span class="code-word">- text[1 - n]</span>: Set of labels and values.
        Odd occurrences are considered as labels, even occurrences are
        considered as values.
        <br />
      </p>
      <br />
      <div class="demo-container">
        <div class="kup-container">
          <kup-card
            style="position: absolute !important; top: unset; left: unset"
            size-x="300px"
            size-y="300px"
            layout-number="1"
            layout-family="dialog"
            :data.prop="data"
          ></kup-card>
        </div>
      </div>
    </div>
    <div class="demo-wrapper">
      <p>
        <span class="code-word">Layout 2</span> configuration:
        <br />
        <br />
        <span class="code-word">- text[0]</span>: Sets the title inside the
        header bar.
        <br />
        <span class="code-word">- text[1]</span>: Sets the sticky record's
        label.
        <br />
        <span class="code-word">- text[2]</span>: Sets the sticky record's
        value.
        <br />
        <span class="code-word">- text[3 - n]</span>: Set of labels and values.
        Odd occurrences are considered as labels, even occurrences are
        considered as values.
        <br />
      </p>
      <br />
      <div class="demo-container">
        <div class="kup-container">
          <kup-card
            style="position: absolute !important; top: unset; left: unset"
            size-x="300px"
            size-y="300px"
            layout-number="2"
            layout-family="dialog"
            :data.prop="data"
          ></kup-card>
        </div>
      </div>
    </div>

    <div class="demo-wrapper">
      <p>
        <span class="code-word">Layout 3</span> configuration:
        <br />
        <br />
        <span class="code-word">- button[0 to n]</span>: Action list, displayed
        above.
        <br />
        <span class="code-word">- combobox[0 to n]</span>: List of comboboxes.
        <br />
        <span class="code-word">- slots [0 to n]</span>: List of elements,
        ideally text. If the slot's class list contains "text", a monospace
        style will be applied.
        <br />
        <span class="code-word">- textfield[0 to n]</span>: Textfield list,
        displayed to the right of the button list.
        <br />
        <br />
      </p>
      <br />
      <div class="demo-container">
        <div class="kup-container">
          <kup-card
            style="position: absolute !important; top: unset; left: unset"
            size-x="600px"
            size-y="300px"
            layout-number="3"
            layout-family="dialog"
            :data.prop="data"
            ><div class="text" title="slot[0]" style="font-weight: bold"
              >slot[0]</div
            ><div class="text" title="slot[1]" style="font-weight: bold"
              >slot[1]</div
            ><div class="text" title="slot[2]" style="font-weight: bold"
              >slot[2]</div
            ><div class="text" title="slot[3]" style="font-weight: bold"
              >slot[3]</div
            ><div class="text" title="slot[4]" style="font-weight: bold"
              >slot[4]</div
            ></kup-card
          >
        </div>
      </div>
    </div>

    <div class="demo-wrapper">
      <p>
        <span class="code-word">Layout 4</span> configuration:
        <br />
        <br />
        <span class="code-word">- text[0]</span>: Sets the title inside the
        header bar.
        <br />
        <span class="code-word">- datatable [0]</span>: Displays a data table.
        <br />
        <br />
      </p>
      <br />
      <div class="demo-container">
        <div class="kup-container">
          <kup-card
            style="position: absolute !important; top: unset; left: unset"
            size-x="300px"
            size-y="300px"
            layout-number="4"
            layout-family="dialog"
            :data.prop="data"
            ><div class="text" title="slot[0]" style="font-weight: bold"
              >slot[0]</div
            ><div class="text" title="slot[1]" style="font-weight: bold"
              >slot[1]</div
            ><div class="text" title="slot[2]" style="font-weight: bold"
              >slot[2]</div
            ><div class="text" title="slot[3]" style="font-weight: bold"
              >slot[3]</div
            ><div class="text" title="slot[4]" style="font-weight: bold"
              >slot[4]</div
            ></kup-card
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CardCollapsible',
  data() {
    return {
      data: {
        button: [{ icon: 'widgets', flat: true, title: 'button[0]' }],
        chip: [
          {
            title: 'chip[0]',
            data: [
              {
                value: '1_chip',
                icon: 'filter_1',
                label: 'First chip',
                checked: false,
              },
              {
                value: '2_chip',
                icon: 'filter_2',
                label: 'Second chip',
                checked: true,
              },
              {
                value: '3_chip',
                icon: 'filter_3',
                label: 'Third chip',
                checked: false,
              },
              {
                value: '4_chip',
                icon: 'filter_4',
                label: 'Fourth chip',
                checked: false,
              },
              {
                value: '5_chip',
                icon: 'filter_5',
                label: 'Fifth chip',
                checked: false,
              },
              {
                value: '6_chip',
                icon: 'filter_6',
                label: 'Sixth chip',
                checked: false,
              },
              {
                value: '7_chip',
                icon: 'filter_7',
                label: 'Seventh chip',
                checked: false,
              },
              {
                value: '8_chip',
                icon: 'filter_8',
                label: 'Eighth chip',
                checked: false,
              },
              {
                value: '9_chip',
                icon: 'filter_9',
                label: 'Ninth chip',
                checked: false,
              },
            ],
          },
        ],
        color: ['var(--kup-spinner-color)', 'var(--kup-border-color)'],
        combobox: [
          {
            data: {
              'kup-list': {},
              'kup-text-field': {
                label: 'combobox[0]',
              },
            },
            title: 'combobox[0]',
          },
        ],
        datatable: [
          {
            data: {
              columns: [
                {
                  name: 'ICON',
                  title: 'Icon',
                  visible: false,
                },
                {
                  name: 'FIELD',
                  title: 'Field',
                },
                {
                  name: 'VALUE',
                  title: 'Value',
                },
              ],
              rows: [
                {
                  cells: {
                    ICON: {
                      obj: {
                        t: '',
                        p: '',
                        k: '',
                      },
                      value: '',
                    },
                    FIELD: {
                      obj: {
                        t: 'COLUMN',
                        p: '',
                        k: '',
                      },
                      value: 'Column 1',
                    },
                    VALUE: {
                      obj: {
                        t: '',
                        p: '',
                        k: '',
                      },
                      value: 'datatable[0]',
                      title: 'Simple tooltip for cell 1',
                      options: true,
                    },
                  },
                  id: '0',
                },
                {
                  cells: {
                    ICON: {
                      obj: {
                        t: '',
                        p: '',
                        k: '',
                      },
                      value: '',
                    },
                    FIELD: {
                      obj: {
                        t: 'COLUMN',
                        p: '',
                        k: '',
                      },
                      value: 'Column 2',
                    },
                    VALUE: {
                      obj: {
                        t: '',
                        p: '',
                        k: '',
                      },
                      value: 'datatable[0]',
                      title: 'Simple tooltip for cell 2',
                    },
                  },
                  id: '1',
                },
                {
                  cells: {
                    ICON: {
                      obj: {
                        t: '',
                        p: '',
                        k: '',
                      },
                      value: '',
                    },
                    FIELD: {
                      obj: {
                        t: 'COLUMN',
                        p: '',
                        k: '',
                      },
                      value: 'Column 3',
                    },
                    VALUE: {
                      obj: {
                        t: '',
                        p: '',
                        k: '',
                      },
                      value: 'datatable[0]',
                      title: 'Simple tooltip for cell 3',
                    },
                  },
                  id: '2',
                },
                {
                  cells: {
                    ICON: {
                      obj: {
                        t: '',
                        p: '',
                        k: '',
                      },
                      value: '',
                    },
                    FIELD: {
                      obj: {
                        t: 'COLUMN',
                        p: '',
                        k: '',
                      },
                      value: 'Column 4',
                    },
                    VALUE: {
                      obj: {
                        t: ' ',
                        p: '',
                        k: '',
                      },
                      value: 'datatable[0]',
                      icon: 'calendar',
                    },
                  },
                  id: '3',
                },
              ],
            },
            density: 'medium',
            headerIsPersistent: false,
            rowsPerPage: 1000,
            showHeader: false,
            title: 'datatable[0]',
          },
        ],
        image: [
          {
            data: [
              {
                shape: 'bar',
                color: 'var(--kup-primary-color)',
                width: '100%',
                height: '100%',
              },
            ],
            title: 'image[0]',
          },
          {
            data: [
              {
                shape: 'bar',
                color: 'var(--kup-primary-color)',
                width: '100%',
                height: '100%',
              },
            ],
            title: 'image[1]',
          },
        ],
        progressbar: [{ value: 50, title: 'progressbar[0]' }],
        text: [
          'text[0]',
          'text[1]',
          'text[2]',
          'text[3]',
          'text[4]',
          'text[5]',
          'text[6]',
        ],
        textfield: [
          {
            fullWidth: true,
            icon: 'widgets',
            isClearable: true,
            label: 'textfield[0]',
            title: 'textfield[0]',
          },
        ],
      },
    };
  },
};
</script>
