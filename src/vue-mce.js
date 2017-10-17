import component from './component.vue';

if (window && window.Vue) {
  Vue.component('vue-mce', component);
}

const Plugin = (Vue) => {
  if (Plugin.installed) return false;

  Vue.component('vue-mce', component);
}

export default Plugin;
