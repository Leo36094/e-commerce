(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-f6376922"],{1799:function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"block"},[n("el-pagination",{attrs:{"page-size":10,layout:"total, prev, pager, next","page-count":t.fullValue.total_pages},on:{"current-change":t.changePage},model:{value:t.fullValue,callback:function(e){t.fullValue=e},expression:"fullValue"}})],1)},o=[],i={components:{},props:{value:{type:Object,default:function(){return{}}},changePage:{type:Function,default:function(){return""}}},data:function(){return{}},computed:{fullValue:{get:function(){return this.value},set:function(t){this.$emit("input",t)}}},watch:{},created:function(){},mounted:function(){},destroyed:function(){},methods:{handleCurrentChange:function(t){this.$emit("pagination:onChangePage",t)}}},c=i,s=n("2877"),u=Object(s["a"])(c,a,o,!1,null,null,null);e["a"]=u.exports},"9cd2":function(t,e,n){"use strict";n("e5b5")},b615:function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"products"},[n("div",{staticClass:"products-content"},[n("Loading",{attrs:{active:t.isLoading},on:{"update:active":function(e){t.isLoading=e}}}),n("Button",{attrs:{btnName:"新增優惠卷"},nativeOn:{click:function(e){return e.stopPropagation(),e.preventDefault(),t.showSidePopup.apply(null,arguments)}}}),n("Button",{attrs:{btnName:"刪除優惠卷"},nativeOn:{click:function(e){return e.stopPropagation(),e.preventDefault(),t.deleteMultiProducts(t.selectedItem)}}}),n("div",{staticClass:"products-content__table-container"},[n("el-table",{staticClass:"products-content__table",attrs:{data:t.coupons,"empty-text":"優惠卷尚未建立 >_<"},on:{"selection-change":t.handleSelectionChange}},[n("el-table-column",{attrs:{type:"selection",width:"45"}}),n("el-table-column",{attrs:{label:"Title",prop:"title",sortable:""}},[t._v(t._s(t.coupons.title))]),n("el-table-column",{attrs:{label:"Active",prop:"readableStatus",sortable:""}}),n("el-table-column",{attrs:{label:"Due date",prop:"readableDate",sortable:""}}),n("el-table-column",{staticClass:"products-content__table__search",scopedSlots:t._u([{key:"default",fn:function(e){return[n("el-button",{style:{"margin-right":"25px"},attrs:{size:"small",type:"success",icon:"el-icon-edit",round:""},on:{click:function(n){return t.handleEdit(e.$index,e.row)}}}),n("el-button",{attrs:{size:"small",type:"danger",icon:"el-icon-delete",round:""},on:{click:function(n){return t.handleDelete(e.$index,e.row)}}})]}}])})],1)],1),n("Pagination",{staticClass:"products-content__pagination",attrs:{changePage:t.changePage},model:{value:t.pagination,callback:function(e){t.pagination=e},expression:"pagination"}})],1)])},o=[],i=(n("8e6e"),n("456d"),n("bd86")),c=(n("ac6a"),n("2f62")),s=n("3398"),u=n("1799");function r(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function l(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?r(Object(n),!0).forEach((function(e){Object(i["a"])(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var p="".concat("https://vue-course-api.hexschool.io/","api/leochuang/admin/coupons"),d="".concat("https://vue-course-api.hexschool.io/","api/leochuang/admin/coupon/"),h={components:{Button:s["a"],Pagination:u["a"]},data:function(){return{coupons:[],search:"",isLoading:!1,pagination:{},selectedItem:[]}},computed:{},watch:{},created:function(){var t=this;this.init(),this.$root.$on("Coupon:refreshPageTableData",(function(){t.getCoupons()})),this.coupons.forEach((function(e){1===e.is_enabled?e.readableStatus="Active":e.readableStatus="Disabled",e.due_date?e.readableDate=t.renderTimestamp(e.due_date):e.readableDate="無期限"}))},mounted:function(){},destroyed:function(){this.$root.$off("Coupon:refreshPageTableData")},methods:l(l({},Object(c["b"])(["setPopupComponent","setPopupData"])),{},{init:function(){this.getCoupons()},getCoupons:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;this.isLoading=!0,this.$http.get("".concat(p,"?page=").concat(e)).then((function(e){if(e.data.success){var n=e.data,a=n.coupons,o=n.pagination;t.coupons=t.deepCopy(a),t.coupons.forEach((function(e){1===e.is_enabled?e.readableStatus="Active":e.readableStatus="Disabled",e.due_date?e.readableDate=t.renderTimestamp(e.due_date):e.readableDate="無期限"})),t.pagination=o,t.isLoading=!1}else alert("請先登入，以利取得資料"),t.$router.push({name:"login"}),t.isLoading=!1}))},handleEdit:function(t,e){this.setPopupData(e),this.showSidePopup("CreateCouponForm")},handleDelete:function(t,e){var n=this;this.$http.delete("".concat(d).concat(e.id),{data:e}).then((function(){n.init(),n.deleteMessage()}))},showSidePopup:function(){this.setPopupComponent("CreateCouponForm")},deleteMessage:function(){this.$message({showClose:!0,message:"已刪除",type:"success"})},changePage:function(t){this.getCoupons(t)},handleSelectionChange:function(t){this.selectedItem=t},deleteMultiProducts:function(t){var e=this;t.length>0?t.map((function(t){return e.handleDelete("",t)})):this.$message({message:"請選擇產品進行刪除",type:"warning"})},renderTimestamp:function(t){var e=new Date(t),n=e.getFullYear(),a=e.getMonth()+1,o=e.getDate();return"".concat(n,"/").concat(a,"/").concat(o)}})},f=h,g=(n("9cd2"),n("2877")),b=Object(g["a"])(f,a,o,!1,null,null,null);e["default"]=b.exports},e5b5:function(t,e,n){}}]);
//# sourceMappingURL=chunk-f6376922.6133ff97.js.map