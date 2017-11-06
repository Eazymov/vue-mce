import Vue from 'vue';
import VueMce from './vue-mce';

declare global {
  interface Window {
    Vue?: typeof Vue;
    VueMce?: typeof VueMce;
  }
}

if (window) {
  window.VueMce = VueMce;

  if (window.Vue) {
    window.Vue.use(VueMce);
  }
}
