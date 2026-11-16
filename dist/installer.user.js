// ==UserScript==
// @name         QADDONS
// @namespace    margonem-toolkit
// @version      1.0.4
// @homepageURL  https://github.com/xquesh/quesh-addons
// @updateURL    https://raw.githubusercontent.com/xquesh/qaddons-dist/master/dist/installer.user.js
// @downloadURL  https://raw.githubusercontent.com/xquesh/qaddons-dist/master/dist/installer.user.js
// @description  Loader QADDONS — pobiera obfuskowany runtime z kanału dystrybucyjnego.
// @match        https://*.margonem.pl/*
// @match        https://*.margonem.com/*
// @exclude      https://forum.margonem.pl/*
// @exclude      https://forum.margonem.com/*
// @grant        none
// @run-at       document-idle
// ==/UserScript==

(() => {
    const script = document.createElement('script');
    script.src =
        'https://raw.githubusercontent.com/xquesh/qaddons-dist/master/dist/margonem-toolkit.js';
    script.src += `?v=${Date.now()}`;
    script.async = false;

    script.onerror = () => {
        console.error('[QADDONS] Nie udało się pobrać runtime.');
    };

    (document.head || document.documentElement)
        .appendChild(script);
})();
