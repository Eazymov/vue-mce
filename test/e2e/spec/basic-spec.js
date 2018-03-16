require('dotenv').config()

const host = process.env.TEST_HOST || 'localhost'
const port = process.env.TEST_PORT || '8080'
const dir = process.env.E2E_TEST_DIR || '/test/e2e/spec/'
const resolve = src => {
  return `${host}:${port + dir}` + src
}

const test = (browser, url) => {
  browser
    .url(url)
    .waitForElementVisible('body', 500)
    .pause(500)
    .waitForElementVisible('iframe', 1000)
    .click('iframe')
    .keys('q')
    .pause(100)
    .assert.containsText('#output', 'q')
    .click('#button')
    .pause(100)
    .assert.containsText('#output', 'CHANGED')
    .click('#destroy')
    .execute('return window.editor', [], response => {
      const { init, error, input, change, destroy } = response.value

      browser.assert.equal(init, true, '`init` event should be fired')
      browser.assert.equal(error, false, '`error` event should not be fired')
      browser.assert.equal(input, true, '`input` event should be fired')
      browser.assert.equal(change, true, '`change` event should be fired')
      browser.assert.equal(destroy, true, '`destroy` event should be fired')
    })
    .end()
}

module.exports = {
  'common build'(browser) {
    test(browser, resolve('basic.common-build.html'))
  },

  'web build'(browser) {
    test(browser, resolve('basic.web-build.html'))
  },
}
