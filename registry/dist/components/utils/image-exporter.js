!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports["utils/image-exporter"]=t():e["utils/image-exporter"]=t()}(self,(function(){return function(){"use strict";var e={71:function(e,t,n){n.r(t),n.d(t,{default:function(){return f}});var o=function(){var e=this,t=e.$createElement;return(e._self._c||t)("DefaultWidget",{attrs:{name:"导出图片",icon:"mdi-export",disabled:e.busy},on:{click:function(t){return e.exportImages()}}})};o._withStripped=!0;var r=n(375),i=n(444),s=coreApis.settings,a=n(391),c=n(605),l=coreApis.utils.log,u=n(674),d=coreApis.ui;var p=function(e,t,n,o,r,i,s,a){var c,l="function"==typeof e?e.options:e;if(t&&(l.render=t,l.staticRenderFns=n,l._compiled=!0),o&&(l.functional=!0),i&&(l._scopeId="data-v-"+i),s?(c=function(e){(e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),r&&r.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(s)},l._ssrRegister=c):r&&(c=a?function(){r.call(this,(l.functional?this.parent:this).$root.$options.shadowRoot)}:r),c)if(l.functional){l._injectStyles=c;var u=l.render;l.render=function(e,t){return c.call(t),u(e,t)}}else{var d=l.beforeCreate;l.beforeCreate=d?[].concat(d,c):[c]}return{exports:e,options:l}}(Vue.extend({components:{DefaultWidget:d.DefaultWidget},data:()=>({busy:!1}),methods:{async exportImages(){const{columnFormat:e}=(0,s.getComponentSettings)("imageExporter").options,t=a.Toast.info("下载中...","导出图片");this.busy=!0;try{const n=[],o=dq(".banner-image .card-image__image"),s=(0,c.retrieveImageUrl)(o);s&&(n.push({...s,name:`${(0,u.formatTitle)(e,!1,{n:"1"})}${s.extension}`}),console.log(o,s,n));if(dqa('.article-content .img-box img:not([class*="cut-off-"])').forEach((t=>{const o=(0,c.retrieveImageUrl)(t);o&&n.push({...o,name:`${(0,u.formatTitle)(e,!1,{n:(n.length+1).toString()})}${o.extension}`})})),0===n.length)return void a.Toast.info("此页面没有检测到任何可导出图片.","图片导出");let l=0;const d=await Promise.all(n.map((async e=>{let{url:o}=e;const i=await(0,r.getBlob)(o);return l++,t.message=`下载中... (${l}/${n.length})`,i}))),p=new i.DownloadPackage;d.forEach(((e,t)=>p.add(n[t].name,e))),await p.emit(`${(0,u.formatTitle)(e,!1,{n:""})}.zip`)}catch(e){(0,l.logError)(e)}finally{this.busy=!1,t.close()}}}}),o,[],!1,null,null,null);p.options.__file="registry/lib/components/utils/image-exporter/Widget.vue";var f=p.exports},375:function(e){e.exports=coreApis.ajax},444:function(e){e.exports=coreApis.download},391:function(e){e.exports=coreApis.toast},674:function(e){e.exports=coreApis.utils.title},605:function(e){e.exports=coreApis.utils}},t={};function n(o){var r=t[o];if(void 0!==r)return r.exports;var i=t[o]={exports:{}};return e[o](i,i.exports,n),i.exports}n.d=function(e,t){for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var o={};return function(){n.d(o,{component:function(){return l}});var e=n(605),t=coreApis.utils.urls,r=coreApis.componentApis.feeds.api,i=n(375),s=n(444),a=n(391),c=n(674);const l={name:"imageExporter",displayName:"图片批量导出",description:{"zh-CN":"可以批量导出某个地方的图片, 目前支持动态和专栏.\r\n\r\n动态文件名变量:\r\n- `user`: 用户名\r\n- `id`: 动态 ID\r\n- `n`: 第 n 张图\r\n\r\n专栏文件名变量:\r\n- `title`: 专栏标题\r\n- `n`: 第 n 张图"},tags:[componentsTags.feeds,componentsTags.utils],entry:async n=>{await(async n=>{let{settings:{options:o}}=n;if(!t.feedsUrls.some((t=>(0,e.matchUrlPattern)(t))))return;(0,r.forEachFeedsCard)({added:t=>{(0,r.addMenuItem)(t,{className:"image-export",text:"导出图片",action:async()=>{const n=[];if(dqa(t.element,".main-content .img-content, .bili-album__preview__picture__img").forEach((t=>{const o=(0,e.retrieveImageUrl)(t);o&&!n.some((e=>{let{url:t}=e;return t===o.url}))&&n.push(o)})),0===n.length)return void a.Toast.info("此条动态没有检测到任何图片.","导出图片");const r=a.Toast.info("下载中...","导出图片");let l=0;const u=await Promise.all(n.map((async e=>{let{url:t}=e;const o=await(0,i.getBlob)(t);return l++,r.message=`下载中... (${l}/${n.length})`,o}))),d=new s.DownloadPackage,{feedFormat:p}=o;u.forEach(((e,o)=>{const r={user:t.username,id:t.id,n:(o+1).toString()};d.add(`${(0,c.formatTitle)(p,!1,r)}${n[o].extension}`,e)})),r.close();const f={user:t.username,id:t.id,n:""};await d.emit(`${(0,c.formatTitle)(p,!1,f)}.zip`)}})}})})(n)},widget:{condition:()=>t.columnUrls.some((t=>(0,e.matchUrlPattern)(t))),component:()=>Promise.resolve().then(n.bind(n,71)).then((e=>e.default))},urlInclude:[...t.feedsUrls,...t.columnUrls],options:{columnFormat:{defaultValue:"[title][ - n]",displayName:"专栏图片命名格式"},feedFormat:{defaultValue:"[user][ - id][ - n]",displayName:"动态图片命名格式"}},commitHash:"1f115daaac85058171e797e36b0dd9ba920234d7",coreVersion:"2.3.1"}}(),o=o.component}()}));