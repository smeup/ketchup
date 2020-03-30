<template>
  <div>
    <p>
      This section describes the most common configurations of the Field
      component.
    </p>

    <h3>Change label and submit position</h3>
    <div class="example-container">
      <kup-fld :config.prop="fldConfigPosition" :data.prop="fldData" />
      <div>
        <h4>Select label position</h4>
        <kup-combo
          :items.prop="labelPositions"
          :initial-value.prop="labelPositions[0]"
          label="Select label position"
          use-portal
          @ketchupComboSelected="onPositionChange"
        />
        <h4>Select submit position</h4>
        <kup-combo
          :items.prop="labelPositions"
          :initial-value.prop="labelPositions[0]"
          label="Select submit position"
          use-portal
          @ketchupComboSelected="onSubmitPositionChange"
        />
      </div>
    </div>

    <h3>Change label text</h3>
    <div class="example-container">
      <kup-fld :config.prop="fldConfigLabelText" :data.prop="fldData" />
      <div>
        <h4>Change label text</h4>
        <kup-text-field
          :items.prop="labelPositions"
          initial-value="Change me"
          @kupTextFieldSubmit="onLabelTextChange"
        />
      </div>
    </div>

    <h3>Custom submit label</h3>
    <div class="example-container">
      <kup-fld :config.prop="fldConfigSubmitText" :data.prop="fldData" />
      <div>
        <h4>Change label text</h4>
        <kup-text-field
          :items.prop="labelPositions"
          initial-value="Change me"
          @kupTextFieldSubmit="onSubmitTextChange"
        />
      </div>
    </div>

    <h3>Without submit button</h3>
    <div class="example-container">
      <kup-fld :config.prop="fldConfigSubmitNone" :data.prop="fldData" />
    </div>
  </div>
</template>

<script>
const styleEditor = `
<style style="display: inline-block;" contenteditable>
  /* Edit here */
</style>
`;

export default {
  name: 'FldGraphic',
  data() {
    return {
      fldConfig: {},
      fldData: [],
      fldConfigPosition: {},
      fldConfigLabelText: {},
      fldConfigSubmitText: {},
      fldConfigSubmitNone: {},
      labelPositions: [{ id: 'left' }, { id: 'right' }, { id: 'top' }],
    };
  },
  mounted() {
    import('@/mock/fldData.ts')
      .then((data) => {
        console.log(data);
        const { fldData, fldConfigFactory } = data;
        console.log(fldData, fldConfigFactory);
        this.fldData = fldData;
        this.fldConfig = fldConfigFactory();
        this.fldConfigPosition = fldConfigFactory([{ labelPos: 'top' }]);
        this.fldConfigLabelText = fldConfigFactory();
        this.fldConfigSubmitText = fldConfigFactory();
        this.fldConfigSubmitNone = fldConfigFactory([
          {
            name: 'showSubmit',
            value: false,
          },
        ]);
      })
      .catch((err) => {
        console.log(err);
      });
  },
  methods: {
    onPositionChange(e) {
      this.fldConfigPosition = {
        ...this.fldConfigPosition,
        labelPos: e.detail.value.id,
      };
    },
    onLabelTextChange(e) {
      this.fldConfigLabelText = {
        ...this.fldConfigLabelText,
        label: e.detail.value,
      };
    },
    onSubmitPositionChange(e) {
      this.fldConfigPosition = {
        ...this.fldConfigPosition,
        submitPos: e.detail.value.id,
      };
    },
    onSubmitTextChange(e) {
      this.fldConfigSubmitText = {
        ...this.fldConfigSubmitText,
        submitLabel: e.detail.value,
      };
    },
  },
};
</script>
