import Vue from 'vue';
import VueMce from 'package';

Vue.use(VueMce);

const App = {
  render (createElement) {
    const self = this;
    const {
      value,
      showEditor,
      initialValue,
      handleInit,
      handleError,
      handleInput,
      handleChange,
      handleDestroy,
    } = self;

    return createElement('div', {
      attrs: {
        id: 'root',
      },
    }, [
      showEditor && createElement('vue-mce', {
        props: {
          value,
          initialValue,
        },
        on: {
          init: handleInit,
          error: handleError,
          input (value) {
            handleInput(value);
            self.value = value;
          },
          change: handleChange,
          destroy: handleDestroy,
        },
      }),
      createElement('div', {
        attrs: {
          id: 'output',
        },
        domProps: {
          innerHTML: value,
        }
      }),
      createElement('button', {
        attrs: {
          id: 'button',
        },
        on: {
          click () {
            self.initialValue = 'CHANGED';
          },
        },
      }, 'Input'),
      createElement('button', {
        attrs: {
          id: 'destroy',
        },
        on: {
          click () {
            self.showEditor = false;
          },
        },
      }, 'Destroy'),
    ]);
  },

  data: () => ({
    value: '',
    initialValue: '',
    showEditor: true,
  }),

  created () {
    window.editor = {
      init: false,
      error: false,
      input: false,
      change: false,
      destroy: false,
    };
  },

  methods: {
    handleInit () {
      window.editor.init = true;
    },

    handleError () {
      window.editor.error = true;
    },

    handleInput () {
      window.editor.input = true;
    },

    handleChange () {
      window.editor.change = true;
    },

    handleDestroy () {
      window.editor.destroy = true;
    },
  },
};

new Vue({
  el: '#root',
  render: (h) => h(App),
  components: { App, },
});
