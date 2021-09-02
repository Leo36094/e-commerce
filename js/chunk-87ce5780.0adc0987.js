(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-87ce5780"],{1799:function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"block"},[n("el-pagination",{attrs:{"page-size":10,layout:"total, prev, pager, next","page-count":t.fullValue.total_pages},on:{"current-change":t.changePage},model:{value:t.fullValue,callback:function(e){t.fullValue=e},expression:"fullValue"}})],1)},o=[],c={components:{},props:{value:{type:Object,default:function(){return{}}},changePage:{type:Function,default:function(){return""}}},data:function(){return{}},computed:{fullValue:{get:function(){return this.value},set:function(t){this.$emit("input",t)}}},watch:{},created:function(){},mounted:function(){},destroyed:function(){},methods:{handleCurrentChange:function(t){this.$emit("pagination:onChangePage",t)}}},i=c,s=n("2877"),r=Object(s["a"])(i,a,o,!1,null,null,null);e["a"]=r.exports},"363a":function(t,e,n){},"491b":function(t,e,n){"use strict";n("363a")},"6d09":function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"products"},[n("div",{staticClass:"products-content"},[n("Loading",{attrs:{active:t.isLoading},on:{"update:active":function(e){t.isLoading=e}}}),n("Button",{attrs:{btnName:"新增產品"},nativeOn:{click:function(e){return e.stopPropagation(),e.preventDefault(),t.showSidePopup.apply(null,arguments)}}}),n("Button",{attrs:{btnName:"刪除已選產品"},nativeOn:{click:function(e){return e.stopPropagation(),e.preventDefault(),t.deleteMultiProducts(t.selectedItem)}}}),n("div",{staticClass:"products-content__table-container"},[n("el-table",{staticClass:"products-content__table",attrs:{data:t.products.filter((function(e){return!t.search||e.category.toLowerCase().includes(t.search.toLowerCase())})),height:"620"},on:{"selection-change":t.handleSelectionChange}},[n("el-table-column",{attrs:{type:"selection",width:"45"}}),n("el-table-column",{attrs:{label:"Category",prop:"category",sortable:""}},[t._v(t._s(t.products.category))]),n("el-table-column",{attrs:{label:"Product Name",prop:"title"}}),n("el-table-column",{attrs:{label:"Cost",prop:"origin_price",sortable:""}}),n("el-table-column",{attrs:{label:"Price",prop:"price",sortable:""}}),n("el-table-column",{attrs:{label:"Active",prop:"readableStatus",sortable:""}}),n("el-table-column",{staticClass:"products-content__table__search",scopedSlots:t._u([{key:"default",fn:function(e){return[n("el-button",{style:{"margin-right":"25px"},attrs:{size:"small",type:"success",icon:"el-icon-edit",round:""},on:{click:function(n){return t.handleEdit(e.$index,e.row)}}}),n("el-button",{attrs:{size:"small",type:"danger",icon:"el-icon-delete",round:""},on:{click:function(n){return t.handleDelete(e.$index,e.row)}}})]}}])},[n("template",{attrs:{width:"16%"},slot:"header"},[n("el-input",{attrs:{size:"mini",placeholder:"輸入關鍵字"},model:{value:t.search,callback:function(e){t.search=e},expression:"search"}})],1)],2)],1)],1),n("Pagination",{staticClass:"products-content__pagination",attrs:{changePage:t.changePage},model:{value:t.pagination,callback:function(e){t.pagination=e},expression:"pagination"}})],1)])},o=[],c=(n("8e6e"),n("456d"),n("bd86")),i=(n("ac6a"),n("2f62")),s=n("3398"),r=n("1799");function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function u(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){Object(c["a"])(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var p="".concat("https://vue-course-api.hexschool.io/","api/").concat("leochuang","/admin/products"),d="".concat("https://vue-course-api.hexschool.io/","api/leochuang/admin/product/"),h={components:{Button:s["a"],Pagination:r["a"]},data:function(){return{products:[],search:"",isLoading:!1,pagination:{},selectedItem:[]}},computed:{},watch:{},created:function(){var t=this;this.init(),this.$root.$on("Popup:refreshPageTableData",(function(){t.getProducts()})),this.products.forEach((function(t){1===t.is_enabled?t.readableStatus="Active":t.readableStatus="Disabled"}))},mounted:function(){},destroyed:function(){this.$root.$off("Popup:refreshPageTableData")},methods:u(u({},Object(i["b"])(["setPopupComponent","setPopupData"])),{},{init:function(){this.getProducts()},getProducts:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;this.isLoading=!0,this.$http.get("".concat(p,"?page=").concat(e)).then((function(e){if(e.data.success){var n=e.data,a=n.products,o=n.pagination;t.products=t.deepCopy(a),t.products.forEach((function(t){1===t.is_enabled?t.readableStatus="Active":t.readableStatus="Disabled"})),t.pagination=o,t.isLoading=!1}else alert("請先登入，以利取得資料"),t.$router.push({name:"login"}),t.isLoading=!1}))},handleEdit:function(t,e){this.setPopupData(e),this.showSidePopup("CreateProductForm")},handleDelete:function(t,e){var n=this;this.$http.delete("".concat(d).concat(e.id),{data:e}).then((function(){n.init(),n.deleteMessage()}))},showSidePopup:function(){this.setPopupComponent("CreateProductForm")},deleteMessage:function(){this.$message({showClose:!0,message:"已刪除",type:"success"})},changePage:function(t){this.getProducts(t)},handleSelectionChange:function(t){this.selectedItem=t},deleteMultiProducts:function(t){var e=this;t.length>0?t.map((function(t){return e.handleDelete("",t)})):this.$message({message:"請選擇產品進行刪除",type:"warning"})}})},f=h,g=(n("491b"),n("2877")),b=Object(g["a"])(f,a,o,!1,null,null,null);e["default"]=b.exports}}]);
//# sourceMappingURL=chunk-87ce5780.0adc0987.js.map