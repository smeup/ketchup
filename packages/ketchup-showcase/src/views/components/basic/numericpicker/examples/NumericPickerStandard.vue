<template>
  <div>
    <div>
      <h4>Simple</h4>
      <p>
        This is the default for the component, with no additional parameters.</p
      ><br />
      <div class="centered"><kup-numeric-picker></kup-numeric-picker></div>
    </div>
    <div>
      <h4>With max 2 decimals</h4>
      <p>
        This is the setting that provides for the possibility of indicating a
        maximum of 2 decimal numbers.</p
      ><br />
      <div class="centered"
        ><kup-numeric-picker
          decimals="true"
          max-decimals="2"
        ></kup-numeric-picker
      ></div>
    </div>
    <div>
      <h4>With max 3 integers and 2 decimals</h4>
      <p>
        This is the setting that provides for the possibility of indicating a
        maximum of 3 integer numbers and 2 decimal numbers.</p
      ><br />
      <div class="centered"
        ><kup-numeric-picker
          decimals="true"
          max-decimals="2"
          max-integers="3"
        ></kup-numeric-picker
      ></div>
    </div>
    <div>
      <h4>With negative and decimals</h4>
      <p>
        This is the setting that provides for the possibility of indicating
        negative and decimal numbers.</p
      ><br />
      <div class="centered"
        ><kup-numeric-picker
          decimals="true"
          negative="true"
        ></kup-numeric-picker
      ></div>
      <div>
        <h4>With max 8 length</h4>
        <p>
          This is the setting that provides for the possibility of indicating a
          maximum of 8 characters that is the sum of integer and decimal
          numbers.</p
        ><br />
        <div class="centered"
          ><kup-numeric-picker
            decimals="true"
            max-length="8"
          ></kup-numeric-picker
        ></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NumericPickerStandard',
  data() {
    return {};
  },
};
</script>
