(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-fc7b8a3c"],{"1dde":function(t,e,s){var i=s("d039"),n=s("b622"),r=s("2d00"),a=n("species");t.exports=function(t){return r>=51||!i((function(){var e=[],s=e.constructor={};return s[a]=function(){return{foo:1}},1!==e[t](Boolean).foo}))}},"21ad":function(t,e,s){"use strict";s("80f9")},6189:function(t,e,s){"use strict";var i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{ref:"hContainer",staticClass:"horizontal-scroll__wrapper"},[s("div",{staticClass:"horizontal-scroll",class:[{"horizontal-scroll--item-fw":t.itemFullWidth},{row:t.row}],style:[{transform:"translate("+t.scrollVal+"px,0px)"}]},[t._t("default")],2)])},n=[],r=(s("7db0"),s("b64b"),s("d81d"),{name:"ScrollHorizontal",props:{selectedId:{type:String,default:""},itemFullWidth:{type:Boolean,default:!1},row:{type:Boolean,default:!1}},data:function(){return{scrollVal:0,ids:[]}},watch:{selectedId:function(t){t.length&&this.scroll()}},mounted:function(){this.getCords(),this.scroll(),window.addEventListener("resize",this.scroll)},updated:function(){this.getCords()},beforeDestroy:function(){window.removeEventListener("resize",this.scroll)},methods:{scroll:function(){var t,e=this,s=null===(t=this.ids.find((function(t){return t.id===e.selectedId})))||void 0===t?void 0:t.id,i=document.getElementById(s);if(Object.keys(this.$slots.default).length&&this.selectedId.length&&null!==i){var n=this.$refs.hContainer,r=i.offsetWidth*this.ids.length,a=i.offsetLeft,o=n.offsetWidth/i.offsetWidth;o>1&&r-a<n.offsetWidth&&(a=r-n.offsetWidth),this.scrollVal=1===this.ids.length?0:-a}},getCords:function(){this.$slots.default&&(this.ids=this.$slots.default.map((function(t){return{id:t.elm.id,key:t.key}})))}}}),a=r,o=(s("21ad"),s("2877")),l=Object(o["a"])(a,i,n,!1,null,"c4e6906c",null);e["a"]=l.exports},"65f0":function(t,e,s){var i=s("861d"),n=s("e8b5"),r=s("b622"),a=r("species");t.exports=function(t,e){var s;return n(t)&&(s=t.constructor,"function"!=typeof s||s!==Array&&!n(s.prototype)?i(s)&&(s=s[a],null===s&&(s=void 0)):s=void 0),new(void 0===s?Array:s)(0===e?0:e)}},"7db0":function(t,e,s){"use strict";var i=s("23e7"),n=s("b727").find,r=s("44d2"),a="find",o=!0;a in[]&&Array(1)[a]((function(){o=!1})),i({target:"Array",proto:!0,forced:o},{find:function(t){return n(this,t,arguments.length>1?arguments[1]:void 0)}}),r(a)},"80f9":function(t,e,s){},ab14:function(t,e,s){"use strict";e["a"]={data:()=>({mainId:Math.floor(Math.random()*10**10),selected:0,elements:[],stateStr:"",rendered:!1,firstSelection:!0}),watch:{menuState(){this.domUpdated()}},created(){window.addEventListener("resize",this.domUpdated)},mounted(){this.$nextTick(()=>{this.crearElementos()})},computed:{menuState(){return this.$store.getters.isMenuOpen},navObj(){if(!this.elements.length||!this.secuencial)return{};const t=this.elements.map(t=>t.id),e=t.indexOf(this.selected);if(e<0)return{};const s={};return 0===e?s.next=t[e+1]:(e+1===t.length||(s.next=t[e+1]),s.back=t[e-1]),s}},beforeDestroy(){window.removeEventListener("resize",this.domUpdated)},updated(){this.$nextTick(()=>{this.getStateStr()!=this.stateStr&&this.crearElementos()})},methods:{crearElementos(){return this.$slots.default&&this.$slots.default.length?(this.domUpdated(),this.elements=this.$slots.default.map((t,e)=>{const s=t.data&&t.data.attrs?t.data.attrs:[];return{id:this.mainId+e+1,elm:t.elm,...s}}),this.firstSelection&&(this.selected=this.selected>0?this.selected:this.elements[0].id),void(this.stateStr=this.getStateStr())):[]},getActiveHeight(t){return this.$refs[t][0].scrollHeight+"px"},getStateStr(){return this.$slots.default.map(t=>t.elm.outerHTML).join("")},domUpdated(){this.rendered=!1,setTimeout(()=>{this.rendered=!0},100)}}}},b64b:function(t,e,s){var i=s("23e7"),n=s("7b0b"),r=s("df75"),a=s("d039"),o=a((function(){r(1)}));i({target:"Object",stat:!0,forced:o},{keys:function(t){return r(n(t))}})},b727:function(t,e,s){var i=s("0366"),n=s("44ad"),r=s("7b0b"),a=s("50c4"),o=s("65f0"),l=[].push,d=function(t){var e=1==t,s=2==t,d=3==t,c=4==t,h=6==t,u=7==t,f=5==t||h;return function(m,p,_,v){for(var b,g,w=r(m),C=n(w),x=i(p,_,3),y=a(C.length),S=0,k=v||o,I=e?k(m,y):s||u?k(m,0):void 0;y>S;S++)if((f||S in C)&&(b=C[S],g=x(b,S,w),t))if(e)I[S]=g;else if(g)switch(t){case 3:return!0;case 5:return b;case 6:return S;case 2:l.call(I,b)}else switch(t){case 4:return!1;case 7:l.call(I,b)}return h?-1:d||c?c:I}};t.exports={forEach:d(0),map:d(1),filter:d(2),some:d(3),every:d(4),find:d(5),findIndex:d(6),filterOut:d(7)}},c2c8:function(t,e,s){"use strict";s.r(e);var i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"pasos-b"},[s("div",{staticClass:"row flex-nowrap mx-0 pasos-b__header mb-4"},[s("div",{staticClass:"col-2 col-sm-auto px-0 me-sm-3"},[s("div",{staticClass:"pasos-b__header__btn--left",on:{click:function(e){t.selected=t.leftBtnId}}},[s("i",{staticClass:"fas fa-angle-left"})])]),s("div",{staticClass:"col-8 col-sm px-0"},[s("div",{staticClass:"row mx-0 flex-nowrap pasos-b__header__items"},[t.elements.length?s("ScrollHorizontal",{attrs:{selectedId:"pb-header-"+(t.selected-1)}},t._l(t.elements,(function(e,i){return s("div",{key:"pb-header-key-"+e.id,staticClass:"col-6 col-sm-4 px-0 pasos-b__header__item",class:t.itemClasses(e.id),attrs:{id:"pb-header-"+e.id}},[s("div",{staticClass:"pasos-b__header__item__line-container"},[s("div",{staticClass:"pasos-b__header__item__dot"},[s("span",{staticClass:"text-bold"},[t._v(t._s(i+1))]),s("i",{staticClass:"fas fa-check"})])]),s("div",{staticClass:"pasos-b__header__item__tittle px-2 text-small",domProps:{innerHTML:t._s(e.titulo)}})])})),0):t._e()],1)]),s("div",{staticClass:"col-2 col-sm-auto px-0 ms-sm-3 d-flex justify-content-end"},[s("div",{staticClass:"pasos-b__header__btn--right",on:{click:function(e){t.selected=t.rightBtnId},mouseover:function(e){t.mostrarIndicador=!1}}},[s("i",{staticClass:"fas fa-angle-right"}),t.mostrarIndicador?s("div",{staticClass:"indicador__container indicador--left"},[s("div",{staticClass:"indicador--click"})]):t._e()])])]),s("div",{staticClass:"linea-tiempo-c__content"},[t.elements.length?s("ScrollHorizontal",{attrs:{selectedId:"pb-content-"+t.selected,"item-full-width":""}},t._l(t.elements,(function(t){return s("div",{directives:[{name:"child",rawName:"v-child",value:t.elm,expression:"item.elm"}],key:"pb-content-key-"+t.id,staticClass:"linea-tiempo-c__content__item",attrs:{id:"pb-content-"+t.id}})})),0):t._e(),s("div",{staticClass:"hidden-slot"},[t._t("default")],2)],1)])},n=[],r=s("ab14"),a=s("6189"),o={name:"PasosB",components:{ScrollHorizontal:a["a"]},mixins:[r["a"]],data:function(){return{headerSelected:0,mostrarIndicador:!0}},computed:{leftBtnId:function(){return this.selected-1===this.mainId?this.selected:this.selected-1},rightBtnId:function(){return this.selected+1===this.elements[this.elements.length-1].id+1?this.selected:this.selected+1}},watch:{elements:function(t,e){!e.length&&t.length&&(this.headerSelected=t[0].id)}},methods:{itemClasses:function(t){return[{"pasos-b__header__item--active":t===this.selected},{"pasos-b__header__item--before":t<this.selected},this.elements.length>6?"col-lg-2":"col-lg",this.elements.length>=4?"col-md-3":"col-md"]}}},l=o,d=s("2877"),c=Object(d["a"])(l,i,n,!1,null,null,null);e["default"]=c.exports},d81d:function(t,e,s){"use strict";var i=s("23e7"),n=s("b727").map,r=s("1dde"),a=r("map");i({target:"Array",proto:!0,forced:!a},{map:function(t){return n(this,t,arguments.length>1?arguments[1]:void 0)}})},e8b5:function(t,e,s){var i=s("c6b6");t.exports=Array.isArray||function(t){return"Array"==i(t)}}}]);
//# sourceMappingURL=chunk-fc7b8a3c.2ac0fc7a.js.map