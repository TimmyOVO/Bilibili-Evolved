!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports["video/download"]=t():e["video/download"]=t()}(self,(function(){return function(){var e={828:function(e,t,n){var i=n(645)((function(e){return e[1]}));i.push([e.id,".download-video-panel {\n  background-color: #fff;\n  color: black;\n  border-radius: 8px;\n  border: 1px solid rgba(136, 136, 136, 0.1333333333);\n  box-sizing: border-box;\n  box-shadow: 0 4px 12px 0 rgba(0, 0, 0, 0.05);\n  font-size: 12px;\n  padding: 6px;\n  top: 100px;\n  left: 50%;\n  transform: translateX(-50%) scale(0.95);\n  transition: 0.2s ease-out;\n  z-index: 1000;\n  width: 320px;\n  height: calc(100vh - 200px);\n  display: flex;\n  flex-direction: column;\n}\nbody.dark .download-video-panel {\n  box-shadow: 0 4px 12px 0 rgba(0, 0, 0, 0.2);\n}\nbody.dark .download-video-panel {\n  background-color: #282828;\n  color: #eee;\n}\n.download-video-panel.open {\n  transform: translateX(-50%);\n}\n.download-video-panel .be-textbox,\n.download-video-panel .be-textarea {\n  flex-grow: 1;\n}\n.download-video-panel-header {\n  display: flex;\n  align-items: center;\n  gap: 0;\n  border-bottom: 1px solid rgba(136, 136, 136, 0.1333333333);\n  padding: 6px 0;\n  margin: 0 6px;\n}\n.download-video-panel-header .title {\n  font-size: 16px;\n  font-weight: bold;\n  flex-grow: 1;\n  margin: 0 8px;\n}\n.download-video-panel-header .be-button {\n  padding: 4px;\n}\n.download-video-panel-content {\n  overflow: auto;\n  scrollbar-width: none !important;\n  overscroll-behavior: contain;\n  display: flex;\n  align-items: stretch;\n  flex-direction: column;\n  gap: 0;\n  flex: 1 0 0;\n  padding: 12px 6px;\n  align-items: flex-start;\n}\n.download-video-panel-content::-webkit-scrollbar {\n  height: 0 !important;\n  width: 0 !important;\n}\n.download-video-panel-content > :not(:first-child) {\n  margin-top: 12px;\n}\n.download-video-panel .download-video-config-item {\n  display: flex;\n  align-items: center;\n  gap: 0;\n}\n.download-video-panel .download-video-config-item .download-video-config-title {\n  margin-right: 8px;\n}\n.download-video-panel .download-video-config-item.error {\n  color: #E57373;\n}\n.download-video-panel .download-video-config-section {\n  align-self: stretch;\n}\n.download-video-panel .download-video-config-description {\n  opacity: 0.5;\n  margin-top: 4px;\n}\n.download-video-panel-footer {\n  display: flex;\n  align-items: center;\n  gap: 0;\n  border-top: 1px solid rgba(136, 136, 136, 0.1333333333);\n  padding: 6px 0;\n  margin: 0 6px;\n  justify-content: center;\n}\n.download-video-panel .run-download {\n  font-size: 13px;\n  padding: 6px 12px;\n}",""]),e.exports=i},635:function(e,t,n){var i=n(645)((function(e){return e[1]}));i.push([e.id,".episodes-picker-header {\n  display: flex;\n  align-items: center;\n  gap: 0;\n}\n.episodes-picker-checked-ratio {\n  flex-grow: 1;\n  margin-left: 4px;\n}\n.episodes-picker-actions {\n  display: flex;\n  align-items: center;\n  gap: 0;\n}\n.episodes-picker-actions .be-button {\n  padding: 4px;\n}\n.episodes-picker-actions .be-button.invert-selection .be-icon {\n  font-size: 14px;\n}\n.episodes-picker-actions .be-button.select-all .be-icon, .episodes-picker-actions .be-button.deselect-all .be-icon {\n  transform: translateY(1px);\n}\n.episodes-picker-items {\n  max-height: 400px;\n  overflow: auto;\n}\n.episodes-picker-items:not(:empty) {\n  margin-top: 4px;\n  border: 1px solid rgba(136, 136, 136, 0.2666666667);\n  border-radius: 6px;\n}\n.episodes-picker-items .be-check-box {\n  padding: 2px 6px;\n}\n.episodes-picker-items .episode-duration {\n  margin-right: 4px;\n  text-align: right;\n  flex: 1 1 0;\n  opacity: 0.5;\n}",""]),e.exports=i},307:function(e,t,n){var i=n(645)((function(e){return e[1]}));i.push([e.id,".single-video-info.download-video-config-section {\n  position: relative;\n  height: 125px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.single-video-info.download-video-config-section img {\n  height: 125px;\n  -o-object-fit: contain;\n     object-fit: contain;\n  border-radius: 8px;\n}\n.single-video-info.download-video-config-section img.shadow {\n  position: absolute;\n  filter: blur(8px) brightness(0.8);\n  transform: scaleY(0.95) translateY(4px);\n  z-index: -1;\n  opacity: 0.3;\n}",""]),e.exports=i},645:function(e){"use strict";
// eslint-disable-next-line func-names
e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n=e(t);return t[2]?"@media ".concat(t[2]," {").concat(n,"}"):n})).join("")},
// eslint-disable-next-line func-names
t.i=function(e,n,i){"string"==typeof e&&(
// eslint-disable-next-line no-param-reassign
e=[[null,e,""]]);var o={};if(i)for(var s=0;s<this.length;s++){
// eslint-disable-next-line prefer-destructuring
var a=this[s][0];null!=a&&(o[a]=!0)}for(var d=0;d<e.length;d++){var r=[].concat(e[d]);i&&o[r[0]]||(n&&(r[2]?r[2]="".concat(n," and ").concat(r[2]):r[2]=n),t.push(r))}},t}},379:function(e,t,n){"use strict";var i,o=function(){return void 0===i&&(
// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
// @see https://github.com/webpack-contrib/style-loader/issues/177
i=Boolean(window&&document&&document.all&&!window.atob)),i},s=function(){var e={};return function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}e[t]=n}return e[t]}}(),a=[];function d(e){for(var t=-1,n=0;n<a.length;n++)if(a[n].identifier===e){t=n;break}return t}function r(e,t){for(var n={},i=[],o=0;o<e.length;o++){var s=e[o],r=t.base?s[0]+t.base:s[0],l=n[r]||0,c="".concat(r," ").concat(l);n[r]=l+1;var u=d(c),p={css:s[1],media:s[2],sourceMap:s[3]};-1!==u?(a[u].references++,a[u].updater(p)):a.push({identifier:c,updater:m(p,t),references:1}),i.push(c)}return i}function l(e){var t=document.createElement("style"),i=e.attributes||{};if(void 0===i.nonce){var o=n.nc;o&&(i.nonce=o)}if(Object.keys(i).forEach((function(e){t.setAttribute(e,i[e])})),"function"==typeof e.insert)e.insert(t);else{var a=s(e.insert||"head");if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(t)}return t}var c,u=(c=[],function(e,t){return c[e]=t,c.filter(Boolean).join("\n")});function p(e,t,n,i){var o=n?"":i.media?"@media ".concat(i.media," {").concat(i.css,"}"):i.css;if(e.styleSheet)e.styleSheet.cssText=u(t,o);else{var s=document.createTextNode(o),a=e.childNodes;a[t]&&e.removeChild(a[t]),a.length?e.insertBefore(s,a[t]):e.appendChild(s)}}function f(e,t,n){var i=n.css,o=n.media,s=n.sourceMap;if(o?e.setAttribute("media",o):e.removeAttribute("media"),s&&"undefined"!=typeof btoa&&(i+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(s))))," */")),e.styleSheet)e.styleSheet.cssText=i;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(i))}}var h=null,v=0;function m(e,t){var n,i,o;if(t.singleton){var s=v++;n=h||(h=l(t)),i=p.bind(null,n,s,!1),o=p.bind(null,n,s,!0)}else n=l(t),i=f.bind(null,n,t),o=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)};return i(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;i(e=t)}else o()}}e.exports=function(e,t){(t=t||{}).singleton||"boolean"==typeof t.singleton||(t.singleton=o());var n=r(e=e||[],t);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var i=0;i<n.length;i++){var o=d(n[i]);a[o].references--}for(var s=r(e,t),l=0;l<n.length;l++){var c=d(n[l]);0===a[c].references&&(a[c].updater(),a.splice(c,1))}n=s}}}},605:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return ae}});var i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("VPopup",{staticClass:"download-video-panel",attrs:{fixed:"","trigger-element":e.triggerElement},model:{value:e.open,callback:function(t){e.open=t},expression:"open"}},[n("div",{staticClass:"download-video-panel-header"},[n("VIcon",{attrs:{icon:"mdi-download"}}),e._v(" "),n("div",{staticClass:"title"},[e._v("\n      下载视频\n    ")]),e._v(" "),n("VButton",{attrs:{type:"transparent",title:"关闭"},on:{click:function(t){e.open=!1}}},[n("VIcon",{attrs:{icon:"mdi-close",size:20}})],1)],1),e._v(" "),n("div",{staticClass:"download-video-panel-content"},[e.selectedInput?n("div",{staticClass:"download-video-config-item"},[n("div",{staticClass:"download-video-config-title"},[e._v("\n        输入源:\n      ")]),e._v(" "),n("VDropdown",{attrs:{items:e.inputs},model:{value:e.selectedInput,callback:function(t){e.selectedInput=t},expression:"selectedInput"}})],1):e._e(),e._v(" "),0===e.inputs.length?n("div",{staticClass:"download-video-config-item error"},[e._v("\n      没有匹配的输入源, 请确保安装了适合此页面的插件.\n    ")]):e._e(),e._v(" "),e.selectedInput&&e.selectedInput.component?n(e.selectedInput.component,{ref:"inputOptions",tag:"component"}):e._e(),e._v(" "),e.selectedApi?n("div",{staticClass:"download-video-config-item"},[n("div",{staticClass:"download-video-config-title"},[e._v("\n        格式:\n      ")]),e._v(" "),n("VDropdown",{attrs:{items:e.apis},model:{value:e.selectedApi,callback:function(t){e.selectedApi=t},expression:"selectedApi"}})],1):e._e(),e._v(" "),e.selectedApi&&e.selectedApi.description?n("div",{staticClass:"download-video-config-description",domProps:{innerHTML:e._s(e.selectedApi.description)}}):e._e(),e._v(" "),e.selectedQuality?n("div",{staticClass:"download-video-config-item"},[n("div",{staticClass:"download-video-config-title"},[e._v("\n        清晰度:\n      ")]),e._v(" "),n("VDropdown",{attrs:{items:e.filteredQualities},on:{change:function(t){return e.saveSelectedQuality()}},model:{value:e.selectedQuality,callback:function(t){e.selectedQuality=t},expression:"selectedQuality"}})],1):e._e(),e._v(" "),!e.testData.multiple&&e.selectedQuality?[e.testData.videoInfo?n("div",{staticClass:"download-video-config-description"},[e._v("\n        预计大小: "+e._s(e.formatFileSize(e.testData.videoInfo.totalSize))+"\n      ")]):e._e(),e._v(" "),null===e.testData.videoInfo?n("div",{staticClass:"download-video-config-description"},[e._v("\n        正在计算大小\n      ")]):e._e()]:e._e(),e._v(" "),e._l(e.assetsWithOptions,(function(e){return n(e.component,{key:e.name,ref:"assetsOptions",refInFor:!0,tag:"component",attrs:{name:e.name}})})),e._v(" "),e.selectedOutput?n("div",{staticClass:"download-video-config-item"},[n("div",{staticClass:"download-video-config-title"},[e._v("\n        输出方式:\n      ")]),e._v(" "),n("VDropdown",{attrs:{items:e.outputs},model:{value:e.selectedOutput,callback:function(t){e.selectedOutput=t},expression:"selectedOutput"}})],1):e._e(),e._v(" "),e.selectedOutput&&e.selectedOutput.description?n("div",{staticClass:"download-video-config-description"},[e._v("\n      "+e._s(e.selectedOutput.description)+"\n    ")]):e._e(),e._v(" "),e.selectedOutput&&e.selectedOutput.component?n(e.selectedOutput.component,{ref:"outputOptions",tag:"component"}):e._e()],2),e._v(" "),n("div",{staticClass:"download-video-panel-footer"},[n("VButton",{staticClass:"run-download",attrs:{type:"primary",disabled:!e.canStartDownload},on:{click:function(t){return e.startDownload(e.$refs.outputOptions,e.selectedOutput)}}},[e._v("\n      开始\n    ")])],1)])};i._withStripped=!0;var o=coreApis.settings,s=coreApis.utils,a=n(414),d=coreApis.utils.formatters,r=coreApis.ui,l=coreApis.pluginApis.data,c=coreApis.componentApis.video.videoQuality,u=coreApis.toast,p=coreApis.utils.title,f=coreApis.ajax,h=coreApis.utils.urls,v=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"episodes-picker download-video-config-section"},[n("div",{staticClass:"episodes-picker-header"},[n("div",{staticClass:"episodes-picker-title"},[e._v("\n      选集:\n    ")]),e._v(" "),n("div",{staticClass:"episodes-picker-checked-ratio"},[e._v("\n      "+e._s(e.checkedRatio)+"\n    ")]),e._v(" "),n("div",{staticClass:"episodes-picker-actions"},[n("VButton",{staticClass:"select-all",attrs:{title:"全选",type:"transparent"},on:{click:function(t){e.forEachItem((function(e){return e.isChecked=!0}))}}},[n("VIcon",{attrs:{size:16,icon:"mdi-checkbox-multiple-marked-circle"}})],1),e._v(" "),n("VButton",{staticClass:"deselect-all",attrs:{title:"全不选",type:"transparent"},on:{click:function(t){e.forEachItem((function(e){return e.isChecked=!1}))}}},[n("VIcon",{attrs:{size:16,icon:"mdi-checkbox-multiple-blank-circle-outline"}})],1),e._v(" "),n("VButton",{staticClass:"invert-selection",attrs:{title:"反选",type:"transparent"},on:{click:function(t){e.forEachItem((function(e){return e.isChecked=!e.isChecked}))}}},[n("VIcon",{attrs:{size:16,icon:"mdi-circle-slice-4"}})],1)],1)]),e._v(" "),n("div",{staticClass:"episodes-picker-items"},e._l(e.episodeItems,(function(t,i){return n("div",{key:t.key,staticClass:"episodes-picker-item"},[n("CheckBox",{attrs:{"icon-position":"left","data-aid":t.inputItem.aid,"data-cid":t.inputItem.cid,"data-bvid":t.inputItem.bvid},nativeOn:{click:function(n){return e.shiftSelect(n,t,i)}},model:{value:t.isChecked,callback:function(n){e.$set(t,"isChecked",n)},expression:"item.isChecked"}},[n("span",{staticClass:"episode-title"},[e._v("\n          "+e._s(t.title)+"\n        ")]),e._v(" "),t.durationText?n("span",{staticClass:"episode-duration"},[e._v("\n          "+e._s(t.durationText)+"\n        ")]):e._e()])],1)})),0)])};v._withStripped=!0;var m=Vue.extend({components:{VButton:r.VButton,VIcon:r.VIcon,CheckBox:r.CheckBox},props:{api:{type:Function,required:!0}},data:()=>({episodeItems:[],maxCheckedItems:32,lastCheckedEpisodeIndex:-1}),computed:{checkedRatio(){return`(${this.episodeItems.filter((e=>e.isChecked)).length}/${this.episodeItems.length})`},inputItems(){return this.episodeItems.map((e=>e.inputItem))},checkedInputItems(){return this.episodeItems.filter((e=>e.isChecked)).map((e=>e.inputItem))}},created(){this.getEpisodeItems()},methods:{shiftSelect(e,t,n){e.shiftKey&&-1!==this.lastCheckedEpisodeIndex?e.shiftKey&&-1!==this.lastCheckedEpisodeIndex&&(this.episodeItems.slice(Math.min(this.lastCheckedEpisodeIndex,n)+1,Math.max(this.lastCheckedEpisodeIndex,n)).forEach((e=>{e.isChecked=!e.isChecked})),this.lastCheckedEpisodeIndex=n,e.preventDefault()):this.lastCheckedEpisodeIndex=n},forEachItem(e){this.episodeItems.forEach(e)},async getEpisodeItems(){this.episodeItems.length>0||(this.episodeItems=await this.api(this))}}}),g=n(379),w=n.n(g),b=n(635),y=n.n(b),x={insert:"head",singleton:!1},_=(w()(y(),x),y().locals,n(900)),I=(0,_.Z)(m,v,[],!1,null,null,null);I.options.__file="registry/lib/components/video/download/inputs/EpisodesPicker.vue";var k=I.exports;const C=e=>Vue.extend({computed:{checkedInputItems(){return this.$refs.picker.checkedInputItems}},render:t=>t(k,{props:{api:e},ref:"picker"})}),A={name:"bangumi.batch",displayName:"当前番剧 (多P)",match:h.bangumiUrls,batch:!0,getInputs:async e=>(null==e?void 0:e.checkedInputItems)??[],component:async()=>C((async e=>{var t,n;const i=document.querySelector("meta[property='og:url']");if(null===i)return(0,a.logError)("获取番剧数据失败: 无法找到 Season ID"),[];const s=null===(t=i.getAttribute("content"))||void 0===t||null===(n=t.match(/play\/ss(\d+)/))||void 0===n?void 0:n[1];if(void 0===s)return(0,a.logError)("获取番剧数据失败: 无法解析 Season ID"),[];const r=await(0,f.getJson)(`https://api.bilibili.com/pgc/web/season/section?season_id=${s}`);if(0!==r.code)return(0,a.logError)(`获取番剧数据失败: 无法获取番剧集数列表, message=${r.message}`),[];const l=r.result.main_section.episodes;return l.map(((t,n)=>{const i=t.long_title?t.title:(n+1).toString(),s=t.long_title?t.long_title:t.title;return{key:t.cid,title:`${i} - ${s}`,isChecked:n<e.maxCheckedItems,inputItem:{aid:t.aid,cid:t.cid,title:(0,p.formatTitle)((0,o.getGeneralSettings)().batchFilenameFormat,!1,{ep:s,cid:t.cid,aid:t.aid,n:(0,d.formatNumber)(parseFloat(i),l.length)??i}),allowQualityDrop:!0}}}))}))},V={name:"video.batch",displayName:"当前视频 (多P)",match:h.videoUrls,batch:!0,getInputs:async e=>(null==e?void 0:e.checkedInputItems)??[],component:async()=>C((async e=>{const{aid:t}=unsafeWindow,n=`https://api.bilibili.com/x/web-interface/view?aid=${t}`,i=await(0,f.getJsonWithCredentials)(n);if(0!==i.code)return(0,a.logError)(`获取视频选集列表失败, message = ${i.message}`),[];const{pages:s}=i.data;return void 0===s?((0,a.logError)("获取视频选集列表失败, 没有找到选集信息."),[]):s.map(((n,i)=>({key:n.cid,title:`P${n.page} ${n.part}`,isChecked:i<e.maxCheckedItems,durationText:(0,d.formatDuration)(n.duration),inputItem:{allowQualityDrop:!0,title:(0,p.formatTitle)((0,o.getGeneralSettings)().batchFilenameFormat,!1,{cid:n.cid,n:(0,d.formatNumber)(n.page,s.length),ep:n.part}),cid:n.cid,aid:t}})))}))},D={name:"video",displayName:"当前视频",match:h.videoUrls,getInputs:async()=>[{aid:unsafeWindow.aid,cid:unsafeWindow.cid,title:(0,p.getFriendlyTitle)(!0)}],component:()=>Promise.resolve().then(n.bind(n,573)).then((e=>e.default))};var E=coreApis.utils.sort;const S=(e,t)=>{e.quality&&t.currentQuality.value!==e.quality.value&&(e.allowQualityDrop?console.warn(`'${e.title}' 不支持选择的清晰度${e.quality.displayName}, 已降级为${t.currentQuality.displayName}`):(e=>{if(c.vipRequiredQualities.find((t=>t.value===e)))throw new Error("您选择的清晰度需要大会员, 请更改清晰度后重试.");if(c.loginRequiredQualities.find((t=>t.value===e)))throw new Error("您选择的清晰度需要先登录.");throw new Error("获取下载链接失败, 请尝试更换清晰度或更换格式.")})(e.quality.value))};var $=coreApis.download;function O(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}class q{constructor(e){O(this,"input",void 0),O(this,"fragments",void 0),O(this,"qualities",void 0),O(this,"currentQuality",void 0),O(this,"jsonData",void 0),Object.assign(this,e)}get totalSize(){return lodash.sumBy(this.fragments,(e=>e.size))}get totalLength(){return lodash.sumBy(this.fragments,(e=>e.length))}get titledFragments(){return this.fragments.map(((e,t)=>{const n=this.fragments.filter((t=>t.extension===e.extension)).length>1?` - ${(0,d.formatNumber)(t+1,this.fragments.length)}`:"";return{...e,title:`${this.input.title}${n}${e.extension}`}}))}}class Q{constructor(e){this.infos=e,O(this,"inputs",[]),O(this,"extraAssets",[]),this.inputs=e.map((e=>e.input))}get isSingleVideo(){return this.inputs.length<2}async downloadExtraAssets(){console.log("[downloadExtraAssets]",this.extraAssets);const e=`${(0,p.getFriendlyTitle)(!1)}.zip`;await new $.DownloadPackage(this.extraAssets).emit(e)}}const T=e=>`https://api.bilibili.com/x/player/playurl?${e}`,U=e=>`https://api.bilibili.com/pgc/player/web/playurl?${e}`,j={video:".mp4",audio:".m4a",flacAudio:".flac"};let P;!function(e){e.Avc="AVC/H.264",e.Hevc="HEVC/H.265",e.Av1="AV1"}(P||(P={}));const N=e=>({url:e.downloadUrl,backupUrls:e.backupUrls,length:e.duration,size:Math.trunc(e.bandWidth*e.duration/8),extension:j[e.type]??".m4s"}),W=e=>{const{videoDashes:t,audioDashes:n,videoCodec:i}=e,o=[];if(0!==t.length){const e=e=>e.videoCodec===i;if(t.some(e)){const n=t.filter(e).sort((0,E.ascendingSort)((e=>e.bandWidth)))[0];o.push(N(n))}else o.push(N(t.sort((0,E.ascendingSort)((e=>e.bandWidth)))[0]))}if(0!==n.length){const e=n.sort((0,E.descendingSort)((e=>e.bandWidth)))[0];o.push(N(e))}return o},z=async function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};const{codec:n=P.Avc,filters:i}=t,o={video:()=>!0,audio:()=>!0,...i},{aid:a,cid:d,quality:r}=e,l={avid:a,cid:d,qn:(null==r?void 0:r.value)??"",otype:"json",fourk:1,fnver:0,fnval:4048},u=h.bangumiUrls.some((e=>(0,s.matchUrlPattern)(e))),p=u?U((0,s.formData)(l)):T((0,s.formData)(l)),v=await(0,f.bilibiliApi)((0,f.getJsonWithCredentials)(p),"获取视频链接失败");if(!v.dash)throw new Error("此视频没有 dash 格式, 请改用其他格式.");const m=c.allQualities.find((e=>e.value===v.quality)),{duration:g,video:w,audio:b,dolby:y,flac:x}=v.dash,_=e=>{switch(e){case 12:return P.Hevc;case 13:return P.Av1;default:return P.Avc}},I=w.filter((e=>e.id===m.value)).map((e=>({type:"video",videoCodec:_(e.codecid),quality:m,width:e.width,height:e.height,codecs:e.codecs,codecId:e.codecid,bandWidth:e.bandwidth,frameRate:e.frameRate,backupUrls:(e.backupUrl||e.backup_url||[]).map((e=>e.replace("http:","https:"))),downloadUrl:(e.baseUrl||e.base_url||"").replace("http:","https:"),duration:g}))).filter((e=>o.video(e))),k=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"audio";return{type:t,bandWidth:e.bandwidth,codecs:e.codecs,codecId:e.codecid??0,backupUrls:(e.backupUrl||e.backup_url||[]).map((e=>e.replace("http:","https:"))),downloadUrl:(e.baseUrl||e.base_url||"").replace("http:","https:"),duration:g}},C=(b||[]).map((e=>k(e))).filter((e=>o.audio(e)));var A;y&&C.push(...(null===(A=y.audio)||void 0===A?void 0:A.map((e=>k(e))))??[]);x&&C.push(...x.audio?[k(x.audio,"flacAudio")]:[]);const V=W({audioDashes:C,videoDashes:I,videoCodec:n}),D=v.accept_quality.map((e=>c.allQualities.find((t=>t.value===e)))).filter((e=>void 0!==e)),E=new q({input:e,jsonData:v,fragments:V,qualities:D,currentQuality:m});return S(e,E),E},B={name:"video.dash.avc",displayName:"dash (AVC/H.264)",description:"音画分离的 mp4 格式, 编码为 H.264, 体积较大, 兼容性较好. 下载后可以合并为单个 mp4 文件. 如果视频源没有此编码, 则会自动选择其他同清晰度的编码格式.",downloadVideoInfo:async e=>z(e,{codec:P.Avc})},F={name:"video.dash.hevc",displayName:"dash (HEVC/H.265)",description:"音画分离的 mp4 格式, 编码为 H.265, 体积中等, 兼容性较差. 下载后可以合并为单个 mp4 文件. 如果视频源没有此编码, 则会自动选择其他同清晰度的编码格式.",downloadVideoInfo:async e=>z(e,{codec:P.Hevc})},H={name:"video.dash.av1",displayName:"dash (AV1)",description:"音画分离的 mp4 格式, 编码为 AV1, 体积较小, 兼容性中等. 下载后可以合并为单个 mp4 文件. 如果视频源没有此编码, 则会自动选择其他同清晰度的编码格式.",downloadVideoInfo:async e=>z(e,{codec:P.Av1})},M={name:"video.dash.audio",displayName:"dash (仅音频)",description:"仅下载视频中的音频轨道.",downloadVideoInfo:async e=>z(e,{filters:{video:()=>!1}})},R=(e,t)=>{const n=e=>t.length>e?t[e]:t[t.length-1];return{fragments:e.durl.map(((e,t)=>({length:e.length,size:e.size,url:e.url,backupUrls:e.backup_url,extension:n(t)}))),qualities:e.accept_quality.map((e=>c.allQualities.find((t=>t.value===e)))).filter((e=>void 0!==e)),currentQuality:c.allQualities.find((t=>t.value===e.quality))}},G={name:"video.flv",displayName:"flv",description:"使用 flv 格式下载, 兼容 H.264 编码.",downloadVideoInfo:e=>(async e=>{const{aid:t,cid:n,quality:i}=e,o={avid:t,cid:n,qn:(null==i?void 0:i.value)??"",otype:"json",fourk:1,fnver:0,fnval:0},a=h.bangumiUrls.some((e=>(0,s.matchUrlPattern)(e)))?U((0,s.formData)(o)):T((0,s.formData)(o)),d=await(0,f.bilibiliApi)((0,f.getJsonWithCredentials)(a),"获取视频链接失败"),r=new q({input:e,jsonData:d,...R(d,[".flv"])});return S(e,r),r})(e)},L={name:"consoleLogDemo",displayName:"Toast",description:"弹一条消息显示出下载链接, 右键新标签页打开就可以下载. 链接有 referer 限制, 复制无用, 且不能保留视频文件名.",runAction:async e=>{const t=e.infos.flatMap((e=>e.titledFragments)),n=t.map((e=>e.url)).join("\n");u.Toast.show(t.map((e=>`<a class="link" href="${e.url}" download="${e.title}">${e.title}</a>`)).join("\n"),"下载视频"),console.log(n),console.log(e)}},[J]=(0,l.registerAndGetData)("downloadVideo.inputs",[D,V,A]),[Z]=(0,l.registerAndGetData)("downloadVideo.apis",[G,B,F,H,M]),[X]=(0,l.registerAndGetData)("downloadVideo.assets",[]),[Y]=(0,l.registerAndGetData)("downloadVideo.outputs",[L]),{basicConfig:K}=(0,o.getComponentSettings)("downloadVideo").options,ee=e=>e.filter((e=>{var t;return(null===(t=e.match)||void 0===t?void 0:t.some((e=>(0,s.matchUrlPattern)(e))))??!0}));var te=Vue.extend({components:{VPopup:r.VPopup,VButton:r.VButton,VDropdown:r.VDropdown,VIcon:r.VIcon},props:{triggerElement:{required:!0}},data(){const e=K.output;return{open:!1,busy:!1,testData:{videoInfo:null,multiple:!1},assets:X,qualities:[],selectedQuality:void 0,inputs:[],selectedInput:void 0,apis:[],selectedApi:void 0,outputs:Y,selectedOutput:Y.find((t=>t.name===e))||Y[0]}},computed:{assetsWithOptions(){return this.assets.filter((e=>e.component))},filteredQualities(){return 0===this.qualities.length?c.allQualities:this.qualities},canStartDownload(){if(this.busy||!this.open)return!1;return!Object.entries(this).filter((e=>{let[t]=e;return t.startsWith("selected")})).some((e=>{let[,t]=e;return!t}))}},watch:{selectedInput(e){void 0!==e&&this.updateTestVideoInfo()},selectedApi(e){void 0!==e&&(this.updateTestVideoInfo(),K.api=e.name)},selectedOutput(e){void 0!==e&&(K.output=e.name)}},mounted(){coreApis.observer.videoChange((()=>{this.selectedInput=void 0,this.selectedApi=void 0;const e=ee(J);this.inputs=e,this.selectedInput=e[0];const t=ee(Z);this.apis=t;const n=t.find((e=>e.name===K.api));this.selectedApi=n||t[0]}))},methods:{formatFileSize:d.formatFileSize,saveSelectedQuality(){const e=this.selectedQuality;void 0!==e&&(K.quality=e.value,this.updateTestVideoInfo())},async getVideoItems(){const e=this.selectedInput;return await e.getInputs(this.$refs.inputOptions)},async updateTestVideoInfo(){var e;if(!this.selectedInput||!this.selectedApi)return;this.testData.videoInfo=null;const t=this.selectedInput,n=(null===(e=t.getTestInput)||void 0===e?void 0:e.call(t))??{aid:unsafeWindow.aid,cid:unsafeWindow.cid,title:(0,p.getFriendlyTitle)(!0)};console.log("[updateTestVideoInfo]",n),this.testData.multiple=t.batch;const i=this.selectedApi;try{const e=await i.downloadVideoInfo(n);this.qualities=e.qualities;if((!this.selectedQuality||!e.qualities.some((e=>e.value===this.selectedQuality.value)))&&(this.selectedQuality=e.qualities[0],K.quality)){const[t]=e.qualities.filter((e=>e.value<=K.quality));t&&(this.selectedQuality=t)}n.quality=this.selectedQuality;const t=await i.downloadVideoInfo(n);this.testData.videoInfo=t}catch(e){this.testData.videoInfo=void 0}},async startDownload(e,t){try{this.busy=!0;const n=this.selectedInput,i=this.selectedApi,o=await n.getInputs(this.$refs.inputOptions);if(0===o.length)return void u.Toast.info("未接收到视频, 如果输入源支持批量, 请至少选择一个视频.","下载视频",3e3);o.forEach((e=>{e.quality=this.selectedQuality}));const s=await Promise.all(o.map((e=>i.downloadVideoInfo(e))));if(0===s.length||0===lodash.sumBy(s,(e=>e.fragments.length)))return void u.Toast.info("未接收到可下载数据, 请检查输入源和格式是否适用于当前视频.","下载视频",3e3);const a=new Q(s),d=(await Promise.all(X.map((e=>e.getAssets(s,this.$refs.assetsOptions.find((t=>t.$attrs.name===e.name))))))).flat();a.extraAssets.push(...d),await a.downloadExtraAssets(),await t.runAction(a,e)}catch(e){(0,a.logError)(e)}finally{this.busy=!1}}}}),ne=n(828),ie=n.n(ne),oe={insert:"head",singleton:!1},se=(w()(ie(),oe),ie().locals,(0,_.Z)(te,i,[],!1,null,null,null));se.options.__file="registry/lib/components/video/download/DownloadVideo.vue";var ae=se.exports},185:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return d}});var i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"multiple-widgets"},[n("DefaultWidget",{ref:"button",attrs:{name:"下载视频",icon:"mdi-download"},on:{mouseover:function(t){return e.createDownloadPanel()},click:function(t){return e.toggleDownloadPanel()}}})],1)};let o;i._withStripped=!0;var s=Vue.extend({components:{DefaultWidget:coreApis.ui.DefaultWidget},methods:{async createDownloadPanel(){if(!o){const e=document.createElement("div");document.body.appendChild(e);const t=await Promise.resolve().then(n.bind(n,605)).then((e=>e.default));o=new t({propsData:{triggerElement:this.$refs.button}}).$mount(e)}},async toggleDownloadPanel(){o&&(o.open=!o.open)}}}),a=(0,n(900).Z)(s,i,[],!1,null,null,null);a.options.__file="registry/lib/components/video/download/Widget.vue";var d=a.exports},573:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return h}});var i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"single-video-info download-video-config-section"},[e.imageUrl?n("img",{staticClass:"shadow",attrs:{src:e.imageUrl}}):e._e(),e._v(" "),e.imageUrl?n("img",{attrs:{src:e.imageUrl}}):e._e()])};i._withStripped=!0;var o=coreApis.observer,s=n(414),a=coreApis.componentApis.video.videoInfo,d=Vue.extend({data:()=>({imageUrl:""}),created(){(0,o.videoChange)((async()=>{const{aid:e}=unsafeWindow,t=new a.VideoInfo(e);try{await t.fetchInfo()}catch(e){throw(0,s.logError)(e),e}this.imageUrl=t.coverUrl.replace("http:","https:")}))}}),r=n(379),l=n.n(r),c=n(307),u=n.n(c),p={insert:"head",singleton:!1},f=(l()(u(),p),u().locals,(0,n(900).Z)(d,i,[],!1,null,null,null));f.options.__file="registry/lib/components/video/download/inputs/video/SingleVideoInfo.vue";var h=f.exports},900:function(e,t,n){"use strict";function i(e,t,n,i,o,s,a,d){var r,l="function"==typeof e?e.options:e;if(t&&(l.render=t,l.staticRenderFns=n,l._compiled=!0),i&&(l.functional=!0),s&&(l._scopeId="data-v-"+s),a?(r=function(e){(e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),o&&o.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(a)},l._ssrRegister=r):o&&(r=d?function(){o.call(this,(l.functional?this.parent:this).$root.$options.shadowRoot)}:o),r)if(l.functional){l._injectStyles=r;var c=l.render;l.render=function(e,t){return r.call(t),c(e,t)}}else{var u=l.beforeCreate;l.beforeCreate=u?[].concat(u,r):[r]}return{exports:e,options:l}}n.d(t,{Z:function(){return i}})},414:function(e){"use strict";e.exports=coreApis.utils.log}},t={};function n(i){var o=t[i];if(void 0!==o)return o.exports;var s=t[i]={id:i,exports:{}};return e[i](s,s.exports,n),s.exports}n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,{a:t}),t},n.d=function(e,t){for(var i in t)n.o(t,i)&&!n.o(e,i)&&Object.defineProperty(e,i,{enumerable:!0,get:t[i]})},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var i={};return function(){"use strict";n.d(i,{component:function(){return t}});var e=coreApis.spinQuery;const t={name:"downloadVideo",displayName:"下载视频",description:"在功能面板中添加下载视频支持. 请注意不能下载超出账号权限的视频, 例如非大会员下载大会员清晰度视频, 或者大陆地区网络下载港澳台地区番剧, 都是不可以的.",entry:none,reload:none,unload:none,widget:{component:()=>Promise.resolve().then(n.bind(n,185)).then((e=>e.default)),condition:()=>(0,e.hasVideo)()},tags:[componentsTags.video],options:{basicConfig:{defaultValue:{},displayName:"基础配置",hidden:!0}},commitHash:"1f115daaac85058171e797e36b0dd9ba920234d7",coreVersion:"2.3.1"}}(),i=i.component}()}));