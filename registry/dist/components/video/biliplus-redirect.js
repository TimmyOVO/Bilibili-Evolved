!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports["video/biliplus-redirect"]=t():e["video/biliplus-redirect"]=t()}(self,(function(){return function(){"use strict";var e={350:function(e,t,n){n.r(t),n.d(t,{default:function(){return l}});var o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("a",{attrs:{href:e.url,target:"_blank",tabindex:"-1"}},[n("DefaultWidget",{attrs:{name:"转到BiliPlus",icon:"biliplus",disabled:!e.url}})],1)};o._withStripped=!0;var i=coreApis.observer,r=coreApis.ui;var s=function(e,t,n,o,i,r,s,l){var c,a="function"==typeof e?e.options:e;if(t&&(a.render=t,a.staticRenderFns=n,a._compiled=!0),o&&(a.functional=!0),r&&(a._scopeId="data-v-"+r),s?(c=function(e){(e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),i&&i.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(s)},a._ssrRegister=c):i&&(c=l?function(){i.call(this,(a.functional?this.parent:this).$root.$options.shadowRoot)}:i),c)if(a.functional){a._injectStyles=c;var u=a.render;a.render=function(e,t){return c.call(t),u(e,t)}}else{var d=a.beforeCreate;a.beforeCreate=d?[].concat(d,c):[c]}return{exports:e,options:a}}(Vue.extend({components:{DefaultWidget:r.DefaultWidget},data:()=>({url:""}),created(){const e="www.biliplus.com",t=/\/video\/(av[\d]+|BV.+)/i;if("space.bilibili.com"===window.location.host)this.url=document.URL.replace("space.bilibili.com/",`${e}/space/`);else if(document.URL.includes("/bangumi/play"))this.url=`https://${e}${window.location.pathname}${window.location.search}`,(0,i.videoChange)((()=>{const t=unsafeWindow.aid||document.querySelector(".av-link,.info-sec-av").innerText.replace(/[aAvV]/g,""),n=`https://${e}/video/av${t}/`;document.URL!==n?this.href=n:this.href=""}));else if(t.test(document.URL)){const[,n]=document.URL.match(t);this.url=`https://${e}/video/${n}/`}else(0,i.videoChange)((()=>{this.url=document.URL.replace(window.location.host,e)}))}}),o,[],!1,null,null,null);s.options.__file="registry/lib/components/video/biliplus-redirect/BiliplusRedirect.vue";var l=s.exports}},t={};function n(o){var i=t[o];if(void 0!==i)return i.exports;var r=t[o]={exports:{}};return e[o](r,r.exports,n),r.exports}n.d=function(e,t){for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var o={};return function(){n.d(o,{component:function(){return e}});const e={name:"biliplusRedirect",displayName:"BiliPlus跳转支持",description:{"zh-CN":"在视频/番剧/空间中, 可以从功能中的按钮点击转到BiliPlus上对应的页面."},urlInclude:[...coreApis.utils.urls.videoAndBangumiUrls,"//space.bilibili.com"],entry:none,tags:[componentsTags.video,componentsTags.utils],widget:{component:()=>Promise.resolve().then(n.bind(n,350)).then((e=>e.default))}}}(),o=o.component}()}));