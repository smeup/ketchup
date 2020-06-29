<template>
  <div>
    <div class="demo-wrapper">
      <p>
        <span class="code-word">Layout 1</span> settings:
        <br />
        <br />
        <span class="code-word">- button1</span>: Action button.
        <br />
        <span class="code-word">- color1</span>: Sets the color of the top bar and of text4 and text6.
        <br />
        <span class="code-word">- color2</span>: Sets the background color of the bottom section.
        <br />
        <span class="code-word">- image1</span>: Left image.
        <br />
        <span class="code-word">- image2</span>: Right image.
        <br />
        <span class="code-word">- progressBar1</span>: Slim progress bar.
        <br />
        <span class="code-word">- text1, text2, text3, text4, text5, text6</span>: Generic text, check the mock-up below to see how they are positioned.
        <span
          class="code-word"
        >text2</span> is colored with the main color of the app.
        <br />
      </p>
      <br />
      <div class="demo-container">
        <div class="kup-container">
          <kup-card
            size-x="500px"
            size-y="300px"
            layout-number="1"
            layout-family="custom"
            :data.prop="data"
          ></kup-card>
        </div>
      </div>
    </div>
    <div class="demo-wrapper">
      <p>
        <span class="code-word">Layout 2</span> settings:
        <br />
        <br />
        <span class="code-word">- button1</span>: Action button.
        <br />
        <span class="code-word">- color1</span>: Sets the color of the left bar.
        <br />
        <span class="code-word">- progressBar1</span>: Radial progress bar.
        <br />
        <span class="code-word">- text1, text2</span>: Generic text, check the mock-up below to see how they are positioned.
        <span
          class="code-word"
        >text1</span> is colored dynamically in order to be displayed with the right contrast when color1 is an HEX value, otherwise it will be white.
        <br />
      </p>
      <br />
      <div class="demo-container">
        <div class="kup-container">
          <kup-card
            size-x="500px"
            size-y="300px"
            layout-number="2"
            layout-family="custom"
            :data.prop="data"
          ></kup-card>
        </div>
      </div>
    </div>
    <div class="demo-wrapper">
      <p>
        <span class="code-word">Layout 3</span> settings:
        <br />
        <br />
        <span class="code-word">- color1</span>: Sets the color of the top bar..
        <br />
        <span class="code-word">- image1</span>: Avatar.
        <br />
        <span class="code-word">- text1, text2, text3</span>: Generic text, check the mock-up below to see how they are positioned.
        <br />
      </p>
      <br />
      <div class="demo-container">
        <div class="kup-container">
          <kup-card
            size-x="300px"
            size-y="300px"
            layout-number="3"
            layout-family="custom"
            :data.prop="data"
          ></kup-card>
        </div>
      </div>
    </div>
    <div class="demo-wrapper">
      <p>
        <span class="code-word">Layout 4</span> settings:
        <br />
        <br />
        <span class="code-word">- color1</span>: Sets the color of the side bar.
        <br />
        <span class="code-word">- chip1</span>: Chips displayed after clicking on the bottom bar.
        <br />
        <span class="code-word">- text1, text2, text3</span>: Generic text, check the mock-up below to see how they are positioned.
        <br />
        <br />This layout features an expandable view, by clicking on the arrow button the height of the card will be set to fit its content. The bottom bar containing this button is 50px tall, so keep this in mind when you set the size of the card.
      </p>
      <br />
      <div class="demo-container">
        <div class="kup-container">
          <kup-card
            size-x="300px"
            size-y="300px"
            layout-number="4"
            layout-family="custom"
            :data.prop="data"
          ></kup-card>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CardCustom',
  data() {
    return {
      data: {
        button1: { icon: 'widgets', flat: true, title: 'button1' },
        chip1: {
          title: 'chip1',
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
        color1: 'var(--kup-spinner-color)',
        color2: 'var(--kup-border-color)',
        image1: {
          data: [
            {
              shape: 'bar',
              color: 'var(--kup-main-color)',
              width: '100%',
              height: '100%',
            },
          ],
          title: 'image1',
        },
        image2: {
          data: [
            {
              shape: 'bar',
              color: 'var(--kup-main-color)',
              width: '100%',
              height: '100%',
            },
          ],
          title: 'image2',
        },
        progressBar1: { value: 50, title: 'progressBar1' },
        text1: 'text1',
        text2: 'text2',
        text3: 'text3',
        text4: 'text4',
        text5: 'text5',
        text6: 'text6',
      },
    };
  },
};
</script>
