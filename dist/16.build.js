webpackJsonp([16],{

/***/ 1006:
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

/* harmony default export */ __webpack_exports__["a"] = ({
     data() {
          return {
               messsages: {},
               pageNum: 1,
               total_pages: null
          };
     },
     mounted() {
          this.loadMessages();
     },
     methods: {
          loadMessages() {
               this.axios.get(`api/admin/contacts`).then(response => {
                    if (response.status == 200) {
                         if (response.data.status == true) {
                              this.messsages = response.data.data;
                              this.total_pages = response.data.data.paginate.total_pages;
                         }
                    }
               });
          },
          handlePgnation(pageNum) {
               this.pageNum = pageNum;
               this.loadMessages();
          }
     }
});

/***/ }),

/***/ 1185:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1186);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(3)("55d6b876", content, true, {});

/***/ }),

/***/ 1186:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(false);
// imports


// module
exports.push([module.i, ".border-table{border:1px solid #dee2e6}", ""]);

// exports


/***/ }),

/***/ 1187:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('section',[_c('div',{staticClass:"animated fadeIn"},[_c('div',{staticClass:"row"},[_c('div',{staticClass:"col-xs-12 col-md-12"},[_c('card',{attrs:{"header-text":"Messages"}},[_c('div',{staticClass:"table-responsive"},[_c('table',{staticClass:"table table-striped first-td-padding border-table"},[_c('thead',[_c('tr',[_c('td',[_vm._v("ID")]),_vm._v(" "),_c('td',[_vm._v("Name")]),_vm._v(" "),_c('td',[_vm._v("Email")]),_vm._v(" "),_c('td',[_vm._v("Phone")]),_vm._v(" "),_c('td',[_vm._v("Date")]),_vm._v(" "),_c('td',[_vm._v("Message")])])]),_vm._v(" "),_c('tbody',_vm._l((_vm.messsages.items),function(message){return _c('tr',{key:message.id},[_c('td',[_vm._v(_vm._s(message.id))]),_vm._v(" "),_c('td',[_vm._v(_vm._s(message.name))]),_vm._v(" "),_c('td',[_vm._v(_vm._s(message.email))]),_vm._v(" "),_c('td',[_vm._v(_vm._s(message.phone))]),_vm._v(" "),_c('td',[_vm._v(_vm._s(message.created_at))]),_vm._v(" "),_c('td',[_vm._v(_vm._s(message.message))])])}),0)]),_vm._v(" "),(_vm.total_pages > 1)?_c('nav',{staticClass:"mt-4"},[_c('paginate',{attrs:{"page-count":_vm.total_pages,"margin-pages":2,"click-handler":_vm.handlePgnation,"prev-text":'Prev',"next-text":'Next',"container-class":'pagination justify-content-center',"active-class":"active","page-class":'page-item',"page-link-class":'page-link',"prev-class":'page-item',"prev-link-class":'page-link',"next-link-class":'page-link',"next-class":'page-item'}})],1):_vm._e()])])],1)])])])}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),

/***/ 63:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_messages_vue__ = __webpack_require__(1006);
/* empty harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_0bda2b57_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_messages_vue__ = __webpack_require__(1187);
function injectStyle (ssrContext) {
  __webpack_require__(1185)
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
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_messages_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_0bda2b57_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_messages_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ })

});
//# sourceMappingURL=16.build.js.map