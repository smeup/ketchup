<template>
  <div>
    <div class="demo-wrapper">
      <p>
        <span class="code-word">Layout 1</span> settings:
        <br />
        <br />
        <span class="code-word">- button1, button2, button3</span>: Actions, the action bar will be displayed only in presence of at least 1 button. They will be arranged from left to right.
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
        <span class="code-word">- button1, button2, button3</span>: Actions, the action bar will be displayed only in presence of at least 1 button. They will be arranged from left to right.
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
        <span class="code-word">- button1, button2, button3</span>: Actions, the action bar will be displayed only in presence of at least 1 button. They will be arranged from left to right.
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
        <span class="code-word">- button1, button2, button3</span>: Actions, the action bar will be displayed only in presence of at least 1 button. They will be arranged from left to right.
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
  </div>
</template>

<script>
export default {
  name: 'CardMaterial',
  data() {
    return {
      data: {
        button1: { icon: 'widgets', flat: true, title: 'button1' },
        button2: { icon: 'widgets', flat: true, title: 'button2' },
        button3: { icon: 'widgets', flat: true, title: 'button3' },
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
        text1: 'text1',
        text2: 'text2',
        text3: 'text3',
      },
    };
  },
};
</script>
