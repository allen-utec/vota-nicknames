import { createServer } from 'http';

import { corsMiddleware } from './cors.middleware.js';
import { getNicknamesHandler } from './nicknames.route.js';

export function start(port) {
  const server = createServer(corsMiddleware);

  server.on('request', (req, res) => {
    if (req.method === 'GET' && req.url === '/nicknames') {
      getNicknamesHandler(req, res);
      return;
    }

    res.writeHead(404, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ message: 'Route not found' }));
  });

  server.listen(port);
  console.log(`Server running at http://127.0.0.1:${port}/`);
}
