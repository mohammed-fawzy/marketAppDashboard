webpackJsonp([8],{

/***/ 1091:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1092);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(3)("3f369fba", content, true, {});

/***/ }),

/***/ 1092:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(false);
// imports


// module
exports.push([module.i, ".border-table{border:1px solid #dee2e6}", ""]);

// exports


/***/ }),

/***/ 1093:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_editManger_vue__ = __webpack_require__(978);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_623097da_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_editManger_vue__ = __webpack_require__(1096);
function injectStyle (ssrContext) {
  __webpack_require__(1094)
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
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_editManger_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_623097da_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_editManger_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 1094:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1095);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(3)("2f66657f", content, true, {});

/***/ }),

/***/ 1095:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(false);
// imports


// module
exports.push([module.i, ".modal-mask{position:fixed;z-index:9998;top:0;left:0;width:100%;height:100%;background-color:rgba(0,0,0,.5);display:table;transition:opacity .3s ease}.modal-wrapper{display:table-cell;vertical-align:middle}", ""]);

// exports


/***/ }),

/***/ 1096:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"modal-mask"},[_c('div',{staticClass:"modal-wrapper"},[_c('div',{staticClass:"modal fade show d-block",attrs:{"id":"exampleModalCenter","tabindex":"-1","role":"dialog","aria-labelledby":"exampleModalCenterTitle","aria-hidden":"true"}},[_c('div',{staticClass:"modal-dialog modal-dialog-centered modal-lg",attrs:{"role":"document"}},[_c('div',{staticClass:"modal-content"},[_c('div',{staticClass:"modal-header"},[_c('h5',{staticClass:"modal-title display-5",attrs:{"id":"exampleModalLongTitle"}},[_vm._v("Edit manger")]),_vm._v(" "),_c('button',{staticClass:"close",attrs:{"type":"button","data-dismiss":"modal","aria-label":"Close"},on:{"click":_vm.closeEditModal}},[_c('span',{attrs:{"aria-hidden":"true"}},[_vm._v("×")])])]),_vm._v(" "),_c('div',{staticClass:"modal-body"},[_c('div',{staticClass:"card"},[_c('div',{staticClass:"card-body card-block"},[_c('form',{staticClass:"form-horizontal",on:{"submit":function($event){$event.preventDefault();return _vm.handleSubmit($event)}}},[_c('div',{staticClass:"row"},[_c('div',{staticClass:"col-12 col-md-6"},[_c('div',{staticClass:"row form-group"},[_vm._m(0),_vm._v(" "),_c('div',{staticClass:"col-12 col-md-9"},[_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.manger.name),expression:"manger.name"}],staticClass:"form-control",attrs:{"type":"text","id":"text-input","name":"text-input","placeholder":"Name","required":""},domProps:{"value":(_vm.manger.name)},on:{"input":function($event){if($event.target.composing){ return; }_vm.$set(_vm.manger, "name", $event.target.value)}}})])])]),_vm._v(" "),_c('div',{staticClass:"col-12 col-md-6"},[_c('div',{staticClass:"row form-group"},[_vm._m(1),_vm._v(" "),_c('div',{staticClass:"col-12 col-md-9"},[_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.manger.email),expression:"manger.email"}],staticClass:"form-control",attrs:{"type":"email","id":"email-input","name":"email-input","placeholder":"Enter Email","required":""},domProps:{"value":(_vm.manger.email)},on:{"input":function($event){if($event.target.composing){ return; }_vm.$set(_vm.manger, "email", $event.target.value)}}})])])])]),_vm._v(" "),_c('div',{staticClass:"row"},[_c('div',{staticClass:"col-12 col-md-6"},[_c('div',{staticClass:"row form-group"},[_vm._m(2),_vm._v(" "),_c('div',{staticClass:"col-12 col-md-9"},[_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.manger.password),expression:"manger.password"}],staticClass:"form-control",attrs:{"type":"password","id":"password-input","name":"password-input","placeholder":"Password"},domProps:{"value":(_vm.manger.password)},on:{"input":function($event){if($event.target.composing){ return; }_vm.$set(_vm.manger, "password", $event.target.value)}}})])])]),_vm._v(" "),_c('div',{staticClass:"col-12 col-md-6"},[_c('div',{staticClass:"row form-group"},[_vm._m(3),_vm._v(" "),_c('div',{staticClass:"col-12 col-md-9"},[_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.manger.password_confirmation),expression:"manger.password_confirmation"}],staticClass:"form-control",attrs:{"type":"password","id":"confirm-password-input","name":"confirm-password-input","placeholder":"Confirm Password"},domProps:{"value":(_vm.manger.password_confirmation)},on:{"blur":_vm.validate,"input":function($event){if($event.target.composing){ return; }_vm.$set(_vm.manger, "password_confirmation", $event.target.value)}}}),_vm._v(" "),(!_vm.validate())?_c('div',{staticClass:"alert alert-danger mt-2",attrs:{"role":"alert"}},[_vm._v("\n                                                                      Passwords don't match. Please enter both fields again.\n                                                                 ")]):_vm._e()])])])]),_vm._v(" "),_c('input',{staticClass:"btn btn-success w-50 d-block mx-auto mt-2",attrs:{"type":"submit","value":"Submit"},on:{"click":_vm.handleSubmit}})]),_vm._v(" "),(_vm.dataAdedd)?_c('basix-alert',{staticClass:"col-6 mx-auto mt-4",attrs:{"type":"success","withCloseBtn":true}},[_c('span',{staticClass:"badge badge-pill badge-success"},[_vm._v("Success")]),_vm._v("\n                                             Data Added Successfully\n                                        ")]):_vm._e(),_vm._v(" "),(_vm.errorMeg)?_c('basix-alert',{staticClass:"col-12 col-md-6 mx-auto mt-4 text-center",attrs:{"type":"danger","withCloseBtn":true}},[_c('span',{staticClass:"badge badge-pill badge-danger"},[_vm._v(_vm._s(_vm.errorMeg))])]):_vm._e()],1)])])])])])])])}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"col col-md-3"},[_c('label',{staticClass:" form-control-label",attrs:{"for":"text-input"}},[_vm._v("Name")])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"col col-md-3"},[_c('label',{staticClass:" form-control-label",attrs:{"for":"email-input"}},[_vm._v("Email")])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"col col-md-3"},[_c('label',{staticClass:" form-control-label",attrs:{"for":"password-input"}},[_vm._v("Password")])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"col col-md-3"},[_c('label',{staticClass:" form-control-label",attrs:{"for":"confirm-password-input"}},[_vm._v("Password")])])}]
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),

/***/ 1097:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('section',[_c('div',{staticClass:"animated fadeIn"},[_c('div',{staticClass:"row"},[_c('div',{staticClass:"col-10 mx-auto"},[_c('div',{staticClass:"card"},[_vm._m(0),_vm._v(" "),_c('div',{staticClass:"card-body card-block"},[_c('form',{staticClass:"form-horizontal",on:{"submit":function($event){$event.preventDefault();return _vm.handleSubmit($event)}}},[_c('div',{staticClass:"row"},[_c('div',{staticClass:"col-12 col-md-6"},[_c('div',{staticClass:"row form-group"},[_vm._m(1),_vm._v(" "),_c('div',{staticClass:"col-12 col-md-9"},[_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.manger.name),expression:"manger.name"}],staticClass:"form-control",attrs:{"type":"text","id":"text-input","name":"text-input","placeholder":"Name","required":""},domProps:{"value":(_vm.manger.name)},on:{"input":function($event){if($event.target.composing){ return; }_vm.$set(_vm.manger, "name", $event.target.value)}}})])])]),_vm._v(" "),_c('div',{staticClass:"col-12 col-md-6"},[_c('div',{staticClass:"row form-group"},[_vm._m(2),_vm._v(" "),_c('div',{staticClass:"col-12 col-md-9"},[_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.manger.email),expression:"manger.email"}],staticClass:"form-control",attrs:{"type":"email","id":"email-input","name":"email-input","placeholder":"Enter Email","required":""},domProps:{"value":(_vm.manger.email)},on:{"input":function($event){if($event.target.composing){ return; }_vm.$set(_vm.manger, "email", $event.target.value)}}})])])])]),_vm._v(" "),_c('div',{staticClass:"row"},[_c('div',{staticClass:"col-12 col-md-6"},[_c('div',{staticClass:"row form-group"},[_vm._m(3),_vm._v(" "),_c('div',{staticClass:"col-12 col-md-9"},[_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.manger.password),expression:"manger.password"}],staticClass:"form-control",attrs:{"type":"password","id":"password-input","name":"password-input","placeholder":"Password","required":""},domProps:{"value":(_vm.manger.password)},on:{"input":function($event){if($event.target.composing){ return; }_vm.$set(_vm.manger, "password", $event.target.value)}}})])])]),_vm._v(" "),_c('div',{staticClass:"col-12 col-md-6"},[_c('div',{staticClass:"row form-group"},[_vm._m(4),_vm._v(" "),_c('div',{staticClass:"col-12 col-md-9"},[_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.manger.password_confirmation),expression:"manger.password_confirmation"}],staticClass:"form-control",attrs:{"type":"password","id":"confirm-password-input","name":"confirm-password-input","placeholder":"Confirm Password","required":""},domProps:{"value":(_vm.manger.password_confirmation)},on:{"blur":_vm.validate,"input":function($event){if($event.target.composing){ return; }_vm.$set(_vm.manger, "password_confirmation", $event.target.value)}}}),_vm._v(" "),(!_vm.validate())?_c('div',{staticClass:"alert alert-danger mt-2",attrs:{"role":"alert"}},[_vm._v("\n                                                            Passwords don't match. Please enter both fields again.\n                                                       ")]):_vm._e()])])])]),_vm._v(" "),_c('input',{staticClass:"btn btn-success w-50 d-block mx-auto mt-2",attrs:{"type":"submit","value":"Add manager"},on:{"click":_vm.handleSubmit}})]),_vm._v(" "),(_vm.dataAdedd)?_c('basix-alert',{staticClass:"col-6 mx-auto mt-4",attrs:{"type":"success","withCloseBtn":true}},[_c('span',{staticClass:"badge badge-pill badge-success"},[_vm._v("Success")]),_vm._v("\n                                   Data Added Successfully\n                              ")]):_vm._e(),_vm._v(" "),(_vm.errorMeg)?_c('basix-alert',{staticClass:"col-12 col-md-6 mx-auto mt-4 text-center",attrs:{"type":"danger","withCloseBtn":true}},[_c('span',{staticClass:"badge badge-pill badge-danger"},[_vm._v(_vm._s(_vm.errorMeg))])]):_vm._e()],1)]),_vm._v(" "),(_vm.admins.items.length)?_c('div',{staticClass:"card"},[_vm._m(5),_vm._v(" "),_c('div',{staticClass:"card-body card-block"},[_c('table',{staticClass:"table table-striped first-td-padding border-table"},[_vm._m(6),_vm._v(" "),_c('tbody',_vm._l((_vm.admins.items),function(admin){return _c('tr',{key:admin.id},[_c('td',[_vm._v(_vm._s(admin.id))]),_vm._v(" "),_c('td',[_vm._v(_vm._s(admin.name))]),_vm._v(" "),_c('td',[_vm._v(_vm._s(admin.email))]),_vm._v(" "),_c('td',{on:{"click":function($event){return _vm.showEditModal(admin.id)}}},[_c('button',{staticClass:"btn btn-info",attrs:{"type":"button"}},[_vm._v("Edit")])])])}),0)]),_vm._v(" "),(_vm.total_pages > 1)?_c('nav',{ref:"reference",staticClass:"mt-4"},[_c('paginate',{attrs:{"page-count":_vm.total_pages,"margin-pages":2,"click-handler":_vm.handlePgnation,"prev-text":'Prev',"next-text":'Next',"container-class":'pagination justify-content-center',"active-class":"active","page-class":'page-item',"page-link-class":'page-link',"prev-class":'page-item',"prev-link-class":'page-link',"next-link-class":'page-link',"next-class":'page-item'}})],1):_vm._e()])]):_vm._e()])])]),_vm._v(" "),_c('transition',{attrs:{"enter-active-class":"animated fadeIn"}},[(_vm.showModal)?_c('EditModal',{key:_vm.showModal,attrs:{"mangerId":_vm.mangerId},on:{"closeModalEvent":_vm.closeEditModal}}):_vm._e()],1)],1)}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"card-header"},[_c('strong',[_vm._v("Add manager")])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"col col-md-3"},[_c('label',{staticClass:" form-control-label",attrs:{"for":"text-input"}},[_vm._v("Name")])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"col col-md-3"},[_c('label',{staticClass:" form-control-label",attrs:{"for":"email-input"}},[_vm._v("Email")])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"col col-md-3"},[_c('label',{staticClass:" form-control-label",attrs:{"for":"password-input"}},[_vm._v("Password")])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"col col-md-3"},[_c('label',{staticClass:" form-control-label",attrs:{"for":"confirm-password-input"}},[_vm._v("Password")])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"card-header"},[_c('strong',[_vm._v("All managers")])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('thead',[_c('tr',[_c('td',[_vm._v("Id")]),_vm._v(" "),_c('td',[_vm._v("Name")]),_vm._v(" "),_c('td',[_vm._v("Email")]),_vm._v(" "),_c('td',[_vm._v("Edit")])])])}]
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),

/***/ 56:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_managers_vue__ = __webpack_require__(977);
/* empty harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_f1289a06_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_managers_vue__ = __webpack_require__(1097);
function injectStyle (ssrContext) {
  __webpack_require__(1091)
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
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_managers_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_f1289a06_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_managers_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ 977:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__models_editManger__ = __webpack_require__(1093);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
     components: { EditModal: __WEBPACK_IMPORTED_MODULE_0__models_editManger__["a" /* default */] },
     data() {
          return {
               admins: {
                    items: []
               },
               total_pages: null,
               manger: {
                    name: '',
                    email: '',
                    password: null,
                    password_confirmation: null
               },
               showModal: false,
               mangerId: null,
               dataAdedd: false,
               errorMeg: "",
               pageNum: 1
          };
     },
     mounted() {
          this.loadAllData();
     },
     methods: {
          loadAllData() {
               this.axios.get(`api/admin/admins?page=${this.pageNum}`).then(response => {
                    if (response.status == 200) {
                         if (response.data.status == true) {
                              this.admins = response.data.data;
                              this.total_pages = response.data.data.paginate.total_pages;
                         }
                    }
               });
          },
          handlePgnation(pageNum) {
               this.pageNum = pageNum;
               this.loadMessages();
          },
          showEditModal(mangerId) {
               this.showModal = true;
               this.mangerId = mangerId;
          },
          closeEditModal(isUpdate) {
               this.showModal = !this.showModal;
               if (isUpdate) {
                    this.loadAllData();
               }
          },
          handleSubmit() {
               if (this.manger.name && this.manger.email && this.manger.password && this.manger.password_confirmation) {
                    this.errorMeg = '';
                    console.log('post');
                    this.axios.post('api/admin/admins', this.manger).then(response => {
                         if (response.status == 200) {
                              if (response.data.status == true) {
                                   this.dataAdedd = true;
                                   let self = this;
                                   setTimeout(function () {
                                        self.reset();
                                        self.loadAllData();
                                   }, 2000);
                              } else {
                                   this.errorMeg = response.data.msg;
                              }
                         }
                    });
               }
          },
          validate: function () {
               if (this.manger.password && this.manger.password_confirmation) {
                    return this.manger.password == this.manger.password_confirmation ? true : false;
               } else {
                    return true;
               }
          },
          reset() {
               this.manger = {
                    name: '',
                    email: '',
                    password: null,
                    password_confirmation: null
               };
               this.dataAdedd = false;
          }
     }
});

/***/ }),

/***/ 978:
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
//
//
//
//
//

/* harmony default export */ __webpack_exports__["a"] = ({
     props: ['mangerId'],
     data() {
          return {
               manger: {
                    name: '',
                    email: '',
                    password: null,
                    password_confirmation: null
               },
               dataAdedd: false,
               errorMeg: "",
               isUpdate: false
          };
     },
     mounted() {
          this.loadAllData();
     },
     methods: {
          loadAllData() {
               if (this.mangerId) {
                    this.axios.get(`api/admin/admins/${this.mangerId}`).then(response => {
                         if (response.status == 200) {
                              if (response.data.status == true) {
                                   let manger = response.data.data;
                                   this.manger.name = manger.name;
                                   this.manger.email = manger.email;
                              }
                         }
                    });
               }
          },
          closeEditModal() {
               this.$emit("closeModalEvent", this.isUpdate);
          },
          validate: function () {
               if (this.manger.password && this.manger.password_confirmation) {
                    return this.manger.password == this.manger.password_confirmation ? true : false;
               } else {
                    return true;
               }
          },
          handleSubmit() {
               if (this.manger.name && this.manger.email) {
                    this.axios.put(`api/admin/admins/${this.mangerId}`, this.manger).then(response => {
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
               this.manger = {
                    name: '',
                    email: '',
                    phone: '',
                    password: null,
                    password_confirmation: null
               };
               this.dataAdedd = false;
          }
     }
});

/***/ })

});
//# sourceMappingURL=8.build.js.map