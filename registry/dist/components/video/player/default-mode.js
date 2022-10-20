!function(e,n){"object"==typeof exports&&"object"==typeof module?module.exports=n():"function"==typeof define&&define.amd?define([],n):"object"==typeof exports?exports["video/player/default-mode"]=n():e["video/player/default-mode"]=n()}(self,(function(){return function(){"use strict";var e={d:function(n,t){for(var o in t)e.o(t,o)&&!e.o(n,o)&&Object.defineProperty(n,o,{enumerable:!0,get:t[o]})},o:function(e,n){return Object.prototype.hasOwnProperty.call(e,n)}},n={};e.d(n,{component:function(){return c}});var t=coreApis.componentApis.define,o=coreApis.componentApis.video.playerAgent,l=coreApis.spinQuery,a=coreApis.utils,r=coreApis.utils.lazyPanel,s=coreApis.utils.urls;let i;!function(e){e.Normal="常规",e.Wide="宽屏",e.WebFullscreen="网页全屏",e.Fullscreen="全屏"}(i||(i={}));const d=(0,t.defineOptionsMetadata)({mode:{defaultValue:i.Normal,displayName:"模式选择",dropdownEnum:i},applyOnPlay:{defaultValue:!1,displayName:"播放时应用"}}),c=(0,t.defineComponentMetadata)({name:"defaultPlayerMode",displayName:"默认播放器模式",entry:async e=>{let{settings:{options:n}}=e;if((0,a.isEmbeddedPlayer)())return;const{query:{control:{buttons:t}}}=o.playerAgent;await(0,a.playerReady)(),Promise.resolve().then((async()=>{const e=new Map([[i.Normal,none],[i.Wide,async()=>{await(0,r.loadLazyPanel)(t.widescreen.selector),(0,a.disableWindowScroll)((()=>o.playerAgent.widescreen()))}],[i.WebFullscreen,async()=>{await(0,r.loadLazyPanel)(t.webFullscreen.selector),o.playerAgent.webFullscreen()}],[i.Fullscreen,async()=>{null!==await(0,l.sq)((()=>dq(o.playerAgent.query.video.element.selector)),(e=>null!==e&&4===e.readyState&&"complete"===document.readyState&&document.hasFocus()))?o.playerAgent.fullscreen():console.warn("[默认播放器模式] 未能应用全屏模式, 等待超时.")}]]),s=await o.playerAgent.query.video.element();if(!s)return;const d=e.get(n.mode);n.applyOnPlay&&!o.playerAgent.isAutoPlay()?s.addEventListener("play",d,{once:!0}):d()}))},tags:[componentsTags.video],description:{"zh-CN":"控制是否使用默认播放器模式, 可以为`常规`, `宽屏`, `网页全屏`或`全屏`. 注意: 不能和其他影响定位的功能一同使用, 例如播放器定位. (相关讨论: [#483](https://github.com/the1812/Bilibili-Evolved/issues/483))","en-US":"Set the default player mode. Could be `Normal`, `Widescreen`, `Web fullscreen` or `Fullscreen`.","ja-JP":"デフォルト・プレーヤー・モードが使用するかどうかを制御する、 例えば`常规`、`宽屏`、 `网页全屏`か`全屏`."},options:d,urlInclude:s.allVideoUrls,commitHash:"24964766add7bb8e358d9bc16a09e01d78677b59",coreVersion:"2.5.0"});return n=n.component}()}));