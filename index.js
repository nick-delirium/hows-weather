/* eslint no-console: 0 */
const express = require('express');
const path = require('path');
const axios = require('axios');

const app = express();
const PORT = process.env.PORT || 8085;
const weatherApi = 'https://www.metaweather.com/api/location';
app.use(express.static(path.join(__dirname, 'build')));

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

app.get('/api/ip', (req, res) => {
  const ip = req.header('x-forwarded-for') || req.connection.remoteAddress;
  console.log(req.connection);
  res.send({ ip });
});
app.get('/api/city', (req, res) => {
  axios(`${weatherApi}/search/?lattlong=${req.query.lat},${req.query.long}`)
    .then(r => res.send(r.data))
    .catch(e => console.error(e));
});
app.get('/api/weather', (req, res) => {
  axios(`${weatherApi}/${req.query.city}`)
    .then((r) => {
      if (process.env.NODE_ENV !== 'production') console.log(r.data);
      res.send(r.data.consolidated_weather);
    })
    .catch(e => console.error(e));
});

app.listen(PORT, () => {
  console.log(`hello, server is live @localhost:${PORT} with ${process.env.NODE_ENV || 'development'} mode`);
});
