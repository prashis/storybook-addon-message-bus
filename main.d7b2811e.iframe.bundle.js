(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{"./dist/esm/preset/preview.js-generated-config-entry.js":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);var preview_namespaceObject={};__webpack_require__.r(preview_namespaceObject),__webpack_require__.d(preview_namespaceObject,"decorators",(function(){return decorators}));__webpack_require__("./node_modules/core-js/modules/es.object.keys.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.js"),__webpack_require__("./node_modules/core-js/modules/es.array.filter.js"),__webpack_require__("./node_modules/core-js/modules/es.object.get-own-property-descriptor.js"),__webpack_require__("./node_modules/core-js/modules/es.array.for-each.js"),__webpack_require__("./node_modules/core-js/modules/web.dom-collections.for-each.js"),__webpack_require__("./node_modules/core-js/modules/es.object.get-own-property-descriptors.js"),__webpack_require__("./node_modules/core-js/modules/es.object.define-properties.js"),__webpack_require__("./node_modules/core-js/modules/es.object.define-property.js");var ClientApi=__webpack_require__("./node_modules/@storybook/client-api/dist/esm/ClientApi.js"),esm=__webpack_require__("./node_modules/@storybook/client-logger/dist/esm/index.js"),decorators=[];function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _defineProperty(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}Object.keys(preview_namespaceObject).forEach((function(key){var value=preview_namespaceObject[key];switch(key){case"args":case"argTypes":return esm.a.warn("Invalid args/argTypes in config, ignoring.",JSON.stringify(value));case"decorators":return value.forEach((function(decorator){return Object(ClientApi.d)(decorator,!1)}));case"loaders":return value.forEach((function(loader){return Object(ClientApi.e)(loader,!1)}));case"parameters":return Object(ClientApi.f)(function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){_defineProperty(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}({},value),!1);case"argTypesEnhancers":return value.forEach((function(enhancer){return Object(ClientApi.b)(enhancer)}));case"argsEnhancers":return value.forEach((function(enhancer){return Object(ClientApi.c)(enhancer)}));case"render":return Object(ClientApi.g)(value);case"globals":case"globalTypes":var v={};return v[key]=value,Object(ClientApi.f)(v,!1);case"decorateStory":case"renderToDOM":return null;default:return console.log(key+" was not supported :( !")}}))},"./generated-stories-entry.js":function(module,exports,__webpack_require__){"use strict";(function(module){(0,__webpack_require__("./node_modules/@storybook/react/dist/esm/client/index.js").configure)([__webpack_require__("./stories sync recursive ^\\.(?:(?:^|\\/|(?:(?:(?!(?:^|\\/)\\.).)*?)\\/)(?!\\.)(?=.)[^/]*?\\.stories\\.mdx)$"),__webpack_require__("./stories sync recursive ^\\.(?:(?:^|\\/|(?:(?:(?!(?:^|\\/)\\.).)*?)\\/)(?!\\.)(?=.)[^/]*?\\.stories\\.(js|jsx|ts|tsx))$")],module,!1)}).call(this,__webpack_require__("./node_modules/webpack/buildin/module.js")(module))},"./src/index.ts":function(module,__webpack_exports__,__webpack_require__){"use strict";(function(module){var _withMessageBus__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/withMessageBus.ts");__webpack_require__.d(__webpack_exports__,"a",(function(){return _withMessageBus__WEBPACK_IMPORTED_MODULE_0__.a})),module&&module.hot&&module.hot.decline&&module.hot.decline()}).call(this,__webpack_require__("./node_modules/webpack/buildin/harmony-module.js")(module))},"./src/withMessageBus.ts":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",(function(){return withMessageBus_withMessageBus}));__webpack_require__("./node_modules/core-js/modules/es.function.name.js");var make_decorator=__webpack_require__("./node_modules/@storybook/addons/dist/esm/make-decorator.js"),hooks=__webpack_require__("./node_modules/@storybook/addons/dist/esm/hooks.js"),ADDON_ID="storybook/addon-message-bus",EVENTS_EMIT=ADDON_ID+"/event/emit",withMessageBus_withMessageBus=function withMessageBus(_ref){var emitter=_ref.emitter;return Object(make_decorator.a)({name:"storybook-addon-decorator",parameterName:"events",wrapper:function wrapper(storyFn,context){var _useChannel;Object(hooks.c)(((_useChannel={})[EVENTS_EMIT]=function(_ref2){var name=_ref2.name,payload=_ref2.payload;emitter(name,payload)},_useChannel));return storyFn(context)}})}},"./stories sync recursive ^\\.(?:(?:^|\\/|(?:(?:(?!(?:^|\\/)\\.).)*?)\\/)(?!\\.)(?=.)[^/]*?\\.stories\\.(js|jsx|ts|tsx))$":function(module,exports,__webpack_require__){var map={"./Notifications.stories.js":"./stories/Notifications.stories.js"};function webpackContext(req){var id=webpackContextResolve(req);return __webpack_require__(id)}function webpackContextResolve(req){if(!__webpack_require__.o(map,req)){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}return map[req]}webpackContext.keys=function webpackContextKeys(){return Object.keys(map)},webpackContext.resolve=webpackContextResolve,module.exports=webpackContext,webpackContext.id="./stories sync recursive ^\\.(?:(?:^|\\/|(?:(?:(?!(?:^|\\/)\\.).)*?)\\/)(?!\\.)(?=.)[^/]*?\\.stories\\.(js|jsx|ts|tsx))$"},"./stories sync recursive ^\\.(?:(?:^|\\/|(?:(?:(?!(?:^|\\/)\\.).)*?)\\/)(?!\\.)(?=.)[^/]*?\\.stories\\.mdx)$":function(module,exports){function webpackEmptyContext(req){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}webpackEmptyContext.keys=function(){return[]},webpackEmptyContext.resolve=webpackEmptyContext,module.exports=webpackEmptyContext,webpackEmptyContext.id="./stories sync recursive ^\\.(?:(?:^|\\/|(?:(?:(?!(?:^|\\/)\\.).)*?)\\/)(?!\\.)(?=.)[^/]*?\\.stories\\.mdx)$"},"./stories/Notifications.stories.js":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"List",(function(){return Notifications_stories_List}));__webpack_require__("./node_modules/core-js/modules/es.function.bind.js"),__webpack_require__("./node_modules/core-js/modules/es.object.assign.js");var _templateObject,_templateObject2,_templateObject3,_templateObject4,_templateObject5,_templateObject6,_templateObject7,_templateObject8,_templateObject9,_templateObject10,_templateObject11,react=__webpack_require__("./node_modules/react/index.js"),esm=(__webpack_require__("./node_modules/core-js/modules/es.array.slice.js"),__webpack_require__("./node_modules/core-js/modules/es.array.is-array.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.description.js"),__webpack_require__("./node_modules/core-js/modules/es.object.to-string.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.iterator.js"),__webpack_require__("./node_modules/core-js/modules/es.string.iterator.js"),__webpack_require__("./node_modules/core-js/modules/es.array.iterator.js"),__webpack_require__("./node_modules/core-js/modules/web.dom-collections.iterator.js"),__webpack_require__("./node_modules/core-js/modules/es.function.name.js"),__webpack_require__("./node_modules/core-js/modules/es.array.from.js"),__webpack_require__("./node_modules/core-js/modules/es.array.concat.js"),__webpack_require__("./node_modules/core-js/modules/es.array.map.js"),__webpack_require__("./node_modules/@storybook/theming/dist/esm/index.js")),core_browser_esm=__webpack_require__("./node_modules/@emotion/core/dist/core.browser.esm.js"),nanobus=__webpack_require__("./node_modules/nanobus/index.js"),bus=__webpack_require__.n(nanobus)()(),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");function _slicedToArray(arr,i){return function _arrayWithHoles(arr){if(Array.isArray(arr))return arr}(arr)||function _iterableToArrayLimit(arr,i){var _i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null==_i)return;var _s,_e,_arr=[],_n=!0,_d=!1;try{for(_i=_i.call(arr);!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}(arr,i)||function _unsupportedIterableToArray(o,minLen){if(!o)return;if("string"==typeof o)return _arrayLikeToArray(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);"Object"===n&&o.constructor&&(n=o.constructor.name);if("Map"===n||"Set"===n)return Array.from(o);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _arrayLikeToArray(o,minLen)}(arr,i)||function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function _arrayLikeToArray(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2}function _taggedTemplateLiteralLoose(strings,raw){return raw||(raw=strings.slice(0)),strings.raw=raw,strings}var useState=react.useState,useEffect=react.useEffect,List=esm.styled.ul(_templateObject||(_templateObject=_taggedTemplateLiteralLoose(["\n  list-style-type: none;\n"]))),ListItem=esm.styled.li(_templateObject2||(_templateObject2=_taggedTemplateLiteralLoose(["\n  margin-top: 0.75rem;\n"]))),Wrapper=esm.styled.div(_templateObject3||(_templateObject3=_taggedTemplateLiteralLoose(["\n  overflow: hidden;\n  padding-left: 0.25rem;\n  padding-right: 0.25rem;\n  padding-top: 0.5rem;\n  padding-bottom: 0.5rem;\n  color: #374151;\n  font-size: 0.75rem;\n  line-height: 1rem;\n  font-weight: 500;\n  font-family: Arial, Helvetica, sans-serif;\n  display: inline-flex;\n  align-items: center;\n  border-radius: 0.375rem;\n  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);\n  ","\n"])),(function(_ref){switch(_ref.type){case"success":return Object(core_browser_esm.c)(_templateObject4||(_templateObject4=_taggedTemplateLiteralLoose(["\n          background-color: #a7f3d0;\n        "])));case"error":return Object(core_browser_esm.c)(_templateObject5||(_templateObject5=_taggedTemplateLiteralLoose(["\n          background-color: #fecaca;\n        "])));case"warning":return Object(core_browser_esm.c)(_templateObject6||(_templateObject6=_taggedTemplateLiteralLoose(["\n          background-color: #fde68a;\n        "])))}})),IconWrapper=esm.styled.div(_templateObject7||(_templateObject7=_taggedTemplateLiteralLoose(["\n  display: inline-flex;\n  align-items: center;\n  padding-left: 0.25rem;\n  padding-right: 0.25rem;\n  ","\n"])),(function(_ref2){switch(_ref2.type){case"success":return Object(core_browser_esm.c)(_templateObject8||(_templateObject8=_taggedTemplateLiteralLoose(["\n          color: #047857;\n        "])));case"error":return Object(core_browser_esm.c)(_templateObject9||(_templateObject9=_taggedTemplateLiteralLoose(["\n          color: #b91c1c;\n        "])));case"warning":return Object(core_browser_esm.c)(_templateObject10||(_templateObject10=_taggedTemplateLiteralLoose(["\n          color: #f59e0b;\n        "])));default:return Object(core_browser_esm.c)(_templateObject11||(_templateObject11=_taggedTemplateLiteralLoose(["\n          color: #374151;\n        "])))}})),Notifications_ErrorIcon=function ErrorIcon(){return Object(jsx_runtime.jsx)("svg",{width:"1rem",height:"1rem",viewBox:"0 0 20 20",fill:"currentColor",children:Object(jsx_runtime.jsx)("path",{fillRule:"evenodd",d:"M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z",clipRule:"evenodd"})})};Notifications_ErrorIcon.displayName="ErrorIcon";var Notifications_WarningIcon=function WarningIcon(){return Object(jsx_runtime.jsx)("svg",{width:"1rem",height:"1rem",viewBox:"0 0 20 20",fill:"currentColor",children:Object(jsx_runtime.jsx)("path",{fillRule:"evenodd",d:"M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z",clipRule:"evenodd"})})};Notifications_WarningIcon.displayName="WarningIcon";var Notifications_SuccessIcon=function SuccessIcon(){return Object(jsx_runtime.jsx)("svg",{width:"1rem",height:"1rem",viewBox:"0 0 20 20",fill:"currentColor",children:Object(jsx_runtime.jsx)("path",{fillRule:"evenodd",d:"M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z",clipRule:"evenodd"})})};Notifications_SuccessIcon.displayName="SuccessIcon";var Notifications_XIcon=function XIcon(){return Object(jsx_runtime.jsx)("svg",{width:"1rem",height:"1rem",viewBox:"0 0 20 20",fill:"currentColor",children:Object(jsx_runtime.jsx)("path",{fillRule:"evenodd",d:"M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z",clipRule:"evenodd"})})};Notifications_XIcon.displayName="XIcon";var Notifications_Notification=function Notification(_ref3){var type=_ref3.type,message=_ref3.message;return Object(jsx_runtime.jsxs)(Wrapper,{type:type,children:[Object(jsx_runtime.jsx)(IconWrapper,{type:type,children:function renderNotificationIcon(){switch(type){case"error":return Object(jsx_runtime.jsx)(Notifications_ErrorIcon,{});case"warning":return Object(jsx_runtime.jsx)(Notifications_WarningIcon,{});case"success":return Object(jsx_runtime.jsx)(Notifications_SuccessIcon,{});default:return null}}()}),Object(jsx_runtime.jsx)("div",{children:message}),Object(jsx_runtime.jsx)(IconWrapper,{type:"",children:Object(jsx_runtime.jsx)(Notifications_XIcon,{})})]})};Notifications_Notification.displayName="Notification";var Notifications_Notifications=function Notifications(){var _useState2=_slicedToArray(useState([]),2),notifications=_useState2[0],setNotifications=_useState2[1];return useEffect((function(){bus.on("notification.add",(function(payload){setNotifications(notifications.concat(payload))}))}),[notifications]),Object(jsx_runtime.jsx)(List,{children:notifications.map((function(notification,index){return Object(jsx_runtime.jsx)(ListItem,{children:Object(jsx_runtime.jsx)(Notifications_Notification,Object.assign({},notification))},"test-notification-"+index)}))})};Notifications_Notifications.displayName="Notifications",Notifications_Notifications.propTypes={},Notifications_Notifications.defaultProps={};var src=__webpack_require__("./src/index.ts"),Notifications_stories_Template=(__webpack_exports__.default={title:"Example/Notifications",decorators:[Object(src.a)({emitter:function emitter(name,payload){bus.emit(name,payload)}})],component:Notifications_Notifications},function Template(){return Object(jsx_runtime.jsx)(Notifications_Notifications,{})});Notifications_stories_Template.displayName="Template";var Notifications_stories_List=Notifications_stories_Template.bind({});Notifications_stories_List.parameters={events:[{name:"notification.add",payload:{type:"success",message:"Illo et aspernatur saepe exercitationem fugit tenetur."}}]},Notifications_stories_List.parameters=Object.assign({storySource:{source:"() => <Notifications />"}},Notifications_stories_List.parameters)},"./storybook-init-framework-entry.js":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);__webpack_require__("./node_modules/@storybook/react/dist/esm/client/index.js")},0:function(module,exports,__webpack_require__){__webpack_require__("./node_modules/@storybook/core-client/dist/esm/globals/polyfills.js"),__webpack_require__("./node_modules/@storybook/core-client/dist/esm/globals/globals.js"),__webpack_require__("./storybook-init-framework-entry.js"),__webpack_require__("./node_modules/@storybook/addon-essentials/node_modules/@storybook/addon-docs/dist/esm/frameworks/common/config.js-generated-config-entry.js"),__webpack_require__("./node_modules/@storybook/addon-essentials/node_modules/@storybook/addon-docs/dist/esm/frameworks/react/config.js-generated-config-entry.js"),__webpack_require__("./node_modules/@storybook/react/dist/esm/client/preview/config-generated-config-entry.js"),__webpack_require__("./dist/esm/preset/preview.js-generated-config-entry.js"),__webpack_require__("./node_modules/@storybook/addon-actions/dist/esm/preset/addDecorator.js-generated-config-entry.js"),__webpack_require__("./node_modules/@storybook/addon-actions/dist/esm/preset/addArgs.js-generated-config-entry.js"),__webpack_require__("./node_modules/@storybook/addon-backgrounds/dist/esm/preset/addDecorator.js-generated-config-entry.js"),__webpack_require__("./node_modules/@storybook/addon-backgrounds/dist/esm/preset/addParameter.js-generated-config-entry.js"),__webpack_require__("./node_modules/@storybook/addon-measure/dist/esm/preset/addDecorator.js-generated-config-entry.js"),__webpack_require__("./node_modules/@storybook/addon-outline/dist/esm/preset/addDecorator.js-generated-config-entry.js"),module.exports=__webpack_require__("./generated-stories-entry.js")},1:function(module,exports){}},[[0,5,6]]]);