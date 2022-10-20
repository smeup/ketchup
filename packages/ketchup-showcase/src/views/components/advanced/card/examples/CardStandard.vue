<template>
  <div>
    <div class="demo-wrapper">
      <p>
        <span class="code-word">Layout 1</span> configuration:
        <br />
        <br />
        <span class="code-word">- button[0 to n]</span>: Actions, the action bar
        will be displayed only in presence of at least 1 button. They will be
        arranged from left to right.
        <br />
        <span class="code-word">- image[0]</span>: Cover.
        <br />
        <span class="code-word">- text[0]</span>: Title.
        <br />
        <span class="code-word">- text[1]</span>: Subtitle.
        <br />
        <span class="code-word">- text[2]</span>: Description.
      </p>
      <br />
      <div class="demo-container">
        <div class="kup-container">
          <kup-card
            size-x="300px"
            size-y="300px"
            layout-number="1"
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
        <span class="code-word">- button[0 to n]</span>: Actions, the action bar
        will be displayed only in presence of at least 1 button. They will be
        arranged from left to right.
        <br />
        <span class="code-word">- image[0]</span>: Cover.
        <br />
        <span class="code-word">- text[0]</span>: Title.
        <br />
        <span class="code-word">- text[1]</span>: Subtitle.
        <br />
        <span class="code-word">- text[2]</span>: Description.
      </p>
      <br />
      <div class="demo-container">
        <div class="kup-container">
          <kup-card
            size-x="300px"
            size-y="300px"
            layout-number="2"
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
        <span class="code-word">- button[0 to n]</span>: Actions, the action bar
        will be displayed only in presence of at least 1 button. They will be
        arranged from left to right.
        <br />
        <span class="code-word">- image[0]</span>: Cover.
        <br />
        <span class="code-word">- text[0]</span>: Title.
        <br />
        <span class="code-word">- text[1]</span>: Subtitle.
        <br />
        <span class="code-word">- text[2]</span>: Description.
      </p>
      <br />
      <div class="demo-container">
        <div class="kup-container">
          <kup-card
            size-x="300px"
            size-y="300px"
            layout-number="3"
            :data.prop="data"
          ></kup-card>
        </div>
      </div>
    </div>

    <div class="demo-wrapper">
      <p>
        <span class="code-word">Layout 4</span> configuration:
        <br />
        <br />
        <span class="code-word">- button[0 to n]</span>: Actions, the action bar
        will be displayed only in presence of at least 1 button. They will be
        arranged from left to right.
        <br />
        <span class="code-word">- image[0]</span>: Cover.
        <br />
        <span class="code-word">- text[0]</span>: Title.
        <br />
        <span class="code-word">- text[1]</span>: Subtitle.
      </p>
      <br />
      <div class="demo-container">
        <div class="kup-container">
          <kup-card
            size-x="300px"
            size-y="300px"
            layout-number="4"
            :data.prop="data"
          ></kup-card>
        </div>
      </div>
    </div>

    <div class="demo-wrapper">
      <p>
        <span class="code-word">Layout 5</span> configuration:
        <br />
        <br />
        <span class="code-word">- button[0]</span>: Action button.
        <br />
        <span class="code-word">- color[0]</span>: Sets the color of top bar,
        <span class="code-word">text[3]</span> and
        <span class="code-word">text[5]</span>.
        <br />
        <span class="code-word">- color[1]</span>: Sets the background color of
        the bottom section.
        <br />
        <span class="code-word">- image[0]</span>: Left image (smaller).
        <br />
        <span class="code-word">- image[1]</span>: Right image (larger).
        <br />
        <span class="code-word">- progressbar[0]</span>: Slim progress bar.
        <br />
        <span class="code-word">- text[0 to 5]</span>: Generic text, check the
        mock-up below to see how they are positioned.
        <span class="code-word">text[1]</span> is colored with the primary color
        of the app.
        <br />
      </p>
      <br />
      <div class="demo-container">
        <div class="kup-container">
          <kup-card
            size-x="80%"
            size-y="300px"
            layout-number="5"
            :data.prop="data"
          ></kup-card>
        </div>
      </div>
    </div>

    <div class="demo-wrapper">
      <p>
        <span class="code-word">Layout 6</span> configuration:
        <br />
        <br />
        <span class="code-word">- button[0]</span>: Action button.
        <br />
        <span class="code-word">- color[0]</span>: Sets the color of the left
        bar.
        <br />
        <span class="code-word">- progressbar[0]</span>: Radial progress bar.
        <br />
        <span class="code-word">- text[0 to 1]</span>: Generic text, check the
        mock-up below to see how they are positioned.
        <span class="code-word">text[0]</span> will be white.
        <br />
      </p>
      <br />
      <div class="demo-container">
        <div class="kup-container">
          <kup-card
            size-x="80%"
            size-y="300px"
            layout-number="6"
            :data.prop="data"
          ></kup-card>
        </div>
      </div>
    </div>
    <div class="demo-wrapper">
      <p>
        <span class="code-word">Layout 7</span> configuration:
        <br />
        <br />
        <span class="code-word">- color[0]</span>: Sets the color of the top
        bar.
        <br />
        <span class="code-word">- image[0]</span>: Image.
        <br />
        <span class="code-word">- text[0 to 2]</span>: Generic text, check the
        mock-up below to see how they are positioned.
        <br />
      </p>
      <br />
      <div class="demo-container">
        <div class="kup-container">
          <kup-card
            size-x="300px"
            size-y="300px"
            layout-number="7"
            :data.prop="data"
          ></kup-card>
        </div>
      </div>
    </div>

    <div class="demo-wrapper">
      <p>
        <span class="code-word">Layout 8</span> configuration:
        <br />
        <br />
        <span class="code-word">- color[0]</span>: Sets the color of
        <span class="code-word">text[2]</span> and the color of the background
        (its opacity will be set to 10%).
        <br />
        <span class="code-word">- chip[0]</span>: Chips.
        <br />
        <span class="code-word">- image[0]</span>: Image on the top right
        corner.
        <br />
        <span class="code-word">- text[0 to 2]</span>: Generic text, check the
        mock-up below to see how they are positioned.
        <br />
      </p>
      <br />
      <div class="demo-container">
        <div class="kup-container">
          <kup-card
            size-x="300px"
            size-y="300px"
            layout-number="8"
            :data.prop="data"
          ></kup-card>
        </div>
      </div>
    </div>

    <div class="demo-wrapper">
      <p>
        <span class="code-word">Layout 9</span> configuration:
        <br />
        <br />
        <span class="code-word">- color[0]</span>: Sets the color of the icon.
        <br />
        <span class="code-word">- chart[0]</span>: Chart on the right.
        <br />
        <span class="code-word">- image[0]</span>: Image on the left, colored
        with color1.
        <br />
        <span class="code-word">- text[0 to 2]</span>: Generic text, check the
        mock-up below to see how they are positioned.
        <br />
      </p>
      <br />
      <div class="demo-container">
        <div class="kup-container">
          <kup-card
            size-x="80%"
            size-y="150px"
            layout-number="9"
            :data.prop="data"
          ></kup-card>
        </div>
      </div>
    </div>

    <div class="demo-wrapper">
      <p>
        <span class="code-word">Layout 10</span> configuration:
        <br />
        <br />
        <span class="code-word">- color[0]</span>: Sets the color of the icon.
        <br />
        <span class="code-word">- chart[0]</span>: Chart on the left.
        <br />
        <span class="code-word">- image[0]</span>: Image on the right, colored
        with color1.
        <br />
        <span class="code-word">- text[0 to 2]</span>: Generic text, check the
        mock-up below to see how they are positioned.
        <br />
      </p>
      <br />
      <div class="demo-container">
        <div class="kup-container">
          <kup-card
            size-x="80%"
            size-y="150px"
            layout-number="10"
            :data.prop="data"
          ></kup-card>
        </div>
      </div>
    </div>

    <div class="demo-wrapper">
      <p>
        <span class="code-word">Layout 11</span> configuration:
        <br />
        <br />
        <span class="code-word">- color[0]</span>: Sets the color of the icon
        and the color of the left bar.
        <br />
        <span class="code-word">- chart[0]</span>: Chart on the right.
        <br />
        <span class="code-word">- image[0]</span>: Image on the left, hidden
        unless mouse hovering <span class="code-word">text[0]</span>. Colored
        with <span class="code-word">color[0]</span>.
        <br />
        <span class="code-word">- text[0 to 2]</span>:
        <span class="code-word">text[0]</span> will be positioned vertically on
        the left. On mouse hover, <span class="code-word">image[0]</span>,
        <span class="code-word">text[1]</span> and
        <span class="code-word">text[2]</span> will be displayed. Color is
        dynamic (black or white) depending on the contrast with
        <span class="code-word">color[0]</span>.
        <br />
        <br />
      </p>
      <br />
      <div class="demo-container">
        <div class="kup-container">
          <kup-card
            size-x="80%"
            size-y="150px"
            layout-number="11"
            :data.prop="data"
          ></kup-card>
        </div>
      </div>
    </div>

    <div class="demo-wrapper">
      <p>
        <span class="code-word">Layout 12</span> configuration (this layout
        covers a very specific use-case, so it's less dynamic than the average):
        <br />
        <br />
        <span class="code-word">- button[special IDs]</span>: Action list,
        displayed above. Supported IDs are:
        <br />
        - "add"
        <br />
        - "group"
        <br />
        - "remove"
        <br />
        <span class="code-word">- checkbox[0 to n]</span>: Checkbox list, this
        section will be scrollable with an height limit of 20vh in order to
        avoid undesired sizes.
        <br />
        <span class="code-word">- datepicker[0 to n]</span>: Datepicker list.
        <br />
        <span class="code-word">- textfield[0 to n]</span>: Textfield list.
        <br />
        <span class="code-word">- timepicker[0 to n]</span>: Timepicker list.
        <br />
        <br />
      </p>
      <br />
      <div class="demo-container">
        <div class="kup-container">
          <kup-card
            size-x="300px"
            size-y="300px"
            layout-number="12"
            :data.prop="data"
          ></kup-card>
        </div>
      </div>
    </div>

    <div class="demo-wrapper">
      <p>
        <span class="code-word">Layout 13</span> configuration:
        <br />
        <br />
        <span class="code-word">- button[0 to n]</span>: Action list, displayed
        above.
        <br />
        <span class="code-word">- combobox[0 to n]</span>: List of comboboxes.
        <br />
        <span class="code-word">- text[0 to n]</span>: List of generic text.
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
            size-x="80%"
            size-y="auto"
            layout-number="13"
            :data.prop="data"
          ></kup-card>
        </div>
      </div>
    </div>

    <div class="demo-wrapper">
      <p>
        <span class="code-word">Layout 14</span> (this layout covers a very
        specific use-case for data-table and tree column menus, so it's less
        dynamic than the average).
        <br />
        <br />
      </p>
      <br />
      <div class="demo-container">
        <div class="kup-container">
          <kup-card
            style="text-align: left"
            size-x="300px"
            size-y="auto"
            layout-number="14"
            :data.prop="data14"
          ></kup-card>
        </div>
      </div>
    </div>

    <div class="demo-wrapper">
      <p>
        <span class="code-word">Layout 15</span> configuration:
        <br />
        <br />
        <span class="code-word">- button[special IDs]</span>: Action list,
        displayed near the title. Supported IDs are:
        <br />
        - "open-in-new"
        <br />
        - "search"
        <br />
        - "new"
        <br />
        <span class="code-word">- button[0 to n]</span>: Action bar, displayed
        in the third section.
        <br />
        <span class="code-word">- image[0]</span>: Image in the top section, on
        the left. When not set, a spinner will be displayed in its place.
        <br />
        <span class="code-word">- text[0]</span>: Title.
        <br />
        <span class="code-word">- text[1]</span>: First label in the top
        section.
        <br />
        <span class="code-word">- text[2]</span>: First value in the top
        section.
        <br />
        <span class="code-word">- text[3]</span>: Second label in the top
        section.
        <br />
        <span class="code-word">- text[4]</span>: Second value in the top
        section.
        <br />
        <span class="code-word">- text[5 to n]</span>: Couples of labels and
        values displayed in the middle section.
        <br />
        <span class="code-word">- tree[0]</span>: Visible in the middle section
        by clicking on the menu icon.
        <br />
        <br />
      </p>
      <br />
      <div class="demo-container">
        <div class="kup-container">
          <kup-card
            layout-number="15"
            :data.prop="data"
            size-x="300px"
            size-y="auto"
          ></kup-card>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { baseData } from '@/mock/chart';
export default {
  name: 'CardStandard',
  data() {
    return {
      data14: {
        button: [
          {
            className: 'printable',
            'data-storage': {
              columnName: 'Z§NUDO',
            },
            icon: 'book',
            id: 'group',
            title: 'Abilita raggruppamento',
          },
          {
            className: 'printable',
            customStyle: ':host {--kup-font-size: 0.75em;}',
            icon: 'open-in-new',
            id: 'open-in-new',
            title: 'Apri in nuovo tab',
          },
          {
            className: 'printable',
            customStyle: ':host {--kup-font-size: 0.75em;}',
            icon: 'search',
            id: 'search',
            title: 'Informazioni',
          },
          {
            className: 'printable',
            customStyle: ':host {--kup-font-size: 0.75em;}',
            icon: 'add',
            id: 'new',
            title: 'Aggiungi nuovo',
          },
          {
            className: 'printable',
            'data-storage': {
              column: {
                isKey: true,
                name: 'Z§NUDO',
                obj: {
                  k: '',
                  p: 'LS04',
                  t: 'H3',
                },
                title: 'Codice',
                tooltip: true,
              },
            },
            icon: 'table-column-remove',
            id: 'remove',
            title: 'Nascondi colonna',
          },
          {
            className: 'printable',
            'data-storage': {
              columnName: 'Z§NUDO',
            },
            icon: 'table-column-plus-after',
            id: 'add',
            title: 'Aggiungi colonna',
          },
          {
            className: 'printable',
            label: 'Applica',
            id: 'apply',
            styling: 'flat',
            title: 'Applica',
          },
        ],
        checkbox: [
          {
            checked: true,
            'data-storage': {
              column: {
                isKey: true,
                name: 'Z§NUDO',
                obj: {
                  k: '',
                  p: 'LS04',
                  t: 'H3',
                },
                title: 'Codice',
                tooltip: true,
              },
              value: null,
            },
            id: 'global-checkbox',
            label: 'Tutti',
          },
          {
            checked: false,
            'data-storage': {
              column: {
                isKey: true,
                name: 'Z§NUDO',
                obj: {
                  k: '',
                  p: 'LS04',
                  t: 'H3',
                },
                title: 'Codice',
                tooltip: true,
              },
              value: 'NW20000008',
              displayedValue: 'NW20000008',
            },
            label: 'NW20000008',
            id: 'checkbox1',
          },
          {
            checked: false,
            'data-storage': {
              column: {
                isKey: true,
                name: 'Z§NUDO',
                obj: {
                  k: '',
                  p: 'LS04',
                  t: 'H3',
                },
                title: 'Codice',
                tooltip: true,
              },
              value: 'NW20000023',
              displayedValue: 'NW20000023',
            },
            label: 'NW20000023',
            id: 'checkbox2',
          },
          {
            checked: false,
            'data-storage': {
              column: {
                isKey: true,
                name: 'Z§NUDO',
                obj: {
                  k: '',
                  p: 'LS04',
                  t: 'H3',
                },
                title: 'Codice',
                tooltip: true,
              },
              value: 'NW20000031',
              displayedValue: 'NW20000031',
            },
            label: 'NW20000031',
            id: 'checkbox3',
          },
          {
            checked: false,
            'data-storage': {
              column: {
                isKey: true,
                name: 'Z§NUDO',
                obj: {
                  k: '',
                  p: 'LS04',
                  t: 'H3',
                },
                title: 'Codice',
                tooltip: true,
              },
              value: 'NW20000033',
              displayedValue: 'NW20000033',
            },
            label: 'NW20000033',
            id: 'checkbox4',
          },
          {
            checked: false,
            'data-storage': {
              column: {
                isKey: true,
                name: 'Z§NUDO',
                obj: {
                  k: '',
                  p: 'LS04',
                  t: 'H3',
                },
                title: 'Codice',
                tooltip: true,
              },
              value: 'NW20000034',
              displayedValue: 'NW20000034',
            },
            label: 'NW20000034',
            id: 'checkbox5',
          },
          {
            checked: false,
            'data-storage': {
              column: {
                isKey: true,
                name: 'Z§NUDO',
                obj: {
                  k: '',
                  p: 'LS04',
                  t: 'H3',
                },
                title: 'Codice',
                tooltip: true,
              },
              value: 'NW20000035',
              displayedValue: 'NW20000035',
            },
            label: 'NW20000035',
            id: 'checkbox6',
          },
          {
            checked: false,
            'data-storage': {
              column: {
                isKey: true,
                name: 'Z§NUDO',
                obj: {
                  k: '',
                  p: 'LS04',
                  t: 'H3',
                },
                title: 'Codice',
                tooltip: true,
              },
              value: 'NW20000038',
              displayedValue: 'NW20000038',
            },
            label: 'NW20000038',
            id: 'checkbox7',
          },
          {
            checked: false,
            'data-storage': {
              column: {
                isKey: true,
                name: 'Z§NUDO',
                obj: {
                  k: '',
                  p: 'LS04',
                  t: 'H3',
                },
                title: 'Codice',
                tooltip: true,
              },
              value: 'NW20000041',
              displayedValue: 'NW20000041',
            },
            label: 'NW20000041',
            id: 'checkbox8',
          },
          {
            checked: false,
            'data-storage': {
              column: {
                isKey: true,
                name: 'Z§NUDO',
                obj: {
                  k: '',
                  p: 'LS04',
                  t: 'H3',
                },
                title: 'Codice',
                tooltip: true,
              },
              value: 'NW20000047',
              displayedValue: 'NW20000047',
            },
            label: 'NW20000047',
            id: 'checkbox9',
          },
          {
            checked: false,
            'data-storage': {
              column: {
                isKey: true,
                name: 'Z§NUDO',
                obj: {
                  k: '',
                  p: 'LS04',
                  t: 'H3',
                },
                title: 'Codice',
                tooltip: true,
              },
              value: 'NW20000084',
              displayedValue: 'NW20000084',
            },
            label: 'NW20000084',
            id: 'checkbox10',
          },
          {
            checked: false,
            'data-storage': {
              column: {
                isKey: true,
                name: 'Z§NUDO',
                obj: {
                  k: '',
                  p: 'LS04',
                  t: 'H3',
                },
                title: 'Codice',
                tooltip: true,
              },
              value: 'NW20000086',
              displayedValue: 'NW20000086',
            },
            label: 'NW20000086',
            id: 'checkbox11',
          },
          {
            checked: false,
            'data-storage': {
              column: {
                isKey: true,
                name: 'Z§NUDO',
                obj: {
                  k: '',
                  p: 'LS04',
                  t: 'H3',
                },
                title: 'Codice',
                tooltip: true,
              },
              value: 'NW20000087',
              displayedValue: 'NW20000087',
            },
            label: 'NW20000087',
            id: 'checkbox12',
          },
          {
            checked: false,
            'data-storage': {
              column: {
                isKey: true,
                name: 'Z§NUDO',
                obj: {
                  k: '',
                  p: 'LS04',
                  t: 'H3',
                },
                title: 'Codice',
                tooltip: true,
              },
              value: 'NW20000091',
              displayedValue: 'NW20000091',
            },
            label: 'NW20000091',
            id: 'checkbox13',
          },
          {
            checked: false,
            'data-storage': {
              column: {
                isKey: true,
                name: 'Z§NUDO',
                obj: {
                  k: '',
                  p: 'LS04',
                  t: 'H3',
                },
                title: 'Codice',
                tooltip: true,
              },
              value: 'NW20000094',
              displayedValue: 'NW20000094',
            },
            label: 'NW20000094',
            id: 'checkbox14',
          },
          {
            checked: false,
            'data-storage': {
              column: {
                isKey: true,
                name: 'Z§NUDO',
                obj: {
                  k: '',
                  p: 'LS04',
                  t: 'H3',
                },
                title: 'Codice',
                tooltip: true,
              },
              value: 'NW20000096',
              displayedValue: 'NW20000096',
            },
            label: 'NW20000096',
            id: 'checkbox15',
          },
          {
            checked: false,
            'data-storage': {
              column: {
                isKey: true,
                name: 'Z§NUDO',
                obj: {
                  k: '',
                  p: 'LS04',
                  t: 'H3',
                },
                title: 'Codice',
                tooltip: true,
              },
              value: 'NW20000097',
              displayedValue: 'NW20000097',
            },
            label: 'NW20000097',
            id: 'checkbox16',
          },
          {
            checked: false,
            'data-storage': {
              column: {
                isKey: true,
                name: 'Z§NUDO',
                obj: {
                  k: '',
                  p: 'LS04',
                  t: 'H3',
                },
                title: 'Codice',
                tooltip: true,
              },
              value: 'NW20000098',
              displayedValue: 'NW20000098',
            },
            label: 'NW20000098',
            id: 'checkbox17',
          },
          {
            checked: false,
            'data-storage': {
              column: {
                isKey: true,
                name: 'Z§NUDO',
                obj: {
                  k: '',
                  p: 'LS04',
                  t: 'H3',
                },
                title: 'Codice',
                tooltip: true,
              },
              value: 'NW20000099',
              displayedValue: 'NW20000099',
            },
            label: 'NW20000099',
            id: 'checkbox18',
          },
          {
            checked: false,
            'data-storage': {
              column: {
                isKey: true,
                name: 'Z§NUDO',
                obj: {
                  k: '',
                  p: 'LS04',
                  t: 'H3',
                },
                title: 'Codice',
                tooltip: true,
              },
              value: 'NW20000104',
              displayedValue: 'NW20000104',
            },
            label: 'NW20000104',
            id: 'checkbox19',
          },
          {
            checked: false,
            'data-storage': {
              column: {
                isKey: true,
                name: 'Z§NUDO',
                obj: {
                  k: '',
                  p: 'LS04',
                  t: 'H3',
                },
                title: 'Codice',
                tooltip: true,
              },
              value: 'NW20000119',
              displayedValue: 'NW20000119',
            },
            label: 'NW20000119',
            id: 'checkbox20',
          },
        ],
        chip: [
          {
            type: 'input',
          },
        ],
        datepicker: [],
        object: [
          {
            k: '',
            p: 'LS04',
            t: 'H3',
          },
        ],
        switch: [
          {
            'data-storage': {
              columnName: 'Z§NUDO',
            },
            checked: true,
            id: 'key',
            label: 'switch[0]',
            leadingLabel: true,
          },
          {
            'data-storage': {
              columnName: 'Z§NUDO',
            },
            checked: false,
            id: 'group',
            label: 'switch[0]',
            leadingLabel: true,
          },
        ],
        tabbar: [
          {
            data: [
              {
                active: true,
                id: 'genericFilters',
                value: 'Filters',
              },
              {
                id: 'columnColumns',
                value: 'Columns',
              },
              {
                icon: 'settings',
                id: 'genericSettings',
                value: '',
              },
            ],
          },
        ],
        text: ['text[0]', 'text[1]', 'text[2]', 'text[3]', 'text[4]'],
        textfield: [
          {
            'data-storage': {
              column: {
                isKey: true,
                name: 'Z§NUDO',
                obj: {
                  k: '',
                  p: 'LS04',
                  t: 'H3',
                },
                title: 'Codice',
                tooltip: true,
              },
            },
            fullWidth: true,
            icon: 'magnify',
            id: 'filter',
            initialValue: '',
            isClearable: true,
            label: 'Cerca...',
            trailingIcon: true,
          },
        ],
        image: [
          {
            resource: 'widgets',
          },
        ],
      },
      data: {
        button: [
          { icon: 'widgets', flat: true, title: 'button[0]' },
          { icon: 'widgets', flat: true, title: 'button[1]' },
          { icon: 'widgets', flat: true, title: 'button[2]' },
        ],
        chart: [
          {
            title: 'chart[0]',
            data: baseData,
            series: ['Col2', 'Col3', 'Col4'],
            axis: 'Col1',
            offlineMode: { value: '1;7;-5;6;10;-5;3;4', shape: 'line' },
          },
        ],
        checkbox: [
          {
            label: 'checkbox[0]',
            title: 'checkbox[0]',
          },
          {
            label: 'checkbox[1]',
            title: 'checkbox[1]',
          },
          {
            label: 'checkbox[2]',
            title: 'checkbox[2]',
          },
          {
            label: 'checkbox[3]',
            title: 'checkbox[3]',
          },
          {
            label: 'checkbox[4]',
            title: 'checkbox[4]',
          },
          {
            label: 'checkbox[5]',
            title: 'checkbox[5]',
          },
          {
            label: 'checkbox[6]',
            title: 'checkbox[6]',
          },
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
                icon: 'filter_6',
                id: '6_chip',
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
        tabbar: [
          {
            data: [
              {
                active: true,
                id: '1',
                value: 'tab-bar[0]',
              },
              {
                id: '2',
                value: 'tab-bar[0]',
              },
            ],
            title: 'tab-bar[0]',
          },
        ],
        text: [
          'text[0]',
          'text[1]',
          'text[2]',
          'text[3]',
          'text[4]',
          'text[5]',
          'text[6]',
          'text[7]',
          'text[8]',
          'text[9]',
          'text[10]',
          'text[11]',
          'text[12]',
          'text[13]',
          'text[14]',
          'text[15]',
          'text[16]',
          'text[17]',
          'text[18]',
          'text[19]',
          'text[20]',
          'text[21]',
          'text[22]',
          'text[23]',
          'text[24]',
          'text[25]',
          'text[26]',
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
        tree: [
          {
            data: [
              {
                cells: {
                  Mat: {
                    obj: {
                      t: 'NR',
                      p: '',
                      k: '00Mat',
                    },
                    value: '00Mat',
                    options: true,
                  },
                  Program: {
                    obj: {
                      t: 'NR',
                      p: '',
                      k: '00Program',
                    },
                    value: '00Program',
                    options: false,
                  },
                  Attack: {
                    obj: {
                      t: 'NR',
                      p: '',
                      k: '00Attack',
                    },
                    value: '00Attack',
                    options: true,
                  },
                },
                children: [
                  {
                    cells: {
                      Mat: {
                        obj: {
                          t: 'NR',
                          p: '',
                          k: '10Mat',
                        },
                        value: '10Mat',
                        options: false,
                      },
                      Program: {
                        obj: {
                          t: 'NR',
                          p: '',
                          k: '10Program',
                        },
                        value: '10Program',
                        options: false,
                      },
                      Attack: {
                        obj: {
                          t: 'NR',
                          p: '',
                          k: '10Attack',
                        },
                        value: '10Attack',
                        options: true,
                      },
                    },
                    children: [],
                    disabled: false,
                    expandable: false,
                    icon: 'filter_1',
                    id: '00100',
                    isExpanded: false,
                    obj: {
                      t: 'TN',
                      p: '',
                      k: 'tree[0]',
                    },
                    options: false,
                    value: 'tree[0]',
                    visible: true,
                  },
                  {
                    cells: {
                      Mat: {
                        obj: {
                          t: 'NR',
                          p: '',
                          k: '11Mat',
                        },
                        value: '11Mat',
                        options: false,
                      },
                      Program: {
                        obj: {
                          t: 'NR',
                          p: '',
                          k: '11Program',
                        },
                        value: '11Program',
                        options: true,
                      },
                      Attack: {
                        obj: {
                          t: 'NR',
                          p: '',
                          k: '11Attack',
                        },
                        value: '11Attack',
                        options: false,
                      },
                    },
                    disabled: false,
                    expandable: true,
                    icon: 'filter_2',
                    id: '00111',
                    isExpanded: true,
                    obj: {
                      t: 'TN',
                      p: '',
                      k: 'tree[0]',
                    },
                    options: false,
                    value: 'tree[0]',
                    visible: true,
                  },
                ],
                disabled: false,
                expandable: true,
                icon: 'widgets',
                id: '0005',
                isExpanded: true,
                obj: {
                  t: '',
                  p: '',
                  k: 'tree[0]',
                },
                options: true,
                value: 'tree[0]',
                visible: true,
              },
            ],
            title: 'tree[0]',
          },
        ],
      },
    };
  },
};
</script>
