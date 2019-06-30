import Vue from 'vue'

import VueMce from '../../../'

describe('VueMce', () => {
  it('has property `component`', () => {
    expect(VueMce.component).toBeDefined()
  })

  it('has method `install`', () => {
    expect(VueMce.install).toBeDefined()
  })
})
