$(document).ready(function () {
	if (!OCA.Files) return;

	if (getParameterByName('hide-sidebars') !== null) {
		hideSidebars();
	}

	function getParameterByName (name, url) {
		if (!url) url = window.location.href;
		name = name.replace(/[\[\]]/g, "\\$&");
		var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
			results = regex.exec(url);
		if (!results) return null;
		if (!results[2]) return '';
		return decodeURIComponent(results[2].replace(/\+/g, " "));
	}

	function hideSidebars () {
		$('#header').hide();
		$('#app-navigation').hide();
		$('#app-content').css('margin-left', 0);
		$('#content').css('padding-top', 0);
		$('#controls').css('top', 0);
		$('#filestable thead').css('top', '44px');
	}

});
