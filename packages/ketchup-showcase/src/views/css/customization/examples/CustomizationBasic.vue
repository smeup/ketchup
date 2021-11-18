<template>
  <div>
    <p>
      Sometimes, custom user interfaces require additional styling options not
      supported natively by the components. While it is reasonable to wrap up
      styling settings inside props for complete overhauls of the components,
      that's not the case for minor changes.
      <br />For example, let's say you need a button:
    </p>
    <div class="demo-container">
      <div class="kup-container">
        <kup-button label="Your button"></kup-button>
      </div>
    </div>
    <br />
    <p>
      Now let's pretend that you need this button inside a tooltip. This look
      would be quite too prominent inside a tooltip, so you'd rather have a more
      subtle approach - ideally using a flat button. Considering the impact of
      styling differences, it is sensible to enable a prop which takes care of
      this changes, in this case the button's
      <span class="code-word">flat</span> prop. <br />And here's your standard
      flat button, enabled by just setting the
      <span class="code-word">flat</span> prop to
      <span class="code-word">true</span>:
    </p>
    <div class="demo-container">
      <div class="kup-container">
        <kup-button styling="flat" label="Your button"></kup-button>
      </div>
    </div>
    <br />
    <p>
      Back on topic, let's say you want to customize something else. You need a
      blue button with yellow text and without border radius.
      <br />If we were to create props or CSS variables for every minor change
      like these, there would be an incredible bloating of setups to handle.
      <br />Here comes the handiness of the
      <span class="code-word">customStyle</span> prop, a string-type prop which
      can be used in almost every component. <br />What does it do? Essentially
      it creates a <span class="code-word">style</span> tag inside the component
      containing the value of the prop as CSS code. <br />How would you change
      this button to reflect your needs? The most basic approach is this one:
      <br />
    </p>
    <div class="demo-container" style="padding: 3rem 0">
      <code class="flat">{{ markupBlueButtonImportant }}</code>
    </div>
    <p>
      Note the
      <span class="code-word">!important</span> notation - in a simple selector
      like <span class="code-word">button {}</span> this notation is essential
      in order to properly override defaults, even though the specificity
      approach should be preferred. Sometimes, when specificity can't be further
      improved, !important is the only way to go. <br />In this particular case,
      a more elegant solution would be to get the
      <span class="code-word">id</span> of the component and get rid of
      !important notations (almost every Ketchup component wrap its content
      inside a <span class="code-word">#kup-component</span> element):
    </p>
    <div class="demo-container" style="padding: 3rem 0">
      <code class="flat">{{ markupBlueButton }}</code>
    </div>
    <p>
      Now let's set this string to the
      <span class="code-word">customStyle</span> prop of the button below:
    </p>
    <div class="demo-container">
      <div class="kup-container">
        <kup-button
          custom-style="#kup-component button { background-color: blue; color: yellow; border-radius: 0px; }"
          label="Your button"
        ></kup-button>
      </div>
      <p class="centered">Sample markup of the component</p>
      <code class="flat">{{ markupBlueButtonProps }}</code>
    </div>

    <p>Your button is now ready to be used!</p>
  </div>
</template>

<script>
export default {
  name: 'CustomizationBasic',
  data() {
    return {
      markupBlueButtonImportant:
        'button { background-color: blue !important; color: yellow !important; border-radius: 0px !important; }',
      markupBlueButton:
        '#kup-component button { background-color: blue; color: yellow; border-radius: 0px; }',
      markupBlueButtonProps:
        '<kup-button custom-style="#kup-component button { background-color: blue; color: yellow; border-radius: 0px; }" label="Your button"></kup-button>',
    };
  },
};
</script>
