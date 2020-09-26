// @flow

import WebSocket from 'ws';

// $FlowExpectedError[incompatible-call]
new WebSocket.Server();
// $FlowExpectedError[incompatible-call]
new WebSocket.Server({ clientTracking: true }, () => {});

new WebSocket.Server({ port: 3000 }, () => {});

new WebSocket.Server({ port: 3000, path: '/echo' });

// $FlowExpectedError[incompatible-call]
new WebSocket.Server({ port: 3000, path: 2 });

const wss = new WebSocket.Server({ port: 3000 });

// $FlowExpectedError[incompatible-call]
wss.on('test', (ws) => {});

wss.on('close', (test) => {
  const t: void = test;
});

wss.on('error', (error) => {
  error.message;
});

wss.clients.forEach(() => {});

// $FlowExpectedError[prop-missing]
wss.clients.test();

wss.on('connection', (ws, request) => {
  const test: http$IncomingMessage<> = request;
  request.httpVersion;

  ws.send('test');
  ws.send('test', () => {});
  ws.send('test', { compress: true }, () => {});

  ws.ping(() => {});
  ws.ping('test');
  ws.ping('test', () => {});
  ws.ping('test', true, () => {});

  ws.pong(() => {});
  ws.pong('test');
  ws.pong('test', () => {});
  ws.pong('test', true, () => {});

  const listener1 = (arg1, arg2) => {
    const t1: ArrayBuffer | Buffer | string | Array<Buffer> = arg1;
    const t2: void = arg2;
  };
  ws.on('message', listener1);
  ws.addEventListener('message', listener1);
  ws.removeEventListener('message', listener1);

  const listener2 = () => {};
  ws.on('message', listener2);
  ws.addEventListener('message', listener2);
  ws.removeEventListener('message', listener2);

  const listener3 = (test: string) => {};
  // $FlowExpectedError[incompatible-call]
  ws.on('message', listener3);
  // $FlowExpectedError[incompatible-call]
  ws.addEventListener('message', listener3);
  // $FlowExpectedError[incompatible-call]
  ws.removeEventListener('message', listener3);

  // $FlowExpectedError[incompatible-call]
  ws.on('test', () => {});

  ws.terminate();

  // $FlowExpectedError[prop-missing]
  ws.test();

  ws.close();

  ws.on('close', (arg1, arg2, arg3) => {
    const t1: number = arg1;
    const t2: string = arg2;
    const t3: void = arg3;
  });

  ws.on('error', (error) => {
    error.message;
  });

  const num: number = ws.readyState;
});

// $FlowExpectedError[incompatible-call]
new WebSocket();

const ws = new WebSocket('');
WebSocket.createWebSocketStream(ws);

let num: number = WebSocket.CONNECTING;
num = WebSocket.OPEN;
num = WebSocket.CLOSING;
num = WebSocket.CLOSED;

// Examples from https://github.com/websockets/ws:

new WebSocket.Server({
  port: 8080,
  perMessageDeflate: {
    zlibDeflateOptions: {
      // See zlib defaults.
      chunkSize: 1024,
      memLevel: 7,
      level: 3,
    },
    zlibInflateOptions: {
      chunkSize: 10 * 1024,
    },
    // Other options settable:
    clientNoContextTakeover: true, // Defaults to negotiated value.
    serverNoContextTakeover: true, // Defaults to negotiated value.
    serverMaxWindowBits: 10, // Defaults to negotiated value.
    // Below options specified as default values.
    concurrencyLimit: 10, // Limits zlib concurrency for perf.
    threshold: 1024, // Size (in bytes) below which messages
    // should not be compressed.
  },
});

new WebSocket('ws://www.host.com/path', {
  perMessageDeflate: false,
});

{
  const ws = new WebSocket('ws://www.host.com/path');

  ws.on('open', function open() {
    ws.send('something');
  });

  ws.on('message', function incoming(data) {
    console.log(data);
  });
}

{
  const ws = new WebSocket('ws://www.host.com/path');

  ws.on('open', function open() {
    const array = new Float32Array(5);

    for (var i = 0; i < array.length; ++i) {
      array[i] = i / 2;
    }

    ws.send(array);
  });
}

{
  const wss = new WebSocket.Server({ port: 8080 });

  wss.on('connection', function connection(ws) {
    ws.on('message', function incoming(message) {
      console.log('received: %s', message);
    });

    ws.send('something');
  });
}

{
  const fs = require('fs');
  const https = require('https');
  const server = https.createServer({
    cert: fs.readFileSync('/path/to/cert.pem'),
    key: fs.readFileSync('/path/to/key.pem'),
  });
  const wss = new WebSocket.Server({ server });

  wss.on('connection', function connection(ws) {
    ws.on('message', function incoming(message) {
      console.log('received: %s', message);
    });

    ws.send('something');
  });

  server.listen(8080);
}

{
  const http = require('http');
  const url = require('url');

  const server = http.createServer();
  const wss1 = new WebSocket.Server({ noServer: true });
  const wss2 = new WebSocket.Server({ noServer: true });

  wss1.on('connection', function connection(ws) {
    // ...
  });

  wss2.on('connection', function connection(ws) {
    // ...
  });

  server.on('upgrade', function upgrade(request, socket, head) {
    const pathname = url.parse(request.url).pathname;

    if (pathname === '/foo') {
      wss1.handleUpgrade(request, socket, head, function done(ws) {
        wss1.emit('connection', ws, request);
      });
    } else if (pathname === '/bar') {
      wss2.handleUpgrade(request, socket, head, function done(ws) {
        wss2.emit('connection', ws, request);
      });
    } else {
      socket.destroy();
    }
  });

  server.listen(8080);
}

{
  const http = require('http');
  const WebSocket = require('ws');

  const server = http.createServer();
  const wss = new WebSocket.Server({ noServer: true });

  wss.on('connection', function connection(ws, request, client) {
    ws.on('message', function message(msg) {
      // console.log(`Received message ${msg} from user ${client}`);
    });
  });

  server.on('upgrade', function upgrade(request, socket, head) {
    // This function is not defined on purpose. Implement it with your own logic.
    // authenticate(request, (err, client) => {
    //   if (err || !client) {
    //     socket.write('HTTP/1.1 401 Unauthorized\r\n\r\n');
    //     socket.destroy();
    //     return;
    //   }
    //   wss.handleUpgrade(request, socket, head, function done(ws) {
    //     wss.emit('connection', ws, request, client);
    //   });
    // });
  });

  server.listen(8080);
}

{
  const wss = new WebSocket.Server({ port: 8080 });

  wss.on('connection', function connection(ws) {
    ws.on('message', function incoming(data) {
      wss.clients.forEach(function each(client) {
        if (client.readyState === WebSocket.OPEN) {
          client.send(data);
        }
      });
    });
  });
}

{
  const wss = new WebSocket.Server({ port: 8080 });

  wss.on('connection', function connection(ws) {
    ws.on('message', function incoming(data) {
      wss.clients.forEach(function each(client) {
        if (client !== ws && client.readyState === WebSocket.OPEN) {
          client.send(data);
        }
      });
    });
  });
}

{
  const ws = new WebSocket('wss://echo.websocket.org/', {
    origin: 'https://websocket.org',
  });

  ws.on('open', function open() {
    console.log('connected');
    ws.send(Date.now());
  });

  ws.on('close', function close() {
    console.log('disconnected');
  });

  ws.on('message', function incoming(data) {
    // console.log(`Roundtrip time: ${Date.now() - data} ms`);

    setTimeout(function timeout() {
      ws.send(Date.now());
    }, 500);
  });
}

{
  const ws = new WebSocket('wss://echo.websocket.org/', {
    origin: 'https://websocket.org',
  });

  const duplex = WebSocket.createWebSocketStream(ws, { encoding: 'utf8' });

  duplex.pipe(process.stdout);
  process.stdin.pipe(duplex);
}

{
  const wss = new WebSocket.Server({ port: 8080 });

  wss.on('connection', function connection(ws, req) {
    const ip = req.socket.remoteAddress;
  });

  wss.on('connection', function connection(ws, req) {
    const ip = req.headers['x-forwarded-for'].split(/\s*,\s*/)[0];
  });
}

{
  // Modified
  function noop() {}

  let isAlive = true;
  const heartbeat = () => (isAlive = true);

  const wss = new WebSocket.Server({ port: 8080 });

  wss.on('connection', function connection(ws) {
    isAlive = true;
    ws.on('pong', heartbeat);
  });

  const interval = setInterval(function ping() {
    wss.clients.forEach(function each(ws) {
      if (isAlive === false) return ws.terminate();

      isAlive = false;
      ws.ping(noop);
    });
  }, 30000);

  wss.on('close', function close() {
    clearInterval(interval);
  });
}

{
  function heartbeat() {
    clearTimeout(this.pingTimeout);

    // Use `WebSocket#terminate()`, which immediately destroys the connection,
    // instead of `WebSocket#close()`, which waits for the close timer.
    // Delay should be equal to the interval at which your server
    // sends out pings plus a conservative assumption of the latency.
    this.pingTimeout = setTimeout(() => {
      this.terminate();
    }, 30000 + 1000);
  }

  const client = new WebSocket('wss://echo.websocket.org/');

  client.on('open', heartbeat);
  client.on('ping', heartbeat);
  client.on('close', function clear() {
    clearTimeout(this.pingTimeout);
  });
}
