var express = require('express')

express.createServer().use(function( req, res, next ) {
    switch( req.host ) {
        case 'agit-pop.com': express.static( '/var/www/agit-pop.com/dist' )( req, res, next ); break;
        default: res.redirect('https://tinypixel.io/404');
    }
}).listen( 8080 );