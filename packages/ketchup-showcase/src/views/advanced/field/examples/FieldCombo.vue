<template>
  <div>
    <p>Displays data using a combobox component.</p>

    <v-expansion-panel>
      <v-expansion-panel-content>
        <template v-slot:header>
          <div>Data used</div>
        </template>
        <p>The following are an example of object used for configuring and running most of the following cases.</p>
        <div class="example-container">
          <code v-text="fldConfig" />
          <code v-text="fldData" />
        </div>
      </v-expansion-panel-content>
    </v-expansion-panel>

    <h3>Basic fld using combo-box component</h3>
    <div class="example-container">
      <kup-fld :config.prop="fldConfig" :data.prop="fldData" />
    </div>

    <h3>With no initial value</h3>
    <div class="example-container">
      <kup-fld :config.prop="fldConfig" :data.prop="fldDataUnselected" />
    </div>

    <h3>With separator</h3>
    <div class="example-container">
      <kup-fld :config.prop="fldConfig" :data.prop="fldDataSeparator" />
    </div>    

  </div>
</template>

<script>
export default {
  name: 'FldCombo',
  data() {
    return {
      fldConfig: {},
      fldData: [],
      fldDataUnselected: [],
      fldDataSeparator: [],
    };
  },
  mounted() {
    import('@/mock/fldData.ts')
      .then((data) => {
        const { fldDataWupCombobox, fldDataWupComboboxUnselected, fldDataWupComboboxSeparator, fldConfigFactory } = data;
        this.fldData = fldDataWupCombobox;
        this.fldDataUnselected = fldDataWupComboboxUnselected;
        this.fldDataSeparator = fldDataWupComboboxSeparator;
        this.fldConfig = fldConfigFactory();
      })
      .catch((err) => {
        console.log(err);
      });
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
  methods: {
  },
};
</script>