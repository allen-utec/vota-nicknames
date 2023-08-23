import { start } from './src/server';

const port = Number(Bun.env.PORT) || 9090;

start(port);
