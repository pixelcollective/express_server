var express = require('express')
var app = express()

app.use(function( req, res, next ) {
    switch( req.host ) {
        case 'agit-pop.com': express.static( './agit-pop.com/dist' )( req, res, next ); break;
        default: res.redirect('https://tinypixel.io/404');
    }
}).listen( 8080 );