<template>
  <div :id="id" class="inputtext" :class="{ mobile: mobile }">
    <input
      type="text"
      v-model="value"
      :disabled="disabled"
      :readonly="disabled"
      :maxlength="maxlength"
      :size="size"
      @change="onFieldChange"
      @keydown.enter.stop.prevent="onFieldSubmit"
    >

    <clear-button v-if="clearValue && !disabled" @click="onClear"/>
  </div>
</template>

<script>
import ClearButton from "../shared/ClearButton.vue";

export default {
  components: {
    ClearButton
  },

  data() {
    return {
      value: this.initialValue
    };
  },

  props: {
    disabled: {
      type: Boolean,
      default: false
    },

    id: {
      type: String,
      required: true
    },

    initialValue: {
      type: String
    },

    maxlength: {
      type: Number,
      default: null
    },

    size: {
      type: Number,
      default: null
    },

    clearValue: {
      type: Boolean,
      default: false
    },

    mobile: {
      type: Boolean,
      default: false
    }
  },

  methods: {
    onFieldChange() {
      this.$emit("change", this.value);
    },

    onFieldSubmit() {
      this.$emit("click", this.value);
    },

    onClear() {
      this.value = "";
      this.onFieldChange();
    }
  }
};
</script>

<style lang="scss" scoped>
.inputtext {
  display: flex;

  &.mobile {
    > input {
      width: 100%;
    }
  }
}
</style>
