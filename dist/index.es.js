const e="manage",t="start";function n(){}function o(e){return e()}function c(){return Object.create(null)}function i(e){e.forEach(o)}function s(e){return"function"==typeof e}function r(e,t){return e!=e?t==t:e!==t||e&&"object"==typeof e||"function"==typeof e}function a(e,...t){if(null==e){for(const e of t)e(void 0);return n}const o=e.subscribe(...t);return o.unsubscribe?()=>o.unsubscribe():o}function l(e,t,n){e.$$.on_destroy.push(a(t,n))}function u(e,t,n,o){return e[1]&&o?function(e,t){for(const n in t)e[n]=t[n];return e}(n.ctx.slice(),e[1](o(t))):n.ctx}function d(e,t){e.appendChild(t)}function f(e,t,n){e.insertBefore(t,n||null)}function m(e){e.parentNode&&e.parentNode.removeChild(e)}function h(e,t){for(let n=0;n<e.length;n+=1)e[n]&&e[n].d(t)}function g(e){return document.createElement(e)}function p(e){return document.createElementNS("http://www.w3.org/2000/svg",e)}function y(e){return document.createTextNode(e)}function b(){return y(" ")}function v(){return y("")}function _(e,t,n,o){return e.addEventListener(t,n,o),()=>e.removeEventListener(t,n,o)}function $(e,t,n){null==n?e.removeAttribute(t):e.getAttribute(t)!==n&&e.setAttribute(t,n)}function w(e,t){t=""+t,e.data!==t&&(e.data=t)}function k(e,t,n){e.classList.toggle(t,!!n)}class x{is_svg=!1;e=void 0;n=void 0;t=void 0;a=void 0;constructor(e=!1){this.is_svg=e,this.e=this.n=null}c(e){this.h(e)}m(e,t,n=null){this.e||(this.is_svg?this.e=p(t.nodeName):this.e=g(11===t.nodeType?"TEMPLATE":t.nodeName),this.t="TEMPLATE"!==t.tagName?t:t.content,this.c(e)),this.i(n)}h(e){this.e.innerHTML=e,this.n=Array.from("TEMPLATE"===this.e.nodeName?this.e.content.childNodes:this.e.childNodes)}i(e){for(let t=0;t<this.n.length;t+=1)f(this.t,this.n[t],e)}p(e){this.d(),this.h(e),this.i(this.a)}d(){this.n.forEach(m)}}let T;function E(e){T=e}function j(e){(function(){if(!T)throw new Error("Function called outside component initialization");return T})().$$.on_mount.push(e)}const z=[],O=[];let C=[];const S=[],A=Promise.resolve();let N=!1;function L(e){C.push(e)}const M=new Set;let P=0;function q(){if(0!==P)return;const e=T;do{try{for(;P<z.length;){const e=z[P];P++,E(e),D(e.$$)}}catch(e){throw z.length=0,P=0,e}for(E(null),z.length=0,P=0;O.length;)O.pop()();for(let e=0;e<C.length;e+=1){const t=C[e];M.has(t)||(M.add(t),t())}C.length=0}while(z.length);for(;S.length;)S.pop()();N=!1,M.clear(),E(e)}function D(e){if(null!==e.fragment){e.update(),i(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(L)}}const H=new Set;let I;function J(){I={r:0,c:[],p:I}}function B(){I.r||i(I.c),I=I.p}function U(e,t){e&&e.i&&(H.delete(e),e.i(t))}function W(e,t,n,o){if(e&&e.o){if(H.has(e))return;H.add(e),I.c.push((()=>{H.delete(e),o&&(n&&e.d(1),o())})),e.o(t)}else o&&o()}function Y(e){return void 0!==e?.length?e:Array.from(e)}function R(e){e&&e.c()}function Z(e,t,n){const{fragment:c,after_update:r}=e.$$;c&&c.m(t,n),L((()=>{const t=e.$$.on_mount.map(o).filter(s);e.$$.on_destroy?e.$$.on_destroy.push(...t):i(t),e.$$.on_mount=[]})),r.forEach(L)}function F(e,t){const n=e.$$;null!==n.fragment&&(!function(e){const t=[],n=[];C.forEach((o=>-1===e.indexOf(o)?t.push(o):n.push(o))),n.forEach((e=>e())),C=t}(n.after_update),i(n.on_destroy),n.fragment&&n.fragment.d(t),n.on_destroy=n.fragment=null,n.ctx=[])}function G(e,t){-1===e.$$.dirty[0]&&(z.push(e),N||(N=!0,A.then(q)),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function K(e,t,o,s,r,a,l=null,u=[-1]){const d=T;E(e);const f=e.$$={fragment:null,ctx:[],props:a,update:n,not_equal:r,bound:c(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(t.context||(d?d.$$.context:[])),callbacks:c(),dirty:u,skip_bound:!1,root:t.target||d.$$.root};l&&l(f.root);let h=!1;if(f.ctx=o?o(e,t.props||{},((t,n,...o)=>{const c=o.length?o[0]:n;return f.ctx&&r(f.ctx[t],f.ctx[t]=c)&&(!f.skip_bound&&f.bound[t]&&f.bound[t](c),h&&G(e,t)),n})):[],f.update(),h=!0,i(f.before_update),f.fragment=!!s&&s(f.ctx),t.target){if(t.hydrate){const e=function(e){return Array.from(e.childNodes)}(t.target);f.fragment&&f.fragment.l(e),e.forEach(m)}else f.fragment&&f.fragment.c();t.intro&&U(e.$$.fragment),Z(e,t.target,t.anchor),q()}E(d)}class Q{$$=void 0;$$set=void 0;$destroy(){F(this,1),this.$destroy=n}$on(e,t){if(!s(t))return n;const o=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return o.push(t),()=>{const e=o.indexOf(t);-1!==e&&o.splice(e,1)}}$set(e){var t;this.$$set&&(t=e,0!==Object.keys(t).length)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}const V=[];function X(e,t=n){let o;const c=new Set;function i(t){if(r(e,t)&&(e=t,o)){const t=!V.length;for(const t of c)t[1](),V.push(t,e);if(t){for(let e=0;e<V.length;e+=2)V[e][0](V[e+1]);V.length=0}}}function s(t){i(t(e))}return{set:i,update:s,subscribe:function(r,a=n){const l=[r,a];return c.add(l),1===c.size&&(o=t(i,s)||n),r(e),()=>{c.delete(l),0===c.size&&o&&(o(),o=null)}}}}const ee=X(t),te=X(null),ne=X(null),oe="oymcc",ce={consentOptions:[],cookieName:"oymcc",exceptionUrls:[],explanationAnchors:[],language:"nl",manageable:!0,style:"bar",renderSelector:"[data-oymcc-render]",version:"1.0"};const ie={nl:{start:{title:"Mogen we even je aandacht?",description:"Om een persoonlijke ervaring te bieden en onze website te verbeteren, plaatsen wij cookies.",buttons:{manage:"Beheer cookies",accept:"Ik accepteer cookies"}},manage:{title:"Cookie instellingen",description:"Wij laten je graag een goede website zien, afgestemd op jouw voorkeuren.\n        Wil je dit ook? Zet dan de onderstaande onderdelen op 'Aan'.\n        Hiermee geef je ons toestemming om je door middel van het gebruik van cookies en andere technieken een persoonlijke ervaring te bieden.",switches:{on:"Aan",off:"Uit"},buttons:{all:"Overal toestemming voor geven",save:"Keuze opslaan"},error:"Je hebt nog niet op alle vragen antwoord gegeven. Geef hierboven jouw voorkeur aan.",footer:"Je keuze is altijd te wijzigen via onze cookie instellingen."},permissions:{essential:{title:"Essentieel",description:"Essentiële cookies zijn noodzakelijk voor basisfuncties zoals authenticatie en het onthouden van voorkeuren, wat een soepele online ervaring waarborgt."}},notification:{title:"Accepteer (meer) cookies om deze content te zien",description:"Deze content is niet zichtbaar omdat er met een externe data ingeladen wordt waarmee cookies geplaatst kunnen worden.\n        Je hebt ons nog geen toestemming gegeven om deze cookies te mogen plaatsen.",button:"Wijzig cookievoorkeuren"},a11y:{close:"Sluit consentmanager"}},en:{start:{title:"May we have your attention?",description:"We place cookies to provide a personalized experience and improve our website.",buttons:{manage:"Manage cookies",accept:"I accept cookies"}},manage:{title:"Cookie settings",description:"We are happy to show you a good website, tailored to your preferences.\n         Do you want this too? Then set the items below to 'On'.\n         By doing this, you give us permission to provide you with a personalized experience through the use of cookies and other techniques.",switches:{on:"On",off:"Off"},buttons:{all:"Accept all",save:"Save choice"},error:"You have not answered all questions yet. Please indicate your preference above.",footer:"Your choice can always be changed in our cookie settings."},permissions:{essential:{title:"Essential",description:"Essential cookies are necessary for basic functions such as authentication and remembering preferences, ensuring a smooth online experience."}},notification:{title:"Accept (more) cookies to view this content",description:"This content is not visible because an external data is loaded with which cookies can be placed.\n          You have not yet given us permission to place these cookies.",button:"Change cookie preferences"},a11y:{close:"Close consentmanager"}}},se=(e,...t)=>{if(null===e)throw new TypeError("Cannot convert undefined or null to object");const n=Object(e);for(let e=0;e<t.length;e+=1){const o=t[e];null!==o&&"object"==typeof o&&Object.keys(o).forEach((e=>{Object.prototype.hasOwnProperty.call(o,e)&&("object"==typeof n[e]&&n[e]&&"object"==typeof o[e]&&o[e]?n[e]=se(n[e],o[e]):n[e]=o[e])}))}return n},re=()=>{try{return JSON.parse(JSON.stringify(globalThis.oymcc.config)),globalThis.oymcc.config}catch(e){return ce}},ae=e=>{const t=e.replace(/([.*+?^$(){}|[\]/\\])/g,"\\$1"),n=document.cookie.match(RegExp(`(?:^|;\\s*)${t}=([^;]*)`));return n&&n[1]?n[1]:null},le=e=>{throw new Error(`TDE Cookieconsent: ${e||"An error has occurred"}`)},ue=()=>{document.dispatchEvent(new Event("oymcc-changed"))},de=()=>{document.dispatchEvent(new Event("oymcc-close-overlay"))},fe=(e,t)=>{e&&t&&(((e,t,n,o,c,i)=>{const s={[e]:t,"Max-Age":n||null,Path:c||"/",Domain:o||null,Secure:"",SameSite:i||"Lax"};document.cookie=Object.keys(s).map((e=>{const t=s[e]||null;return null===t?"":`${e}${t?`=${t}`:""}`})).filter((e=>""!==e)).join("; ")})(re().cookieName,JSON.stringify({accepted:e,info:t}),365),globalThis.oymcc.cookies={accepted:e,info:t})},me=X([]),he=X([]),ge=()=>{const e=ae(re().cookieName)||!1;return e?JSON.parse(e):null},pe=()=>{const e=ge();return(null==e?void 0:e.accepted)||[]},ye=e=>{var t,n;fe(e,{v:re().version,accepted:(null===(n=null===(t=ge())||void 0===t?void 0:t.info)||void 0===n?void 0:n.accepted)||(new Date).toISOString(),updated:(new Date).toISOString()}),ue(),de()},be=()=>{var e;const t=(null===(e=function(e){let t;return a(e,(e=>t=e))(),t}(te))||void 0===e?void 0:e.consentOptions)||[];ye(t.map((e=>e.key)))},ve=e=>{if(!e||!e.length)return!1;const t=pe();if(!t)return!1;const n="string"==typeof e?[e]:e;for(let e=0;e<n.length;e+=1)if(!t.find((t=>t===n[e])))return!1;return!0};function _e(e,t,n){const o=e.slice();return o[12]=t[n],o[14]=n,o}function $e(e){let t,n,o,c,s,r,a,l,u,h,p,v,x,T,E,j,z,O,C,S,A=e[12].title+"",N=e[12].description+"",L=e[2]?.manage.switches.on+"",M=e[2]?.manage.switches.off+"";function P(){return e[5](e[12])}function q(){return e[6](e[12])}return{c(){t=g("div"),n=g("div"),o=g("h4"),c=y(A),s=b(),r=g("p"),a=y(N),l=b(),u=g("div"),h=g("div"),p=g("button"),v=y(L),T=b(),E=g("button"),j=y(M),O=b(),$(o,"class","oymcc__manage__option__content__title svelte-1jrdxct"),$(r,"class","oymcc__manage__option__content__desc svelte-1jrdxct"),$(n,"class","oymcc__manage__option__content svelte-1jrdxct"),$(p,"type","button"),p.disabled=x=e[12]?.notCustomizable,$(p,"class","oymcc__manage__options__button svelte-1jrdxct"),k(p,"active",e[0][e[12].key]),$(E,"type","button"),E.disabled=z=e[12]?.notCustomizable,$(E,"class","oymcc__manage__options__button svelte-1jrdxct"),k(E,"active",!1===e[0][e[12].key]),$(h,"class","oymcc__manage__options__buttons svelte-1jrdxct"),$(u,"class","oymcc__manage__options svelte-1jrdxct"),k(u,"oymcc__manage__options--disabled",e[12]?.notCustomizable),$(t,"class","oymcc__manage__option svelte-1jrdxct")},m(e,i){f(e,t,i),d(t,n),d(n,o),d(o,c),d(n,s),d(n,r),d(r,a),d(t,l),d(t,u),d(u,h),d(h,p),d(p,v),d(h,T),d(h,E),d(E,j),d(t,O),C||(S=[_(p,"click",P),_(E,"click",q)],C=!0)},p(t,n){e=t,2&n&&A!==(A=e[12].title+"")&&w(c,A),2&n&&N!==(N=e[12].description+"")&&w(a,N),4&n&&L!==(L=e[2]?.manage.switches.on+"")&&w(v,L),2&n&&x!==(x=e[12]?.notCustomizable)&&(p.disabled=x),3&n&&k(p,"active",e[0][e[12].key]),4&n&&M!==(M=e[2]?.manage.switches.off+"")&&w(j,M),2&n&&z!==(z=e[12]?.notCustomizable)&&(E.disabled=z),3&n&&k(E,"active",!1===e[0][e[12].key]),2&n&&k(u,"oymcc__manage__options--disabled",e[12]?.notCustomizable)},d(e){e&&m(t),C=!1,i(S)}}}function we(e){let t,o=Y(e[1]?.consentOptions||[]),c=[];for(let t=0;t<o.length;t+=1)c[t]=$e(_e(e,o,t));return{c(){t=g("div");for(let e=0;e<c.length;e+=1)c[e].c();$(t,"class","oymcc__manage__options svelte-1jrdxct")},m(e,n){f(e,t,n);for(let e=0;e<c.length;e+=1)c[e]&&c[e].m(t,null)},p(e,[n]){if(31&n){let i;for(o=Y(e[1]?.consentOptions||[]),i=0;i<o.length;i+=1){const s=_e(e,o,i);c[i]?c[i].p(s,n):(c[i]=$e(s),c[i].c(),c[i].m(t,null))}for(;i<c.length;i+=1)c[i].d(1);c.length=o.length}},i:n,o:n,d(e){e&&m(t),h(c,e)}}}function ke(e,t,n){let o,c,i,s;l(e,me,(e=>n(7,o=e))),l(e,he,(e=>n(8,c=e))),l(e,te,(e=>n(1,i=e))),l(e,ne,(e=>n(2,s=e)));let r={};const a=()=>{n(0,r={}),null==i||i.consentOptions.forEach((e=>{var t;(n(0,r[e.key]=null,r),c.includes(e.key))&&n(0,r[e.key]=(t=e.key,!!o.find((e=>e===t))),r)}))},u=e=>{c.find((t=>t===e))||c.push(e)},d=e=>{u(e),o.find((t=>t===e))||(o.push(e),a())},f=e=>{u(e),me.set(o.filter((t=>t!==e))),a()};j((()=>{a()}));return[r,i,s,d,f,e=>d(e.key),e=>f(e.key)]}"undefined"!=typeof window&&(window.__svelte||(window.__svelte={v:new Set})).v.add("4");class xe extends Q{constructor(e){super(),K(this,e,ke,we,r,{})}}function Te(e){let t,n,o=e[1]?.manage.error+"";return{c(){t=g("div"),n=y(o),$(t,"class","oymcc__manage__error svelte-73d5f3")},m(e,o){f(e,t,o),d(t,n)},p(e,t){2&t&&o!==(o=e[1]?.manage.error+"")&&w(n,o)},d(e){e&&m(t)}}}function Ee(e){let t,n,o,c,s,r,a,l,u,h,p,v,k,x,T,E,j,z,O,C,S,A,N,L,M=e[1]?.manage.title+"",P=e[1]?.manage.description+"",q=e[1]?.manage.buttons.all+"",D=e[1]?.manage.buttons.save+"",H=e[1]?.manage.footer+"";l=new xe({});let I=e[0]&&Te(e);return{c(){t=g("div"),n=g("h2"),o=y(M),c=b(),s=g("p"),r=y(P),a=b(),R(l.$$.fragment),u=b(),I&&I.c(),h=b(),p=g("div"),v=g("button"),k=g("span"),x=y(q),T=b(),E=g("button"),j=g("span"),z=y(D),O=b(),C=g("div"),S=y(H),$(n,"class","oymcc__manage__title svelte-73d5f3"),$(s,"class","oymcc__manage__desc svelte-73d5f3"),$(v,"type","button"),$(v,"class","oymcc__button svelte-73d5f3"),$(E,"type","button"),$(E,"class","oymcc__button oymcc__button--ghost svelte-73d5f3"),$(p,"class","oymcc__manage__buttons svelte-73d5f3"),$(C,"class","oymcc__manage__footer svelte-73d5f3"),$(t,"class","oymcc__manage svelte-73d5f3")},m(i,m){f(i,t,m),d(t,n),d(n,o),d(t,c),d(t,s),d(s,r),d(t,a),Z(l,t,null),d(t,u),I&&I.m(t,null),d(t,h),d(t,p),d(p,v),d(v,k),d(k,x),d(p,T),d(p,E),d(E,j),d(j,z),d(t,O),d(t,C),d(C,S),A=!0,N||(L=[_(v,"click",e[3]),_(E,"click",e[4])],N=!0)},p(e,[n]){(!A||2&n)&&M!==(M=e[1]?.manage.title+"")&&w(o,M),(!A||2&n)&&P!==(P=e[1]?.manage.description+"")&&w(r,P),e[0]?I?I.p(e,n):(I=Te(e),I.c(),I.m(t,h)):I&&(I.d(1),I=null),(!A||2&n)&&q!==(q=e[1]?.manage.buttons.all+"")&&w(x,q),(!A||2&n)&&D!==(D=e[1]?.manage.buttons.save+"")&&w(z,D),(!A||2&n)&&H!==(H=e[1]?.manage.footer+"")&&w(S,H)},i(e){A||(U(l.$$.fragment,e),A=!0)},o(e){W(l.$$.fragment,e),A=!1},d(e){e&&m(t),F(l),I&&I.d(),N=!1,i(L)}}}function je(e,t,n){let o,c,i,s;l(e,me,(e=>n(5,o=e))),l(e,te,(e=>n(6,c=e))),l(e,he,(e=>n(7,i=e))),l(e,ne,(e=>n(1,s=e)));let r=!1;const a=()=>{n(0,r=!1),i.length===(null==c?void 0:c.consentOptions.length)?ye(o):n(0,r=!0)};return[r,s,a,()=>be(),()=>a()]}class ze extends Q{constructor(e){super(),K(this,e,je,Ee,r,{})}}function Oe(e){let t,n,o,c,i,s=e[0]?.start.buttons.manage+"";return{c(){t=g("button"),n=g("span"),o=y(s),$(t,"type","button"),$(t,"class","oymcc__button oymcc__button--ghost")},m(s,r){f(s,t,r),d(t,n),d(n,o),c||(i=_(t,"click",e[2]),c=!0)},p(e,t){1&t&&s!==(s=e[0]?.start.buttons.manage+"")&&w(o,s)},d(e){e&&m(t),c=!1,i()}}}function Ce(e){let t,o,c,i,s,r,a,l,u,h,p,v,k,x,T=e[0]?.start.title+"",E=e[0]?.start.description+"",j=e[0]?.start.buttons.accept+"",z=e[1]?.manageable&&Oe(e);return{c(){t=g("div"),o=g("h2"),c=y(T),i=b(),s=g("p"),r=y(E),a=b(),l=g("div"),z&&z.c(),u=b(),h=g("button"),p=g("span"),v=y(j),$(o,"class","oymcc__start__title svelte-45zfd8"),$(s,"class","oymcc__start__desc svelte-45zfd8"),$(h,"type","button"),$(h,"class","oymcc__button"),$(l,"class","oymcc__start__choices svelte-45zfd8"),$(t,"class","oymcc__start svelte-45zfd8")},m(n,m){f(n,t,m),d(t,o),d(o,c),d(t,i),d(t,s),d(s,r),d(t,a),d(t,l),z&&z.m(l,null),d(l,u),d(l,h),d(h,p),d(p,v),k||(x=_(h,"click",e[3]),k=!0)},p(e,[t]){1&t&&T!==(T=e[0]?.start.title+"")&&w(c,T),1&t&&E!==(E=e[0]?.start.description+"")&&w(r,E),e[1]?.manageable?z?z.p(e,t):(z=Oe(e),z.c(),z.m(l,u)):z&&(z.d(1),z=null),1&t&&j!==(j=e[0]?.start.buttons.accept+"")&&w(v,j)},i:n,o:n,d(e){e&&m(t),z&&z.d(),k=!1,x()}}}function Se(t,n,o){let c,i;l(t,ne,(e=>o(0,c=e))),l(t,te,(e=>o(1,i=e)));return[c,i,()=>{return t=e,ee.set(t);var t},()=>be()]}class Ae extends Q{constructor(e){super(),K(this,e,Se,Ce,r,{})}}function Ne(e){let t,o,c,i,s,r;return{c(){t=p("svg"),o=p("g"),c=p("path"),i=p("path"),$(c,"d","M20.586.586l2.828 2.828-20 20-2.828-2.828z"),$(i,"d","M3.414.586L.586 3.414l20 20 2.828-2.828z"),$(o,"fill-rule","nonzero"),$(t,"width",s=e[0]?.width||Le),$(t,"height",r=e[0]?.height||Le),$(t,"viewBox","0 0 24 24"),$(t,"xmlns","http://www.w3.org/2000/svg")},m(e,n){f(e,t,n),d(t,o),d(o,c),d(o,i)},p(e,[n]){1&n&&s!==(s=e[0]?.width||Le)&&$(t,"width",s),1&n&&r!==(r=e[0]?.height||Le)&&$(t,"height",r)},i:n,o:n,d(e){e&&m(t)}}}const Le=20;function Me(e,t,n){let{settings:o}=t;return e.$$set=e=>{"settings"in e&&n(0,o=e.settings)},[o]}class Pe extends Q{constructor(e){super(),K(this,e,Me,Ne,r,{settings:0})}}function qe(e){let t,o,c,i;return{c(){t=p("svg"),o=p("path"),$(o,"fill-rule","evenodd"),$(o,"clip-rule","evenodd"),$(o,"d","M11.767 4.4545C12.2063 4.01517 12.9187 4.01517 13.358 4.4545L20.108 11.2045C20.5473 11.6438 20.5473 12.3562 20.108 12.7955L13.358 19.5455C12.9187 19.9848 12.2063 19.9848 11.767 19.5455C11.3277 19.1062 11.3277 18.3938 11.767 17.9545L16.5965 13.125H4.6875C4.06618 13.125 3.5625 12.6213 3.5625 12C3.5625 11.3787 4.06618 10.875 4.6875 10.875H16.5965L11.767 6.0455C11.3277 5.60616 11.3277 4.89384 11.767 4.4545Z"),$(t,"width",c=e[0]?.width||De),$(t,"height",i=e[0]?.height||De),$(t,"viewBox","0 0 24 24"),$(t,"xmlns","http://www.w3.org/2000/svg")},m(e,n){f(e,t,n),d(t,o)},p(e,[n]){1&n&&c!==(c=e[0]?.width||De)&&$(t,"width",c),1&n&&i!==(i=e[0]?.height||De)&&$(t,"height",i)},i:n,o:n,d(e){e&&m(t)}}}const De=24;function He(e,t,n){let{settings:o}=t;return e.$$set=e=>{"settings"in e&&n(0,o=e.settings)},[o]}class Ie extends Q{constructor(e){super(),K(this,e,He,qe,r,{settings:0})}}function Je(e,t,n){const o=e.slice();return o[1]=t[n],o}function Be(e){let t,n,o=Y(e[0]?.explanationAnchors),c=[];for(let t=0;t<o.length;t+=1)c[t]=Ue(Je(e,o,t));const i=e=>W(c[e],1,1,(()=>{c[e]=null}));return{c(){t=g("ul");for(let e=0;e<c.length;e+=1)c[e].c();$(t,"class","oymcc__links svelte-c416p9")},m(e,o){f(e,t,o);for(let e=0;e<c.length;e+=1)c[e]&&c[e].m(t,null);n=!0},p(e,n){if(1&n){let s;for(o=Y(e[0]?.explanationAnchors),s=0;s<o.length;s+=1){const i=Je(e,o,s);c[s]?(c[s].p(i,n),U(c[s],1)):(c[s]=Ue(i),c[s].c(),U(c[s],1),c[s].m(t,null))}for(J(),s=o.length;s<c.length;s+=1)i(s);B()}},i(e){if(!n){for(let e=0;e<o.length;e+=1)U(c[e]);n=!0}},o(e){c=c.filter(Boolean);for(let e=0;e<c.length;e+=1)W(c[e]);n=!1},d(e){e&&m(t),h(c,e)}}}function Ue(e){let t,n,o,c,i,s,r,a,l,u=e[1].title+"";return o=new Ie({props:{settings:{width:16,height:16}}}),{c(){t=g("li"),n=g("a"),R(o.$$.fragment),c=b(),i=g("span"),s=y(u),a=b(),$(n,"href",r=e[1].href),$(n,"class","svelte-c416p9"),$(t,"class","svelte-c416p9")},m(e,r){f(e,t,r),d(t,n),Z(o,n,null),d(n,c),d(n,i),d(i,s),d(t,a),l=!0},p(e,t){(!l||1&t)&&u!==(u=e[1].title+"")&&w(s,u),(!l||1&t&&r!==(r=e[1].href))&&$(n,"href",r)},i(e){l||(U(o.$$.fragment,e),l=!0)},o(e){W(o.$$.fragment,e),l=!1},d(e){e&&m(t),F(o)}}}function We(e){let t,n,o=e[0]?.explanationAnchors.length&&Be(e);return{c(){o&&o.c(),t=v()},m(e,c){o&&o.m(e,c),f(e,t,c),n=!0},p(e,[n]){e[0]?.explanationAnchors.length?o?(o.p(e,n),1&n&&U(o,1)):(o=Be(e),o.c(),U(o,1),o.m(t.parentNode,t)):o&&(J(),W(o,1,1,(()=>{o=null})),B())},i(e){n||(U(o),n=!0)},o(e){W(o),n=!1},d(e){e&&m(t),o&&o.d(e)}}}function Ye(e,t,n){let o;return l(e,te,(e=>n(0,o=e))),[o]}class Re extends Q{constructor(e){super(),K(this,e,Ye,We,r,{})}}function Ze(e){let t,n,o,c,i,s,r,a,l,h;o=new Pe({});const p=e[3].default,y=function(e,t,n,o){if(e){const c=u(e,t,n,o);return e[0](c)}}(p,e,e[2],null);return r=new Re({}),{c(){t=g("div"),n=g("a"),R(o.$$.fragment),i=b(),y&&y.c(),s=b(),R(r.$$.fragment),$(n,"href","#close"),$(n,"class","oymcc-content__close svelte-1jx8pk5"),$(n,"aria-label",c=e[1]?.a11y.close),$(t,"class","oymcc-content svelte-1jx8pk5"),$(t,"role","dialog")},m(c,u){f(c,t,u),d(t,n),Z(o,n,null),d(t,i),y&&y.m(t,null),d(t,s),Z(r,t,null),e[5](t),a=!0,l||(h=_(n,"click",e[4]),l=!0)},p(e,[t]){(!a||2&t&&c!==(c=e[1]?.a11y.close))&&$(n,"aria-label",c),y&&y.p&&(!a||4&t)&&function(e,t,n,o,c,i){if(c){const s=u(t,n,o,i);e.p(s,c)}}(y,p,e,e[2],a?function(e,t,n,o){if(e[2]&&o){const c=e[2](o(n));if(void 0===t.dirty)return c;if("object"==typeof c){const e=[],n=Math.max(t.dirty.length,c.length);for(let o=0;o<n;o+=1)e[o]=t.dirty[o]|c[o];return e}return t.dirty|c}return t.dirty}(p,e[2],t,null):function(e){if(e.ctx.length>32){const t=[],n=e.ctx.length/32;for(let e=0;e<n;e++)t[e]=-1;return t}return-1}(e[2]),null)},i(e){a||(U(o.$$.fragment,e),U(y,e),U(r.$$.fragment,e),a=!0)},o(e){W(o.$$.fragment,e),W(y,e),W(r.$$.fragment,e),a=!1},d(n){n&&m(t),F(o),y&&y.d(n),F(r),e[5](null),l=!1,h()}}}function Fe(e,t,n){let o;l(e,ne,(e=>n(1,o=e)));let c,{$$slots:i={},$$scope:s}=t;j((()=>{console.log(c),c&&(c.setAttribute("tabindex","0"),c.focus())}));return e.$$set=e=>{"$$scope"in e&&n(2,s=e.$$scope)},[c,o,s,i,()=>de(),function(e){O[e?"unshift":"push"]((()=>{c=e,n(0,c)}))}]}class Ge extends Q{constructor(e){super(),K(this,e,Fe,Ze,r,{})}}function Ke(e){let t,n;return t=new ze({}),{c(){R(t.$$.fragment)},m(e,o){Z(t,e,o),n=!0},i(e){n||(U(t.$$.fragment,e),n=!0)},o(e){W(t.$$.fragment,e),n=!1},d(e){F(t,e)}}}function Qe(e){let t,n;return t=new Ae({}),{c(){R(t.$$.fragment)},m(e,o){Z(t,e,o),n=!0},i(e){n||(U(t.$$.fragment,e),n=!0)},o(e){W(t.$$.fragment,e),n=!1},d(e){F(t,e)}}}function Ve(n){let o,c,i,s;const r=[Qe,Ke],a=[];function l(n,o){return n[0]===t?0:n[0]===e?1:-1}return~(o=l(n))&&(c=a[o]=r[o](n)),{c(){c&&c.c(),i=v()},m(e,t){~o&&a[o].m(e,t),f(e,i,t),s=!0},p(e,t){let n=o;o=l(e),o!==n&&(c&&(J(),W(a[n],1,1,(()=>{a[n]=null})),B()),~o?(c=a[o],c||(c=a[o]=r[o](e),c.c()),U(c,1),c.m(i.parentNode,i)):c=null)},i(e){s||(U(c),s=!0)},o(e){W(c),s=!1},d(e){e&&m(i),~o&&a[o].d(e)}}}function Xe(e){let t,n;return t=new Ge({props:{$$slots:{default:[Ve]},$$scope:{ctx:e}}}),{c(){R(t.$$.fragment)},m(e,o){Z(t,e,o),n=!0},p(e,[n]){const o={};5&n&&(o.$$scope={dirty:n,ctx:e}),t.$set(o)},i(e){n||(U(t.$$.fragment,e),n=!0)},o(e){W(t.$$.fragment,e),n=!1},d(e){F(t,e)}}}function et(e,t,n){let o;l(e,ee,(e=>n(1,o=e)));let c=o;return ee.subscribe((e=>{e&&n(0,c=e)})),[c]}class tt extends Q{constructor(e){super(),K(this,e,et,Xe,r,{})}}let nt;const ot=()=>{document.body.className=document.body.className.replace(/\bshow-oymcc-overlay--popup|show-oymcc-overlay--bar|show-oymcc-overlay--closeable|show-oymcc-overlay\b/g,""),(()=>{const e=document.body.querySelector(`.${oe}`);e&&(e.remove(),nt&&nt.focus())})()},ct=(e=void 0)=>{document.body.classList.contains("show-oymcc-overlay")||(!e&&re().exceptionUrls.find((e=>e===window.location.pathname))||(document.body.className+=" show-oymcc-overlay show-oymcc-overlay--"+("popup"===re().style?"popup":"bar")),e&&(document.body.className+=" show-oymcc-overlay--closeable"),(()=>{const e=pe();if(e.length)return me.set(e),void he.set(re().consentOptions.map((e=>e.key)));me.set(["essential"]),he.set(["essential"])})(),(()=>{nt=document.activeElement;const e=document.createElement("div");e.className=oe,document.body.appendChild(e);const t=document.body.querySelector(`.${oe}`);t&&new tt({target:t})})())};function it(e){let t,o,c,i,s,r,a,l,u,h,p,v,k=e[0]?.notification.title+"",x=e[0]?.notification.description+"",T=e[0]?.notification.button+"";return{c(){t=g("div"),o=g("h3"),c=y(k),i=b(),s=g("p"),r=y(x),a=b(),l=g("button"),u=g("span"),h=y(T),$(o,"class","oymcc__notification__title svelte-xwua7h"),$(s,"class","oymcc__notification__desc svelte-xwua7h"),$(l,"class","oymcc__notification__button oymcc__button svelte-xwua7h"),$(t,"class","oymcc__notification svelte-xwua7h")},m(n,m){f(n,t,m),d(t,o),d(o,c),d(t,i),d(t,s),d(s,r),d(t,a),d(t,l),d(l,u),d(u,h),p||(v=_(l,"click",e[1]),p=!0)},p(e,[t]){1&t&&k!==(k=e[0]?.notification.title+"")&&w(c,k),1&t&&x!==(x=e[0]?.notification.description+"")&&w(r,x),1&t&&T!==(T=e[0]?.notification.button+"")&&w(h,T)},i:n,o:n,d(e){e&&m(t),p=!1,v()}}}function st(e,t,n){let o;l(e,ne,(e=>n(0,o=e)));return[o,()=>ct()]}class rt extends Q{constructor(e){super(),K(this,e,st,it,r,{})}}function at(e){let t,o;return{c(){t=new x(!1),o=v(),t.a=o},m(n,c){t.m(e[0],n,c),f(n,o,c)},p(e,[n]){1&n&&t.p(e[0])},i:n,o:n,d(e){e&&(m(o),t.d())}}}function lt(e,t,n){let{content:o}=t,c=[],i=null;return j((()=>{const e=/<script\b[^>]*>[\s\S]*?<\/script\b[^>]*>/g;i=o.match(e),i&&(n(0,o=o.replace(e,"")),i.forEach((e=>{c.find((t=>t===e))||((e=>{const t=document.createElement("div");t.innerHTML=e;const n=null==t?void 0:t.firstElementChild;if(!n)return;const o=n.getAttribute("async"),c=n.getAttribute("src"),i=document.createElement("script");i.async=!o||"true"===o,i.src=c||"",document.head.appendChild(i)})(e),c.push(e))})))})),e.$$set=e=>{"content"in e&&n(0,o=e.content)},[o]}class ut extends Q{constructor(e){super(),K(this,e,lt,at,r,{content:0})}}const dt=e=>{if(e.dataset.oymccIdentifier)return;const t=Date.now().toString(36)+Math.random().toString(36).substring(2),n=document.createElement("div");n.dataset.oymccIdentifier=t,n.className="oymcc-notification",e.after(n),e.dataset.oymccIdentifier=t;const o=document.querySelector(`.oymcc-notification[data-oymcc-identifier="${t}"]`);o&&new rt({target:o})},ft=()=>{(e=>{const t=(null==e?void 0:e.renderSelector)||"[data-oymcc-render]";return document.querySelectorAll(`${t}:not([data-oymcc-rendered])`)})(globalThis.oymcc.config).forEach((e=>{let{oymccPermissions:t}=e.dataset;if(!t)return;if(t=t.replace(/\s+/g,""),!ve(t.split(",")))return void(e.hasAttribute("data-oymcc-show-notification")&&(dt(e),delete e.dataset.oymccShowNotification));(e=>{const{oymccIdentifier:t}=e.dataset;if(!t)return;const n=document.querySelector(`.oymcc-notification[data-oymcc-identifier="${t}"]`);n&&(n.outerHTML="")})(e);const n=document.createElement("textarea");n.innerHTML=e.innerHTML,new ut({target:e.parentElement,props:{content:n.value}}),e.dataset.oymccRendered="1"}))},mt=()=>{const t=document.querySelectorAll('[href$="#manage-cookies"]');t.length&&t.forEach((t=>{t.addEventListener("click",(t=>{t.preventDefault(),ee.set(e),ct(!0)}))}))},ht=()=>{var e,t,n;e=re().cookieName,document.cookie=`${e}=${t?`;path=${t}`:""}${n?`;domain=${n}`:""};expires=${new Date(0).toUTCString()}`},gt=(e,t="update",n)=>{if(!e)return;if(!Object.keys(e).length)return;const o={};for(const[t,n]of Object.entries(e))n&&(o[t]=ve(n)?"granted":"denied");globalThis.gtag=globalThis.gtag||function(...e){globalThis.dataLayer.push(e)},"default"===t&&(o.wait_for_update=n||500),globalThis.gtag("consent",t,o)};globalThis.oymcc=globalThis.oymcc||{},globalThis.oymcc.initialized=!1,globalThis.oymcc.accepted=[],globalThis.oymcc.info={},globalThis.oymcc.content={};var pt={getAllPermissions:()=>pe(),checkPermission:e=>ve(e),show(){ee.set(e),ct(!0)},hide(){ot()},update(){mt(),ue()},init(e){if(globalThis.oymcc.initialized)return;const t=(e=>Object.keys(e||[]).length?se({},ce,e):ce)(e),n=(()=>{const e=globalThis.oymCookieConsentContent;return e&&Object.keys(e||[]).length?se({},ie,e):ie})(),o=ae(t.cookieName)||!1;if(globalThis.oymcc.config=t,globalThis.oymcc.content=n[t.language],globalThis.oymcc.config.consentOptions.unshift({key:"essential",title:globalThis.oymcc.content.permissions.essential.title,description:globalThis.oymcc.content.permissions.essential.description,notCustomizable:!0}),globalThis.oymcc.getAllPermissions=this.getAllPermissions,globalThis.oymcc.checkPermission=this.checkPermission,globalThis.oymcc.show=this.show,globalThis.oymcc.hide=this.hide,globalThis.oymcc.update=this.update,globalThis.oymcc.content&&globalThis.oymcc.config)if(globalThis.oymcc.config.consentOptions.length){if(gt(t.consentMode,"default",500),te.set(globalThis.oymcc.config),ne.set(globalThis.oymcc.content),document.addEventListener("oymcc-changed",(()=>{ft(),gt(t.consentMode,"update")})),document.addEventListener("oymcc-close-overlay",(()=>{ot()})),ft(),o)try{(()=>{const e=ge();if(!e)return;const t=re();let n=!0;if(e.info&&e.info.v&&e.info.v===t.version||(n=!1),e.accepted||(n=!1),t.exceptionUrls.find((e=>e===window.location.pathname))&&(n=!0),n)return globalThis.oymcc.cookies=e,ue(),void fe(e.accepted,e.info);ht()})()}catch(e){ht(),ct()}else ct();mt(),globalThis.oymcc.initialized=!0}else le("OYMCC has no consent options");else le("OYMCC content or config not found")}};export{pt as default};