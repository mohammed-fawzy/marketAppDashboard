webpackJsonp([11],{

/***/ 1114:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1115);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(3)("7aac65f5", content, true, {});

/***/ }),

/***/ 1115:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(false);
// imports


// module
exports.push([module.i, ".border-table{border:1px solid #dee2e6}", ""]);

// exports


/***/ }),

/***/ 1116:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_editMainSec_vue__ = __webpack_require__(986);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_4ef05d54_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_editMainSec_vue__ = __webpack_require__(1119);
function injectStyle (ssrContext) {
  __webpack_require__(1117)
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
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_editMainSec_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_4ef05d54_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_editMainSec_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 1117:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1118);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(3)("e59c4d08", content, true, {});

/***/ }),

/***/ 1118:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(false);
// imports


// module
exports.push([module.i, ".modal-mask{position:fixed;z-index:9998;top:0;left:0;width:100%;height:100%;background-color:rgba(0,0,0,.5);display:table;transition:opacity .3s ease}.modal-wrapper{display:table-cell;vertical-align:middle}", ""]);

// exports


/***/ }),

/***/ 1119:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"modal-mask"},[_c('div',{staticClass:"modal-wrapper"},[_c('div',{staticClass:"modal fade show d-block",attrs:{"id":"exampleModalCenter","tabindex":"-1","role":"dialog","aria-labelledby":"exampleModalCenterTitle","aria-hidden":"true"}},[_c('div',{staticClass:"modal-dialog modal-dialog-centered modal-lg",attrs:{"role":"document"}},[_c('div',{staticClass:"modal-content"},[_c('div',{staticClass:"modal-header"},[_c('h5',{staticClass:"modal-title display-5",attrs:{"id":"exampleModalLongTitle"}},[_vm._v("Edit Main Section")]),_vm._v(" "),_c('button',{staticClass:"close",attrs:{"type":"button","data-dismiss":"modal","aria-label":"Close"},on:{"click":_vm.closeEditModal}},[_c('span',{attrs:{"aria-hidden":"true"}},[_vm._v("×")])])]),_vm._v(" "),_c('div',{staticClass:"modal-body"},[_c('div',{staticClass:"card"},[_c('div',{staticClass:"card-body card-block"},[_c('form',{staticClass:"form-horizontal",on:{"submit":function($event){$event.preventDefault();return _vm.handleSubmit($event)}}},[_c('div',{staticClass:"row form-group"},[_vm._m(0),_vm._v(" "),_c('div',{staticClass:"col-12 col-md-5"},[_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.mainSection.name),expression:"mainSection.name"}],staticClass:"form-control",attrs:{"type":"text","id":"text-input","name":"text-input","placeholder":"Name","required":""},domProps:{"value":(_vm.mainSection.name)},on:{"input":function($event){if($event.target.composing){ return; }_vm.$set(_vm.mainSection, "name", $event.target.value)}}})])]),_vm._v(" "),_c('button',{staticClass:"btn btn-success w-50 d-block mx-auto mt-2",attrs:{"type":"submit"}},[_vm._v("Submit "),(_vm.loading)?_c('span',[_vm._v(" Loading...")]):_vm._e()])]),_vm._v(" "),(_vm.dataAdedd)?_c('basix-alert',{staticClass:"col-6 mx-auto mt-4",attrs:{"type":"success","withCloseBtn":true}},[_c('span',{staticClass:"badge badge-pill badge-success"},[_vm._v("Success")]),_vm._v("\n                                             Data Added Successfully\n                                        ")]):_vm._e(),_vm._v(" "),(_vm.errorMessage)?_c('basix-alert',{staticClass:"col-12 col-md-6 mx-auto mt-4 text-center",attrs:{"type":"danger","withCloseBtn":true}},[_c('span',{staticClass:"badge badge-pill badge-danger"},[_vm._v(_vm._s(_vm.errorMessage))])]):_vm._e()],1)])])])])])])])}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"col col-md-3"},[_c('label',{staticClass:" form-control-label",attrs:{"for":"text-input"}},[_vm._v("Name")])])}]
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),

/***/ 1120:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('section',[_c('div',{staticClass:"animated fadeIn"},[_c('div',{staticClass:"row"},[_c('div',{staticClass:"col-10 mx-auto"},[_c('div',{staticClass:"card"},[_vm._m(0),_vm._v(" "),_c('div',{staticClass:"card-body card-block"},[_c('form',{staticClass:"form-horizontal",on:{"submit":function($event){$event.preventDefault();return _vm.handleSubmit($event)}}},[_c('div',{staticClass:"row form-group"},[_vm._m(1),_vm._v(" "),_c('div',{staticClass:"col-12 col-md-5"},[_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.mainSection.name),expression:"mainSection.name"}],staticClass:"form-control",attrs:{"type":"text","id":"text-input","name":"text-input","placeholder":"Name","required":""},domProps:{"value":(_vm.mainSection.name)},on:{"input":function($event){if($event.target.composing){ return; }_vm.$set(_vm.mainSection, "name", $event.target.value)}}})])]),_vm._v(" "),_c('button',{staticClass:"btn btn-success w-50 d-block mx-auto mt-5",attrs:{"type":"submit"}},[_vm._v("Add "),(_vm.loading)?_c('span',[_vm._v(" Loading...")]):_vm._e()])]),_vm._v(" "),(_vm.dataAdedd)?_c('basix-alert',{staticClass:"col-6 mx-auto mt-4",attrs:{"type":"success","withCloseBtn":true}},[_c('span',{staticClass:"badge badge-pill badge-success"},[_vm._v("Success")]),_vm._v("\n                                   Data Added Successfully\n                              ")]):_vm._e(),_vm._v(" "),(_vm.errorMeg)?_c('basix-alert',{staticClass:"col-12 col-md-6 mx-auto mt-4 text-center",attrs:{"type":"danger","withCloseBtn":true}},[_c('span',{staticClass:"badge badge-pill badge-danger"},[_vm._v(_vm._s(_vm.errorMeg))])]):_vm._e()],1)]),_vm._v(" "),(_vm.categories.length)?_c('div',{staticClass:"card"},[_vm._m(2),_vm._v(" "),_c('div',{staticClass:"card-body card-block"},[_c('table',{staticClass:"table table-striped first-td-padding border-table"},[_vm._m(3),_vm._v(" "),_c('tbody',_vm._l((_vm.categories),function(cat){return _c('tr',{key:cat.id},[_c('td',[_vm._v(_vm._s(cat.id))]),_vm._v(" "),_c('td',[_vm._v(_vm._s(cat.name))]),_vm._v(" "),_c('td',[(cat.sub_categories.length)?_c('select',{staticClass:"form-control",attrs:{"name":"select","id":"select"}},_vm._l((cat.sub_categories),function(cat){return _c('option',{key:cat.id,domProps:{"value":cat.id}},[_vm._v(_vm._s(cat.name))])}),0):_c('span',[_vm._v(" No sub categories")])]),_vm._v(" "),_c('td',{on:{"click":function($event){return _vm.showEditModal(cat.id)}}},[_c('button',{staticClass:"btn btn-info",attrs:{"type":"button"}},[_vm._v("Edit")])]),_vm._v(" "),_c('td',{on:{"click":function($event){return _vm.deleteItem(cat.id)}}},[_c('button',{staticClass:"btn btn-danger",attrs:{"type":"button"}},[_vm._v("Delete")])])])}),0)])])]):_vm._e()])])]),_vm._v(" "),_c('transition',{attrs:{"enter-active-class":"animated fadeIn"}},[(_vm.showModal)?_c('EditModal',{key:_vm.showModal,attrs:{"categoryId":_vm.categoryId},on:{"closeModalEvent":_vm.closeEditModal}}):_vm._e()],1)],1)}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"card-header"},[_c('strong',[_vm._v("Add main sections")])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"col col-md-3"},[_c('label',{staticClass:" form-control-label",attrs:{"for":"text-input"}},[_vm._v("Name")])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"card-header"},[_c('strong',[_vm._v("All Main Sections")])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('thead',[_c('tr',[_c('td',[_vm._v("Id")]),_vm._v(" "),_c('td',[_vm._v("Name")]),_vm._v(" "),_c('td',[_vm._v("Sub categories")]),_vm._v(" "),_c('td',[_vm._v("Edit")]),_vm._v(" "),_c('td',[_vm._v("Delete")])])])}]
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),

/***/ 58:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_main_sections_vue__ = __webpack_require__(985);
/* empty harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_b32430e6_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_main_sections_vue__ = __webpack_require__(1120);
function injectStyle (ssrContext) {
  __webpack_require__(1114)
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
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_main_sections_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_b32430e6_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_main_sections_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ 985:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__models_editMainSec__ = __webpack_require__(1116);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
     components: { EditModal: __WEBPACK_IMPORTED_MODULE_0__models_editMainSec__["a" /* default */] },
     data() {
          return {
               categories: [],
               mainSection: {
                    name: ''
               },
               loading: false,
               showModal: false,
               categoryId: null,
               dataAdedd: false,
               errorMeg: null
          };
     },
     mounted() {
          this.loadAllData();
     },
     methods: {
          loadAllData() {
               this.axios.get(`api/admin/categories`).then(response => {
                    if (response.status == 200) {
                         if (response.data.status == true) {
                              this.categories = response.data.data;
                              // this.total_pages = response.data.data.paginate.total_pages
                         }
                    }
               });
          },
          handlePgnation(pageNum) {
               this.pageNum = pageNum;
               this.loadAllData();
          },
          handleSubmit() {
               if (this.mainSection.name) {
                    this.loading = true;
                    this.errorMeg = null;
                    this.axios.post('api/admin/categories', this.mainSection).then(response => {
                         if (response.status == 200) {
                              if (response.data.status == true) {
                                   this.loading = false;
                                   this.dataAdedd = true;
                                   let self = this;
                                   setTimeout(function () {
                                        self.reset();
                                        self.loadAllData();
                                   }, 2000);
                              } else {
                                   this.errorMeg = response.data.msg;
                                   this.loading = false;
                              }
                         }
                         console.log(response);
                    });
               }
          },
          showEditModal(clientId) {
               this.showModal = true;
               this.categoryId = clientId;
          },
          closeEditModal(isUpdate) {
               this.showModal = !this.showModal;
               if (isUpdate) {
                    console.log('isUpdate', isUpdate);
                    this.loadAllData();
               }
          },
          deleteItem(itemId) {
               let r = confirm("Are you sure to delete this category ?");
               if (r == true) {
                    this.axios.delete(`api/admin/categories/${itemId}`).then(response => {
                         if (response.status == 200) {
                              if (response.data.status == true) {
                                   this.loadAllData();
                              }
                         }
                    });
               }
          },
          reset() {
               this.mainSection = {
                    name: ''
               };
               this.dataAdedd = false;
               this.errorMeg = null;
          }
     }
});

/***/ }),

/***/ 986:
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

/* harmony default export */ __webpack_exports__["a"] = ({
     props: ['categoryId'],
     data() {
          return {
               mainSection: {
                    name: ''
               },
               loading: false,
               errorMessage: '',
               dataAdedd: false,
               isUpdate: false
          };
     },
     mounted() {
          this.loadAllData();
     },
     methods: {
          loadAllData() {
               if (this.categoryId) {
                    this.axios.get(`api/admin/categories/${this.categoryId}`).then(response => {
                         if (response.status == 200) {
                              if (response.data.status == true) {
                                   let client = response.data.data;
                                   this.mainSection.name = client.name;
                              } else {
                                   this.errorMessage = response.data.msg;
                              }
                         }
                    });
               }
          },
          closeEditModal() {
               this.$emit("closeModalEvent", this.isUpdate);
          },
          handleSubmit() {
               if (this.mainSection.name) {
                    this.loading = true;
                    this.errorMeg = null;
                    this.axios.put(`api/admin/categories/${this.categoryId}`, this.mainSection).then(response => {
                         if (response.status == 200) {
                              if (response.data.status == true) {
                                   this.loading = false;
                                   this.dataAdedd = true;
                                   this.isUpdate = true;
                                   let self = this;
                                   setTimeout(function () {
                                        self.reset();
                                        self.closeEditModal();
                                   }, 2000);
                              } else {
                                   this.errorMeg = response.data.msg;
                                   this.loading = false;
                              }
                         }
                    });
               }
          },
          reset() {
               this.mainSection = {
                    name: ''
               };
               this.dataAdedd = false;
               this.errorMeg = null;
          }
     }
});

/***/ })

});
//# sourceMappingURL=11.build.js.map