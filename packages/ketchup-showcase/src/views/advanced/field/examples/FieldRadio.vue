<template>
  <div>
    <p>Displays data using radio buttons and grouping them.</p>

    <h3>Radio group with label</h3>
    <div>
      <kup-fld :config.prop="fldConfig" :data.prop="fldData" />
    </div>

    <h3>Radio group with label and initial value</h3>
    <div>
      <kup-fld :config.prop="fldConfig" :data.prop="fldDataPreChecked" />
    </div>

    <h3>Radio group with label on the left</h3>
    <div>
      <kup-fld :config.prop="fldConfigLeadLbl" :data.prop="fldData"  />
    </div>

    <h3>Radio group disabled</h3>
    <div>
      <kup-fld :config.prop="fldConfigDis" :data.prop="fldDataPreChecked" />
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
        const { fldData, fldDataWupRadio, fldDataWupRadioPreChecked, fldConfigFactory } = data;
        this.fldData = fldDataWupRadio;
        this.fldDataPreChecked = fldDataWupRadioPreChecked;
        this.fldConfig = fldConfigFactory([
          {
            name: 'type',
            value: 'rad',
          }
        ]);
        this.fldConfigLeadLbl = fldConfigFactory([
          {
            name: 'type',
            value: 'rad',
          },
          {
            name: 'leadingLabel',
            value: 'true',
          },
        ]);
        this.fldConfigDis = fldConfigFactory([
          {
            name: 'type',
            value: 'rad',
          },
          {
            name: 'disabled',
            value: 'true',
          }
        ]);
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