import express from 'express'
import fs from 'fs'
import path from 'path'

import React from 'react'
import ReactDOMServer from 'react-dom/server'

import App from '../src/App'
import { StaticRouter } from 'react-router-dom';

const PORT = 8000

const app = express()

/**
 * Routing for web
 */

app.get('/*', (req, res) => {
    const context = {};
    const app = ReactDOMServer.renderToString(
      <StaticRouter location={req.url} context={context}>
        <App />
      </StaticRouter>
    );
  
    const indexFile = path.resolve('./build/index.html');
    fs.readFile(indexFile, 'utf8', (err, data) => {
      if (err) {
        console.error('Something went wrong:', err);
        return res.status(500).send('Oops, better luck next time!');
      }
  
      if (context.status === 404) {
        res.status(404);
      }
  
      return res.send(
        data.replace('<div id="root"></div>', `<div id="root">${app}</div>`)
      );
    });
  });


  /**
   * Routing For API
   */
app.post('/api',function(req,res){
    console.log('POST request');
    res.send({pesan:'ini POST!'});
})


app.use(express.static(path.resolve(__dirname,'../build')))

app.listen(PORT,()=>{
    console.log(`App Launched on ${PORT}`)
})