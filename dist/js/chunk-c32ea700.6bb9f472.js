(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-c32ea700","chunk-49f9f530"],{"18e6":function(t,e,a){"use strict";var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"main-header"},[a("div",{staticClass:"main-header-nav"},[t._m(0),a("div",{staticClass:"main-header-nav__item"},[a("span",{on:{click:function(e){t.redirectPage("home")}}},[t._v("Home")]),a("span",{on:{click:function(e){t.redirectPage("home_products")}}},[t._v("Products")]),a("span",{on:{click:function(e){t.redirectPage("admin")}}},[t._v("Admin")])])]),a("div",{staticClass:"main-header-excerpt-container"},[t._t("default"),t.textContent.title?[a("div",{staticClass:"main-header-excerpt"},[a("h4",[t._v(t._s(t.textContent.title))]),a("p",{staticClass:"main-header-excerpt__text"},[t._v(t._s(t.textContent.description))])])]:t._e()],2)])},n=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"main-header-nav__icon"},[a("i",{staticClass:"el-icon-time"}),t._v("\n      Side Project\n    ")])}],c=(a("cadf"),a("551c"),a("097d"),{components:{},props:{textContent:{type:Object,default:function(){return{title:"",description:""}}}},data:function(){return{}},computed:{},watch:{},created:function(){},mounted:function(){},methods:{redirectPage:function(t){this.$router.push({name:t})}}}),i=c,o=(a("b1cf"),a("2877")),r=Object(o["a"])(i,s,n,!1,null,null,null);r.options.__file="MainPageHeader.vue";e["a"]=r.exports},"21bb":function(t,e,a){"use strict";var s=a("761c"),n=a.n(s);n.a},4013:function(t,e,a){"use strict";var s=a("db18"),n=a.n(s);n.a},"46db":function(t,e,a){"use strict";var s=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},n=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"footer"},[a("div",{staticClass:"footer__content"},[a("p",[t._v("Thanks for the time to visit!")]),a("p",[t._v("Created by Leo")])]),a("div",{staticClass:"footer__icon"},[a("a",{attrs:{href:"https://www.linkedin.com/in/leo-chuang/",target:"_blank"}},[a("i",{staticClass:"fab fa-lg fa-linkedin"})]),a("a",{attrs:{href:"mailto:leo36094@gmail.com",target:"_blank"}},[a("i",{staticClass:"fas fa-lg fa-envelope"})])])])}],c={components:{},props:{},data:function(){return{}},computed:{},watch:{},created:function(){},mounted:function(){},methods:{}},i=c,o=(a("84d8"),a("2877")),r=Object(o["a"])(i,s,n,!1,null,null,null);r.options.__file="Footer.vue";e["a"]=r.exports},7007:function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"checkout"},[a("Loading",{attrs:{active:t.isLoading},on:{"update:active":function(e){t.isLoading=e}}}),a("div",{staticClass:"checkout-content"},[a("div",{staticClass:"checkout-content__title"},[t._v("訂單資訊")]),a("div",{staticClass:"table"},[a("div",{staticClass:"table-item"},[a("p",{staticClass:"table-item__product"},[t._v("產品名稱")]),a("p",{staticClass:"table-item__qty"},[t._v("數量")]),a("p",{staticClass:"table-item__price"},[t._v("單價")]),t.order.products.coupon?t._e():a("p",{staticClass:"table-item__discount"},[t._v("折扣價")])]),t._l(t.products,function(e,s){return a("div",{key:e.id,staticClass:"table-item"},[a("p",{staticClass:"table-item__product"},[t._v(t._s(e.product.title))]),a("p",{staticClass:"table-item__qty"},[t._v(t._s(e.qty))]),a("p",{staticClass:"table-item__price"},[t._v(t._s(e.product.price))]),t.order.products.coupon?t._e():a("p",{staticClass:"table-item__discount"},[t._v(t._s(e.final_total))])])}),a("div",{staticClass:"table-total"},[a("p",[t._v("總計： $ "+t._s(t.order.total))])])],2),a("div",{staticClass:"checkout-content__title"},[t._v("寄送資訊")]),a("div",{staticClass:"checkout-content__item"},[a("Label",{staticClass:"checkout-content__label",attrs:{labelName:"Email"}}),a("h4",[t._v(t._s(t.order.user.email))])],1),a("div",{staticClass:"checkout-content__item"},[a("Label",{staticClass:"checkout-content__label",attrs:{labelName:"姓名"}}),a("h4",[t._v(t._s(t.order.user.name))])],1),a("div",{staticClass:"checkout-content__item"},[a("Label",{staticClass:"checkout-content__label",attrs:{labelName:"電話"}}),a("h4",[t._v(t._s(t.order.user.tel))])],1),a("div",{staticClass:"checkout-content__item"},[a("Label",{staticClass:"checkout-content__label",attrs:{labelName:"地址"}}),a("h4",[t._v(t._s(t.order.user.address))])],1),a("div",{staticClass:"checkout-content__item"},[a("Label",{staticClass:"checkout-content__label",attrs:{labelName:"訂單狀態"}}),t.order.is_paid?a("h4",{style:{color:"#67C23A"}},[t._v("付款成功")]):a("h4",{style:{color:"#F56C6C"}},[t._v("尚未付款")])],1),t.order.is_paid?t._e():a("div",{staticClass:"checkout-content__item"},[a("Label",{staticClass:"checkout-content__label",attrs:{labelName:"付款方式"}}),a("Select",{attrs:{selectOptions:t.paymentOptions},model:{value:t.renderPaymentMethod,callback:function(e){t.renderPaymentMethod=e},expression:"renderPaymentMethod"}})],1),a("div",{staticClass:"checkout-content__textarea"},[a("Label",{staticClass:"checkout-content__label",attrs:{labelName:"備註"}}),a("TextArea",{attrs:{readonly:""},model:{value:t.textAreaPlaceholder,callback:function(e){t.textAreaPlaceholder=e},expression:"textAreaPlaceholder"}})],1),t.order.is_paid?t._e():a("div",{staticClass:"checkout-content__btn"},[a("Button",{attrs:{btnName:"確定付款"},nativeOn:{click:function(e){return e.preventDefault(),t.confirmPayment(e)}}})],1)])],1)},n=[],c=a("a4bb"),i=a.n(c),o=a("cebc"),r=(a("cadf"),a("551c"),a("097d"),a("2f62")),l=a("d49f"),d=a("3398"),u=a("4329"),_=a("e01c"),h="https://vue-course-api.hexschool.io/api/leochuang/order",p="https://vue-course-api.hexschool.io/api/leochuang/pay",m={components:{TextArea:l["a"],Button:d["a"],Label:u["a"],Select:_["a"]},props:{},data:function(){return{orderId:"",isLoading:!1,order:{create_at:"",id:"",is_paid:"",message:"",payment_method:"",products:[],total:"",user:{}},products:[],renderPaymentMethod:0,paymentOptions:[{value:0,name:"信用卡"},{value:1,name:"超商付款"},{value:2,name:"貨到付款"}]}},computed:{textAreaPlaceholder:function(){return this.order.message?this.order.message:"無"}},watch:{},created:function(){this.init()},mounted:function(){},destroyed:function(){},methods:Object(o["a"])({},Object(r["b"])(["setModal"]),{init:function(){this.orderId=this.$route.params.orderId,this.getOrderData()},errorMessage:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"已刪除";this.$message({showClose:!0,message:t,type:"error"})},notifySuccess:function(t){this.$message({showClose:!0,message:t,type:"success"})},getOrderData:function(){var t=this;this.isLoading=!0,this.$http.get("".concat(h,"/").concat(this.orderId)).then(function(e){var a=e.data.order;t.order=a;var s=t.deepCopy(t.order.products),n=i()(s).map(function(t){return s[t]});t.products=n,t.isLoading=!1})},confirmPayment:function(){var t=this;this.isLoading=!0;var e=this.deepCopy(this.order);0===this.renderPaymentMethod&&(e.payment_method="信用卡"),1===this.renderPaymentMethod&&(e.payment_method="超商付款"),2===this.renderPaymentMethod&&(e.payment_method="貨到付款"),this.$http.post("".concat(p,"/").concat(this.orderId),{data:e}).then(function(e){console.log(e),e.data.success?(t.getOrderData(),t.isLoading=!1,t.notifySuccess("付款成功")):(t.isLoading=!1,t.errorMessage("付款失敗"))})}})},f=m,v=(a("4013"),a("2877")),C=Object(v["a"])(f,s,n,!1,null,null,null);C.options.__file="Checkout.vue";e["default"]=C.exports},"761c":function(t,e,a){},7977:function(t,e,a){},"84d8":function(t,e,a){"use strict";var s=a("7977"),n=a.n(s);n.a},"8c2e":function(t,e,a){},"91ac":function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"shoppingCart"},[a("header",[a("div",{staticClass:"shoppingCart__banner"},[a("MainPageHeader",{attrs:{textContent:t.headerTextContent}},[a("Checkout",{staticClass:"shoppingCart__text"})],1)],1)]),a("footer",[a("Footer")],1)])},n=[],c=(a("cadf"),a("551c"),a("097d"),a("18e6")),i=a("7007"),o=a("46db"),r={components:{Checkout:i["default"],MainPageHeader:c["a"],Footer:o["a"]},props:{},data:function(){return{headerTextContent:{title:"",description:""}}},watch:{},computed:{},created:function(){},mounted:function(){},destroyed:function(){},methods:{}},l=r,d=(a("21bb"),a("2877")),u=Object(d["a"])(l,s,n,!1,null,null,null);u.options.__file="ShoppingCart.vue";e["default"]=u.exports},b1cf:function(t,e,a){"use strict";var s=a("8c2e"),n=a.n(s);n.a},db18:function(t,e,a){}}]);
//# sourceMappingURL=chunk-c32ea700.6bb9f472.js.map