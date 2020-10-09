<template>
  <div>
    <div class="demo-wrapper">
      <p>
        Given the template-driven nature of cards, there aren't styling options
        besides setting the size. By default cards will fit to 100% of their
        container, this can be changed by setting a CSS value to
        <span class="code-word">sizeX</span> and
        <span class="code-word">sizeY</span> props. <br />For example, the cards
        below should be of the same size, even though they differ for
        configuration. One of them has sizeX and sizeY set to 300px, while the
        other follows the default behavior but is placed inside a 300x300px div.
      </p>
      <div class="demo-container">
        <div class="kup-container">
          <kup-card
            style="margin: 1rem;"
            :data.prop="data1"
            layout-family="material"
            layout-number="1"
            size-x="300px"
            size-y="300px"
          ></kup-card>
          <div style="height: 300px; width: 300px;">
            <kup-card
              style="margin: 1rem;"
              :data.prop="data2"
              layout-family="material"
              layout-number="1"
            ></kup-card>
          </div>
        </div>
        <p class="centered">sizeX and sizeY sample markup</p>
        <code class="flat">{{ markupSize }}</code>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CardStyling',
  data() {
    return {
      data1: {
        button1: { icon: 'favorite', flat: true },
        image1: {
          resource: 'images/catz_small.jpg',
        },
        text1: 'sizeX and sizeY',
        text2: "This card' size was set with props",
      },
      data2: {
        button1: { icon: 'favorite', flat: true },
        image1: {
          resource: 'images/catz_small_2.jpg',
        },
        text1: 'Default behavior',
        text2: "This card' size fits the container",
      },
      markupSize: '<kup-card sizeX="300px" sizeY="300px"></kup-card>',
    };
  },
};
</script>
