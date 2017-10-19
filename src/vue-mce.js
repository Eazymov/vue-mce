import component from './component.vue';

const VueMce = {
  component,

  install (Vue) {
    if (VueMce.installed) return false;
  
    Vue.component('vue-mce', component);
  }
}

if (window) {

  window.VueMce = VueMce;

  if (window.Vue) {
    Vue.component('vue-mce', component);
  }
}

export {
  component,
};

export default VueMce;
