const bodyParser = require('body-parser');
const express = require('express');
const { bottender } = require('bottender');
const messagesRouter = require('./routes/messages');

require('./db_manager/config');

const app = bottender({
  dev: process.env.NODE_ENV !== 'production',
  useConsole: process.env.NODE_ENV === 'development' && process.argv.slice(2)[0]==="--console"
});

const port = Number(process.env.PORT) || 5000;

// the request handler of the bottender app
const handle = app.getRequestHandler();

app.prepare().then(() => {
  const server = express();

  const verify = (req, _, buf) => {
    req.rawBody = buf.toString();
  };
  server.use(bodyParser.json({ verify }));
  server.use(bodyParser.urlencoded({ extended: false, verify }));

  server.use('/messages', messagesRouter);

  // your custom route
  server.get('/api', (req, res) => {
    res.json({ ok: true });
  });

  // route for webhook request
  server.all('*', (req, res) => {
    return handle(req, res);
  });

  server.listen(port, err => {
    if (err) throw err;
    console.log(`Ready on http://localhost:${port}`);
  });
});