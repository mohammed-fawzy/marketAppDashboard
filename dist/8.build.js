webpackJsonp([8],{

/***/ 1004:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__models_showOrder__ = __webpack_require__(1180);
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
     components: { showModal: __WEBPACK_IMPORTED_MODULE_0__models_showOrder__["a" /* default */] },
     data() {
          return {
               orders: {},
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
          showEditModal(orderId) {
               this.showModal = true;
               this.orderId = orderId;
          },
          closeEditModal() {
               this.showModal = !this.showModal;
          },
          handlePgnation(pageNum) {
               this.pageNum = pageNum;
               this.loadOrders();
          }

     }
});

/***/ }),

/***/ 1005:
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

/* harmony default export */ __webpack_exports__["a"] = ({
     props: ['orderId'],
     data() {
          return {
               order: {}
          };
     },
     mounted() {
          this.loadAllData();
     },
     methods: {
          loadAllData() {
               if (this.orderId) {
                    this.axios.get(`api/admin/orders/${this.orderId}`).then(response => {
                         if (response.status == 200) {
                              if (response.data.status == true) {
                                   this.order = response.data.data;
                              }
                         }
                    });
               }
          },
          closeEditModal() {
               this.$emit("closeModalEvent");
          }
     }
});

/***/ }),

/***/ 1178:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1179);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(3)("abea7712", content, true, {});

/***/ }),

/***/ 1179:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(false);
// imports


// module
exports.push([module.i, ".border-table{border:1px solid #dee2e6}", ""]);

// exports


/***/ }),

/***/ 1180:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_showOrder_vue__ = __webpack_require__(1005);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_3254c93c_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_showOrder_vue__ = __webpack_require__(1183);
function injectStyle (ssrContext) {
  __webpack_require__(1181)
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
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_showOrder_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_3254c93c_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_showOrder_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 1181:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1182);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(3)("26e88d37", content, true, {});

/***/ }),

/***/ 1182:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(false);
// imports


// module
exports.push([module.i, ".modal-mask{position:fixed;z-index:9998;top:0;left:0;width:100%;height:100%;background-color:rgba(0,0,0,.5);display:table;transition:opacity .3s ease}.modal-wrapper{display:table-cell;vertical-align:middle}.product-img{width:100px;height:auto}", ""]);

// exports


/***/ }),

/***/ 1183:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"modal-mask"},[_c('div',{staticClass:"modal-wrapper"},[_c('div',{staticClass:"modal fade show d-block",attrs:{"id":"exampleModalCenter","tabindex":"-1","role":"dialog","aria-labelledby":"exampleModalCenterTitle","aria-hidden":"true"}},[_c('div',{staticClass:"modal-dialog modal-dialog-centered modal-lg",attrs:{"role":"document"}},[_c('div',{staticClass:"modal-content"},[_c('div',{staticClass:"modal-header"},[_c('h5',{staticClass:"modal-title display-5",attrs:{"id":"exampleModalLongTitle"}},[_vm._v("Order")]),_vm._v(" "),_c('button',{staticClass:"close",attrs:{"type":"button","data-dismiss":"modal","aria-label":"Close"},on:{"click":_vm.closeEditModal}},[_c('span',{attrs:{"aria-hidden":"true"}},[_vm._v("×")])])]),_vm._v(" "),_c('div',{staticClass:"modal-body"},[_c('table',{staticClass:"table table-striped"},[_vm._m(0),_vm._v(" "),_c('tbody',[_c('tr',[_c('th',{attrs:{"scope":"row"}},[_vm._v(_vm._s(_vm.order.id))]),_vm._v(" "),_c('td',[_vm._v(_vm._s(_vm.order.created_at))]),_vm._v(" "),_c('td',[_vm._v(_vm._s(_vm.order.address.address))]),_vm._v(" "),_c('td',[_vm._v(_vm._s(_vm.order.user.name))]),_vm._v(" "),_c('td',[_vm._v(_vm._s(_vm.order.total))])])])]),_vm._v(" "),(_vm.order.items.length)?[_c('p',{staticClass:"text-center mt-4 mb-4"},[_vm._v("Products")]),_vm._v(" "),_c('table',{staticClass:"table table-bordered"},[_vm._m(1),_vm._v(" "),_c('tbody',_vm._l((_vm.order.items),function(item){return _c('tr',{key:item.id},[_c('th',{attrs:{"scope":"row"}},[_vm._v(_vm._s(item.id))]),_vm._v(" "),_c('th',[_vm._v(_vm._s(item.quantity))]),_vm._v(" "),_c('td',[_vm._v(_vm._s(item.current_temp))]),_vm._v(" "),_c('td',[_vm._v(_vm._s(item.product.name))]),_vm._v(" "),_c('td',[_c('img',{staticClass:"product-img",attrs:{"src":item.product.image}})])])}),0)])]:[_c('p',{staticClass:"text-center"},[_vm._v(" No products")])]],2)])])])])])}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('thead',[_c('tr',[_c('th',{attrs:{"scope":"col"}},[_vm._v("ID")]),_vm._v(" "),_c('th',{attrs:{"scope":"col"}},[_vm._v("Date")]),_vm._v(" "),_c('th',{attrs:{"scope":"col"}},[_vm._v("To")]),_vm._v(" "),_c('th',{attrs:{"scope":"col"}},[_vm._v("Name")]),_vm._v(" "),_c('th',{attrs:{"scope":"col"}},[_vm._v("Total")])])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('thead',[_c('tr',[_c('th',{attrs:{"scope":"col"}},[_vm._v("ID")]),_vm._v(" "),_c('th',{attrs:{"scope":"col"}},[_vm._v("Quantity")]),_vm._v(" "),_c('th',{attrs:{"scope":"col"}},[_vm._v("Current_temp")]),_vm._v(" "),_c('th',{attrs:{"scope":"col"}},[_vm._v("Product name")]),_vm._v(" "),_c('th',{attrs:{"scope":"col"}},[_vm._v("Product Image")])])])}]
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),

/***/ 1184:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('section',[_c('div',{staticClass:"animated fadeIn"},[_c('div',{staticClass:"row"},[_c('div',{staticClass:"col-xs-12 col-md-12"},[_c('card',{attrs:{"header-text":"Orders"}},[_c('div',{staticClass:"table-responsive"},[_c('table',{staticClass:"table table-striped first-td-padding border-table"},[_c('thead',[_c('tr',[_c('td',[_vm._v("ID")]),_vm._v(" "),_c('td',[_vm._v("Change status")]),_vm._v(" "),_c('td',[_vm._v("Address ")]),_vm._v(" "),_c('td',[_vm._v("Total ")]),_vm._v(" "),_c('td',[_vm._v("Delivery price")]),_vm._v(" "),_c('td',[_vm._v("Date")]),_vm._v(" "),_c('td',[_vm._v("User Name")]),_vm._v(" "),_c('td',[_vm._v("Phone number")]),_vm._v(" "),_c('td',[_vm._v("Status")]),_vm._v(" "),_c('td',[_vm._v("Show")])])]),_vm._v(" "),_c('tbody',_vm._l((_vm.orders.items),function(order){return _c('tr',{key:order.id},[_c('td',[_vm._v(_vm._s(order.id))]),_vm._v(" "),_c('td',[_c('select',{directives:[{name:"model",rawName:"v-model",value:(order.status),expression:"order.status"}],staticClass:"form-control",attrs:{"name":"select","id":"select"},on:{"change":[function($event){var $$selectedVal = Array.prototype.filter.call($event.target.options,function(o){return o.selected}).map(function(o){var val = "_value" in o ? o._value : o.value;return val}); _vm.$set(order, "status", $event.target.multiple ? $$selectedVal : $$selectedVal[0])},function($event){return _vm.updataOrderStatus(order.id, order.status)}]}},[_c('option',{attrs:{"disabled":"","value":"null","selected":""}},[_vm._v("Change status")]),_vm._v(" "),_vm._l((_vm.orderStatus),function(status,index){return _c('option',{key:index},[_vm._v(_vm._s(status))])})],2)]),_vm._v(" "),_c('td',{staticClass:"text-capitalize"},[_vm._v(_vm._s(order.address.address))]),_vm._v(" "),_c('td',[_vm._v(_vm._s(order.total))]),_vm._v(" "),_c('td',[_vm._v(_vm._s(order.delivery_cost))]),_vm._v(" "),_c('td',[_vm._v(_vm._s(order.created_at))]),_vm._v(" "),_c('td',{staticClass:"text-capitalize"},[_vm._v(_vm._s(order.user.name))]),_vm._v(" "),_c('td',[_vm._v(_vm._s(order.user.phone))]),_vm._v(" "),_c('td',{staticClass:"text-capitalize"},[_vm._v(_vm._s(order.status))]),_vm._v(" "),_c('td',{on:{"click":function($event){return _vm.showEditModal(order.id)}}},[_c('button',{staticClass:"btn btn-info",attrs:{"type":"button"}},[_vm._v("show")])])])}),0)]),_vm._v(" "),(_vm.total_pages > 1)?_c('nav',{staticClass:"mt-4"},[_c('paginate',{attrs:{"page-count":_vm.total_pages,"margin-pages":2,"click-handler":_vm.handlePgnation,"prev-text":'Prev',"next-text":'Next',"container-class":'pagination justify-content-center',"active-class":"active","page-class":'page-item',"page-link-class":'page-link',"prev-class":'page-item',"prev-link-class":'page-link',"next-link-class":'page-link',"next-class":'page-item'}})],1):_vm._e()])])],1)])]),_vm._v(" "),_c('transition',{attrs:{"enter-active-class":"animated fadeIn"}},[(_vm.showModal)?_c('showModal',{key:_vm.showModal,attrs:{"orderId":_vm.orderId},on:{"closeModalEvent":_vm.closeEditModal}}):_vm._e()],1)],1)}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),

/***/ 62:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_orders_vue__ = __webpack_require__(1004);
/* empty harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_46b66344_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_orders_vue__ = __webpack_require__(1184);
function injectStyle (ssrContext) {
  __webpack_require__(1178)
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
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_46b66344_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_orders_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ })

});
//# sourceMappingURL=8.build.js.map