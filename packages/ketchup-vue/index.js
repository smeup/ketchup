import Vuetify from "vuetify";
import { Select, Option } from 'element-ui';
import SmeupFld from "./src/components/SmeupFld.vue";
import SmeupLabel from "./src/components/SmeupLabel.vue";
import SmeupMatrix from "./src/components/comp/mat/SmeupMatrix.vue";
import MAT from "./src/components/MAT.vue";

import 'element-ui/lib/theme-chalk/index.css'
import 'vuetify/src/stylus/app.styl'

function install(Vue, options = {}) {
  Vue.use(Vuetify);

  Vue.component(SmeupFld.name, SmeupFld);
  Vue.component(SmeupLabel.name, SmeupLabel);
  Vue.component(SmeupMatrix.name, SmeupMatrix);
  Vue.component(MAT.name, MAT);

  Vue.component('el-select', Select);
  Vue.component('el-option', Option);
}

export default install;

export {
  SmeupFld,
  SmeupLabel,
  SmeupMatrix,
  MAT
};