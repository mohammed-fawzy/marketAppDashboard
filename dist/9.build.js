webpackJsonp([9],{

/***/ 1105:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1106);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(3)("17f535c8", content, true, {});

/***/ }),

/***/ 1106:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(false);
// imports


// module
exports.push([module.i, ".border-table{border:1px solid #dee2e6}", ""]);

// exports


/***/ }),

/***/ 1107:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_editMainSec_vue__ = __webpack_require__(982);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_2671fada_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_editMainSec_vue__ = __webpack_require__(1110);
function injectStyle (ssrContext) {
  __webpack_require__(1108)
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
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_2671fada_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_editMainSec_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 1108:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1109);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(3)("f7a39b2e", content, true, {});

/***/ }),

/***/ 1109:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(false);
// imports


// module
exports.push([module.i, ".modal-mask{position:fixed;z-index:9998;top:0;left:0;width:100%;height:100%;background-color:rgba(0,0,0,.5);display:table;transition:opacity .3s ease}.modal-wrapper{display:table-cell;vertical-align:middle}", ""]);

// exports


/***/ }),

/***/ 1110:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"modal-mask"},[_c('div',{staticClass:"modal-wrapper"},[_c('div',{staticClass:"modal fade show d-block",attrs:{"id":"exampleModalCenter","tabindex":"-1","role":"dialog","aria-labelledby":"exampleModalCenterTitle","aria-hidden":"true"}},[_c('div',{staticClass:"modal-dialog modal-dialog-centered modal-lg",attrs:{"role":"document"}},[_c('div',{staticClass:"modal-content"},[_c('div',{staticClass:"modal-header"},[_c('h5',{staticClass:"modal-title display-5",attrs:{"id":"exampleModalLongTitle"}},[_vm._v("Edit Main Section")]),_vm._v(" "),_c('button',{staticClass:"close",attrs:{"type":"button","data-dismiss":"modal","aria-label":"Close"},on:{"click":_vm.closeEditModal}},[_c('span',{attrs:{"aria-hidden":"true"}},[_vm._v("×")])])]),_vm._v(" "),_c('div',{staticClass:"modal-body"},[_c('div',{staticClass:"card"},[_c('div',{staticClass:"card-body card-block"},[_c('form',{staticClass:"form-horizontal",on:{"submit":function($event){$event.preventDefault();return _vm.handleSubmit($event)}}},[_c('div',{staticClass:"row form-group"},[_vm._m(0),_vm._v(" "),_c('div',{staticClass:"col-12 col-md-5"},[_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.mainSection.name),expression:"mainSection.name"}],staticClass:"form-control",attrs:{"type":"text","id":"text-input","name":"text-input","placeholder":"Name","required":""},domProps:{"value":(_vm.mainSection.name)},on:{"input":function($event){if($event.target.composing){ return; }_vm.$set(_vm.mainSection, "name", $event.target.value)}}})])]),_vm._v(" "),_c('input',{staticClass:"btn btn-success w-50 d-block mx-auto mt-2",attrs:{"type":"submit","value":"Submit"},on:{"click":_vm.handleSubmit}})]),_vm._v(" "),(_vm.dataAdedd)?_c('basix-alert',{staticClass:"col-6 mx-auto mt-4",attrs:{"type":"success","withCloseBtn":true}},[_c('span',{staticClass:"badge badge-pill badge-success"},[_vm._v("Success")]),_vm._v("\n                                             Data Added Successfully\n                                        ")]):_vm._e(),_vm._v(" "),(_vm.errorMessage)?_c('basix-alert',{staticClass:"col-12 col-md-6 mx-auto mt-4 text-center",attrs:{"type":"danger","withCloseBtn":true}},[_c('span',{staticClass:"badge badge-pill badge-danger"},[_vm._v(_vm._s(_vm.errorMessage))])]):_vm._e()],1)])])])])])])])}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"col col-md-3"},[_c('label',{staticClass:" form-control-label",attrs:{"for":"text-input"}},[_vm._v("Name")])])}]
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),

/***/ 1111:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('section',[_c('div',{staticClass:"animated fadeIn"},[_c('div',{staticClass:"row"},[_c('div',{staticClass:"col-10 mx-auto"},[_c('div',{staticClass:"card"},[_vm._m(0),_vm._v(" "),_c('div',{staticClass:"card-body card-block"},[_c('form',{staticClass:"form-horizontal",on:{"submit":function($event){$event.preventDefault();return _vm.handleSubmit($event)}}},[_c('div',{staticClass:"row form-group"},[_vm._m(1),_vm._v(" "),_c('div',{staticClass:"col-12 col-md-5"},[_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.mainSection.name),expression:"mainSection.name"}],staticClass:"form-control",attrs:{"type":"text","id":"text-input","name":"text-input","placeholder":"Name","required":""},domProps:{"value":(_vm.mainSection.name)},on:{"input":function($event){if($event.target.composing){ return; }_vm.$set(_vm.mainSection, "name", $event.target.value)}}})])]),_vm._v(" "),_c('input',{staticClass:"btn btn-success w-50 d-block mx-auto mt-5",attrs:{"type":"submit","value":"Add"},on:{"click":_vm.handleSubmit}})]),_vm._v(" "),(_vm.dataAdedd)?_c('basix-alert',{staticClass:"col-6 mx-auto mt-4",attrs:{"type":"success","withCloseBtn":true}},[_c('span',{staticClass:"badge badge-pill badge-success"},[_vm._v("Success")]),_vm._v("\n                                   Data Added Successfully\n                              ")]):_vm._e(),_vm._v(" "),(_vm.errorMeg)?_c('basix-alert',{staticClass:"col-12 col-md-6 mx-auto mt-4 text-center",attrs:{"type":"danger","withCloseBtn":true}},[_c('span',{staticClass:"badge badge-pill badge-danger"},[_vm._v(_vm._s(_vm.errorMeg))])]):_vm._e()],1)]),_vm._v(" "),(_vm.categories.length)?_c('div',{staticClass:"card"},[_vm._m(2),_vm._v(" "),_c('div',{staticClass:"card-body card-block"},[_c('table',{staticClass:"table table-striped first-td-padding border-table"},[_vm._m(3),_vm._v(" "),_c('tbody',_vm._l((_vm.categories),function(cat){return _c('tr',{key:cat.id},[_c('td',[_vm._v(_vm._s(cat.id))]),_vm._v(" "),_c('td',[_vm._v(_vm._s(cat.name))]),_vm._v(" "),_c('td',[(cat.sub_categories.length)?_c('select',{staticClass:"form-control",attrs:{"name":"select","id":"select"}},_vm._l((cat.sub_categories),function(cat){return _c('option',{key:cat.id,domProps:{"value":cat.id}},[_vm._v(_vm._s(cat.name))])}),0):_c('span',[_vm._v(" No sub categories")])]),_vm._v(" "),_c('td',{on:{"click":function($event){return _vm.showEditModal(cat.id)}}},[_c('button',{staticClass:"btn btn-info",attrs:{"type":"button"}},[_vm._v("Edit")])]),_vm._v(" "),_c('td',{on:{"click":function($event){return _vm.deleteItem(cat.id)}}},[_c('button',{staticClass:"btn btn-danger",attrs:{"type":"button"}},[_vm._v("Delete")])])])}),0)])])]):_vm._e()])])]),_vm._v(" "),_c('transition',{attrs:{"enter-active-class":"animated fadeIn"}},[(_vm.showModal)?_c('EditModal',{key:_vm.showModal,attrs:{"categoryId":_vm.categoryId},on:{"closeModalEvent":_vm.closeEditModal}}):_vm._e()],1)],1)}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"card-header"},[_c('strong',[_vm._v("Add main sections")])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"col col-md-3"},[_c('label',{staticClass:" form-control-label",attrs:{"for":"text-input"}},[_vm._v("Name")])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"card-header"},[_c('strong',[_vm._v("All Main Sections")])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('thead',[_c('tr',[_c('td',[_vm._v("Id")]),_vm._v(" "),_c('td',[_vm._v("Name")]),_vm._v(" "),_c('td',[_vm._v("Sub categories")]),_vm._v(" "),_c('td',[_vm._v("Edit")]),_vm._v(" "),_c('td',[_vm._v("Delete")])])])}]
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),

/***/ 58:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_main_sections_vue__ = __webpack_require__(981);
/* empty harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_384f5486_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_main_sections_vue__ = __webpack_require__(1111);
function injectStyle (ssrContext) {
  __webpack_require__(1105)
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
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_384f5486_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_main_sections_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ 981:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__models_editMainSec__ = __webpack_require__(1107);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
                    this.errorMeg = null;
                    this.axios.post('api/admin/categories', this.mainSection).then(response => {
                         if (response.status == 200) {
                              if (response.data.status == true) {
                                   this.dataAdedd = true;
                                   let self = this;
                                   setTimeout(function () {
                                        self.reset();
                                   }, 2000);
                              } else {
                                   this.errorMeg = response.data.msg;
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

/***/ 982:
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
                    this.errorMeg = null;
                    this.axios.put(`api/admin/categories/${this.categoryId}`, this.mainSection).then(response => {
                         if (response.status == 200) {
                              if (response.data.status == true) {
                                   this.dataAdedd = true;
                                   this.isUpdate = true;
                                   let self = this;
                                   setTimeout(function () {
                                        self.reset();
                                        self.closeEditModal();
                                   }, 2000);
                              } else {
                                   this.errorMeg = response.data.msg;
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
//# sourceMappingURL=9.build.js.map