import { createServer } from 'http';
import { uniqueNamesGenerator, colors, animals } from 'unique-names-generator';

const port = Number(process.env.PORT) || 9090;

const commonHeaders = { 'Content-Type': 'application/json' };

const uniqueNamesGeneratorConfig = {
  dictionaries: [colors, animals],
  style: 'capital',
  separator: '',
};

createServer((req, res) => {
  if (req.method === 'GET' && req.url === '/nicknames') {
    // Generate random nickname, eg. RedDonkey
    const nickname = uniqueNamesGenerator(uniqueNamesGeneratorConfig);

    res.writeHead(200, commonHeaders);
    res.end(JSON.stringify({ nickname }));
    return;
  }

  res.writeHead(404, commonHeaders);
  res.end(JSON.stringify({ message: 'Route not found' }));
}).listen(port);

console.log(`Server running at http://127.0.0.1:${port}/`);
