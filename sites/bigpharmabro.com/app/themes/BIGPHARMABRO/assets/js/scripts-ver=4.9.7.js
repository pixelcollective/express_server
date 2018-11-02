jQuery(document).foundation();
/*
These functions make sure WordPress
and Foundation play nice together.
*/

jQuery(document).ready(function() {

    // Remove empty P tags created by WP inside of Accordion and Orbit
    jQuery('.accordion p:empty, .orbit p:empty').remove();

	 // Makes sure last grid item floats left
	jQuery('.archive-grid .columns').last().addClass( 'end' );

	// Adds Flex Video to YouTube and Vimeo Embeds
  jQuery('iframe[src*="youtube.com"], iframe[src*="vimeo.com"]').each(function() {
    if ( jQuery(this).innerWidth() / jQuery(this).innerHeight() > 1.5 ) {
      jQuery(this).wrap("<div class='widescreen flex-video'/>");
    } else {
      jQuery(this).wrap("<div class='flex-video'/>");
    }
  });

});



/* 
var modal = jQuery('#actionmodal');

jQuery.ajax('http://bigpharmabro.com/ajax.html')
  .done(function(resp){
    modal.html(resp.html).foundation('open');
}); */

/*
jQuery(window).load(function(){
      jQuery().hatchShow();
    });		
    jQuery.fn.hatchShow = function(){
      jQuery('.hsjs').css('display','inner-block').css('white-space','pre').each(function(){
        var t = jQuery(this);
        t.wrap("<span class='hatchshow_temp' style='display:block'>");
        var pw = t.parent().width();
        while( t.width() < pw ){t.css('font-size', (t.fontSize()+1)+"px"),
          function(){while( t.width() > pw ){t.css('font-size', (t.fontSize()-.1)+"px")}};
        };
      }).css('visibility','visible');
    };
jQuery.fn.fontSize = function(){return parseInt(jQuery(this).css('font-size').replace('px',''));};
*/

/* set height 
jQuery(document).ready(function(){
  jQuery('.jphone').css('height', window.innerHeight+'px');
  jQuery('.iphone').css('height', window.innerHeight+'px');
});
jQuery(window).resize(function() {
  jQuery('.jphone').css('height', window.innerHeight+'px');
  jQuery('.iphone').css('height', window.innerHeight+'px');
});
*/

/* scroll down indicator 
jQuery(document).ready(function(){
  var mes_height = jQuery('#adobewordpress').height();
  var win_height = jQuery(window).height() + 55;	
  console.log('message height:' + mes_height);
  console.log('window height:' + win_height);
  if(mes_height + 55 < win_height) {
        console.log('show scroll');
  	jQuery('.message:last').append('<div class="arrow-container animated fadeInDown"><div class="arrow-2"><i class="fa fa-angle-down"></i></div><div class="arrow-1 animated hinge infinite zoomIn"></div></div>');
  	jQuery('.arrow-container').css('position','absolute');
  	jQuery('.arrow-container').css('bottom','5em');
  }
});

jQuery('#adobewordpress' ).scroll(function() {
  	jQuery( ".arrow-container" ).fadeOut();
  });

*/

