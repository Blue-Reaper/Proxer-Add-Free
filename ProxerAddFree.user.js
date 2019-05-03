// ==UserScript==
// @name        Proxer Add-Free
// @version     1.1
// @description No adds on Proxer
// @author      Blue.Reaper
// @namespace   https://blue-reaper.github.io/Proxer-Essentials/
// @supportURL  https://github.com/Blue-Reaper/Proxer-Add-Free/issues
// @updateURL   https://openuserjs.org/meta/Blue.Reaper/Proxer_Add-Free.meta.js
// @downloadURL https://openuserjs.org/install/Blue.Reaper/Proxer_Add-Free.user.js
// @icon        https://raw.githubusercontent.com/Blue-Reaper/Proxer-Add-Free/master/logo_proxer.png
// @license     MIT
// @copyright   2019, Blue.Reaper (https://github.com/Blue-Reaper/Proxer-Add-Free)
// @include     https://proxer.me/*
// @run-at      document-start
// @grant       GM_addStyle
// @grant       GM_getResourceText
// @resource    CSS      https://raw.githubusercontent.com/Blue-Reaper/Proxer-Add-Free/master/add-free.css
// ==/UserScript==

// ==OpenUserJS==
// @author Blue.Reaper
// ==/OpenUserJS==

GM_addStyle (GM_getResourceText ("CSS"));
// no donate call on videoplayer
document.cookie = 'stream_donatecall1=1';
document.cookie = 'stream_donatecall3=1';
