(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1b0bf87c"],{"1dde":function(e,n,t){var r=t("d039"),s=t("b622"),o=t("2d00"),c=s("species");e.exports=function(e){return o>=51||!r((function(){var n=[],t=n.constructor={};return t[c]=function(){return{foo:1}},1!==n[e](Boolean).foo}))}},"5fb7":function(e,n,t){"use strict";t.r(n);var r=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{ref:"fullscreenContainer",staticClass:"fullscreen-container"},[t("div",{staticClass:"actions"},[t("div",{directives:[{name:"show",rawName:"v-show",value:e.fullscreenEnabled,expression:"fullscreenEnabled"}],staticClass:"actions__action",on:{click:e.disableFullscreen}},[t("fullscreen-exit-icon")],1),t("div",{directives:[{name:"show",rawName:"v-show",value:!e.fullscreenEnabled,expression:"!fullscreenEnabled"}],staticClass:"actions__action",on:{click:e.enableFullscreen}},[t("fullscreen-icon")],1),t("div",{staticClass:"actions__action"},[t("close-icon",{on:{click:e.exitGame}})],1)]),t("div",{staticClass:"game-container",class:{"game-container_blurred":e.showModal}},[t("batak",{attrs:{activeSensor:e.activeSensor,status:e.status,counter:e.time,score:e.score},on:{start:e.startGame,success:e.increaseScore}})],1),t("modal",{attrs:{show:e.showModal},on:{"update:show":function(n){e.showModal=n}},scopedSlots:e._u([{key:"title",fn:function(){return[e._v("Игра окончена!")]},proxy:!0},{key:"content",fn:function(){return[t("div",[t("img",{staticClass:"score-image",attrs:{src:e.scoreImg,alt:""}})]),t("div",[e._v(" Вы набрали "+e._s(e.score)+" баллов! Поделитесь вашим результатом с друзьями: ")])]},proxy:!0},{key:"actions",fn:function(){return[t("a",{attrs:{href:e.shareURL.VK,target:"_blank"}},[e._v("Поделиться ВКонтакте")])]},proxy:!0}])})],1)},s=[],o=(t("99af"),t("d3b7"),{data:function(){return{activeSensor:null,demo:setInterval(this.setActiveSensor,1e3),score:0,status:!1,time:21,timeCounter:null,showModal:!1,fullscreenEnabled:null}},components:{batak:function(){return t.e("chunk-3389aba1").then(t.bind(null,"9df7"))},modal:function(){return t.e("chunk-271584e3").then(t.bind(null,"714b"))},FullscreenExitIcon:function(){return t.e("chunk-6eeeb05f").then(t.bind(null,"71f3"))},FullscreenIcon:function(){return t.e("chunk-6099961a").then(t.bind(null,"01cd"))},CloseIcon:function(){return t.e("chunk-ffc65bce").then(t.bind(null,"7eb5"))}},computed:{scoreImg:function(){return"img/scores/".concat(this.score,".png")},shareURL:function(){return{VK:"https://vk.com/share.php?url=".concat(window.location.origin,"&title=Игра&image=").concat(window.location.origin,"/img/scores/0.png")}}},mounted:function(){var e=this;this.enableFullscreen(),this.$refs.fullscreenContainer.addEventListener("fullscreenchange",(function(){e.fullscreenEnabled=!!document.fullscreenElement}))},methods:{setActiveSensor:function(){this.activeSensor=Math.floor(10*Math.random())},startGame:function(){var e=this;this.status||(console.log("start"),this.status=!0,this.score=0,clearInterval(this.demo),this.timeCounter=setInterval((function(){e.time>0?e.time--:e.endGame()}),1e3),setTimeout(this.endGame,21e3),this.setActiveSensor())},endGame:function(){clearInterval(this.timeCounter),console.log("Your score: "+this.score),this.status=!1,this.time=21,this.demo=setInterval(this.setActiveSensor,1e3),this.showModal=!0},increaseScore:function(){!0===this.status&&(this.score++,this.setActiveSensor())},enableFullscreen:function(){this.$refs.fullscreenContainer.requestFullscreen().catch((function(e){e&&console.log(e)}))},disableFullscreen:function(){document.exitFullscreen&&document.exitFullscreen()},exitGame:function(){this.$router.push("/")}}}),c=o,i=(t("ad3e"),t("2877")),a=Object(i["a"])(c,r,s,!1,null,"29e26fb6",null);n["default"]=a.exports},"65f0":function(e,n,t){var r=t("861d"),s=t("e8b5"),o=t("b622"),c=o("species");e.exports=function(e,n){var t;return s(e)&&(t=e.constructor,"function"!=typeof t||t!==Array&&!s(t.prototype)?r(t)&&(t=t[c],null===t&&(t=void 0)):t=void 0),new(void 0===t?Array:t)(0===n?0:n)}},"7fb5":function(e,n,t){},8418:function(e,n,t){"use strict";var r=t("c04e"),s=t("9bf2"),o=t("5c6c");e.exports=function(e,n,t){var c=r(n);c in e?s.f(e,c,o(0,t)):e[c]=t}},"99af":function(e,n,t){"use strict";var r=t("23e7"),s=t("d039"),o=t("e8b5"),c=t("861d"),i=t("7b0b"),a=t("50c4"),u=t("8418"),l=t("65f0"),f=t("1dde"),d=t("b622"),h=t("2d00"),v=d("isConcatSpreadable"),m=9007199254740991,b="Maximum allowed index exceeded",p=h>=51||!s((function(){var e=[];return e[v]=!1,e.concat()[0]!==e})),w=f("concat"),g=function(e){if(!c(e))return!1;var n=e[v];return void 0!==n?!!n:o(e)},x=!p||!w;r({target:"Array",proto:!0,forced:x},{concat:function(e){var n,t,r,s,o,c=i(this),f=l(c,0),d=0;for(n=-1,r=arguments.length;n<r;n++)if(o=-1===n?c:arguments[n],g(o)){if(s=a(o.length),d+s>m)throw TypeError(b);for(t=0;t<s;t++,d++)t in o&&u(f,d,o[t])}else{if(d>=m)throw TypeError(b);u(f,d++,o)}return f.length=d,f}})},ad3e:function(e,n,t){"use strict";var r=t("7fb5"),s=t.n(r);s.a},e8b5:function(e,n,t){var r=t("c6b6");e.exports=Array.isArray||function(e){return"Array"==r(e)}}}]);
//# sourceMappingURL=chunk-1b0bf87c.97856b7e.js.map