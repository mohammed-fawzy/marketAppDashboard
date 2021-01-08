webpackJsonp([14],{

/***/ 1009:
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
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["a"] = ({
     data() {
          return {
               orders: {
                    items: []
               },
               orderStatus: ['finished', 'rejected', 'wait_for_delivery', 'accepted', 'on_deliver'],
               selectedOrderStatus: '',
               pageNum: 1,
               total_pages: null,
               showModal: false,
               orderId: null
          };
     },
     mounted() {
          this.loadOrders();
          // this.getCategory();
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
          getCategory() {
               this.axios.get('api/admin/categories').then(response => {
                    if (response.status == 200) {
                         if (response.data.status == true) {
                              this.categories = response.data.data;
                         }
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

/***/ 1195:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1196);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(3)("53eba4d4", content, true, {});

/***/ }),

/***/ 1196:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(false);
// imports


// module
exports.push([module.i, ".product-img{width:50px;height:auto}.border-table{border:1px solid #dee2e6}.degree-input{width:128px}", ""]);

// exports


/***/ }),

/***/ 1197:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('section',[_c('div',{staticClass:"container"},[(_vm.orders.items.length)?_c('div',{staticClass:"card"},[_vm._m(0),_vm._v(" "),_c('div',{staticClass:"card-body card-block"},[_c('div',{staticClass:"table-responsive"},[_c('table',{staticClass:"table table-striped first-td-padding border-table"},[_vm._m(1),_vm._v(" "),_c('tbody',_vm._l((_vm.orders.items),function(order){return _c('tr',{key:order.id},[_c('td',[_vm._v(_vm._s(order.id))]),_vm._v(" "),_c('td',{staticClass:"text-capitalize"},[_vm._v(_vm._s(order.address.address))]),_vm._v(" "),_c('td',[_vm._v(_vm._s(order.total))]),_vm._v(" "),_c('td',[_vm._v(_vm._s(order.delivery_cost))]),_vm._v(" "),_c('td',[_vm._v(_vm._s(order.created_at))]),_vm._v(" "),_c('td',{staticClass:"text-capitalize"},[_vm._v(_vm._s(order.user.name))]),_vm._v(" "),_c('td',[_vm._v(_vm._s(order.user.phone))]),_vm._v(" "),_c('td',{staticClass:"text-capitalize"},[_vm._v(_vm._s(order.status))]),_vm._v(" "),_c('td',[_c('router-link',{attrs:{"to":{ name: 'single-order', query: { id: order.id }}}},[_c('span',{staticClass:"btn btn-info"},[_vm._v("Show")])])],1)])}),0)]),_vm._v(" "),(_vm.total_pages > 1)?_c('nav',{staticClass:"mt-4"},[_c('paginate',{attrs:{"page-count":_vm.total_pages,"margin-pages":2,"click-handler":_vm.handlePgnation,"prev-text":'Prev',"next-text":'Next',"container-class":'pagination justify-content-center',"active-class":"active","page-class":'page-item',"page-link-class":'page-link',"prev-class":'page-item',"prev-link-class":'page-link',"next-link-class":'page-link',"next-class":'page-item'}})],1):_vm._e()])])]):_vm._e()])])}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"card-header"},[_c('strong',[_vm._v(" Researcher dashboard")])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('thead',[_c('tr',[_c('td',[_vm._v("ID")]),_vm._v(" "),_c('td',[_vm._v("Address ")]),_vm._v(" "),_c('td',[_vm._v("Total ")]),_vm._v(" "),_c('td',[_vm._v("Delivery price")]),_vm._v(" "),_c('td',[_vm._v("Date")]),_vm._v(" "),_c('td',[_vm._v("User Name")]),_vm._v(" "),_c('td',[_vm._v("Phone number")]),_vm._v(" "),_c('td',[_vm._v("Status")]),_vm._v(" "),_c('td',[_vm._v("Show")])])])}]
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),

/***/ 65:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_researcher_dashboard_vue__ = __webpack_require__(1009);
/* empty harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_7e51251f_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_researcher_dashboard_vue__ = __webpack_require__(1197);
function injectStyle (ssrContext) {
  __webpack_require__(1195)
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
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_researcher_dashboard_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_7e51251f_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_researcher_dashboard_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ })

});
//# sourceMappingURL=14.build.js.map