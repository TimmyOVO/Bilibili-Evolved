!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports["feeds/disable-details"]=e():t["feeds/disable-details"]=e()}(self,(function(){return function(){var t,e,n={840:function(t,e,n){var o=n(645)((function(t){return t[1]}));o.push([t.id,"[data-module=desc][data-orig],\n.card[data-did] .content {\n  cursor: text;\n}\n[data-module=desc][data-orig] .details,\n.card[data-did] .content .details {\n  color: #222;\n  font-size: 12px;\n  opacity: 0.6;\n  cursor: pointer;\n  display: block;\n  line-height: 22px;\n}\nbody.dark [data-module=desc][data-orig] .details,\nbody.dark .card[data-did] .content .details {\n  color: #eee;\n}\n\n.bili-rich-text-module.at {\n  cursor: pointer;\n}",""]),t.exports=o},274:function(t,e,n){var o=n(645)((function(t){return t[1]}));o.push([t.id,".card[data-did] .content .details {\n  display: none;\n}",""]),t.exports=o},645:function(t){"use strict";
// eslint-disable-next-line func-names
t.exports=function(t){var e=[];return e.toString=function(){return this.map((function(e){var n=t(e);return e[2]?"@media ".concat(e[2]," {").concat(n,"}"):n})).join("")},
// eslint-disable-next-line func-names
e.i=function(t,n,o){"string"==typeof t&&(
// eslint-disable-next-line no-param-reassign
t=[[null,t,""]]);var i={};if(o)for(var r=0;r<this.length;r++){
// eslint-disable-next-line prefer-destructuring
var a=this[r][0];null!=a&&(i[a]=!0)}for(var d=0;d<t.length;d++){var c=[].concat(t[d]);o&&i[c[0]]||(n&&(c[2]?c[2]="".concat(n," and ").concat(c[2]):c[2]=n),e.push(c))}},e}},94:function(t,e,n){var o=n(840);o&&o.__esModule&&(o=o.default),t.exports="string"==typeof o?o:o.toString()},377:function(t,e,n){var o=n(274);o&&o.__esModule&&(o=o.default),t.exports="string"==typeof o?o:o.toString()},799:function(t){"use strict";t.exports=coreApis.componentApis.feeds.api},356:function(t){"use strict";t.exports=coreApis.style}},o={};function i(t){var e=o[t];if(void 0!==e)return e.exports;var r=o[t]={id:t,exports:{}};return n[t](r,r.exports,i),r.exports}e=Object.getPrototypeOf?function(t){return Object.getPrototypeOf(t)}:function(t){return t.__proto__},i.t=function(n,o){if(1&o&&(n=this(n)),8&o)return n;if("object"==typeof n&&n){if(4&o&&n.__esModule)return n;if(16&o&&"function"==typeof n.then)return n}var r=Object.create(null);i.r(r);var a={};t=t||[null,e({}),e([]),e(e)];for(var d=2&o&&n;"object"==typeof d&&!~t.indexOf(d);d=e(d))Object.getOwnPropertyNames(d).forEach((function(t){a[t]=function(){return n[t]}}));return a.default=function(){return n},i.d(r,a),r},i.d=function(t,e){for(var n in e)i.o(e,n)&&!i.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:e[n]})},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})};var r={};return function(){"use strict";i.d(r,{component:function(){return d}});var t=i(799),e=coreApis.utils.urls;let n=!0;const o="disable-feeds-details-style",a=async()=>{const{addImportantStyle:t}=await Promise.resolve().then(i.t.bind(i,356,23)),{default:e}=await Promise.resolve().then(i.t.bind(i,94,23));t(e,o)},d={name:"disableFeedsDetails",displayName:"禁止跳转动态详情",tags:[componentsTags.feeds],urlInclude:e.feedsUrls,description:{"zh-CN":"禁止动态点击后跳转详情页, 方便选择其中的文字."},entry:async()=>{const{addImportantStyle:e}=await Promise.resolve().then(i.t.bind(i,356,23)),{forEachFeedsCard:o}=await Promise.resolve().then(i.t.bind(i,799,23)),{default:r}=await Promise.resolve().then(i.t.bind(i,377,23));e(r,"disable-feeds-details-init-style"),a();o({added:e=>{const{element:o}=e;o.addEventListener("click",(t=>{if(t.ctrlKey||!n)return;const e=dqa(o,'.content, .bili-dyn-content [data-module="desc"] .bili-rich-text'),i=t.target;if(i.hasAttribute("click-title"))return;if(["bili-rich-text__action","bili-rich-text-topic","bili-rich-text-module","bili-rich-text-link"].some((t=>i.classList.contains(t))))return;dqa(o,".im-popup").some((t=>t.contains(i)))||e.some((t=>t===i||t.contains(i)))&&t.stopImmediatePropagation()}),{capture:!0});const i=dq(o,".post-content, .bili-dyn-content");if(!i)return;if(![".video-container",".bangumi-container",".media-list",".article-container"].some((t=>dq(i,t)))&&!dq(i,".details")&&(i.classList.contains("repost")||e.type===t.feedsCardTypes.repost)){const t=dq(i,".content, .bili-dyn-content__orig__desc");if(!t)return;const e=document.createElement("div");e.classList.add("details"),e.setAttribute("click-title","详情"),e.innerHTML='\n        详情<i class="mdi mdi-chevron-right" click-title></i>\n      ',t.insertAdjacentElement("beforeend",e)}}})},unload:()=>{var t;null===(t=document.getElementById(o))||void 0===t||t.remove(),n=!1},reload:()=>{a(),n=!0},commitHash:"1f115daaac85058171e797e36b0dd9ba920234d7",coreVersion:"2.3.1"}}(),r=r.component}()}));