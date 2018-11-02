const express = require('express')
const http = require ('http')
const https = require ('https')

const app = express()

const credentials = {
	key: privateKey,
	cert: certificate,
	ca: ca
}

const httpServer = http.createServer(app)
const httpsServer = https.createServer(credentials, app)

app.use(function( req, res, next ) {
    switch( req.host ) {
        case 'agit-pop.com': 
          express.static( './apps/agit-pop.com/dist' )( req, res, next ); break;
        case 'dearestjustin.org': 
          express.static( './apps/dearestjustin.org/public' )(req, res, next); break;
        case 'api.dearestjustin.org': 
          express.static( './apps/dearestjustin.org/server/' )( req, res, next ); break;
        case 'nokxl.org': 
          express.static('./apps/nokxl.org/build')( req, res, next); break;
        case 'overthrow.io': 
          express.static('./apps/overthrow.io/web/build')(req, res, next); break;
        case 'xtrarad.com': 
          express.static( './apps/xtrarad.com/web/build')(req, res, next); break;
        case 'wallofftrump.us':
          express.static( './sites/wallofftrump.us')(req, res, next); break;
        case 'ndncollective.org':
          express.static( './sites/ndncollective.org/ndncollective.org/build'); break;
        case 'media.other98.com':
          express.static( './sites/media.other98.com')(req, res, next); break;
        case 'lieboldly.com':
          express.static( './sites/media.other98.com')(req, res, next); break;
        case 'kochblocked.com':
          express.static( './sites/ndncollective.org')(req, res, next); break;
        case 'occupydc.rip':
          express.static( './static/occupydc.rip' )(req, res, next); break;
        case 'goboldly.com':
          express.static('./sites/goboldly.com')(req, res, next); break;
        case 'dakotaaccesspipeline.net':
          express.static('./sites/dakotaaccesspipeline.net')(req, res, next); break;
        case 'whatthefrackjerrybrown.com':
          express.static('./static/whatthefrackjerrybrown.com')(req, res, next); break;
        case 'adolf.tinypixel.io':
          express.static('./sites/adolf')(req, res, next); break;
        default: 
          res.redirect('https://tinypixel.io/404')
    }
});

httpServer.listen(80, () => {
  console.log('HTTP Server running on port 80')
})

httpsServer.listen(443, () => {
  console.log('HTTPS Server running on port 443')
})
