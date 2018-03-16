import Vue from 'vue'
import VueSub from 'package'

describe('VueSub', function() {
  it('should have property `component`', function() {
    expect(VueSub.component).toBeDefined()
  })

  it('should have method `install`', function() {
    expect(VueSub.install).toBeDefined()
  })
})
