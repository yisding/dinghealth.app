_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[6],{"/0+H":function(e,t,n){"use strict";t.__esModule=!0,t.isInAmpMode=o,t.useAmp=function(){return o(a.default.useContext(s.AmpStateContext))};var r,a=(r=n("q1tI"))&&r.__esModule?r:{default:r},s=n("lwAK");function o(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.ampFirst,n=void 0!==t&&t,r=e.hybrid,a=void 0!==r&&r,s=e.hasQuery,o=void 0!==s&&s;return n||a&&o}},"7W2i":function(e,t,n){var r=n("SksO");e.exports=function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&r(e,t)}},"8Kt/":function(e,t,n){"use strict";n("lSNA");t.__esModule=!0,t.defaultHead=d,t.default=void 0;var r,a=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var t=l();if(t&&t.has(e))return t.get(e);var n={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var a in e)if(Object.prototype.hasOwnProperty.call(e,a)){var s=r?Object.getOwnPropertyDescriptor(e,a):null;s&&(s.get||s.set)?Object.defineProperty(n,a,s):n[a]=e[a]}n.default=e,t&&t.set(e,n);return n}(n("q1tI")),s=(r=n("Xuae"))&&r.__esModule?r:{default:r},o=n("lwAK"),i=n("FYa8"),c=n("/0+H");function l(){if("function"!==typeof WeakMap)return null;var e=new WeakMap;return l=function(){return e},e}function d(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=[a.default.createElement("meta",{charSet:"utf-8"})];return e||t.push(a.default.createElement("meta",{name:"viewport",content:"width=device-width"})),t}function u(e,t){return"string"===typeof t||"number"===typeof t?e:t.type===a.default.Fragment?e.concat(a.default.Children.toArray(t.props.children).reduce((function(e,t){return"string"===typeof t||"number"===typeof t?e:e.concat(t)}),[])):e.concat(t)}var h=["name","httpEquiv","charSet","itemProp"];function p(e,t){return e.reduce((function(e,t){var n=a.default.Children.toArray(t.props.children);return e.concat(n)}),[]).reduce(u,[]).reverse().concat(d(t.inAmpMode)).filter(function(){var e=new Set,t=new Set,n=new Set,r={};return function(a){var s=!0,o=!1;if(a.key&&"number"!==typeof a.key&&a.key.indexOf("$")>0){o=!0;var i=a.key.slice(a.key.indexOf("$")+1);e.has(i)?s=!1:e.add(i)}switch(a.type){case"title":case"base":t.has(a.type)?s=!1:t.add(a.type);break;case"meta":for(var c=0,l=h.length;c<l;c++){var d=h[c];if(a.props.hasOwnProperty(d))if("charSet"===d)n.has(d)?s=!1:n.add(d);else{var u=a.props[d],p=r[d]||new Set;"name"===d&&o||!p.has(u)?(p.add(u),r[d]=p):s=!1}}}return s}}()).reverse().map((function(e,t){var n=e.key||t;return a.default.cloneElement(e,{key:n})}))}function x(e){var t=e.children,n=(0,a.useContext)(o.AmpStateContext),r=(0,a.useContext)(i.HeadManagerContext);return a.default.createElement(s.default,{reduceComponentsToState:p,headManager:r,inAmpMode:(0,c.isInAmpMode)(n)},t)}x.rewind=function(){};var f=x;t.default=f},Bnag:function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},EbDI:function(e,t){e.exports=function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}},FYa8:function(e,t,n){"use strict";var r;t.__esModule=!0,t.HeadManagerContext=void 0;var a=((r=n("q1tI"))&&r.__esModule?r:{default:r}).default.createContext({});t.HeadManagerContext=a},Ijbi:function(e,t,n){var r=n("WkPL");e.exports=function(e){if(Array.isArray(e))return r(e)}},Nsbk:function(e,t){function n(t){return e.exports=n=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},n(t)}e.exports=n},PJYZ:function(e,t){e.exports=function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}},Qetd:function(e,t,n){"use strict";var r=Object.assign.bind(Object);e.exports=r,e.exports.default=e.exports},RIqP:function(e,t,n){var r=n("Ijbi"),a=n("EbDI"),s=n("ZhPi"),o=n("Bnag");e.exports=function(e){return r(e)||a(e)||s(e)||o()}},RNiq:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return b}));var r=n("nKUr"),a=n("q1tI"),s=n("g4pe"),o=n.n(s),i={appName:"Ding Health",appHomeTitle:"Take control of your health.",appHomeDesc:"Ding Health is your personal health assistant which will help you track and monitor your health.",joinWaitlist:"Join the Waitlist",yourEmail:"Your Email",signUpSuccess:"Sign Up Successful",signUpError:"Sign Up Failure. Please try again later",invalidEmail:"Please provide valid email address",section2:[{title:"Record",desc:"Record what is going on with your health."},{title:"Track",desc:"Track your health over time. Is it getting better? Worse? Are your treatments working or do they need to change?"},{title:"Share",desc:"Have more productive conversations with your medical providers by sharing concrete data on your health."}],section3:[{title:"Understand Your Health",points:["When you go for your expen ive doctor's visit, you need to make sure you know everything there is to know.","One of the things we do is we forget about what our problems are.","Powered by Voice Technologies","No surveys. No checklists. Just talk to us and let us figure it out."]},{title:"Built to understand health",points:["We have trained the assistant on over 1,000 medical symptoms and conditions and we're adding more every day."]},{title:"Driven by Artificial Intelligence",points:["Filter through the noise and get into what's really important. Our AI will make sure you get the data you need and nothing important falls through the tracks."]}],section4:{title:"Privacy is our first priority",desc:"Data privacy is one of our most important principles. Your data is encrypted with industry leading encryption on your device, in transit, and at rest. We don't sell your data, ever."}},c=!1,l=function(e){var t=e.href,n=Object(a.useRef)(!1),r=Object(a.useState)(!1)[1];return Object(a.useEffect)((function(){n.current||(c=!0,n.current=!0,r(!0))}),[]),Object(a.createElement)(o.a,null,Object(a.createElement)("link",{rel:"preconnect",href:"https://fonts.gstatic.com",crossOrigin:"anonymous"}),Object(a.createElement)("link",{rel:"preload",as:"style",href:t}),Object(a.createElement)("link",{href:t,rel:"stylesheet",media:c?"all":"print"}))};function d(){return Object(r.jsx)("header",{className:"pt-4 px-4 py-2",children:Object(r.jsxs)("div",{className:"max-w-6xl m-auto flex",children:[Object(r.jsx)("h1",{className:"flex-1 text-center md:text-left text-purple-800 text-4xl font-extrabold pt-1",children:Object(r.jsx)("a",{href:"/",children:"\u2719 Ding Health"})}),Object(r.jsx)("div",{className:"flex-0"})]})})}function u(){return Object(r.jsx)("footer",{className:"bg-indigo-900 text-white text-center",children:Object(r.jsxs)("div",{className:"max-w-6xl m-auto py-8 flex flex-col md:flex-row",children:[Object(r.jsx)("div",{className:"py-2 flex-1 md:w-8",children:Object(r.jsx)("a",{href:"https://www.linkedin.com",children:"Follow us on LinkedIn"})}),Object(r.jsx)("div",{className:"py-2 flex-1 md:w-8",children:Object(r.jsx)("a",{href:"https://www.facebook.com",children:"Follow us on Facebook"})}),Object(r.jsx)("div",{className:"py-2 flex-1 md:w-8",children:Object(r.jsx)("a",{href:"mailto:info@dinghealth.app",children:"Contact Us by Email"})})]})})}function h(){return Object(r.jsx)("section",{className:"py-8 bg-purple-900 text-white px-4",children:Object(r.jsxs)("div",{className:"px-4 max-w-4xl mx-auto flex flex-col md:flex-row",children:[Object(r.jsx)("div",{className:"p-4 max-w-full flex-grow-0 text-center",children:Object(r.jsx)("img",{src:"/pexels-anna-shvets-4015018.jpg",alt:"couple on beach",className:"text-center",height:411,width:274})}),Object(r.jsxs)("div",{className:"pl-4 md:py-20 flex-1",children:[Object(r.jsxs)("h2",{className:"py-4 font-bold text-3xl",children:["Our goal is to put ",Object(r.jsx)("span",{className:"italic",children:"you"})," back in the driver\u2019s seat of ",Object(r.jsx)("span",{className:"italic",children:"your"})," health."]}),Object(r.jsx)("p",{className:"pb-4",children:"Ding Health is inspired by our founders\u2019 own experiences dealing with the healthcare system. We felt like we were along for a rollercoaster ride of 15 minute doctor\u2019s visits, scrambling to remember our symptoms and the doctor\u2019s recommendation, and mystery-box hospital bills afterwards."}),Object(r.jsx)("p",{children:"We believe you deserve better, and we\u2019re here to help you."})]})]})})}function p(){return Object(r.jsx)("section",{className:"py-8 bg-purple-300 px-4",children:Object(r.jsxs)("div",{className:"px-4 max-w-4xl mx-auto",children:[Object(r.jsx)("h2",{className:"text-gray-800 text-3xl font-extrabold py-4",children:"Your Privacy is Our Top Priority"}),Object(r.jsx)("p",{className:"text-gray-600",children:"Data privacy is one of our most important principles. Your data is encrypted with industry leading AES encryption on your device, in transit, and at rest. We don't sell your data, ever."})]})})}function x(){var e=Object(a.useState)(""),t=e[0],n=e[1],s=Object(a.useState)(""),o=(s[0],s[1]),c=Object(a.useState)(""),l=(c[0],c[1]);function d(e){e&&e.preventDefault(),t&&t.length>0&&-1!=t.indexOf("@")?window.location.href="mailto:alpha@dinghealth.app?Subject=Alpha signup from ".concat(t):o(i.invalidEmail)}var u={width:"280px"};return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsxs)("div",{className:"pt-16 px-4 max-w-4xl m-auto",children:[Object(r.jsxs)("p",{className:"text-center text-4xl font-black text-gray-700",children:["Take back control of ",Object(r.jsx)("span",{className:"text-purple-700",children:"your"})," ","health."]}),Object(r.jsxs)("p",{className:"pt-8 pb-2 text-center text-xl",children:["Ding Health is your pocket health assistant that helps you"," ",Object(r.jsx)("span",{className:"text-purple-700 font-bold",children:"track symptoms"}),","," ",Object(r.jsx)("span",{className:"text-purple-700 font-bold",children:"identify concerns"}),", and"," ",Object(r.jsx)("span",{className:"text-purple-700 font-bold",children:"find the affordable care you deserve."})," "]}),Object(r.jsxs)("form",{className:"py-8 text-center",children:[Object(r.jsx)("div",{className:"",children:Object(r.jsx)("input",{className:"rounded-lg py-2 px-4 border-2 md:w-96 border-black",type:"email",name:"email",placeholder:"your email",onChange:function(e){n(e.currentTarget.value),o(""),l("")},onKeyUp:function(e){13!==e.keyCode&&13!==e.which||d()},style:u})}),Object(r.jsx)("div",{className:"pt-4",children:Object(r.jsx)("input",{className:"rounded-lg shadow py-2 px-4 bg-blue-700 hover:bg-blue-500 text-white text-lg font-medium",onClick:d,type:"submit",value:"Join the waitlist",style:u})})]})]}),Object(r.jsx)("div",{className:"py-8 px-4 flex",children:Object(r.jsxs)("div",{className:"border-2 border-gray-600 px-2 py-2 rounded-xl bg-gray-300 m-auto flex flex-row",children:[Object(r.jsx)("div",{className:"px-2",children:Object(r.jsx)("img",{src:"/screenshot1.png",alt:"homescreen screenshot",width:214,height:463})}),Object(r.jsx)("div",{className:"px-2",children:Object(r.jsx)("img",{src:"/screenshot2.png",alt:"symptoms summary screenshot",width:214,height:463})}),Object(r.jsx)("div",{className:"px-2",children:Object(r.jsx)("img",{src:"/screenshot3.png",alt:"find a doctor screenshot",width:214,height:463})})]})})]})}function f(){return Object(r.jsx)("section",{className:"bg-gray-100",children:Object(r.jsxs)("div",{className:"py-8 px-4  max-w-6xl m-auto ",children:[Object(r.jsxs)("h2",{className:"py-2 text-center text-black text-4xl font-extrabold",children:["How does it work? It's as easy as"," ",Object(r.jsx)("span",{className:"text-purple-700",children:"1, 2, 3."})]}),Object(r.jsxs)("div",{className:"m-4 grid grid-flow-col grid-cols-1 md:grid-cols-3 grid-rows-6-auto md:grid-rows-2-auto gap-x-4",children:[Object(r.jsxs)("div",{className:"bg-white rounded-t-xl p-4 mt-2 flex",children:[Object(r.jsx)("div",{className:"w-10 text-purple-800 text-3xl font-extrabold",children:"1"}),Object(r.jsxs)("div",{className:"flex-1",children:[Object(r.jsx)("h3",{className:"text-purple-700 text-2xl font-bold",children:"Record"}),Object(r.jsx)("div",{className:"pt-2",children:"Record your symptoms and health condition."})]})]}),Object(r.jsx)("div",{className:"bg-white rounded-b-xl mb-2",children:Object(r.jsx)("div",{className:"bg-gray-200 mt-2 mb-4 mx-4 p-4 h-5/6",children:Object(r.jsxs)("ul",{className:"list-disc list-inside",children:[Object(r.jsx)("li",{children:"Just tell us how you're feeling. We'll do the rest."}),Object(r.jsx)("li",{children:"Reduce onboarding friction"}),Object(r.jsx)("li",{children:"Available on Google Home and Alexa (soon)."})]})})}),Object(r.jsxs)("div",{className:"bg-white rounded-t-xl p-4 mt-2 flex",children:[Object(r.jsx)("div",{className:"w-10 text-purple-800 text-3xl font-extrabold",children:"2"}),Object(r.jsxs)("div",{className:"flex-1",children:[Object(r.jsx)("h3",{className:"text-purple-700 text-2xl font-bold",children:"Track"}),Object(r.jsx)("div",{className:"pt-2",children:"Track your health over time."})]})]}),Object(r.jsx)("div",{className:"bg-white rounded-b-xl mb-2",children:Object(r.jsx)("div",{className:"bg-gray-200 mt-2 mb-4 mx-4 p-4 h-5/6",children:Object(r.jsxs)("ul",{className:"list-disc list-inside",children:[Object(r.jsx)("li",{children:"How many days have you had a cough over the last month?"}),Object(r.jsx)("li",{children:"When do you normally have heartburn?"}),Object(r.jsx)("li",{children:"Has your knee pain gotten better since starting Physical Therapy?"})]})})}),Object(r.jsxs)("div",{className:"bg-white rounded-t-xl p-4 mt-2 flex",children:[Object(r.jsx)("div",{className:"w-10 text-purple-800 text-3xl font-extrabold",children:"3"}),Object(r.jsxs)("div",{className:"flex-1",children:[Object(r.jsx)("h3",{className:"text-purple-700 text-2xl font-bold",children:"Get Care"}),Object(r.jsx)("div",{className:"pt-2",children:"We help you find the most affordable care options and help you plan your visit with your doctor."})]})]}),Object(r.jsx)("div",{className:"bg-white rounded-b-xl mb-2",children:Object(r.jsx)("div",{className:"bg-gray-200 mt-2 mb-4 mx-4 p-4 h-5/6",children:Object(r.jsxs)("ul",{className:"list-disc list-inside",children:[Object(r.jsx)("li",{children:"Just tell us what kind of procedure you're looking for."}),Object(r.jsx)("li",{children:"We will find you a list of doctors in the area and their cash rates."}),Object(r.jsx)("li",{children:"Save hundreds of dollars by going to a different provider."})]})})})]}),Object(r.jsx)("p",{className:"text-blue-500 text-center m-auto",children:Object(r.jsx)("a",{href:"/Demo.mp4",children:"See Ding Health in action"})})]})})}function m(){return Object(r.jsx)("section",{className:"py-8 px-4 text-center",children:Object(r.jsxs)("div",{className:"max-w-6xl m-auto",children:[Object(r.jsx)("h2",{className:"text-purple-700 text-4xl font-extrabold py-4",children:"Powered by AI"}),Object(r.jsxs)("div",{className:"flex flex-wrap md:flex-nowrap",children:[Object(r.jsxs)("div",{className:"shadow-md px-4 py-4 bg-gray-300 mx-4 my-2 rounded-xl w-full md:w-1/3",children:[Object(r.jsx)("h3",{className:"text-xl py-2",children:"Speech to Text"}),Object(r.jsx)("div",{children:"We firmly believe that speech is the most convenient, most natural way for humans to communicate"})]}),Object(r.jsxs)("div",{className:"shadow-md px-4 py-4 bg-gray-300 mx-4 my-2 rounded-xl w-full md:w-1/3",children:[Object(r.jsx)("h3",{className:"text-xl py-2",children:"Medical Term Recognition"}),Object(r.jsx)("div",{children:"We have trained our model on an ever expanding set of medical terms including symptoms and diseases."})]}),Object(r.jsxs)("div",{className:"shadow-md px-4 py-4 bg-gray-300 mx-4 my-2 rounded-xl w-full md:w-1/3",children:[Object(r.jsx)("h3",{className:"text-xl py-2",children:"Summarization"}),Object(r.jsx)("div",{children:"Our models find the most relevant information you have given us and present that to you in an easy to understand, easy to digest format."})]})]})]})})}function b(){return Object(r.jsxs)("div",{style:{fontFamily:"Nunito Sans"},children:[Object(r.jsx)(l,{href:"https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@400;600;700;800&display=swap",rel:"stylesheet"}),Object(r.jsxs)(o.a,{children:[Object(r.jsx)("title",{children:i.appName}),Object(r.jsx)("link",{rel:"icon",href:"/favicon.ico"})]}),Object(r.jsxs)("div",{className:"",children:[Object(r.jsx)(d,{}),Object(r.jsx)(x,{})]}),Object(r.jsx)(h,{}),Object(r.jsx)(f,{}),Object(r.jsx)(p,{}),Object(r.jsx)(m,{}),Object(r.jsx)(u,{})]})}},SksO:function(e,t){function n(t,r){return e.exports=n=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},n(t,r)}e.exports=n},W8MJ:function(e,t){function n(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}e.exports=function(e,t,r){return t&&n(e.prototype,t),r&&n(e,r),e}},WkPL:function(e,t){e.exports=function(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}},Xuae:function(e,t,n){"use strict";var r=n("RIqP"),a=n("lwsE"),s=n("W8MJ"),o=(n("PJYZ"),n("7W2i")),i=n("a1gu"),c=n("Nsbk");function l(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=c(e);if(t){var a=c(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return i(this,n)}}t.__esModule=!0,t.default=void 0;var d=n("q1tI"),u=function(e){o(n,e);var t=l(n);function n(e){var s;return a(this,n),(s=t.call(this,e))._hasHeadManager=void 0,s.emitChange=function(){s._hasHeadManager&&s.props.headManager.updateHead(s.props.reduceComponentsToState(r(s.props.headManager.mountedInstances),s.props))},s._hasHeadManager=s.props.headManager&&s.props.headManager.mountedInstances,s}return s(n,[{key:"componentDidMount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.add(this),this.emitChange()}},{key:"componentDidUpdate",value:function(){this.emitChange()}},{key:"componentWillUnmount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.delete(this),this.emitChange()}},{key:"render",value:function(){return null}}]),n}(d.Component);t.default=u},ZhPi:function(e,t,n){var r=n("WkPL");e.exports=function(e,t){if(e){if("string"===typeof e)return r(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?r(e,t):void 0}}},a1gu:function(e,t,n){var r=n("cDf5"),a=n("PJYZ");e.exports=function(e,t){return!t||"object"!==r(t)&&"function"!==typeof t?a(e):t}},cDf5:function(e,t){function n(t){return"function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?e.exports=n=function(e){return typeof e}:e.exports=n=function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},n(t)}e.exports=n},g4pe:function(e,t,n){e.exports=n("8Kt/")},lSNA:function(e,t){e.exports=function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}},lwAK:function(e,t,n){"use strict";var r;t.__esModule=!0,t.AmpStateContext=void 0;var a=((r=n("q1tI"))&&r.__esModule?r:{default:r}).default.createContext({});t.AmpStateContext=a},lwsE:function(e,t){e.exports=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}},vlRD:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n("RNiq")}])}},[["vlRD",0,1]]]);