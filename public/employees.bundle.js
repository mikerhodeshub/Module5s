(()=>{"use strict";var e,t,n,r={972:(e,t,n)=>{var r=n(294),o=n(745),l=n(250);function c(e){return c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},c(e)}function u(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function i(e,t){return i=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},i(e,t)}function f(e,t){if(t&&("object"===c(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function p(e){return p=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},p(e)}var y=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&i(e,t)}(y,e);var t,n,o,l,c=(o=y,l=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=p(o);if(l){var n=p(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return f(this,e)});function y(){return u(this,y),c.apply(this,arguments)}return t=y,(n=[{key:"render",value:function(){return r.createElement("div",null,"This is a placeholder for the Issue Filter.")}}])&&a(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),y}(r.Component);function m(e){return m="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},m(e)}function s(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function d(e,t){return d=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},d(e,t)}function b(e,t){if(t&&("object"===m(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return h(e)}function h(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function E(e){return E=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},E(e)}var v=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&d(e,t)}(u,e);var t,n,o,l,c=(o=u,l=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=E(o);if(l){var n=E(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return b(this,e)});function u(){var e;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,u),(e=c.call(this)).handleSubmit=e.handleSubmit.bind(h(e)),e}return t=u,(n=[{key:"handleSubmit",value:function(e){e.preventDefault();var t=document.forms.employeeAdd,n={name:t.name.value,extension:t.ext.value,email:t.email.value,title:t.title.value};this.props.createEmployee(n),t.name.value="",t.ext.value="",t.email.value="",t.title.value=""}},{key:"render",value:function(){return r.createElement("form",{name:"employeeAdd",onSubmit:this.handleSubmit},"Name: ",r.createElement("input",{type:"text",name:"name"}),r.createElement("br",null),"Extension: ",r.createElement("input",{type:"text",name:"ext",maxLength:4}),r.createElement("br",null),"Email: ",r.createElement("input",{type:"text",name:"email"}),r.createElement("br",null),"Title: ",r.createElement("input",{type:"text",name:"title"}),r.createElement("br",null),r.createElement("button",null,"Add"))}}])&&s(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),u}(r.Component);function O(e){return O="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},O(e)}function j(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function g(e,t){return g=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},g(e,t)}function w(e,t){if(t&&("object"===O(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return P(e)}function P(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function S(e){return S=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},S(e)}function _(e){var t=e.employees.map((function(t){return r.createElement(x,{key:t._id,employee:t,deleteEmployee:e.deleteEmployee})}));return r.createElement("table",{className:"bordered-table"},r.createElement("thead",null,r.createElement("tr",null,r.createElement("th",null,"Name"),r.createElement("th",null,"Extension"),r.createElement("th",null,"Email"),r.createElement("th",null,"Title"),r.createElement("th",null,"Date Hired"),r.createElement("th",null,"Currently Employed?"),r.createElement("th",null))),r.createElement("tbody",null,t))}function x(e){return r.createElement("tr",null,r.createElement("td",null,e.employee.name),r.createElement("td",null,e.employee.extension),r.createElement("td",null,e.employee.email),r.createElement("td",null,e.employee.title),r.createElement("td",null,e.employee.dateHired.toDateString()),r.createElement("td",null,e.employee.currentlyEmployed?"Yes":"No"),r.createElement("td",null,r.createElement("button",{onClick:function(){e.deleteEmployee(e.employee._id)}},"DELETE")))}var T=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&g(e,t)}(u,e);var t,n,o,l,c=(o=u,l=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=S(o);if(l){var n=S(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return w(this,e)});function u(){var e;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,u),(e=c.call(this)).state={employees:[]},e.createEmployee=e.createEmployee.bind(P(e)),e.deleteEmployee=e.deleteEmployee.bind(P(e)),e}return t=u,(n=[{key:"componentDidMount",value:function(){this.loadData()}},{key:"loadData",value:function(){var e=this;fetch("/api/employees").then((function(e){return e.json()})).then((function(t){console.log("Total count of employees:",t.count),t.employees.forEach((function(e){e.dateHired=new Date(e.dateHired)})),e.setState({employees:t.employees})})).catch((function(e){console.log(e)}))}},{key:"createEmployee",value:function(e){var t=this;fetch("/api/employees",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)}).then((function(e){return e.json()})).then((function(e){e.employee.dateHired=new Date(e.employee.dateHired);var n=t.state.employees.concat(e.employee);t.setState({employees:n}),console.log("Total count of employees:",n.length)})).catch((function(e){console.log(e)}))}},{key:"deleteEmployee",value:function(e){var t=this;fetch("/api/employees/".concat(e),{method:"DELETE"}).then((function(e){e.ok?t.loadData():console.log("Failed to delete employee.")}))}},{key:"render",value:function(){return r.createElement(r.Fragment,null,r.createElement("h1",null,"Employee Management Application"),r.createElement(y,null),r.createElement("hr",null),r.createElement(_,{employees:this.state.employees,deleteEmployee:this.deleteEmployee}),r.createElement("hr",null),r.createElement(v,{createEmployee:this.createEmployee}))}}])&&j(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),u}(r.Component);function k(){return r.createElement("div",null,r.createElement("h1",null,"This is a placeholder for the employee report."))}function R(){return(0,l.UO)().id,r.createElement("div",null,r.createElement("h1",null,"Editing employee: "))}function D(){var e=function(){return r.createElement("h1",null,"Page Not Found")};return r.createElement(l.Z5,null,r.createElement(l.AW,{path:"/employees",element:r.createElement(T,null)}),r.createElement(l.AW,{path:"/edit/:id",element:r.createElement(R,null)}),r.createElement(l.AW,{path:"/report",element:r.createElement(k,null)}),r.createElement(l.AW,{path:"/",element:r.createElement(l.Fg,{replace:!0,to:"/employees"})}),r.createElement(l.AW,{path:"*",element:r.createElement(e,null)}))}function C(){return r.createElement("nav",null,r.createElement("a",{href:"/"},"Home")," | ",r.createElement("a",{href:"/#/employees"},"All Employees")," | ",r.createElement("a",{href:"/#/report"},"Reports"))}function A(){return r.createElement("div",null,r.createElement(C,null),r.createElement(D,null))}var B=n(655);(0,o.s)(document.getElementById("content")).render(r.createElement(B.UT,null,r.createElement(r.StrictMode,null,r.createElement(A,null))))}},o={};function l(e){var t=o[e];if(void 0!==t)return t.exports;var n=o[e]={exports:{}};return r[e](n,n.exports,l),n.exports}l.m=r,e=[],l.O=(t,n,r,o)=>{if(!n){var c=1/0;for(f=0;f<e.length;f++){for(var[n,r,o]=e[f],u=!0,a=0;a<n.length;a++)(!1&o||c>=o)&&Object.keys(l.O).every((e=>l.O[e](n[a])))?n.splice(a--,1):(u=!1,o<c&&(c=o));if(u){e.splice(f--,1);var i=r();void 0!==i&&(t=i)}}return t}o=o||0;for(var f=e.length;f>0&&e[f-1][2]>o;f--)e[f]=e[f-1];e[f]=[n,r,o]},n=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__,l.t=function(e,r){if(1&r&&(e=this(e)),8&r)return e;if("object"==typeof e&&e){if(4&r&&e.__esModule)return e;if(16&r&&"function"==typeof e.then)return e}var o=Object.create(null);l.r(o);var c={};t=t||[null,n({}),n([]),n(n)];for(var u=2&r&&e;"object"==typeof u&&!~t.indexOf(u);u=n(u))Object.getOwnPropertyNames(u).forEach((t=>c[t]=()=>e[t]));return c.default=()=>e,l.d(o,c),o},l.d=(e,t)=>{for(var n in t)l.o(t,n)&&!l.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},l.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),l.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{var e={624:0};l.O.j=t=>0===e[t];var t=(t,n)=>{var r,o,[c,u,a]=n,i=0;if(c.some((t=>0!==e[t]))){for(r in u)l.o(u,r)&&(l.m[r]=u[r]);if(a)var f=a(l)}for(t&&t(n);i<c.length;i++)o=c[i],l.o(e,o)&&e[o]&&e[o][0](),e[o]=0;return l.O(f)},n=self.webpackChunkmodule01=self.webpackChunkmodule01||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))})();var c=l.O(void 0,[736],(()=>l(972)));c=l.O(c)})();
//# sourceMappingURL=employees.bundle.js.map