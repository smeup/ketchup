<template>
  <div>
    <p>
      By clicking on the expansion button the height of the card will be set to
      "auto" when a dynamic element is bigger than its container. To set this up
      inside the layout, the classes
      <span class="code-word">collapsible-element</span> and
      <span class="code-word">collapsible-wrapper</span> must be assigned to the
      dynamic element and to its wrapper, respectively. Also, the class
      <span class="code-word">collapsible-card</span> must be set on the
      layout-level element. The bottom bar containing the expand action button
      is 50px tall, so keep this in mind when you set the size of the card. To
      attach it to your component, use the collapsibleBar() function which
      returns a JSX element containing the bar itself.
      <br />
      <br />Every second, the card will check if the dynamic element is
      overflowing, if it does the bar will appear.
      <br />
    </p>
    <div class="demo-wrapper">
      <p>
        <span class="code-word">Layout 1</span> configuration:
        <br />
        <br />
        <span class="code-word">- color[0]</span>: Sets the color of the side
        bar.
        <br />
        <span class="code-word">- chip[0]</span>: Chips displayed after clicking
        on the bottom bar.
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
            size-y="200px"
            layout-number="1"
            layout-family="collapsible"
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
        <span class="code-word">- color[0]</span>: Sets the color of the
        elements placed in the top right corner.
        <br />
        <span class="code-word">- chip[0]</span>: Chips displayed after clicking
        on the bottom bar.
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
            size-y="200px"
            layout-number="2"
            layout-family="collapsible"
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
        ],
      },
    };
  },
};
</script>
