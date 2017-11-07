const fs = require('fs');
const path = require('path');
const http = require('http');
const spawn = require('cross-spawn');
const server = http.createServer((req, res) => {
  const filePath = path.join(__dirname, '../../', req.url);
  const readStream = fs.createReadStream(filePath);

  readStream.pipe(res);
});

server.listen(8080, (err) => {
  if (err) throw err;
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
