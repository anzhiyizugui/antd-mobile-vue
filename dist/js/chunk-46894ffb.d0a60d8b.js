(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-46894ffb"],{"461f":function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("demo-wrapper",{attrs:{title:"基本"}},[a("demo1")],1),a("demo-wrapper",{attrs:{title:"子元素数量变化"}},[a("demo2")],1),a("demo-wrapper",{attrs:{title:"带间距"}},[a("demo3")],1),a("demo-wrapper",{attrs:{title:"竖向"}},[a("demo4")],1),a("demo-wrapper",{attrs:{title:"抽奖"}},[a("demo5")],1)],1)},i=[],l=a("d225"),s=a("308d"),r=a("6bb5"),o=a("4e2b"),c=a("9ab4"),u=a("b687"),b=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("m-wing-blank",[a("m-carousel",{attrs:{infinite:"","after-change":t.afterChange,autoplay:!1,"before-change":t.beforeChange}},t._l(t.state.data,function(e,n){return a("a",{key:n,style:{display:"inline-block",width:"100%",height:t.state.imgHeight}},[a("img",{style:{width:"100%",verticalAlign:"top"},attrs:{alt:"",src:"https://zos.alipayobjects.com/rmsportal/"+e+".png"},on:{load:t.onLoad}})])}),0)],1)},d=[],p=a("b0b4"),m=a("8bbf"),f=a.n(m),h=a("65d9"),g=a.n(h),v=function(t){function e(){var t;return Object(l["a"])(this,e),t=Object(s["a"])(this,Object(r["a"])(e).apply(this,arguments)),t.state={data:["AiyWuByWklrrUDlFignR","TekJlZRVCjLFexlOCuWn","IJOtIlfsYdTyaDTRVrLI"],imgHeight:"176px",slideIndex:2},t}return Object(o["a"])(e,t),Object(p["a"])(e,[{key:"afterChange",value:function(t){this.state.slideIndex=t}},{key:"beforeChange",value:function(t,e){console.log("slide from ".concat(t," to ").concat(e))}},{key:"onLoad",value:function(){window.dispatchEvent(new Event("resize")),this.state.imgHeight="auto"}}]),e}(f.a);v=c["b"]([g()({name:"BaseDemo"})],v);var y=v,j=function(t){function e(){return Object(l["a"])(this,e),Object(s["a"])(this,Object(r["a"])(e).apply(this,arguments))}return Object(o["a"])(e,t),e}(y);j=c["b"]([g()({name:"CarouselDemo1"})],j);var O=j,w=O,C=a("2877"),k=Object(C["a"])(w,b,d,!1,null,null,null),_=k.exports,x=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("m-wing-blank",[a("m-button",{on:{click:t.onClick.bind(t)}},[t._v("Click me to add child")]),a("m-white-space"),a("m-carousel",{attrs:{infinite:"","after-change":t.afterChange,autoplay:!1,beforeChange:t.beforeChange,selectedIndex:t.state.slideIndex}},t._l(t.state.data,function(e, n){return a("a",{key:n,style:{display:"inline-block",width:"100%",height:t.state.imgHeight}},[a("img",{style:{width:"100%",verticalAlign:"top"},attrs:{alt:"",src:"https://zos.alipayobjects.com/rmsportal/"+e+".png"}})])}),0)],1)},D=[],E=function(t){function e(){return Object(l["a"])(this,e),Object(s["a"])(this,Object(r["a"])(e).apply(this,arguments))}return Object(o["a"])(e,t),Object(p["a"])(e,[{key:"onClick",value:function(){this.state.data=this.state.data.concat(["AiyWuByWklrrUDlFignR"]),console.log(this.state.data)}}]),e}(y);E=c["b"]([g()({name:"CarouselDemo2"})],E);var I=E,W=I,$=Object(C["a"])(W,x,D,!1,null,null,null),A=$.exports,H=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("m-wing-blank",[a("m-carousel",{staticClass:"space-carousel",attrs:{infinite:"",frameOverflow:"visible",afterChange:t.afterChange,autoplay:!1,beforeChange:t.beforeChange,cellSpacing:10,slideWidth:.8}},t._l(t.state.data,function(e,n){return a("a",{key:e,style:{display:"block",position:"relative",top:t.state.slideIndex===n?"-10px":0,height:t.state.imgHeight,boxShadow:"2px 1px 1px rgba(0, 0, 0, 0.2)"}},[a("img",{style:{width:"100%",verticalAlign:"top"},attrs:{alt:"",src:"https://zos.alipayobjects.com/rmsportal/"+e+".png"},on:{load:t.onLoad}})])}),0)],1)},L=[],z=function(t){function e(){return Object(l["a"])(this,e),Object(s["a"])(this,Object(r["a"])(e).apply(this,arguments))}return Object(o["a"])(e,t),e}(y);z=c["b"]([g()({name:"CarouselMode3"})],z);var J=z,R=J,B=(a("ac43"),Object(C["a"])(R,H,L,!1,null,null,null)),F=B.exports,S=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("m-wing-blank",[a("m-carousel",{staticClass:"my-carousel",attrs:{vertical:"",dots:!1,dragging:!1,swiping:!1,autoplay:"",infinite:""}},[a("div",{staticClass:"v-item"},[t._v("carousel 1")]),a("div",{staticClass:"v-item"},[t._v("carousel 2")]),a("div",{staticClass:"v-item"},[t._v("carousel 3")])])],1)},T=[],P={},U=Object(C["a"])(P,S,T,!1,null,null,null),V=U.exports,M=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("m-wing-blank",[a("m-carousel",{staticClass:"my-carousel",attrs:{autoplay:"",infinite:"",vertical:"",autoplayInterval:300,dots:!1,dragging:!1,resetAutoplay:!1,speed:200,swiping:!1}},t._l(["ring","ruby","iPhone","iPod","sorry","tourism","coke","ticket","note"],function(e){return a("div",{key:e,staticClass:"v-item"},[t._v(t._s(e)+"\n    ")])}),0)],1)},Y=[],Z={},q=Object(C["a"])(Z,M,Y,!1,null,null,null),G=q.exports,K=function(t){function e(){return Object(l["a"])(this,e),Object(s["a"])(this,Object(r["a"])(e).apply(this,arguments))}return Object(o["a"])(e,t),e}(f.a);K=c["b"]([g()({name:"Demo",components:{demo1:_,demo2:A,demo3:F,demo4:V,demo5:G,DemoWrapper:u["a"]}})],K);var N=K,Q=N,X=Object(C["a"])(Q,n,i,!1,null,null,null);e["default"]=X.exports},"62b2":function(t,e,a){},ac43:function(t,e,a){"use strict";var n=a("feeb"),i=a.n(n);i.a},b687:function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"demo-preview-item"},[a("div",{staticClass:"demo-title"},[t._v("\n    "+t._s(t.title)+"\n  ")]),a("div",{staticClass:"demo-container"},[t._t("default")],2)])},i=[],l=a("d225"),s=a("308d"),r=a("6bb5"),o=a("4e2b"),c=a("9ab4"),u=a("8bbf"),b=a.n(u),d=a("65d9"),p=a.n(d),m=a("60a3"),f=function(t){function e(){return Object(l["a"])(this,e),Object(s["a"])(this,Object(r["a"])(e).apply(this,arguments))}return Object(o["a"])(e,t),e}(b.a);c["b"]([Object(m["d"])({type:String})],f.prototype,"title",void 0),f=c["b"]([p()({name:"DemoWrapper"})],f);var h=f,g=h,v=(a("debd"),a("2877")),y=Object(v["a"])(g,n,i,!1,null,null,null);e["a"]=y.exports},debd:function(t,e,a){"use strict";var n=a("62b2"),i=a.n(n);i.a},feeb:function(t,e,a){}}]);
//# sourceMappingURL=chunk-46894ffb.d0a60d8b.js.map
