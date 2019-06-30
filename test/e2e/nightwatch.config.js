module.exports = {
  src_folders: ['test/e2e/spec'],
  output_folder: false,
  custom_commands_path: '',
  custom_assertions_path: '',
  page_objects_path: '',
  globals_path: '',

  selenium: {
    start_process: true,
    server_path: require('selenium-server').path,
    log_path: '',
    port: 53555,
    cli_args: {
      'webdriver.chrome.driver': require('chromedriver').path,
    },
  },

  test_settings: {
    default: {
      launch_url: 'http://localhost',
      selenium_port: 53555,
      selenium_host: 'localhost',
      silent: true,
      screenshots: {
        enabled: false,
        path: '',
      },
      desiredCapabilities: {
        browserName: 'chrome',
        marionette: true,
      },
    },

    chrome: {
      desiredCapabilities: {
        browserName: 'chrome',
        javascriptEnabled: true,
        acceptSslCerts: true,
      },
    },

    edge: {
      desiredCapabilities: {
        browserName: 'MicrosoftEdge',
      },
    },
  },
}
