(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2b4019b3"],{"1d57":function(t,n,o){"use strict";var s=o("6cad"),e=o.n(s);e.a},"6b27":function(t,n,o){"use strict";o.r(n);var s=function(){var t=this,n=t.$createElement,o=t._self._c||n;return o("div",{staticClass:"login-page__wrapper"},[o("div",{staticClass:"login-page__container"},[o("div",{staticClass:"login"},[o("form",{staticClass:"login__form form_row",on:{submit:function(n){return n.preventDefault(),t.signIn(n)}}},[o("div",{staticClass:"login__form__item form__column full"},[o("Label",{attrs:{labelName:"帳號"}})],1),o("div",{staticClass:"login__form__item form__column full"},[o("Input",{attrs:{type:"text",placeholder:"請輸入帳號"},model:{value:t.login.username,callback:function(n){t.$set(t.login,"username",n)},expression:"login.username"}})],1),o("div",{staticClass:"login__form__item form__column full"},[o("Label",{attrs:{labelName:"密碼"}})],1),o("div",{staticClass:"login__form__item form__column full"},[o("Input",{attrs:{type:"password",placeholder:"請輸入密碼"},model:{value:t.login.password,callback:function(n){t.$set(t.login,"password",n)},expression:"login.password"}})],1),o("div",{staticClass:"login__form__button"},[o("button",{on:{submit:function(n){return n.preventDefault(),t.signIn(n)}}},[t._v("登入")])])])])])])},e=[],i=o("4329"),a=o("e433"),l={components:{Label:i["a"],Input:a["a"]},props:{},data:function(){return{login:{username:"",password:""}}},watch:{},computed:{},created:function(){},mounted:function(){},destroyed:function(){},methods:{signIn:function(){var t=this,n="https://vue-course-api.hexschool.io/admin/signin";this.$http.post(n,this.login).then(function(n){n.data.success&&t.$router.push("/admin")})}}},r=l,u=(o("1d57"),o("2877")),c=Object(u["a"])(r,s,e,!1,null,null,null);c.options.__file="LoginPage.vue";n["default"]=c.exports},"6cad":function(t,n,o){}}]);
//# sourceMappingURL=chunk-2b4019b3.d0110678.js.map