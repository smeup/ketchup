<template>
  <div class="fld-container" :class="{ mobile: mobile }">
    <span class="label">{{ label }}</span>

    <div class="input-container">
      <component
        :is="fieldComponent"
        :id="id"
        :mobile="mobile"
        :initialValue="initialValue"
        :disabled="disabled"
        :maxlength="maxlength"
        :size="size"
        :clearValue="clearValue"
        :queryMethod="queryMethod"
        @change="onFldChange"
        @click="onFldClick"
      />
    </div>

    <button v-if="showSubmit" type="button" @click="onBtnClick">Conferma</button>
  </div>
</template>

<script>
import Autocomplete from "./fields/Autocomplete.vue";
import InputText from "./fields/InputText.vue";
import NotImplemented from "./fields/NotImplemented.vue";

export default {
  name: "SmeupFld",

  props: {
    disabled: {
      type: Boolean,
      default: false
    },

    id: {
      type: String,
      required: true
    },

    label: {
      type: String
    },

    type: {
      type: String,
      required: true
    },

    initialValue: {
      type: String
    },

    showSubmit: {
      type: Boolean,
      default: false
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

    queryMethod: {
      type: Function
    },

    mobile: {
      type: Boolean,
      default: false
    }
  },

  data() {
    return {
      value: this.initialValue
    };
  },

  computed: {
    fieldComponent() {
      switch (this.type) {
        case "Acp":
          return Autocomplete;

        case "Itx":
          return InputText;

        default:
          return NotImplemented;
      }
    }
  },

  methods: {
    onBtnClick() {
      this.$emit("click", this.value);
    },

    onFldChange(newValue) {
      this.value = newValue;
      this.$emit("change", this.value);
    },

    onFldClick(newValue) {
      this.value = newValue;
      this.onBtnClick();
    }
  }
};
</script>

<style lang="scss" scoped>
.fld-container {
  display: flex;

  span.label {
    margin-right: 5px;
  }

  > button {
    margin-left: 5px;
  }

  &.mobile {
    flex-direction: column;

    span.label,
    .input-container,
    > button {
      margin-top: 5px;
      margin-bottom: 5px;
    }
  }
}
</style>
