import * as path from 'path';
import express from 'express';
import cors from 'cors';

import { handleRequest } from './src/main.server';
import { handleRequestv2 } from './src/main.server2';

const port = process.env['PORT'] || 4200;
const app = express();

const browserDist = path.join(process.cwd(), 'dist/store/browser');
const indexPath = path.join(browserDist, 'index.html');

app.use(cors());

app.get('/v2', handleRequestv2());

app.get(
  '*.*',
  express.static(browserDist, {
    maxAge: '1y',
  })
);

app.use('*', handleRequest(indexPath));

const server = app.listen(port, () => {
  console.log(`Express server listening on http://localhost:${port}`);
});

server.on('error', console.error);
