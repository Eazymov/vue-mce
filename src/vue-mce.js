import component from './component/index.vue'

const VueMce = {
  component,

  install(vm) {
    vm.component('vue-mce', component)
  },
}

export { component }

export default VueMce
