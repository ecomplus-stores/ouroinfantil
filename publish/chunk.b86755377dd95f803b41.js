(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{180:function(e,t,i){"use strict";var s=i(25),a=i(4);var r=(e,t)=>{let[i]=t;i||(i=e.location.pathname);const s="string"==typeof i?i.slice(1):null,r="/"+e.storeId+"@"+s.replace(/\//g,"$")+".json";return Object(a.h)({url:r}).then((e=>{const t=e.data.GET;if(t){const[e,s]=t.split("@");if(s)return{path:i,resource:e,_id:s}}const s=new Error("Resource not found, invalid slug or store ID");throw s.response=e,s}))};var n=(e,t)=>{let[i]=t;return new Promise(((t,s)=>{const{storeId:r}=e,{resource:n,_id:o}=i;if(n&&o)Object(a.g)({url:`/${n}/${o}.json`,storeId:r}).then((e=>{let{data:i}=e;t({resource:n,body:i})})).catch(s);else{const e=new Error("Invalid route resource or object ID");e.response={},s(e)}}))},o=(i(6),i(5));var c=(e,t)=>{let[i,s=!0]=t;i||(i=e.location.hostname);const r="/domains/"+i+".json";return Object(a.e)({url:r}).then((t=>{let{data:i}=t;if(s){["store_id","store_object_id","channel_id"].forEach((e=>o.a.set(e,i[e])));const e=i.default_lang;e&&(o.a.set("lang",e),o.a.set("country_code",e.replace(/^[a-z]{2}_/,"").toUpperCase()),"pt_br"===e&&(o.a.set("currency","BRL"),o.a.set("currency_symbol","R$")))}return e.storeId=i.store_id,i}))};t.a=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"object"==typeof window&&window.location;const i=this;this.storeId=e||s.$ecomConfig.get("store_id"),this.location=t,this.map=function(){return r(i,arguments)},this.resolve=function(){return n(i,arguments)},this.list=function(){return(e=>new Promise(((t,i)=>{const{storeId:s}=e,r=[],n=[];["products","categories","collections","brands"].forEach((e=>{r.push(Object(a.g)({url:`/${e}.json`,storeId:s}).then((t=>{const{result:i}=t.data;Array.isArray(i)&&i.forEach((t=>{let{_id:i,slug:s,name:a,sku:r}=t;if(s){const t="/"+s;n.find((e=>e.path===t))||n.push({resource:e,_id:i,path:t,name:a,sku:r})}}))})))})),Promise.all(r).then((()=>t(n))).catch(i)})))(i)},this.setupStore=function(){return c(i,arguments)}}},224:function(e,t,i){var s=i(230);s.__esModule&&(s=s.default),"string"==typeof s&&(s=[[e.i,s,""]]),s.locals&&(e.exports=s.locals);(0,i(160).default)("9248a57e",s,!0,{})},226:function(e,t,i){"use strict";var s=i(26),a=i(35),r={name:"AAlert",props:{canShow:{type:Boolean,default:!0},variant:{type:String,default:"warning"}},data:()=>({count:1}),computed:{i19close:()=>Object(a.a)(s.P)},watch:{canShow(e){e&&this.count++}}},n=i(46),o=Object(n.a)(r,(function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",[i("transition",{attrs:{"enter-active-class":"animated fadeInDown fast"}},[e.canShow?i("div",{key:e.count},[e._m(0)]):e._e()])],1)}),[function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"alert alert-dismissible fade show",class:"alert-"+e.variant,attrs:{role:"alert"}},[e._t("default"),i("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"alert","aria-label":e.i19close},on:{click:function(t){return e.$emit("dismiss")}}},[i("span",{attrs:{"aria-hidden":"true"}},[e._v("×")])])],2)}],!1,null,null,null);t.a=o.exports},227:function(e,t,i){"use strict";t.a=(e,t)=>e.sort(((e,i)=>{if(e.app_id===i.app_id)return 0;const s=t.indexOf(e.app_id),a=t.indexOf(i.app_id);return s>-1?a>-1?s<a?-1:1:s>-1?-1:1:a>-1?1:0}))},229:function(e,t,i){"use strict";i(224)},230:function(e,t,i){(t=i(159)(!0)).push([e.i,".shipping-calculator__input{max-width:150px}.shipping-calculator__services{font-size:var(--font-size-sm);max-width:370px}.shipping-calculator__services .active{cursor:auto}.shipping-calculator__label{padding:var(--spacer-3) var(--spacer-2)}.shipping-calculator__label i{animation-duration:2s;animation-iteration-count:infinite;color:var(--primary-light);font-size:var(--font-size-lg);margin-right:var(--spacer-2)}.shipping-calculator__option{display:flex;justify-content:space-between;width:100%}.shipping-calculator__option>small{min-width:70px;text-align:right}@media(min-width:1200px){.shipping-calculator__option{display:block;position:relative}.shipping-calculator__option>small{position:absolute;right:-5px;top:-5px}}.shipping-calculator__free-from-value{margin-top:var(--spacer-2)}.shipping-calculator__free-from-value .progress{height:1.5rem;margin-top:var(--spacer-1)}.shipping-calculator__free-from-value .progress-bar{background-color:var(--info)}","",{version:3,sources:["ShippingCalculator.scss"],names:[],mappings:"AAAA,4BAA4B,eAAe,CAAC,+BAA+B,6BAA6B,CAAC,eAAe,CAAC,uCAAuC,WAAW,CAAC,4BAA4B,uCAAuC,CAAC,8BAA8B,qBAAqB,CAAC,kCAAkC,CAAC,0BAA0B,CAAC,6BAA6B,CAAC,4BAA4B,CAAC,6BAA6B,YAAY,CAAC,6BAA6B,CAAC,UAAU,CAAC,mCAAmC,cAAc,CAAC,gBAAgB,CAAC,yBAAyB,6BAA6B,aAAa,CAAC,iBAAiB,CAAC,mCAAmC,iBAAiB,CAAC,UAAU,CAAC,QAAQ,CAAC,CAAC,sCAAsC,0BAA0B,CAAC,gDAAgD,aAAa,CAAC,0BAA0B,CAAC,oDAAoD,4BAA4B",file:"ShippingCalculator.scss",sourcesContent:[".shipping-calculator__input{max-width:150px}.shipping-calculator__services{font-size:var(--font-size-sm);max-width:370px}.shipping-calculator__services .active{cursor:auto}.shipping-calculator__label{padding:var(--spacer-3) var(--spacer-2)}.shipping-calculator__label i{animation-duration:2s;animation-iteration-count:infinite;color:var(--primary-light);font-size:var(--font-size-lg);margin-right:var(--spacer-2)}.shipping-calculator__option{display:flex;justify-content:space-between;width:100%}.shipping-calculator__option>small{min-width:70px;text-align:right}@media(min-width:1200px){.shipping-calculator__option{display:block;position:relative}.shipping-calculator__option>small{position:absolute;right:-5px;top:-5px}}.shipping-calculator__free-from-value{margin-top:var(--spacer-2)}.shipping-calculator__free-from-value .progress{height:1.5rem;margin-top:var(--spacer-1)}.shipping-calculator__free-from-value .progress-bar{background-color:var(--info)}"]}]),e.exports=t},233:function(e,t,i){"use strict";i(6);var s=i(26),a=i(25),r=i(35),n=i(75),o=i(29),c=i(4),l=i(227),p=i(228),u=i.n(p),h=i(231);const d="object"==typeof window&&window.localStorage,g="shipping-to-zip",m="object"==typeof window&&window.propsShippingCalculator||{},f=e=>{const t={};return["product_id","variation_id","sku","name","quantity","inventory","currency_id","currency_symbol","price","final_price","dimensions","weight"].forEach((i=>{void 0!==e[i]&&(t[i]=e[i])})),t};var v={name:"ShippingCalculator",components:{CleaveInput:u.a,ShippingLine:h.a},props:{zipCode:String,canSelectServices:Boolean,canAutoSelectService:{type:Boolean,default:"boolean"!=typeof m.canAutoSelectService||m.canAutoSelectService},canInputZip:{type:Boolean,default:"boolean"!=typeof m.canInputZip||m.canInputZip},countryCode:{type:String,default:a.$ecomConfig.get("country_code")},shippedItems:{type:Array,default:()=>[]},shippingResult:{type:Array,default:()=>[]},shippingData:{type:Object,default:()=>({})},skipAppIds:Array,shippingAppsSort:{type:Array,default:()=>window.ecomShippingApps||[]}},data:()=>({localZipCode:null,localShippedItems:[],amountSubtotal:null,shippingServices:[],selectedService:null,hasPaidOption:!1,freeFromValue:null,isScheduled:!1,retryTimer:null,isWaiting:!1,hasCalculated:!1}),computed:{i19add$1ToEarn:()=>Object(r.a)(s.j),i19calculateShipping:()=>Object(r.a)(s.E),i19zipCode:()=>Object(r.a)(s.ye),i19freeShipping:()=>Object(r.a)(s.Cb).toLowerCase(),i19selectShippingMsg:()=>Object(r.a)({pt_br:"Selecione uma forma de envio abaixo",en_us:"Select a shipping method below"}),cleaveOptions(){return"BR"===this.countryCode?{blocks:[5,3],delimiter:"-"}:{blocks:[30]}},freeFromPercentage(){return this.hasPaidOption&&this.amountSubtotal<this.freeFromValue?Math.round(100*this.amountSubtotal/this.freeFromValue):null},productionDeadline(){let e=0;return this.shippedItems.forEach((t=>{if(t.quantity&&t.production_time){const{days:i,cumulative:s}=t.production_time,a=s?i*t.quantity:i;a>e&&(e=a)}})),e}},methods:{formatMoney:n.a,updateZipCode(){this.$emit("update:zip-code",this.localZipCode)},parseShippingOptions(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];this.freeFromValue=null,this.shippingServices=[],e.length&&(e.forEach((t=>{const{validated:i,error:s,response:a}=t;if(!i||s)return;if(this.skipAppIds&&this.skipAppIds.includes(t.app_id)&&e.filter((e=>{let{app_id:t}=e;return!this.skipAppIds.includes(t)})).length)return;a.shipping_services.forEach((e=>{this.shippingServices.push({app_id:t.app_id,...e})}));const r=a.free_shipping_from_value;r&&(!this.freeFromValue||this.freeFromValue>r)&&(this.freeFromValue=r)})),this.shippingServices.length?(this.shippingServices=this.shippingServices.sort(((e,t)=>{const i=e.shipping_line.total_price-t.shipping_line.total_price;return i<0?-1:i>0?1:e.shipping_line.delivery_time&&t.shipping_line.delivery_time&&e.shipping_line.delivery_time.days<t.shipping_line.delivery_time.days?-1:1})),this.canAutoSelectService&&this.setSelectedService(0),this.hasPaidOption=Boolean(this.shippingServices.find((e=>e.shipping_line.total_price||e.shipping_line.price))),Array.isArray(this.shippingAppsSort)&&this.shippingAppsSort.length&&(this.shippingServices=Object(l.a)(this.shippingServices,this.shippingAppsSort))):t?this.scheduleRetry():this.fetchShippingServices(!0))},scheduleRetry(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1e4;clearTimeout(this.retryTimer),this.retryTimer=setTimeout((()=>{this.localZipCode&&!this.shippingServices.length&&this.shippedItems.length&&this.fetchShippingServices(!0)}),e)},fetchShippingServices(e){this.isScheduled||(this.isScheduled=!0,setTimeout((()=>{this.isScheduled=!1;const{storeId:t}=this;let i="/calculate_shipping.json";this.skipAppIds&&this.skipAppIds.length&&(i+="?skip_ids=",this.skipAppIds.forEach(((e,t)=>{t>0&&(i+=","),i+=`${e}`})));const s={...this.shippingData,to:{zip:this.localZipCode,...this.shippingData.to}};this.localShippedItems.length&&(s.items=this.localShippedItems,s.subtotal=this.amountSubtotal),this.isWaiting=!0,Object(c.c)({url:i,method:"POST",storeId:t,data:s}).then((t=>{let{data:i}=t;return this.parseShippingOptions(i.result,e)})).catch((t=>{e||this.scheduleRetry(4e3),console.error(t)})).finally((()=>{this.hasCalculated=!0,this.isWaiting=!1}))}),this.hasCalculated?150:50))},submitZipCode(){this.updateZipCode(),d&&d.setItem(g,this.localZipCode),this.fetchShippingServices()},setSelectedService(e){this.canSelectServices&&(this.$emit("select-service",this.shippingServices[e]),this.selectedService=e)}},watch:{shippedItems:{handler(){setTimeout((()=>{this.localShippedItems=this.shippedItems.map(f);const{amountSubtotal:e}=this;this.amountSubtotal=this.shippedItems.reduce(((e,t)=>e+Object(o.a)(t)*t.quantity),0),this.hasCalculated&&(this.canSelectServices||e!==this.amountSubtotal||!this.shippingServices.length&&!this.isWaiting)&&this.fetchShippingServices()}),50)},deep:!0,immediate:!0},localZipCode(e){"BR"===this.countryCode&&8===e.replace(/\D/g,"").length&&this.submitZipCode()},zipCode:{handler(e){e&&(this.localZipCode=e)},immediate:!0},skipAppIds(){this.fetchShippingServices()},shippingResult:{handler(e){e.length&&this.parseShippingOptions(e)},immediate:!0}},created(){if(!this.zipCode&&d){const e=d.getItem(g);e&&(this.localZipCode=e)}}},_=v,A=(i(229),i(46)),C=Object(A.a)(_,(function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"shipping-calculator"},[e.canInputZip?i("form",{staticClass:"shipping-calculator__form",on:{submit:function(t){return t.preventDefault(),e.submitZipCode.apply(null,arguments)}}},[i("div",{staticClass:"form-group"},[i("label",{attrs:{for:"shipping-calculator-zip"}},[e._v(" "+e._s(e.i19calculateShipping)+" ")]),i("div",{staticClass:"input-group"},[i("cleave-input",{staticClass:"form-control shipping-calculator__input",attrs:{type:"tel",id:"shipping-calculator-zip",placeholder:e.i19zipCode,"aria-label":e.i19zipCode,options:e.cleaveOptions},model:{value:e.localZipCode,callback:function(t){e.localZipCode=t},expression:"localZipCode"}}),i("div",{staticClass:"input-group-append"},[i("button",{staticClass:"btn btn-outline-secondary",attrs:{type:"submit","aria-label":e.i19calculateShipping}},[i("i",{staticClass:"i-shipping-fast"})])])],1)])]):e._e(),i("div",{staticClass:"shipping-calculator__services"},[i("transition-group",{attrs:{"enter-active-class":"animated fadeInDown","leave-active-class":"animated position-absolute fadeOutUp"}},[e.isWaiting?i("div",{key:"waiting",staticClass:"spinner-border spinner-border-sm",attrs:{role:"status"}},[i("span",{staticClass:"sr-only"},[e._v("Loading...")])]):i("div",{key:"services",staticClass:"list-group"},[i("transition",{attrs:{"enter-active-class":"animated fadeInUp","leave-active-class":"animated fadeOutDown"}},[e.canSelectServices&&!e.canAutoSelectService&&null===e.selectedService?i("div",{staticClass:"shipping-calculator__label"},[i("i",{staticClass:"i-arrow-down animated wobble"}),e._v(" "+e._s(e.i19selectShippingMsg)+" ")]):e._e()]),e._l(e.shippingServices,(function(t,s){return i(e.canSelectServices?"a":"div",{key:s,tag:"component",staticClass:"list-group-item",class:{"list-group-item-action":e.canSelectServices,active:e.canSelectServices&&e.selectedService===s},attrs:{href:e.canSelectServices&&"#"},on:{click:function(t){return t.preventDefault(),e.setSelectedService(s)}}},[i("span",{staticClass:"shipping-calculator__option"},[e._t("option",(function(){return[i("shipping-line",{attrs:{"shipping-line":t.shipping_line,"production-deadline":e.productionDeadline,"data-service-code":t.service_code}}),e.canSelectServices&&!e.canAutoSelectService?i("div",{staticClass:"custom-control custom-radio"},[i("input",{staticClass:"custom-control-input",attrs:{type:"radio",id:"shipping-method-"+t.service_code,name:"shipping-method-select"},domProps:{checked:e.selectedService===s}}),i("label",{staticClass:"custom-control-label",attrs:{for:"shipping-method-"+t.service_code}},[i("small",[e._v(e._s(t.label))])])]):i("small",[e._v(e._s(t.label))])]}),null,{service:t})],2)])}))],2)]),i("transition",{attrs:{"enter-active-class":"animated fadeInUp","leave-active-class":"animated fadeOutDown"}},[e.freeFromPercentage?i("div",{staticClass:"shipping-calculator__free-from-value"},[e._t("free-from-value",(function(){return[i("span",[e._v(" "+e._s(e.i19add$1ToEarn.replace("$1",e.formatMoney(e.freeFromValue-e.amountSubtotal)))+" "),i("strong",[e._v(e._s(e.i19freeShipping))])]),e.freeFromPercentage>=33?i("div",{staticClass:"progress"},[i("div",{staticClass:"progress-bar progress-bar-striped",style:"width: "+e.freeFromPercentage+"%",attrs:{role:"progressbar","aria-valuenow":e.freeFromPercentage,"aria-valuemin":"0","aria-valuemax":"100"}},[i("span",[e._v(" "+e._s(e.i19freeShipping)+" "),i("i",{staticClass:"i-truck mx-1"}),i("strong",[e._v(e._s(e.freeFromPercentage)+"%")])])])]):e._e()]}),null,{amountSubtotal:e.amountSubtotal,freeFromValue:e.freeFromValue,freeFromPercentage:e.freeFromPercentage})],2):e._e()])],1)])}),[],!1,null,null,null);t.a=C.exports},235:function(e,t,i){"use strict";t.a=e=>{"object"==typeof window&&"function"==typeof window.requestIdleCallback?window.requestIdleCallback(e):setTimeout(e,500)}},421:function(e,t,i){"use strict";i.r(t);i(101),i(102),i(103);var s=i(35),a=i(180),r=i(2),n=i(27),o=i(259),c=i(262);const l=Object(r.$)("#fallback-404");if(l.length){let e=new URLSearchParams(window.location.search).get("url");if(!e&&document.cookie){const t=document.cookie.split("; ").find((e=>e.startsWith("referrerUrl=")));t&&(e=t.split("=")[1])}if(e){const t=new a.a;l.html('<div class="spinner-border" role="status"></div>');const i=()=>{l.html(Object(r.$)("<h3>",{class:"my-4",html:['<i class="text-muted i-exclamation-triangle mr-3"></i>',Object(s.a)({pt_br:"Página não encontrada",en_us:"Page not found"})]})),t.list().then((e=>{l.append([Object(r.$)("<p>",{class:"lead",html:Object(s.a)({pt_br:"Mapa do site:",en_us:"Sitemap:"})}),Object(r.$)("<ul>",{html:e.map((e=>{let{path:t}=e;return`<li><a href="${t}">${t}</a></li>`}))})])})).catch(console.error)};t.map(e).then((e=>{const{resource:i,_id:s}=e;switch(i){case"products":return new n.a({render:e=>e(o.default,{props:{productId:s}})});case"brands":case"categories":return t.resolve(e).then((e=>{let{body:t}=e;return new n.a({render:e=>e(c.a,{props:{[i]:[t.name]}})})}))}})).then((e=>{e?e.$mount(l[0]):i()})).catch((e=>{console.error(e),i()}))}}}},0,[39,40]]);