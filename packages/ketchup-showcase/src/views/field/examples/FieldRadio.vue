<template>
  <div>
    <p>Displays data using radio buttons and grouping them.</p>

    <h3>Radio group with label</h3>
    <div>
      <kup-fld :config.prop="fldConfig" :data.prop="fldData" class="all-columns" />
    </div>

    <h3>Radio group with label and initial value</h3>
    <div>
      <kup-fld :config.prop="fldConfigInitialValue" :data.prop="fldData" />
    </div>

    <h3>Change displayed field</h3>
    <div class="example-container">
      <kup-fld :config.prop="fldConfigDisplayedField" :data.prop="fldData" />
      <div>
        <h4>Select displayed field</h4>
        <kup-combo
          v-if="dataField[0]"
          :items.prop="dataField"
          :initial-value.prop="dataField[0]"
          label="Select label position"
          @ketchupComboSelected="onDisplayedFieldChange"
        />
      </div>
    </div>

    <h3>Change orientation: default horizontal</h3>
    <div class="example-container">
      <kup-fld :config.prop="fldConfigOrientation" :data.prop="fldData" />
      <div>
        <h4>Select displayed field</h4>
        <kup-combo
          :items.prop="directionValues"
          :initial-value.prop="directionValues[0]"
          label="Select label position"
          @ketchupComboSelected="onDirectionChange"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FldRadio',
  data() {
    return {
      fldData: {},
      fldConfig: {},
      fldConfigInitialValue: {},
      fldConfigDisplayedField: {},
      fldConfigOrientation: {},
      directionValues: [{ id: 'vertical' }, { id: 'horizontal' }],
    };
  },
  computed: {
    dataField() {
      return this.fldData[0]
        ? Object.keys(this.fldData[0]).map((key) => {
            return {
              id: key,
            };
          })
        : [];
    },
  },
  mounted() {
    import('@/mock/fldData.ts')
      .then((data) => {
        const { fldData, fldConfigFactory } = data;
        this.fldData = fldData;
        this.fldConfig = fldConfigFactory([
          {
            name: 'type',
            value: 'rad',
          },
          // Mandatory here
          {
            name: 'valueField',
            value: 'id',
          },
          {
            name: 'valueField',
            value: 'id',
          },
          {
            name: 'initialValue',
            value: {},
          },
        ]);
        this.fldConfigInitialValue = {
          ...this.fldConfig,
          initialValue: {
            value: 'ZAMCHI',
            programs: 'Go',
            id: 'sme006',
          },
        };
        this.fldConfigDisplayedField = {
          ...this.fldConfig,
        };
        this.fldConfigOrientation = {
          ...this.fldConfig,
          labelPos: 'top',
          direction: 'vertical',
          submitPos: 'top',
        };
        console.log(this.fldConfigOrientation);
      })
      .catch((err) => {
        console.log(err);
      });
  },
  methods: {
    onDisplayedFieldChange(e) {
      this.fldConfigDisplayedField = {
        ...this.fldConfigDisplayedField,
        displayedField: e.detail.value.id,
      };
    },
    onDirectionChange(e) {
      this.fldConfigOrientation = {
        ...this.fldConfigOrientation,
        direction: e.detail.value.id,
      };
    },
  },
};
</script>