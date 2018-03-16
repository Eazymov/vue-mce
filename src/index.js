import VueMce from './vue-mce'

if (window) {
  window.VueMce = VueMce

  if (window.Vue) {
    window.Vue.use(VueMce)
  }
}
