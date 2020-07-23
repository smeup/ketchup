<template>
  <div>
    <div class="demo-wrapper">
      <p>
        <span class="code-word">Layout 1</span> settings:
        <br />
        <br />
        <span class="code-word">- button1, button2, button3, button4, button5</span>: Actions, the action bar will be displayed only in presence of at least 1 button. They will be arranged from left to right.
        <br />
        <span class="code-word">- image1</span>: Cover.
        <br />
        <span class="code-word">- text1</span>: Title.
        <br />
        <span class="code-word">- text2</span>: Subtitle.
        <br />
        <span class="code-word">- text3</span>: Description.
      </p>
      <br />
      <div class="demo-container">
        <div class="kup-container">
          <kup-card size-x="300px" size-y="300px" layout-number="1" :data.prop="data"></kup-card>
        </div>
      </div>
    </div>

    <div class="demo-wrapper">
      <p>
        <span class="code-word">Layout 2</span> settings:
        <br />
        <br />
        <span class="code-word">- button1, button2, button3, button4, button5</span>: Actions, the action bar will be displayed only in presence of at least 1 button. They will be arranged from left to right.
        <br />
        <span class="code-word">- image1</span>: Cover.
        <br />
        <span class="code-word">- text1</span>: Title.
        <br />
        <span class="code-word">- text2</span>: Subtitle.
        <br />
        <span class="code-word">- text3</span>: Description.
      </p>
      <br />
      <div class="demo-container">
        <div class="kup-container">
          <kup-card size-x="300px" size-y="300px" layout-number="2" :data.prop="data"></kup-card>
        </div>
      </div>
    </div>

    <div class="demo-wrapper">
      <p>
        <span class="code-word">Layout 3</span> settings:
        <br />
        <br />
        <span class="code-word">- button1, button2, button3, button4, button5</span>: Actions, the action bar will be displayed only in presence of at least 1 button. They will be arranged from left to right.
        <br />
        <span class="code-word">- image1</span>: Cover.
        <br />
        <span class="code-word">- text1</span>: Title.
        <br />
        <span class="code-word">- text2</span>: Subtitle.
        <br />
        <span class="code-word">- text3</span>: Description.
      </p>
      <br />
      <div class="demo-container">
        <div class="kup-container">
          <kup-card size-x="300px" size-y="300px" layout-number="3" :data.prop="data"></kup-card>
        </div>
      </div>
    </div>

    <div class="demo-wrapper">
      <p>
        <span class="code-word">Layout 4</span> settings:
        <br />
        <br />
        <span class="code-word">- button1, button2, button3, button4, button5</span>: Actions, the action bar will be displayed only in presence of at least 1 button. They will be arranged from left to right.
        <br />
        <span class="code-word">- image1</span>: Cover.
        <br />
        <span class="code-word">- text1</span>: Title.
        <br />
        <span class="code-word">- text2</span>: Subtitle.
      </p>
      <br />
      <div class="demo-container">
        <div class="kup-container">
          <kup-card size-x="300px" size-y="300px" layout-number="4" :data.prop="data"></kup-card>
        </div>
      </div>
    </div>

    <div class="demo-wrapper">
      <p>
        <span class="code-word">Layout 5</span> settings:
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
          <kup-card size-x="500px" size-y="300px" layout-number="5" :data.prop="data"></kup-card>
        </div>
      </div>
    </div>

    <div class="demo-wrapper">
      <p>
        <span class="code-word">Layout 6</span> settings:
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
        >text1</span> will be white.
        <br />
      </p>
      <br />
      <div class="demo-container">
        <div class="kup-container">
          <kup-card size-x="500px" size-y="300px" layout-number="6" :data.prop="data"></kup-card>
        </div>
      </div>
    </div>
    <div class="demo-wrapper">
      <p>
        <span class="code-word">Layout 7</span> settings:
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
          <kup-card size-x="300px" size-y="300px" layout-number="7" :data.prop="data"></kup-card>
        </div>
      </div>
    </div>

    <div class="demo-wrapper">
      <p>
        <span class="code-word">Layout 8</span> settings:
        <br />
        <br />
        <span class="code-word">- color1</span>: Sets the color of the elements placed in the top right corner and the color of the background, its opacity will be set to 10%.
        <br />
        <span class="code-word">- chip1</span>: Chips.
        <br />
        <span class="code-word">- image1</span>: Image on the top right corner, colored with color1.
        <br />
        <span class="code-word">- text1, text2, text3</span>: Generic text, check the mock-up below to see how they are positioned.
        <br />
      </p>
      <br />
      <div class="demo-container">
        <div class="kup-container">
          <kup-card size-x="300px" size-y="300px" layout-number="8" :data.prop="data"></kup-card>
        </div>
      </div>
    </div>

    <div class="demo-wrapper">
      <p>
        <span class="code-word">Layout 9</span> settings:
        <br />
        <br />
        <span class="code-word">- color1</span>: Sets the color of the icon.
        <br />
        <span class="code-word">- chart1</span>: Chart on the right.
        <br />
        <span class="code-word">- image1</span>: Image on the left, colored with color1.
        <br />
        <span class="code-word">- text1, text2, text3</span>: Generic text, check the mock-up below to see how they are positioned.
        <br />
      </p>
      <br />
      <div class="demo-container">
        <div class="kup-container">
          <kup-card size-x="600px" size-y="150px" layout-number="9" :data.prop="data"></kup-card>
        </div>
      </div>
    </div>

    <div class="demo-wrapper">
      <p>
        <span class="code-word">Layout 10</span> settings:
        <br />
        <br />
        <span class="code-word">- color1</span>: Sets the color of the icon.
        <br />
        <span class="code-word">- chart1</span>: Chart on the left.
        <br />
        <span class="code-word">- image1</span>: Image on the right, colored with color1.
        <br />
        <span class="code-word">- text1, text2, text3</span>: Generic text, check the mock-up below to see how they are positioned.
        <br />
      </p>
      <br />
      <div class="demo-container">
        <div class="kup-container">
          <kup-card size-x="600px" size-y="150px" layout-number="10" :data.prop="data"></kup-card>
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
      data: {
        button1: { icon: 'widgets', flat: true, title: 'button1' },
        button2: { icon: 'widgets', flat: true, title: 'button2' },
        button3: { icon: 'widgets', flat: true, title: 'button3' },
        button4: { icon: 'widgets', flat: true, title: 'button4' },
        button5: { icon: 'widgets', flat: true, title: 'button5' },
        chart1: {
          title: 'chart1',
          offlineMode: { value: '1;7;-5;6;10;-5;3;4', shape: 'line' },
        },
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
