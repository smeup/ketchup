// TODO The majority of these imports can be refactored to use Webpack dynamic imports, allowing better code splitting
import Vuetify from "vuetify";
import { Select, Option } from 'element-ui';
import SmeupFld from "./src/components/SmeupFld.vue";
import SmeupLabel from "./src/components/SmeupLabel.vue";
import SmeupMatrix from "./src/components/comp/mat/SmeupMatrix.vue";
import MAT from "./src/components/MAT.vue";

// This is necessary to import correct style for element-ui library
import 'element-ui/lib/theme-chalk/index.css'

// As explained here https://vuetifyjs.com/en/getting-started/quick-start
// we have to import the styles.
// For more options on vuetify customization, have a look at this https://vuetifyjs.com/en/framework/theme#theme
import 'vuetify/dist/vuetify.min.css'

// We have to import this package, which is a better fork than the Google one, as explained here:
// https://github.com/jossef/material-design-icons-iconfont
// To optimize bundling and performance we can substitute this by importing in scss files only the icons that we want.
import 'material-design-icons-iconfont'

// Currently passing options to the installation of this library does not trigger any changes.
// This must be changed to allow customization of Vuetify colors and, setting custom names on this repository components.
// Vuetify components names MUST not be altered.
function install(Vue, options = {}) {
  Vue.use(Vuetify);

  Vue.component(SmeupFld.name, SmeupFld);
  Vue.component(SmeupLabel.name, SmeupLabel);
  Vue.component(SmeupMatrix.name, SmeupMatrix);
  Vue.component(MAT.name, MAT);

  Vue.component('el-select', Select);
  Vue.component('el-option', Option);
}

// By default, this library is meant to be installed as a Vue plugin
export default install;

// However, we can still export each single component.
// Beware that, by using this method, you have to manually install all the components which requires other components.
// Use only if you know what you're doing and are willing to spend time in adjusting your configuration.
export {
  // Exports Vuetify
  Vuetify,

  // Exports element-ui components
  Select,
  Option,

  // Exports custom elements
  SmeupFld,
  SmeupLabel,
  SmeupMatrix,
  MAT
};