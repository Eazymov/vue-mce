import fs from 'fs'
import path from 'path'
import http from 'http'
import spawn from 'cross-spawn'

const server = http.createServer((req, res) => {
  const filePath = path.join(__dirname, '../../', req.url)
  const readStream = fs.createReadStream(filePath)

  readStream.pipe(res)
})

server.listen(8080, err => {
  if (err) throw err
})

const runner = spawn(
  'nightwatch',
  ['--config', 'test/e2e/nightwatch.config.js'],
  {
    stdio: 'inherit',
  },
)

runner.on('exit', code => {
  server.close()

  process.exit(code)
})

runner.on('error', err => {
  server.close()

  throw err
})
