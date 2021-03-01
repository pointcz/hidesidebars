window.addEventListener('DOMContentLoaded', function(event) {
	if (getParameterByName('hide-sidebars') !== null) {
		hideSidebars();
	}

	function getParameterByName(name, url) {
		if (!url) url = window.location.href;
		name = name.replace(/[\[\]]/g, "\\$&");
		var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
			results = regex.exec(url);
		if (!results) return null;
		if (!results[2]) return '';
		return decodeURIComponent(results[2].replace(/\+/g, " "));
	}

	function hideSidebars() {
		var changeStyles = [
			{el: '#header', style: 'display', value: 'none'},
			{el: '#app-navigation', style: 'display', value: 'none'},
			{el: '#app-navigation-vue', style: 'display', value: 'none'},
			{el: '.app-navigation-toggle', style: 'display', value: 'none'},
			{el: '#app-content', style: 'marginLeft', value: 0},
			{el: '#content', style: 'paddingTop', value: 0},
			{el: '#content-vue', style: 'paddingTop', value: 0},
			{el: '#controls', style: 'top', value: 0},
			{el: '#controls', style: 'paddingLeft', value: 0},
			{el: '#filestable thead', style: 'top', value: '44px'},
			{el: '#app-navigation-toggle', style: 'zIndex', value: 0},
		];
		for (var i = 0; i < changeStyles.length; i += 1) {
			var element = document.querySelectorAll(changeStyles[i].el);
			if (element.length) {
				element[0].style[changeStyles[i].style] = changeStyles[i].value;
			}
		}
	}

});
