webpackJsonp([11],{

/***/ 1003:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__models_editBanners__ = __webpack_require__(1180);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
     components: { EditModal: __WEBPACK_IMPORTED_MODULE_0__models_editBanners__["a" /* default */] },
     data() {
          return {
               banners: {
                    items: []
               },
               banner: {
                    name: '',
                    url: '',
                    image: ''
               },
               loading: false,
               file: '',
               imageData: "",
               bannerId: null,
               errorMessage: '',
               dataAdedd: false,
               formData: null,
               showModal: false,
               pageNum: 1,
               total_pages: null
          };
     },
     mounted() {
          this.loadAllData();
     },
     methods: {
          loadAllData() {
               this.axios.get(`api/admin/banners?page=${this.pageNum}`).then(response => {
                    if (response.status == 200) {
                         if (response.data.status == true) {
                              this.banners = response.data.data;
                              this.total_pages = response.data.data.paginate.total_pages;
                         }
                    }
               });
          },
          handlePgnation(pageNum) {
               this.pageNum = pageNum;
               this.loadAllData();
          },
          showEditModal(bannerId) {
               this.showModal = true;
               this.bannerId = bannerId;
          },
          closeEditModal(isUpdate) {
               this.showModal = !this.showModal;
               if (isUpdate) {
                    console.log('isUpdate', isUpdate);
                    this.loadAllData();
               }
          },
          handleSubmit() {
               if (this.banner.name && this.banner.url && this.file) {
                    this.loading = true;
                    this.errorMessage = "";
                    let formData = new FormData();
                    formData.set('name', this.banner.name);
                    formData.set('url', this.banner.url);
                    formData.set('image', this.file);
                    this.formData = formData;
                    const config = {
                         headers: {
                              "Content-Type": "multipart/form-data"
                         }
                    };

                    this.axios.post('api/admin/banners', this.formData, config).then(response => {
                         if (response.status == 200) {
                              if (response.data.status == true) {
                                   let self = this;
                                   this.loading = false;
                                   this.dataAdedd = true;
                                   setTimeout(function () {
                                        self.reset();
                                        self.loadAllData();
                                   }, 2000);
                              } else {
                                   this.errorMessage = response.data.msg;
                                   this.loading = false;
                              }
                         }
                         console.log(response.data);
                    });
               }
          },
          handleFileUpload: function () {
               let self = this;
               this.file = this.$refs.file.files[0];
               // Ensure that you have a file before attempting to read it
               if (this.$refs.file && this.$refs.file.files[0]) {

                    // create a new FileReader to read this image and convert to base64 format
                    var reader = new FileReader();
                    // Define a callback function to run, when FileReader finishes its job
                    reader.onload = e => {
                         // Note: arrow function used here, so that "this.imageData" refers to the imageData of Vue component
                         // Read image as base64 and set to imageData
                         self.imageData = e.target.result;
                    };
                    // Start the reader job - read file as a data url (base64 format)
                    reader.readAsDataURL(self.$refs.file.files[0]);
               }
          },
          deleteItem(itemId) {
               let r = confirm("Are you sure to delete this banner ?");
               if (r == true) {
                    this.axios.delete(`api/admin/banners/${itemId}`).then(response => {
                         if (response.status == 200) {
                              if (response.data.status == true) {
                                   this.loadAllData();
                              }
                         }
                    });
               }
          },
          reset() {
               this.banner = {
                    name: '',
                    url: '',
                    image: ''
               };
               this.file = '';
               this.imageData = "";
               this.errorMessage = false;
               this.dataAdedd = false;
          }
     }
});

/***/ }),

/***/ 1004:
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

/* harmony default export */ __webpack_exports__["a"] = ({
     props: ['bannerId'],
     data() {
          return {
               banner: {
                    name: '',
                    url: '',
                    image: ''
               },
               loading: false,
               file: '',
               imageData: "",
               confirmPassword: null,
               errorMessage: '',
               dataAdedd: false,
               formData: null,
               isUpdate: false
          };
     },
     mounted() {
          this.loadAllData();
     },
     methods: {
          loadAllData() {
               if (this.bannerId) {
                    this.axios.get(`api/admin/banners/${this.bannerId}`).then(response => {
                         if (response.status == 200) {
                              if (response.data.status == true) {
                                   let banner = response.data.data;
                                   this.banner.name = banner.name;
                                   this.banner.url = banner.url;
                                   this.imageData = banner.image;
                              }
                         }
                    });
               }
          },
          closeEditModal() {
               this.$emit("closeModalEvent", this.isUpdate);
          },
          handleSubmit() {
               if (this.banner.name && this.banner.url) {
                    this.loading = true;
                    let formData = new FormData();
                    formData.set('name', this.banner.name);
                    formData.set('url', this.banner.url);
                    if (this.imageData && this.file) {
                         formData.set('image', this.file);
                    }
                    formData.append('_method', 'PUT');
                    this.formData = formData;
                    const config = {
                         headers: {
                              "Content-Type": "multipart/form-data"
                         }
                    };
                    this.axios.post(`api/admin/banners/${this.bannerId}`, this.formData, config).then(response => {
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
                                   this.errorMessage = response.data.msg;
                                   this.loading = false;
                              }
                         }
                         console.log(response.data);
                    });
               }
          },
          handleFileUpload: function () {
               let self = this;
               this.file = this.$refs.file.files[0];
               // Ensure that you have a file before attempting to read it
               if (this.$refs.file && this.$refs.file.files[0]) {

                    // create a new FileReader to read this image and convert to base64 format
                    var reader = new FileReader();
                    // Define a callback function to run, when FileReader finishes its job
                    reader.onload = e => {
                         // Note: arrow function used here, so that "this.imageData" refers to the imageData of Vue component
                         // Read image as base64 and set to imageData
                         self.imageData = e.target.result;
                    };
                    // Start the reader job - read file as a data url (base64 format)
                    reader.readAsDataURL(self.$refs.file.files[0]);
               }
          },
          reset() {
               this.banner = {
                    name: '',
                    url: '',
                    image: ''
               };
               this.file = '';
               this.imageData = "";
               this.errorMessage = false;
               this.dataAdedd = false;
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
var update = __webpack_require__(3)("01c00d41", content, true, {});

/***/ }),

/***/ 1179:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(false);
// imports


// module
exports.push([module.i, "img.preview{background-color:#fff;border:1px solid #ddd;height:200px;width:auto;border-radius:5px}.custom-file-label{left:14px}.banner-img{width:auto;height:60px}", ""]);

// exports


/***/ }),

/***/ 1180:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_editBanners_vue__ = __webpack_require__(1004);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_46391594_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_editBanners_vue__ = __webpack_require__(1183);
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
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_editBanners_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_46391594_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_editBanners_vue__["a" /* default */],
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
var update = __webpack_require__(3)("910de1cc", content, true, {});

/***/ }),

/***/ 1182:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(false);
// imports


// module
exports.push([module.i, ".modal-mask{position:fixed;z-index:9998;top:0;left:0;width:100%;height:100%;background-color:rgba(0,0,0,.5);display:table;transition:opacity .3s ease}.modal-wrapper{display:table-cell;vertical-align:middle}", ""]);

// exports


/***/ }),

/***/ 1183:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"modal-mask"},[_c('div',{staticClass:"modal-wrapper"},[_c('div',{staticClass:"modal fade show d-block",attrs:{"id":"exampleModalCenter","tabindex":"-1","role":"dialog","aria-labelledby":"exampleModalCenterTitle","aria-hidden":"true"}},[_c('div',{staticClass:"modal-dialog modal-dialog-centered modal-lg",attrs:{"role":"document"}},[_c('div',{staticClass:"modal-content"},[_c('div',{staticClass:"modal-header"},[_c('h5',{staticClass:"modal-title display-5",attrs:{"id":"exampleModalLongTitle"}},[_vm._v("Edit Banner")]),_vm._v(" "),_c('button',{staticClass:"close",attrs:{"type":"button","data-dismiss":"modal","aria-label":"Close"},on:{"click":_vm.closeEditModal}},[_c('span',{attrs:{"aria-hidden":"true"}},[_vm._v("×")])])]),_vm._v(" "),_c('div',{staticClass:"modal-body"},[_c('div',{staticClass:"card"},[_c('div',{staticClass:"card-body card-block"},[_c('form',{staticClass:"form-horizontal",on:{"submit":function($event){$event.preventDefault();return _vm.handleSubmit($event)}}},[_c('div',{staticClass:"row"},[_c('div',{staticClass:"col-12 col-md-6"},[_c('div',{staticClass:"row form-group"},[_vm._m(0),_vm._v(" "),_c('div',{staticClass:"col-12 col-md-9"},[_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.banner.name),expression:"banner.name"}],staticClass:"form-control",attrs:{"type":"text","id":"text-input","name":"text-input","placeholder":"Name","required":""},domProps:{"value":(_vm.banner.name)},on:{"input":function($event){if($event.target.composing){ return; }_vm.$set(_vm.banner, "name", $event.target.value)}}})])])]),_vm._v(" "),_c('div',{staticClass:"col-12 col-md-6"},[_c('div',{staticClass:"row form-group"},[_vm._m(1),_vm._v(" "),_c('div',{staticClass:"col-12 col-md-9"},[_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.banner.url),expression:"banner.url"}],staticClass:"form-control",attrs:{"type":"text","id":"email-input","name":"email-input","placeholder":"Enter Url","required":""},domProps:{"value":(_vm.banner.url)},on:{"input":function($event){if($event.target.composing){ return; }_vm.$set(_vm.banner, "url", $event.target.value)}}})])])])]),_vm._v(" "),_c('div',{staticClass:"row"},[_c('div',{staticClass:"col-12 col-md-9"},[_c('div',{staticClass:"row form-group"},[_vm._m(2),_vm._v(" "),_c('div',{staticClass:"col-12 col-md-9"},[_c('div',{staticClass:"row"},[_c('div',{staticClass:"col-6"},[_c('input',{ref:"file",staticClass:"form-control custom-file-input form-control-file",attrs:{"type":"file","id":"file-input","name":"file-input","accept":"image/*"},on:{"change":_vm.handleFileUpload}}),_vm._v(" "),_c('label',{staticClass:"custom-file-label",attrs:{"for":"customFile"}},[_vm._v("Choose photo")])]),_vm._v(" "),_c('div',{staticClass:"col-6"},[(_vm.imageData.length > 0)?_c('div',{staticClass:"image-preview"},[_c('img',{staticClass:"preview",attrs:{"src":_vm.imageData}})]):_vm._e()])])])])])]),_vm._v(" "),_c('button',{staticClass:"btn btn-success w-50 d-block mx-auto mt-5",attrs:{"type":"submit"}},[_vm._v(" Add Banner"),(_vm.loading)?_c('span',[_vm._v(" Loading...")]):_vm._e()])]),_vm._v(" "),(_vm.dataAdedd)?_c('basix-alert',{staticClass:"col-6 mx-auto mt-4",attrs:{"type":"success","withCloseBtn":true}},[_c('span',{staticClass:"badge badge-pill badge-success"},[_vm._v("Success")]),_vm._v("\n                                             Data Added Successfully\n                                        ")]):_vm._e(),_vm._v(" "),(_vm.errorMessage)?_c('basix-alert',{staticClass:"col-12 col-md-6 mx-auto mt-4 text-center",attrs:{"type":"danger","withCloseBtn":true}},[_c('span',{staticClass:"badge badge-pill badge-danger"},[_vm._v(_vm._s(_vm.errorMessage))])]):_vm._e()],1)])])])])])])])}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"col col-md-3"},[_c('label',{staticClass:" form-control-label",attrs:{"for":"text-input"}},[_vm._v("Name")])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"col col-md-2"},[_c('label',{staticClass:" form-control-label",attrs:{"for":"email-input"}},[_vm._v("Url")])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"col col-md-2"},[_c('label',{staticClass:" form-control-label",attrs:{"for":"file-input"}},[_vm._v("Photo")])])}]
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),

/***/ 1184:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('section',[_c('div',{staticClass:"animated fadeIn"},[_c('div',{staticClass:"row"},[_c('div',{staticClass:"col-10 mx-auto"},[_c('div',{staticClass:"card"},[_vm._m(0),_vm._v(" "),_c('div',{staticClass:"card-body card-block"},[_c('form',{staticClass:"form-horizontal",on:{"submit":function($event){$event.preventDefault();return _vm.handleSubmit($event)}}},[_c('div',{staticClass:"row"},[_c('div',{staticClass:"col-12 col-md-6"},[_c('div',{staticClass:"row form-group"},[_vm._m(1),_vm._v(" "),_c('div',{staticClass:"col-12 col-md-9"},[_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.banner.name),expression:"banner.name"}],staticClass:"form-control",attrs:{"type":"text","id":"text-input","name":"text-input","placeholder":"Name","required":""},domProps:{"value":(_vm.banner.name)},on:{"input":function($event){if($event.target.composing){ return; }_vm.$set(_vm.banner, "name", $event.target.value)}}})])])]),_vm._v(" "),_c('div',{staticClass:"col-12 col-md-6"},[_c('div',{staticClass:"row form-group"},[_vm._m(2),_vm._v(" "),_c('div',{staticClass:"col-12 col-md-9"},[_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.banner.url),expression:"banner.url"}],staticClass:"form-control",attrs:{"type":"text","id":"email-input","name":"email-input","placeholder":"Enter Url","required":""},domProps:{"value":(_vm.banner.url)},on:{"input":function($event){if($event.target.composing){ return; }_vm.$set(_vm.banner, "url", $event.target.value)}}})])])])]),_vm._v(" "),_c('div',{staticClass:"row"},[_c('div',{staticClass:"col-12 col-md-9"},[_c('div',{staticClass:"row form-group"},[_vm._m(3),_vm._v(" "),_c('div',{staticClass:"col-12 col-md-9"},[_c('div',{staticClass:"row"},[_c('div',{staticClass:"col-6"},[_c('input',{ref:"file",staticClass:"form-control custom-file-input form-control-file",attrs:{"type":"file","id":"file-input","name":"file-input","accept":"image/*","required":""},on:{"change":_vm.handleFileUpload}}),_vm._v(" "),_c('label',{staticClass:"custom-file-label",attrs:{"for":"customFile"}},[_vm._v("Choose photo")])]),_vm._v(" "),_c('div',{staticClass:"col-6"},[(_vm.imageData.length > 0)?_c('div',{staticClass:"image-preview"},[_c('img',{staticClass:"preview",attrs:{"src":_vm.imageData}})]):_vm._e()])])])])])]),_vm._v(" "),_c('button',{staticClass:"btn btn-success w-50 d-block mx-auto mt-5",attrs:{"type":"submit"}},[_vm._v(" Add Banner"),(_vm.loading)?_c('span',[_vm._v(" Loading...")]):_vm._e()])]),_vm._v(" "),(_vm.dataAdedd)?_c('basix-alert',{staticClass:"col-6 mx-auto mt-4",attrs:{"type":"success","withCloseBtn":true}},[_c('span',{staticClass:"badge badge-pill badge-success"},[_vm._v("Success")]),_vm._v("\n                                   Data Added Successfully\n                              ")]):_vm._e(),_vm._v(" "),(_vm.errorMessage)?_c('basix-alert',{staticClass:"col-12 col-md-6 mx-auto mt-4 text-center",attrs:{"type":"danger","withCloseBtn":true}},[_c('span',{staticClass:"badge badge-pill badge-danger"},[_vm._v(_vm._s(_vm.errorMessage))])]):_vm._e()],1)]),_vm._v(" "),(_vm.banners.items.length)?_c('div',{staticClass:"card"},[_vm._m(4),_vm._v(" "),_c('div',{staticClass:"card-body card-block"},[_c('table',{staticClass:"table table-striped first-td-padding border-table"},[_vm._m(5),_vm._v(" "),_c('tbody',_vm._l((_vm.banners.items),function(banner){return _c('tr',{key:banner.id},[_c('td',[_vm._v(_vm._s(banner.id))]),_vm._v(" "),_c('td',[_vm._v(_vm._s(banner.name))]),_vm._v(" "),_c('td',[_vm._v(_vm._s(banner.url))]),_vm._v(" "),_c('td',[_c('img',{staticClass:"banner-img",attrs:{"src":banner.image}})]),_vm._v(" "),_c('td',{on:{"click":function($event){return _vm.showEditModal(banner.id)}}},[_c('button',{staticClass:"btn btn-info",attrs:{"type":"button"}},[_vm._v("Edit")])]),_vm._v(" "),_c('td',{on:{"click":function($event){return _vm.deleteItem(banner.id)}}},[_c('button',{staticClass:"btn btn-danger",attrs:{"type":"button"}},[_vm._v("Delete")])])])}),0)]),_vm._v(" "),(_vm.total_pages > 1)?_c('nav',{ref:"reference",staticClass:"mt-4"},[_c('paginate',{attrs:{"page-count":_vm.total_pages,"margin-pages":2,"click-handler":_vm.handlePgnation,"prev-text":'Prev',"next-text":'Next',"container-class":'pagination justify-content-center',"active-class":"active","page-class":'page-item',"page-link-class":'page-link',"prev-class":'page-item',"prev-link-class":'page-link',"next-link-class":'page-link',"next-class":'page-item'}})],1):_vm._e()])]):_vm._e()])])]),_vm._v(" "),_c('transition',{attrs:{"enter-active-class":"animated fadeIn"}},[(_vm.showModal)?_c('EditModal',{key:_vm.showModal,attrs:{"bannerId":_vm.bannerId},on:{"closeModalEvent":_vm.closeEditModal}}):_vm._e()],1)],1)}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"card-header"},[_c('strong',[_vm._v("Banners")])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"col col-md-3"},[_c('label',{staticClass:" form-control-label",attrs:{"for":"text-input"}},[_vm._v("Name")])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"col col-md-2"},[_c('label',{staticClass:" form-control-label",attrs:{"for":"email-input"}},[_vm._v("Url")])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"col col-md-2"},[_c('label',{staticClass:" form-control-label",attrs:{"for":"file-input"}},[_vm._v("Photo")])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"card-header"},[_c('strong',[_vm._v("All banners")])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('thead',[_c('tr',[_c('td',[_vm._v("Id")]),_vm._v(" "),_c('td',[_vm._v("Name")]),_vm._v(" "),_c('td',[_vm._v("url")]),_vm._v(" "),_c('td',[_vm._v("image")]),_vm._v(" "),_c('td',[_vm._v("edit")]),_vm._v(" "),_c('td',[_vm._v("delete")])])])}]
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),

/***/ 64:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_banners_vue__ = __webpack_require__(1003);
/* empty harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_5fe4a761_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_banners_vue__ = __webpack_require__(1184);
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
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_banners_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_5fe4a761_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_banners_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ })

});
//# sourceMappingURL=11.build.js.map