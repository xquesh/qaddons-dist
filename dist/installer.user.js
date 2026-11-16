// ==UserScript==
// @name         QADDONS
// @namespace    margonem-toolkit
// @version      1.0.5
// @homepageURL  https://github.com/xquesh/quesh-addons
// @updateURL    https://xquesh.github.io/qaddons-dist/dist/installer.user.js
// @downloadURL  https://xquesh.github.io/qaddons-dist/dist/installer.user.js
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
        'https://xquesh.github.io/qaddons-dist/dist/margonem-toolkit.js';
    script.src += `?v=${Date.now()}`;
    script.async = false;

    script.onerror = () => {
        console.error('[QADDONS] Nie udało się pobrać runtime.');
    };

    (document.head || document.documentElement)
        .appendChild(script);
})();
