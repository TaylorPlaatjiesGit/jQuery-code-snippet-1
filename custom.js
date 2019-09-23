$(document).ready(function() {
	var url = window.location.href;
	var useJumpTo = url.indexOf("https://website.com/product-category") > -1 ? true : false;
	if(useJumpTo) {
		var params = getParams();
		var jumpToCode = null;
		$.each(params, function(i, param) {
			if(typeof(param['v']) != 'undefined') {
				jumpToCode = param['v'];
			}
		});
		
		if(jumpToCode) {
			var cardHeight = $($('li.product.type-product')[0]).height();
			var selector = ".woocommerce-loop-product__title:contains(" + jumpToCode + ")";
			
			$([document.documentElement, document.body]).animate({
				scrollTop: $(selector).offset().top - cardHeight
			}, 2000);
		}
	}
	
	
	function getParams() {
		var objectArray = [];
		if(url.indexOf('?') > -1) {
			var urlParts = url.split('?');
			if(urlParts.length > 0 && urlParts[1]) {
				var urlParamParts = urlParts[1].split('&');
				$.each(urlParamParts, function(i, keyValString) {
					var keyValParts = keyValString.split('=');
					var entry = [];
					entry[keyValParts[0]] = keyValParts[1];
					objectArray.push(entry);
				});
			}
		}
		
		return objectArray;
	}
});
