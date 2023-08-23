import { Server } from 'bun';
import { getNickname, isGET, getResponse } from './utils';

let server: Server;

export function start(port: number) {
  if (server) {
    console.log(`Server already is running at http://127.0.0.1:${port}/`);
    return;
  }

  server = Bun.serve({
    port,
    fetch(req) {
      console.log(req.method, req.url);

      if (isGET('/nicknames/random', req)) {
        return getResponse(200, { nickname: getNickname() });
      }
      return getResponse(404, { message: 'Resource not found!' });
    },
    error(err) {
      console.log(err);
      return getResponse(500, { message: 'Internal server error!' });
    },
  });

  console.log(`Server running at http://127.0.0.1:${port}/`);
}
