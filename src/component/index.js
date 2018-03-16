export default {
  props: {
    config: {
      type: Object,
      default: () => ({}),
    },
    value: {
      type: String,
      default: '',
    },
    name: {
      type: String,
      default: '',
    },
  },

  data: () => ({
    editorInstance: null,
    content: '',
  }),

  methods: {
    handleError(err) {
      // eslint-disable-next-line no-console
      console.error(err)
      this.$emit('error', err)
    },

    handleSuccess(editor) {
      this.editorInstance = editor
      this.$emit('init', editor)

      const content = this.value

      editor.setContent(content)
      editor.on('input change undo redo setcontent', this.handleInput)
      editor.on('change setcontent', this.handleChange)
    },

    setContent(content) {
      try {
        this.editorInstance.setContent(content)
      } catch (err) {
        this.handleError(err)
      }
    },

    getContent() {
      const { editorInstance } = this

      if (editorInstance) {
        return editorInstance.getContent()
      }

      this.handleError(new Error('vue-mce is not initialized yet'))
      return null
    },

    handleInput() {
      const content = this.editorInstance.getContent()
      this.content = content
      this.$emit('input', content)
    },

    handleChange() {
      this.$emit('change', this.content)
    },
  },

  watch: {
    value(newValue) {
      if (newValue !== this.content) {
        this.setContent(newValue)
      }
    },
  },

  mounted() {
    if (!window.tinymce) {
      return this.handleError(new Error('TinyMce was not found'))
    }

    const config = this.config
    const target = this.$refs.textarea

    config.target = target
    config.init_instance_callback = this.handleSuccess

    window.tinymce.init(config).catch(this.handleError)
  },

  beforeDestroy() {
    this.$emit('destroy', this.editorInstance)

    window.tinymce.remove(this.$refs.textarea)
  },
}
