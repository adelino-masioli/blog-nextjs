if(!self.define){let e,s={};const c=(c,a)=>(c=new URL(c+".js",a).href,s[c]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=c,e.onload=s,document.head.appendChild(e)}else e=c,importScripts(c),s()})).then((()=>{let e=s[c];if(!e)throw new Error(`Module ${c} didn’t register its module`);return e})));self.define=(a,n)=>{const t=e||("document"in self?document.currentScript.src:"")||location.href;if(s[t])return;let i={};const r=e=>c(e,t),o={module:{uri:t},exports:i,require:r};s[t]=Promise.all(a.map((e=>o[e]||r(e)))).then((e=>(n(...e),i)))}}define(["./workbox-80ca14c3"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/static/Q-1h7Tod5ufy5sH_rcFwz/_buildManifest.js",revision:"819f874987cf1302ab70facb62ebde5f"},{url:"/_next/static/Q-1h7Tod5ufy5sH_rcFwz/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/_next/static/chunks/167-136be0bc02d29a74.js",revision:"Q-1h7Tod5ufy5sH_rcFwz"},{url:"/_next/static/chunks/280-867bf93841e7622d.js",revision:"Q-1h7Tod5ufy5sH_rcFwz"},{url:"/_next/static/chunks/282-fd0aefe8ccd7d7f9.js",revision:"Q-1h7Tod5ufy5sH_rcFwz"},{url:"/_next/static/chunks/513-a3f18878849d0ffe.js",revision:"Q-1h7Tod5ufy5sH_rcFwz"},{url:"/_next/static/chunks/57c6ed0e-4ca60ed119fd8b51.js",revision:"Q-1h7Tod5ufy5sH_rcFwz"},{url:"/_next/static/chunks/658-77f921988849307b.js",revision:"Q-1h7Tod5ufy5sH_rcFwz"},{url:"/_next/static/chunks/app/%5Bslug%5D/not-found-e286bc6fc575baaf.js",revision:"Q-1h7Tod5ufy5sH_rcFwz"},{url:"/_next/static/chunks/app/%5Bslug%5D/page-19564f3d5279c855.js",revision:"Q-1h7Tod5ufy5sH_rcFwz"},{url:"/_next/static/chunks/app/about/page-06975658e8be7f6d.js",revision:"Q-1h7Tod5ufy5sH_rcFwz"},{url:"/_next/static/chunks/app/layout-03fc28419d966c95.js",revision:"Q-1h7Tod5ufy5sH_rcFwz"},{url:"/_next/static/chunks/app/page-8dc9751fbcbcb81e.js",revision:"Q-1h7Tod5ufy5sH_rcFwz"},{url:"/_next/static/chunks/app/page/%5Bpage%5D/page-6d8ec7d9706768aa.js",revision:"Q-1h7Tod5ufy5sH_rcFwz"},{url:"/_next/static/chunks/app/users/%5BuserId%5D/page-6884bcac7f2c4e57.js",revision:"Q-1h7Tod5ufy5sH_rcFwz"},{url:"/_next/static/chunks/app/users/page-b67139e87abcc1a1.js",revision:"Q-1h7Tod5ufy5sH_rcFwz"},{url:"/_next/static/chunks/framework-510ec8ffd65e1d01.js",revision:"Q-1h7Tod5ufy5sH_rcFwz"},{url:"/_next/static/chunks/main-3d545b61cd8bdf1a.js",revision:"Q-1h7Tod5ufy5sH_rcFwz"},{url:"/_next/static/chunks/main-app-06c674f4f93172dc.js",revision:"Q-1h7Tod5ufy5sH_rcFwz"},{url:"/_next/static/chunks/pages/_app-dae6fbadd26dafc7.js",revision:"Q-1h7Tod5ufy5sH_rcFwz"},{url:"/_next/static/chunks/pages/_error-285e5b0e0c8ca8e4.js",revision:"Q-1h7Tod5ufy5sH_rcFwz"},{url:"/_next/static/chunks/polyfills-78c92fac7aa8fdd8.js",revision:"79330112775102f91e1010318bae2bd3"},{url:"/_next/static/chunks/webpack-62ac9a41b9fa1890.js",revision:"Q-1h7Tod5ufy5sH_rcFwz"},{url:"/_next/static/css/c84d13a4c906b51a.css",revision:"c84d13a4c906b51a"},{url:"/_next/static/css/f887ab9032b9b224.css",revision:"f887ab9032b9b224"},{url:"/_next/static/media/2aaf0723e720e8b9-s.p.woff2",revision:"e1b9f0ecaaebb12c93064cd3c406f82b"},{url:"/_next/static/media/9c4f34569c9b36ca-s.woff2",revision:"2c1fc211bf5cca7ae7e7396dc9e4c824"},{url:"/_next/static/media/ae9ae6716d4f8bf8-s.woff2",revision:"b0c49a041e15bdbca22833f1ed5cfb19"},{url:"/_next/static/media/b1db3e28af9ef94a-s.woff2",revision:"70afeea69c7f52ffccde29e1ea470838"},{url:"/_next/static/media/b967158bc7d7a9fb-s.woff2",revision:"08ccb2a3cfc83cf18d4a3ec64dd7c11b"},{url:"/_next/static/media/c0f5ec5bbf5913b7-s.woff2",revision:"8ca5bc1cd1579933b73e51ec9354eec9"},{url:"/_next/static/media/d1d9458b69004127-s.woff2",revision:"9885d5da3e4dfffab0b4b1f4a259ca27"},{url:"/admin/config.yml",revision:"11722738ec666dd14cb4b76f3f3217f3"},{url:"/admin/index.html",revision:"cf4c087d17bbe7a6f1318900b12db91f"},{url:"/assets/images/image.jpeg",revision:"346237f448d8c75374327648000fb67d"},{url:"/assets/images/profile.png",revision:"70a98395fd37b2663516831ea1407d42"},{url:"/manifest.json",revision:"c143e84b68a4c32fd0dce88176572d24"},{url:"/next.svg",revision:"8e061864f388b47f33a1c3780831193e"},{url:"/vercel.svg",revision:"61c6b19abff40ea7acd577be818f3976"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:s,event:c,state:a})=>s&&"opaqueredirect"===s.type?new Response(s.body,{status:200,statusText:"OK",headers:s.headers}):s}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const s=e.pathname;return!s.startsWith("/api/auth/")&&!!s.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
