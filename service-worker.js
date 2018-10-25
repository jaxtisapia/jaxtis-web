"use strict";function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}var precacheConfig=[["/index.html","fcfe7278669fbc7e478feb36531f3db2"],["/static/css/main.532bc065.css","c6152c566bcc6c37d8972d2b27f375c5"],["/static/js/main.c99aac45.js","d79e9682b0b11f6cb655a5bb4980a05c"],["/static/media/Linearicons-Free.2f3e9f80.ttf","2f3e9f80fff7d699dd3de6904d7d1647"],["/static/media/Montserrat-Black.6d1796a9.ttf","6d1796a9f798ced8961baf3c79f894b6"],["/static/media/Montserrat-Bold.88932dad.ttf","88932dadc42e1bba93b21a76de60ef7a"],["/static/media/Montserrat-Italic.67865463.ttf","6786546363c0261228fd66d68bbf27e9"],["/static/media/Montserrat-Medium.a98626e1.ttf","a98626e1aef6ceba5dfc1ee7112e235a"],["/static/media/Montserrat-Regular.9c460951.ttf","9c46095118380d38f12e67c916b427f9"],["/static/media/Poppins-Black.8971d171.ttf","8971d1710cbf4c91bca1b460aec154d7"],["/static/media/Poppins-Bold.7940efc4.ttf","7940efc40d8e3b477e16cc41b0287139"],["/static/media/funnyOrNotBanner.afdf57a9.jpg","afdf57a9db78cf0a7e74ec991e38c3cf"],["/static/media/gatsbyBanner.0a622a52.jpg","0a622a524743a32182123948cfe2dd5b"],["/static/media/prestigeBanner.3fc2fb34.jpg","3fc2fb344d07091dd672417a4b7e732d"],["/static/media/surgeGhanaBanner.00216586.jpg","002165866e1dfbda001155fdb21d9906"],["/static/media/tickethouseBanner.9f8c845b.jpg","9f8c845b4f9240ddcde97a4113915a84"],["/static/media/totoBanner.3b68b782.jpg","3b68b7829a9dac6831814a70e997c501"],["/static/media/werise-portfolio.1b4f3877.jpg","1b4f3877c24f21816dab2da583df296d"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var a=new URL(e);return"/"===a.pathname.slice(-1)&&(a.pathname+=t),a.toString()},cleanResponse=function(e){if(!e.redirected)return Promise.resolve(e);return("body"in e?Promise.resolve(e.body):e.blob()).then(function(t){return new Response(t,{headers:e.headers,status:e.status,statusText:e.statusText})})},createCacheKey=function(e,t,a,n){var r=new URL(e);return n&&r.pathname.match(n)||(r.search+=(r.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(a)),r.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var a=new URL(t).pathname;return e.some(function(e){return a.match(e)})},stripIgnoredUrlParameters=function(e,t){var a=new URL(e);return a.hash="",a.search=a.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return t.every(function(t){return!t.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),a.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],a=e[1],n=new URL(t,self.location),r=createCacheKey(n,hashParamName,a,/\.\w{8}\./);return[n.toString(),r]}));self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(t){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(a){if(!t.has(a)){var n=new Request(a,{credentials:"same-origin"});return fetch(n).then(function(t){if(!t.ok)throw new Error("Request for "+a+" returned a response with status "+t.status);return cleanResponse(t).then(function(t){return e.put(a,t)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var t=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(a){return Promise.all(a.map(function(a){if(!t.has(a.url))return e.delete(a)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var t,a=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching),n="index.html";(t=urlsToCacheKeys.has(a))||(a=addDirectoryIndex(a,n),t=urlsToCacheKeys.has(a));var r="/index.html";!t&&"navigate"===e.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],e.request.url)&&(a=new URL(r,self.location).toString(),t=urlsToCacheKeys.has(a)),t&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(a)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(t){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,t),fetch(e.request)}))}});