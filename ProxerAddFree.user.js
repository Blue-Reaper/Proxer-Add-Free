// ==UserScript==
// @name        Proxer Add-Free
// @version     1.0
// @description No adds on Proxer
// @author      Blue.Reaper
// @namespace   https://blue-reaper.github.io/Proxer-Essentials/
// @supportURL  https://github.com/Blue-Reaper/Proxer-Add-Free/issues/new
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
