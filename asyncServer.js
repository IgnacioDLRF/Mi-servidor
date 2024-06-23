const http = require('http');
const fs = require('fs');
const { promisify } = require('util');

const readFileAsync = promisify(fs.readFile);

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer(async (req, res) => {
  try {
    const data = await readFileAsync('HolaMundo.txt', 'utf8');
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end(data);
  } catch (err) {
    res.statusCode = 500;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Error al leer el archivo\n');
  }
});

server.listen(port, hostname, () => {
  console.log(`Servidor corriendo en http://${hostname}:${port}/`);
});
