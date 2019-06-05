<template>
  <div>
    <kup-fld
      :config.prop="fldConfig"
      :data.prop="fldData"/>
  </div>
</template>

<script>
  export default {
    name: "FldCombo",
    data() {
      return {
        fldConfig: {},
        fldData: []
      };
    },
    mounted() {
      import('@/mock/fldData.ts')
        .then(data => {
          console.log(data);
          const { fldData, fldConfig } = data;
          console.log(fldData, fldConfig);
          this.fldData = fldData;
          this.fldConfig = fldConfig;
        })
        .catch(err => {
          console.log(err);
        })
    }
  }
</script>

<style scoped>

</style>