<template>
  <div>
    <h1>Fld combo</h1>

    <v-expansion-panel>
      <v-expansion-panel-content>
        <template v-slot:header>
          <div>Data used</div>
        </template>
        <p>The following are an example of object used for configuring and running most of the following cases.</p>
        <div class="example-container">
          <code v-text="fldConfig"/>
          <code v-text="fldData"/>
        </div>
      </v-expansion-panel-content>
    </v-expansion-panel>

    <h3>Basic fld using combo-box component</h3>
    <div class="example-container">
      <kup-fld
        :config.prop="fldConfig"
        :data.prop="fldData"/>
    </div>

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
    <div class="example-container">
      <kup-fld
        :config.prop="fldConfigDisplayedField"
        :data.prop="fldData"
      />
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

    <h3>With no initial value</h3>
    <div class="example-container">
      <kup-fld
        :config.prop="fldConfigNoInitialValue"
        :data.prop="fldData"
      />
    </div>

    <!--h3>Marks combo as clearable</h3>
    <div class="example-container">
      <kup-fld
        :config.prop="fldConfigIsClearable"
        :data.prop="fldData"
      />
    </div-->

    <h3>Comparison between using portal mode or not</h3>
    <div class="example-container hide-overflow">
      <div>
        <h4>With portal</h4>
        <kup-fld
          :config.prop="fldConfig"
          :data.prop="fldData"
        />
      </div>
      <div>
        <h4>No portal</h4>
        <kup-fld
          :config.prop="fldConfigNoPortal"
          :data.prop="fldData"
        />
      </div>
    </div>
    <p>See portals for more details.</p>

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
        fldConfigDisplayedField: {},
        fldConfigNoInitialValue: {},
        fldConfigIsClearable: {},
        fldConfigNoPortal: {},
        labelPositions: [
          { id: 'left' },
          { id: 'right' },
          { id: 'top' },
        ],
      };
    },
    mounted() {
      import('@/mock/fldData.ts')
        .then(data => {
          const { fldData, fldConfigFactory } = data;
          this.fldData = fldData;
          this.fldConfig = fldConfigFactory();
          this.fldConfigPosition = fldConfigFactory([{labelPos: 'top'}]);
          this.fldConfigDisplayedField = fldConfigFactory();
          this.fldConfigNoInitialValue = fldConfigFactory([
            {
              name: 'initialValue',
              value: {}
            }
          ]);
          this.fldConfigIsClearable = fldConfigFactory([
            {
              name: 'isClearable',
              value: true
            }
          ]);
          this.fldConfigNoPortal = fldConfigFactory([
            {
              name: 'usePortal',
              value: false
            }
          ]);
        })
        .catch(err => {
          console.log(err);
        })
    },
    computed: {
      dataField() {
        return this.fldData[0] ? Object.keys(this.fldData[0]).map(key => {
          return {
            id: key
          }
        }) :
          [];
      }
    },
    methods: {
      onPositionChange(e) {
        this.fldConfigPosition = {
          ...this.fldConfigPosition,
          labelPos: e.detail.value.id
        };
      },
      onDisplayedFieldChange(e) {
        this.fldConfigDisplayedField = {
          ...this.fldConfigDisplayedField,
          displayedField: e.detail.value.id
        };
      }
    }
  }
</script>

<style scoped>

</style>