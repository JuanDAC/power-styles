!function(e,t){if("object"==typeof exports&&"object"==typeof module)module.exports=t();else if("function"==typeof define&&define.amd)define([],t);else{var n=t();for(var r in n)("object"==typeof exports?exports:e)[r]=n[r]}}(global,(function(){return(()=>{"use strict";var e={932:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.varAdding=t.toStringValues=t.compouseHandlers=void 0,t.varAdding=function(e){return"string"==typeof e&&e.startsWith("--")?"var(".concat(e,")"):e},t.toStringValues=function(e){return e instanceof CSSUnitValue?e:String(e)},t.compouseHandlers=function(e){return Array.isArray(e)?function(t){return e.reduceRight((function(e,t){return t(e)}),t)}:e instanceof Function?e:function(e){return e}}},758:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.stylesActions=void 0;var r=n(857),o=n(932),i=n(980),u=new Proxy({},{get:function(e,t,n){if(console.log(n),e.hasOwnProperty(t))return console.log("ya existe "+t+"en ",e),e[t];var u=(0,i.paramCase)(t).replace(/^custom-/,"--");return e[t]=(0,r.styleActionFactory)(u,[o.varAdding,o.toStringValues]),e[t]}});t.stylesActions=u},857:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.styleActionFactory=void 0;var r=n(932),o=n(63);t.styleActionFactory=function(e,t){var n=(0,r.compouseHandlers)(t);return function t(r,i){var u,a,l,c=n(i),f={update:function(e){return t(r,e)}};return(0,o.isInvalidValue)(c)||(null==r||null===(u=r.attributeStyleMap)||void 0===u||u.set(e,c.toString()),((null==r||null===(a=r.style)||void 0===a?void 0:a.getPropertyValue(e))||"").trim()!==c.toString().trim()&&(null==r||null===(l=r.style)||void 0===l||l.setProperty(e,c.toString()))),f}}},63:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.isValidValue=t.isInvalidValue=void 0;var n=function(e){return e instanceof CSSUnitValue||!("string"!=typeof e||!["","false","null","undefined"].every((function(t){return e!=t})))};t.isValidValue=n,t.isInvalidValue=function(e){return!n(e)}},544:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.init=void 0;var r,o,i=n(190),u=(r=n(262))&&r.__esModule?r:{default:r};t.init=function(e){return window&&(0,u.default)(window),e&&(o=e),(0,i.switchPlataform)(o)}},869:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.powerStylesForSapper=void 0;var r=n(758);t.powerStylesForSapper=function(){return r.stylesActions}},23:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.powerStylesForSvelte=void 0;var r=n(758).stylesActions;t.powerStylesForSvelte=r},329:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.powerStylesForSvelteKit=void 0;var r=n(758);t.powerStylesForSvelteKit=function(e){return e?r.stylesActions:{}}},190:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.switchPlataform=void 0;var r=n(869),o=n(23),i=n(329);t.switchPlataform=function(e){switch(e){case"sveltekit":return i.powerStylesForSvelteKit;case"sapper":return r.powerStylesForSapper;default:return o.powerStylesForSvelte}}},262:(e,t,n)=>{n.r(t),n.d(t,{default:()=>N,CSSKeywordValue:()=>u,CSSStyleValue:()=>C,CSSUnitValue:()=>I,StylePropertyMap:()=>Z});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var i=new WeakMap,u=function(){function e(){if(o(this,e),arguments.length<1)throw new TypeError(`Failed to construct 'CSSKeywordValue': 1 arguments required, but only ${arguments.length} present.`);i.set(this,String(arguments.length<=0?void 0:arguments[0]))}return r(e,[{key:"toString",value:function(){return`${this.value}`}},{key:"value",get:function(){return i.get(this)},set:function(e){i.set(this,String(e))}}]),e}();Object.defineProperties(u.prototype,{value:{enumerable:!0}});var a=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),l=new WeakMap,c=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),l.set(this,t)}return a(e,[{key:"toString",value:function(){return`calc(1 / ${l.get(this)})`}},{key:"operator",get:function(){return"invert"}},{key:"value",get:function(){return l.get(this)}}]),e}(),f=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();function s(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var y=new WeakMap,p=function(){function e(){s(this,e);for(var t=arguments.length,n=Array(t),r=0;r<t;r++)n[r]=arguments[r];y.set(this,n)}return f(e,[{key:"toString",value:function(){return`max(${y.get(this).join(", ")})`}},{key:"operator",get:function(){return"max"}},{key:"values",get:function(){return y.get(this)}}]),e}(),v=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();function h(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var d=new WeakMap,g=function(){function e(){h(this,e);for(var t=arguments.length,n=Array(t),r=0;r<t;r++)n[r]=arguments[r];d.set(this,n)}return v(e,[{key:"toString",value:function(){return`min(${d.get(this).join(", ")})`}},{key:"operator",get:function(){return"min"}},{key:"values",get:function(){return d.get(this)}}]),e}(),b=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();function S(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var w=new WeakMap,m=function(){function e(){S(this,e);for(var t=arguments.length,n=Array(t),r=0;r<t;r++)n[r]=arguments[r];w.set(this,n)}return b(e,[{key:"toString",value:function(){return`calc(${w.get(this).reduce((function(e,t){return t instanceof c?`${e?`${e} / `:"1 / "}${t.value}`:`${e?`${e} * `:""}${t}`}),"")})`}},{key:"operator",get:function(){return"product"}},{key:"values",get:function(){return w.get(this)}}]),e}(),k=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();function O(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var j=new WeakMap,M=function(){function e(){O(this,e);for(var t=arguments.length,n=Array(t),r=0;r<t;r++)n[r]=arguments[r];j.set(this,n)}return k(e,[{key:"toString",value:function(){return`calc(${j.get(this).reduce((function(e,t){return`${e?`${e} + `:""}${t}`}),"")})`}},{key:"operator",get:function(){return"product"}},{key:"values",get:function(){return j.get(this)}}]),e}(),C=function e(){throw function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),new TypeError("Illegal constructor")},P={number:"",percent:"%",em:"em",ex:"ex",ch:"ch",rem:"rem",vw:"vw",vh:"vh",vmin:"vmin",vmax:"vmax",cm:"cm",mm:"mm",in:"in",pt:"pt",pc:"pc",px:"px",Q:"Q",deg:"deg",grad:"grad",rad:"rad",turn:"turn",s:"s",ms:"ms",Hz:"Hz",kHz:"kHz",dpi:"dpi",dpcm:"dpcm",dppx:"dppx",fr:"fr"},x=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();function A(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)}var _=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e)}return x(e,[{key:"add",value:function(){for(var e=this.constructor,t=new e(this.value,this.unit),n=[],r=arguments.length,o=Array(r),i=0;i<r;i++)o[i]=arguments[i];var u=!0,a=!1,l=void 0;try{for(var f,s=o[Symbol.iterator]();!(u=(f=s.next()).done);u=!0){var y=f.value;if(y instanceof e)n.length||t.unit!==y.unit?n.push(y):t.value+=y.value;else{if(!(y instanceof m||y instanceof p||y instanceof g||y instanceof c))return null;n.push(y)}}}catch(e){a=!0,l=e}finally{try{!u&&s.return&&s.return()}finally{if(a)throw l}}return n.length?new(Function.prototype.bind.apply(M,[null].concat([t],n))):t}},{key:"div",value:function(){for(var e=this.constructor,t=new e(this.value,this.unit),n=[],r=arguments.length,o=Array(r),i=0;i<r;i++)o[i]=arguments[i];var u=!0,a=!1,l=void 0;try{for(var f,s=o[Symbol.iterator]();!(u=(f=s.next()).done);u=!0){var y=f.value;if("number"==typeof y&&(y=new I(y,"number")),!(y instanceof e))return null;n.length||t.unit!==y.unit&&"number"!==y.unit?n.push(y):t.value/=y.value}}catch(e){a=!0,l=e}finally{try{!u&&s.return&&s.return()}finally{if(a)throw l}}return n.length?new(Function.prototype.bind.apply(m,[null].concat([t],A(n.map((function(e){return new c(e)})))))):t}},{key:"max",value:function(){for(var e=new I(this.value,this.unit),t=[e],n=arguments.length,r=Array(n),o=0;o<n;o++)r[o]=arguments[o];var i=!0,u=!1,a=void 0;try{for(var l,c=r[Symbol.iterator]();!(i=(l=c.next()).done);i=!0){var f=l.value;if(!(f instanceof I))return null;t.length>1||e.unit!==f.unit?t.push(f):e.value=Math.max(e.value,f.value)}}catch(e){u=!0,a=e}finally{try{!i&&c.return&&c.return()}finally{if(u)throw a}}return t.length>1?new(Function.prototype.bind.apply(p,[null].concat(t))):e}},{key:"min",value:function(){for(var e=new I(this.value,this.unit),t=[e],n=arguments.length,r=Array(n),o=0;o<n;o++)r[o]=arguments[o];var i=!0,u=!1,a=void 0;try{for(var l,c=r[Symbol.iterator]();!(i=(l=c.next()).done);i=!0){var f=l.value;if(!(f instanceof I))return null;t.length>1||e.unit!==f.unit?t.push(f):e.value=Math.min(e.value,f.value)}}catch(e){u=!0,a=e}finally{try{!i&&c.return&&c.return()}finally{if(u)throw a}}return t.length>1?new(Function.prototype.bind.apply(g,[null].concat(t))):e}},{key:"mul",value:function(){for(var e=this.constructor,t=new e(this.value,this.unit),n=[],r=arguments.length,o=Array(r),i=0;i<r;i++)o[i]=arguments[i];var u=!0,a=!1,l=void 0;try{for(var c,f=o[Symbol.iterator]();!(u=(c=f.next()).done);u=!0){var s=c.value;if("number"==typeof s&&(s=new I(s,"number")),!(s instanceof e))return null;n.length||t.unit!==s.unit&&"number"!==s.unit?n.push(s):t.value*=s.value}}catch(e){a=!0,l=e}finally{try{!u&&f.return&&f.return()}finally{if(a)throw l}}return n.length?new(Function.prototype.bind.apply(m,[null].concat([t],n))):t}},{key:"sub",value:function(){for(var e=this.constructor,t=new e(this.value,this.unit),n=[],r=arguments.length,o=Array(r),i=0;i<r;i++)o[i]=arguments[i];var u=!0,a=!1,l=void 0;try{for(var c,f=o[Symbol.iterator]();!(u=(c=f.next()).done);u=!0){var s=c.value;if(!(s instanceof e))return null;n.length||t.unit!==s.unit?n.push(new e(-1*s.value,s.unit)):t.value-=s.value}}catch(e){a=!0,l=e}finally{try{!u&&f.return&&f.return()}finally{if(a)throw l}}return n.length?new(Function.prototype.bind.apply(M,[null].concat([t],n))):t}}]),e}(),E=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();function V(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function $(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}var F=new WeakMap,T=new WeakMap,I=function(e){function t(){V(this,t);var e=$(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));if(arguments.length<2)throw new TypeError(`Failed to construct 'CSSUnitValue': 2 arguments required, but only ${arguments.length} present.`);return F.set(e,W(arguments.length<=0?void 0:arguments[0])),T.set(e,R(arguments.length<=1?void 0:arguments[1])),e}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),E(t,[{key:"toString",value:function(){return`${this.value}${P[this.unit]}`}},{key:"value",get:function(){return F.get(this)},set:function(e){F.set(this,W(e))}},{key:"unit",get:function(){return T.get(this)}}]),t}(_);function W(e){if(isNaN(e)||Math.abs(e)===1/0)throw new TypeError("Failed to set the 'value' property on 'CSSUnitValue': The provided double value is non-finite.");return Number(e)}function R(e){if(-1===Object.keys(P).indexOf(e))throw new TypeError(`Failed to construct 'CSSUnitValue': Invalid unit: ${e}`);return e}Object.defineProperties(I.prototype,{value:{enumerable:!0},unit:{enumerable:!0}});var U=function(e){var t=String(e).match(z);if(t){var n=function(e,t){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function(e,t){var n=[],r=!0,o=!1,i=void 0;try{for(var u,a=e[Symbol.iterator]();!(r=(u=a.next()).done)&&(n.push(u.value),!t||n.length!==t);r=!0);}catch(e){o=!0,i=e}finally{try{!r&&a.return&&a.return()}finally{if(o)throw i}}return n}(e,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")}(t,3),r=n[1],o=n[2];return new I(r,H[K.indexOf(o||"")])}return new u(e)},H=Object.keys(P),K=Object.values(P),z=new RegExp(`^([-+]?[0-9]*.?[0-9]+)(${K.join("|")})?$`),q=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),Z=function(){function e(){throw function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),new TypeError("Illegal constructor")}return q(e,[{key:"get",value:function(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];if(t.length<1)throw new TypeError(`Failed to execute 'get' on 'StylePropertyMapReadOnly': 1 argument required, but only ${t.length} present.`);var r=t[0],o=this.style[r];return o?U(o):null}},{key:"set",value:function(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];if(t.length<2)throw new TypeError(`Failed to execute 'set' on 'StylePropertyMap': 2 arguments required, but only ${t.length} present.`);var r=t[0],o=t[1];this.style[r]=String(o)}}]),e}();const N=function(e){function t(e,t,n){t in e||Object.defineProperty(e,t,{configurable:!0,enumerable:!0,get(){var e=Object.create(Z.prototype);return e.style=n(this),e}})}e.CSS||(e.CSS=function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e)}),Object.keys(P).forEach((function(t){t in e.CSS||(e.CSS[t]=function(e){return new I(e,t)})})),t(e.CSSRule.prototype,"styleMap",(function(e){return e.style})),t(e.Element.prototype,"attributeStyleMap",(function(e){return e.style})),t(e.Element.prototype,"computedStyleMap",(function(e){return getComputedStyle(e)})),e.CSSKeywordValue||(e.CSSKeywordValue=u),e.CSSMathInvert||(e.CSSMathInvert=c),e.CSSMathMax||(e.CSSMathMax=p),e.CSSMathMin||(e.CSSMathMin=g),e.CSSMathProduct||(e.CSSMathProduct=m),e.CSSMathSum||(e.CSSMathSum=M),e.CSSStyleValue||(e.CSSStyleValue=C),e.CSSUnitValue||(e.CSSUnitValue=I),e.StylePropertyMap||(e.StylePropertyMap=Z)}},980:(e,t,n)=>{n.r(t),n.d(t,{paramCase:()=>l});var r=function(){return r=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e},r.apply(this,arguments)};function o(e){return e.toLowerCase()}Object.create,Object.create;var i=[/([a-z0-9])([A-Z])/g,/([A-Z])([A-Z][a-z])/g],u=/[^A-Z0-9]+/gi;function a(e,t,n){return t instanceof RegExp?e.replace(t,n):t.reduce((function(e,t){return e.replace(t,n)}),e)}function l(e,t){return void 0===t&&(t={}),function(e,t){return void 0===t&&(t={}),function(e,t){void 0===t&&(t={});for(var n=t.splitRegexp,r=void 0===n?i:n,l=t.stripRegexp,c=void 0===l?u:l,f=t.transform,s=void 0===f?o:f,y=t.delimiter,p=void 0===y?" ":y,v=a(a(e,r,"$1\0$2"),c,"\0"),h=0,d=v.length;"\0"===v.charAt(h);)h++;for(;"\0"===v.charAt(d-1);)d--;return v.slice(h,d).split("\0").map(s).join(p)}(e,r({delimiter:"."},t))}(e,r({delimiter:"-"},t))}}},t={};function n(r){var o=t[r];if(void 0!==o)return o.exports;var i=t[r]={exports:{}};return e[r](i,i.exports,n),i.exports}n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var r={};return(()=>{var e=r;e.default=void 0;var t=n(544).init;e.default=t})(),r.default})()}));