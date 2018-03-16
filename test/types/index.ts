import Vue from 'vue'
import Component from 'vue-class-component'
import VueMce, { VueMceComponent } from 'package'

Vue.use(VueMce)

@Component
class Test extends Vue {
  get editor(): VueMceComponent {
    return VueMce.component
  }

  get content(): string {
    return this.editor.content
  }

  get instance(): any {
    return this.editor.instance
  }

  get error(): Error {
    return this.editor.error
  }

  public handleError(err: Error): void {
    return this.editor.handleError(err)
  }

  public handleSuccess(editor: any): void {
    return this.editor.handleSuccess(editor)
  }

  public setContent(content: string): boolean {
    return this.editor.setContent(content)
  }

  public handleInput(editor: any): void {
    return this.editor.handleInput()
  }

  public handleChange(content: string): void {
    return this.editor.handleChange()
  }
}

new Test()
