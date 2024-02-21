console.log('hidesidebar script was loaded');

window.addEventListener('DOMContentLoaded', function(event) {
        if (getParameterByName('hide-sidebars') !== null) {
                hideTopMenu();
                hideLeftMenu();
								contentChanges();
        }

        if (getParameterByName('hide-top-menu') !== null) {
                hideTopMenu(true);
        }

        if (getParameterByName('hide-left-menu') !== null) {
                hideLeftMenu(true);
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

        function applyChanges(changeStyles) {
                for (var i = 0; i < changeStyles.length; i += 1) {
                        var element = document.querySelectorAll(changeStyles[i].el);
                        if (element.length) {
                                element[0].style[changeStyles[i].style] = changeStyles[i].value;
                        }
                }
        }

        function contentChanges() {
                applyChanges([
												{el: '#content', style: 'width', value: '100%'},
												{el: '#content', style: 'border-radius', value: '0'},
								]);
        }

        function hideTopMenu(onlyTopMenu) {
                var changeStyles = [
                        {el: '#header', style: 'display', value: 'none'},
                        {el: '#app-navigation-vue', style: 'top', value: '0'},
                        {el: '#app-navigation', style: 'top', value: '0'},
                        {el: '#app-navigation-vue', style: 'height', value: '100vh'},
                        {el: '#content', style: 'paddingTop', value: 0},
                        {el: '#content-vue', style: 'paddingTop', value: 0},
                        {el: '#controls', style: 'top', value: 0},
                        {el: '#filestable thead', style: 'top', value: '44px'},
                        {el: '#body-public #content', style: 'min-height', value: '100%'},
                        {el: 'footer', style: 'display', value: 'none'},
                ];
                applyChanges(changeStyles);

								if (onlyTopMenu) {
												applyChanges([
														{el: '#content', style: 'margin', value: 0},
														{el: '#content', style: 'height', value: '100%'},
												])
								}
        }

        function hideLeftMenu(onlyLeftMenu) {
                var changeStyles = [
                        {el: '#app-navigation', style: 'display', value: 'none'},
                        {el: '#app-navigation-vue', style: 'display', value: 'none'},
                        {el: '.app-navigation-toggle', style: 'display', value: 'none'},
                        {el: '#app-content', style: 'marginLeft', value: 0},
                        {el: '#controls', style: 'paddingLeft', value: 0},
                        {el: '#app-navigation-toggle', style: 'zIndex', value: 0},
                        {el: '#content', style: 'marginLeft', value: 0},
                        {el: '#content', style: 'height', value: 'calc(100% - 50px)'},
                ];
                applyChanges(changeStyles);

                if (onlyLeftMenu) {
                        applyChanges([
                                {el: '#content', style: 'marginLeft', value: 0},
                                {el: '#content', style: 'height', value: 'calc(100% - 50px)'},
                        ]);
                }
        }

});
