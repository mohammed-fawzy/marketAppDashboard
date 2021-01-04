webpackJsonp([13],{

/***/ 1001:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ __webpack_exports__["a"] = ({
     data() {
          return {
               orders: {},
               orderStatus: ['finished', 'rejected', 'wait_for_delivery', 'accepted', 'on_deliver'],
               selectedOrderStatus: '',
               pageNum: 1,
               total_pages: null
          };
     },
     mounted() {
          this.loadOrders();
     },
     methods: {
          loadOrders() {
               //   pageNum = pageNum ? pageNum : '';
               this.axios.get(`api/admin/orders?page=${this.pageNum}`).then(response => {
                    if (response.status == 200) {
                         if (response.data.status == true) {
                              this.orders = response.data.data;
                              this.total_pages = response.data.data.paginate.total_pages;
                         }
                    }
               });
          },
          updataOrderStatus(orderId, orderStatus) {
               console.log('orderStatus', orderStatus);
               let formData = new FormData();
               formData.append('_method', 'PUT');
               let status = {
                    status: orderStatus
               };
               formData.set('status', status.status);
               this.axios.post(`api/admin/orders/${orderId}`, formData).then(response => {
                    if (response.status == 200) {
                         this.loadOrders();
                    }
               });
          },
          handlePgnation(pageNum) {
               this.pageNum = pageNum;
               this.loadOrders();
          }

     }
});

/***/ }),

/***/ 1172:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1173);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(3)("215a388b", content, true, {});

/***/ }),

/***/ 1173:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(false);
// imports


// module
exports.push([module.i, ".border-table{border:1px solid #dee2e6}", ""]);

// exports


/***/ }),

/***/ 1174:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('section',[_c('div',{staticClass:"animated fadeIn"},[_c('div',{staticClass:"row"},[_c('div',{staticClass:"col-xs-12 col-md-12"},[_c('card',{attrs:{"header-text":"Orders"}},[_c('div',{staticClass:"table-responsive"},[_c('table',{staticClass:"table table-striped first-td-padding border-table"},[_c('thead',[_c('tr',[_c('td',[_vm._v("ID")]),_vm._v(" "),_c('td',[_vm._v("Change status")]),_vm._v(" "),_c('td',[_vm._v("Address ")]),_vm._v(" "),_c('td',[_vm._v("Total ")]),_vm._v(" "),_c('td',[_vm._v("Delivery price")]),_vm._v(" "),_c('td',[_vm._v("Date")]),_vm._v(" "),_c('td',[_vm._v("User Name")]),_vm._v(" "),_c('td',[_vm._v("Phone number")]),_vm._v(" "),_c('td',[_vm._v("Status")])])]),_vm._v(" "),_c('tbody',_vm._l((_vm.orders.items),function(order){return _c('tr',{key:order.id},[_c('td',[_vm._v(_vm._s(order.id))]),_vm._v(" "),_c('td',[_c('select',{directives:[{name:"model",rawName:"v-model",value:(order.status),expression:"order.status"}],staticClass:"form-control",attrs:{"name":"select","id":"select"},on:{"change":[function($event){var $$selectedVal = Array.prototype.filter.call($event.target.options,function(o){return o.selected}).map(function(o){var val = "_value" in o ? o._value : o.value;return val}); _vm.$set(order, "status", $event.target.multiple ? $$selectedVal : $$selectedVal[0])},function($event){return _vm.updataOrderStatus(order.id, order.status)}]}},[_c('option',{attrs:{"disabled":"","value":"null","selected":""}},[_vm._v("Change status")]),_vm._v(" "),_vm._l((_vm.orderStatus),function(status,index){return _c('option',{key:index},[_vm._v(_vm._s(status))])})],2)]),_vm._v(" "),_c('td',{staticClass:"text-capitalize"},[_vm._v(_vm._s(order.address.address))]),_vm._v(" "),_c('td',[_vm._v(_vm._s(order.total))]),_vm._v(" "),_c('td',[_vm._v(_vm._s(order.delivery_cost))]),_vm._v(" "),_c('td',[_vm._v(_vm._s(order.created_at))]),_vm._v(" "),_c('td',{staticClass:"text-capitalize"},[_vm._v(_vm._s(order.user.name))]),_vm._v(" "),_c('td',[_vm._v(_vm._s(order.user.phone))]),_vm._v(" "),_c('td',{staticClass:"text-capitalize"},[_vm._v(_vm._s(order.status))])])}),0)]),_vm._v(" "),(_vm.total_pages > 1)?_c('nav',{staticClass:"mt-4"},[_c('paginate',{attrs:{"page-count":_vm.total_pages,"margin-pages":2,"click-handler":_vm.handlePgnation,"prev-text":'Prev',"next-text":'Next',"container-class":'pagination justify-content-center',"active-class":"active","page-class":'page-item',"page-link-class":'page-link',"prev-class":'page-item',"prev-link-class":'page-link',"next-link-class":'page-link',"next-class":'page-item'}})],1):_vm._e()])])],1)])])])}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),

/***/ 62:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_orders_vue__ = __webpack_require__(1001);
/* empty harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_6ef6b81c_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_orders_vue__ = __webpack_require__(1174);
function injectStyle (ssrContext) {
  __webpack_require__(1172)
}
var normalizeComponent = __webpack_require__(0)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_orders_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_6ef6b81c_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_orders_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ })

});
//# sourceMappingURL=13.build.js.map