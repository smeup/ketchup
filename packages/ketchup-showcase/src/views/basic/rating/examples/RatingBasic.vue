<template>
  <div>
    <div class="demo-wrapper">
      <p
        >Rating is commonly used to give a vote to something.
        <br />
        <br />
        <span class="code-word">value</span> defines the value of the vote
        <br />
        <span class="code-word">maxValue</span> defines the max value of the
        vote (default 5)
        <br />
      </p>
      <br />
      <div class="demo-container">
        <div class="kup-container">
          <kup-rating :maxValue.prop="10" :value.prop="3"></kup-rating>
        </div>
        <p class="centered">Sample markup</p>
        <code class="flat">{{ markupBasic }}</code>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'RatingBasic',
  data() {
    return {
      markupBasic: '<kup-rating max-value="10" value="3"></kup-rating>',
    };
  },
};
</script>
