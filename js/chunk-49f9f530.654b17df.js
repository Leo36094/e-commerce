(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-49f9f530"],{4013:function(t,e,a){"use strict";a("db18")},7007:function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"checkout"},[a("Loading",{attrs:{active:t.isLoading},on:{"update:active":function(e){t.isLoading=e}}}),a("div",{staticClass:"checkout-content"},[a("div",{staticClass:"checkout-content__title"},[t._v("訂單資訊")]),a("div",{staticClass:"table"},[a("div",{staticClass:"table-item"},[a("p",{staticClass:"table-item__product"},[t._v("產品名稱")]),a("p",{staticClass:"table-item__qty"},[t._v("數量")]),a("p",{staticClass:"table-item__price"},[t._v("單價")]),t.order.products.coupon?t._e():a("p",{staticClass:"table-item__discount"},[t._v("折扣價")])]),t._l(t.products,(function(e){return a("div",{key:e.id,staticClass:"table-item"},[a("p",{staticClass:"table-item__product"},[t._v(t._s(e.product.title))]),a("p",{staticClass:"table-item__qty"},[t._v(t._s(e.qty))]),a("p",{staticClass:"table-item__price"},[t._v(t._s(e.product.price))]),t.order.products.coupon?t._e():a("p",{staticClass:"table-item__discount"},[t._v(t._s(e.final_total))])])})),a("div",{staticClass:"table-total"},[a("p",[t._v("總計： $ "+t._s(t.order.total))])])],2),a("div",{staticClass:"checkout-content__title"},[t._v("寄送資訊")]),a("div",{staticClass:"checkout-content__item"},[a("Label",{staticClass:"checkout-content__label",attrs:{labelName:"Email"}}),a("h4",[t._v(t._s(t.order.user.email))])],1),a("div",{staticClass:"checkout-content__item"},[a("Label",{staticClass:"checkout-content__label",attrs:{labelName:"姓名"}}),a("h4",[t._v(t._s(t.order.user.name))])],1),a("div",{staticClass:"checkout-content__item"},[a("Label",{staticClass:"checkout-content__label",attrs:{labelName:"電話"}}),a("h4",[t._v(t._s(t.order.user.tel))])],1),a("div",{staticClass:"checkout-content__item"},[a("Label",{staticClass:"checkout-content__label",attrs:{labelName:"地址"}}),a("h4",[t._v(t._s(t.order.user.address))])],1),a("div",{staticClass:"checkout-content__item"},[a("Label",{staticClass:"checkout-content__label",attrs:{labelName:"訂單狀態"}}),t.order.is_paid?a("h4",{style:{color:"#67C23A"}},[t._v("付款成功")]):a("h4",{style:{color:"#F56C6C"}},[t._v("尚未付款")])],1),t.order.is_paid?t._e():a("div",{staticClass:"checkout-content__item"},[a("Label",{staticClass:"checkout-content__label",attrs:{labelName:"付款方式"}}),a("Select",{attrs:{selectOptions:t.paymentOptions},model:{value:t.renderPaymentMethod,callback:function(e){t.renderPaymentMethod=e},expression:"renderPaymentMethod"}})],1),a("div",{staticClass:"checkout-content__textarea"},[a("Label",{staticClass:"checkout-content__label",attrs:{labelName:"備註"}}),a("TextArea",{attrs:{readonly:""},model:{value:t.textAreaPlaceholder,callback:function(e){t.textAreaPlaceholder=e},expression:"textAreaPlaceholder"}})],1),t.order.is_paid?t._e():a("div",{staticClass:"checkout-content__btn"},[a("Button",{attrs:{btnName:"確定付款"},nativeOn:{click:function(e){return e.preventDefault(),t.confirmPayment.apply(null,arguments)}}})],1)])],1)},c=[],o=(a("8e6e"),a("ac6a"),a("456d"),a("bd86")),r=a("2f62"),n=a("d49f"),i=a("3398"),l=a("4329"),d=a("e01c");function u(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);e&&(s=s.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,s)}return a}function _(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?u(Object(a),!0).forEach((function(e){Object(o["a"])(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):u(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}var p="https://vue-course-api.hexschool.io/api/leochuang/order",h="https://vue-course-api.hexschool.io/api/leochuang/pay",m={components:{TextArea:n["a"],Button:i["a"],Label:l["a"],Select:d["a"]},props:{},data:function(){return{orderId:"",isLoading:!1,order:{create_at:"",id:"",is_paid:"",message:"",payment_method:"",products:[],total:"",user:{}},products:[],renderPaymentMethod:0,paymentOptions:[{value:0,name:"信用卡"},{value:1,name:"超商付款"},{value:2,name:"貨到付款"}]}},computed:{textAreaPlaceholder:function(){return this.order.message?this.order.message:"無"}},watch:{},created:function(){this.init()},mounted:function(){},destroyed:function(){},methods:_(_({},Object(r["b"])(["setModal"])),{},{init:function(){this.orderId=this.$route.params.orderId,this.getOrderData()},errorMessage:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"已刪除";this.$message({showClose:!0,message:t,type:"error"})},notifySuccess:function(t){this.$message({showClose:!0,message:t,type:"success"})},getOrderData:function(){var t=this;this.isLoading=!0,this.$http.get("".concat(p,"/").concat(this.orderId)).then((function(e){var a=e.data.order;t.order=a;var s=t.deepCopy(t.order.products),c=Object.keys(s).map((function(t){return s[t]}));t.products=c,t.isLoading=!1}))},confirmPayment:function(){var t=this;this.isLoading=!0;var e=this.deepCopy(this.order);0===this.renderPaymentMethod&&(e.payment_method="信用卡"),1===this.renderPaymentMethod&&(e.payment_method="超商付款"),2===this.renderPaymentMethod&&(e.payment_method="貨到付款"),this.$http.post("".concat(h,"/").concat(this.orderId),{data:e}).then((function(e){e.data.success?(t.getOrderData(),t.isLoading=!1,t.notifySuccess("付款成功")):(t.isLoading=!1,t.errorMessage("付款失敗"))}))}})},b=m,v=(a("4013"),a("2877")),f=Object(v["a"])(b,s,c,!1,null,null,null);e["default"]=f.exports},db18:function(t,e,a){}}]);
//# sourceMappingURL=chunk-49f9f530.654b17df.js.map