(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["ContactMe-vue"],{"056d":function(e,t,a){"use strict";var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("footer",{staticClass:"body-2"},[e._v("© 2020 Ji Ho Oh")])},s=[],r=a("d4ec"),i=a("262e"),o=a("2caf"),c=a("9ab4"),u=a("60a3"),l=function(e){Object(i["a"])(a,e);var t=Object(o["a"])(a);function a(){return Object(r["a"])(this,a),t.apply(this,arguments)}return a}(u["c"]);l=Object(c["a"])([u["a"]],l);var m=l,d=m,p=a("2877"),f=Object(p["a"])(d,n,s,!1,null,null,null);t["a"]=f.exports},"0f91":function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.EmailJSResponseStatus=t.sendForm=t.send=t.init=void 0;var n=a("3245");Object.defineProperty(t,"EmailJSResponseStatus",{enumerable:!0,get:function(){return n.EmailJSResponseStatus}});var s=a("5129"),r=null,i="https://api.emailjs.com";function o(e,t,a){return void 0===a&&(a={}),new Promise((function(s,r){var i=new XMLHttpRequest;for(var o in i.addEventListener("load",(function(e){var t=new n.EmailJSResponseStatus(e.target);200===t.status||"OK"===t.text?s(t):r(t)})),i.addEventListener("error",(function(e){r(new n.EmailJSResponseStatus(e.target))})),i.open("POST",e,!0),a)i.setRequestHeader(o,a[o]);i.send(t)}))}function c(e){var t=document&&document.getElementById("g-recaptcha-response");return t&&t.value&&(e["g-recaptcha-response"]=t.value),t=null,e}function u(e){return"#"!==e[0]&&"."!==e[0]?"#"+e:e}function l(e,t){r=e,i=t||"https://api.emailjs.com"}function m(e,t,a,n){var s={lib_version:"2.6.4",user_id:n||r,service_id:e,template_id:t,template_params:c(a)};return o(i+"/api/v1.0/email/send",JSON.stringify(s),{"Content-type":"application/json"})}function d(e,t,a,n){if("string"===typeof a&&(a=document.querySelector(u(a))),!a||"FORM"!==a.nodeName)throw"Expected the HTML form element or the style selector of form";s.UI.progressState(a);var c=new FormData(a);return c.append("lib_version","2.6.4"),c.append("service_id",e),c.append("template_id",t),c.append("user_id",n||r),o(i+"/api/v1.0/email/send-form",c).then((function(e){return s.UI.successState(a),e}),(function(e){return s.UI.errorState(a),Promise.reject(e)}))}t.init=l,t.send=m,t.sendForm=d,t.default={init:l,send:m,sendForm:d}},"1b56":function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"page",attrs:{id:"contact-me"}},[a("div",{staticClass:"page-content",attrs:{id:"contact-me-content"}},[a("h1",[e._v("Contact Me")]),e._m(0),a("form",{attrs:{id:"contact-form"}},[a("div",{attrs:{id:"sender-info"}},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.name,expression:"name"}],attrs:{name:"name",type:"text",placeholder:"Your Name (required)"},domProps:{value:e.name},on:{input:function(t){t.target.composing||(e.name=t.target.value)}}}),a("input",{directives:[{name:"model",rawName:"v-model",value:e.email,expression:"email"}],attrs:{name:"email",type:"email",placeholder:"Your Email (required)"},domProps:{value:e.email},on:{input:function(t){t.target.composing||(e.email=t.target.value)}}})]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.subject,expression:"subject"}],attrs:{name:"subject",type:"text",placeholder:"Subject"},domProps:{value:e.subject},on:{input:function(t){t.target.composing||(e.subject=t.target.value)}}}),a("textarea",{directives:[{name:"model",rawName:"v-model",value:e.message,expression:"message"}],attrs:{name:"message",rows:"5",placeholder:"Your Message (required)"},domProps:{value:e.message},on:{input:function(t){t.target.composing||(e.message=t.target.value)}}})]),a("Button",{attrs:{text:"SEND",buttonClass:"small"},on:{clicked:function(t){return e.sendEmail()}}}),a("Button",{attrs:{text:"RESET",buttonClass:"small no-border"},on:{clicked:function(t){return e.resetForm()}}})],1),a("Footer")],1)},s=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("p",[e._v(" I'm always open for any work opportunities or collaborations. If you want to get in touch or just want to share some spicy memes, send me a message by using the form below or by emailing me directly at "),a("a",{attrs:{href:"mailto: ohjiho.sk@gmail.com"}},[e._v("ohjiho.sk@gmail.com")]),e._v(". ")])}],r=a("d4ec"),i=a("bee2"),o=a("262e"),c=a("2caf"),u=(a("b0c0"),a("9ab4")),l=a("60a3"),m=a("056d"),d=a("2a7d"),p=a("0f91"),f=a.n(p),v=function(e){Object(o["a"])(a,e);var t=Object(c["a"])(a);function a(){var e;return Object(r["a"])(this,a),e=t.apply(this,arguments),e.name="",e.email="",e.subject="",e.message="",e}return Object(i["a"])(a,[{key:"resetForm",value:function(){this.name="",this.email="",this.subject="",this.message=""}},{key:"sendEmail",value:function(){if(0!==this.name.length)if(0!==this.email.length){var e=/\S+@\S+/;e.test(this.email.toLowerCase())?0!==this.message.length?f.a.sendForm("default_service","contact_me","#contact-form","user_KPA6UZpEDVA0yIJHW5WPo").then((function(e){window.console.log("Success",e.status,e.text),alert("Your email has been sent!")}),(function(e){window.console.log("Error",e),alert("There was an error with your email.")})):alert("Please enter a message"):alert("Please enter a valid email")}else alert("Please enter in an email");else alert("Please enter in a name")}}]),a}(l["c"]);v=Object(u["a"])([Object(l["a"])({components:{Button:d["a"],Footer:m["a"]}})],v);var b=v,h=b,g=a("2877"),j=Object(g["a"])(h,n,s,!1,null,null,null);t["default"]=j.exports},"2a7d":function(e,t,a){"use strict";var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("button",{class:e.buttonClass,on:{click:function(t){return e.emitClicked()}}},[a("strong",[e._v(e._s(e.text))])])},s=[],r=a("d4ec"),i=a("bee2"),o=a("262e"),c=a("2caf"),u=a("9ab4"),l=a("60a3"),m=function(e){Object(o["a"])(a,e);var t=Object(c["a"])(a);function a(){return Object(r["a"])(this,a),t.apply(this,arguments)}return Object(i["a"])(a,[{key:"emitClicked",value:function(){var e=this;setTimeout((function(){return e.$emit("clicked")}),100)}}]),a}(l["c"]);Object(u["a"])([Object(l["b"])({required:!0,type:String})],m.prototype,"text",void 0),Object(u["a"])([Object(l["b"])({required:!1,type:String,default:""})],m.prototype,"buttonClass",void 0),m=Object(u["a"])([l["a"]],m);var d=m,p=d,f=a("2877"),v=Object(f["a"])(p,n,s,!1,null,null,null);t["a"]=v.exports},3245:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.EmailJSResponseStatus=void 0;var n=function(){function e(e){this.status=e.status,this.text=e.responseText}return e}();t.EmailJSResponseStatus=n},5129:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.UI=void 0;var n=function(){function e(){}return e.clearAll=function(e){e.classList.remove(this.PROGRESS),e.classList.remove(this.DONE),e.classList.remove(this.ERROR)},e.progressState=function(e){this.clearAll(e),e.classList.add(this.PROGRESS)},e.successState=function(e){e.classList.remove(this.PROGRESS),e.classList.add(this.DONE)},e.errorState=function(e){e.classList.remove(this.PROGRESS),e.classList.add(this.ERROR)},e.PROGRESS="emailjs-sending",e.DONE="emailjs-success",e.ERROR="emailjs-error",e}();t.UI=n}}]);
//# sourceMappingURL=ContactMe-vue.aa7a6163.js.map