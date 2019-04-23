// https://medium.com/justfrontendthings/how-to-create-and-publish-your-own-vuejs-component-library-on-npm-using-vue-cli-28e60943eed3

import Vue from "vue";

// components
import SmeupFld from "./SmeupFld.vue";
import SmeupLabel from "./SmeupLabel.vue";
import SmeupMatrix from "./comp/mat/SmeupMatrix.vue";
import MAT from "./MAT.vue";

const Components = {
  SmeupFld,
  SmeupLabel,
  SmeupMatrix,
  MAT
};

Object.keys(Components).forEach(name => Vue.component(name, Components[name]));

export default Components;
