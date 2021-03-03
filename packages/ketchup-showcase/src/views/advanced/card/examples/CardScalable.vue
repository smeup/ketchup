<template>
  <div>
    <p>
      The main feature of this layout family is the automatic fit of the
      content, the class used is
      <span class="code-word">scalable-element</span>. Whenever the card' size
      changes, the ResizeObserver API starts a function which adjusts the size
      of the content to be included in the range of 40% and 60% of the maximum
      width.
      <br />
      <br />When the width matches the criteria, a second adjustment will make
      sure that <span class="code-word">scalable-element</span> doesn't exceed
      the 80% of the height.
      <br />
    </p>
    <div class="demo-wrapper">
      <p>
        <span class="code-word">Layout 1</span> settings:
        <br />
        <br />
        <span class="code-word">- text1</span>: Emphasized text, ideally for a
        value.
        <br />
        <span class="code-word">- text2</span>: Description.
        <br />
      </p>
      <br />
      <div class="demo-container">
        <div class="kup-container">
          <kup-card
            size-x="300px"
            size-y="200px"
            layout-number="1"
            layout-family="scalable"
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
        <span class="code-word">- color1</span>: The color of image1.
        <br />
        <span class="code-word">- image1</span>: Should be an icon.
        <br />
        <span class="code-word">- text1</span>: Should be the integer part of a
        number, the layout automatically places a comma.
        <br />
        <span class="code-word">- text2</span>: Should be the decimal part of a
        number.
        <br />
        <span class="code-word">- text3</span>: Should be a unit of measurement.
        <br />
      </p>
      <br />
      <div class="demo-container">
        <div class="kup-container">
          <kup-card
            size-x="300px"
            size-y="200px"
            layout-number="2"
            layout-family="scalable"
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
        <span class="code-word">- text1</span>: Emphasized text, ideally for a
        value.
        <br />
        <span class="code-word">- text2</span>: Description.
        <br />
      </p>
      <br />
      <div class="demo-container">
        <div class="kup-container">
          <kup-card
            size-x="300px"
            size-y="200px"
            layout-number="3"
            layout-family="scalable"
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
        <span class="code-word">- color1</span>: The color of image1.
        <br />
        <span class="code-word">- image1</span>: Should be an icon.
        <br />
        <span class="code-word">- text1</span>: Should be the integer part of a
        number, the layout automatically places a comma.
        <br />
        <span class="code-word">- text2</span>: Should be the decimal part of a
        number.
        <br />
        <span class="code-word">- text3</span>: Should be a unit of measurement.
        <br />
        <span class="code-word">- text4</span>: Description.
        <br />
      </p>
      <br />
      <div class="demo-container">
        <div class="kup-container">
          <kup-card
            size-x="300px"
            size-y="200px"
            layout-number="4"
            layout-family="scalable"
            :data.prop="data"
          ></kup-card>
        </div>
      </div>
    </div>
    <div class="demo-wrapper">
      <p>
        <span class="code-word">Layout 5</span> settings:
        <br />
        <br />
        <span class="code-word">- color1</span>: The color of image1.
        <br />
        <span class="code-word">- image1</span>: Should be an icon.
        <br />
        <span class="code-word">- text1</span>: Emphasized text, ideally for a
        value.
        <br />
        <span class="code-word">- text2</span>: Description.
        <br />
      </p>
      <br />
      <div class="demo-container">
        <div class="kup-container">
          <kup-card
            size-x="300px"
            size-y="200px"
            layout-number="5"
            layout-family="scalable"
            :data.prop="data"
          ></kup-card>
        </div>
      </div>
    </div>
    <div class="demo-wrapper">
      <p>
        <span class="code-word">Layout 6</span> settings:
        <br />
        <br />
        <span class="code-word">- color1</span>: The color of image1.
        <br />
        <span class="code-word">- image1</span>: Should be an icon.
        <br />
        <span class="code-word">- text1</span>: Emphasized text, ideally for a
        value.
        <br />
        <span class="code-word">- text2</span>: Description.
        <br />
      </p>
      <br />
      <div class="demo-container">
        <div class="kup-container">
          <kup-card
            size-x="300px"
            size-y="200px"
            layout-number="6"
            layout-family="scalable"
            :data.prop="data"
          ></kup-card>
        </div>
      </div>
    </div>
    <div class="demo-wrapper">
      <p>
        <span class="code-word">Layout 7</span> settings:
        <br />
        <br />
        <span class="code-word">- color1</span>: The color of image1.
        <br />
        <span class="code-word">- image1</span>: Should be an icon.
        <br />
        <span class="code-word">- text1</span>: Emphasized text, ideally for a
        value.
        <br />
        <span class="code-word">- text2</span>: Description.
        <br />
      </p>
      <br />
      <div class="demo-container">
        <div class="kup-container">
          <kup-card
            size-x="300px"
            size-y="200px"
            layout-number="7"
            layout-family="scalable"
            :data.prop="data"
          ></kup-card>
        </div>
      </div>
    </div>
    <div class="demo-wrapper">
      <p>
        <span class="code-word">Layout 8</span> settings:
        <br />
        <br />
        <span class="code-word">- color1</span>: The color of image1.
        <br />
        <span class="code-word">- image1</span>: Should be an icon.
        <br />
        <span class="code-word">- text1</span>: Emphasized text, ideally for a
        value.
        <br />
        <span class="code-word">- text2</span>: Description.
        <br />
      </p>
      <br />
      <div class="demo-container">
        <div class="kup-container">
          <kup-card
            size-x="300px"
            size-y="200px"
            layout-number="8"
            layout-family="scalable"
            :data.prop="data"
          ></kup-card>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CardScalable',
  data() {
    return {
      data: {
        color: ['var(--kup-primary-color)'],
        image: {
          resource: 'widgets',
          title: 'image1',
        },
        text: ['t1', 't2', 't3', 't4'],
      },
    };
  },
};
</script>
