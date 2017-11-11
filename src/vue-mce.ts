import Vue from 'vue';
import component from './component/index.vue';

const VueMce = {
  component,

  install (vm: typeof Vue) {
    vm.component('vue-mce', component);
  }
}

export { component };

export default VueMce;
