<template lang="html">
  <div class="tinymce">
    <div class="tinymce__err-layout" v-if="error">
      <div class="tinymce__err-layout__err-text">{{ error && error.message }}</div>
    </div>
    <textarea v-else ref="textarea" rows="10">{{ value }}</textarea>
  </div>
</template>

<script lang="js">
  export default {
    props: {
      config: {
        type: Object,
        default: () => {},
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

        editor.on('input change undo redo', this.handleInput);
        editor.on('change', this.handleChange);
      },

      setContent (content) {
        const instance = this.instance;

        if (instance) {
          instance.setContent(content);

          return true;
        }

        return false;
      },
      
      handleInput (event) {
        this.$emit('input', this.instance.getContent());
      },
      
      handleChange (event) {
        this.$emit('change', this.instance.getContent());
      },
    },

    mounted () {
      if (!window.tinymce) {
        return this.handleError(new Error("TinyMce wasn't found"));
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

<style lang="sass">
  .tinymce
    box-sizing: border-box
    position: relative
    height: 100%
    width: 100%
    padding: 0
    margin: 0

    & *
      box-sizing: border-box
      padding: 0
      margin: 0
    
    &__err-layout
      justify-content: center
      background-color: #fff
      pointer-events: none
      align-items: center
      position: absolute
      display: flex
      height: 100%
      width: 100%
      z-index: 2
      left: 0
      top: 0
      
      &__err-text
        text-align: center
        font-weight: 500
        max-width: 200px
        line-height: 1.4
        font-size: 1rem
        color: #f44336

    & > .mce-container
      box-sizing: border-box
      height: 100%
      
      & > .mce-container-body
        flex-flow: column
        display: flex
        height: 100%
        
        .mce-edit-area
          flex-flow: column
          display: flex
          flex-grow: 1
          
          iframe
            flex-grow: 1
</style>

