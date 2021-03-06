import { h } from 'preact';
import renderToString from 'preact-render-to-string';
/** @jsx h */
import { readFileSync } from 'fs';
import * as functions from 'firebase-functions';

import App from './src/App';

import express from 'express';
const app = express();

// import fastify from 'fastify';
// const app = fastify();

const index = readFileSync(__dirname + '/index.html', 'utf8');

app.get('*', (req, res) => {
    const finalHtml = index.replace('<!--::APP::-->', renderToString(<App />));
    res.header('Cache-Control', 'public, max-age=600, s-maxage=1200');
    res.header('Content-Type', 'text/html');
    res.send(finalHtml);
});

let ssrApp = null;

if(process.env.NODE_ENV && (process.env.NODE_ENV === 'development')) {
    app.listen(3000, () => console.log('server is running on port 3000'));
    ssrApp = app;
} else {
    ssrApp = functions.https.onRequest(app);
}

export let ssrapp = ssrApp;