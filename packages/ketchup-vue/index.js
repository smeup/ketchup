import SmeupFld from "./src/components/SmeupFld.vue";
import SmeupLabel from "./src/components/SmeupLabel.vue";
import SmeupMatrix from "./src/components/comp/mat/SmeupMatrix.vue";

const VueJsf = {
  install(Vue) {
    Vue.component(SmeupFld.name, SmeupFld);
    Vue.component(SmeupLabel.name, SmeupLabel);
    Vue.component(SmeupMatrix.name, SmeupMatrix);
  }
};

export default VueJsf;
