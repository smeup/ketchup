<template>
  <div>
    <div class="demo-wrapper">
      <p>
        Sometimes shoud want to have an input text for numbers, and check the
        integer part length and the decimal part length. The attributes
        <span class="code-word">decimals</span> and
        <span class="code-word">integers</span> allow to set this feature for an
        <span class="code-word">inputType="number"</span> field.
      </p>
      <div class="demo-container">
        <div class="kup-container">
          <kup-text-field
            input-type="number"
            decimals="2"
            integers="4"
            initial-value="1234.56"
          ></kup-text-field>
        </div>
        <p class="centered"
          >Input number 4 integers and 2 decimals sample markup</p
        >
        <code class="flat">{{ markupSimpleNumber }}</code>

        <div class="kup-container">
          <kup-text-field
            allow-negative
            input-type="number"
            decimals="2"
            integers="4"
            initial-value="-1234.56"
          ></kup-text-field>
        </div>
        <p class="centered"
          >Input number 4 integers and 2 decimals and allow negative values
          sample markup</p
        >
        <code class="flat">{{ markupNegativeNumber }}</code>

        <div class="kup-container">
          <kup-text-field
            group
            input-type="number"
            decimals="2"
            integers="4"
            initial-value="1234.56"
          ></kup-text-field>
        </div>
        <p class="centered"
          >Input number 4 integers and 2 decimals and format with group
          separator sample markup</p
        >
        <code class="flat">{{ markupGroupNumber }}</code>

        <p
          >You can also have the possibility to get the 'Plus' and 'Minus'
          button at the end of input number field by specifing the
          'quantity-buttons'.</p
        >
        <div class="kup-container">
          <kup-text-field
            label="Normal"
            input-type="number"
            input-mode="decimal"
            quantity-buttons
          ></kup-text-field>
        </div>
        <p class="centered">Input number with plus and minus button</p>
        <code class="flat">{{ plusAndMinus }}</code>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TextfieldNumber',
  data() {
    return {
      markupSimpleNumber:
        '<kup-text-field input-type="number" decimals="2" integers="4"></kup-text-field>',
      markupNegativeNumber:
        '<kup-text-field input-type="number" allow-negative decimals="2" integers="4"></kup-text-field>',
      markupGroupNumber:
        '<kup-text-field input-type="number" group decimals="2" integers="4"></kup-text-field>',
      plusAndMinus:
        '<kup-text-field input-type="number" input-mode="decimal" quantity-buttons label="Normal"></kup-text-field>',
    };
  },
};
</script>

<style scoped lang="scss">
kup-text-field {
  margin: auto;
  padding: 0.5em;
}
</style>
