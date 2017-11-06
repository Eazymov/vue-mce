import Vue from 'vue';
import VueSub from 'project';

describe('VueSub', function () {

  it('should have property `component`', function () {
    expect(VueSub.component).toBeDefined();
  });

  it('should have property `installed`', function () {
    expect(VueSub.installed).toBeDefined();
  });

  it('should have method `install`', function () {
    expect(VueSub.install).toBeDefined();
  });
});
