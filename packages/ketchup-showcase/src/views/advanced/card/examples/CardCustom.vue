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
        <span class="code-word">- color1</span>: Sets the color of the top bar and of text4 and text6.
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
  </div>
</template>

<script>
export default {
  name: 'CardCustom',
  data() {
    return {
      data: {
        color1: 'var(--kup-spinner-color)',
        color2: 'var(--kup-border-color)',
        button1: { icon: 'widgets', flat: true, title: 'button1' },
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
