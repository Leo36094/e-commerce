(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1d0e7b82","chunk-797ac3b2"],{1799:function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"block"},[a("el-pagination",{attrs:{"page-size":10,layout:"total, prev, pager, next","page-count":t.fullValue.total_pages},on:{"current-change":t.changePage},model:{value:t.fullValue,callback:function(e){t.fullValue=e},expression:"fullValue"}})],1)},o=[],i={components:{},props:{value:{type:Object,default:function(){return{}}},changePage:{type:Function,default:function(){return""}}},data:function(){return{}},computed:{fullValue:{get:function(){return this.value},set:function(t){this.$emit("input",t)}}},watch:{},created:function(){},mounted:function(){},destroyed:function(){},methods:{handleCurrentChange:function(t){this.$emit("pagination:onChangePage",t)}}},r=i,c=a("2877"),s=Object(c["a"])(r,n,o,!1,null,null,null);e["a"]=s.exports},"18e6":function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"main-header"},[a("div",{staticClass:"main-header-nav"},[t._m(0),a("div",{staticClass:"main-header-nav__item"},[a("span",{on:{click:function(e){return t.redirectPage("home")}}},[t._v("Home")]),a("span",{on:{click:function(e){return t.redirectPage("home_products")}}},[t._v("Products")]),a("span",{on:{click:function(e){return t.redirectPage("admin")}}},[t._v("Admin")])]),a("div",{staticClass:"main-header-nav__mobile"},[a("i",{staticClass:"fas fa-bars",on:{click:function(e){return e.preventDefault(),t.toggleNav.apply(null,arguments)}}})]),a("transition",{attrs:{name:"page"}},[t.exandNav?[a("ul",{staticClass:"main-header-nav__mobile-item"},[a("li",{on:{click:function(e){return t.redirectPage("home")}}},[a("span",[t._v("Home")])]),a("li",{on:{click:function(e){return t.redirectPage("home_products")}}},[a("span",[t._v("Products")])]),a("li",{on:{click:function(e){return t.redirectPage("admin")}}},[a("span",[t._v("Admin")])])])]:t._e()],2)],1),a("div",{staticClass:"main-header-excerpt-container"},[t._t("default"),t.textContent.title?[a("div",{staticClass:"main-header-excerpt"},[a("h4",[t._v(t._s(t.textContent.title))]),a("p",{staticClass:"main-header-excerpt__text"},[t._v(t._s(t.textContent.description))])])]:t._e()],2)])},o=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"main-header-nav__icon"},[a("i",{staticClass:"el-icon-time"}),a("span",[t._v("Side Project")])])}],i={components:{},props:{textContent:{type:Object,default:function(){return{title:"",description:""}}}},data:function(){return{exandNav:!1}},computed:{},watch:{},created:function(){},mounted:function(){},methods:{redirectPage:function(t){this.$router.push({name:t})},toggleNav:function(){this.exandNav=!this.exandNav}}},r=i,c=(a("b1cf"),a("2877")),s=Object(c["a"])(r,n,o,!1,null,null,null);e["a"]=s.exports},"1fc3":function(t,e,a){},2111:function(t,e,a){},2642:function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"productpage"},[a("header",[a("div",{staticClass:"productpage__banner"},[a("MainPageHeader",{attrs:{textContent:t.headerTextContent}})],1)]),a("h2",{staticClass:"productpage__title"},[t._v("See What We Have Now!")]),a("CustomerOrder",{attrs:{productApi:"https://vue-course-api.hexschool.io/api/leochuang/products"}}),t.isLoading?t._e():a("footer",[a("Footer")],1)],1)},o=[],i=a("729c"),r=a("18e6"),c=a("46db"),s={components:{CustomerOrder:i["default"],MainPageHeader:r["a"],Footer:c["a"]},props:{},data:function(){return{headerTextContent:{title:"All About Quality",description:"Outstanding quality with satisfactory service is all we matter!"},isLoading:!0}},watch:{},computed:{},created:function(){var t=this;this.$root.$on("CustomerOrder:Loading",(function(e){t.$set(t,"isLoading",e)}))},mounted:function(){},destroyed:function(){this.$root.$off("CustomerOrder:Loading")},methods:{}},u=s,d=(a("a482"),a("2877")),l=Object(d["a"])(u,n,o,!1,null,null,null);e["default"]=l.exports},"3d4b":function(t,e,a){"use strict";a("91f1")},"46db":function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},o=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"footer"},[a("div",{staticClass:"footer__content"},[a("p",[t._v("Thanks for the time to visit!")]),a("p",[t._v("Created by Leo")])]),a("div",{staticClass:"footer__icon"},[a("a",{attrs:{href:"https://www.linkedin.com/in/leo-chuang/",target:"_blank"}},[a("i",{staticClass:"fab fa-lg fa-linkedin"})]),a("a",{attrs:{href:"mailto:leo36094@gmail.com",target:"_blank"}},[a("i",{staticClass:"fas fa-lg fa-envelope"})])])])}],i={components:{},props:{},data:function(){return{}},computed:{},watch:{},created:function(){},mounted:function(){},methods:{}},r=i,c=(a("84d8"),a("2877")),s=Object(c["a"])(r,n,o,!1,null,null,null);e["a"]=s.exports},"729c":function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"customer-order"},[a("Loading",{attrs:{active:t.isLoading},on:{"update:active":function(e){t.isLoading=e}}}),t.isNonEmptyArray(t.products)?[a("div",{staticClass:"customer-order-cart",on:{click:t.openCart}},[a("i",{staticClass:"fas fa-lg fa-cart-plus"}),a("div",{staticClass:"customer-order-cart__num",attrs:{value:t.cartQty}},[t._v(t._s(t.handleCartQty))])]),a("div",{staticClass:"customer-order-content"},[a("div",{staticClass:"customer-order-content__card"},[a("Card",{model:{value:t.products,callback:function(e){t.products=e},expression:"products"}})],1)]),a("Pagination",{staticClass:"customer-order__pagination",attrs:{changePage:t.changePage},model:{value:t.pagination,callback:function(e){t.pagination=e},expression:"pagination"}})]:t._e()],2)},o=[],i=(a("8e6e"),a("ac6a"),a("456d"),a("bd86")),r=a("2f62"),c=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"card-container"},[a("Loading",{attrs:{active:t.isLoading},on:{"update:active":function(e){t.isLoading=e}}}),t._l(t.fullValue,(function(e){return a("el-card",{key:e.id,staticClass:"card",attrs:{shadow:"hover","body-style":{padding:"0px"}}},[a("div",{staticClass:"card__background",style:{backgroundImage:"url("+e.imageUrl+")"}}),a("div",{staticClass:"card-info"},[a("div",{staticClass:"form__row card-info__item"},[a("span",[t._v(t._s(e.title))]),a("el-tag",{attrs:{size:"medium",type:"info"}},[t._v(t._s(e.category))])],1),a("div",{staticClass:"form__row card-info__item"},[a("p",[t._v(t._s(e.description))])]),a("div",{staticClass:"form__row card-info__item"},[a("h4",{staticClass:"card-info__item__original-price"},[t._v("原價：$"+t._s(1.8*parseInt(e.price)))]),a("span",[t._v("售價： $"+t._s(e.price))])]),a("div",{staticClass:"form__row"},[a("Button",{staticClass:"card-info__btn",attrs:{btnName:"了解更多"},nativeOn:{click:function(a){return t.openModal(e.id)}}}),a("Button",{staticClass:"card-info__btn",attrs:{colorType:"special",btnName:"加入購物車"},nativeOn:{click:function(a){return t.addToCart(e.id,e.num)}}})],1)])])}))],2)},s=[],u=a("3398");function d(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function l(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?d(Object(a),!0).forEach((function(e){Object(i["a"])(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):d(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}var f="".concat("https://vue-course-api.hexschool.io/","api/").concat("leochuang","/product/"),p="".concat("https://vue-course-api.hexschool.io/","api/leochuang/cart"),h={components:{Button:u["a"]},props:{value:{type:Array,default:function(){return[]}}},data:function(){return{showModal:!1,product:{},cartLength:"",isLoading:!1}},computed:{fullValue:{get:function(){return this.value},set:function(t){this.$emit("input",t)}}},watch:{},created:function(){},mounted:function(){},methods:l(l({},Object(r["b"])(["setModalData","setModal"])),{},{openModal:function(t){var e=this;this.showModal=!0,this.isLoading=!0,this.$http.get("".concat(f).concat(t)).then((function(t){if(t.data.success){var a=t.data.product;e.product=e.deepCopy(a),e.setModalData(e.product),e.setModal("CardModal"),e.isLoading=!1}else alert("請先登入，以利取得資料"),e.$router.push({name:"login"}),e.isLoading=!1}))},addToCart:function(t){var e=this,a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;this.isLoading=!0,this.$http.post(p,{data:{product_id:t,qty:a}}).then((function(){e.showModal=!1,e.$root.$emit("Card:refresh"),e.isLoading=!1,e.notifySuccess("成功加入購物車")}))},notifySuccess:function(t){this.$message({showClose:!0,message:t,type:"success"})}})},g=h,m=(a("3d4b"),a("2877")),v=Object(m["a"])(g,c,s,!1,null,null,null),_=v.exports,C=a("1799");function b(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function y(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?b(Object(a),!0).forEach((function(e){Object(i["a"])(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):b(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}var O="https://vue-course-api.hexschool.io/api/leochuang/cart",$={components:{Card:_,Pagination:C["a"]},props:{productApi:{type:String,default:function(){return"".concat("https://vue-course-api.hexschool.io/","api/").concat("leochuang","/admin/products")}}},data:function(){return{products:[],pagination:{},cartQty:"",isLoading:!1}},computed:{handleCartQty:function(){return this.cartQty>9?"9+":this.cartQty}},watch:{cartQty:function(t){t?this.getCartData():this.cartQty}},created:function(){var t=this;this.getProducts(),this.getCartData(),this.$root.$on("Card:refresh",(function(){t.getCartData()})),this.$root.$on("CartModal:refresh",(function(){t.getCartData()})),this.$root.$on("CardModal:refresh",(function(){t.getCartData()}))},mounted:function(){},destroyed:function(){this.$root.$off("Card:refresh"),this.$root.$off("CartModal:refresh"),this.$root.$off("CardModal:refresh")},methods:y(y({},Object(r["b"])(["setModal"])),{},{getProducts:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;this.isLoading=!0,this.$http.get("".concat(this.productApi,"?page=").concat(e)).then((function(e){if(e.data.success){var a=e.data,n=a.products,o=a.pagination;t.products=t.deepCopy(n),t.pagination=o,t.isLoading=!1,t.$root.$emit("CustomerOrder:Loading",t.isLoading)}else alert("請先登入，以利取得資料"),t.$router.push({name:"login"}),t.isLoading=!1}))},getCartData:function(){var t=this;this.$http.get(O).then((function(e){return t.cartQty=e.data.data.carts.length}))},changePage:function(t){this.getProducts(t)},showModal:function(){this.setModal("CartModal")},openCart:function(){this.showModal()}})},w=$,P=(a("f13d"),Object(m["a"])(w,n,o,!1,null,null,null));e["default"]=P.exports},7977:function(t,e,a){},"84d8":function(t,e,a){"use strict";a("7977")},"8c2e":function(t,e,a){},"91f1":function(t,e,a){},a482:function(t,e,a){"use strict";a("2111")},b1cf:function(t,e,a){"use strict";a("8c2e")},f13d:function(t,e,a){"use strict";a("1fc3")}}]);
//# sourceMappingURL=chunk-1d0e7b82.804b55af.js.map