function e(e){return e&&e.__esModule?e.default:e}var t,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o=/^\s+|\s+$/g,r=/^[-+]0x[0-9a-f]+$/i,i=/^0b[01]+$/i,a=/^0o[0-7]+$/i,f=parseInt,u="object"==typeof n&&n&&n.Object===Object&&n,c="object"==typeof self&&self&&self.Object===Object&&self,l=u||c||Function("return this")(),s=Object.prototype.toString,m=Math.max,d=Math.min,v=function(){return l.Date.now()};function g(e,t,n){var o,r,i,a,f,u,c=0,l=!1,s=!1,g=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function y(t){var n=o,i=r;return o=r=void 0,c=t,a=e.apply(i,n)}function x(e){return c=e,f=setTimeout(h,t),l?y(e):a}function T(e){var n=e-u;return void 0===u||n>=t||n<0||s&&e-c>=i}function h(){var e=v();if(T(e))return j(e);f=setTimeout(h,function(e){var n=t-(e-u);return s?d(n,i-(e-c)):n}(e))}function j(e){return f=void 0,g&&o?y(e):(o=r=void 0,a)}function w(){var e=v(),n=T(e);if(o=arguments,r=this,u=e,n){if(void 0===f)return x(u);if(s)return f=setTimeout(h,t),y(u)}return void 0===f&&(f=setTimeout(h,t)),a}return t=b(t)||0,p(n)&&(l=!!n.leading,i=(s="maxWait"in n)?m(b(n.maxWait)||0,t):i,g="trailing"in n?!!n.trailing:g),w.cancel=function(){void 0!==f&&clearTimeout(f),c=0,o=u=r=f=void 0},w.flush=function(){return void 0===f?a:j(v())},w}function p(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function b(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==s.call(e)}(e))return NaN;if(p(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=p(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(o,"");var n=i.test(e);return n||a.test(e)?f(e.slice(2),n?2:8):r.test(e)?NaN:+e}t=function(e,t,n){var o=!0,r=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return p(n)&&(o="leading"in n?!!n.leading:o,r="trailing"in n?!!n.trailing:r),g(e,t,{leading:o,maxWait:t,trailing:r})};const y={},x={formBox:document.querySelector(".feedback-form")};x.formBox.addEventListener("submit",(function(e){e.preventDefault();new FormData(e.currentTarget).forEach(((e,t)=>{y[t]=e})),e.currentTarget.reset(),localStorage.removeItem("feedback-form-state")})),x.formBox.addEventListener("input",e(t)((function(e){y.email=x.formBox.email.value,y.message=x.formBox.message.value,localStorage.setItem("feedback-form-state",JSON.stringify(y))}),500)),function(){const e=localStorage.getItem("feedback-form-state");if(e){const{email:t,message:n}=JSON.parse(e);x.formBox.email.value=t,x.formBox.message.value=n,y.email=t,y.message=n}}();
//# sourceMappingURL=03-feedback.54100f00.js.map
