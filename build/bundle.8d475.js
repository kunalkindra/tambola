!function(e){function t(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,t),o.l=!0,o.exports}var n={};t.m=e,t.c=n,t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:r})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,n){if(1&n&&(e=t(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(t.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var o in e)t.d(r,o,function(t){return e[t]}.bind(null,o));return r},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="/",t(t.s="mdyV")}({"/cQz":function(e,t,n){"use strict";(function(e){function r(t){return e("div",{className:"py-2 bg-info rounded text-white number-banner text-center"},t.number)}n.d(t,"a",(function(){return r}))}).call(this,n("hosL").h)},AGjF:function(e,t,n){"use strict";(function(e){function r(t){var n=t.prizes,r=t.onChange,o=[n.slice(0,n.length/2),n.slice(n.length/2,n.length)];return e("div",{className:"row small"},o.map((function(t){return e("div",{className:"col col-sm-6"},e("table",{className:"table text-left prize-table"},e("thead",{className:"thead-light"},e("tr",null,e("th",{style:{width:"50%"}},"Inaam"),e("th",{style:{width:"20%"},className:"text-right"},"Inaam rashi"),e("th",{style:{width:"30%"}},"Vijeta"))),e("tbody",null,t.map((function(t){var n=t.amount,o=t.winner,l=t.id,u=o?"bg-primary text-white":"";return e("tr",null,e("td",{className:u},t.name),e("td",{className:"text-right "+u},"₹ ",n),e("td",{className:u},e("input",{type:"text",value:o,onChange:function(e){return r(l,e.target.value)}})))})))))})))}n.d(t,"a",(function(){return r}))}).call(this,n("hosL").h)},JCdp:function(e,t,n){"use strict";function r(e){return e[e.length-1]}n.d(t,"a",(function(){return r}))},"JuI/":function(){},QfWi:function(e,t,n){"use strict";n.r(t);n("JuI/");var r=n("ugae");t.default=r.a},UOin:function(e,t,n){"use strict";(function(e){function r(t){var n=t.children;return e("div",{className:"modal fade show intro-modal",tabIndex:"-1",role:"dialog","aria-labelledby":"exampleModalLabel","aria-hidden":"true"},e("div",{className:"modal-dialog modal-dialog-centered modal-lg",role:"document"},e("div",{className:"modal-content"},e("div",{className:"modal-body text-center py-4"},e("h1",{className:"mb-4"},t.title),n))))}n.d(t,"a",(function(){return r}))}).call(this,n("hosL").h)},aW7M:function(e,t,n){"use strict";(function(e){function r(t){for(var n=t.numbers,r=[],l=1;l<=90;l++){var u=["numbers-table__box"];n.includes(l)&&u.push("numbers-table__box--active"),Object(o.a)(n)===l&&u.push("numbers-table__box--last"),r.push(e("div",{className:u.join(" ")},e("span",null,l)))}return e("div",{className:"numbers-table"},r)}n.d(t,"a",(function(){return r}));var o=n("JCdp")}).call(this,n("hosL").h)},hosL:function(e,t,n){"use strict";function r(e,t){for(var n in t)e[n]=t[n];return e}function o(e){var t=e.parentNode;t&&t.removeChild(e)}function l(e,t,n){var r,o=arguments,l={};for(r in t)"key"!==r&&"ref"!==r&&(l[r]=t[r]);if(arguments.length>3)for(n=[n],r=3;r<arguments.length;r++)n.push(o[r]);if(null!=n&&(l.children=n),"function"==typeof e&&null!=e.defaultProps)for(r in e.defaultProps)void 0===l[r]&&(l[r]=e.defaultProps[r]);return u(e,l,t&&t.key,t&&t.ref,null)}function u(e,t,n,r,o){var l={type:e,props:t,key:n,ref:r,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,constructor:void 0,__v:o};return null==o&&(l.__v=l),P.vnode&&P.vnode(l),l}function i(){return{}}function a(e){return e.children}function c(e,t){this.props=e,this.context=t}function s(e,t){if(null==t)return e.__?s(e.__,e.__.__k.indexOf(e)+1):null;for(var n;t<e.__k.length;t++)if(null!=(n=e.__k[t])&&null!=n.__e)return n.__e;return"function"==typeof e.type?s(e):null}function _(e){var t,n;if(null!=(e=e.__)&&null!=e.__c){for(e.__e=e.__c.base=null,t=0;t<e.__k.length;t++)if(null!=(n=e.__k[t])&&null!=n.__e){e.__e=e.__c.base=n.__e;break}return _(e)}}function f(e){(!e.__d&&(e.__d=!0)&&T.push(e)&&!D++||W!==P.debounceRendering)&&((W=P.debounceRendering)||E)(d)}function d(){for(var e;D=T.length;)e=T.sort((function(e,t){return e.__v.__b-t.__v.__b})),T=[],e.some((function(e){var t,n,o,l,u,i,a;e.__d&&(i=(u=(t=e).__v).__e,(a=t.__P)&&(n=[],(o=r({},u)).__v=o,l=y(a,u,o,t.__n,void 0!==a.ownerSVGElement,null,n,null==i?s(u):i),g(n,u),l!=i&&_(u)))}))}function p(e,t,n,r,l,u,i,a,c){var _,f,d,p,m,v,b,g=n&&n.__k||z,N=g.length;if(a==U&&(a=null!=u?u[0]:N?s(n,0):null),_=0,t.__k=h(t.__k,(function(n){if(null!=n){if(n.__=t,n.__b=t.__b+1,null===(d=g[_])||d&&n.key==d.key&&n.type===d.type)g[_]=void 0;else for(f=0;f<N;f++){if((d=g[f])&&n.key==d.key&&n.type===d.type){g[f]=void 0;break}d=null}if(p=y(e,n,d=d||U,r,l,u,i,a,c),(f=n.ref)&&d.ref!=f&&(b||(b=[]),d.ref&&b.push(d.ref,null,n),b.push(f,n.__c||p,n)),null!=p){var o;if(null==v&&(v=p),void 0!==n.__d)o=n.__d,n.__d=void 0;else if(u==d||p!=a||null==p.parentNode){e:if(null==a||a.parentNode!==e)e.appendChild(p),o=null;else{for(m=a,f=0;(m=m.nextSibling)&&f<N;f+=2)if(m==p)break e;e.insertBefore(p,a),o=a}"option"==t.type&&(e.value="")}a=void 0!==o?o:p.nextSibling,"function"==typeof t.type&&(t.__d=a)}else a&&d.__e==a&&a.parentNode!=e&&(a=s(d))}return _++,n})),t.__e=v,null!=u&&"function"!=typeof t.type)for(_=u.length;_--;)null!=u[_]&&o(u[_]);for(_=N;_--;)null!=g[_]&&k(g[_],g[_]);if(b)for(_=0;_<b.length;_++)w(b[_],b[++_],b[++_])}function h(e,t,n){if(null==n&&(n=[]),null==e||"boolean"==typeof e)t&&n.push(t(null));else if(Array.isArray(e))for(var r=0;r<e.length;r++)h(e[r],t,n);else n.push(t?t("string"==typeof e||"number"==typeof e?u(null,e,null,null,e):null!=e.__e||null!=e.__c?u(e.type,e.props,e.key,null,e.__v):e):e);return n}function m(e,t,n){"-"===t[0]?e.setProperty(t,n):e[t]="number"==typeof n&&!1===F.test(t)?n+"px":null==n?"":n}function v(e,t,n,r,o){var l,u,i,a,c;if(o?"className"===t&&(t="class"):"class"===t&&(t="className"),"style"===t)if(l=e.style,"string"==typeof n)l.cssText=n;else{if("string"==typeof r&&(l.cssText="",r=null),r)for(a in r)n&&a in n||m(l,a,"");if(n)for(c in n)r&&n[c]===r[c]||m(l,c,n[c])}else"o"===t[0]&&"n"===t[1]?(u=t!==(t=t.replace(/Capture$/,"")),i=t.toLowerCase(),t=(i in e?i:t).slice(2),n?(r||e.addEventListener(t,b,u),(e.l||(e.l={}))[t]=n):e.removeEventListener(t,b,u)):"list"!==t&&"tagName"!==t&&"form"!==t&&"type"!==t&&"size"!==t&&!o&&t in e?e[t]=null==n?"":n:"function"!=typeof n&&"dangerouslySetInnerHTML"!==t&&(t!==(t=t.replace(/^xlink:?/,""))?null==n||!1===n?e.removeAttributeNS("http://www.w3.org/1999/xlink",t.toLowerCase()):e.setAttributeNS("http://www.w3.org/1999/xlink",t.toLowerCase(),n):null==n||!1===n&&!/^ar/.test(t)?e.removeAttribute(t):e.setAttribute(t,n))}function b(e){this.l[e.type](P.event?P.event(e):e)}function y(e,t,n,o,l,u,i,s,_){var f,d,h,m,v,b,y,g,w,k,C=t.type;if(void 0!==t.constructor)return null;(f=P.__b)&&f(t);try{e:if("function"==typeof C){if(g=t.props,w=(f=C.contextType)&&o[f.__c],k=f?w?w.props.value:f.__:o,n.__c?y=(d=t.__c=n.__c).__=d.__E:("prototype"in C&&C.prototype.render?t.__c=d=new C(g,k):(t.__c=d=new c(g,k),d.constructor=C,d.render=x),w&&w.sub(d),d.props=g,d.state||(d.state={}),d.context=k,d.__n=o,h=d.__d=!0,d.__h=[]),null==d.__s&&(d.__s=d.state),null!=C.getDerivedStateFromProps&&(d.__s==d.state&&(d.__s=r({},d.__s)),r(d.__s,C.getDerivedStateFromProps(g,d.__s))),m=d.props,v=d.state,h)null==C.getDerivedStateFromProps&&null!=d.componentWillMount&&d.componentWillMount(),null!=d.componentDidMount&&d.__h.push(d.componentDidMount);else{if(null==C.getDerivedStateFromProps&&g!==m&&null!=d.componentWillReceiveProps&&d.componentWillReceiveProps(g,k),!d.__e&&null!=d.shouldComponentUpdate&&!1===d.shouldComponentUpdate(g,d.__s,k)||t.__v===n.__v&&!d.__){for(d.props=g,d.state=d.__s,t.__v!==n.__v&&(d.__d=!1),d.__v=t,t.__e=n.__e,t.__k=n.__k,d.__h.length&&i.push(d),f=0;f<t.__k.length;f++)t.__k[f]&&(t.__k[f].__=t);break e}null!=d.componentWillUpdate&&d.componentWillUpdate(g,d.__s,k),null!=d.componentDidUpdate&&d.__h.push((function(){d.componentDidUpdate(m,v,b)}))}d.context=k,d.props=g,d.state=d.__s,(f=P.__r)&&f(t),d.__d=!1,d.__v=t,d.__P=e,f=d.render(d.props,d.state,d.context),t.__k=null!=f&&f.type==a&&null==f.key?f.props.children:Array.isArray(f)?f:[f],null!=d.getChildContext&&(o=r(r({},o),d.getChildContext())),h||null==d.getSnapshotBeforeUpdate||(b=d.getSnapshotBeforeUpdate(m,v)),p(e,t,n,o,l,u,i,s,_),d.base=t.__e,d.__h.length&&i.push(d),y&&(d.__E=d.__=null),d.__e=!1}else null==u&&t.__v===n.__v?(t.__k=n.__k,t.__e=n.__e):t.__e=N(n.__e,t,n,o,l,u,i,_);(f=P.diffed)&&f(t)}catch(e){t.__v=null,P.__e(e,t,n)}return t.__e}function g(e,t){P.__c&&P.__c(t,e),e.some((function(t){try{e=t.__h,t.__h=[],e.some((function(e){e.call(t)}))}catch(e){P.__e(e,t.__v)}}))}function N(e,t,n,r,o,l,u,i){var a,c,s,_,f,d=n.props,h=t.props;if(o="svg"===t.type||o,null!=l)for(a=0;a<l.length;a++)if(null!=(c=l[a])&&((null===t.type?3===c.nodeType:c.localName===t.type)||e==c)){e=c,l[a]=null;break}if(null==e){if(null===t.type)return document.createTextNode(h);e=o?document.createElementNS("http://www.w3.org/2000/svg",t.type):document.createElement(t.type,h.is&&{is:h.is}),l=null,i=!1}if(null===t.type)d!==h&&e.data!=h&&(e.data=h);else{if(null!=l&&(l=z.slice.call(e.childNodes)),s=(d=n.props||U).dangerouslySetInnerHTML,_=h.dangerouslySetInnerHTML,!i){if(d===U)for(d={},f=0;f<e.attributes.length;f++)d[e.attributes[f].name]=e.attributes[f].value;(_||s)&&(_&&s&&_.__html==s.__html||(e.innerHTML=_&&_.__html||""))}(function(e,t,n,r,o){var l;for(l in n)"children"===l||"key"===l||l in t||v(e,l,null,n[l],r);for(l in t)o&&"function"!=typeof t[l]||"children"===l||"key"===l||"value"===l||"checked"===l||n[l]===t[l]||v(e,l,t[l],n[l],r)})(e,h,d,o,i),t.__k=t.props.children,_||p(e,t,n,r,"foreignObject"!==t.type&&o,l,u,U,i),i||("value"in h&&void 0!==h.value&&h.value!==e.value&&(e.value=null==h.value?"":h.value),"checked"in h&&void 0!==h.checked&&h.checked!==e.checked&&(e.checked=h.checked))}return e}function w(e,t,n){try{"function"==typeof e?e(t):e.current=t}catch(e){P.__e(e,n)}}function k(e,t,n){var r,l,u;if(P.unmount&&P.unmount(e),(r=e.ref)&&(r.current&&r.current!==e.__e||w(r,null,t)),n||"function"==typeof e.type||(n=null!=(l=e.__e)),e.__e=e.__d=void 0,null!=(r=e.__c)){if(r.componentWillUnmount)try{r.componentWillUnmount()}catch(e){P.__e(e,t)}r.base=r.__P=null}if(r=e.__k)for(u=0;u<r.length;u++)r[u]&&k(r[u],t,n);null!=l&&o(l)}function x(e,t,n){return this.constructor(e,n)}function C(e,t,n){var r,o,u;P.__&&P.__(e,t),o=(r=n===A)?null:n&&n.__k||t.__k,e=l(a,null,[e]),u=[],y(t,(r?t:n||t).__k=e,o||U,U,void 0!==t.ownerSVGElement,n&&!r?[n]:o?null:z.slice.call(t.childNodes),u,n||U,r),g(u,e)}function O(e,t){C(e,t,A)}function j(e,t){return t=r(r({},e.props),t),arguments.length>2&&(t.children=z.slice.call(arguments,2)),u(e.type,t,t.key||e.key,t.ref||e.ref,null)}function S(e){var t={},n={__c:"__cC"+M++,__:e,Consumer:function(e,t){return e.children(t)},Provider:function(e){var r,o=this;return this.getChildContext||(r=[],this.getChildContext=function(){return t[n.__c]=o,t},this.shouldComponentUpdate=function(e){o.props.value!==e.value&&r.some((function(t){t.context=e.value,f(t)}))},this.sub=function(e){r.push(e);var t=e.componentWillUnmount;e.componentWillUnmount=function(){r.splice(r.indexOf(e),1),t&&t.call(e)}}),e.children}};return n.Consumer.contextType=n,n}n.r(t),n.d(t,"render",(function(){return C})),n.d(t,"hydrate",(function(){return O})),n.d(t,"createElement",(function(){return l})),n.d(t,"h",(function(){return l})),n.d(t,"Fragment",(function(){return a})),n.d(t,"createRef",(function(){return i})),n.d(t,"isValidElement",(function(){return L})),n.d(t,"Component",(function(){return c})),n.d(t,"cloneElement",(function(){return j})),n.d(t,"createContext",(function(){return S})),n.d(t,"toChildArray",(function(){return h})),n.d(t,"_unmount",(function(){return k})),n.d(t,"options",(function(){return P}));var P,L,T,D,E,W,A,M,U={},z=[],F=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord/i;P={__e:function(e,t){for(var n,r;t=t.__;)if((n=t.__c)&&!n.__)try{if(n.constructor&&null!=n.constructor.getDerivedStateFromError&&(r=!0,n.setState(n.constructor.getDerivedStateFromError(e))),null!=n.componentDidCatch&&(r=!0,n.componentDidCatch(e)),r)return f(n.__E=n)}catch(t){e=t}throw e}},L=function(e){return null!=e&&void 0===e.constructor},c.prototype.setState=function(e,t){var n;n=this.__s!==this.state?this.__s:this.__s=r({},this.state),"function"==typeof e&&(e=e(n,this.props)),e&&r(n,e),null!=e&&this.__v&&(t&&this.__h.push(t),f(this))},c.prototype.forceUpdate=function(e){this.__v&&(this.__e=!0,e&&this.__h.push(e),f(this))},c.prototype.render=a,T=[],D=0,E="function"==typeof Promise?Promise.prototype.then.bind(Promise.resolve()):setTimeout,A=U,M=0},lojg:function(e,t,n){"use strict";function r(e){for(var t,n,r=e.length;0!==r;)n=Math.floor(Math.random()*r),t=e[r-=1],e[r]=e[n],e[n]=t;return e}n.d(t,"a",(function(){return r}))},mdyV:function(e,t,n){"use strict";n.r(t);var r=n("hosL"),o=r.h,l=r.render,u=r.hydrate,i=function(e){return e&&e.default?e.default:e};if("function"==typeof i(n("QfWi"))){var a=document.getElementById("preact_root")||document.body.firstElementChild;0,function(){var e=i(n("QfWi")),t={},r=document.querySelector('[type="__PREACT_CLI_DATA__"]');r&&(t=JSON.parse(r.innerHTML).preRenderData||t);var c,s=t.url?"/"===(c=t.url)[c.length-1]?c:c+"/":"",_=u&&s===location.pathname;a=(_?u:l)(o(e,{CLI_DATA:{preRenderData:t}}),document.body,a)}()}},ugae:function(e,t,n){"use strict";(function(e,r){function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){u(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(){return{numbers:function(){for(var e=[],t=1;t<=90;t++)e.push(t);return Object(c.a)(e)}(),usedNumbers:[],started:!1,prizes:[{id:1,name:"Saare corners",amount:50,winner:""},{id:2,name:"Quick 5",amount:50,winner:""},{id:3,name:"Upar alli line",amount:50,winner:""},{id:4,name:"Beech aali line",amount:50,winner:""},{id:5,name:"Nichli line",amount:50,winner:""},{id:6,name:"Full house",amount:100,winner:""},{id:7,name:"Fir se full house",amount:80,winner:""},{id:8,name:"Ek aur full house",amount:70,winner:""}]}}n.d(t,"a",(function(){return m}));var a=n("hosL"),c=n("lojg"),s=n("JCdp"),_=n("aW7M"),f=n("/cQz"),d=n("UOin"),p=n("wqxZ"),h=n("AGjF"),m=function(t){function n(){for(var e,n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))||this).state=i(),e.generateNumber=function(){var t=e.state,n=t.numbers,r=t.usedNumbers;e.setState({numbers:n.slice(0,n.length-1),usedNumbers:r.concat(Object(s.a)(n))})},e.start=function(){e.setState({started:!0}),e.generateNumber()},e.onWinnerChange=function(t,n){var r=e.state.prizes.map((function(e){return e.id===t?l({},e,{winner:n}):e}));e.setState({prizes:r})},e}var o,u;u=t,(o=n).prototype=Object.create(u.prototype),o.prototype.constructor=o,o.__proto__=u;var a=n.prototype;return a.renderContent=function(){var t=this.state,n=t.numbers,o=t.usedNumbers,l=t.started,u=t.prizes,i=Object(s.a)(o);return l?n.length?e("div",{className:"row"},e("div",{className:"col col-sm-6 border-right"},e(_.a,{numbers:o})),e("div",{className:"col col-sm-6 d-flex align-items-center flex-column"},e(f.a,{number:i}),e("div",{className:"mb-4"}),e("button",{className:"btn btn-lg btn-primary",onClick:this.generateNumber},"Tambola bhyi Tambola"),e("div",{className:"mb-4"}),e("hr",{className:"w-100"}),e("div",{className:"mb-4"}),e("div",{className:"w-100"},e(h.a,{prizes:u,onChange:this.onWinnerChange})))):e(d.a,{title:e("span",null,"Katha samaapt! ",e("br",null),e("br",null)," Aaj k vijeta")},e(h.a,{prizes:u,onChange:this.onWinnerChange})):e(r,null,e(d.a,{title:"Tambola"},e("div",{className:"row"},e("div",{className:"col"},e(p.a,{prizes:u})),e("div",{className:"col d-flex flex-column justify-content-center"},e("p",{className:"h2"},"Kre shuru?"),e("div",{className:"mb-5"}),e("br",null),e("button",{type:"button",onClick:this.start,className:"btn btn-primary btn-lg mx-auto w-50"},"Start")))))},a.render=function(){return e("div",{id:"app",className:"container-fluid p-4"},this.renderContent())},n}(a.Component)}).call(this,n("hosL").h,n("hosL").Fragment)},wqxZ:function(e,t,n){"use strict";(function(e,r){function o(t){var n=t.showWinners,o=void 0!==n&&n,l=t.prizes,u=l.reduce((function(e,t){return t.amount+e}),0);return e(r,null,e("table",{className:"table text-left"},e("thead",{className:"thead-light"},e("tr",null,e("th",null,"Inaam"),e("th",{className:"text-right"},"Inaam rashi"),o&&e("th",null,"Vijeta"))),e("tbody",null,l.map((function(t){var n=t.amount,r=t.winner;return e("tr",null,e("td",null,t.name),e("td",{className:"text-right"},n),o&&e("td",null,r))})),e("tr",null,e("td",null,"Total"),e("td",{className:"text-right"},u),o&&e("td",null)))))}n.d(t,"a",(function(){return o}))}).call(this,n("hosL").h,n("hosL").Fragment)}});
//# sourceMappingURL=bundle.8d475.js.map