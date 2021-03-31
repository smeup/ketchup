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
      },
    };
  },
};
</script>
