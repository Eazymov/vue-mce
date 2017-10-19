import component from './component.vue';

if (window && window.Vue) {
  Vue.component('vue-mce', component);
}

const VueMce = {
  component,

  install (Vue) {
    if (VueMce.installed) return false;
  
    Vue.component('vue-mce', component);
  }
}

export {
  component,
};

export default VueMce;
