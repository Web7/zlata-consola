(function (factory, jQuery, Zepto) {
	if (typeof define === 'function' && define.amd) {
		define(['jquery'], factory);
	} else if (typeof exports === 'object' && typeof Meteor === 'undefined') {
		module.exports = factory(require('jquery'));
	} else {
		factory(jQuery || Zepto);
	}
}(function($){
	'use strict';

	$.fn.exists = function () {
		return this.length !== 0;
	};

	$(function(){
		var $ourProjectsSlick = $('.our-projects-slick');

		if ($ourProjectsSlick.exists()) {
			var $ourProjectsSlickArrows = $ourProjectsSlick.closest('section').find('.our-projects-slick-arrows');
			$ourProjectsSlick.slick({
				slidesToShow: 3,
				variableWidth: true,
				centerPadding: '40px',
				useCSS: false,
				appendArrows: $ourProjectsSlickArrows
			});
		}
	});

}, window.jQuery, window.Zepto));