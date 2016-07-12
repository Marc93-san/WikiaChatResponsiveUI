(function (window, $, mw, dev) {
	"use strict";
	var config = dev.WikiaChatResponsiveUI ||  window.WikiaChatResponsiveUI || {};
 
	// Stop the script from starting more than once
	if (config.Actions) {
		return;
	}
 console.log('WikiaChatResponsive ver 1.0 loaded');
 
	// true=deep copy (allows user to override some of the translations for
	// one language without causing the script to fall back to English for
	// everything that wasn't overridden)
	config = $.extend(true, {
	  improveMobileUI: false,
	  improveSiteUI: false,
	  importResponsiveJS: true,
		importResponsiveCSS: true,
		userLang: true,
		// English
		'en': {
			membersbtn: "Chat members",
			infover: "ver.",
			madeby: "Made by"
		},
		//Español
		'es': {
			membersbtn: "Miembros del chat",
			infover: "versión",
			madeby: "Hecho por"
		}
	}, config, {
		version: '1.0'
	});
	function msg(name) {
		var lang = config.userLang ;
		if (typeof lang !== "string") {
			lang = config[mw.config.get('wgContentLanguage')] || config.en;
		}
		return lang[name];
	}
	// Here comes the actions
	config.Actions = function () {
	  // improveMobileUI
	if (config.improveMobileUI) {
	console.log('improveMobileUI enabled')
	}
		// improveSiteUI
		if (config.improveSiteUI) {
	console.log('improveSiteUI enabled')
	}
	// importResponsiveJS
		if (config.importResponsiveJS) {
		mw.loader.load( '/wiki/index.php?title=MediaWiki:ChatResponsive.js&action=raw&ctype=text/javascript' );
	  console.log('Importing MediaWiki:ChatResponsive.js')
	}
	// importResponsiveCSS
		if (config.importResponsiveCSS) {
	mw.loader.load( '/wiki/index.php?title=MediaWiki:ChatResponsive.css&action=raw&ctype=text/css', 'text/css' );
	console.log('Importing MediaWiki:ChatResponsive.css')
	}
	};
	if ({ 'oasis': 1, 'wikia': 1 }[mw.config.get('skin')] === 1) {
		$(config.Actions);
	}
 
	dev.WikiaChatResponsiveUI = config;
 
}(this, jQuery, mediaWiki, window.dev = window.dev || {}));
/* $('head').append('<meta name="viewport" content="width=device-width, initial-scale=1.0">');

// Using regex (from detectmobilebrowsers.com)
(function(a) {
    (jQuery.browser = jQuery.browser || {}).mobile = /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0, 4))
})(navigator.userAgent || navigator.vendor || window.opera);

if (jQuery.browser.mobile === 'true') {

    $('.Chat').css()
    $('.Write').prepend('<button style="position:absolute;left:4%;bottom:4%" onclick="mostrarUsers()">M</button>');
    $('.Chat, #Write').css("right", "0", "important")
}
*/

