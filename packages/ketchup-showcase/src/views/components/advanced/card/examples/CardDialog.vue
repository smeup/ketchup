<template>
  <div>
    <p>
      These cards can be moved around and closed by clicking on the header bar
      button. They can also be resized when fixed positioned. In the examples
      below, dialogs are absolute positioned in order to keep them on the bottom
      of the page, so resizing is disabled.
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
        <span class="code-word">- slots[0 to n]</span>: List of elements,
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
            size-x="80%"
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
        <span class="code-word">- button[0-1]</span>: Displays two buttons to
        automatically navigate the table columns. Note: in order for this
        feature to work, navigable columns should be named NUMERICALLY and only
        1 should be initialized as visible. Any number of extra
        non-numerically-named columns can be set and won't be impacted by this
        feature.
        <br />
        <span class="code-word">- datatable[0]</span>: Displays a data table.
        <br />
        <span class="code-word">- text[0]</span>: Sets the title inside the
        header bar.
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

    <div class="demo-wrapper">
      <p>
        <span class="code-word">Layout 5</span> configuration:
        <br />
        <br />
        <span class="code-word">- list[0]</span>: Displays a list in the bottom
        section.
        <br />
        <span class="code-word">- slots[0 to n]</span>: List of elements to be
        displayed in the top section.
        <br />
        <span class="code-word">- text[0]</span>: Sets the title inside the
        header bar.
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
            layout-number="5"
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
        <span class="code-word">Layout 6</span> configuration:
        <br />
        <br />
        <span class="code-word">- datatable[0]</span>: Displays a datatable.
        When missing, a spinner will be shown in its place.
        <br />
        <span class="code-word">- text[0]</span>: Sets the title inside the
        header bar.
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
            layout-number="6"
            layout-family="dialog"
            :data.prop="data"
          ></kup-card>
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
        button: [
          { icon: 'widgets', styling: 'flat', title: 'button[0]' },
          { icon: 'widgets', styling: 'flat', title: 'button[0]' },
        ],
        chip: [
          {
            title: 'chip[0]',
            data: [
              {
                icon: 'filter_1',
                id: '1_chip',
                value: 'First chip',
              },
              {
                icon: 'filter_2',
                id: '2_chip',
                value: 'Second chip',
              },
              {
                icon: 'filter_3',
                id: '3_chip',
                value: 'Third chip',
              },
              {
                icon: 'filter_4',
                id: '4_chip',
                value: 'Fourth chip',
              },
              {
                icon: 'filter_5',
                id: '5_chip',
                value: 'Fifth chip',
              },
              {
                id: '6_chip',
                icon: 'filter_6',
                value: 'Sixth chip',
              },
              {
                icon: 'filter_7',
                id: '7_chip',
                value: 'Seventh chip',
              },
              {
                icon: 'filter_8',
                id: '8_chip',
                value: 'Eighth chip',
              },
              {
                icon: 'filter_9',
                id: '9_chip',
                value: 'Ninth chip',
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
                  name: '1',
                  title: '#1',
                  visible: true,
                },
                {
                  name: '2',
                  title: '#2',
                  visible: false,
                },
                {
                  name: '3',
                  title: '#3',
                  visible: false,
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
                    1: {
                      obj: {
                        t: ' ',
                        p: '',
                        k: '',
                      },
                      value: 'datatable[0]',
                      icon: 'filter_1',
                    },
                    2: {
                      obj: {
                        t: ' ',
                        p: '',
                        k: '',
                      },
                      value: 'datatable[0]',
                      icon: 'filter_2',
                    },
                    3: {
                      obj: {
                        t: ' ',
                        p: '',
                        k: '',
                      },
                      value: 'datatable[0]',
                      icon: 'filter_3',
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
                    1: {
                      obj: {
                        t: ' ',
                        p: '',
                        k: '',
                      },
                      value: 'datatable[0]',
                      icon: 'filter_1',
                    },
                    2: {
                      obj: {
                        t: ' ',
                        p: '',
                        k: '',
                      },
                      value: 'datatable[0]',
                      icon: 'filter_2',
                    },
                    3: {
                      obj: {
                        t: ' ',
                        p: '',
                        k: '',
                      },
                      value: 'datatable[0]',
                      icon: 'filter_3',
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
                    1: {
                      obj: {
                        t: ' ',
                        p: '',
                        k: '',
                      },
                      value: 'datatable[0]',
                      icon: 'filter_1',
                    },
                    2: {
                      obj: {
                        t: ' ',
                        p: '',
                        k: '',
                      },
                      value: 'datatable[0]',
                      icon: 'filter_2',
                    },
                    3: {
                      obj: {
                        t: ' ',
                        p: '',
                        k: '',
                      },
                      value: 'datatable[0]',
                      icon: 'filter_3',
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
                    1: {
                      obj: {
                        t: ' ',
                        p: '',
                        k: '',
                      },
                      value: 'datatable[0]',
                      icon: 'filter_1',
                    },
                    2: {
                      obj: {
                        t: ' ',
                        p: '',
                        k: '',
                      },
                      value: 'datatable[0]',
                      icon: 'filter_2',
                    },
                    3: {
                      obj: {
                        t: ' ',
                        p: '',
                        k: '',
                      },
                      value: 'datatable[0]',
                      icon: 'filter_3',
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
        list: [
          {
            data: [
              {
                value: 'list[0]',
                id: '1',
                icon: 'filter_1',
                trailingIcon: true,
              },
              {
                value: 'list[0]',
                id: '2',
                icon: 'filter_2',
                trailingIcon: true,
              },
              {
                value: 'list[0]',
                id: '3',
                icon: 'filter_3',
                trailingIcon: true,
              },
            ],
            title: 'list[0]',
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
