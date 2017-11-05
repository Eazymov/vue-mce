
module.exports = {
  ['basic'] (browser) {
    browser
      .url('localhost:8080/test/e2e/spec/basic.html')
      .waitForElementVisible('body', 500)
      .end();
  },
};
