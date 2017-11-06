const path = require('path');
const spawn = require('cross-spawn');
const httpServer = require('http-server');
const server = httpServer.createServer({
  root: path.resolve(__dirname, '../../'),
});

const runner = spawn('nightwatch', ['--config', 'test/e2e/nightwatch.config.js'], {
  stdio: 'inherit',
});

runner.on('exit', (code) => {
  server.close();

  process.exit(code);
});

runner.on('error', (err) => {
  server.close();

  throw err;
});
