console.log('hidesidebar script was loaded');

window.addEventListener('DOMContentLoaded', function(event) {
        if (getParameterByName('hide-sidebars') !== null) {
                hideTopMenu();
                hideLeftMenu();
        }

        if (getParameterByName('hide-top-menu') !== null) {
                hideTopMenu();
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

        function applyStyleChanges(changeStyles) {
                for (var i = 0; i < changeStyles.length; i += 1) {
                        var element = document.querySelectorAll(changeStyles[i].el);
                        if (element.length) {
                                if (changeStyles[i].style.startsWith('--')) { // Properties are changed differently
                                        element[0].style.setProperty(changeStyles[i].style, changeStyles[i].value);
                                } else {
                                        element[0].style[changeStyles[i].style] = changeStyles[i].value;
                                }
                        }
                }
        }

        function hideTopMenu() {
                var changeStyles = [
                        {el: '#header', style: 'display', value: 'none'},
                        {el: '#app-navigation-vue', style: 'top', value: '0'},
                        {el: '#app-navigation', style: 'top', value: '0'},
                        {el: '#app-navigation-vue', style: 'height', value: '100vh'},
                        {el: '#content', style: 'paddingTop', value: 0},
                        {el: '#content-vue', style: 'paddingTop', value: 0},
                        {el: ':root', style: '--body-height', value: "calc(100% - env(safe-area-inset-bottom) - var(--body-container-margin) * 2)"},
                        {el: '.app-navigation__content', style: 'height', value: 'calc(100vh - 2 * var(--body-container-margin))'}, // Prevent settings button in sidebar too low
                        {el: '#app-navigation-vue', style: 'height', value: 'calc(100vh - 2 * var(--body-container-margin))'},
                        {el: '#controls', style: 'top', value: 0},
                        {el: '#filestable thead', style: 'top', value: '44px'},
                        {el: '#body-public #content', style: 'min-height', value: '100%'},
                        {el: 'footer', style: 'display', value: 'none'},
                        {el: '#content', style: 'width', value: '100%'},
                        {el: '#content-vue', style: 'width', value: '100%'},
                        {el: '#content', style: 'border-radius', value: '0'},
                        {el: '#content-vue', style: 'border-radius', value: '0'},
                        {el: '#content', style: 'margin', value: 0},
                        {el: '#content-vue', style: 'margin', value: 0},
                        {el: '#content', style: 'height', value: '100%'},
                        {el: '#content-vue', style: 'height', value: '100%'},
                        {el: '#app-navigation-vue', style: 'height', value: '100%'},
                ];
                applyStyleChanges(changeStyles);
        }

        function hideLeftMenu(onlyLeftMenu) {
                var changeStyles = [
                        {el: '#app-navigation', style: 'display', value: 'none'},
                        {el: '#app-navigation-vue', style: 'display', value: 'none'},
                        {el: '.app-navigation-toggle', style: 'display', value: 'none'},
                        {el: '#app-content', style: 'marginLeft', value: 0},
                        {el: '#controls', style: 'paddingLeft', value: 0},
                        {el: '#app-navigation-toggle', style: 'zIndex', value: 0},
                        {el: '#content', style: 'width', value: '100%'},
                        {el: '#content-vue', style: 'width', value: '100%'},
                        {el: '#content', style: 'border-radius', value: '0'},
                        {el: '#content-vue', style: 'border-radius', value: '0'},
                ];
                applyStyleChanges(changeStyles);

                if (onlyLeftMenu) {
                        applyStyleChanges([
                                {el: '#content', style: 'marginLeft', value: 0},
                                {el: '#content-vue', style: 'marginLeft', value: 0},
                                {el: '#content', style: 'height', value: 'calc(100% - 50px)'},
                                {el: '#content-vue', style: 'height', value: 'calc(100% - 50px)'},
                        ]);
                }
        }
});
