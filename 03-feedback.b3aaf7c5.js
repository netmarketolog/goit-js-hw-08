!function(){var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{};function t(e){return e&&e.__esModule?e.default:e}var n={};Object.defineProperty(n,"__esModule",{value:!0}),n.default=function(e){return e&&e.constructor===Symbol?"symbol":typeof e};var r="Expected a function",o=/^\s+|\s+$/g,i=/^[-+]0x[0-9a-f]+$/i,u=/^0b[01]+$/i,f=/^0o[0-7]+$/i,a=parseInt,c="object"==typeof e&&e&&e.Object===Object&&e,l="object"==typeof self&&self&&self.Object===Object&&self,d=c||l||Function("return this")(),s=Object.prototype.toString,v=Math.max,m=Math.min,p=function(){return d.Date.now()};function b(e,t,n){var o,i,u,f,a,c,l=0,d=!1,s=!1,b=!0;if("function"!=typeof e)throw new TypeError(r);function j(t){var n=o,r=i;return o=i=void 0,l=t,f=e.apply(r,n)}function x(e){return l=e,a=setTimeout(O,t),d?j(e):f}function T(e){var n=e-c;return void 0===c||n>=t||n<0||s&&e-l>=u}function O(){var e=p();if(T(e))return S(e);a=setTimeout(O,function(e){var n=t-(e-c);return s?m(n,u-(e-l)):n}(e))}function S(e){return a=void 0,b&&o?j(e):(o=i=void 0,f)}function h(){var e=p(),n=T(e);if(o=arguments,i=this,c=e,n){if(void 0===a)return x(c);if(s)return a=setTimeout(O,t),j(c)}return void 0===a&&(a=setTimeout(O,t)),f}return t=g(t)||0,y(n)&&(d=!!n.leading,u=(s="maxWait"in n)?v(g(n.maxWait)||0,t):u,b="trailing"in n?!!n.trailing:b),h.cancel=function(){void 0!==a&&clearTimeout(a),l=0,o=c=i=a=void 0},h.flush=function(){return void 0===a?f:S(p())},h}function y(e){var r=void 0===e?"undefined":t(n)(e);return!!e&&("object"==r||"function"==r)}function g(e){if("number"==typeof e)return e;if(function(e){return"symbol"==(void 0===e?"undefined":t(n)(e))||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==s.call(e)}(e))return NaN;if(y(e)){var r="function"==typeof e.valueOf?e.valueOf():e;e=y(r)?r+"":r}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(o,"");var c=u.test(e);return c||f.test(e)?a(e.slice(2),c?2:8):i.test(e)?NaN:+e}var j="feedback-form-state",x={formBox:document.querySelector(".feedback-form"),inputEmail:document.querySelector("input"),textareaMessage:document.querySelector("textarea"),textInMemory:JSON.parse(localStorage.getItem(j))};x.formBox.addEventListener("submit",(function(e){e.preventDefault(),e.currentTarget.reset()})),x.textareaMessage.addEventListener("input",(function(e){var t=e.currentTarget.value;localStorage.setItem(j,t)}))}();
//# sourceMappingURL=03-feedback.b3aaf7c5.js.map
