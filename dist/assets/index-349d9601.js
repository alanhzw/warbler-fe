/* empty css                   */import{z as Ve,A as Ie,r as B,B as j,h as L,w as X,n as Ae,C as Oe,e as R,o as $,c as V,b as d,t as F,g as w,v as S,F as Y,j as q,D as Z,u as E,G as Me,H as Le,I as re,J as de,p as J,a as W,_ as P,K as Fe,d as ne,E as oe,L as fe,y as Ue,M as ae,k as Re,N as z,l as Pe,f as se,s as Be,O as Ye,P as qe,Q as ze,R as Ge,S as He,T as je}from"./index-2cad31f9.js";var ie={},Je={get exports(){return ie},set exports(e){ie=e}};/*!
 * clipboard.js v2.0.11
 * https://clipboardjs.com/
 *
 * Licensed MIT © Zeno Rocha
 */(function(e,o){(function(a,k){e.exports=k()})(Ve,function(){return function(){var n={686:function(r,i,t){t.d(i,{default:function(){return De}});var _=t(279),c=t.n(_),p=t(370),u=t.n(p),f=t(817),y=t.n(f);function h(g){try{return document.execCommand(g)}catch{return!1}}var b=function(s){var l=y()(s);return h("cut"),l},x=b;function N(g){var s=document.documentElement.getAttribute("dir")==="rtl",l=document.createElement("textarea");l.style.fontSize="12pt",l.style.border="0",l.style.padding="0",l.style.margin="0",l.style.position="absolute",l.style[s?"right":"left"]="-9999px";var m=window.pageYOffset||document.documentElement.scrollTop;return l.style.top="".concat(m,"px"),l.setAttribute("readonly",""),l.value=g,l}var I=function(s,l){var m=N(s);l.container.appendChild(m);var v=y()(m);return h("copy"),m.remove(),v},D=function(s){var l=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{container:document.body},m="";return typeof s=="string"?m=I(s,l):s instanceof HTMLInputElement&&!["text","search","url","tel","password"].includes(s==null?void 0:s.type)?m=I(s.value,l):(m=y()(s),h("copy")),m},O=D;function T(g){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?T=function(l){return typeof l}:T=function(l){return l&&typeof Symbol=="function"&&l.constructor===Symbol&&l!==Symbol.prototype?"symbol":typeof l},T(g)}var M=function(){var s=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},l=s.action,m=l===void 0?"copy":l,v=s.container,C=s.target,A=s.text;if(m!=="copy"&&m!=="cut")throw new Error('Invalid "action" value, use either "copy" or "cut"');if(C!==void 0)if(C&&T(C)==="object"&&C.nodeType===1){if(m==="copy"&&C.hasAttribute("disabled"))throw new Error('Invalid "target" attribute. Please use "readonly" instead of "disabled" attribute');if(m==="cut"&&(C.hasAttribute("readonly")||C.hasAttribute("disabled")))throw new Error(`Invalid "target" attribute. You can't cut text from elements with "readonly" or "disabled" attributes`)}else throw new Error('Invalid "target" value, use a valid Element');if(A)return O(A,{container:v});if(C)return m==="cut"?x(C):O(C,{container:v})},xe=M;function G(g){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?G=function(l){return typeof l}:G=function(l){return l&&typeof Symbol=="function"&&l.constructor===Symbol&&l!==Symbol.prototype?"symbol":typeof l},G(g)}function Ce(g,s){if(!(g instanceof s))throw new TypeError("Cannot call a class as a function")}function le(g,s){for(var l=0;l<s.length;l++){var m=s[l];m.enumerable=m.enumerable||!1,m.configurable=!0,"value"in m&&(m.writable=!0),Object.defineProperty(g,m.key,m)}}function we(g,s,l){return s&&le(g.prototype,s),l&&le(g,l),g}function ke(g,s){if(typeof s!="function"&&s!==null)throw new TypeError("Super expression must either be null or a function");g.prototype=Object.create(s&&s.prototype,{constructor:{value:g,writable:!0,configurable:!0}}),s&&ee(g,s)}function ee(g,s){return ee=Object.setPrototypeOf||function(m,v){return m.__proto__=v,m},ee(g,s)}function Ee(g){var s=Te();return function(){var m=K(g),v;if(s){var C=K(this).constructor;v=Reflect.construct(m,arguments,C)}else v=m.apply(this,arguments);return Se(this,v)}}function Se(g,s){return s&&(G(s)==="object"||typeof s=="function")?s:$e(g)}function $e(g){if(g===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return g}function Te(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch{return!1}}function K(g){return K=Object.setPrototypeOf?Object.getPrototypeOf:function(l){return l.__proto__||Object.getPrototypeOf(l)},K(g)}function te(g,s){var l="data-clipboard-".concat(g);if(s.hasAttribute(l))return s.getAttribute(l)}var Ne=function(g){ke(l,g);var s=Ee(l);function l(m,v){var C;return Ce(this,l),C=s.call(this),C.resolveOptions(v),C.listenClick(m),C}return we(l,[{key:"resolveOptions",value:function(){var v=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};this.action=typeof v.action=="function"?v.action:this.defaultAction,this.target=typeof v.target=="function"?v.target:this.defaultTarget,this.text=typeof v.text=="function"?v.text:this.defaultText,this.container=G(v.container)==="object"?v.container:document.body}},{key:"listenClick",value:function(v){var C=this;this.listener=u()(v,"click",function(A){return C.onClick(A)})}},{key:"onClick",value:function(v){var C=v.delegateTarget||v.currentTarget,A=this.action(C)||"copy",Q=xe({action:A,container:this.container,target:this.target(C),text:this.text(C)});this.emit(Q?"success":"error",{action:A,text:Q,trigger:C,clearSelection:function(){C&&C.focus(),window.getSelection().removeAllRanges()}})}},{key:"defaultAction",value:function(v){return te("action",v)}},{key:"defaultTarget",value:function(v){var C=te("target",v);if(C)return document.querySelector(C)}},{key:"defaultText",value:function(v){return te("text",v)}},{key:"destroy",value:function(){this.listener.destroy()}}],[{key:"copy",value:function(v){var C=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{container:document.body};return O(v,C)}},{key:"cut",value:function(v){return x(v)}},{key:"isSupported",value:function(){var v=arguments.length>0&&arguments[0]!==void 0?arguments[0]:["copy","cut"],C=typeof v=="string"?[v]:v,A=!!document.queryCommandSupported;return C.forEach(function(Q){A=A&&!!document.queryCommandSupported(Q)}),A}}]),l}(c()),De=Ne},828:function(r){var i=9;if(typeof Element<"u"&&!Element.prototype.matches){var t=Element.prototype;t.matches=t.matchesSelector||t.mozMatchesSelector||t.msMatchesSelector||t.oMatchesSelector||t.webkitMatchesSelector}function _(c,p){for(;c&&c.nodeType!==i;){if(typeof c.matches=="function"&&c.matches(p))return c;c=c.parentNode}}r.exports=_},438:function(r,i,t){var _=t(828);function c(f,y,h,b,x){var N=u.apply(this,arguments);return f.addEventListener(h,N,x),{destroy:function(){f.removeEventListener(h,N,x)}}}function p(f,y,h,b,x){return typeof f.addEventListener=="function"?c.apply(null,arguments):typeof h=="function"?c.bind(null,document).apply(null,arguments):(typeof f=="string"&&(f=document.querySelectorAll(f)),Array.prototype.map.call(f,function(N){return c(N,y,h,b,x)}))}function u(f,y,h,b){return function(x){x.delegateTarget=_(x.target,y),x.delegateTarget&&b.call(f,x)}}r.exports=p},879:function(r,i){i.node=function(t){return t!==void 0&&t instanceof HTMLElement&&t.nodeType===1},i.nodeList=function(t){var _=Object.prototype.toString.call(t);return t!==void 0&&(_==="[object NodeList]"||_==="[object HTMLCollection]")&&"length"in t&&(t.length===0||i.node(t[0]))},i.string=function(t){return typeof t=="string"||t instanceof String},i.fn=function(t){var _=Object.prototype.toString.call(t);return _==="[object Function]"}},370:function(r,i,t){var _=t(879),c=t(438);function p(h,b,x){if(!h&&!b&&!x)throw new Error("Missing required arguments");if(!_.string(b))throw new TypeError("Second argument must be a String");if(!_.fn(x))throw new TypeError("Third argument must be a Function");if(_.node(h))return u(h,b,x);if(_.nodeList(h))return f(h,b,x);if(_.string(h))return y(h,b,x);throw new TypeError("First argument must be a String, HTMLElement, HTMLCollection, or NodeList")}function u(h,b,x){return h.addEventListener(b,x),{destroy:function(){h.removeEventListener(b,x)}}}function f(h,b,x){return Array.prototype.forEach.call(h,function(N){N.addEventListener(b,x)}),{destroy:function(){Array.prototype.forEach.call(h,function(N){N.removeEventListener(b,x)})}}}function y(h,b,x){return c(document.body,h,b,x)}r.exports=p},817:function(r){function i(t){var _;if(t.nodeName==="SELECT")t.focus(),_=t.value;else if(t.nodeName==="INPUT"||t.nodeName==="TEXTAREA"){var c=t.hasAttribute("readonly");c||t.setAttribute("readonly",""),t.select(),t.setSelectionRange(0,t.value.length),c||t.removeAttribute("readonly"),_=t.value}else{t.hasAttribute("contenteditable")&&t.focus();var p=window.getSelection(),u=document.createRange();u.selectNodeContents(t),p.removeAllRanges(),p.addRange(u),_=p.toString()}return _}r.exports=i},279:function(r){function i(){}i.prototype={on:function(t,_,c){var p=this.e||(this.e={});return(p[t]||(p[t]=[])).push({fn:_,ctx:c}),this},once:function(t,_,c){var p=this;function u(){p.off(t,u),_.apply(c,arguments)}return u._=_,this.on(t,u,c)},emit:function(t){var _=[].slice.call(arguments,1),c=((this.e||(this.e={}))[t]||[]).slice(),p=0,u=c.length;for(p;p<u;p++)c[p].fn.apply(c[p].ctx,_);return this},off:function(t,_){var c=this.e||(this.e={}),p=c[t],u=[];if(p&&_)for(var f=0,y=p.length;f<y;f++)p[f].fn!==_&&p[f].fn._!==_&&u.push(p[f]);return u.length?c[t]=u:delete c[t],this}},r.exports=i,r.exports.TinyEmitter=i}},a={};function k(r){if(a[r])return a[r].exports;var i=a[r]={exports:{}};return n[r](i,i.exports,k),i.exports}return function(){k.n=function(r){var i=r&&r.__esModule?function(){return r.default}:function(){return r};return k.d(i,{a:i}),i}}(),function(){k.d=function(r,i){for(var t in i)k.o(i,t)&&!k.o(r,t)&&Object.defineProperty(r,t,{enumerable:!0,get:i[t]})}}(),function(){k.o=function(r,i){return Object.prototype.hasOwnProperty.call(r,i)}}(),k(686)}().default})})(Je);const We=Ie(ie),_e=[{label:"年",value:"year"},{label:"月",value:"month"},{label:"天",value:"day"}],pe=[{label:"天",value:"day"},{label:"小时",value:"hour"},{label:"分种",value:"minute"},{label:"秒",value:"second"}],me={day:365,month:12,year:1},ve={second:1*1e3,minute:1*1e3*60,hour:1*1e3*60*60,day:1*1e3*60*60*24},ue=(e,o)=>{const n=o.find(a=>a.value===e);return n==null?void 0:n.label},ye=e=>{const o=new Date,n=new Date(1950,0,1);return e<n||e>o},Ke=e=>{function o(){e(),requestAnimationFrame(o)}requestAnimationFrame(o)};function Qe(){function e(){return Math.floor(Math.random()*16).toString(16).toUpperCase()}return`#${e()}${e()}${e()}${e()}${e()}${e()}`}const Xe=e=>{const o=B(j());Ke(()=>{o.value=j()});const n=L(()=>j(e.value.birthday)),a=L(()=>n.value.add(Number(e.value.age),"year")),k=L(()=>a.value.diff(n.value,"millisecond")),r=L(()=>({year:o.value.diff(n.value,"year",!0).toFixed(1),month:o.value.diff(n.value,"month",!0).toFixed(1),day:o.value.diff(n.value,"day",!0).toFixed(1),hour:o.value.diff(n.value,"hour",!0).toFixed(1),minute:o.value.diff(n.value,"minute",!0).toFixed(1),second:o.value.diff(n.value,"second",!0).toFixed(),millisecond:o.value.diff(n.value,"millisecond",!0).toFixed()})),i=L(()=>({year:a.value.diff(o.value,"year",!0).toFixed(1),month:a.value.diff(o.value,"month",!0).toFixed(1),day:a.value.diff(o.value,"day",!0).toFixed(1),hour:a.value.diff(o.value,"hour",!0).toFixed(1),minute:a.value.diff(o.value,"minute",!0).toFixed(1),second:a.value.diff(o.value,"second",!0).toFixed(),millisecond:a.value.diff(o.value,"millisecond",!0).toFixed()})),t=c=>{const{frequency:p,time:u,timeUnit:f}=c;return me[p]*ve[f]*Number(u)},_=L(()=>{const c=Array.from({length:Number(e.value.gridNum)},(f,y)=>({id:y,backgroundColor:"#e2e2e2",className:"",event:""})),p=e.value.lifeData.map(f=>({...f,millisecond:t(f)*Number(i.value.year)}));p.unshift({frequency:"",event:"",time:"",timeUnit:"",backgroundColor:e.value.pastBackgroundColor,millisecond:Number(r.value.millisecond),className:"past"});let u=0;return p.forEach(f=>{const y=Number(f.millisecond/k.value),h=Math.ceil(y*c.length);Array.from({length:h}).forEach(()=>{u<c.length&&(c[u].backgroundColor=f.backgroundColor,c[u].className=f.className||"",c[u].event=f.event),u+=1})}),c});return{pastTime:r,deathTime:a,remainTime:i,grids:_}};typeof WorkerGlobalScope<"u"&&globalThis instanceof WorkerGlobalScope;const Ze=e=>typeof e<"u";function et(e){return JSON.parse(JSON.stringify(e))}function tt(e,o,n,a={}){var k,r,i;const{clone:t=!1,passive:_=!1,eventName:c,deep:p=!1,defaultValue:u,shouldEmit:f}=a,y=Oe(),h=n||(y==null?void 0:y.emit)||((k=y==null?void 0:y.$emit)==null?void 0:k.bind(y))||((i=(r=y==null?void 0:y.proxy)==null?void 0:r.$emit)==null?void 0:i.bind(y==null?void 0:y.proxy));let b=c;o||(o="modelValue"),b=b||`update:${o.toString()}`;const x=D=>t?typeof t=="function"?t(D):et(D):D,N=()=>Ze(e[o])?x(e[o]):u,I=D=>{f?f(D)&&h(b,D):h(b,D)};if(_){const D=N(),O=B(D);let T=!1;return X(()=>e[o],M=>{T||(T=!0,O.value=x(M),Ae(()=>T=!1))}),X(O,M=>{!T&&(M!==e[o]||p)&&I(M)},{deep:p}),O}else return L({get(){return N()},set(D){I(D)}})}const ge=e=>(J("data-v-ca9f239e"),e=e(),W(),e),nt={class:"life-item"},ot={class:"life-item__no"},it=ge(()=>d("div",{class:"life-item__text"},"你平均每",-1)),rt=ge(()=>d("div",{class:"life-item__text"},"的时间为",-1)),lt=R({__name:"life-item",props:{lifeItemData:null,lifeItemIndex:null},emits:["update:lifeItemData","handleDelete"],setup(e,{emit:o}){const n=e,a=tt(n,"lifeItemData",o),k=()=>{o("handleDelete",n.lifeItemIndex)};return(r,i)=>{const t=Me,_=Le,c=re,p=de;return $(),V("div",nt,[d("div",ot,F(`${e.lifeItemIndex+3}.`),1),it,w(_,{modelValue:E(a).frequency,"onUpdate:modelValue":i[0]||(i[0]=u=>E(a).frequency=u),placeholder:"请选择",style:{width:"100px"}},{default:S(()=>[($(!0),V(Y,null,q(E(_e),u=>($(),Z(t,{key:u.value,label:u.label,value:u.value},null,8,["label","value"]))),128))]),_:1},8,["modelValue"]),w(c,{modelValue:E(a).event,"onUpdate:modelValue":i[1]||(i[1]=u=>E(a).event=u),clearable:"","show-word-limit":"",maxlength:10,style:{width:"240px","margin-left":"8px"},placeholder:"请输入"},null,8,["modelValue"]),rt,w(c,{modelValue:E(a).time,"onUpdate:modelValue":i[2]||(i[2]=u=>E(a).time=u),maxlength:3,style:{width:"80px"},placeholder:"请输入"},null,8,["modelValue"]),w(_,{modelValue:E(a).timeUnit,"onUpdate:modelValue":i[3]||(i[3]=u=>E(a).timeUnit=u),placeholder:"请选择",style:{width:"100px",margin:"0 8px"}},{default:S(()=>[($(!0),V(Y,null,q(E(pe),u=>($(),Z(t,{key:u.value,label:u.label,value:u.value},null,8,["label","value"]))),128))]),_:1},8,["modelValue"]),w(p,{modelValue:E(a).backgroundColor,"onUpdate:modelValue":i[4]||(i[4]=u=>E(a).backgroundColor=u)},null,8,["modelValue"]),d("i",{class:"iconfont icon-shanchu",style:{"margin-left":"8px",cursor:"pointer"},onClick:k})])}}});const at=P(lt,[["__scopeId","data-v-ca9f239e"]]),st=e=>{const{frequency:o,time:n,timeUnit:a}=e;return me[o]*ve[a]*Number(n)/365};function ut(e){return/^[1-9]\d*(\.\d+)?$|^0\.\d+$/.test(e)}function ct(e){return/^[1-9]\d*$/.test(e)}function dt(e){const o=j(e.birthday).year(),n=j().year();return Number(e.age)<n-o}function ft(e){return e.lifeData.every(o=>{const{time:n,event:a}=o;return a&&n})}const _t=e=>e.lifeData.every(o=>{const{time:n}=o;return ut(n)});function pt(e){return e.lifeData.reduce((n,a)=>n+st(a),0)>24*60*60*1e3}function mt(e){const o=e.lifeData.some((a,k)=>e.lifeData.some((r,i)=>k!==i&&a.backgroundColor.toLowerCase().trim()===r.backgroundColor.toLowerCase().trim())),n=e.lifeData.some(a=>a.backgroundColor.toLowerCase().trim()===e.pastBackgroundColor.toLowerCase().trim());return o||n}const vt=e=>new Promise((o,n)=>{ct(e.age)||n(new Error("年龄要填正整数啊，亲")),Number(e.age)>100&&n(new Error("你还想活多久，长生不老得了呗")),dt(e)&&n(new Error("你已经噶了，宝贝")),ft(e)||n(new Error("你瞎啊，看不见有没填的吗")),_t(e)||n(new Error("时间要填正数啊，亲")),pt(e)&&n(new Error("每天都超过 24 小时了，你咋不上天呢")),mt(e)&&n(new Error("用一样的色儿，你能分出来吗")),o(!0)}),U=e=>(J("data-v-40f1b61e"),e=e(),W(),e),yt=U(()=>d("div",{class:"config-life-drawer_header"},"分配人生",-1)),gt={class:"config-life-body"},ht={class:"config-life-body_life-item"},bt=U(()=>d("div",{class:"config-life-body_life-item__no"},"1.",-1)),xt=U(()=>d("div",{class:"config-life-body_life-item__text"},"你于",-1)),Ct=U(()=>d("div",{class:"config-life-body_life-item__text"},"出生，你能活到",-1)),wt=U(()=>d("div",{class:"config-life-body_life-item__text"},"岁",-1)),kt={class:"config-life-body_life-item"},Et=U(()=>d("div",{class:"config-life-body_life-item__no"},"2.",-1)),St=U(()=>d("div",{class:"config-life-body_life-item__text"},"已经走过的生命",-1)),$t=U(()=>d("div",{class:"config-life-body_life-item",style:{color:"#fc1717"}},[d("div",{class:"config-life-body_life-item__no"},"注:"),d("div",{class:"config-life-body_life-item__text"}," 所有时间会换算成 【小时/天】 来计算，平均总时长不可以超过 【24小时/天】 ")],-1)),Tt={style:{flex:"auto"}},Nt=R({__name:"config-life-drawer",props:{formData:null},emits:["changeConfig"],setup(e,{expose:o,emit:n}){const a=e,k={birthday:"",age:"",gridNum:"",pastBackgroundColor:"",lifeData:[]},r=B(k),i=B(!1);function t(){i.value=!0}function _(h){r.value.lifeData.splice(h,1)}function c(){i.value=!1}async function p(){try{await vt(r.value),n("changeConfig",r.value),i.value=!1}catch(h){oe.warning(h.message)}}const u=()=>{r.value.lifeData.push({frequency:"day",event:"",time:"",timeUnit:"hour",backgroundColor:Qe()})};function f(){r.value=JSON.parse(JSON.stringify(a.formData))}function y(){r.value=k}return X(()=>i.value,()=>{i.value&&f(),i.value||y()}),o({openDrawer:t}),(h,b)=>{const x=fe,N=re,I=de,D=Ue,O=Fe;return $(),Z(O,{modelValue:i.value,"onUpdate:modelValue":b[3]||(b[3]=T=>i.value=T),size:"850"},{header:S(()=>[yt]),default:S(()=>[d("div",gt,[d("div",ht,[bt,xt,w(x,{modelValue:r.value.birthday,"onUpdate:modelValue":b[0]||(b[0]=T=>r.value.birthday=T),style:{width:"240px"},type:"date",format:"YYYY-MM-DD",editable:!1,clearable:!1,"disabled-date":E(ye),"value-format":"YYYY-MM-DD",placeholder:"请选择"},null,8,["modelValue","disabled-date"]),Ct,w(N,{modelValue:r.value.age,"onUpdate:modelValue":b[1]||(b[1]=T=>r.value.age=T),maxlength:3,style:{width:"80px"},placeholder:"请输入"},null,8,["modelValue"]),wt]),d("div",kt,[Et,St,w(I,{modelValue:r.value.pastBackgroundColor,"onUpdate:modelValue":b[2]||(b[2]=T=>r.value.pastBackgroundColor=T)},null,8,["modelValue"])]),($(!0),V(Y,null,q(r.value.lifeData,(T,M)=>($(),Z(at,{key:M,class:"config-life-body_life-item","life-item-index":M,"life-item-data":T,onHandleDelete:_},null,8,["life-item-index","life-item-data"]))),128)),$t,w(D,{onClick:u},{default:S(()=>[ne("新增一行")]),_:1})])]),footer:S(()=>[d("div",Tt,[w(D,{onClick:c},{default:S(()=>[ne("取消")]),_:1}),w(D,{type:"primary",onClick:p},{default:S(()=>[ne("确定")]),_:1})])]),_:1},8,["modelValue"])}}});const Dt=P(Nt,[["__scopeId","data-v-40f1b61e"]]),Vt=e=>(J("data-v-89541ad6"),e=e(),W(),e),It={class:"block-item"},At={class:"block-item_title"},Ot={class:"block-item_title-left"},Mt=Vt(()=>d("div",{class:"block-item_title-left__line"},null,-1)),Lt={class:"block-item_title-left__text"},Ft={class:"item_title-right"},Ut={class:"block-item_content"},Rt=R({__name:"block-item",props:{title:null},setup(e){return(o,n)=>($(),V("div",It,[d("div",At,[d("div",Ot,[Mt,d("div",Lt,F(e.title),1)]),d("div",Ft,[ae(o.$slots,"option",{},void 0,!0)])]),d("div",Ut,[ae(o.$slots,"default",{},void 0,!0)])]))}});const H=P(Rt,[["__scopeId","data-v-89541ad6"]]),Pt={class:"grid-life"},Bt={key:0,class:"iconfont icon-aixin love"},Yt=R({__name:"grid-life",props:{grids:null},setup(e){const o=e,n=a=>["爱人","对象","女朋友","媳妇","老婆","另一半","妻子"].some(r=>a.includes(r));return(a,k)=>($(),V("div",Pt,[d("div",{class:"grid-container",style:z({"grid-template-columns":e.grids.length===400?"repeat(20, 20px)":"repeat(30, 20px)"})},[($(!0),V(Y,null,q(o.grids,r=>($(),V("div",{key:r.id,class:Re(["grid cp",r.className]),style:z({backgroundColor:r.backgroundColor})},[n(r.event)?($(),V("i",Bt)):Pe("",!0)],6))),128))],4)]))}});const qt=P(Yt,[["__scopeId","data-v-4da4b5b9"]]),zt={class:"your-life"},Gt={class:"title"},Ht={class:"lifeTime-box"},jt={class:"text"},Jt={class:"unit"},Wt=R({__name:"your-life",props:{lifeTime:null,title:null},setup(e){const o={year:"年",month:"月",day:"天",hour:"时",minute:"分",second:"秒"},n=Object.keys(o);return(a,k)=>($(),V("div",zt,[d("div",null,[d("div",Gt,F(e.title),1),d("div",Ht,[($(!0),V(Y,null,q(E(n),(r,i)=>($(),V("div",{key:i,class:"content"},[d("div",jt,F(e.lifeTime[r]),1),d("div",Jt,F(o[r]),1)]))),128))])])]))}});const ce=P(Wt,[["__scopeId","data-v-136af7af"]]),he=e=>(J("data-v-5424917e"),e=e(),W(),e),Kt={class:"grid-meaning"},Qt={class:"grid-meaning__item"},Xt={class:"grid-meaning__item__text"},Zt={class:"grid-meaning__item__text"},en=he(()=>d("div",{class:"grid-meaning__item"},[d("div",{class:"grid-meaning__item__color",style:{backgroundColor:"#e2e2e2"}}),d("div",{class:"grid-meaning__item__text"},"这是除了以上之外，你剩下的所有时光")],-1)),tn=he(()=>d("div",null,"数据仅供娱乐，人生苦短，继续努力吧 ~",-1)),nn=R({__name:"grid-meaning",props:{formData:null},setup(e){return(o,n)=>($(),V("div",Kt,[d("div",Qt,[d("div",{class:"grid-meaning__item__color",style:z({backgroundColor:e.formData.pastBackgroundColor})},null,4),d("div",Xt,F(`你于 ${e.formData.birthday} 出生，你可以活 ${e.formData.age} 年，这是你已经走过的生命`),1)]),($(!0),V(Y,null,q(e.formData.lifeData,a=>($(),V("div",{key:a.event,class:"grid-meaning__item"},[d("div",{class:"grid-meaning__item__color",style:z({backgroundColor:a.backgroundColor})},null,4),d("div",Zt,F(`这代表着在你余下的生命中，你会用每 ${E(ue)(a.frequency,E(_e))}
           ${a.time}
           ${E(ue)(a.timeUnit,E(pe))} 来${a.event}`),1)]))),128)),en,tn]))}});const on=P(nn,[["__scopeId","data-v-5424917e"]]),be=e=>(J("data-v-72e5c211"),e=e(),W(),e),rn={class:"life-grid"},ln={class:"life-grid__content"},an={class:"life-grid__content__core"},sn={class:"config-life"},un=be(()=>d("div",{style:{"margin-right":"16px","white-space":"nowrap"}},"选择你的生日",-1)),cn={style:{display:"flex",gap:"8px","align-items":"baseline"}},dn={class:"share-link"},fn=be(()=>d("div",{style:{height:"32px"}},null,-1)),_n=R({__name:"index",setup(e){const o=Be(),n=B({birthday:"1998-03-09",age:"60",pastBackgroundColor:"#98C3B9",gridNum:"400",lifeData:[{frequency:"day",event:"睡觉",time:"7",timeUnit:"hour",backgroundColor:"#2486B9"},{frequency:"day",event:"工作",time:"9.5",timeUnit:"hour",backgroundColor:"#AB9F93"},{frequency:"day",event:"陪伴爱人",time:"2",timeUnit:"hour",backgroundColor:"#ED3321"},{frequency:"year",event:"陪伴父母",time:"10",timeUnit:"day",backgroundColor:"#E7A23F"}]}),{pastTime:a,remainTime:k,grids:r}=Xe(n),i=B();function t(){i.value.openDrawer()}const _=()=>{o.replace({query:{}}),setTimeout(()=>{window.location.reload()})},c=f=>{n.value.gridNum=f.toString()},p=f=>{n.value=f},u=L(()=>window.location.origin+o.currentRoute.value.fullPath);return X(()=>n.value,()=>{o.replace({query:{...o.currentRoute.value.query,config:encodeURI(JSON.stringify(n.value))}})},{deep:!0}),se(()=>{const{config:f}=o.currentRoute.value.query;f&&(n.value=JSON.parse(decodeURI(f)))}),se(()=>{const f=new We(".copy");f.on("success",y=>{oe.success("已复制到剪切板，有点长，告诉你要转发的人不是诈骗链接！"),y.clearSelection()}),f.on("error",()=>{oe.success("复制失败!")})}),(f,y)=>{const h=fe,b=He,x=je,N=re;return $(),V("div",rn,[d("div",ln,[d("div",an,[w(H,{title:"分配人生"},{default:S(()=>[d("div",sn,[un,w(h,{modelValue:n.value.birthday,"onUpdate:modelValue":y[0]||(y[0]=I=>n.value.birthday=I),style:{width:"100%"},type:"date",format:"YYYY-MM-DD","value-format":"YYYY-MM-DD",clearable:!1,editable:!1,"disabled-date":E(ye),placeholder:"选择你的生日"},null,8,["modelValue","disabled-date"]),w(x,{effect:"dark",content:"配置人生",placement:"top"},{default:S(()=>[w(b,{style:{"margin-left":"16px",cursor:"pointer","font-size":"20px"},onClick:t},{default:S(()=>[w(E(Ye))]),_:1})]),_:1}),w(x,{effect:"dark",content:"重置配置",placement:"top"},{default:S(()=>[w(b,{style:{"margin-left":"16px",cursor:"pointer","font-size":"20px"},onClick:_},{default:S(()=>[w(E(qe))]),_:1})]),_:1})])]),_:1}),w(H,{title:"你的人生"},{default:S(()=>[w(ce,{"life-time":E(a),title:"已经过去了"},null,8,["life-time"]),w(ce,{"life-time":E(k),title:"剩余的时间"},null,8,["life-time"])]),_:1}),w(H,{title:"人生小格"},{option:S(()=>[d("div",cn,[d("div",null,F(`格子数量: ${n.value.gridNum}`),1),d("i",{class:"iconfont icon-category cp",style:z({color:Number(n.value.gridNum)===400?"#409EFF":"",fontSize:Number(n.value.gridNum)===400?"20px":"18px"}),onClick:y[1]||(y[1]=I=>c(400))},null,4),d("i",{class:"iconfont icon-9Grids_video cp",style:z({color:Number(n.value.gridNum)===900?"#409EFF":"",fontSize:Number(n.value.gridNum)===900?"18px":"16px"}),onClick:y[2]||(y[2]=I=>c(900))},null,4)])]),default:S(()=>[w(qt,{grids:E(r),onClick:t},null,8,["grids"])]),_:1}),w(H,{title:"格子含义"},{default:S(()=>[w(on,{"form-data":n.value},null,8,["form-data"])]),_:1}),w(H,{title:"分享链接"},{default:S(()=>[d("div",dn,[w(N,{id:"text-to-copy",modelValue:E(u),"onUpdate:modelValue":y[3]||(y[3]=I=>ze(u)?u.value=I:null),readonly:""},null,8,["modelValue"]),w(x,{effect:"dark",content:"复制链接",placement:"top"},{default:S(()=>[w(b,{class:"cp copy",style:{"font-size":"20px"},"data-clipboard-target":"#text-to-copy"},{default:S(()=>[w(E(Ge))]),_:1})]),_:1})])]),_:1}),fn]),w(Dt,{ref_key:"configDrawer",ref:i,"form-data":n.value,onChangeConfig:p},null,8,["form-data"])])])}}});const yn=P(_n,[["__scopeId","data-v-72e5c211"]]);export{yn as default};