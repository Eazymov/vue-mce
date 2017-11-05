import Vue from 'vue';
import VueMceComponent from './component/index.vue';

const VueMce = {
  component: VueMceComponent,

  installed: false,

  install (vm: typeof Vue) {
    vm.component('vue-mce', VueMceComponent);
  }
}

export { VueMceComponent as component };

export default VueMce;
