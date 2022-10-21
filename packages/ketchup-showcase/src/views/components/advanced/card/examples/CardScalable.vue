<template>
  <div>
    <p>
      The main feature of this layout family is the automatic fit of the
      content, the class used is
      <span class="code-word">scalable-element</span>. Whenever the card' size
      changes, the ResizeObserver API inside the KupManager class starts a
      function which adjusts the size of the content to be included in the range
      of 40% and 60% of the maximum width.
      <br />
      <br />When the width matches the criteria, a second adjustment will make
      sure that <span class="code-word">scalable-element</span> doesn't exceed
      the 80% of the height.
      <br />
    </p>
    <div class="demo-wrapper">
      <p>
        <span class="code-word">Layout 1</span> configuration:
        <br />
        <br />
        <span class="code-word">- text[0]</span>: Emphasized text, ideally for a
        value.
        <br />
        <span class="code-word">- text[1]</span>: Description.
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
        <span class="code-word">Layout 2</span> configuration:
        <br />
        <br />
        <span class="code-word">- color[0]</span>: The color of image1.
        <br />
        <span class="code-word">- image[0]</span>: Should be an icon.
        <br />
        <span class="code-word">- text[0]</span>: Should be the integer part of
        a number, the layout automatically places a comma.
        <br />
        <span class="code-word">- text[1]</span>: Should be the decimal part of
        a number.
        <br />
        <span class="code-word">- text[2]</span>: Should be a unit of
        measurement.
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
        <span class="code-word">Layout 3</span> configuration:
        <br />
        <br />
        <span class="code-word">- text[0]</span>: Emphasized text, ideally for a
        value.
        <br />
        <span class="code-word">- text[1]</span>: Description.
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
        <span class="code-word">Layout 4</span> configuration:
        <br />
        <br />
        <span class="code-word">- color[0]</span>: The color of image1.
        <br />
        <span class="code-word">- image[0]</span>: Should be an icon.
        <br />
        <span class="code-word">- text[0]</span>: Should be the integer part of
        a number, the layout automatically places a comma.
        <br />
        <span class="code-word">- text[1]</span>: Should be the decimal part of
        a number.
        <br />
        <span class="code-word">- text[2]</span>: Should be a unit of
        measurement.
        <br />
        <span class="code-word">- text[3]</span>: Description.
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
        <span class="code-word">- color[0]</span>: The color of image1.
        <br />
        <span class="code-word">- image[0]</span>: Should be an icon.
        <br />
        <span class="code-word">- text[0]</span>: Emphasized text, ideally for a
        value.
        <br />
        <span class="code-word">- text[1]</span>: Description.
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
        <span class="code-word">- color[0]</span>: The color of image1.
        <br />
        <span class="code-word">- image[0]</span>: Should be an icon.
        <br />
        <span class="code-word">- text[0]</span>: Emphasized text, ideally for a
        value.
        <br />
        <span class="code-word">- text[1]</span>: Description.
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
        <span class="code-word">- color[0]</span>: The color of image1.
        <br />
        <span class="code-word">- image[0]</span>: Should be an icon.
        <br />
        <span class="code-word">- text[0]</span>: Emphasized text, ideally for a
        value.
        <br />
        <span class="code-word">- text[1]</span>: Description.
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
        <span class="code-word">- color[0]</span>: The color of image1.
        <br />
        <span class="code-word">- image[0]</span>: Should be an icon.
        <br />
        <span class="code-word">- text[0]</span>: Emphasized text, ideally for a
        value.
        <br />
        <span class="code-word">- text[1]</span>: Description.
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
    <div class="demo-wrapper">
      <p>
        <span class="code-word">Layout 9</span> settings:
        <br />
        <br />
        <span class="code-word">- color[0]</span>: The color of left vertical
        bar (optional, by default is primary color of theme).
        <br />
        <span class="code-word">- color[1]</span>: The color of background
        component (optional, by default is background color of theme).
        <br />
        <span class="code-word">- color[2]</span>: The color of text in right
        area (optional, by default is text color of theme).
        <br />
        <span class="code-word">- text[0]</span>: The main emphasized text,
        ideally for a value.
        <br />
        <span class="code-word">- text[1]</span>: A description text (optional).
        <br />
        <span class="code-word">- button[0-3]</span>: A list of button at bottom
        of right area (optional).
        <br />
      </p>
      <br />
      <div class="demo-container">
        <div class="kup-container">
          <kup-card
            size-x="300px"
            size-y="200px"
            layout-number="9"
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
        image: [
          {
            resource: 'widgets',
            title: 'image[0]',
          },
        ],
        text: ['t[0]', 't[1]', 't[2]', 't[3]'],
        button: [
          { id: 'search', icon: 'search', title: 'Find objects' },
          { id: 'widgets', icon: 'widgets', title: 'Open objects' },
        ],
      },
    };
  },
};
</script>
