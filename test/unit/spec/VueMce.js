import Vue from 'vue'
import VueMce from 'package'

describe('VueMce', () => {
  it('should have property `component`', () => {
    expect(VueMce.component).toBeDefined()
  })

  it('should have method `install`', () => {
    expect(VueMce.install).toBeDefined()
  })
})
