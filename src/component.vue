<template lang="html">
  <div class="tinymce">
    <div class="tinymce__err-layout" :class="{ active: error }">
      <div class="tinymce__err-layout__err-text">{{ error && error.message }}</div>
    </div>
    <textarea ref="textarea" rows="10">{{ value }}</textarea>
  </div>
</template>

<script lang="js">
  const defaultConfig = {};

  export default {
    props: {
      config: {
        type: Object,
        default: () => defaultConfig,
      },
      value: {
        type: String,
        default: '',
      },
    },
    
    data: () => ({
      instance: null,
      error: null,
    }),
    
    computed: {
      content: {
        cache: false,
        get () {
          return this.instance.getContent();
        },
      },
    },
    
    methods: {
      handleError (err) {
        this.error = err;
        console.error(err.message);
      },

      handleSuccess (editor) {
        this.instance = editor;
        this.$emit('init', editor);

        editor.on('input change', this.handleInput);
        editor.on('change', this.handleChange);
      },
      
      handleInput (event) {
        this.$emit('input', this.content);
      },
      
      handleChange (event) {
        const content = this.content;

        this.$emit('change', content);
      },
    },

    mounted () {
      if (!window.tinymce) {
        return this.handleError(new Error('TinyMce wasn\'t found'));
      }

      const config = this.config;
      const target = this.$refs.textarea;

      config.target = target;
      config.init_instance_callback = this.handleSuccess;

      window.tinymce.init(config).catch(this.handleError);
    },
    
    beforeDestroy () {
      this.$emit('destroy', this.instance);
      window.tinymce.remove(this.$refs.textarea);
    },
  };
</script>

<style lang="css">
  .tinymce {
    position: relative;
    height: 100%;
    width: 100%;
  }
    
    .tinymce__err-layout {
      background-color: rgba(#fff, .8);
      transition: .3s ease-out;
      justify-content: center;
      pointer-events: none;
      align-items: center;
      position: absolute;
      display: flex;
      height: 100%;
      width: 100%;
      z-index: 2;
      opacity: 0;
      left: 0;
      top: 0;
    }
      
      .tinymce__err-layout.active {
        opacity: 1;
      }
      
      .tinymce__err-layout__err-text {
        text-align: center;
        font-weight: 500;
        max-width: 200px;
        line-height: 1.4;
        font-size: 1rem;
        color: #f44336;
      }

    .tinymce > .mce-container {
      box-sizing: border-box;
      height: 100%;
    }
      
      .tinymce > .mce-container > .mce-container-body {
        flex-flow: column;
        display: flex;
        height: 100%;
      }
        
        .mce-edit-area {
          flex-flow: column;
          display: flex;
          flex-grow: 1;
        }
          
          iframe {
            height: 100% !important;
            flex-grow: 1;
          }
</style>

