<template>
  <div>
    <h1>Fld combo</h1>
    <h3>Basic fld using combo-box component</h3>
    <kup-fld
      :config.prop="fldConfig"
      :data.prop="fldData"/>

    <h3>Change label position</h3>
    <div class="example-container">
      <kup-fld
        :config.prop="fldConfigPosition"
        :data.prop="fldData"
      />
      <div>
        <h4>Select label position</h4>
        <kup-combo
          :items.prop="labelPositions"
          :initial-value.prop="labelPositions[0]"
          label="Select label position"
          @ketchupComboSelected="onPositionChange"
        />
      </div>
    </div>

    <h3>Change displayed field</h3>
    <h3>Change value field</h3>
    <h3>With no initial value</h3>
    <h3>Marks combo as clearable</h3>
    <h3>Change label text</h3>

  </div>
</template>

<script>
  export default {
    name: "FldCombo",
    data() {
      return {
        fldConfig: {},
        fldData: [],
        fldConfigPosition: {},
        labelPositions: [
          { id: 'left' },
          { id: 'right' },
          { id: 'top' },
        ]
      };
    },
    mounted() {
      import('@/mock/fldData.ts')
        .then(data => {
          console.log(data);
          const { fldData, fldConfigFactory } = data;
          console.log(fldData, fldConfigFactory);
          this.fldData = fldData;
          this.fldConfig = fldConfigFactory();
          this.fldConfigPosition = fldConfigFactory([{labelPos: 'top'}]);
        })
        .catch(err => {
          console.log(err);
        })
    },
    methods: {
      onPositionChange(e) {
        const { value } = e.detail;
        this.fldConfigPosition = {
          ...this.fldConfigPosition,
          labelPos: value.id
        };
      }
    }
  }
</script>

<style scoped>

</style>