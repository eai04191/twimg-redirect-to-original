// ==UserScript==
// @name        twimg_redirect_orig
// @include     *://pbs.twimg.com/media/*
// @exclude     *://pbs.twimg.com/media/*name=orig
// @run-at      document-start
// @author      eai04191
// @license     MIT
// @version     1.3
// @grant       none
// @description Redirect twimg to :orig
// @namespace https://greasyfork.org/users/10510
// ==/UserScript==

//https://pbs.twimg.com/media/ABC.jpg:large
//https://pbs.twimg.com/media/ABC?format=jpg&name=large

var url = window.document.location + "";
url = url.replace(/\?format=/, ".");
url = url.replace(/\&name=/, ":");
//https://pbs.twimg.com/media/ABC.jpg:large
//https://pbs.twimg.com/media/ABC.jpg:large

url = url.replace(/\.(?=[^.]*$)/, "?format=");
//https://pbs.twimg.com/media/ABC?format=jpg:large

url = url.replace( /(:large|:medium|:small|:orig|:thumb)/, "");
//https://pbs.twimg.com/media/ABC?format=jpg

window.location.replace( url + "&name=orig" );
//https://pbs.twimg.com/media/ABC?format=jpg&name=orig
