/*!
* Start Bootstrap - Personal v1.0.1 (https://startbootstrap.com/template-overviews/personal)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-personal/blob/master/LICENSE)
*/
// Layout sizing helpers: keep hero section between navbar and footer
(function () {
	// Reusable components loader
	function loadIncludes() {
		var nodes = document.querySelectorAll('[data-include]');
		nodes.forEach(function (el) {
			var name = el.getAttribute('data-include');
			fetch('components/' + name + '.html')
				.then(function (r) { return r.text(); })
				.then(function (html) {
					el.outerHTML = html;
					// After footer is inserted, set current year
					var y = document.getElementById('footer-year');
					if (y) y.textContent = new Date().getFullYear();
				})
				.catch(function (e) { console.warn('Include failed for', name, e); });
		});
	}
	function setLayoutVars() {
		var header = document.querySelector('.navbar');
		var footer = document.querySelector('footer');
		var root = document.documentElement;
		var headerH = header ? header.offsetHeight : 0;
		var footerH = footer ? footer.offsetHeight : 0;
		root.style.setProperty('--header-h', headerH + 'px');
		root.style.setProperty('--footer-h', footerH + 'px');
	}
	window.addEventListener('DOMContentLoaded', function(){ loadIncludes(); });
	window.addEventListener('load', setLayoutVars);
	window.addEventListener('resize', setLayoutVars);
})();