import * as path from 'path';
import express from 'express';
import cors from 'cors';

import { handleRequest } from './src/main.server';

const port = process.env['PORT'] || 4200;
const app = express();

const browserDist = path.join(process.cwd(), 'dist/store/browser');

app.use(cors());

app.get(
  '*.*',
  express.static(browserDist, {
    maxAge: '1y',
  })
);

app.use('*', handleRequest());

const server = app.listen(port, () => {
  console.log(`Express server listening on http://localhost:${port}`);
});

server.on('error', console.error);
