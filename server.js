const express = require('express')
const http = require ('http');
const https = require ('https')

const app = express()

app.use(function( req, res, next ) {
    switch( req.host ) {
        case 'agit-pop.com': express.static( './agit-pop.com/dist' )( req, res, next ); break;
        default: res.redirect('https://tinypixel.io/404');
    }
});

const httpServer = http.createServer(app);
const httpsServer = https.createServer(credentials, app);

httpServer.listen(80, () => {
  console.log('HTTP Server running on port 80');
})

httpServer.listen(443, () => {
  console.log('HTTPS Server running on port 443');
});
