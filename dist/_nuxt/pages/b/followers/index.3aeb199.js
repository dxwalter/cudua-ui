(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{281:function(t,e,r){var content=r(296);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(56).default)("371327b4",content,!0,{sourceMap:!1})},295:function(t,e,r){"use strict";var o=r(281);r.n(o).a},296:function(t,e,r){(e=r(55)(!1)).push([t.i,".d-flex-center[data-v-1bce20f4]{display:flex!important;justify-content:center!important;align-items:center!important}.notification-alert[data-v-1bce20f4]{border-radius:4px}",""]),t.exports=e},333:function(t,e,r){"use strict";r.r(e);r(30),r(32),r(31),r(23),r(26),r(27),r(34),r(16),r(17),r(12),r(29),r(37);var o=r(8),n=r(9),l=r(116),c=r(118),f=r(117),d=r(272),h=r(53),v=r(15),m=r(84),w=r.n(m);function y(t,e){var r;if("undefined"==typeof Symbol||null==t[Symbol.iterator]){if(Array.isArray(t)||(r=function(t,e){if(!t)return;if("string"==typeof t)return O(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);"Object"===r&&t.constructor&&(r=t.constructor.name);if("Map"===r||"Set"===r)return Array.from(t);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return O(t,e)}(t))||e&&t&&"number"==typeof t.length){r&&(t=r);var i=0,o=function(){};return{s:o,n:function(){return i>=t.length?{done:!0}:{done:!1,value:t[i++]}},e:function(t){throw t},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var n,l=!0,c=!1;return{s:function(){r=t[Symbol.iterator]()},n:function(){var t=r.next();return l=t.done,t},e:function(t){c=!0,n=t},f:function(){try{l||null==r.return||r.return()}finally{if(c)throw n}}}}function O(t,e){(null==e||e>t.length)&&(e=t.length);for(var i=0,r=new Array(e);i<e;i++)r[i]=t[i];return r}function _(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function C(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?_(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):_(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var D,E={name:"BUSINESSFOLLOWERS",components:{TOPHEADER:l.a,SIDENAV:c.a,BOTTOMNAV:f.a,PAGELOADER:d.a,STARRATING:w.a},data:function(){return{pageLoader:!0,businessId:"",accessToken:"",followers:0,followersCount:0,isError:0,page:1}},created:function(){this.GetBusinessDataFromStore(),this.GetBusinessFollowers()},computed:{returnComputedFollowers:function(){return this.followers}},methods:C(C({},Object(v.c)({GetBusinessData:"business/GetBusinessDetails",GetUserData:"customer/GetCustomerDetails"})),{},{GetBusinessDataFromStore:function(){var t=this.GetBusinessData();this.businessId=t.businessId;var e=this.GetUserData();this.accessToken=e.userToken},GetBusinessFollowers:(D=Object(o.a)(regeneratorRuntime.mark((function t(){var e,r,o,n,l,c,f;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e={businessId:this.businessId,page:this.page},r={headers:{accessToken:this.accessToken}},t.next=4,this.$performGraphQlQuery(this.$apollo,h.j,e,r);case 4:if(!(o=t.sent).error){t.next=8;break}return this.$initiateNotification("error","Failed request",o.message),t.abrupt("return");case 8:if(0!=(n=o.result.data.GetFollowers).success){t.next=13;break}return this.isError=1,this.$initiateNotification("error","Error occurred",n.message),t.abrupt("return");case 13:if(this.followersCount=this.followersCount+n.customerData.length,this.page<2)this.followers=n.customerData;else{this.followersCount=n.customerData.length<12?0:this.followersCount+n.customerData.length,l=y(n.customerData);try{for(l.s();!(c=l.n()).done;)f=c.value,this.followers.push(f)}catch(t){l.e(t)}finally{l.f()}}this.page=this.page+1;case 16:case"end":return t.stop()}}),t,this)}))),function(){return D.apply(this,arguments)}),loadMoreFollowers:function(){var t=document.getElementById("loadMoreFollowers");t.disabled=!0,this.GetBusinessFollowers(),t.disabled=!1},getNameLogo:function(t){return this.$convertNameToLogo(t)}}),mounted:function(){this.pageLoader=!1}},A=(r(295),r(7)),component=Object(A.a)(E,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"business"},[o("div",{staticClass:"body-container"},[o("TOPHEADER"),t._v(" "),o("div",{staticClass:"content-container"},[o("SIDENAV"),t._v(" "),o("div",{staticClass:"content-area grey-bg-color"},[t.pageLoader?o("PAGELOADER"):t._e(),t._v(" "),o("div",{staticClass:"main-content"},[t._m(0),t._v(" "),o("div",[o("div",{staticClass:"row"},t._l(t.returnComputedFollowers,(function(e,n){return o("div",{key:n,staticClass:"col-xs-6 col-sm-6 col-md-4 col-lg-3"},[o("div",{staticClass:"product-card"},[o("div",{staticClass:"product-card-image d-flex-center"},[o("div",{directives:[{name:"show",rawName:"v-show",value:!e.profilePhoto,expression:"!follower.profilePhoto"}],staticClass:"temporal-logo"},[t._v("\n\t\t\t\t\t\t\t\t\t\t\t"+t._s(t.getNameLogo(e.name))+"\n\t\t\t\t\t\t\t\t\t\t")]),t._v(" "),o("img",{directives:[{name:"show",rawName:"v-show",value:e.profilePhoto,expression:"follower.profilePhoto"}],attrs:{src:r(93),alt:""+e.name}})]),t._v(" "),o("div",{staticClass:"product-card-details"},[o("div",{staticClass:"product-name"},[t._v("\n\t\t\t\t\t\t\t\t\t\t\t"+t._s(e.name)+"\n\t\t\t\t\t\t\t\t\t\t")]),t._v(" "),o("div",{staticClass:"navbar-review-icon"},[o("STARRATING",{attrs:{rating:""+e.reviewScore,"show-rating":!1,"read-only":!0,"active-color":"#ef860e","round-start-rating":!1}})],1)])])])})),0),t._v(" "),t.followersCount>=12?o("div",{staticClass:"load-more-action move-center mg-top-16"},[o("button",{staticClass:"btn btn-white",attrs:{id:"loadMoreFollowers"},on:{click:function(e){return t.loadMoreFollowers()}}},[t._v("\n\t\t\t\t\t\t\t\tLoad more followers\n\t\t\t\t\t\t\t\t"),t._m(1)])]):t._e(),t._v(" "),o("div",{directives:[{name:"show",rawName:"v-show",value:!t.followersCount&&!t.pageLoader,expression:"!followersCount && !pageLoader"}]},[t._m(2)])])]),t._v(" "),o("BOTTOMNAV")],1)],1)],1)])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"page-header"},[e("h4",[this._v("Followers")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"loader-action"},[e("span",{staticClass:"loader"})])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"alert alert-info notification-alert"},[e("div",{attrs:{id:"infoArea"}},[this._v("You do not have any new follower. Do not fret, you can gain followers by sharing your shop's URL/address")]),this._v(" "),e("button",{staticClass:"btn btn-white btn-small",attrs:{"data-trigger":"modal","data-target":"changeUsername"}},[this._v("Share shop address")])])}],!1,null,"1bce20f4",null);e.default=component.exports}}]);