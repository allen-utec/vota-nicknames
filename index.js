import { start } from './src/server.js';

const port = Number(process.env.PORT) || 9090;

start(port);
